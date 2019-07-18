var connect = require('connect'),
    gzipStatic = require('connect-gzip-static'),
    serveStatic = require('serve-static'),
    history = require('connect-history-api-fallback'),
    argv = require('yargs').argv,
    path = require('path')

var app = connect();

const wwwroot = path.join(__dirname, "wwwroot");

function isRequireAvailable(path)
{
    try
    {
        require.resolve(path);
    }
    catch(e)
    {
        return false;
    }

    return true;
}

//enable webpack only if run with --webpack param
if(!!argv.webpack)
{
    var webpack = require('webpack'),
        webpackConfigs = require('./webpack.config.js'),
        webpackDev = require('webpack-dev-middleware'),
        hmr = require("webpack-hot-middleware");

    var config = webpackConfigs[0]({hmr: true, dll: true, aot: true});
    var compiler = webpack(config);

    //enables webpack dev middleware
    app.use(webpackDev(compiler,
    {
        publicPath: config.output.publicPath
    }));

    app.use(hmr(compiler));
}

//enable html5 routing
app.use(history());

//return static files
app.use(gzipStatic(wwwroot,
                   {
                       maxAge: '1d',
                       setHeaders: function setCustomCacheControl (res, path)
                       {
                           if (serveStatic.mime.lookup(path) === 'text/html')
                           {
                               // Custom Cache-Control for HTML files
                               res.setHeader('Cache-Control', 'public, max-age=0');
                           }
                       }
                   }));

console.log(`Listening on port 8888 => http://localhost:8888`);
//create node.js http server and listen on port
app.listen(8888);