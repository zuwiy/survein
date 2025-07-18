// Membuat localstorage untuk dikirim ke isi survey
const data = document.getElementById('survey-form');
data.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('number').value;
    const klub = document.getElementById('klub').value;

    localStorage.setItem('nama',nama);
    localStorage.setItem('umur',umur);
    localStorage.setItem('klub',klub);

    window.location.href='survey.html';
});

