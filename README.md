# dont-merge

> Prevent merging of Pull Requests with a custom label selected on labels area.

<p align="center">
  <img alt="don't merge steps" src ="https://media.giphy.com/media/l4pSU121cLwSeJudG/giphy.gif"/>
</p>

## Setup

 1. Fork the dont-merge repository on Github.
 2. Clone your fork to your machine `git clone git@github.com:Muhnad/dont-merge.git`
 3. Navigate into project directory `cd dont-merge/`.
 4. Install the dependencies `npm install`.

## Usage
1. Create your own [GitHub app](https://probot.github.io/docs/development/#manually-configuring-a-github-app)
2. Install the app on your GitHub Repositories.
3. Update the `.env` file.
4. Run `npm start`

## Q&A
- is it possible to specify custom labels that should prevent merging?
  - Yes, you can add the labels you want by adding `DONT_MERGE_LABELS` to `.env` file.
  `DONT_MERGE_LABELS` accept single&multi labels.
  `DONT_MERGE_LABELS=need work` this is single label when you select will prevent merging.
  `DONT_MERGE_LABELS=need work,not allowed` this is multi labels. the label should be separated by a comma without any spacing.

- What's the default labels?
  - the default are `don't merge` and `do not merge`.


**Notes**

 if you need the app run in Background just add `&` at the end `npm start &`


## Deployment

 See [docs](https://probot.github.io/docs/deployment/) for more info.
