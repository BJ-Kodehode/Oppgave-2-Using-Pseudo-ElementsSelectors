document.addEventListener('DOMContentLoaded', function() {
    const subsections = document.querySelectorAll('.underseksjoner div');
    let currentSubsectionIndex = 0;
    
    // Sett første underseksjon som aktiv ved oppstart
    subsections[currentSubsectionIndex].classList.add('aktiv');

    document.getElementById('legg-til-tekst').addEventListener('click', function() {
        const inputFelt = document.getElementById('input-felt');
        const tekst = inputFelt.value.trim();

        // Legg til tekst i aktiv underseksjon hvis det finnes tekst
        if (tekst !== '') {
            const nyTekst = document.createElement('p');
            nyTekst.textContent = tekst;
            subsections[currentSubsectionIndex].appendChild(nyTekst);
            inputFelt.value = '';
            inputFelt.focus(); // Legg til denne linjen for å sette fokus tilbake
        }

        // Fjern aktiv klasse fra nåværende seksjon
        subsections[currentSubsectionIndex].classList.remove('aktiv');
        
        // Oppdater indeks til neste seksjon
        currentSubsectionIndex = (currentSubsectionIndex + 1) % subsections.length;
        
        // Legg til aktiv klasse på ny seksjon
        subsections[currentSubsectionIndex].classList.add('aktiv');
    });

    // Sett fokus på input-felt ved lasting av siden
    document.getElementById('input-felt').focus();
});