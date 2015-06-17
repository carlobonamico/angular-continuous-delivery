# We need unit tests

## Jasmine

##Topics

* Test support and _Behavior-Driven-Development_
  * unit tests
  * integration tests
  * jasmine
#But I do not normally (need to) test my HTML sites...



##True, but

###a real application has no future if it cannot be easily  evolved without fear of breaking thins

* some degree of testing, either manual or (better) automatic is needed



###Or
###The result/value is not worth the effort?

### What if things were designed to be easy to test?
* How can we make an application easier to test?



##Behavior-Driven-Development

* A style of testing which starts from describing the outside, client view of a component or application
  * http://behaviour-driven.org/
  * focus on a common language between Business and Developers

* can be done at the component/unit level

* or at the application level
  * Acceptance Test Driven Development
  * Specification by Example



##In Javascript

* Jasmine for unit, component and integration-level
  * http://jasmine.github.io/

* cucumber-js, protractor for end-to-end (e2e) tests
  * https://github.com/cucumber/cucumber-js



#Let's try
* Testing a plain Javascript Object

  http://plnkr.co/edit/lUGdm12FYs2yTtuMpyTH?p=preview




##The Testing pyramid

(at least some)

Acceptance Tests

Integration ------ Tests

Many ....................Unit .....................tests



##Testing Angular Components and Applications

* separate UI from logic
  * it's how angular works

* decouple things
  * use Dependency Injection

* modularize your application
  * maximize cohesion
  * minimize dependencies

* the framework already mocks things for you
  * https://docs.angularjs.org/api/ngMock



##Testing a filter in a module
```javascript
stringFilters.filter('first4characters', function() {
  return function(text) {
    return ('' + (text || '')).substring(1,4);
  }
});

describe('first4characters filter', function() {
  var first4characters;

  beforeEach({
    module('stringFilters');
    inject(function(_first4characters_) {
      first4characters = _first4characters_;
    }));
  });

  it('returns empty string when given empty string', function() {
    expect(first4characters('')).toEqual('');
  });

  it('returns the first four characters of a message', function() {
    expect(first4characters('abcde')).toEqual('abcd');
  });
});
```



##Let's try
* http://plnkr.co/edit/LCx0S9YceTDZ66M7dGq3?p=info



##Testing a Controller
```javascript
describe('The Order Button', function() {
  beforeEach(module('orders.buttons'));

  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('Quantity defaults and validations', function() {
    it('has a default quantity to add if not specified', function() {
      var $scope = {};
      var controller = $controller('OrderController', { $scope: $scope });
      $scope.addDefault();
      expect($scope.selection.quanrity).toEqual(1);
    });
  });
});
```



##Running Tests
* in the browser
* on the CLI
  * http://karma-runner.github.io/
  * gulp/grunt
  * maven-jasmine-plugin
* in a CI server



#Learn more
* https://docs.angularjs.org/guide/unit-testing
* call a module
  * https://docs.angularjs.org/api/ngMock/function/angular.mock.module

* manage dependecies and injection
  * https://docs.angularjs.org/api/ngMock/function/angular.mock.inject

#To learn even more
* http://www.ng-newsletter.com/advent2013/#!/day/19
* http://blog.brunoscopelliti.com/test-angularjs-app-with-karma-jasmine-and-protractor

