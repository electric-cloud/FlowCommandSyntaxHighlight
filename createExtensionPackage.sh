#!/bin/bash

#
# Script to create the zip package to uplaod the the Chrome store
#
zip FlowCmdSyntaxHL.zip \
  codemirror/addon codemirror/lib codemirror/mode \
  icon128.png icon16.png icon48.png \
  jquery-ui-1.10.2.custom.min.css jquery-ui-1.10.2.custom.min.js \
  jquery.js \
  manifest.json \
  myscript.js \
  wait.js
