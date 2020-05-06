import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const MdDisplay = ({markdown}) => {
  const html = marked(markdown, {breaks: true});
  const cleanHtml = DOMPurify.sanitize(html);

  return (
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(cleanHtml)}}/>
  )
}

export default MdDisplay;
