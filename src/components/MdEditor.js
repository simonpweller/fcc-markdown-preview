import React from 'react';

class MdEditor extends React.Component {

  editMarkdown() {
    this.props.editMarkdown(this.markdown.value);
  }

  render() {
    return (
      <form>
        <textarea className="form-control" rows="20" ref={(input) => this.markdown = input} onInput={this.editMarkdown.bind(this)}>

        </textarea>
      </form>
    );
  }
}

export default MdEditor;
