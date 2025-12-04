const addTournamentForm = document.getElementById('add-tournament-form');
const participantList = document.getElementById('participant-list');


function renderParticipants() {
participantList.innerHTML = participants.map(p => `<p>${p.name} - ${p.team}</p>`).join('');
}
renderParticipants();


addTournamentForm.addEventListener('submit', e => {
e.preventDefault();
const name = document.getElementById('tournament-name').value;
tournaments.push(name);
localStorage.setItem('tournaments', JSON.stringify(tournaments));
alert('Turnamen Ditambahkan!');
addTournamentForm.reset();
});
