const express = require('express');
const route = express.Router();
const noteRoute = require('../controllers/note.controller');
route.route('/').post(noteRoute.PostTitle).get(noteRoute.GetTitle);

route.route('/:id').delete(noteRoute.DeleteTitle);
module.exports = route;
