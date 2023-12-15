const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectOverviewSchema = new Schema({
  project: { type: Schema.Types.ObjectId, ref: 'Project', },
  content: { type: String},
  created_by: { type: Schema.Types.ObjectId, ref: 'User'},
});

const ProjectOverview = mongoose.model('ProjectOverview', projectOverviewSchema);

module.exports = ProjectOverview;