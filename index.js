function handlePullRequestChange (robot, context) {
  robot.on([
    'pull_request.opened',
    'pull_request.edited',
    'pull_request.labeled',
    'pull_request.unlabeled',
    'pull_request.synchronize'
  ], async context => {
    const labels = context.payload.pull_request.labels
    const isDontMerge = labels.filter(prop => prop.name === 'don"t merge');

    const hasLabel = Boolean(isDontMerge.length);
    const status = hasLabel ? 'failure' : 'success';

    context.github.repos.createStatus(context.repo({
      sha: context.payload.pull_request.head.sha,
      state: status,
      target_url: 'https://github.com/apps/dont-merge',
      description: hasLabel ? 'Do not merge!' : 'Ready for review',
      context: 'dont-merge'
    }));
  });
}


module.exports = handlePullRequestChange
