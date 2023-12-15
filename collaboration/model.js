const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collaborationSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  collaborator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  message: { type: String },
});

const Collaboration = mongoose.model('Collaboration', collaborationSchema);

module.exports = Collaboration;