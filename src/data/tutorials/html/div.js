import { htmlTopics } from './htmlTopics';

export const htmlDiv = {
  id: 'html_div',
  title: 'HTML <div> Element',
  description: 'The <div> element is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.',
  sections: [
    {
      title: 'The <div> Element',
      content: (
        <>
          <p>The <code>{'<div>'}</code> element is used as a container for other HTML elements.</p>
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
      title: 'Using <div> as a Container',
      content: (
        <>
          <p>The <code>{'<div>'}</code> element is often used as a container for other HTML elements.</p>
          <p>The <code>{'<div>'}</code> element is used to group related elements together and apply styles to them.</p>
          <p>In the following example, we use <code>{'<div>'}</code> to create a simple layout:</p>
        </>
      ),
      example: `<div style="width:100%;height:100px;border:1px solid #000;">
  <div style="width:30%;height:100%;float:left;background-color:#aaa;">
    <p>Menu</p>
  </div>
  <div style="width:70%;height:100%;float:left;background-color:#bbb;">
    <p>Content</p>
  </div>
</div>`
    },
    {
      title: 'Nesting <div> Elements',
      content: (
        <>
          <p>You can nest <code>{'<div>'}</code> elements inside other <code>{'<div>'}</code> elements to create more complex layouts.</p>
          <p>This is a common practice when building web pages. It allows you to create structured, hierarchical layouts.</p>
        </>
      ),
      example: `<div style="background-color:#f1f1f1;padding:20px;">
  <h2>Outer Div</h2>
  <div style="background-color:#ddd;padding:20px;margin-top:20px;">
    <h3>Inner Div 1</h3>
    <p>This is content inside the first inner div.</p>
  </div>
  <div style="background-color:#ccc;padding:20px;margin-top:20px;">
    <h3>Inner Div 2</h3>
    <p>This is content inside the second inner div.</p>
  </div>
</div>`
    },
    {
      title: '<div> vs. Semantic Elements',
      content: (
        <>
          <p>In HTML5, it's recommended to use semantic elements like <code>{'<header>'}</code>, <code>{'<footer>'}</code>, <code>{'<section>'}</code>, and <code>{'<article>'}</code> instead of <code>{'<div>'}</code> elements where appropriate.</p>
          <p>Semantic elements provide meaning to the structure of your web page, making it more accessible and SEO-friendly.</p>
          <p>Compare these two examples:</p>
        </>
      ),
      example: `<!-- Using div elements (non-semantic) -->
<div class="header">
  <h1>Website Header</h1>
</div>
<div class="content">
  <div class="article">
    <h2>Article Title</h2>
    <p>Article content...</p>
  </div>
</div>
<div class="footer">
  <p>Copyright 2023</p>
</div>

<!-- Using semantic elements (recommended) -->
<header>
  <h1>Website Header</h1>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
</main>
<footer>
  <p>Copyright 2023</p>
</footer>`
    },
    {
      title: 'Block Element Properties',
      content: (
        <>
          <p>The <code>{'<div>'}</code> element is a block-level element, which means:</p>
          <ul>
            <li>It always starts on a new line</li>
            <li>It takes up the full width available</li>
            <li>It has a top and bottom margin</li>
          </ul>
          <p>These properties can be modified with CSS.</p>
        </>
      ),
      example: `<!-- Default block behavior -->
<div style="border:1px solid black;">
  This div takes the full width
</div>

<!-- Modified with CSS -->
<div style="border:1px solid black; width:50%; margin:20px auto;">
  This div is centered and takes 50% width
</div>`
    },
    {
      title: '<div> with Flexbox',
      content: (
        <>
          <p>Modern web development often uses CSS Flexbox with <code>{'<div>'}</code> elements to create flexible layouts.</p>
          <p>Flexbox makes it easier to design flexible responsive layouts without using floats or positioning.</p>
        </>
      ),
      example: `<div style="display:flex; justify-content:space-between; background-color:#f1f1f1; padding:10px;">
  <div style="background-color:#ddd; padding:20px;">Flex Item 1</div>
  <div style="background-color:#ddd; padding:20px;">Flex Item 2</div>
  <div style="background-color:#ddd; padding:20px;">Flex Item 3</div>
</div>`
    },
    {
      title: '<div> with Grid',
      content: (
        <>
          <p>CSS Grid is another modern layout system that works well with <code>{'<div>'}</code> elements.</p>
          <p>Grid allows you to create two-dimensional layouts with rows and columns.</p>
        </>
      ),
      example: `<div style="display:grid; grid-template-columns:1fr 1fr 1fr; grid-gap:10px; background-color:#f1f1f1; padding:10px;">
  <div style="background-color:#ddd; padding:20px;">Grid Item 1</div>
  <div style="background-color:#ddd; padding:20px;">Grid Item 2</div>
  <div style="background-color:#ddd; padding:20px;">Grid Item 3</div>
  <div style="background-color:#ddd; padding:20px;">Grid Item 4</div>
  <div style="background-color:#ddd; padding:20px;">Grid Item 5</div>
  <div style="background-color:#ddd; padding:20px;">Grid Item 6</div>
</div>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Div Layout Example',
      description: 'Example showing how to use div elements to create a basic web page layout.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Div Layout Example</title>
  <meta charset="UTF-8">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    
    body {
      line-height: 1.6;
    }
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .header {
      background-color: #4a6ea9;
      color: white;
      padding: 20px;
      text-align: center;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    
    .nav {
      background-color: #333;
      color: white;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    
    .nav-list {
      display: flex;
      list-style-type: none;
      justify-content: space-around;
    }
    
    .nav-list li a {
      color: white;
      text-decoration: none;
    }
    
    .content {
      display: flex;
      margin-bottom: 20px;
    }
    
    .main {
      flex: 3;
      background-color: #f1f1f1;
      padding: 20px;
      border-radius: 5px;
    }
    
    .sidebar {
      flex: 1;
      background-color: #ddd;
      padding: 20px;
      margin-left: 20px;
      border-radius: 5px;
    }
    
    .footer {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
    }
    
    .box {
      background-color: white;
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
    
    @media screen and (max-width: 768px) {
      .content {
        flex-direction: column;
      }
      
      .sidebar {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">
      <h1>Website Layout with Div Elements</h1>
      <p>A responsive layout using div containers</p>
    </div>
    
    <div class="nav">
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    
    <div class="content">
      <div class="main">
        <h2>Main Content</h2>
        
        <div class="box">
          <h3>About Div Elements</h3>
          <p>The div element is one of the most useful elements in HTML. It's a container that groups other elements together and can be styled with CSS.</p>
          <p>Divs are block-level elements that are often used to create layout structures on web pages.</p>
        </div>
        
        <div class="box">
          <h3>Creating Layouts</h3>
          <p>Divs can be nested inside other divs to create complex layouts. With CSS properties like display, float, flexbox, and grid, you can create virtually any layout you need.</p>
          <p>This example uses flexbox for the main content area to create a responsive layout that works on different screen sizes.</p>
        </div>
      </div>
      
      <div class="sidebar">
        <h2>Sidebar</h2>
        <div class="box">
          <h3>Related Links</h3>
          <ul>
            <li><a href="#">HTML Elements</a></li>
            <li><a href="#">CSS Layouts</a></li>
            <li><a href="#">Responsive Design</a></li>
          </ul>
        </div>
        
        <div class="box">
          <h3>Quick Tips</h3>
          <p>Always use semantic HTML where appropriate instead of divs.</p>
          <p>Use divs when you need a generic container with no semantic meaning.</p>
        </div>
      </div>
    </div>
    
    <div class="footer">
      <p>Copyright © 2023 | HTML Div Layout Example</p>
    </div>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_block_inline'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_classes')
}; 