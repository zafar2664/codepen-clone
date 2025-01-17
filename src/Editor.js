import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;

  //Each Editor component receives its own language, displayName, value, and onChange props.
  //The language prop specifies the syntax highlighting language.
  //The displayName prop is used to display the type of code being edited.
  //The value prop binds the editor to the respective state.
  //The onChange prop is passed the setter function from useState (e.g., setHtml), which updates the corresponding state when the content changes.
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">{displayName}</div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}