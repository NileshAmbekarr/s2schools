import { htmlTopics } from './htmlTopics';

export const htmlParagraphs = {
  id: 'html_paragraphs',
  title: 'HTML Paragraphs',
  description: 'HTML paragraphs are defined with the p tag.',
  sections: [
    {
      title: 'HTML Paragraphs',
      content: (
        <>
          <p>The HTML <code>{'<p>'}</code> element defines a paragraph.</p>
          <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
        </>
      ),
      example: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
    },
    {
      title: 'HTML Display',
      content: (
        <>
          <p>You cannot be sure how HTML will be displayed.</p>
          <p>Large or small screens, and resized windows will create different results.</p>
          <p>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</p>
          <p>The browser will automatically remove any extra spaces and lines when the page is displayed:</p>
        </>
      ),
      example: `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`
    },
    {
      title: 'HTML Line Breaks',
      content: (
        <>
          <p>The HTML <code>{'<br>'}</code> element defines a line break.</p>
          <p>Use <code>{'<br>'}</code> if you want a line break (a new line) without starting a new paragraph:</p>
        </>
      ),
      example: `<p>This is<br>a paragraph<br>with line breaks.</p>`
    },
    {
      title: 'The HTML <pre> Element',
      content: (
        <>
          <p>The HTML <code>{'<pre>'}</code> element defines preformatted text.</p>
          <p>The text inside a <code>{'<pre>'}</code> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</p>
        </>
      ),
      example: `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Paragraphs Example',
      description: 'Example showing different ways to work with paragraphs in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Paragraphs</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Paragraphs</h1>
  
  <h2>Basic Paragraphs</h2>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  
  <h2>Line Breaks</h2>
  <p>This is a paragraph<br>with line breaks<br>that create new lines<br>without new paragraphs.</p>
  
  <h2>Preformatted Text</h2>
  <pre>
    This text is preformatted.
    Spaces and line breaks
    are preserved exactly as written
    in the HTML code.
        This line has extra indentation.
  </pre>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_headings'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_styles')
}; 