// const request = require("request-promise");
const core = require("@actions/core");
const github = require("@actions/github");
const { WebClient } = require("@slack/web-api");

const options = {
  channel: SLACK_CHANNEL,
  text: ""
};

// const web = new WebClient(process.env.SLACK_TOKEN);
const web = new WebClient(process.env.SLACK_BOT_TOKEN);

// The current date
// const currentTime = new Date().toTimeString();
async function run() {
  try {
    const GITHUB_TOKEN = core.getInput("repoToken");
    const SLACK_BOT_TOKEN = core.getInput("slackAuth");
    const SLACK_CHANNEL = core.getInput("channel");
    const octokit = new github.GitHub(GITHUB_TOKEN);
    const {
      reviewers: { requested_reviewers }
    } = await octokit.pulls.list({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo
    });
  } catch (err) {
    core.debug(err);
  }

  console.log(reviewers);
}

run();

// (async () => {
//   try {
//     // Use the `chat.postMessage` method to send a message from this app
//     await web.chat.postMessage({
//       channel: "#action-bot",
//       text: `From Slack Bot Fool`
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   console.log("Message posted!");
// })();
