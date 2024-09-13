// function fetchUserData() {
//     return new Promise((success, failed) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(ress => {
//                 if (!ress.ok) {
//                     failed('Gagal ambil data')
//                 }
//                 return ress.json();
//             })
//             .then(user => {
//                 console.log(user)
//             })
//     })
// }

// async function UserData(){
//     let user = await fetch('https://jsonplaceholder.typicode.com/users')
//     return user.json()
//     .then(akun => {
//         console.log(akun)
//     })

// }

// UserData()

// 

let buatToken = () => { 
    return new Promise((resolve, reject) => {
        let key = Math.random().toString(36).substring(2, 15);
        setTimeout(() => {
            resolve(key);
        }, 5000);
    });
}

async function login(username, password, key, generatedKey) {
    if (username.length >= 6 && password.length >= 6 && key === generatedKey) {
        console.log('Username, Password, Key valid!');
    } else {
        console.log('Username, Password, Key tidak valid!');
    }
}

async function main() {
    let generatedKey = await buatToken();
    console.log("Generated Token:", generatedKey); // Menampilkan token di console.log
    
    let username = prompt('Masukan Username');
    let password = prompt('Masukan Password');
    let key = prompt('Masukan token');
    
    await login(username, password, key, generatedKey);
}

main();


