# FlowCommandSyntaxHighlight
A chrome Syntax highlighter for the ElectricFlow step command field

This project was started by [Nikhil Vaze](https://github.com/nikhilv) and I
simply took over the maintenance when he left the company. He is the real brain
behind this awesome Chrome extension.
This extension is based on [CodeMirror](https://codemirror.net) version 5.25.0.

## To test your extension locally:

1. Visit [chrome://extensions](chrome://extensions) in your browser
2. Select **extensions** in the left margin
3. Be sure the **Developer mode** checkbox is checked
4. Click **Load unpacked extension..**
5. Navigate to your extension directory
6. Select it. It should load and display any error

## To build and official extension

1. create a zip file with [createExtensionPackage.sh](createExtensionPackage.sh)
2. upload to the **[Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)**
 * Click on **Add new item**
 * Navigate and to your zip file.
 * it seems you have to fill all the information again

    * Detailled description:
    ```
This chrome extension allows users to toggle syntax highlighting on and off on the Edit Step page in ElectricFlow.

If you are an ElectricFlow user writing or viewing procedure steps in the ElectricFlow web user interface then this extension is for you!

Works with ElectricFlow v4.2 or later.

Supports these languages: Perl, Shell, Groovy, JavaScript, Python, Ruby, TCL.

Electric Cloud and ElectricFlow are registered trademarks or trademarks of Electric Cloud, Incorporated.
```
     * Icon: upload the [icon128.png](icon128.png) files
     * Screenshots: Upload the [snapshot.png](snapshot.png)
     * Link to website: https://www.electric-cloud.com
     * Category: Productivity
     * Language: English
  * Click on Preview
  * Publish if everything is fine

## Major files and directories

### [myscript.js](myscript.js)

This is the main point of entry. It overload the default textarea with the codemirror editor.

### [manifest.json](manifest.json)

The list of files to pack for the chrome extension. It seems the order is important.

### [codemirror](codemirror)
A trimmed down version of the [CodeMirror code](https://github.com/codemirror/CodeMirror). The idea is to get a smaller package for the extension. Feel to add modules as
required and add them to the [manifest.json](blob/master/manifest.json)
