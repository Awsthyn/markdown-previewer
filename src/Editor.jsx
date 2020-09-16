import React, { Component } from 'react'
import marked from 'marked';

export default class Editor extends Component {
    constructor(props) {
        super(props)
    
        this.state = {data: "# Markdown previewer\nWrite here...\n-------------\n \n![FCC](https://alternative.me/media/256/freecodecamp-icon-c36a7qpcgho1tb1m-c.png) \n >Block quote! \n [Visit my Linkedin]  \n Heres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\nThat's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser. \n \n[Visit my Linkedin]: https://www.linkedin.com/in/agust%C3%ADn-wagner-3b8468121/"}
        this.changeEditor = this.changeEditor.bind(this)
        this.getMarkdownText = this.getMarkdownText.bind(this)
    }

    getMarkdownText() {
        var rawMarkup = marked(this.state.data, {sanitize: true});
        return { __html: rawMarkup };
      }
    
    changeEditor(e){
        this.setState({data: e.target.value})
    }

    render() {
        return (
            <div className="bg-info mt-n4">
            <h1 className="text-center mt-4">Markdown Previewer</h1>
            <div style={{width: "80vw"}} className="mt-4 ml-auto mr-auto">
            <div style={{width: "1073px"}} className="bg-dark text-white text-center border border-dark">Editor</div>
            <textarea rows="20" cols="150" id="editor" value={this.state.data} onChange={(e)=> this.changeEditor(e)} />
            </div>
            <div style={{width: "80vw"}} className="bg-dark text-white mt-4 ml-auto mr-auto text-center border border-dark">Preview</div>
            <div style={{width: "80vw"}} className="p-3 bg-white ml-auto mr-auto" dangerouslySetInnerHTML={this.getMarkdownText()} id="preview" />
            </div>
        )
    }
}
