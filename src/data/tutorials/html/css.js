import { htmlTopics } from './htmlTopics';

export const htmlCss = {
  id: 'html_css',
  title: 'HTML CSS',
  description: 'CSS stands for Cascading Style Sheets and is used to style and layout web pages.',
  sections: [
    {
      title: 'What is CSS?',
      content: (
        <>
          <p>CSS stands for Cascading Style Sheets.</p>
          <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
          <p>CSS saves a lot of work. It can control the layout of multiple web pages all at once.</p>
          <p>External stylesheets are stored in CSS files.</p>
        </>
      )
    },
    {
      title: 'CSS Syntax',
      content: (
        <>
          <p>A CSS rule consists of a selector and a declaration block:</p>
          <p>The selector points to the HTML element you want to style.</p>
          <p>The declaration block contains one or more declarations separated by semicolons.</p>
          <p>Each declaration includes a CSS property name and a value, separated by a colon.</p>
          <p>Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
        </>
      ),
      example: `p {
  color: red;
  text-align: center;
}`
    },
    {
      title: 'CSS Selectors',
      content: (
        <>
          <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
          <p>We can divide CSS selectors into five categories:</p>
          <ul>
            <li>Simple selectors (select elements based on name, id, class)</li>
            <li>Combinator selectors (select elements based on a specific relationship between them)</li>
            <li>Pseudo-class selectors (select elements based on a certain state)</li>
            <li>Pseudo-elements selectors (select and style a part of an element)</li>
            <li>Attribute selectors (select elements based on an attribute or attribute value)</li>
          </ul>
        </>
      )
    },
    {
      title: 'How To Add CSS',
      content: (
        <>
          <p>There are three ways of inserting a style sheet:</p>
          <ul>
            <li>External CSS</li>
            <li>Internal CSS</li>
            <li>Inline CSS</li>
          </ul>
        </>
      )
    },
    {
      title: 'External CSS',
      content: (
        <>
          <p>With an external style sheet, you can change the look of an entire website by changing just one file!</p>
          <p>Each HTML page must include a reference to the external style sheet file inside the <code>{'<link>'}</code> element, inside the head section.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Internal CSS',
      content: (
        <>
          <p>An internal style sheet may be used if one single HTML page has a unique style.</p>
          <p>The internal style is defined inside the <code>{'<style>'}</code> element, inside the head section.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightblue;
    }
    
    h1 {
      color: navy;
      margin-left: 20px;
    }
  </style>
</head>
<body>

  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Inline CSS',
      content: (
        <>
          <p>An inline style may be used to apply a unique style for a single element.</p>
          <p>To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<body>

  <h1 style="color:blue;text-align:center;">This is a heading</h1>
  <p style="color:red;">This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'CSS Colors, Fonts and Sizes',
      content: (
        <>
          <p>Here, we will demonstrate some commonly used CSS properties. You will learn more about them later.</p>
          <p>The CSS <code>color</code> property defines the text color to be used.</p>
          <p>The CSS <code>font-family</code> property defines the font to be used.</p>
          <p>The CSS <code>font-size</code> property defines the text size to be used.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      font-family: verdana;
      font-size: 300%;
    }
    p {
      color: red;
      font-family: courier;
      font-size: 160%;
    }
  </style>
</head>
<body>

  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML with CSS Example',
      description: 'Example showing various ways to use CSS with HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML CSS</title>
  <meta charset="UTF-8">
  <!-- External CSS (normally in a separate file) -->
  <style>
    /* This would normally be in an external CSS file */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f0f8ff;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #0066cc;
      text-align: center;
    }
    
    .section {
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 5px;
    }
    
    .external {
      background-color: #e6ffe6;
      border-left: 5px solid #00cc00;
    }
    
    .internal {
      background-color: #e6f2ff;
      border-left: 5px solid #0066cc;
    }
    
    .inline {
      background-color: #fff0f0;
      border-left: 5px solid #cc0000;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>CSS in HTML</h1>
    
    <div class="section external">
      <h2>External CSS</h2>
      <p>External CSS is defined in a separate file and linked to HTML documents.</p>
      <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
    </div>
    
    <div class="section internal">
      <h2>Internal CSS</h2>
      <p>Internal CSS is defined within the &lt;style&gt; element in the &lt;head&gt; section.</p>
      <code>&lt;style&gt; body { background-color: lightblue; } &lt;/style&gt;</code>
    </div>
    
    <div class="section inline">
      <h2>Inline CSS</h2>
      <p>Inline CSS is applied directly to elements using the style attribute.</p>
      <p style="color:purple; font-weight:bold; text-decoration:underline;">This paragraph has inline styling!</p>
      <code>&lt;p style="color:purple; font-weight:bold;"&gt;Text&lt;/p&gt;</code>
    </div>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_colors'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_links')
}; 