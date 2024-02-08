var audio = document.getElementById("background-music");
var volumeControl = document.getElementById("volume");
var playlistSelect = document.getElementById("playlist-select");
var timeControl = document.getElementById("time");

var musicList = [
    "Clairo - sofia [Tiktok Version].mp3",
    "Powfu - death bed (coffee for your head) ft. beabadoobee (Lyrics).mp3",
    "Lana Del Rey - Yes To Heaven Lirik Terjemahan Indonesia.mp3",
    "Lana Del Rey - Summertime Sadness (Lyrics).mp3",
    "DJ Snake - Middle (Lyrics) ft. Bipolar Sunshine.mp3",
    // Tambahkan lagu-lagu lainnya disini
];

var currentMusicIndex = 0;

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function changeVolume() {
    audio.volume = volumeControl.value;
}

function changeMusic() {
    currentMusicIndex = playlistSelect.selectedIndex;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function previousMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    updateMusicTitle();
}

function updateMusicTitle() {
    var musicTitleElement = document.querySelector('.music-title');
    musicTitleElement.textContent = "Now Playing: " + musicList[currentMusicIndex];
}

function changeTime() {
    audio.currentTime = (audio.duration * timeControl.value) / 100;
    updateTimeDisplay();
}

function updateTimeDisplay() {
    var minutes = Math.floor(audio.currentTime / 60);
    var seconds = Math.floor(audio.currentTime % 60);
    var formattedTime = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    timeControl.value = (audio.currentTime / audio.duration) * 100;
}

audio.addEventListener('timeupdate', updateTimeDisplay);

// Update display saat memulai
changeVolume();
updateMusicTitle();

// Fungsi animasi fade
function fadeIn(element) {
    element.style.opacity = 1;
}

function fadeOut(element, callback) {
    element.style.opacity = 0;
    setTimeout(callback, 1000); // Timeout set to match the CSS transition time
}

// Fungsi-fungsi untuk permainan - Bagian 1
function pertamaKaliKenal() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<h1>Pertama Kali Kenal</h1>";
    contentElement.innerHTML += "<p>Bima: Gabut banget anjir, gua enaknya ngapain ya?</p>";
    contentElement.innerHTML += "<p>Tiba-tiba ada pesan masuk dari seseorang:</p>";
    contentElement.innerHTML += "<p id='question'>X: Anak TKJ 5 bukan?</p>";
    contentElement.innerHTML += "<button onclick='jawaban1(\"iya\")'>Iya</button>";
    contentElement.innerHTML += "<button onclick='jawaban1(\"bukan\")'>Bukan</button>";
}

function jawaban1(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "iya") {
            pertanyaan2();
        } else {
            gameOver("Gimana si lo😒, katanya ingin melanjutkan game pertama kali kenal tapi malah bilang bukan?!😒 Ayo ulang lagi!");
        }
    });
}

function gameOver(message) {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Game Over: " + message + "</p>";
    contentElement.innerHTML += "<button onclick='ulang()'>Ulang</button>";
}

function pertanyaan2() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>X: Udah masuk grup?</p>";
    contentElement.innerHTML += "<button onclick='jawaban2(\"belum\")'>Belum</button>";
    contentElement.innerHTML += "<button onclick='jawaban2(\"udah\")'>Udah</button>";
}

function jawaban2(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "belum") {
            contentElement.innerHTML = "<p>Bima: Belum</p>";
            pertanyaan3();
        } else {
            gameOver("Dasar BEGO 😡, dia ngechat lu karna lu udah masuk grup atau belum malah bilang udah, ayo ulang lagi!😑");
        }
    });
}

function pertanyaan3() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>X: Yaudah, bentar gua masukin grup dulu.</p>";
    contentElement.innerHTML += "<p>X: Save back Dinda X TKJ 5</p>";
    contentElement.innerHTML += "<p>Dan disinilah aku baru tau kalau si X ini adalah Dinda.</p>";
    contentElement.innerHTML += "<p>Lalu aku membalas pesan tersebut</p>";
    contentElement.innerHTML += "<p>Bima: (Ok,thanks/Y):</p>";
    contentElement.innerHTML += "<button onclick='jawaban3(\"Ok,thanks\")'>Ok,thanks</button>";
    contentElement.innerHTML += "<button onclick='jawaban3(\"Y\")'>Y</button>";
}

function jawaban3(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "ok,thanks") {
            contentElement.innerHTML = "<p>Cerita berlanjut...</p>";
            pertanyaan4();
        } else {
            gameOver("Gak usah sok cuek bego😡😡😡, Dinda seketika ilfil karena lo sok cuek banget jadi orang😭");
        }
    });
}

