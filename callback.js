//
// Cara Ke-4 - Memanggil semua Callback dengan response semuanya! => lanjutan di callbackPromise.js
const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username, callback) {
  console.log('Pemrosesan data token user now....');
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

// sebelumnya misal dia return, kalo setTimeOut mau nyala tinggal ganti callback aja
function getUser(token, callback) {
  console.log('processing apiKey now...');
  if (token)
    setTimeout(() => {
      callback({ apiKey: 'xkey123' });
    }, 500);
}

function getPictures(apiKey, callback) {
  console.log('processing picture now...');
  if (apiKey)
    setTimeout(() => {
      callback({ pic: pictures });
    }, 1500);
}

// karena ini adalah callback, maka tidak boleh pakai constanta (cara sebelumnya intinya), harus pakai function
login('Alimnfl', function (response) {
  const { token } = response;
  getUser(token, function (response) {
    const { apiKey } = response;
    console.log(apiKey);

    getPictures(apiKey, function (response) {
      const { pic } = response;
      console.log(pic);
    });
  });
});
