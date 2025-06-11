// HTML topics data - this will be used to generate the sidebar and navigate between tutorials
export const htmlTopics = [
  { id: 'html_intro', title: 'HTML Introduction', path: '/tutorials/html/introduction' },
  { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' },
  { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' },
  { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' },
  { id: 'html_attributes', title: 'HTML Attributes', path: '/tutorials/html/attributes' },
  // ... more topics as in the Sidebar component
];

// Content for the HTML introduction tutorial
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
  nextTopic: { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' }
};

// Content for the HTML Editors tutorial
export const htmlEditors = {
  id: 'html_editors',
  title: 'HTML Editors',
  description: 'Web pages can be created and modified by using professional HTML editors.',
  sections: [
    {
      title: 'Learn HTML Using Notepad or TextEdit',
      content: (
        <>
          <p>Web pages can be created and modified by using professional HTML editors.</p>
          <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
          <p>We believe in using the simplest editor when learning HTML, as it helps focus on learning HTML, and not on the editor itself.</p>
        </>
      )
    },
    {
      title: 'Step 1: Open Notepad (PC)',
      content: (
        <>
          <p>Windows 8 or later:</p>
          <p>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</p>
          <p>Windows 7 or earlier:</p>
          <p>Open Start {'>'} Programs {'>'} Accessories {'>'} Notepad</p>
        </>
      )
    },
    {
      title: 'Step 2: Write Some HTML',
      content: (
        <>
          <p>Write or copy the following HTML code into Notepad:</p>
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
      title: 'Step 3: Save the HTML Page',
      content: (
        <>
          <p>Save the file on your computer. Select File {'>'} Save as in the Notepad menu.</p>
          <p>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</p>
        </>
      )
    },
    {
      title: 'Step 4: View the HTML Page in Your Browser',
      content: (
        <>
          <p>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Basic HTML Template',
      description: 'A starter template you can use in any text editor.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_intro', title: 'HTML Introduction', path: '/tutorials/html/introduction' },
  nextTopic: { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' }
};

// Content for the HTML Basic tutorial
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
  previousTopic: { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' },
  nextTopic: { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' }
}; 