const { Octokit } = require('@octokit/rest');
const { config } = require("@probot/octokit-plugin-config");

const MyOctokit = Octokit.plugin(config);

const previews = ['luke-cage-preview']

const Public_Octokit = new MyOctokit({
    auth: `token ${process.env.GIT_TOKEN}`,
    previews,
});

async function getter(octokit, path) {
    const config = await octokit.config.get(path)
    return config
}

getter(Public_Octokit, {
    owner: "ScottChapman",
    repo: "probot-config-plugin-bug",
    path: "config.yaml"
}).then(resp => {
    console.log(resp)
}).catch(err => {
    console.dir(err)
})