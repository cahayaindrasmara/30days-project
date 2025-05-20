function updateClock() {
    const now = new Date();
    // new Date() berfungsi untuk mengambil waktu sekarang
    // jika di log akan menampilkan tanggal hari ini

    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    //format AM/PM
    const ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12; //convert ke 12-jam dan hindari 0
    /*
    jika hours = 12 , maka 12 % 12 === 0
    maka hours = 0 || 12, maka logika or akan memilih 12, karna o itu falsy dan 12 itu true karena ada value
    */

    /*
    pasStart() digunakan untuk menambahkan karakter di depan string agar mencapai panjang tertentu

    string.padStart(targetLength, padString)
    -targetLength: panjang akhir yang di inginkan
    padString: karakter pengisi (defaultnya spasi jika tidak diisi)
    */

    const timeString = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`

    document.getElementById("clock").textContent = timeString;

    //tampilkan tanggal
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    const dateString = now.toLocaleDateString("id-ID", options);

    /*
    toLocaleDateString("id-ID", options)
    fungsi ini mengubah date (objek waktu) menjadi string tanggal yang diformat sesuai lokal tertentu

    id-ID berarti bahasa dan format indonesia

    locales: (opsional) kode lokal, misalnya "id-ID", "en-US"
    options: (opsional) object berisi pengaturan format (seperti weekday, year, month, day), wajib berisi object
    */
    document.getElementById("date").textContent = dateString;

    //ganti tema
    const container = document.getElementById("container")
    if (now.getHours() >= 6 && now.getHours() < 18) {
        container.className = "clock-container day"
        //digunakan untuk mengatur ulang seluruh class dari element, ini bisa : menimpa semua kelas yang ada atau digunakan untuk membaca nama class
    } else {
        container.className = "clock-container night"
    }
}

setInterval(updateClock, 1000);
updateClock();

/*
setInterval() menjalankan fungsi tertentu berulang kali dalam interval waktu tertentu (dalam milidetik)

setInterval(function, interval_in_milieconds)
fungsi akan dipanggil terus menerus setiap interval ms (100ms = 1 detik)

kegunaan dalam digital clock, artinya fungsi updateClock() dijalankan setiap 1000ms (1 detik) agar jam terus diperbarui secara real time
*/