const core = require("@actions/core");
const github = require("@actions/github");
// const { Octokit } = require("@octokit/rest")
async function run() {
  try {
    // const issueTitle = core.getInput("issue-title");
    // const jokeBody = core.getInput("joke");
    const token = core.getInput("repo-token");
    const octokit = new github.GitHub(token);
    const { data: reviewers } = await octokit.pulls.list({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner
    });
    // reviwers[0].requested_reviewers reutrns array of objects of revieweres
    // login from that object
    // loop through that array to get everyones login
    // reviewers.url is link to pull request
    console.log(reviewers[0].requested_reviewers);
  } catch (error) {
    core.setFailed(error.message);
  }
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
