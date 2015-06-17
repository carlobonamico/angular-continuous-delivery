
var LoginPage = function () {
  var url = '#/login',
    userElement = element(by.model('loginCtrl.loginData.userName')),
    passwordElem = element(by.model('loginCtrl.loginData.password')),
    submitElem = element(by.id('loginAction')),
    invalidElem = element(by.css('.ng-invalid'));

  this.get = function () {
    return browser.get(url);
  };

  this.login = function (email, password) {
    userElement.sendKeys(email);
    passwordElem.sendKeys(password);
    //TODO browser.pause();

    //TODO browser.debugger();

    return submitElem.click();
  };

  this.hasErrors = function () {
    return invalidElem.count().then(function (count) {
      return count > 0;
    })
  };
};

//istanziarla qui o fuori?
module.exports = new LoginPage();
