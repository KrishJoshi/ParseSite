var gith = require('gith').create(6000);  // run on port 6000
var exec = require('child_process').exec; 

gith({
  repo: 'KrishJoshi/ParseSite'  // the github-user/repo-name
}).on('all', function(payload){
    console.log("push received");
    exec('ls', function(err, stdout, stderr){
    	      console.log("git deployed to branch " + payload.branch);

      if (err) {
      	console.log(err);
      	return err;
      }

      console.log(stderr);
      console.log(stdout);
      console.log("git deployed to branch " + payload.branch);
    });
});