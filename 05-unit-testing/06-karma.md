# We need unit tests - karma + jenkins

# Install Karma
npm install karma-phantomjs-launcher --save-dev


node ./node_modules/karma/bin/karma start

```
npm install karma-phantomjs-launcher --save-dev
npm install karma-jasmine --save-dev
npm install karma-html-reporter --save-dev
npm install karma-junit-reporter --save-dev
npm install karma-ng-html2js-preprocessor --save-dev
```

# Add to ci build
```
npm install
node ./node_modules/karma/bin/karma start
```

##Archive test results

## minimum modification

## test passes

## add more test

## push to BUILD
