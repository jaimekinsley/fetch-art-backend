require('dotenv').config();
require('./lib/client').connect();

const client = require('./lib/client');

const app = require('./lib/app');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

app.get('/favorites', async(req, res) => { const data = await client.query('SELECT * from favorites'); res.json(data.rows);});
