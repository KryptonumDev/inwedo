
require = require('esm')(module)
module.exports = require('./gatsby-node.esm.js')

const ChildProcess = require('child_process');
exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill",
  );
};