const event = require('./actions');
const utils = require('./utils');

function handleRequestLabels(robot, context) {
  robot.on(event.actions, async context => {
    const { labels, head } = context.payload.pull_request;
    const hasDontMergeLabel = labels.some(label => utils.isDontMerge(label.name));
    const state = hasDontMergeLabel ? 'failure' : 'success';
    const description = hasDontMergeLabel ? 'Do not merge!' : 'Ready for merge';

    context.github.repos.createStatus(
      context.repo({
        state,
        description,
        sha: head.sha,
        target_url: process.env.APP_LINK,
        context: process.env.APP_NAME
      })
    );
  });
}

module.exports = handleRequestLabels;
