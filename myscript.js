// Global code mirror object
var cm;
var editor;

var timer;

jQuery("textarea[name='command']").ready(function($) {

  waitUntilExists("_12_1",function(){

    $('<input id="codeMirrorCheckbox" type="checkbox" name="myCheckbox"/>' +
      '<span>Toggle syntax highlighting</span>').insertAfter("textarea[name='command']");

    var checkbox = document.getElementById("codeMirrorCheckbox");
    checkbox.addEventListener("click", function(e) {
      toggleCodeMirror(e);
    }, false);

    var select = "<span>Language:</span><select id='codeMirrorLang' >" +
        "<option value='perl'>Perl</option>" +
        "<option value='groovy'>Groovy</option>" +
        "<option value='shell'>Shell</option>" +
        "<option value='javascript'>JavaScript</option>" +
        "<option value='python'>Python</option>" +
        "<option value='ruby'>Ruby</option>" +
        "<option value='tcl'>TCL</option>" +
      "</select>";

    $("#codeMirrorCheckbox").before(select);

    var selectBox = document.getElementById("codeMirrorLang");
    selectBox.addEventListener("change", function(e) {
        changeMode(e);
    }, false);

    // Check the checkbox to enable syntax highlighting by default
    checkbox.checked='true';

    timer=setInterval(function(){myTimer()},1000);

    function myTimer()
    {
        if ($("#_12_1").is(":visible")){
            // Find the text area
            var widget = document.getElementById("_12_1");
            createCodeMirror(widget,"perl");

            clearInterval(timer);
        }

    }
  })
});

// Function: changeMode(event)
// Change language
function changeMode(event){
    if(typeof editor !== "undefined" && editor !== null){
        editor.setOption("mode", event.currentTarget.value);
    }
}

// Function: toggleCodeMirror(event)
// Attaches and detaches code mirror object from textarea
function toggleCodeMirror (event){
    if(event.currentTarget.checked){

        // Find the text area
        var widget = document.getElementById("_12_1");

        // Get the language selected in the drop down
        var language = document.getElementById("codeMirrorLang").value;

        // Create the global code mirror objects
        createCodeMirror(widget,language);

    } else {
        // Turn syntax highlighting off
        editor.off("change");
        editor.toTextArea();
    }

}

// Function saveToTextArea()
// Saves the code mirror editor to the textarea in the DOM
function saveToTextArea(){
    if(typeof editor !== "undefined" && editor !== null){
        editor.save();
    }
}

// Function: createCodeMirror(widget,language)
// Creates Code Mirror object with given language to given textarea
function createCodeMirror(widget,language){

  cm = CodeMirror;
  editor = cm.fromTextArea(widget, {
      mode: language,
      lineNumbers: true,
      matchBrackets: true,
      indentUnit: 4
  });

  editor.on("change", function(){
      saveToTextArea();
  });

  $('.CodeMirror').resizable({
      resize: function() {
          editor.setSize($(this).width(), $(this).height());
      }
  });
}
