//================
//    PORT
//================
process.env.PORT = process.env.PORT || 5000;
//================
//    ENV
//================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//================
//    SEED TOKEN
//================
process.env.SEED = process.env.SEED || 'seed-dev';
//================
//    DATABASE
//================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/items';
    console.log('Dev database');
} else {
    urlDB = process.env.MONGO_URI;
    console.log('Prod database');
}
process.env.URLDB = urlDB;