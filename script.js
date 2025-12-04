const tournamentList = document.getElementById('tournament-list');
const registerForm = document.getElementById('register-form');


let tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
let participants = JSON.parse(localStorage.getItem('participants')) || [];


function renderTournaments() {
tournamentList.innerHTML = tournaments.map(t => `<p>• ${t}</p>`).join('');
}
renderTournaments();


registerForm.addEventListener('submit', e => {
e.preventDefault();
const name = document.getElementById('name').value;
const team = document.getElementById('team').value;
participants.push({ name, team });
localStorage.setItem('participants', JSON.stringify(participants));
alert('Pendaftaran Berhasil!');
registerForm.reset();
});

