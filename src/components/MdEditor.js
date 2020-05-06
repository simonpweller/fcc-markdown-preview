import React from 'react';

const MdEditor = ({setMarkdown, markdown}) =>
    <form>
        <textarea className="form-control" rows="20" onChange={e => setMarkdown(e.target.value)} value={markdown}/>
    </form>

export default MdEditor;
