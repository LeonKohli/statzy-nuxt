export async function fetchFachverfahrenData() {
    try {
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/fachverf/index`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Fachverfahren data:', error);
      return null; // Return null or handle the error as needed
    }
  }

  export async function fetchPersonsData() {
    try {
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/persons/index`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching persons data:', error);
      return null; // Return null or handle the error as needed
    }
  }

  export async function fetchServersData() {
    try {
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/servers/index`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching servers data:', error);
      return null; // Return null or handle the error as needed
    }
  }

  export async function fetchAuswahlData() {
    try {
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${baseUrl}/api/servers/auswahl_data`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Auswahl data:', error);
      return null; // Return null or handle the error as needed
    }
  }
  

  export async function fetchFachverfahrenById(verfId) {
   try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/fachverf/${verfId}`);
    if (!response.ok) {
      // Handle 404 Not Found separately if needed
      if (response.status === 404) {
        console.error('Fachverfahren not found');
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Fachverfahren details:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function updateFachverfahrenById(verfId, updateData) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/fachverf/${verfId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating Fachverfahren:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function createFachverfahren(newFachverfahrenData) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/fachverf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFachverfahrenData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating Fachverfahren:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function fetchFachverfData() {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/fachverfahren/fachverf`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Fachverf data:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function deleteServerById(serverId) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/servers/${serverId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting server:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function fetchServerById(serverId) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/servers/${serverId}`);
    if (!response.ok) {
      if (response.status === 404) {
        console.error('Server not found');
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.server; // Assuming the response structure based on your endpoint
  } catch (error) {
    console.error('Error fetching server details:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function updateServerById(serverId, updateData) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/servers/${serverId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating server:', error);
    return null; // Return null or handle the error as needed
  }
}


export async function createServer(newServerData) {
  try {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/servers/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newServerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating server:', error);
    return null; // Return null or handle the error as needed
  }
}

export function loginFunction(username, password) {
  // die Überprüfung der Anmeldedaten

  // Leitet den Benutzer zur Startseite der Website
  window.location.href = '/fachverfahren';
}
