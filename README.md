# dont-merge

> Prevent merging of Pull Requests with "don't merge" or "do not merge" label selected on labels area.

<p align="center">
  <img alt="don't merge steps" src ="https://media.giphy.com/media/l4pSU121cLwSeJudG/giphy.gif"/>
</p>

## Setup

 - Setup:

  ```bash
    git clone git@github.com:Muhnad/dont-merge.git

    cd dont-merge

    npm install
  ```
 - You need to Create your own [GitHub app](https://probot.github.io/docs/development/#configure-a-github-app)
 - Update the `.env` file.

 - Run `npm start`


## Usage
- When creating a pull request that you don't want to be merged, simply add the label "don't merge || do not merge".
- the dont-merge will set/update the status of the pull request depending on the pull requests label.


## Deployment

 See [docs](https://probot.github.io/docs/deployment/) for more info.
