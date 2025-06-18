import { htmlTopics } from './htmlTopics';

export const htmlHead = {
  id: 'html_head',
  title: 'HTML <head> Element',
  description: 'The HTML <head> element is a container for metadata and is placed between the <html> tag and the <body> tag.',
  sections: [
    {
      title: 'The HTML <head> Element',
      content: (
        <>
          <p>The <code>{'<head>'}</code> element is a container for metadata (data about data) and is placed between the <code>{'<html>'}</code> tag and the <code>{'<body>'}</code> tag.</p>
          <p>Metadata is data about the HTML document. Metadata is not displayed.</p>
          <p>Metadata typically defines the document title, character set, styles, scripts, and other meta information.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="mystyle.css">
  <script src="myscript.js"></script>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'The HTML <title> Element',
      content: (
        <>
          <p>The <code>{'<title>'}</code> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.</p>
          <p>The <code>{'<title>'}</code> element is required in HTML documents!</p>
          <p>The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.</p>
          <p>The <code>{'<title>'}</code> element:</p>
          <ul>
            <li>defines a title in the browser toolbar</li>
            <li>provides a title for the page when it is added to favorites</li>
            <li>displays a title for the page in search engine results</li>
          </ul>
        </>
      ),
      example: `<head>
  <title>Website Title - appears in browser tab and search results</title>
</head>`
    },
    {
      title: 'The HTML <style> Element',
      content: (
        <>
          <p>The <code>{'<style>'}</code> element is used to define style information for a single HTML page:</p>
        </>
      ),
      example: `<head>
  <style>
    body {
      background-color: lightblue;
    }
    
    h1 {
      color: white;
      text-align: center;
    }
    
    p {
      font-family: verdana;
    }
  </style>
</head>`
    },
    {
      title: 'The HTML <link> Element',
      content: (
        <>
          <p>The <code>{'<link>'}</code> element defines the relationship between the current document and an external resource.</p>
          <p>The <code>{'<link>'}</code> element is most often used to link to external style sheets:</p>
        </>
      ),
      example: `<head>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>`
    },
    {
      title: 'The HTML <meta> Element',
      content: (
        <>
          <p>The <code>{'<meta>'}</code> element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.</p>
          <p>The metadata will not be displayed on the page, but is used by browsers (how to display content or reload page), by search engines (keywords), and other web services.</p>
        </>
      ),
      example: `<head>
  <!-- Define the character set used -->
  <meta charset="UTF-8">
  
  <!-- Define keywords for search engines -->
  <meta name="keywords" content="HTML, CSS, JavaScript">
  
  <!-- Define a description of your web page -->
  <meta name="description" content="Free Web tutorials for HTML and CSS">
  
  <!-- Define the author of a page -->
  <meta name="author" content="John Doe">
  
  <!-- Refresh document every 30 seconds -->
  <meta http-equiv="refresh" content="30">
  
  <!-- Setting the viewport to make your website look good on all devices -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
    },
    {
      title: 'Setting The Viewport',
      content: (
        <>
          <p>The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.</p>
          <p>You should include the following <code>{'<meta>'}</code> element in all your web pages:</p>
        </>
      ),
      example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    {
      title: 'Viewport Explanation',
      content: (
        <>
          <p>The <code>width=device-width</code> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>
          <p>The <code>initial-scale=1.0</code> part sets the initial zoom level when the page is first loaded by the browser.</p>
          <p>Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:</p>
          <p><strong>Without viewport meta tag:</strong></p>
          <img src="/images/viewport-without.jpg" alt="Page without viewport meta tag" style={{ maxWidth: "100%" }} />
          <p><strong>With viewport meta tag:</strong></p>
          <img src="/images/viewport-with.jpg" alt="Page with viewport meta tag" style={{ maxWidth: "100%" }} />
        </>
      )
    },
    {
      title: 'The HTML <script> Element',
      content: (
        <>
          <p>The <code>{'<script>'}</code> element is used to define client-side JavaScript.</p>
          <p>The script element either contains script statements, or it points to an external script file through the <code>src</code> attribute.</p>
        </>
      ),
      example: `<head>
  <!-- Internal JavaScript -->
  <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello JavaScript!";
    }
  </script>
  
  <!-- External JavaScript -->
  <script src="myscript.js"></script>
</head>`
    },
    {
      title: 'The HTML <base> Element',
      content: (
        <>
          <p>The <code>{'<base>'}</code> element specifies the base URL and/or target for all relative URLs in a page.</p>
          <p>The <code>{'<base>'}</code> element must have either an <code>href</code> or a <code>target</code> attribute, or both.</p>
          <p>There can only be one <code>{'<base>'}</code> element in a document, and it must be inside the <code>{'<head>'}</code> element.</p>
        </>
      ),
      example: `<head>
  <base href="https://www.example.com/images/" target="_blank">
</head>

<body>
  <!-- This image will be looked for at https://www.example.com/images/logo.png -->
  <img src="logo.png">
  
  <!-- This link will open in a new tab/window -->
  <a href="about.html">About Us</a>
</body>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Head Complete Example',
      description: 'A comprehensive example showing the use of the head element and its contents.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  
  <!-- Title (required) -->
  <title>Comprehensive HTML Head Example</title>
  
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  <!-- Responsive design viewport settings -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" content="A comprehensive example of HTML head elements and metadata for SEO and browser display">
  <meta name="keywords" content="HTML, head, metadata, SEO, web development">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph Protocol for social media sharing -->
  <meta property="og:title" content="HTML Head Elements Tutorial">
  <meta property="og:description" content="Learn about HTML head elements and metadata">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page.html">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="HTML Head Elements Tutorial">
  <meta name="twitter:description" content="Learn about HTML head elements and metadata">
  <meta name="twitter:image" content="https://example.com/image.jpg">
  
  <!-- External CSS stylesheets -->
  <link rel="stylesheet" href="styles/main.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap">
  
  <!-- Internal CSS -->
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .container {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      margin-bottom: 20px;
    }
    
    h1, h2 {
      color: #2c3e50;
    }
    
    .code-example {
      background-color: #f1f1f1;
      border-left: 4px solid #4a90e2;
      padding: 15px;
      margin: 15px 0;
      font-family: monospace;
      overflow-x: auto;
    }
  </style>
  
  <!-- Preload critical resources -->
  <link rel="preload" href="fonts/important-font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- DNS prefetch for external domains -->
  <link rel="dns-prefetch" href="https://api.example.com">
  
  <!-- Base URL for all relative URLs -->
  <!-- <base href="https://www.example.com/"> -->
  
  <!-- External JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
  
  <!-- Internal JavaScript -->
  <script>
    // This script runs when the HTML page is being loaded
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Document loaded and DOM ready!');
    });
  </script>
  
  <!-- Alternate versions of the page -->
  <link rel="alternate" hreflang="es" href="https://example.com/es/page.html">
  <link rel="canonical" href="https://example.com/page.html">
  
  <!-- If your site has an RSS feed -->
  <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml">
  
  <!-- Additional HTTP headers -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- Page refresh (use with caution!) -->
  <!-- <meta http-equiv="refresh" content="30"> -->
  
  <!-- Geo positioning -->
  <meta name="geo.position" content="latitude; longitude">
  <meta name="geo.placename" content="City, Country">
  
  <!-- Theme color for browser UI -->
  <meta name="theme-color" content="#4a90e2">
</head>
<body>

  <div class="container">
    <h1>HTML Head Elements Explained</h1>
    <p>This page demonstrates a comprehensive set of elements that can be included in the HTML &lt;head&gt; section.</p>
    
    <h2>Purpose of Each Element</h2>
    <ul>
      <li><strong>title</strong>: Sets the page title shown in browser tabs and search results</li>
      <li><strong>meta charset</strong>: Specifies the character encoding for the document</li>
      <li><strong>meta viewport</strong>: Controls the page dimensions and scaling for responsive design</li>
      <li><strong>meta description, keywords, author</strong>: Provides information for search engines</li>
      <li><strong>link stylesheet</strong>: Connects external CSS files to style the page</li>
      <li><strong>style</strong>: Contains internal CSS for styling the page</li>
      <li><strong>script</strong>: Adds JavaScript functionality to the page</li>
      <li><strong>base</strong>: Sets a base URL for all relative URLs in the document</li>
      <li><strong>link favicon</strong>: Provides icons shown in browser tabs and bookmarks</li>
      <li><strong>meta og:* and twitter:*</strong>: Controls how the page appears when shared on social media</li>
    </ul>
    
    <h2>Example Head Element</h2>
    <div class="code-example">
      <pre>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta name="description" content="Page description"&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;</pre>
    </div>
  </div>
  
  <div class="container">
    <h2>Additional Features Provided by Head Elements</h2>
    
    <h3>SEO Benefits</h3>
    <p>Proper use of meta tags helps search engines understand your content:</p>
    <ul>
      <li>Title tags directly influence click-through rates in search results</li>
      <li>Meta descriptions appear in search snippets</li>
      <li>Structured data (implemented in the head) can enable rich results</li>
    </ul>
    
    <h3>Performance Improvements</h3>
    <p>Several head elements can improve page loading performance:</p>
    <ul>
      <li>Preload, prefetch, and preconnect directives</li>
      <li>Asynchronous and deferred script loading</li>
      <li>Resource hints for browsers</li>
    </ul>
    
    <h3>Mobile Optimization</h3>
    <p>The viewport meta tag is essential for mobile-responsive websites:</p>
    <div class="code-example">
      <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
    </div>
    <p>Without this tag, mobile devices would render pages at typical desktop screen widths and then scale them down, requiring users to zoom in.</p>
  </div>
  
  <div class="container">
    <h2>Best Practices</h2>
    <ol>
      <li>Always include character encoding and viewport settings</li>
      <li>Use meaningful, concise page titles</li>
      <li>Include descriptive meta descriptions (under 160 characters)</li>
      <li>Load critical CSS in the head, but defer non-critical JavaScript</li>
      <li>Include appropriate social media meta tags if your content is likely to be shared</li>
      <li>Add a canonical URL to prevent duplicate content issues</li>
      <li>Include a favicon for brand recognition</li>
    </ol>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_file_paths'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_layout')
}; 