// buat ngirim semua yg uda jadi satu ke google spreedsheet
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();

    function ambilJawaban(nama) {
        const opsi = document.querySelector(`input[name="${nama}"]:checked`);
        return opsi ? opsi.nextSibling.textContent.trim() :  "";
    }

    const data = {
        nama: localStorage.getItem("nama"),
        umur: localStorage.getItem("umur"),
        klub: localStorage.getItem("klub"),
        pilihan1: ambilJawaban('pilihan1'),
        pilihan2: ambilJawaban("pilihan2"),
        pilihan3: ambilJawaban("pilihan3"),
        pilihan4: ambilJawaban("pilihan4"),
        pilihan5: ambilJawaban("pilihan5"),
        pilihan6: document.querySelector("textarea").value,
        pilihan7: ambilJawaban("pilihan7"),
        pilihan8: ambilJawaban("pilihan8"),
        pilihan9: ambilJawaban("pilihan9"),
        pilihan10: ambilJawaban("pilihan10")
    };

    fetch('https://script.google.com/macros/s/AKfycby40E3pSzssIDVpSBwTlFIpytCFsncwIgV0U131BFnSP8j-ojztarqeY0M29NlibRYaUQ/exec', {
  method: 'POST',
  body: JSON.stringify({ name: 'Zuwiy' }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

});
