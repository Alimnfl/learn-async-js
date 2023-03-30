// Lanjutan dari CallbackPromise, CARA 6 pakai Promise dan AWAIT,, 
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
  return new Promise((success, failed) => {
    if (!apiKey) failed('NO API KEY, Cannot Access')
      setTimeout(() => {
        success({ pic: pictures });
      }, 1500);
  })
}

async function UserDisplay() {
  try{
    const {token} = await login("alimnfl")
    const {apiKey} = await getUser(token)
    const { pic } = await getPictures(apiKey);
    
    console.log(`
    Token anda adalah': ${pic}
    Apikey anda adalah: ${apiKey}
    Data Picture anda berikut ini: ${pic}
    `)}catch(err){
    console.log(err)
  }
}

// bisa pakai try and catch untuk cek Async await
UserDisplay();






