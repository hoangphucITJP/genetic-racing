const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = process.env.PORT || 5000;

connect().use(serveStatic(__dirname)).listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
