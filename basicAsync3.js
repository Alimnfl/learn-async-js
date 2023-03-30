//
// CARA KETIGA - DALAM CALLBACK abis tu lanjutan di CALLBACK.js
//

const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username, callback) {
  console.log('Pemrosesan data....');
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token) {
  if (token) return { apiKey: 'xkey123' };
}

function getPictures(apiKey) {
  if (apiKey) return pictures;
}

// karena ini adalah callback, maka tidak boleh pakai constanta (cara sebelumnya intinya), harus pakai function
login('Alimnfl', function (response) {
  const { token } = response;
  const apiKey = getUser(token);
  console.log({ apiKey });
});

// Manggil untuk token agar terpanggil
// login('Alimnfl', function (response) {
//   const { token } = response;
//   console.log('Token => ', token);
// });