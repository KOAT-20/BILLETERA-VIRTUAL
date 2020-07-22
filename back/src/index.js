require('dotenv').config(); /* Llamar primero */
require('./db.js');
const app = require('./app.js');

async function main () {
  await app.listen (app.get('port'));
  console.log('Server port', app.get('port'));
}

main();
