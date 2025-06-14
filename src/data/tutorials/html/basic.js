import { htmlTopics } from './htmlTopics';

export const htmlBasic = {
  id: 'html_basic',
  title: 'HTML Basic',
  description: 'In this chapter we will show some basic HTML examples.',
  sections: [
    {
      title: 'HTML Documents',
      content: (
        <>
          <p>All HTML documents must start with a document type declaration: <code>{'<!DOCTYPE html>'}</code>.</p>
          <p>The HTML document itself begins with <code>{'<html>'}</code> and ends with <code>{'</html>'}</code>.</p>
          <p>The visible part of the HTML document is between <code>{'<body>'}</code> and <code>{'</body>'}</code>.</p>
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
      title: 'The <!DOCTYPE> Declaration',
      content: (
        <>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
          <p>It must only appear once, at the top of the page (before any HTML tags).</p>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration is not case sensitive.</p>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration for HTML5 is:</p>
        </>
      ),
      example: `<!DOCTYPE html>`
    },
    {
      title: 'HTML Headings',
      content: (
        <>
          <p>HTML headings are defined with the <code>{'<h1>'}</code> to <code>{'<h6>'}</code> tags.</p>
          <p><code>{'<h1>'}</code> defines the most important heading. <code>{'<h6>'}</code> defines the least important heading.</p>
        </>
      ),
      example: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`
    },
    {
      title: 'HTML Paragraphs',
      content: (
        <>
          <p>HTML paragraphs are defined with the <code>{'<p>'}</code> tag.</p>
        </>
      ),
      example: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
    },
    {
      title: 'HTML Links',
      content: (
        <>
          <p>HTML links are defined with the <code>{'<a>'}</code> tag.</p>
        </>
      ),
      example: `<a href="https://www.w3schools.com">This is a link</a>`
    },
    {
      title: 'HTML Images',
      content: (
        <>
          <p>HTML images are defined with the <code>{'<img>'}</code> tag.</p>
          <p>The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes.</p>
        </>
      ),
      example: `<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`
    }
  ],
  codeExamples: [
    {
      title: 'Basic HTML Document Structure',
      description: 'The main elements of an HTML document.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

  <h1>My Heading</h1>
  <p>My paragraph.</p>
  <a href="https://www.example.com">This is a link</a>
  <img src="image.jpg" alt="Description of image">

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_editors'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_elements')
}; 