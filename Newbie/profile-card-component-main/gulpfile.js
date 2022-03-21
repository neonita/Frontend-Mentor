const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compiles sass to css
function buildStyle() {
  return src("css/**/*.scss").pipe(sass()).pipe(dest("css"));
}

// watch sass file for changes and recompiles it at each update
function watchTask(done) {
  watch(["css/**/*.scss"], buildStyle);
  done();
}

// run the files
exports.default = series(buildStyle, watchTask);
