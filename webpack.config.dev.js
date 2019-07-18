var webpack = require('webpack'),
    path = require('path');

module.exports = function()
{
    var distPath = "wwwroot/dist";

    var config =
    {
        entry:
        {
            "dependencies":
            [
                "./webpack.config.dev.imports"
            ]
        },
        output:
        {
            path: path.join(__dirname, distPath),
            filename: '[name].js',
            library: '[name]_[hash]'
        },
        mode: 'development',
        devtool: 'source-map',
        resolve:
        {
            extensions: ['.ts', '.js'],
            alias:
            {
            },
            mainFields: ['browser', 'esm2015', 'jsnext:main', 'module', 'main']
        },
        module:
        {
            rules:
            [
                {
                    test: /\.html$/,
                    use: 
                    {
                        loader: 'html-loader'
                    }
                }
            ]
        },
        plugins:
        [
            new webpack.DllPlugin(
            {
                path: path.join(__dirname, distPath + '/[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.DefinePlugin(
            {
                aceDevMode: true
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    };

    return config;
};