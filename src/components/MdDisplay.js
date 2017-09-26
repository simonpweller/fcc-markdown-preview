import React from 'react';
import marked from 'marked';

class MdDisplay extends React.Component {

  getMarkdownText() {
    return { __html: marked(this.props.markdown, {sanitize: true})}
  }

  render() {
    if (typeof this.props.markdown === 'string') {
      return <div dangerouslySetInnerHTML={this.getMarkdownText()}></div>
    }
    return <p>Nothing to render</p>
  }
}

export default MdDisplay;
