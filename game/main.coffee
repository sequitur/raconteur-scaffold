###
Raconteur story scaffold, copyright (c) Bruno Dias 2015.

Distributed under the MIT license. See LICENSE for information.

In a finished game file, almost all of this scaffold will have been replaced
by new content (the new game does not carry "substantial parts" of this code)
so this copyright notice may be removed and replaced with your own.
###

# Require the libraries we rely on

situation = require('raconteur')
undum = require('undum-commonjs')
oneOf = require('raconteur/lib/oneOf.js')
elements = require('raconteur/lib/elements.js')
qualities = require('raconteur/lib/qualities.js')

a = elements.a
span = elements.span
img = elements.img

# ----------------------------------------------------------------------------
# IFID and game version - Edit this

undum.game.id = "my.game.id"
undum.game.version = "0.1"

# ----------------------------------------------------------------------------
# Game content

situation 'start',
  content: """
  ![a storyteller](img/storyteller.jpg)

  # Welcome to Raconteur

  If you're seeing this, you've successfully installed the Raconteur game
  scaffold. Get writing! 

  Raconteur lives at a [Github Repository], where you can report issues or
  send feedback.

  [Github Repository]: https://github.com/sequitur/raconteur
  """

# ----------------------------------------------------------------------------
# Qualities

qualities
  stats:
    name: 'Statistics',
    strength: qualities.integer('Strength', {priority: '001'}),
    dexterity: qualities.integer('Dexterity', {priority: '002'}),
    constitution: qualities.integer('Constitution', {priority: '003'}),
    intelligence: qualities.integer('Intelligence', {priority: '004'}),
    perception: qualities.integer('Perception', {priority: '005'}),
    charisma: qualities.integer('Charisma', {priority: '006'})
  possessions:
    name: 'Possessions',
    gold: qualities.integer('Gold'),
    sword: qualities.wordScale('Sword', ['dull', 'sharp']),
    shield: qualities.yesNo('Shield')
    options:
      extraClasses: ["possessions"]


#-----------------------------------------------------------------------------
# Initialise Undum

undum.game.init = (character, system) ->
  # Add initialisation code here
  character.qualities.strength = 10
  character.qualities.dexterity = 12
  character.qualities.constitution = 10
  character.qualities.perception = 14
  character.qualities.intelligence = 16
  character.qualities.charisma = 8
  character.qualities.gold = 100
  character.qualities.sword = 1
  character.qualities.shield = 1

# Get the party started when the DOM is ready.

window.onload = undum.begin