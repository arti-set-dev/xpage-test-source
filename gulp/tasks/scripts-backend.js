import browserSync from 'browser-sync';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import path from 'path';
import {glob} from 'glob';

export const scriptsBackend = () => {
  const entries = glob.sync(app.paths.srcModulesJs);
  return app.gulp.src(app.paths.srcModulesJs)
    .pipe(plumber(
      notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webpackStream({
      mode: 'development',
      entry: entries.reduce((acc, file) => {
        const name = path.basename(file, path.extname(file));
        acc[name] = path.normalize(file);
        return acc;
      }, {}),
      output: {
        filename: '[name].js',
      },
      module: {
        rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }]
      },
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                // return `${packageName.replace('@', '')}`;
                return `vendor`;
              },
            },
          },
        },
      },
      devtool: false,
      resolve: {
        preferRelative: true,
      },
    }))
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end');
    })
    .pipe(app.gulp.dest(app.paths.buildJsFolder))
    .pipe(browserSync.stream());
}
