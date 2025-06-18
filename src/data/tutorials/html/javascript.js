import { htmlTopics } from './htmlTopics';

export const htmlJavaScript = {
  id: 'html_javascript',
  title: 'HTML JavaScript',
  description: 'JavaScript makes HTML pages more dynamic and interactive.',
  sections: [
    {
      title: 'The HTML <script> Element',
      content: (
        <>
          <p>The HTML <code>{'<script>'}</code> element is used to define client-side JavaScript.</p>
          <p>JavaScript can change HTML content, attribute values, styles, and can react to user events.</p>
          <p>The <code>{'<script>'}</code> element either contains script statements, or it points to an external script file through the <code>src</code> attribute.</p>
        </>
      ),
      example: `<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`
    },
    {
      title: 'JavaScript in <head> or <body>',
      content: (
        <>
          <p>You can place any number of scripts in an HTML document.</p>
          <p>Scripts can be placed in the <code>{'<head>'}</code> section or in the <code>{'<body>'}</code> section of an HTML page.</p>
          <p>Scripts should be placed at the bottom of the <code>{'<body>'}</code> element to improve page load performance.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
  </script>
</head>
<body>
  <h2>JavaScript in Head</h2>
  <p id="demo">A Paragraph</p>
  <button type="button" onclick="myFunction()">Try it</button>
  
  <!-- Scripts at the bottom of body for better performance -->
  <script>
    // Another script placed at the end of body
    console.log("Page loaded");
  </script>
</body>
</html>`
    },
    {
      title: 'External JavaScript',
      content: (
        <>
          <p>Scripts can also be placed in external files.</p>
          <p>External scripts are practical when the same code is used in many different web pages.</p>
          <p>JavaScript files have the file extension <code>.js</code>.</p>
          <p>To use an external script, put the name of the script file in the <code>src</code> attribute of a <code>{'<script>'}</code> element:</p>
        </>
      ),
      example: `<script src="myscript.js"></script>`
    },
    {
      title: 'External JavaScript Advantages',
      content: (
        <>
          <p>Using external JavaScript files has several advantages:</p>
          <ul>
            <li>Separates HTML and code</li>
            <li>Makes HTML and JavaScript easier to read and maintain</li>
            <li>Cached JavaScript files can speed up page loads</li>
            <li>Can be reused across multiple pages</li>
          </ul>
        </>
      )
    },
    {
      title: 'JavaScript Output',
      content: (
        <>
          <p>JavaScript can "display" data in different ways:</p>
          <ul>
            <li>Writing into an HTML element, using <code>innerHTML</code></li>
            <li>Writing into the HTML output using <code>document.write()</code></li>
            <li>Writing into an alert box, using <code>window.alert()</code></li>
            <li>Writing into the browser console, using <code>console.log()</code></li>
          </ul>
        </>
      ),
      example: `<!-- Using innerHTML -->
<p id="demo1"></p>

<script>
document.getElementById("demo1").innerHTML = "Hello JavaScript!";

// Using document.write() - Note: Should not be used after page load
document.write("Hello from document.write()");

// Using window.alert()
// window.alert("Hello from an alert box!");

// Using console.log()
console.log("Hello from the console!");
</script>`
    },
    {
      title: 'JavaScript Events',
      content: (
        <>
          <p>HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.</p>
          <p>With single quotes around an event attribute value, you can use double quotes inside the value:</p>
        </>
      ),
      example: `<button onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">Click me</button>

<button onclick="this.innerHTML = 'You clicked me!'">Click me</button>

<button onclick="displayDate()">Show the date</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>`
    },
    {
      title: 'Common HTML Events',
      content: (
        <>
          <p>Here are some common HTML events:</p>
          <ul>
            <li><code>onchange</code> - An HTML element has been changed</li>
            <li><code>onclick</code> - The user clicks an HTML element</li>
            <li><code>onmouseover</code> - The user moves the mouse over an HTML element</li>
            <li><code>onmouseout</code> - The user moves the mouse away from an HTML element</li>
            <li><code>onkeydown</code> - The user pushes a keyboard key</li>
            <li><code>onload</code> - The browser has finished loading the page</li>
          </ul>
        </>
      ),
      example: `<!-- Click event -->
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
<p id="demo"></p>

<!-- Mouseover and mouseout events -->
<div onmouseover="this.style.backgroundColor='yellow'" onmouseout="this.style.backgroundColor='white'" 
  style="padding: 20px; border: 1px solid black;">
  Mouse over this text
</div>`
    },
    {
      title: 'The <noscript> Element',
      content: (
        <>
          <p>The HTML <code>{'<noscript>'}</code> element defines alternate content to be displayed to users who have disabled scripts in their browser or have a browser that doesn't support scripts.</p>
        </>
      ),
      example: `<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>`
    },
    {
      title: 'Modern JavaScript Placement and Loading',
      content: (
        <>
          <p>Modern best practices for JavaScript placement and loading include:</p>
          <ul>
            <li>Placing scripts at the bottom of the <code>{'<body>'}</code> for better page loading performance</li>
            <li>Using the <code>defer</code> attribute to defer script execution until the HTML is fully parsed</li>
            <li>Using the <code>async</code> attribute for scripts that don't depend on other scripts or DOM content</li>
          </ul>
        </>
      ),
      example: `<!-- Normal script loading (blocks parsing) -->
<script src="normal.js"></script>

<!-- Deferred script loading (executes after HTML parsing) -->
<script src="deferred.js" defer></script>

<!-- Async script loading (loads in parallel, executes as soon as possible) -->
<script src="async.js" async></script>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML JavaScript Complete Example',
      description: 'A comprehensive example showing the use of JavaScript in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML JavaScript Example</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    section {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    
    h1, h2 {
      color: #333;
    }
    
    button {
      padding: 8px 15px;
      background-color: #4a90e2;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin: 5px;
    }
    
    button:hover {
      background-color: #357abd;
    }
    
    .output-box {
      min-height: 30px;
      padding: 10px;
      border: 1px solid #ddd;
      background-color: white;
      margin-top: 10px;
      border-radius: 4px;
    }
    
    .highlight {
      background-color: #ffffcc;
      padding: 2px 5px;
      border-radius: 3px;
    }
    
    .interactive-element {
      padding: 15px;
      border: 1px solid #ddd;
      background-color: white;
      margin: 10px 0;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
  </style>
  
  <!-- JavaScript in head with defer attribute -->
  <script defer>
    // This function is defined in the head
    function showHeadFunction() {
      document.getElementById("headFunctionOutput").innerHTML = 
        "This function was defined in the <code>&lt;head&gt;</code> section.";
    }
  </script>
</head>
<body>

  <h1>Working with JavaScript in HTML</h1>
  
  <section>
    <h2>1. Basic JavaScript Output</h2>
    <p>JavaScript can display output in several ways:</p>
    
    <button onclick="document.getElementById('output1').innerHTML = 'Hello from innerHTML!'">
      innerHTML
    </button>
    
    <button onclick="alert('Hello from alert!')">
      alert()
    </button>
    
    <button onclick="console.log('Hello from console!'); document.getElementById('output1').innerHTML = 'Check the console!'">
      console.log()
    </button>
    
    <div id="output1" class="output-box">Output will appear here...</div>
  </section>
  
  <section>
    <h2>2. JavaScript Events</h2>
    <p>JavaScript can react to HTML events:</p>
    
    <div class="interactive-element" 
         id="eventDemo"
         onmouseover="this.style.backgroundColor = '#e6f7ff'; document.getElementById('eventOutput').innerHTML = 'Mouse over detected!'"
         onmouseout="this.style.backgroundColor = 'white'; document.getElementById('eventOutput').innerHTML = 'Mouse out detected!'"
         onclick="document.getElementById('eventOutput').innerHTML = 'Click detected!'">
      Interact with this element (hover or click)
    </div>
    
    <div id="eventOutput" class="output-box">Events will be displayed here...</div>
  </section>
  
  <section>
    <h2>3. JavaScript Functions</h2>
    <p>Functions allow you to reuse code:</p>
    
    <button onclick="calculateSum()">Calculate Sum</button>
    <div id="functionOutput" class="output-box">Function output will appear here...</div>
    
    <script>
      // Function defined within the body
      function calculateSum() {
        let a = 5;
        let b = 10;
        let sum = a + b;
        document.getElementById("functionOutput").innerHTML = 
          `The sum of ${a} and ${b} is ${sum}`;
      }
    </script>
  </section>
  
  <section>
    <h2>4. DOM Manipulation</h2>
    <p>JavaScript can change HTML content, attributes, and styles:</p>
    
    <button onclick="changeContent()">Change Content</button>
    <button onclick="changeAttribute()">Change Attribute</button>
    <button onclick="changeStyle()">Change Style</button>
    
    <div class="interactive-element" id="domDemo">
      This content can be manipulated
    </div>
    
    <script>
      function changeContent() {
        document.getElementById("domDemo").innerHTML = 
          "Content has been <span class='highlight'>changed</span>!";
      }
      
      function changeAttribute() {
        let element = document.getElementById("domDemo");
        if(element.getAttribute("data-modified") === "true") {
          element.removeAttribute("data-modified");
          element.innerHTML = "Attribute has been removed!";
        } else {
          element.setAttribute("data-modified", "true");
          element.innerHTML = "Attribute has been added!";
        }
      }
      
      function changeStyle() {
        let element = document.getElementById("domDemo");
        if(element.style.color === "red") {
          element.style.color = "black";
          element.style.fontWeight = "normal";
        } else {
          element.style.color = "red";
          element.style.fontWeight = "bold";
        }
      }
    </script>
  </section>
  
  <section>
    <h2>5. JavaScript in Head vs. Body</h2>
    <p>JavaScript can be placed in different sections of an HTML document:</p>
    
    <button onclick="showHeadFunction()">Run Head Function</button>
    <button onclick="showBodyFunction()">Run Body Function</button>
    
    <div id="headFunctionOutput" class="output-box">Head function output...</div>
    <div id="bodyFunctionOutput" class="output-box">Body function output...</div>
    
    <script>
      // This function is defined in the body
      function showBodyFunction() {
        document.getElementById("bodyFunctionOutput").innerHTML = 
          "This function was defined in the <code>&lt;body&gt;</code> section.";
      }
    </script>
  </section>
  
  <section>
    <h2>6. Timing and Animation</h2>
    <p>JavaScript can create timed events and animations:</p>
    
    <button onclick="startTimer()">Start 3s Timer</button>
    <button onclick="startAnimation()">Start Animation</button>
    <button onclick="stopAnimation()">Stop Animation</button>
    
    <div id="timerOutput" class="output-box">Timer output...</div>
    <div id="animationDemo" class="interactive-element" style="width: 50px; height: 50px; background-color: #4a90e2;"></div>
    
    <script>
      let animationId;
      let position = 0;
      let growing = true;
      
      function startTimer() {
        document.getElementById("timerOutput").innerHTML = "Timer started...";
        setTimeout(function() {
          document.getElementById("timerOutput").innerHTML = 
            "Timer completed after 3 seconds!";
        }, 3000);
      }
      
      function startAnimation() {
        if (!animationId) {
          animationId = setInterval(animate, 50);
        }
      }
      
      function stopAnimation() {
        if (animationId) {
          clearInterval(animationId);
          animationId = null;
        }
      }
      
      function animate() {
        let elem = document.getElementById("animationDemo");
        
        if (growing) {
          position += 2;
          if (position >= 150) {
            growing = false;
          }
        } else {
          position -= 2;
          if (position <= 0) {
            growing = true;
          }
        }
        
        elem.style.marginLeft = position + 'px';
      }
    </script>
  </section>
  
  <!-- Script placed at the bottom of the body -->
  <script>
    // This script runs when the page has loaded
    console.log("Page fully loaded!");
    document.getElementById("timerOutput").innerHTML = "Page is ready. Try the timer!";
  </script>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_iframes'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_file_paths')
}; 