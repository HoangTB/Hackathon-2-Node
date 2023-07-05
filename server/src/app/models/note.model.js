const sql = require('../../libraries/database/db.connect');

const modelPostTitle = (data, res) => {
  const query = `insert into noteKeeper(title) values (?)`;
  const title = [data.title];
  sql.query(query, title, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error inserting title', err });
    }
    res.status(200).json({ message: 'insert successfully' });
  });
};

const modelGetTitle = (req, res) => {
  const query = `select * from noteKeeper`;
  sql.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error getting title', err });
    }
    res.status(200).json(result);
  });
};
const modelDeleteTitle = (id, res) => {
  const query = `delete from noteKeeper where id = ?`;
  sql.query(query, id, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting title', err });
    }
    res.status(200).json({ message: 'delete successfully' });
  });
};
module.exports = { modelPostTitle, modelDeleteTitle, modelGetTitle };
