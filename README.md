#TIY Starter Kit

Lightweight scaffolding and build tools to quickly and easily develop a web application. 

  - transpiles scss into css
  - transpiles es6 and jsx into es5
  - concatenates all required/imported modules together into one minified file
  - runs a simple express server that is deployable on heroku
  
##Getting started

  - clone this repo with `git clone git@github.com:magentanova/tiy-starter-kit.git THE-LOCAL-FOLDER-YOU-WANT-TO-CREATE`
  - change your remote so that it points to your remote repo, not mine (see [Publishing](##Publishing))
  - `cd` into the local folder
  - `npm install`
  - `npm run go`
  - that's it! visit [](http://localhost:3000) to make sure it's working
  
##Workflow
  
  - you'll *only* write code in the files in the `src/` folder
  - every time you save in that folder, your code will be read and transpiled into the `dist/` folder 
  - view and test your app at localhost:3000
  
##Publishing

  - disconnect your local repo from this one with `git remote remove origin`
  - use `hub create YOUR-APP-NAME` to simultaneously create yourself a remote repo with the given name and create a local reference connecting the directory you're in to the remote you just created
  - add, commit and push per usual

##Deploying 

The easiest thing to do is deploy to heroku. Once you have an account and you've installed the heroku command line tools, simply run: 
 
  - `heroku create APP-NAME`
  - `git push origin heroku`

Have fun!
