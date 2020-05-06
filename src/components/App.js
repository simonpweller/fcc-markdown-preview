import React, {useState} from 'react';
import MdEditor from './MdEditor';
import MdDisplay from './MdDisplay';

import initialValue from '../initialValue';

const App = () => {
    const [markdown, setMarkdown] = useState(initialValue);

    return (
        <div className="container">
            <h1>Markdown Previewer</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    <MdEditor markdown={markdown} setMarkdown={setMarkdown} />
                </div>
                <div className="col-xs-12 col-sm-6">
                    <MdDisplay markdown={markdown}/>
                </div>
            </div>
        </div>
    );
};

export default App;
