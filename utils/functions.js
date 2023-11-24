// Fetch Fachverfahren data from the API
export async function fetchFachverfahrenData() {
  try {
    const response = await fetch(`/api/fachverf/index`);

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Fachverfahrensdaten:", error);
    return null;
  }
}

// Fetch Persons data from the API
export async function fetchPersonsData() {
  try {
    const response = await fetch(`/api/persons/index`);

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Personen-Daten:", error);
    return null;
  }
}

// Fetch Servers data from the API
export async function fetchServersData() {
  try {
    const response = await fetch(`/api/servers/index`);

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Serverdaten:", error);

    return null;
  }
}

// Fetch Auswahl data from the API
export async function fetchAuswahlData() {
  try {
    const response = await fetch(`/api/servers/auswahl_data`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching Auswahl data:", error);

    return null;
  }
}

// Fetch Fachverfahren by ID from the API
export async function fetchFachverfahrenById(verfId) {
  try {
    const response = await fetch(`/api/fachverf/${verfId}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error("Fachverfahren nicht gefunden");
        return null;
      }
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      console.error("Fachverfahren nicht gefunden");
      return null;
    }

    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen von Fachverfahrensdetails:", error);
    return null;
  }
}

// Update Fachverfahren by ID through the API
export async function updateFachverfahrenById(verfId, updateData) {
  try {
    const response = await fetch(`/api/fachverf/${verfId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Fachverfahrens:", error);
    return null;
  }
}

// Create a new Fachverfahren through the API
export async function createFachverfahren(newFachverfahrenData) {
  try {
    const response = await fetch(`/api/fachverf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFachverfahrenData),
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Erstellen des Fachverfahrens:", error);
    return null;
  }
}

// Fetch Fachverf data from the API
export async function fetchFachverfData() {
  try {
    const response = await fetch(`/api/fachverfahren/fachverf`);

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Fachverf-Daten:", error);
    return null;
  }
}

// Delete Server by ID through the API
export async function deleteServerById(serverId) {
  try {
    const response = await fetch(`/api/servers/${serverId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fehler beim Löschen des Servers:", error);
    return null;
  }
}

// Fetch Server by ID from the API
export async function fetchServerById(serverId) {
  try {
    const response = await fetch(`/api/servers/${serverId}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error("Server nicht gefunden");
        return null;
      }

      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.server;
  } catch (error) {
    console.error("Fehler beim Abrufen von Serverdetails:", error);
    return null;
  }
}

// Update Server by ID through the API
export async function updateServerById(serverId, updateData) {
  try {
    const response = await fetch(`/api/servers/${serverId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Servers:", error);
    return null;
  }
}

// Create a new Server through the API
export async function createServer(newServerData) {
  try {
    const response = await fetch(`/api/servers/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newServerData),
    });

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Erstellen des Servers:", error);
    return null;
  }
}

// Function to log in and redirect to the Fachverfahren page
export function loginFunction(username, password) {
  window.location.href = "/fachverfahren";
}

// Search for persons by name through the API
export async function searchPersonsByName(name) {
  try {
    if (!name || name.length < 2) {
      return [];
    }

    const encodedName = encodeURIComponent(name);
    const response = await fetch(`/api/persons/${encodedName}`);

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.persons;
  } catch (error) {
    console.error("Fehler bei der Suche nach Personen:", error);
    return [];
  }
}

// Fetch PersonVerf data by verf_id from the API
export async function fetchPersonVerf(verf_id) {
  const apiUrl = `/api/fachverfahren/${verf_id}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen der Fachverfahren-Daten:", error);
    return null;
  }
}
