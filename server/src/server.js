const app = require('./app/app');

const port = 8080;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
