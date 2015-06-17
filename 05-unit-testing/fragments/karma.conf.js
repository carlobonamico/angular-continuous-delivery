'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    files: [
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.js',
    'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-mocks.js',

          'src/app/**/*Module.js',
          'src/app/**/*.js',
          'src/app/**/*.spec.js',
        ],

    

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-html-reporter',
        'karma-junit-reporter',
         'karma-ng-html2js-preprocessor'

    ],

    reporters: ['html','progress', 'junit'],
    preprocessors: {
              '**/*.html': ['ng-html2js']
          },

    ngHtml2JsPreprocessor: {
              // setting this option will create only a single module that contains templates
              // from all the files, so you can load them all with module('foo')
             moduleName: 'templates',
             stripPrefix: ".*/templates/",
    prependPrefix: "templates/",
         },


    // the default configuration
    junitReporter: {
      outputFile: 'target/test/test-results.xml',
      suite: ''
    },

    singleRun : true

    //logLevel: 'debug'
  });
};
