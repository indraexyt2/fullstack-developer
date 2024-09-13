// // callback version
// const requestCallback = (url, success, failure) => {
// 	const delay = Math.floor(Math.random() * 4500) + 500;
// 	setTimeout(() => {
// 		if (delay > 4000) {
// 			failure('Error: Connection Timeout');
// 		} else {
// 			success(`Success: ${url} (${delay}ms)`);
// 		}
// 	}, delay);
// };

// // Promise version
// const requestPromise = (url) => {
// 	return new Promise((resolve, reject) => {
// 		const delay = Math.floor(Math.random() * 4500) + 500;
// 		setTimeout(() => {
// 			if (delay > 2000) {
// 				reject('Error: Connection Timeout');
// 			} else {
// 				resolve(`Success: ${url} (${delay}ms)`);
// 			}
// 		}, delay);
// 	});
// };

// function getUserData(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Error: Gagal mengambil data');
//             }
//             return response.json();
//         });
// }

// // Contoh penggunaan fungsi di atas
// getUserData(1)
//     .then((user) => {
//         console.log('Data pengguna:', user);
//     })
//     .catch((error) => {
//         console.error('Terjadi kesalahan:', error);
//     });

async function fetchData() {
	return "Data fetched";
  }

fetchData().then(data => 
	console.log(data)
)