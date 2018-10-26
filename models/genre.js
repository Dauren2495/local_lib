var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
	name: {type: String, required: true, max: 100, min: 3},
});

genreSchema.virtual('url').get(function() {return '/catalog/genres/' + this._id;});

module.exports = mongoose.model('Genre', genreSchema);