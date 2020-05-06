import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';

const MdDisplay = ({markdown}) => {
  const html = marked(markdown)
  const cleanHtml = DOMPurify.sanitize(html);

  return (
      <div dangerouslySetInnerHTML={{__html: marked(cleanHtml)}}/>
  )
}

export default MdDisplay;
