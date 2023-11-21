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

  