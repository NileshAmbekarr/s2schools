import { htmlTopics } from './htmlTopics';

export const htmlIntroduction = {
  id: 'html_intro',
  title: 'HTML Introduction',
  description: 'HTML is the standard markup language for creating Web pages.',
  sections: [
    {
      title: 'What is HTML?',
      content: (
        <>
          <p>HTML stands for Hyper Text Markup Language.</p>
          <p>HTML is the standard markup language for creating Web pages.</p>
          <p>HTML describes the structure of a Web page.</p>
          <p>HTML consists of a series of elements.</p>
          <p>HTML elements tell the browser how to display the content.</p>
        </>
      )
    },
    {
      title: 'A Simple HTML Document',
      content: (
        <>
          <p>The following example shows a very simple HTML document:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Example Explained',
      content: (
        <>
          <p>The <code>!DOCTYPE html</code> declaration defines that this document is an HTML5 document.</p>
          <p>The <code>html</code> element is the root element of an HTML page.</p>
          <p>The <code>head</code> element contains meta information about the HTML page.</p>
          <p>The <code>title</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).</p>
          <p>The <code>body</code> element defines the document's body, which contains all the visible contents of a web page.</p>
          <p>The <code>h1</code> element defines a large heading.</p>
          <p>The <code>p</code> element defines a paragraph.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Simple HTML Page',
      description: 'A basic HTML page with headings and paragraphs.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>

  <h1>Welcome to HTML</h1>
  <p>This is your first HTML page.</p>
  <h2>What is HTML?</h2>
  <p>HTML stands for Hyper Text Markup Language.</p>
  <p>It is the standard markup language for creating Web pages.</p>

</body>
</html>`
    },
    {
      title: 'HTML with Formatting',
      description: 'An HTML page with basic text formatting.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Formatting</title>
</head>
<body>

  <h1>Text Formatting in HTML</h1>
  
  <p>This text is normal.</p>
  <p><b>This text is bold.</b></p>
  <p><i>This text is italic.</i></p>
  <p><mark>This text is highlighted.</mark></p>
  <p><small>This text is small.</small></p>
  <p><del>This text is deleted.</del></p>
  <p><ins>This text is inserted.</ins></p>
  <p>This is <sub>subscript</sub> and <sup>superscript</sup></p>

</body>
</html>`
    }
  ],
  nextTopic: htmlTopics.find(topic => topic.id === 'html_editors')
}; 