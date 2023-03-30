//
//CONTOH KE 2 CONST LOG
//

const token = ~~[Math.random() * 12345678];

const pictures = ['1.jpg', '2.jpg', '3.jpg'];

function login(username) {
  setTimeout(() => {
    return { token, username };
  }, 200);
}

function getUser(token) {
  if (token) return { apiKey: 'xkey123' };
}

function getPictures(apiKey) {
  if (apiKey) return pictures;
}

const user = login('alimnfl');
console.log(user.token);

const { apiKey } = getUser(user.token);
console.log(apiKey);

const getUserPictures = getPictures(apiKey);
console.log(getUserPictures);

