'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
};

//require('require-dir')('./gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del']
});


gulp.task('simple', function () {
  return gulp.src([
    gulp.paths.src + '/{app,components}/**/*.html'
  ]).pipe(gulp.dest(gulp.paths.tmp + '/simple/'));
});


gulp.task('build', ['simple'], function () {
    //gulp.start('build');
    console.log("build");

});

gulp.task('clean', [], function () {
    //gulp.start('build');
    $.del([paths.dist + '/', paths.tmp + '/'], done);
  });


  //var wiredep = require('wiredep').stream;

  gulp.task('inject', [], function () {

    var injectStyles = gulp.src([
      paths.src + '/{app,components}/**/*.css'
    ], { read: false });

    var injectScripts = gulp.src([
      '{' + paths.src + ',' + paths.tmp + '/serve}/{app,components}/**/*.js',
      '!' + paths.src + '/{app,components}/**/*.spec.js',
      '!' + paths.src + '/{app,components}/**/*.mock.js'
    ]); //.pipe($.angularFilesort());

    var injectOptions = {
      ignorePath: [paths.src, paths.tmp + '/serve'],
      addRootSlash: false
    };
  /*
    var wiredepOptions = {
      directory: 'bower_components',
      exclude: [/bootstrap\.js/]
    };
  */
    return gulp.src(paths.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
  //LATER     .pipe(wiredep(wiredepOptions))
      .pipe(gulp.dest(paths.serveTarget));

  });


gulp.task('html', ['inject'], function () {
  var partialsInjectFile = gulp.src(gulp.paths.tmp + '/partials/templateCacheHtml.js', { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: gulp.paths.tmp + '/partials',
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src(gulp.paths.src+'/**/*.html')
//    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
//    .pipe(assets = $.useref.assets())
    .pipe(jsFilter)
    .pipe(jsFilter.restore())
//    .pipe(assets.restore())
    .pipe(htmlFilter)
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest(gulp.paths.dist + '/'))
    .pipe($.size({ title: gulp.paths.dist + '/', showFiles: true }));
});





gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest(paths.dist + '/fonts/'));
});


gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

/*
function runTests (singleRun, done) {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    //paths.src + '/scripts/!(properties).js',
    // paths.src + '/scripts/*.js',
    paths.tmp + '/serve/{app,components}/**/*Module.js',
    paths.tmp + '/serve/{app,components}/**/!(*Module).js',

    paths.src + '/{app,components}/**/*.spec.js',
    paths.src + '/{app,components}/**/*.mock.js',
    paths.src + '/templates/**/*.html'
  ]);

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
      console.log(err);
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test', ['scripts'], function (done) { runTests(true /* singleRun */, done) });


*/




/*
