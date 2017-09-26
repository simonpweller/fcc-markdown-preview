import React from 'react';
import MdEditor from './MdEditor';
import MdDisplay from './MdDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: "__Why not write some markdown?__"
    }
  }

  editMarkdown(markdown) {
    this.setState({markdown});
  }

  render() {
    return (
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <MdEditor editMarkdown={this.editMarkdown.bind(this)}/>
          </div>
          <div className="col-xs-12 col-sm-6">
            <MdDisplay markdown={this.state.markdown}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
