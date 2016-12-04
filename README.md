# Raconteur Development Template

A scaffold for [Raconteur] projects.

## Installation

You'll need [Node.js] installed. You can find an installation package for your OS at their [download page](https://nodejs.org/download/). On Linux, it's very likely that your distribution packages node.js.

You'll also need [Gulp]. Gulp is installed via npm, node's own package manager:

    npm install --global gulp

You don't have to install gulp globally, but on most OSes and setups this will put the executable `gulp` file somewhere in your system path so you can easily run it anywhere.

Once this is in place, you can download this repository as a zip or tar.gz file, unpack it wherever you like, and use it as a template to start building your game. To get started, `cd` to the directory you unpacked the scaffold in and do `npm install`. This will install Raconteur itself and all of its dependencies as separate libraries, locally inside your project directory.

## Pieces

Raconteur is designed to be used with a toolchain made of several powerful web development tools.

- [Node.js]
- [npm]
- [Gulp]
- [Browserify]
- [CoffeeScript]
- [Less]
- Numerous Gulp-related and Node packages; see the package.json file

## File Structure

Inside the scaffold, you will find:

```
.
|-- game
|   `-- main.coffee
|-- html
|   `-- index.html
|-- img
|-- less
|   |-- main.less
|   `-- mobile.less
|-- Gulpfile.js
`-- package.json
```

- `game/main.coffee`: The main entry point for your game. Contains a skeleton of a Raconteur story.
- `html/index.html`: The html page for your story.
- `img/`: This directory holds all of your game's image assets. Anything with the .png or .jpeg extensions, in this folder (including subfolders), will be copied over to `build/img/` or `dist/img/` when you build your game, so that the relative path for all of your images will be `img/image.png` and so on.
- `less/`: Holds your Less files. `less/main.less` is the entry point for Less; all other files have to be imported by this file. `less/mobile.less` has mobile-specific definitions, but you're free to reorganise these files as you like.
- `Gupfile.js`: The Gulpfile is the configuration file for the build system. Ideally, you won't have to edit this unless you want to change your folder organisation or build setup.
- `package.json`: This barebones package.json file only holds a list of dependencies to install, so that `npm install` will install dependencies automagically.

## Usage

This scaffold comes prepped for usage with Gulp as a build system, Less for CSS preprocessing, Browserify for bundling JavaScript, and CoffeeScript as a JS transpiler.

Running `gulp dist` will build your game in the `build/` directory. `gulp serve` will build and then start up a local server with live reload, so you can point your browser. `gulp dist` will make a distribution-ready copy of your game in `dist/`, with minified JavaScript and CSS. `gulp zip` will make a distribution-ready copy in `dist/` and then make a `dist.zip` file that is ready to be uploaded to [Itch.io] or sent by email.

[Raconteur]: http://github.com/sequitur/raconteur/
[Node.js]: http://nodejs.org/
[npm]: http://npmjs.com/
[Gulp]: http://gulpjs.com/
[Browserify]: http://browserify.org/
[CoffeeScript]: http://coffeescript.org/
[Less]: http://lesscss.org/
[Itch.io]: http://itch.io/

## License

Most of the code in this scaffold, Undum, and Raconteur are distributed under the MIT license, which allows you to redistribute or modify the code, even for commercial use, as long as you always package it along with a notice acknowledging the original copyright holders and this license. See LICENSE for legalese.

The example image included with this scaffold (storyteller.jpg) is from the Swiss National Library, GS-GUGE-FREUDENBERGER-C-8, and is in the public domain.
