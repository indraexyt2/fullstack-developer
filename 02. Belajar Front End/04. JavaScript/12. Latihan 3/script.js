let username, password;

document.getElementById("daftar").onclick = function() {
    // Ambil nilai username dan password dari input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Tampilkan username dan password di console
    console.log(username);
    console.log(password);

    // Mulai pengecekan password
    if (password.length < 6 || password === password.toLowerCase() || password.indexOf(' ') !== -1) {
        if (password.length < 6) {
            console.log("Password harus lebih dari 6 karakter");
        }
        if (password === password.toLowerCase()) {
            console.log("Password harus mengandung huruf besar!");
        }
        if (password.indexOf(' ') !== -1) {
            console.log("Password tidak boleh mengandung spasi");
        }
    } else {
        console.log("Password valid");
    }
}