import { htmlTopics } from './htmlTopics';

export const htmlElements = {
  id: 'html_elements',
  title: 'HTML Elements',
  description: 'HTML elements are the building blocks of HTML pages.',
  sections: [
    {
      title: 'HTML Elements',
      content: (
        <>
          <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
          <p><code>{'<tagname>Content goes here...</tagname>'}</code></p>
          <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
          <p><code>{'<p>My first paragraph.</p>'}</code></p>
        </>
      ),
      example: `<h1>My First Heading</h1>
<p>My first paragraph.</p>`
    },
    {
      title: 'Nested HTML Elements',
      content: (
        <>
          <p>HTML elements can be nested (this means that elements can contain other elements).</p>
          <p>All HTML documents consist of nested HTML elements.</p>
          <p>The following example contains four HTML elements (<code>{'<html>'}</code>, <code>{'<body>'}</code>, <code>{'<h1>'}</code> and <code>{'<p>'}</code>):</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Never Skip the End Tag',
      content: (
        <>
          <p>Some HTML elements will display correctly, even if you forget the end tag:</p>
        </>
      ),
      example: `<html>
<body>

  <p>This is a paragraph
  <p>This is a paragraph

</body>
</html>`
    },
    {
      title: 'Empty HTML Elements',
      content: (
        <>
          <p>HTML elements with no content are called empty elements.</p>
          <p>The <code>{'<br>'}</code> tag defines a line break, and is an empty element without a closing tag:</p>
        </>
      ),
      example: `<p>This is a <br> paragraph with a line break.</p>`
    },
    {
      title: 'HTML is Not Case Sensitive',
      content: (
        <>
          <p>HTML tags are not case sensitive: <code>{'<P>'}</code> means the same as <code>{'<p>'}</code>.</p>
          <p>The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.</p>
          <p>At S2Schools we always use lowercase tag names.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML Element Structure',
      description: 'Example showing the structure of HTML elements.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Elements</title>
</head>
<body>

  <!-- This is an HTML element with a start tag, content, and end tag -->
  <h1>This is a heading element</h1>
  
  <!-- This is another HTML element -->
  <p>This is a paragraph element.</p>
  
  <!-- This is a nested HTML element -->
  <div>
    <p>This paragraph is nested inside a div element.</p>
  </div>
  
  <!-- This is an empty HTML element -->
  <hr>
  
  <p>The line above is created with the hr element.</p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_basic'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_attributes')
}; 