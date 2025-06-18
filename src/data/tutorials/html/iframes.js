import { htmlTopics } from './htmlTopics';

export const htmlIframes = {
  id: 'html_iframes',
  title: 'HTML Iframes',
  description: 'An HTML iframe is used to display a web page within a web page.',
  sections: [
    {
      title: 'HTML Iframe Syntax',
      content: (
        <>
          <p>The HTML <code>{'<iframe>'}</code> tag specifies an inline frame.</p>
          <p>An inline frame is used to embed another document within the current HTML document.</p>
          <p>The syntax for adding an iframe is:</p>
        </>
      ),
      example: `<iframe src="url" title="description"></iframe>`
    },
    {
      title: 'Iframe - Set Height and Width',
      content: (
        <>
          <p>Use the <code>height</code> and <code>width</code> attributes to specify the size of the iframe.</p>
          <p>The height and width are specified in pixels by default:</p>
        </>
      ),
      example: `<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>`
    },
    {
      title: 'Iframe - Remove the Border',
      content: (
        <>
          <p>By default, an iframe has a border around it.</p>
          <p>To remove the border, add the <code>style</code> attribute and use the CSS <code>border</code> property:</p>
        </>
      ),
      example: `<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>`
    },
    {
      title: 'Iframe - Target for a Link',
      content: (
        <>
          <p>An iframe can be used as the target frame for a link.</p>
          <p>The <code>target</code> attribute of the link must refer to the <code>name</code> attribute of the iframe:</p>
        </>
      ),
      example: `<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<p><a href="https://www.example.com" target="iframe_a">Example.com</a></p>`
    },
    {
      title: 'Using CSS with Iframes',
      content: (
        <>
          <p>You can use CSS to style an iframe.</p>
          <p>For example, to create a responsive iframe that maintains aspect ratio, you can use the following CSS:</p>
        </>
      ),
      example: `<style>
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>

<div class="responsive-iframe-container">
  <iframe class="responsive-iframe" src="demo_iframe.htm" title="Responsive Iframe"></iframe>
</div>`
    },
    {
      title: 'Iframe Security',
      content: (
        <>
          <p>Iframes can be a security risk because:</p>
          <ul>
            <li>They can contain malicious content</li>
            <li>They can run JavaScript, which may access your page's data</li>
            <li>They can load content from other websites that may track user activity</li>
          </ul>
          <p>To improve security, you can use the <code>sandbox</code> and <code>allow</code> attributes:</p>
        </>
      ),
      example: `<!-- Basic sandbox (blocks all risky features) -->
<iframe src="demo_iframe.htm" sandbox title="Sandboxed Iframe"></iframe>

<!-- Allow specific features -->
<iframe src="demo_iframe.htm" 
  sandbox="allow-same-origin allow-scripts allow-forms" 
  title="Sandboxed Iframe with Permissions"></iframe>`
    },
    {
      title: 'Adding YouTube Videos',
      content: (
        <>
          <p>One of the most common uses of iframes is to embed YouTube videos into a webpage.</p>
          <p>YouTube provides an iframe code when you click on the "Share" button and then "Embed":</p>
        </>
      ),
      example: `<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>`
    },
    {
      title: 'Embedding Google Maps',
      content: (
        <>
          <p>Another common use of iframes is to embed Google Maps into a webpage.</p>
          <p>Google Maps provides an iframe code when you click on the "Share" button and then "Embed a map":</p>
        </>
      ),
      example: `<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410277922!2d2.2769956081465507!3d48.85883773935382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1651248446261!5m2!1sen!2sus" 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"></iframe>`
    },
    {
      title: 'HTML Iframe Attributes',
      content: (
        <>
          <p>The <code>{'<iframe>'}</code> tag has several attributes:</p>
          <ul>
            <li><code>src</code> - Specifies the URL of the document to embed</li>
            <li><code>height</code> - Specifies the height of the iframe</li>
            <li><code>width</code> - Specifies the width of the iframe</li>
            <li><code>name</code> - Specifies the name of the iframe</li>
            <li><code>sandbox</code> - Enables extra restrictions for the content in the iframe</li>
            <li><code>allow</code> - Specifies a feature policy for the iframe</li>
            <li><code>allowfullscreen</code> - Allows the iframe to be displayed in full-screen mode</li>
            <li><code>loading</code> - Specifies whether a browser should load an iframe immediately or defer loading until some conditions are met</li>
            <li><code>referrerpolicy</code> - Specifies which referrer information to send when fetching the iframe content</li>
            <li><code>srcdoc</code> - Specifies the HTML content of the page to show in the iframe</li>
            <li><code>title</code> - Specifies a title for the iframe (important for accessibility)</li>
          </ul>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML Iframe Examples',
      description: 'A comprehensive example showing different ways to use iframes in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Iframes Example</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    
    .section {
      margin-bottom: 30px;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    
    h1, h2 {
      color: #333;
    }
    
    /* Basic iframe styling */
    .basic-iframe {
      border: 1px solid #ddd;
    }
    
    /* Styled iframe */
    .styled-iframe {
      border: 2px solid #4a90e2;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    /* Responsive iframe container */
    .responsive-container {
      position: relative;
      overflow: hidden;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      margin-bottom: 20px;
    }
    
    .responsive-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    
    /* Navigation and content layout */
    .iframe-navigation {
      display: flex;
      margin-bottom: 20px;
    }
    
    .iframe-navigation a {
      display: inline-block;
      padding: 8px 16px;
      margin-right: 10px;
      background-color: #4a90e2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    
    .iframe-navigation a:hover {
      background-color: #357abd;
    }
    
    .iframe-content {
      height: 300px;
      border: 1px solid #ddd;
      background-color: white;
      padding: 10px;
    }
    
    /* Two iframes side by side */
    .iframe-container {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .iframe-col {
      flex: 1;
      min-width: 300px;
    }
    
    /* Code display */
    .code-example {
      background-color: #f1f1f1;
      border-left: 4px solid #4a90e2;
      padding: 15px;
      margin: 15px 0;
      overflow-x: auto;
      font-family: monospace;
    }
    
    /* Media query for responsiveness */
    @media (max-width: 768px) {
      .iframe-container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>

  <h1>HTML Iframes - Examples and Best Practices</h1>
  
  <div class="section">
    <h2>Basic Iframe Example</h2>
    <p>Here's a basic iframe that loads an external website:</p>
    
    <iframe 
      src="https://www.example.com" 
      width="100%" 
      height="300" 
      class="basic-iframe"
      title="Example Website">
    </iframe>
    
    <div class="code-example">
      <pre>&lt;iframe 
  src="https://www.example.com" 
  width="100%" 
  height="300" 
  title="Example Website"&gt;
&lt;/iframe&gt;</pre>
    </div>
  </div>
  
  <div class="section">
    <h2>Styled Iframe</h2>
    <p>An iframe with custom styling applied:</p>
    
    <iframe 
      src="https://www.example.com" 
      width="100%" 
      height="300" 
      class="styled-iframe"
      title="Styled Iframe Example">
    </iframe>
    
    <div class="code-example">
      <pre>&lt;style&gt;
.styled-iframe {
  border: 2px solid #4a90e2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
&lt;/style&gt;

&lt;iframe 
  src="https://www.example.com" 
  width="100%" 
  height="300" 
  class="styled-iframe"
  title="Styled Iframe Example"&gt;
&lt;/iframe&gt;</pre>
    </div>
  </div>
  
  <div class="section">
    <h2>Responsive Iframe</h2>
    <p>A responsive iframe that maintains its aspect ratio:</p>
    
    <div class="responsive-container">
      <iframe 
        src="https://www.example.com" 
        class="responsive-iframe"
        title="Responsive Iframe">
      </iframe>
    </div>
    
    <div class="code-example">
      <pre>&lt;style&gt;
.responsive-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
&lt;/style&gt;

&lt;div class="responsive-container"&gt;
  &lt;iframe 
    src="https://www.example.com" 
    class="responsive-iframe"
    title="Responsive Iframe"&gt;
  &lt;/iframe&gt;
&lt;/div&gt;</pre>
    </div>
  </div>
  
  <div class="section">
    <h2>Iframe as a Target for Links</h2>
    <p>Using an iframe as a target for navigation links:</p>
    
    <div class="iframe-navigation">
      <a href="https://www.example.com" target="demo-frame">Example.com</a>
      <a href="https://www.wikipedia.org" target="demo-frame">Wikipedia</a>
      <a href="https://www.example.org" target="demo-frame">Example.org</a>
    </div>
    
    <iframe 
      name="demo-frame" 
      src="https://www.example.com" 
      width="100%" 
      height="300" 
      class="iframe-content"
      title="Navigation Target">
    </iframe>
    
    <div class="code-example">
      <pre>&lt;div class="iframe-navigation"&gt;
  &lt;a href="https://www.example.com" target="demo-frame"&gt;Example.com&lt;/a&gt;
  &lt;a href="https://www.wikipedia.org" target="demo-frame"&gt;Wikipedia&lt;/a&gt;
  &lt;a href="https://www.example.org" target="demo-frame"&gt;Example.org&lt;/a&gt;
&lt;/div&gt;

&lt;iframe 
  name="demo-frame" 
  src="https://www.example.com" 
  width="100%" 
  height="300" 
  title="Navigation Target"&gt;
&lt;/iframe&gt;</pre>
    </div>
  </div>
  
  <div class="section">
    <h2>Sandboxed Iframe for Security</h2>
    <p>Using the sandbox attribute to restrict iframe capabilities:</p>
    
    <iframe 
      src="https://www.example.com" 
      width="100%" 
      height="300" 
      sandbox="allow-same-origin allow-scripts" 
      class="basic-iframe"
      title="Sandboxed Iframe">
    </iframe>
    
    <div class="code-example">
      <pre>&lt;iframe 
  src="https://www.example.com" 
  width="100%" 
  height="300" 
  sandbox="allow-same-origin allow-scripts" 
  title="Sandboxed Iframe"&gt;
&lt;/iframe&gt;</pre>
    </div>
    
    <p>The sandbox attribute values explained:</p>
    <ul>
      <li><code>allow-same-origin</code>: Allows the content to be treated as being from the same origin</li>
      <li><code>allow-scripts</code>: Allows JavaScript execution</li>
      <li><code>allow-forms</code>: Allows form submission</li>
      <li><code>allow-popups</code>: Allows popups</li>
      <li><code>allow-top-navigation</code>: Allows the iframe to navigate its top-level browsing context</li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Multiple Iframes Side by Side</h2>
    <p>Displaying two iframes next to each other:</p>
    
    <div class="iframe-container">
      <div class="iframe-col">
        <h3>First Website</h3>
        <iframe 
          src="https://www.example.com" 
          width="100%" 
          height="300" 
          class="basic-iframe"
          title="First Website">
        </iframe>
      </div>
      
      <div class="iframe-col">
        <h3>Second Website</h3>
        <iframe 
          src="https://www.example.org" 
          width="100%" 
          height="300" 
          class="basic-iframe"
          title="Second Website">
        </iframe>
      </div>
    </div>
    
    <div class="code-example">
      <pre>&lt;div class="iframe-container"&gt;
  &lt;div class="iframe-col"&gt;
    &lt;h3&gt;First Website&lt;/h3&gt;
    &lt;iframe 
      src="https://www.example.com" 
      width="100%" 
      height="300" 
      title="First Website"&gt;
    &lt;/iframe&gt;
  &lt;/div&gt;
  
  &lt;div class="iframe-col"&gt;
    &lt;h3&gt;Second Website&lt;/h3&gt;
    &lt;iframe 
      src="https://www.example.org" 
      width="100%" 
      height="300" 
      title="Second Website"&gt;
    &lt;/iframe&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
  </div>
  
  <div class="section">
    <h2>Best Practices for Iframes</h2>
    <ol>
      <li>Always include the <code>title</code> attribute for accessibility</li>
      <li>Use the <code>sandbox</code> attribute when embedding untrusted content</li>
      <li>Make iframes responsive with CSS</li>
      <li>Consider using <code>loading="lazy"</code> for performance optimization</li>
      <li>Provide fallback content between the tags for browsers that don't support iframes</li>
      <li>Be aware of same-origin policy limitations</li>
      <li>Avoid using iframes when there are better alternatives (like JavaScript components)</li>
    </ol>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_id'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_javascript')
}; 