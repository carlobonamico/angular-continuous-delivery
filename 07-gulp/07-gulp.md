# Enter Gulp

## npm for dev dependencies
```
xx-gulp$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (xx-gulp) angular-pizza-frontend
version: (0.0.0) 0.0.1
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (BSD-2-Clause)
About to write to /home/bonamico/workspace.angular/angular-continuous-delivery/lab/xx-gulp/package.json:

{
  "name": "angular-pizza-frontend",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "BSD-2-Clause"
}


Is this ok? (yes)
bonamico@fermat:~/workspace.angular/angular-continuous-delivery/lab/xx-gulp$ ls
package.json
```

## Install gulp
```
npm install gulp --save-dev
```


# References


http://thewebistheplatform.com/magic-gulpfiles-part-1/


## Adding clean
clean = require('gulp-clean'),

// Cleans the stage directory
gulp.task('clean-stage', function() {

    // Logs a colored message on the console
    gutil.log(gutil.colors.cyan('===== CLEANING STAGE DIRECTORY ======'));

    return gulp.src(['stage/*'], {
        read: false
    })
        .pipe(clean());
});

# Other tasks
```
zip = require('gulp-zip'),
replace = require('gulp-replace'),
```



// Stage extension packaging. clean-stage is run before starting.
gulp.task('stage', ['clean-stage'], function() {

    // Logs a colored message on the console
    gutil.log(gutil.colors.yellow('===== CREATING STAGE EXTENSION ======'));

    // Moves static files to the new stage folder
    gulp.src(filesToMove, {
        base: './'
    })
        .pipe(gulp.dest('stage'));

    // Replaces domain and Mixpanel references from production to stage
    gulp.src('javascripts/*.js')
        .pipe(replace('Extension Production', 'Extension Stage'))
        .pipe(replace('12345123451234', '543215432154321'))
        .pipe(gulp.dest('stage/javascripts'));

    // Minifies CSS
    gulp.src('stylesheets/*.css')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('stage/stylesheets'));

    // Replaces references to JS and CSS to the minified files
    gulp.src('./*.html')
        .pipe(replace('.css', '.min.css'))
        .pipe(gulp.dest('stage/'));

    // Replaces content-script css reference on the manifest.json
    gulp.src('./manifest.json')
        .pipe(replace('content-script.css', 'content-script.min.css'))
        .pipe(gulp.dest('stage/'));

});
zip-stage: Creates a zip file to distribute the stage extension
```
// Creates a zip file to distribute the stage extension
gulp.task('zip-stage', ['stage'], function() {

    // Gets the current version from the manifest file
    var version = manifest.version;

    // Logs a colored message on the console
    gutil.log(gutil.colors.yellow('===== PACKAGING STAGE v' + version + ' ZIP ======'));

    return gulp.src('./stage/**/*.*')
        .pipe(zip('stage-' + version + '-ext.zip'))
        .pipe(gulp.dest('./'));

});
```


##Image / css optimization
http://thewebistheplatform.com/the-magic-of-gulpfiles-part-ii/

https://github.com/google/web-starter-kit


