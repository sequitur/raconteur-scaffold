# Raconteur Development Template

A scaffold for Raconteur projects.

## Installation

You'll need [Node.js] and [Gulp] installed.

    git clone [this repository]
    cd raconteur-template
    npm install

## Pieces

Raconteur is designed to be used with a toolchain made of several powerful web development tools.

- Node.js
- npm
- Gulp
- Browserify
- CoffeeScript
- Less

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

Running `gulp` will build your game in the `build/` directory. `gulp serve` will build and then start up a local server with live reload, so you can point your browser. `gulp dist` will make a distribution-ready copy of your game in `dist/`, with minified/gzipped JavaScript and CSS.