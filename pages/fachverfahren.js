const db = require('./database'); // Angenommen, 'database.js' ist Ihre Datenbankverbindungsdatei

// Funktion, um die SQL-Abfrage auszuführen
function getFachverfahren() {
    // Erstellen des SQL-Befehls
    const query = "SELECT name, verf_id, tag FROM fachverfahren WHERE verf_id IS NOT NULL ORDER BY name";
    
    // Ausführen der Abfrage
    return db.query(query)
        .then(result => {
            // Verarbeitung und Rückgabe der Ergebnisse
            return result.rows;
        })
        .catch(error => {
            // Fehlerbehandlung
            console.error('Fehler bei der Abfrage der Fachverfahren:', error);
            throw error;
        });
}

// Exportieren der Funktion, wenn sie in anderen Dateien verwendet werden soll
module.exports = {
    getFachverfahren
};
