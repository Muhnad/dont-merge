const event = require('./actions');
const utils = require('./utils');

function handleRequestLabels (robot, context) {
  robot.on(event.actions, async context => {
    const {labels, head} = context.payload.pull_request;
    const hasDontMergeLabel = labels.some(label => utils.isDontMerge(label.name));
    const state = hasDontMergeLabel ? 'failure' : 'success';
    const description = hasDontMergeLabel ? 'Do not merge!' : 'Ready for review/merge';

    context.github.repos.createStatus(context.repo({
      sha: head.sha,
      target_url: 'https://github.com/apps/dont-merge',
      context: 'dont-merge',
      state,
      description
    }));
  });
}

module.exports = handleRequestLabels;
