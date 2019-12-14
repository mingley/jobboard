var CronJob = require('cron').CronJob;

const fetchGithubJobs = require('./tasks/fetch-github.js');

new CronJob('*/1 * * * *', fetchGithubJobs, null, true, 'America/Los_Angeles');