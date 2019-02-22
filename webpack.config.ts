const path = require('path');

const config = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};

module.exports = config;