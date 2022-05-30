const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // { test: /\.ejs$/, use: 'ejs-compiled-loader' },
      {
        test: /\.html$/i,
        // use: {
        //   loader: 'html-loader',
        //   options: {
        //     interpolate: true
        //   }
        // }
        // use: [HtmlWebpackPlugin.loader, 'html-loader']
        loader: 'html-loader'
        // loader: HtmlWebpackPlugin.loader
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html'
      // chunks: ['index']
    }),

    // // General
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/general/isolation.html',
      filename: './general/isolation.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/general/scroll.html',
      filename: './general/scroll.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/general/udf.html',
      filename: './general/udf.html'
      // chunks: ['index']
    }),

    // Quarks
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/quarks/Q_Icon.html',
      filename: './quarks/Q_Icon.html'
      // chunks: ['index']
    }),

    // Atoms
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_Button.html',
      filename: './atoms/A_Button.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_Chip.html',
      filename: './atoms/A_Chip.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_Input.html',
      filename: './atoms/A_Input.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_MeatBall.html',
      filename: './atoms/A_MeatBall.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_MenuItem.html',
      filename: './atoms/A_MenuItem.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_OptionItem.html',
      filename: './atoms/A_OptionItem.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/atoms/A_TextButton.html',
      filename: './atoms/A_TextButton.html'
      // chunks: ['index']
    }),

    // Molecules
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/molecules/M_SliderController.html',
      filename: './molecules/M_SliderController.html'
      // chunks: ['index']
    }),

    // Organisms
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_Alert.html',
      filename: './organisms/O_Alert.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_BurgerMenu.html',
      filename: './organisms/O_BurgerMenu.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_Menu.html',
      filename: './organisms/O_Menu.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_MultiselectInput.html',
      filename: './organisms/O_MultiselectInput.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_Select.html',
      filename: './organisms/O_Select.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_SelectInput.html',
      filename: './organisms/O_SelectInput.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_SingIn.html',
      filename: './organisms/O_SingIn.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      // template: '!!ejs-webpack-loader!src/index.ejs'
      template: './src/articles/organisms/O_Slider.html',
      filename: './organisms/O_Slider.html'
      // chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/organisms/O_SliderComments.html',
      filename: './organisms/O_SliderComments.html'
      // chunks: ['index']
    }),

    // Superorganisms
    new HtmlWebpackPlugin({
      // hash: true,
      // minify: false,
      // scriptLoading: 'blocking',
      template: './src/articles/superorganisms/S_Popup.html',
      filename: './superorganisms/S_Popup.html'
      // chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/footerbar.html'),
        location: 'footerbar',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/links.html'),
        location: 'links',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
