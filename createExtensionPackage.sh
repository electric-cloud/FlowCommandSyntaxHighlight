#!/bin/bash

#
# Script to create the zip package to uplaod the the Chrome store
#
FILE="FlowCmdSyntaxHL.zip"
if [ -f $FILE ]; then
  rm -f $FILE
fi
zip -r  $FILE \
  codemirror/addon codemirror/lib codemirror/mode \
  icon128.png icon16.png icon48.png \
  jquery-ui-1.10.2.custom.min.css jquery-ui-1.10.2.custom.min.js \
  jquery.js \
  manifest.json \
  myscript.js \
  wait.js \
  -x "*.DS_Store*"
