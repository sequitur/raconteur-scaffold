# Require the libraries we rely on

$ = require('jquery')
undum = require('undum-commonjs')

situation = require('raconteur/situation.js')
oneOf = require('raconteur/oneOf.js')
elements = require('raconteur/elements.js')
qualities = require('raconteur/qualities.js')

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
  # Welcome to raconteur

  If you're seeing this, you've successfully installed the Raconteur game
  scaffold. Get writing!
  """

#-----------------------------------------------------------------------------
# Initialise Undum

undum.game.init = (character, system) ->
  # Add initialisation code here

# Get the party started when the DOM is ready.

$(undum.begin)