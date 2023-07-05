const modelTitle = require('../models/note.model');

const PostTitle = (req, res) => {
  const data = req.body;
  modelTitle.modelPostTitle(data, res);
};

const GetTitle = (req, res) => {
  modelTitle.modelGetTitle(req, res);
};

const DeleteTitle = (req, res) => {
  const id = req.params.id;
  modelTitle.modelDeleteTitle(id, res);
};

module.exports = { PostTitle, DeleteTitle, GetTitle };
