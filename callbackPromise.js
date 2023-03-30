// Lanjutan dari Callback, CARA 5 pakai Promise ,, CALLBACK DI CALLBACK.js
const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  console.log('Pemrosesan data token user now....');
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'alimnfl') failed('sorry Wrong Data!');
      success({ token });
    }, 200);
  });
}

// sebelumnya misal dia return, kalo setTimeOut mau nyala tinggal ganti callback aja
function getUser(token) {
  console.log('processing apiKey now...');
  return new Promise((success, failed) => {
    if (!token) failed('token is nothing!');
    setTimeout(() => {
      success({ apiKey: 'xkey123' });
    }, 500);
  });
}

function getPictures(apiKey) {
  console.log('processing picture now...');
  if (apiKey)
    setTimeout(() => {
      return { pic: pictures };
    }, 1500);
}

const user = login('alimnfl');
user.then(function (response) {
  const { token } = response;
  getUser(token).then(function (response) {
      console.log({response});
      const { apiKey } = response;
      console.log(apiKey);
    }).catch(err => console.log(err));
}).catch(err => console.log(err));