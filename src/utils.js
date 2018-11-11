exports.isDontMerge = label => process.env.DONT_MERGE_LABELS
  ? process.env.DONT_MERGE_LABELS.split(',').includes(label)
  : /do( no|n')t merge/gi.test(label);
