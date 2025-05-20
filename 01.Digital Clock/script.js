function updateClock() {
    const now = new Date();
    // new Date() berfungsi untuk mengambil waktu sekarang

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    /*
    pasStart() digunakan untuk menambahkan karakter di depan string agar mencapai panjang tertentu

    string.padStart(targetLength, padString)
    -targetLength: panjang akhir yang di inginkan
    padString: karakter pengisi (defaultnya spasi jika tidak diisi)
    */

    const currentTime = `${hours}:${minutes}:${seconds}`

    document.getElementById("clock").textContent = currentTime;
}

setInterval(updateClock, 1000);
updateClock();

/*
setInterval() menjalankan fungsi tertentu berulang kali dalam interval waktu tertentu (dalam milidetik)

setInterval(function, interval_in_milieconds)
fungsi akan dipanggil terus menerus setiap interval ms (100ms = 1 detik)

kegunaan dalam digital clock, artinya fungsi updateClock() dijalankan setiap 1000ms (1 detik) agar jam terus diperbarui secara real time
*/