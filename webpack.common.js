const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
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

    new CopyPlugin({
      patterns: [
        {
          from: './src/images/favicon.ico',
          to: './favicon.ico'
        }
      ]
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // // General
    new HtmlWebpackPlugin({
      template: './src/articles/general/isolation.html',
      filename: './general/isolation.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/general/scroll.html',
      filename: './general/scroll.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/general/udf.html',
      filename: './general/udf.html'
    }),

    // Quarks
    new HtmlWebpackPlugin({
      template: './src/articles/quarks/Q_Icon.html',
      filename: './quarks/Q_Icon.html'
    }),

    // Atoms
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_Button.html',
      filename: './atoms/A_Button.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_Chip.html',
      filename: './atoms/A_Chip.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_Input.html',
      filename: './atoms/A_Input.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_MeatBall.html',
      filename: './atoms/A_MeatBall.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_MenuItem.html',
      filename: './atoms/A_MenuItem.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_OptionItem.html',
      filename: './atoms/A_OptionItem.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/atoms/A_TextButton.html',
      filename: './atoms/A_TextButton.html'
    }),

    // Molecules
    new HtmlWebpackPlugin({
      template: './src/articles/molecules/M_SliderController.html',
      filename: './molecules/M_SliderController.html'
    }),

    // Organisms
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_Alert.html',
      filename: './organisms/O_Alert.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_BurgerMenu.html',
      filename: './organisms/O_BurgerMenu.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_Menu.html',
      filename: './organisms/O_Menu.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_MultiselectInput.html',
      filename: './organisms/O_MultiselectInput.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_Select.html',
      filename: './organisms/O_Select.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_SelectInput.html',
      filename: './organisms/O_SelectInput.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_SingIn.html',
      filename: './organisms/O_SingIn.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_Slider.html',
      filename: './organisms/O_Slider.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/organisms/O_SliderComments.html',
      filename: './organisms/O_SliderComments.html'
    }),

    // Superorganisms
    new HtmlWebpackPlugin({
      template: './src/articles/superorganisms/S_Popup.html',
      filename: './superorganisms/S_Popup.html'
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
      },
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      },
      {
        path: path.join(__dirname, './src/partials/metatags.html'),
        location: 'metatags',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
