var LoginPage = require('../support/login.page');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}


module.exports = function() {

  this.Given(/^that the user opens the Login page$/, function (callback) {
//    new LoginPage()
//      .get()
//      .then(function () { done(); });

  // Write code here that turns the phrase above into concrete actions
    browser.get("http://localhost:8080/QA/lab/index.html").then(function(result) {

      // at the top of the test spec:

    // within a test:
  //  browser.takeScreenshot().then(function (png) {
  //      writeScreenShot(png, 'target/exception.png');
  //  });


      callback(result)
    });
    //callback.pending();
  });

  this.When(/^the user logs in with valid credentials$/, function (callback) {
    LoginPage
      .login('ben', 'password')
      .then(function () { callback(); });

  });

  this.When(/^the user logs in with wrong credentials$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the login page displays an error message$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  });

  this.Then(/^the application shows the (.*) view$/, function (viewName, callback) {

    expect(element(by.id(viewName+"View")).isPresent()).to.eventually.be.true.and.notify(callback);;

  });
  this.Then(/^the url contains (.*)$/, function (path, callback) {

    expect(browser.getCurrentUrl()).to.eventually.contain(path).and.notify(callback);;

  });

};
