import { htmlTopics } from './htmlTopics';

export const htmlBlockInline = {
  id: 'html_block_inline',
  title: 'HTML Block and Inline Elements',
  description: 'Every HTML element has a default display value, which is either block or inline.',
  sections: [
    {
      title: 'Block-level Elements',
      content: (
        <>
          <p>A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).</p>
          <p>Examples of block-level elements:</p>
          <ul>
            <li><code>{'<div>'}</code></li>
            <li><code>{'<h1>'}</code> to <code>{'<h6>'}</code></li>
            <li><code>{'<p>'}</code></li>
            <li><code>{'<form>'}</code></li>
            <li><code>{'<header>'}</code></li>
            <li><code>{'<footer>'}</code></li>
            <li><code>{'<section>'}</code></li>
          </ul>
        </>
      ),
      example: `<div>Hello World</div>
<p>This is a paragraph</p>
<h1>This is a heading</h1>`
    },
    {
      title: 'Inline Elements',
      content: (
        <>
          <p>An inline element does not start on a new line and only takes up as much width as necessary.</p>
          <p>Examples of inline elements:</p>
          <ul>
            <li><code>{'<span>'}</code></li>
            <li><code>{'<a>'}</code></li>
            <li><code>{'<img>'}</code></li>
            <li><code>{'<em>'}</code></li>
            <li><code>{'<strong>'}</code></li>
            <li><code>{'<button>'}</code></li>
            <li><code>{'<input>'}</code></li>
          </ul>
        </>
      ),
      example: `<span>Hello World</span>
<a href="#">This is a link</a>
<strong>This is important text</strong>`
    },
    {
      title: 'The <div> Element',
      content: (
        <>
          <p>The <code>{'<div>'}</code> element is often used as a container for other HTML elements.</p>
          <p>The <code>{'<div>'}</code> element has no required attributes, but <code>style</code>, <code>class</code> and <code>id</code> are common.</p>
          <p>When used together with CSS, the <code>{'<div>'}</code> element can be used to style blocks of content:</p>
        </>
      ),
      example: `<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 13 million inhabitants.</p>
</div>`
    },
    {
      title: 'The <span> Element',
      content: (
        <>
          <p>The <code>{'<span>'}</code> element is an inline container used to mark up a part of a text, or a part of a document.</p>
          <p>The <code>{'<span>'}</code> element has no required attributes, but <code>style</code>, <code>class</code> and <code>id</code> are common.</p>
          <p>When used together with CSS, the <code>{'<span>'}</code> element can be used to style parts of the text:</p>
        </>
      ),
      example: `<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span> eyes.</p>`
    },
    {
      title: 'HTML Block Elements List',
      content: (
        <>
          <p>Here is the list of block-level elements in HTML:</p>
          <ul>
            <li><code>{'<address>'}</code> - Contact information</li>
            <li><code>{'<article>'}</code> - Article content</li>
            <li><code>{'<aside>'}</code> - Aside content</li>
            <li><code>{'<blockquote>'}</code> - Long quotation</li>
            <li><code>{'<canvas>'}</code> - Drawing canvas</li>
            <li><code>{'<dd>'}</code> - Description in a description list</li>
            <li><code>{'<div>'}</code> - Document division</li>
            <li><code>{'<dl>'}</code> - Description list</li>
            <li><code>{'<dt>'}</code> - Term in a description list</li>
            <li><code>{'<fieldset>'}</code> - Field set in a form</li>
            <li><code>{'<figcaption>'}</code> - Figure caption</li>
            <li><code>{'<figure>'}</code> - Figure with optional caption</li>
            <li><code>{'<footer>'}</code> - Footer of a document</li>
            <li><code>{'<form>'}</code> - Form for user input</li>
            <li><code>{'<h1>'}</code> to <code>{'<h6>'}</code> - Headings</li>
            <li><code>{'<header>'}</code> - Header of a document</li>
            <li><code>{'<hr>'}</code> - Horizontal rule (divider)</li>
            <li><code>{'<li>'}</code> - List item</li>
            <li><code>{'<main>'}</code> - Main content</li>
            <li><code>{'<nav>'}</code> - Navigation links</li>
            <li><code>{'<ol>'}</code> - Ordered list</li>
            <li><code>{'<p>'}</code> - Paragraph</li>
            <li><code>{'<pre>'}</code> - Preformatted text</li>
            <li><code>{'<section>'}</code> - Section in a document</li>
            <li><code>{'<table>'}</code> - Table</li>
            <li><code>{'<ul>'}</code> - Unordered list</li>
          </ul>
        </>
      )
    },
    {
      title: 'HTML Inline Elements List',
      content: (
        <>
          <p>Here is the list of inline elements in HTML:</p>
          <ul>
            <li><code>{'<a>'}</code> - Hyperlink</li>
            <li><code>{'<abbr>'}</code> - Abbreviation</li>
            <li><code>{'<b>'}</code> - Bold text</li>
            <li><code>{'<bdo>'}</code> - Text direction</li>
            <li><code>{'<br>'}</code> - Line break</li>
            <li><code>{'<button>'}</code> - Clickable button</li>
            <li><code>{'<cite>'}</code> - Citation</li>
            <li><code>{'<code>'}</code> - Computer code text</li>
            <li><code>{'<dfn>'}</code> - Definition term</li>
            <li><code>{'<em>'}</code> - Emphasized text</li>
            <li><code>{'<i>'}</code> - Italic text</li>
            <li><code>{'<img>'}</code> - Image</li>
            <li><code>{'<input>'}</code> - Input control</li>
            <li><code>{'<kbd>'}</code> - Keyboard text</li>
            <li><code>{'<label>'}</code> - Label for an input</li>
            <li><code>{'<map>'}</code> - Image map</li>
            <li><code>{'<object>'}</code> - Embedded object</li>
            <li><code>{'<output>'}</code> - Output of a calculation</li>
            <li><code>{'<q>'}</code> - Short quotation</li>
            <li><code>{'<samp>'}</code> - Sample computer code</li>
            <li><code>{'<script>'}</code> - Client-side script</li>
            <li><code>{'<select>'}</code> - Selection list (drop-down)</li>
            <li><code>{'<small>'}</code> - Smaller text</li>
            <li><code>{'<span>'}</code> - Section in a document</li>
            <li><code>{'<strong>'}</code> - Important text</li>
            <li><code>{'<sub>'}</code> - Subscripted text</li>
            <li><code>{'<sup>'}</code> - Superscripted text</li>
            <li><code>{'<textarea>'}</code> - Multi-line text input</li>
            <li><code>{'<time>'}</code> - Date/time</li>
            <li><code>{'<var>'}</code> - Variable</li>
          </ul>
        </>
      )
    },
    {
      title: 'Changing Display Property',
      content: (
        <>
          <p>You can change how elements behave by changing their <code>display</code> property with CSS.</p>
          <p>Here's how to change an inline element to a block element, and vice versa:</p>
        </>
      ),
      example: `<!-- Make inline elements display as block elements -->
<span style="display:block">Hello World</span>

<!-- Make block elements display as inline elements -->
<div style="display:inline">Hello World</div>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Block and Inline Elements Example',
      description: 'Example showing the difference between block and inline elements.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Block and Inline Elements</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    
    .demo-block {
      background-color: #f0f0f0;
      border: 1px solid #ddd;
      margin: 10px 0;
      padding: 20px;
    }
    
    .block-elements div, 
    .block-elements p, 
    .block-elements h3 {
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      padding: 10px;
      margin: 5px 0;
    }
    
    .inline-elements span, 
    .inline-elements a, 
    .inline-elements strong, 
    .inline-elements em {
      background-color: #fff7e6;
      border: 1px solid #ffd591;
      padding: 5px;
      margin: 0 5px;
    }
    
    .changed-display span {
      display: block;
      background-color: #e6f7ff;
      border: 1px solid #91d5ff;
      padding: 10px;
      margin: 5px 0;
    }
    
    .changed-display div {
      display: inline;
      background-color: #fff7e6;
      border: 1px solid #ffd591;
      padding: 5px;
      margin: 0 5px;
    }
    
    .highlight {
      background-color: #ffffcc;
      padding: 2px 5px;
      border-radius: 3px;
    }
  </style>
</head>
<body>

  <h1>HTML Block and Inline Elements</h1>
  
  <div class="demo-block">
    <h2>Block-level Elements</h2>
    <p>Block-level elements always start on a new line and take up the full width available.</p>
    
    <div class="block-elements">
      <div>This is a div element</div>
      <p>This is a paragraph element</p>
      <h3>This is a heading element</h3>
    </div>
  </div>
  
  <div class="demo-block">
    <h2>Inline Elements</h2>
    <p>Inline elements do not start on a new line and only take up as much width as necessary.</p>
    
    <div class="inline-elements">
      This is normal text with 
      <span>a span element</span>, 
      <a href="#">a link element</a>, 
      <strong>a strong element</strong>, and 
      <em>an emphasized element</em> 
      in the same line.
    </div>
  </div>
  
  <div class="demo-block">
    <h2>Changing Display Property</h2>
    <p>You can change how elements behave by changing their display property with CSS.</p>
    
    <h3>Inline to Block:</h3>
    <div class="changed-display">
      <span>This span is now a block element (display: block)</span>
      <span>Each span starts on a new line</span>
      <span>And takes up the full width</span>
    </div>
    
    <h3>Block to Inline:</h3>
    <div class="changed-display">
      <div>This div</div>
      <div>is now</div>
      <div>an inline element</div>
      <div>(display: inline)</div>
    </div>
  </div>
  
  <div class="demo-block">
    <h2>Practical Usage</h2>
    <p>Understanding block and inline elements is essential for layout control:</p>
    <ul>
      <li>Use <span class="highlight">block elements</span> for main sections and structural components</li>
      <li>Use <span class="highlight">inline elements</span> for text-level semantics and content within blocks</li>
      <li>Use CSS to change display properties when needed for specific layout requirements</li>
    </ul>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_lists'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_div')
}; 