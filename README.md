# FlowCommandSyntaxHighlight
A chrome Syntax highlighter for the ElectricFlow step command field

This project was started by [Nikhil Vaze](https://github.com/nikhilv) and I
simply took over the maintenance when he left the company. He is the real brain
behind this awesome Chrome extension.
This extension is based on [CodeMirror] version 5.25.0.

## To test your extension locally:

1. Visit [chrome://extensions](chrome://extensions) in your browser
2. Select **extensions** in the left margin
3. Be sure the **Developer mode** checkbox is checked
4. Click **Load unpacked extension..**
5. Navigate to your extension directory
6. Select it. It should load and display any error

## Major files and directories

### [myscript.js](myscript.js)

This is the main point of entry. It overload the default textarea with the codemirror editor.

### [manifest.json](manifest.json)

The list of files to pack for the chrome extension. It seems the order is important.

### [codemirror](codemirror)
A trimmed down version of the [CodeMirror code](https://github.com/codemirror/CodeMirror). The idea is to get a smaller package for the extension. Feel to add modules as
required and add them to the [manifest.json](blob/master/manifest.json)

[CodeMirror]: https://codemirror.net
