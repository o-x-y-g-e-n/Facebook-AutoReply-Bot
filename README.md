# Facebook Auto-Reply Bot
[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) [![GitHub contributors](https://img.shields.io/github/contributors/o-x-y-g-e-n/Facebook-AutoReply-Bot)](https://GitHub.com/o-x-y-g-e-n/Facebook-AutoReply-Bot/graphs/contributors/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/o-x-y-g-e-n/badges/)

![Image](https://i.ibb.co/VBRhsxn/undraw-right-places-h9n3.png)

This is an utility to automate the responses to all the unread / new messages on Facebook

  - Respond to all the unread messages on Facebook
  - Respond to all the new messages on Facebook
  - Setup Cron (jobs) for continuous checking of new messages.

### Tech

Project uses a number of open source projects to work properly:

* [JavaScript] - HTML enhanced for web apps!
* [facebook-chat-api] - Unofficial Facebook Chat API for Nodejs
* [node.js] - evented I/O for the backend

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies:

```sh
$ cd facebook-autoreply-bot
$ npm install -d
```

### Configuration
1. Open `default.json` from `config` folder using your favourite text editor.
2. Enter your Facebook Credentials there. (Key `email` & `password`)
3. Enter the message (you want to reply with) for `data` key.
4. Run the below scripts (depending on the system) :
    *  `script-win.exe` if Windows OS.
    *  `script-macos` if MacOS.
    *  `script-linux` if Linux.
5. On Success, all the unread messages will be responded and the program will quit.

### Tips on Writing the message
1. Use `\n` in the message to enter a new line.
2. Use `$name` to get the sender name in the message body.

### Example
For the config file similar to this 
```
{
	"Credentials": {
		"email": "dummy@dummy.com",
		"password": "thisisnotmypassword",
		"data": "Hello $name .... Thank you so much for your interest.The Property Mgmt Company is in the process of accepting applications. To get started, there is a three step process \n1) Complete the eligibility form (https://goo.gl/ab83ad),\n2) Complete Registration (with your email address - We will send you the link),and lastly\n3) Complete the application.\n\nPlease call if you have question $name.\nThank You!\nJohn Group Realty | Indian Ocean Pacific."
	}
}
```
where `dummy@dummy.com` is your Facebook login email address and `thisisnotmypassword` is your Facebook login password. You have to enter correct credentials. For the message body, assuming we are responding to message from `John Kennedy`, the respond would look something like this
```
Hello John .... Thank you so much for your interest.The Property Mgmt Company is in the process of accepting applications. To get started, there is a three step process
1) Complete the eligibility form (https://goo.gl/ab83ad),
2) Complete Registration (with your email address - We will send you the link),and lastly
3) Complete the application.

Please call if you have question $name.
Thank You!
John Group Realty | Indian Ocean Pacific.
```
As you can see, all the `\n` are replaced with a `newline` and `$name` is replaced with `John` (in our case). 

### Setting up the Cron Job
If you want to continuously check for new messages (after every fixed time interval), and respond to the new messages, you need to run a different script. Follow Step 1,2,3 from the `Configuration` Heading and for the 4th step, run the following scripts.
    * `script-repeat-win.exe` for Windows OS.
    * `script-repeat-macos` for MacOS.
    * `script-repeat-linux` for Linux.
The above scripts are designed to check for new messages every `10 minutes`. (This is not configurable yet, I am working on it!). As oppose to previous script, this script won't quit on success, but will run forever and check for new messages every 10 minutes.

### Important Points to Consider
* The Script will reply only the new messages or unread messages. (The messages sitting in your messanger in **Bold**).
* New Messages once replied will not be replied again.
*  It is recommended not to be online on Facebook (from browser) while running the script.
*  Facebook has become very script about any third party software accessing your account ( Because of the data lick that happened recently). So i suggest you to run the script **manually** (whenever required) instead of setting up the cron job.

### Future Improvements 
- [ ] GUI
- [ ] Option to configure Cron Script Time

License
----

MIT


[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/o-x-y-g-e-n/)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [node.js]: <http://nodejs.org>
   [JavaScript]: <https://www.javascript.com/>
   [facebook-chat-api]: <https://github.com/Schmavery/facebook-chat-api>
