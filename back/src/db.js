const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI
  ? process.env.MONGO_DB_URI
  : 'mongodb://localhost/W_TEST';

mongoose.connect (URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once ('open', () => {
  console.log('DB_Wallet Connect!');
});
