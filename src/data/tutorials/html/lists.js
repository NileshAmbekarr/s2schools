import { htmlTopics } from './htmlTopics';

export const htmlLists = {
  id: 'html_lists',
  title: 'HTML Lists',
  description: 'HTML lists allow web developers to group a set of related items.',
  sections: [
    {
      title: 'HTML Lists',
      content: (
        <>
          <p>HTML lists allow web developers to group a set of related items in lists.</p>
        </>
      )
    },
    {
      title: 'Unordered HTML List',
      content: (
        <>
          <p>An unordered list starts with the <code>{'<ul>'}</code> tag. Each list item starts with the <code>{'<li>'}</code> tag.</p>
          <p>The list items will be marked with bullets (small black circles) by default:</p>
        </>
      ),
      example: `<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`
    },
    {
      title: 'Ordered HTML List',
      content: (
        <>
          <p>An ordered list starts with the <code>{'<ol>'}</code> tag. Each list item starts with the <code>{'<li>'}</code> tag.</p>
          <p>The list items will be marked with numbers by default:</p>
        </>
      ),
      example: `<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`
    },
    {
      title: 'HTML Description Lists',
      content: (
        <>
          <p>HTML also supports description lists.</p>
          <p>A description list is a list of terms, with a description of each term.</p>
          <p>The <code>{'<dl>'}</code> tag defines the description list, the <code>{'<dt>'}</code> tag defines the term (name), and the <code>{'<dd>'}</code> tag describes each term:</p>
        </>
      ),
      example: `<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`
    },
    {
      title: 'Unordered HTML List - Choose List Item Marker',
      content: (
        <>
          <p>The CSS <code>list-style-type</code> property is used to define the style of the list item marker. It can have one of the following values:</p>
          <ul>
            <li><code>disc</code> - Sets the list item marker to a bullet (default)</li>
            <li><code>circle</code> - Sets the list item marker to a circle</li>
            <li><code>square</code> - Sets the list item marker to a square</li>
            <li><code>none</code> - The list items will not be marked</li>
          </ul>
        </>
      ),
      example: `<ul style="list-style-type:disc;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`
    },
    {
      title: 'Ordered HTML List - The Type Attribute',
      content: (
        <>
          <p>The <code>type</code> attribute of the <code>{'<ol>'}</code> tag, defines the type of the list item marker:</p>
          <ul>
            <li><code>type="1"</code> - The list items will be numbered with numbers (default)</li>
            <li><code>type="A"</code> - The list items will be numbered with uppercase letters</li>
            <li><code>type="a"</code> - The list items will be numbered with lowercase letters</li>
            <li><code>type="I"</code> - The list items will be numbered with uppercase roman numbers</li>
            <li><code>type="i"</code> - The list items will be numbered with lowercase roman numbers</li>
          </ul>
        </>
      ),
      example: `<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`
    },
    {
      title: 'HTML List - Control List Counting',
      content: (
        <>
          <p>By default, an ordered list will start counting from 1. If you want to start counting from a specified number, you can use the <code>start</code> attribute:</p>
        </>
      ),
      example: `<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`
    },
    {
      title: 'Nested HTML Lists',
      content: (
        <>
          <p>Lists can be nested (list inside list):</p>
        </>
      ),
      example: `<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>`
    },
    {
      title: 'Horizontal Lists',
      content: (
        <>
          <p>HTML lists can be styled in many different ways with CSS.</p>
          <p>One popular way is to style a list horizontally, to create a navigation menu:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
</style>
</head>
<body>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Lists Example',
      description: 'Example showing various list types and styling in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Lists</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    
    .list-container {
      margin-bottom: 30px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    h2 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 5px;
    }
    
    /* Custom bullet styles */
    .custom-bullets {
      list-style: none;
      padding-left: 0;
    }
    
    .custom-bullets li {
      padding-left: 25px;
      position: relative;
      margin-bottom: 10px;
    }
    
    .custom-bullets li:before {
      content: '✓';
      color: #27ae60;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
    
    /* Horizontal navigation */
    .horizontal-nav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: #333;
      overflow: hidden;
    }
    
    .horizontal-nav li {
      float: left;
    }
    
    .horizontal-nav li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      transition: background-color 0.3s;
    }
    
    .horizontal-nav li a:hover {
      background-color: #111;
    }
    
    /* Multi-level list */
    .multi-level {
      list-style-type: disc;
    }
    
    .multi-level ul {
      list-style-type: circle;
    }
    
    .multi-level ul ul {
      list-style-type: square;
    }
  </style>
</head>
<body>

  <h1>HTML Lists Tutorial</h1>
  
  <div class="list-container">
    <h2>Unordered List</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
  </div>
  
  <div class="list-container">
    <h2>Ordered List</h2>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
      <li>Fourth item</li>
      <li>Fifth item</li>
    </ol>
  </div>
  
  <div class="list-container">
    <h2>Description List</h2>
    <dl>
      <dt>HTML</dt>
      <dd>HyperText Markup Language - the standard markup language for creating web pages</dd>
      
      <dt>CSS</dt>
      <dd>Cascading Style Sheets - used for describing the presentation of a document written in HTML</dd>
      
      <dt>JavaScript</dt>
      <dd>A programming language that enables interactive web pages</dd>
    </dl>
  </div>
  
  <div class="list-container">
    <h2>Custom Bullets</h2>
    <ul class="custom-bullets">
      <li>Custom bullet item 1</li>
      <li>Custom bullet item 2</li>
      <li>Custom bullet item 3</li>
    </ul>
  </div>
  
  <div class="list-container">
    <h2>Horizontal Navigation</h2>
    <ul class="horizontal-nav">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  
  <div class="list-container">
    <h2>Multi-level List</h2>
    <ul class="multi-level">
      <li>Front-end Development
        <ul>
          <li>HTML
            <ul>
              <li>Tags</li>
              <li>Attributes</li>
              <li>Semantics</li>
            </ul>
          </li>
          <li>CSS
            <ul>
              <li>Selectors</li>
              <li>Box Model</li>
              <li>Flexbox</li>
            </ul>
          </li>
          <li>JavaScript
            <ul>
              <li>Syntax</li>
              <li>DOM Manipulation</li>
              <li>Events</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Back-end Development
        <ul>
          <li>Node.js</li>
          <li>Python</li>
          <li>PHP</li>
        </ul>
      </li>
    </ul>
  </div>
  
  <div class="list-container">
    <h2>Different Ordered List Types</h2>
    
    <h3>Decimal (default)</h3>
    <ol type="1">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
    
    <h3>Uppercase Letters</h3>
    <ol type="A">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
    
    <h3>Lowercase Letters</h3>
    <ol type="a">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
    
    <h3>Uppercase Roman Numerals</h3>
    <ol type="I">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
    
    <h3>Lowercase Roman Numerals</h3>
    <ol type="i">
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_tables'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_block_inline')
};