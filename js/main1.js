const soal = document.getElementById('soal');
const clue = document.getElementById('clue');
const jawaban = document.getElementById('input');
const tombol = document.getElementById('jawab');
const ganti = document.getElementById('pindah');


// pemberitahuan
function danger() {
    const peringatan = 'SELAMAT DATANG DI QUIZ GAMES CAK RILL, APAKAH KAMU SIAP BERMAIN?! Setiap soal akan berisi 5 nyawa jika nyawa habis maka akan GAME OVER.... SELAMAT BERSENANG - SENANG.....';
    setTimeout(() => {
        alert(peringatan)
    }, 1000);
}
danger()


// variabel nyawa
const nyawaElement = document.getElementById('nyawa');
let nyawa = 5;
nyawaElement.innerHTML = nyawa;

// tombol level
const tombolBurger = document.getElementById('burger');
const kotakLevel = document.getElementById('kotakLevel');
const level1 = document.getElementById('level1');

tombolBurger.onclick = function () {
    if (tombolBurger) {
        kotakLevel.style.display = 'flex';
        setTimeout(() => {
            kotakLevel.style.display = 'none';
        }, 2000);
    }
}


// variabel soal clue dan jawaban
const isiSoal = ' Apa yang selalu basah meskipun sudah direndam air?';
const clueSoal = 'Barang ini memang dirancang untuk tidak pernah kering';
const jawabanSoal = 'tisu basah';

// isi dan clue dalam soal
soal.innerHTML = isiSoal
clue.innerHTML = clueSoal

// mengganti cursor tombol lanjut
ganti.style.cursor = 'no-drop'


// fungsi ketika tombol jawab di klik
tombol.onclick = function () {
    const hasil = jawaban.value.toLowerCase();
    if (hasil == jawabanSoal) {
        soal.innerHTML = 'JAWABAN ANDA BENAR 🎉🎉🎉'
        soal.style.color = 'green';

        ganti.style.cursor = 'pointer'

    } else if (hasil == '') {
        soal.innerHTML = 'ISI JAWABAN TERLEBIH DAHULU...';
        soal.style.color = 'blue';
        setTimeout(() => {
            soal.innerHTML = isiSoal;
            soal.style.color = 'black'
        }, 1500);

    } else {
        function sisaNyawa() {
            nyawa--;
            nyawaElement.innerHTML = nyawa;
            soal.innerHTML = 'JAWABAN ANDA SALAH!';
            soal.style.color = 'red';


            if (nyawa === 0) {
                soal.innerHTML = 'GAME OVER!';
                soal.style.color = 'black';
                tombol.disabled = true;
                jawaban.disabled = true;
                alert('GAME OVER silahlan refresh lagi')
            } 
           
        }
        sisaNyawa();

        setTimeout(() => {
            soal.innerHTML = isiSoal;
            soal.style.color = 'black';
        }, 1500);

    }

}