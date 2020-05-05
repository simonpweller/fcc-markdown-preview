import React from 'react';

const MdEditor = ({editMarkdown, markdown}) =>
    <form>
        <textarea className="form-control" rows="20" onChange={e => editMarkdown(e.target.value)} value={markdown}/>
    </form>

export default MdEditor;