// Fungsi-fungsi untuk permainan - Bagian 2
function pertanyaan4() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Dinda: Nama nya Bima bukan? Takut salah tulis nama.</p>";
    contentElement.innerHTML += "<p>Bima: Hmm, panggil aja...</p>";
    contentElement.innerHTML += "<button onclick='jawaban4(\"asep\")'>Asep</button>";
    contentElement.innerHTML += "<button onclick='jawaban4(\"jamal\")'>Jamal</button>";
    contentElement.innerHTML += "<button onclick='jawaban4(\"billy\")'>Billy</button>";
}

function jawaban4(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "asep") {
            gameOver("Seketika Dinda langsung kaget, 'Njir aneh banget! Dinda tidak suka dengan nama Asep. Kamu kalah. 😡💔");
        } else if (response.toLowerCase() === "jamal") {
            gameOver("Njir Jamal? Apaansih ni cowo freak banget deh, Dinda tidak suka dengan nama Jamal. Kamu kalah. 😡💔");
        } else if (response.toLowerCase() === "billy") {
            pertanyaan5();
        }
    });
}

function pertanyaan5() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Dinda: Tapi namanya bener Bima bukan?</p>";
    contentElement.innerHTML += "<button onclick='jawaban5(\"iya\")'>Iya</button>";
    contentElement.innerHTML += "<button onclick='jawaban5(\"bukan\")'>Bukan</button>";
}

function jawaban5(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "iya") {
            contentElement.innerHTML = "<p>Dinda: Oke</p>";
            pertanyaan6();
        } else {
            gameOver("Jelas-jelas lu sendiri yang bilang nama lu Bima Gunawan pea. Kamu kalah😡💔");
        }
    });
}

function pertanyaan6() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML += "<button onclick='jawaban6(\"yaudah\")'>Yaudah</button>";
    contentElement.innerHTML += "<button onclick='jawaban6(\"yaudah salam kenal ya\")'>Yaudah salam kenal ya</button>";
    contentElement.innerHTML += "<button onclick='jawaban6(\"okey deh\")'>Okey deh</button>";
}

function jawaban6(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "yaudah") {
            gameOver("yaelah gitu doang? ga bisa basa basi apa gimana masnya?😡💔");
        } else if (response.toLowerCase() === "yaudah salam kenal ya") {
            contentElement.innerHTML = "<p>Dinda: Iya, salam kenal juga. bima:Hmm....masa sampai sini aja si ceritanya,basa basi dulu ah</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => pertanyaan7(), 5000);  // Melanjutkan ke pertanyaan7 setelah 1 detik
        } else if (response.toLowerCase() === "okey deh") {
            gameOver("kalo lu jawab kek gini bakalan berakhir dong ceritanya,ah payah lu");
        }
    });
}



function pertanyaan7() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban7(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban7(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban7(\"woi\")'>Woi</button>";
}

function jawaban7(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        } else if (response.toLowerCase() === "p") {
            gameOver("astaga p doang?😡");
        } else if (response.toLowerCase() === "p,din") {
            pertanyaan8();
            contentElement.innerHTML = "<p>Dinda:kenapa?</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => pertanyaan8(), 5000);
        }
    });
}
function pertanyaan8() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban8(\"lu lagi apa?\")'>Lu lagi apa?</button>";
    contentElement.innerHTML += "<button onclick='jawaban8(\"itu ngumpul ada acara apaan?\")'>Itu ngumpul ada acara apaan?</button>";
    contentElement.innerHTML += "<button onclick='jawaban8(\"lu udah makan?\")'>Lu udah makan?</button>";
}

function jawaban8(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "itu ngumpul ada acara apaan?") {
            pertanyaan9();
            contentElement.innerHTML = "<p>Dinda:Ngumpul² aja biar makin akrab</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => pertanyaan9(), 5000);
        } else if (response.toLowerCase() === "lu lagi apa?") {
            gameOver("lo gimanasi ga kek gitu basa basinya😡");
        } else if (response.toLowerCase() === "lu udah makan?") {
            gameOver("hadeh basa basi lu malu malu in banget njir😡");
        }
    });
}

function pertanyaan9() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban9(\"lu ikut?\")'>Lu ikut?</button>";
    contentElement.innerHTML += "<button onclick='jawaban9(\"oh\")'>Oh</button>";
    contentElement.innerHTML += "<button onclick='jawaban9(\"ok deh\")'>Ok deh</button>";
}

function jawaban9(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "lu ikut?") {
            pertanyaan10();
            contentElement.innerHTML = "<p>dinda:gatau,bingung anjir</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => pertanyaan10(), 5000);
        } else if (response.toLowerCase() === "ok deh") {
            gameOver("udah gitu doang?gajelas banget lo asli😡");
        } else if (response.toLowerCase() === "oh") {
            gameOver("dibilang ga usah sok cuek bego banget anjir");
        }
    });
}

