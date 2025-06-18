import { htmlTopics } from './htmlTopics';

export const htmlId = {
  id: 'html_id',
  title: 'HTML id Attribute',
  description: 'The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.',
  sections: [
    {
      title: 'The id Attribute',
      content: (
        <>
          <p>The <code>id</code> attribute specifies a unique id for an HTML element. The value of the <code>id</code> attribute must be unique within the HTML document.</p>
          <p>The <code>id</code> attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.</p>
          <p>The syntax for id is: <code>write a rule with #</code> followed by the id:</p>
        </>
      ),
      example: `<!-- HTML with id -->
<h1 id="myHeader">Hello World!</h1>

<!-- CSS using the id -->
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>`
    },
    {
      title: 'Difference Between Class and ID',
      content: (
        <>
          <p>A class name can be used by multiple HTML elements, while an id name must only be used by one HTML element within the page:</p>
        </>
      ),
      example: `<!-- Using a class (can be used multiple times) -->
<h2 class="city">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>

<!-- Using an id (must be unique) -->
<h2 id="london">London</h2>
<h2 id="paris">Paris</h2>
<h2 id="tokyo">Tokyo</h2>`
    },
    {
      title: 'HTML Bookmarks with ID and Links',
      content: (
        <>
          <p>HTML bookmarks are used to allow readers to jump to specific parts of a webpage.</p>
          <p>Bookmarks can be useful if your page is very long.</p>
          <p>To use a bookmark, you must first create it, and then add a link to it.</p>
          <p>Then, when the link is clicked, the page will scroll to the location with the bookmark.</p>
        </>
      ),
      example: `<!-- First, create a bookmark with the id attribute -->
<h2 id="C4">Chapter 4</h2>

<!-- Then, add a link to the bookmark from within the same page -->
<a href="#C4">Jump to Chapter 4</a>

<!-- Or, add a link to the bookmark from another page -->
<a href="html_demo.html#C4">Jump to Chapter 4</a>`
    },
    {
      title: 'Using id with JavaScript',
      content: (
        <>
          <p>The <code>id</code> attribute can be used to identify HTML elements in JavaScript.</p>
          <p>JavaScript can access an element with a specific id by using the <code>getElementById()</code> method:</p>
        </>
      ),
      example: `<h1 id="myHeader">Hello World!</h1>
<button onclick="displayText()">Change text</button>

<script>
function displayText() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>`
    },
    {
      title: 'HTML id Rules',
      content: (
        <>
          <p>The id attribute must be unique within the HTML document, meaning no two elements can have the same id value.</p>
          <p>The id value must contain at least one character, and cannot contain any whitespace characters (spaces, tabs, etc.).</p>
          <p>While the HTML5 specification does not require a specific format for id values, it is common practice to follow these rules:</p>
          <ul>
            <li>Start with a letter (A-Z or a-z)</li>
            <li>Can be followed by letters, digits (0-9), hyphens (-), underscores (_), colons (:), and periods (.)</li>
            <li>Are case-sensitive</li>
          </ul>
          <p>Examples of valid id values:</p>
          <ul>
            <li><code>header1</code></li>
            <li><code>main-content</code></li>
            <li><code>section_2</code></li>
            <li><code>nav:primary</code></li>
          </ul>
        </>
      )
    },
    {
      title: 'Using id for CSS',
      content: (
        <>
          <p>In CSS, to select an element with a specific id, write a hash (#) character, followed by the id of the element:</p>
        </>
      ),
      example: `<style>
/* CSS selector for id */
#myHeader {
  background-color: #f1f1f1;
  color: #333;
  padding: 20px;
  text-align: center;
}

/* Class selector for comparison */
.header {
  background-color: #f1f1f1;
  color: #333;
  padding: 20px;
  text-align: center;
}
</style>

<!-- Using id -->
<h1 id="myHeader">My Header with ID</h1>

<!-- Using class -->
<h1 class="header">My Header with Class</h1>`
    },
    {
      title: 'id vs. class: CSS Specificity',
      content: (
        <>
          <p>In CSS, id selectors have higher specificity than class selectors.</p>
          <p>This means that if an element has both an id and a class, and there are conflicting style rules for the same property, the id style will override the class style.</p>
        </>
      ),
      example: `<style>
#myElement {
  color: red;
}

.myClass {
  color: blue;
}
</style>

<!-- This text will be red because the id selector has higher specificity -->
<p id="myElement" class="myClass">This text is styled by both id and class.</p>`
    },
    {
      title: 'Using id for Document Navigation',
      content: (
        <>
          <p>The id attribute is commonly used for document navigation, allowing users to jump to specific sections of a page.</p>
          <p>This is particularly useful for long pages like FAQ sections, glossaries, or detailed articles.</p>
          <p>Example of a table of contents with navigation links:</p>
        </>
      ),
      example: `<h1>Table of Contents</h1>
<ul>
  <li><a href="#section1">Section 1</a></li>
  <li><a href="#section2">Section 2</a></li>
  <li><a href="#section3">Section 3</a></li>
</ul>

<h2 id="section1">Section 1</h2>
<p>Content for section 1...</p>

<h2 id="section2">Section 2</h2>
<p>Content for section 2...</p>

<h2 id="section3">Section 3</h2>
<p>Content for section 3...</p>

<!-- "Back to top" link -->
<a href="#top">Back to top</a>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML ID Complete Example',
      description: 'A comprehensive example showing the use of HTML id attributes.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML ID Attribute Example</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
    }
    
    /* Style the navigation */
    #tableOfContents {
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 20px;
    }
    
    #tableOfContents h2 {
      margin-top: 0;
      color: #333;
    }
    
    #tableOfContents ul {
      list-style-type: none;
      padding-left: 0;
    }
    
    #tableOfContents li {
      margin-bottom: 5px;
    }
    
    #tableOfContents a {
      text-decoration: none;
      color: #0366d6;
    }
    
    #tableOfContents a:hover {
      text-decoration: underline;
    }
    
    /* Style content sections */
    section {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    
    #introduction {
      background-color: #e6f7ff;
      border-color: #91d5ff;
    }
    
    #syntax {
      background-color: #f6ffed;
      border-color: #b7eb8f;
    }
    
    #examples {
      background-color: #fff7e6;
      border-color: #ffd591;
    }
    
    #bestPractices {
      background-color: #f9f0ff;
      border-color: #d3adf7;
    }
    
    /* Style heading anchors */
    section h2 {
      position: relative;
      padding-top: 10px;
      margin-top: 0;
    }
    
    .anchor-link {
      position: absolute;
      top: 10px;
      left: -25px;
      opacity: 0.5;
      font-size: 20px;
      text-decoration: none;
    }
    
    .anchor-link:hover {
      opacity: 1;
    }
    
    /* Style the "back to top" button */
    #backToTop {
      display: inline-block;
      background-color: #333;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      text-decoration: none;
      margin-top: 20px;
    }
    
    #backToTop:hover {
      background-color: #555;
    }
    
    /* Code example styling */
    .code-example {
      background-color: #f1f1f1;
      border-left: 4px solid #0366d6;
      padding: 15px;
      margin: 15px 0;
      overflow-x: auto;
    }
    
    /* Interactive element */
    #colorChanger {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 15px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 5px;
    }
    
    #demoElement {
      width: 100%;
      height: 100px;
      background-color: #f1f1f1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      transition: background-color 0.3s;
    }
  </style>
</head>
<body id="top">

  <h1>HTML ID Attribute Tutorial</h1>
  
  <div id="tableOfContents">
    <h2>Table of Contents</h2>
    <ul>
      <li><a href="#introduction">Introduction to ID Attributes</a></li>
      <li><a href="#syntax">ID Syntax and Rules</a></li>
      <li><a href="#examples">ID Examples and Usage</a></li>
      <li><a href="#bestPractices">Best Practices</a></li>
      <li><a href="#interactive">Interactive Example</a></li>
    </ul>
  </div>
  
  <section id="introduction">
    <h2><a href="#introduction" class="anchor-link">#</a>Introduction to ID Attributes</h2>
    <p>The HTML <code>id</code> attribute is used to specify a unique identifier for an HTML element. Unlike the <code>class</code> attribute, the value of an <code>id</code> attribute must be unique within the HTML document.</p>
    <p>The <code>id</code> attribute serves several important purposes:</p>
    <ul>
      <li>CSS styling: To style a specific element</li>
      <li>JavaScript interaction: To access and manipulate a specific element</li>
      <li>Document navigation: To create bookmarks within a page</li>
      <li>Accessibility: To label elements for screen readers</li>
    </ul>
  </section>
  
  <section id="syntax">
    <h2><a href="#syntax" class="anchor-link">#</a>ID Syntax and Rules</h2>
    <p>When using the <code>id</code> attribute, remember these important rules:</p>
    <ul>
      <li>Each <code>id</code> value must be unique within the document</li>
      <li>The <code>id</code> value must contain at least one character</li>
      <li>The <code>id</code> value cannot contain whitespace</li>
      <li>The <code>id</code> should start with a letter (a-z or A-Z)</li>
      <li>The <code>id</code> is case sensitive</li>
    </ul>
    
    <div class="code-example">
      <p>HTML syntax:</p>
      <pre>&lt;element id="uniqueId"&gt;Content&lt;/element&gt;</pre>
      
      <p>CSS selector syntax:</p>
      <pre>#uniqueId {
  property: value;
}</pre>
      
      <p>JavaScript access:</p>
      <pre>document.getElementById("uniqueId");</pre>
    </div>
  </section>
  
  <section id="examples">
    <h2><a href="#examples" class="anchor-link">#</a>ID Examples and Usage</h2>
    <p>Here are some common ways to use the <code>id</code> attribute:</p>
    
    <h3>1. CSS Styling</h3>
    <div class="code-example">
      <pre>&lt;style&gt;
#header {
  background-color: navy;
  color: white;
  padding: 20px;
  text-align: center;
}
&lt;/style&gt;

&lt;div id="header"&gt;
  &lt;h1&gt;My Website Header&lt;/h1&gt;
&lt;/div&gt;</pre>
    </div>
    
    <h3>2. Document Navigation</h3>
    <div class="code-example">
      <pre>&lt;a href="#section3"&gt;Jump to Section 3&lt;/a&gt;

&lt;!-- Later in the document --&gt;
&lt;h2 id="section3"&gt;Section 3&lt;/h2&gt;</pre>
    </div>
    
    <h3>3. JavaScript Interaction</h3>
    <div class="code-example">
      <pre>&lt;button onclick="changeText()"&gt;Click Me&lt;/button&gt;
&lt;p id="demo"&gt;This is the original text.&lt;/p&gt;

&lt;script&gt;
function changeText() {
  document.getElementById("demo").innerHTML = "Text changed!";
}
&lt;/script&gt;</pre>
    </div>
  </section>
  
  <section id="bestPractices">
    <h2><a href="#bestPractices" class="anchor-link">#</a>Best Practices</h2>
    <p>When using the <code>id</code> attribute, follow these best practices:</p>
    <ul>
      <li>Use meaningful, descriptive names that represent the element's purpose</li>
      <li>Keep IDs as short as possible while still being descriptive</li>
      <li>Use camelCase or kebab-case consistently for better readability</li>
      <li>Never start an ID with a number</li>
      <li>Don't use the same ID more than once in a document</li>
      <li>Prefer using classes for styling when the style will be applied to multiple elements</li>
      <li>Avoid overly specific CSS selectors with IDs</li>
    </ul>
  </section>
  
  <section id="interactive">
    <h2><a href="#interactive" class="anchor-link">#</a>Interactive Example</h2>
    <p>This example demonstrates how to use JavaScript to interact with an element by its ID:</p>
    
    <div id="demoElement">
      <p>This element's background color will change when you click the button.</p>
    </div>
    
    <button id="colorChanger" onclick="changeColor()">Change Color</button>
    
    <script>
      let colors = ['#f1f1f1', '#ffcccb', '#90ee90', '#add8e6', '#f8d568'];
      let currentIndex = 0;
      
      function changeColor() {
        currentIndex = (currentIndex + 1) % colors.length;
        document.getElementById('demoElement').style.backgroundColor = colors[currentIndex];
      }
    </script>
  </section>
  
  <a href="#top" id="backToTop">Back to Top</a>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_classes'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_iframes')
};