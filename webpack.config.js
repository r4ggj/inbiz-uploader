const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const outPath =path.resolve(__dirname, 'dist',"inbiz-uploader");
// const CopyStyleFile = require('copy-style-file');
module.exports = {
  mode:'development',
  devtool: 'source-map',
  entry:[
      // core
    './src/js/index.js'
 ],
 optimization: { 
    splitChunks: {
        cacheGroups: {  
            vendor: {
                minSize: 0, 
                test: /\*.js/,
                chunks: 'initial',
                name: 'vendor',
                priority: 10,
                nforce: true
            }
        } 
    } 
 },
 plugins: [
    // new CopyStyleFile([
    //     { from: path.resolve(__dirname, "src/fine-uploader-gallery.css"), to:"style"},
    //     { from: path.resolve(__dirname, "src/fine-uploader-new.css"), to:"style"},
    //     { from: path.resolve(__dirname, "src/fine-uploader.css"), to:"style"}
    // ]),
    // new  FileMinifyWebpackPlugin([
    //     { from: path.resolve(__dirname, "src/fine-uploader-gallery.css"), to:outPath},
    //     { from: path.resolve(__dirname, "src/fine-uploader-new.css"), to:outPath},
    //     { from: path.resolve(__dirname, "src/fine-uploader.css"), to:outPath}
    //   ],{}),
    new CopyPlugin({
      patterns: [
        { from:path.resolve(__dirname,"src", "html", "templates"), to:path.resolve(outPath,"templates")},
        { from: path.resolve(__dirname, "src","placeholders"), to:path.resolve(outPath,"placeholders")},
        { from: path.resolve(__dirname, "src/edit.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/continue.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/loading.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/pause.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/retry.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/processing.gif"), to:outPath},
        { from: path.resolve(__dirname, "src/trash.gif"), to:outPath},
       { from: path.resolve(__dirname, "src/fine-uploader-gallery.css"), to:outPath},
       { from: path.resolve(__dirname, "src/fine-uploader-new.css"), to:outPath},
       { from: path.resolve(__dirname, "src/fine-uploader.css"), to:outPath}
      ]
    })
  ],
  output: {
    filename: 'inbiz-uploader.js',
    path: outPath,
    clean: true
  }
};