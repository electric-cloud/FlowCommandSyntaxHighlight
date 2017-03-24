# FlowCommandSyntaxHighlight
A chrome Syntax highlighter for the ElectricFlow step command field

This project was started by [Nikhil Vaze](https://github.com/nikhilv) and I simply took over maintenance when he left the company. He is the real brain behind this awesome Chrome extension.

## To test your extension locally:

1. Visit [chrome://extensions] in your browser
2. Select **extensions** in the left margin
3. Be sure the **Developer mode** checkbox is checked
4. Click **Load unpacked extension..**
5. Navigate to your extension directory

## Major files and directories

### myscript.js

This is the main point of entry. It overload the default textarea with the codemirror editor.

### manifest.json

The list of files to pack for the chrome extension. It seems the order is important.

### codemirror
Obviously this is the [Code Mirror](https://codemirror.net) code. It is version 5.25.0.

Only the required code is included to make a smaller package. Feel to add modules as 
required and add them to the manifest.json
