import { htmlTopics } from './htmlTopics';

export const htmlClasses = {
  id: 'html_classes',
  title: 'HTML Classes',
  description: 'The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.',
  sections: [
    {
      title: 'Using The class Attribute',
      content: (
        <>
          <p>The <code>class</code> attribute is used to specify a class for an HTML element.</p>
          <p>Multiple HTML elements can share the same class.</p>
          <p>The <code>class</code> attribute is often used to point to a class name in a style sheet. It can also be used by JavaScript to access and manipulate elements with the specific class name.</p>
        </>
      ),
      example: `<h2 class="city">London</h2>
<p class="city">London is the capital of England.</p>`
    },
    {
      title: 'The CSS Class Selector',
      content: (
        <>
          <p>To create a class selector, use a period (.) character, followed by the class name in the CSS:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>

<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

</body>
</html>`
    },
    {
      title: 'Multiple Classes',
      content: (
        <>
          <p>HTML elements can have more than one class name, each class name must be separated by a space.</p>
        </>
      ),
      example: `<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>`
    },
    {
      title: 'Different Elements Can Share Same Class',
      content: (
        <>
          <p>Different HTML elements can point to the same class name.</p>
        </>
      ),
      example: `<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>`
    },
    {
      title: 'Use of Classes in JavaScript',
      content: (
        <>
          <p>Classes are also used by JavaScript to access and manipulate elements with the specific class name.</p>
          <p>JavaScript can access elements with a specific class name with the <code>getElementsByClassName()</code> method:</p>
        </>
      ),
      example: `<script>
function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
</script>`
    },
    {
      title: 'The Syntax For Class',
      content: (
        <>
          <p>To specify a class for an HTML element, write the following:</p>
          <pre>{'<element class="classname">'}</pre>
          <p>Then define the class in your CSS:</p>
          <pre>{'.classname {\n  // CSS properties\n}'}</pre>
        </>
      )
    },
    {
      title: 'Class Names Are Case-Sensitive',
      content: (
        <>
          <p>Class names are case-sensitive!</p>
          <p>The following example will not work because the CSS class name is "city" but the HTML class attribute refers to a class named "City":</p>
        </>
      ),
      example: `<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- This won't work because classes are case sensitive -->
<h2 class="City">London</h2>`
    },
    {
      title: 'Class Naming Conventions',
      content: (
        <>
          <p>When naming classes, it is common to use naming conventions to improve the readability and maintainability of your code.</p>
          <p>Some popular naming conventions include:</p>
          <ul>
            <li><strong>Hyphen Delimited</strong> - e.g., <code>main-content</code>, <code>sidebar-left</code></li>
            <li><strong>Camel Case</strong> - e.g., <code>mainContent</code>, <code>sidebarLeft</code></li>
            <li><strong>BEM (Block Element Modifier)</strong> - e.g., <code>block__element--modifier</code>, <code>card__title--large</code></li>
          </ul>
          <p>Choose a convention and be consistent throughout your project.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML Classes Complete Example',
      description: 'A comprehensive example showing the use of HTML classes.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Classes Example</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    
    /* Basic styling for different sections */
    .section {
      margin-bottom: 30px;
      padding: 20px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
    
    /* Apply styles to different section types */
    .section--primary {
      background-color: #e6f7ff;
      border-color: #91d5ff;
    }
    
    .section--secondary {
      background-color: #f6ffed;
      border-color: #b7eb8f;
    }
    
    .section--warning {
      background-color: #fffbe6;
      border-color: #ffe58f;
    }
    
    /* Heading styles */
    .section__heading {
      margin-top: 0;
      color: #333;
    }
    
    .section--primary .section__heading {
      color: #0050b3;
    }
    
    .section--secondary .section__heading {
      color: #389e0d;
    }
    
    .section--warning .section__heading {
      color: #d48806;
    }
    
    /* Content styles */
    .section__content {
      font-size: 16px;
    }
    
    /* Button styles */
    .button {
      display: inline-block;
      padding: 10px 15px;
      background-color: #1890ff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      font-size: 14px;
    }
    
    .button--large {
      font-size: 16px;
      padding: 12px 20px;
    }
    
    .button--secondary {
      background-color: #52c41a;
    }
    
    .button--warning {
      background-color: #faad14;
    }
    
    /* Utility classes */
    .text-center {
      text-align: center;
    }
    
    .text-right {
      text-align: right;
    }
    
    .mt-20 {
      margin-top: 20px;
    }
    
    .hidden {
      display: none;
    }
  </style>
</head>
<body>

  <h1 class="text-center">HTML Classes Example</h1>
  <p class="text-center">This page demonstrates the effective use of HTML classes.</p>
  
  <!-- Primary Section -->
  <div class="section section--primary">
    <h2 class="section__heading">Using Basic Classes</h2>
    <div class="section__content">
      <p>Classes allow you to apply the same styling to multiple elements. This entire box is styled using the <code>section</code> and <code>section--primary</code> classes.</p>
      <p>The heading above uses the <code>section__heading</code> class.</p>
      <div class="text-right mt-20">
        <button class="button" onclick="toggleSection('advanced-section')">Show Advanced Example</button>
      </div>
    </div>
  </div>
  
  <!-- Hidden section - will be shown via JavaScript -->
  <div id="advanced-section" class="section section--secondary hidden">
    <h2 class="section__heading">Advanced Class Usage</h2>
    <div class="section__content">
      <p>This section demonstrates more advanced usage of classes, including:</p>
      <ul>
        <li>Multiple classes on the same element (<code>section section--secondary</code>)</li>
        <li>BEM naming convention (Block__Element--Modifier)</li>
        <li>Utility classes for common styling needs</li>
      </ul>
      <div class="text-right mt-20">
        <button class="button button--secondary" onclick="hideSection('advanced-section')">Hide Section</button>
      </div>
    </div>
  </div>
  
  <!-- Warning Section -->
  <div class="section section--warning">
    <h2 class="section__heading">Class Naming Best Practices</h2>
    <div class="section__content">
      <p>When naming classes, follow these best practices:</p>
      <ul>
        <li>Use meaningful names that reflect the purpose of the element</li>
        <li>Be consistent with your naming convention</li>
        <li>Use multiple classes to build complexity rather than creating many specific classes</li>
        <li>Separate concerns: use classes for styling, not for JavaScript behavior</li>
      </ul>
      <div class="text-center mt-20">
        <a href="#" class="button button--warning button--large">Learn More</a>
      </div>
    </div>
  </div>
  
  <script>
    // JavaScript for interactivity using classes
    function toggleSection(id) {
      var element = document.getElementById(id);
      element.classList.toggle('hidden');
    }
    
    function hideSection(id) {
      var element = document.getElementById(id);
      element.classList.add('hidden');
    }
  </script>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_div'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_id')
}; 