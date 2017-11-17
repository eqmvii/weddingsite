# weddingsite

A simple "save the date" website. Updated to show time since the wedding, since it already happened!

# Dev environment notes

Step by step: 

(1) git init

(2) add .gitignore with node_modules/ in it

(3) npm init to create package.json

(4) Create test files, do some test SASS and .js work

(5) get webpack

(6) get bootstrap

(7) get jquery

(8) create webpack.config.js and add 'build' to package.json

(9) link bootstrap & jquery

(9) Add babel for webpack workflow

(10) Add SASS for webpack workflow

-> add SASS-loader

-> add css-loader

-> add style->loader

-> Carefully update webpack config fyle, attention to loaders, plugins, and extract text

(11) Add webpack dev server

-> Change contentbase to the public folder

-> Add dev server options, ensure watch content base is true

-> Ensure content base is its own folder or else there could be issues