function pertanyaan10() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban10(\"ko bingung si,sini aku bantuin\")'>Ko bingung si,sini aku bantuin</button>";
    contentElement.innerHTML += "<button onclick='jawaban10(\"jam berapa emangnya?\")'>Jam berapa emangnya?</button>";
    contentElement.innerHTML += "<button onclick='jawaban10(\"coba lu baca lagi biar ga bingung\")'>Coba lu baca lagi biar ga bingung</button>";
}

function jawaban10(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "jam berapa emangnya?") {
            pertanyaan11();
            contentElement.innerHTML = "<p>dinda:10</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => pertanyaan11(), 5000);
        } else if (response.toLowerCase() === "ko bingung si,sini aku bantuin") {
            gameOver("njir lu serius kek gitu? baru kenal anjir.seketika dinda ilfil sama lo karna lo kaya fuck boy😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("lo siapa pea nyuruh-nyuruh dia?,inget lo baru kenal pea!");
        }
    });
}
function pertanyaan11() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban11(\"ywdh nanti kalo gua bisa gua kesana nanti share lock aja\")'>Ywdh nanti kalo gua bisa gua kesana nanti share lock aja</button>";
    contentElement.innerHTML += "<button onclick='jawaban11(\"owh\")'>Owh</button>";
    contentElement.innerHTML += "<button onclick='jawaban11(\"cuek banget si lo\")'>Cuek banget si lo</button>";
}

function jawaban11(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "ywdh nanti kalo gua bisa gua kesana nanti share lock aja") {
            selesai();
            contentElement.innerHTML = "<p>dinda:ok ok</p>";
            fadeIn(contentElement);  // Menampilkan pesan Dinda setelah fadeOut selesai
            setTimeout(() => selesai(), 5000);
        } else if (response.toLowerCase() === "owh") {
            gameOver("typing lo jelek banget an*ing pake W? harusnya oh aja bego,lagian juga siapa yang nyuruh lu singkat singkat gini??!!😡");
        } else if (response.toLowerCase() === "cuek banget si lo") {
            gameOver("wajar kali dia cuek orang dia cewek mikir dong gimana si");
        }
    });
}

function pertanyaan12() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban12(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban12(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban12(\"woi\")'>Woi</button>";
}

function jawaban12(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan13();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan13() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban13(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban13(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban13(\"woi\")'>Woi</button>";
}

function jawaban13(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan14();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan14() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban14(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban14(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban14(\"woi\")'>Woi</button>";
}

function jawaban14(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan15();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan15() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban15(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban15(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban15(\"woi\")'>Woi</button>";
}

function jawaban15(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan16();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan16() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban16(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban16(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban16(\"woi\")'>Woi</button>";
}

function jawaban16(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan17();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan17() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban17(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban17(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban17(\"woi\")'>Woi</button>";
}

function jawaban17(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan18();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}

function pertanyaan18() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban18(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban18(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban18(\"woi\")'>Woi</button>";
}

function jawaban18(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            pertanyaan19();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}
function pertanyaan19() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Bima:...?</p>";
    contentElement.innerHTML += "<button onclick='jawaban19(\"p,din\")'>P,din</button>";
    contentElement.innerHTML += "<button onclick='jawaban19(\"dinda\")'>Dinda</button>";
    contentElement.innerHTML += "<button onclick='jawaban19(\"woi\")'>Woi</button>";
}

function jawaban19(response) {
    const contentElement = document.querySelector('.content');
    fadeOut(contentElement, () => {
        if (response.toLowerCase() === "p,din") {
            selesai();
        } else if (response.toLowerCase() === "dinda") {
            gameOver("astaga salah ya ampun gimana si lu jangan sampai gua lempar sendal lu😡");
        } else if (response.toLowerCase() === "woi") {
            gameOver("ga sopan banget anj kek gitu minimal yang sopan lah-_-");
        }
    });
}
function selesai() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Selamat! Kamu berhasil menyelesaikan cerita.</p>";
    contentElement.innerHTML += "<p>Mau mengulang cerita?</p>";
    contentElement.innerHTML += "<button onclick='ulang()'>Ulang</button>";
    contentElement.innerHTML += "<button onclick='tidakUlang()'>Tidak</button>";
}

function ulang() {
    pertamaKaliKenal();
}

function tidakUlang() {
    const contentElement = document.querySelector('.content');
    fadeIn(contentElement);
    contentElement.innerHTML = "<p>Terima kasih sudah bermain!</p>";
    // Tidak perlu mengulang musik
}

// Memanggil fungsi pertama kali
pertamaKaliKenal();