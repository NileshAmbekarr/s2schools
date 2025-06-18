import { htmlTopics } from './htmlTopics';

export const htmlFilePaths = {
  id: 'html_file_paths',
  title: 'HTML File Paths',
  description: 'File paths are used to link external resources like web pages, images, style sheets, JavaScript, etc.',
  sections: [
    {
      title: 'File Path Types',
      content: (
        <>
          <p>A file path describes the location of a file in a website's folder structure.</p>
          <p>File paths are used when linking to external files such as:</p>
          <ul>
            <li>Web pages</li>
            <li>Images</li>
            <li>Style sheets (CSS files)</li>
            <li>JavaScript files</li>
            <li>Audio files</li>
            <li>Video files</li>
            <li>And other resources</li>
          </ul>
        </>
      )
    },
    {
      title: 'Absolute File Paths',
      content: (
        <>
          <p>An absolute file path is the full URL to a file:</p>
        </>
      ),
      example: `<img src="https://www.example.com/images/picture.jpg" alt="Mountain">
<a href="https://www.example.com/html/default.html">HTML tutorial</a>`
    },
    {
      title: 'Relative File Paths',
      content: (
        <>
          <p>A relative file path points to a file relative to the current page.</p>
          <p>In the following examples, the file path points to a file in the same folder as the current page:</p>
        </>
      ),
      example: `<img src="picture.jpg" alt="Mountain">
<a href="default.html">HTML tutorial</a>`
    },
    {
      title: 'File Path Examples',
      content: (
        <>
          <p>Here are some examples of different file paths:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Path</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><code>{'<img src="picture.jpg">'}</code></td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>The "picture.jpg" file is located in the same folder as the current page</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><code>{'<img src="images/picture.jpg">'}</code></td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>The "picture.jpg" file is located in the images folder in the current folder</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><code>{'<img src="/images/picture.jpg">'}</code></td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>The "picture.jpg" file is located in the images folder at the root of the current web</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><code>{'<img src="../picture.jpg">'}</code></td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>The "picture.jpg" file is located in the folder one level up from the current folder</td>
              </tr>
            </tbody>
          </table>
        </>
      )
    },
    {
      title: 'Best Practices for File Paths',
      content: (
        <>
          <p>When linking to files within your own website, it's generally best to use relative file paths. Here's why:</p>
          <ul>
            <li><strong>Website Portability:</strong> If you use relative links, you can move your entire site to a different domain without breaking links</li>
            <li><strong>Local Development:</strong> Relative links work when developing and testing locally, before uploading to a live server</li>
            <li><strong>Shorter and Cleaner:</strong> Relative URLs are shorter and make your HTML more readable</li>
          </ul>
          <p>When to use absolute paths:</p>
          <ul>
            <li>When linking to external websites</li>
            <li>When a web page is likely to be viewed outside its normal context (e.g., in an RSS feed)</li>
          </ul>
        </>
      )
    },
    {
      title: 'Common Mistakes with File Paths',
      content: (
        <>
          <p>Here are some common mistakes when working with file paths:</p>
          <ul>
            <li><strong>Incorrect Case:</strong> On case-sensitive servers (like Unix/Linux), "Picture.jpg" and "picture.jpg" are different files</li>
            <li><strong>Forward vs. Backward Slashes:</strong> Always use forward slashes (/) in URLs, not backslashes (\\)</li>
            <li><strong>Missing Parent Directory References:</strong> When linking to a file in a parent directory, remember to use "../" to move up one directory level</li>
            <li><strong>Spaces in File Names:</strong> Avoid spaces in file names, or encode them as "%20"</li>
          </ul>
          <p>Bad example:</p>
          <code>{'<img src="my picture.jpg">'}</code>
          <p>Good examples:</p>
          <code>{'<img src="my_picture.jpg">'}</code><br />
          <code>{'<img src="my-picture.jpg">'}</code><br />
          <code>{'<img src="mypicture.jpg">'}</code>
        </>
      )
    },
    {
      title: 'File Paths in Different Contexts',
      content: (
        <>
          <p>Different HTML elements that use file paths:</p>
        </>
      ),
      example: `<!-- Images -->
<img src="images/photo.jpg" alt="A photograph">

<!-- Links -->
<a href="contact.html">Contact Page</a>

<!-- External CSS -->
<link rel="stylesheet" href="css/style.css">

<!-- External JavaScript -->
<script src="js/script.js"></script>

<!-- Favicon -->
<link rel="icon" href="favicon.ico" type="image/x-icon">

<!-- Video -->
<video controls>
  <source src="videos/movie.mp4" type="video/mp4">
</video>

<!-- Audio -->
<audio controls>
  <source src="sounds/music.mp3" type="audio/mpeg">
</audio>`
    },
    {
      title: 'Root-Relative Paths',
      content: (
        <>
          <p>A root-relative path starts with a forward slash (/) and is relative to the root of the website domain.</p>
          <p>These are useful in larger websites with complex directory structures:</p>
        </>
      ),
      example: `<!-- This refers to a file in the images directory at the root of the website -->
<img src="/images/logo.png" alt="Company Logo">

<!-- This refers to a specific page from anywhere in the website -->
<a href="/products/new.html">New Products</a>`
    },
    {
      title: 'Directory Structure Example',
      content: (
        <>
          <p>Understanding how paths work becomes clearer with an example directory structure. Consider this website structure:</p>
          <pre>{`
/root
  |-- index.html
  |-- about.html
  |-- products/
  |    |-- index.html
  |    |-- product1.html
  |    |-- product2.html
  |
  |-- images/
  |    |-- logo.png
  |    |-- banner.jpg
  |
  |-- css/
  |    |-- style.css
  |
  |-- js/
       |-- script.js
          `}</pre>
          <p>Paths from the main index.html:</p>
          <ul>
            <li>To about.html: <code>{'<a href="about.html">'}</code></li>
            <li>To products index: <code>{'<a href="products/index.html">'}</code></li>
            <li>To logo: <code>{'<img src="images/logo.png">'}</code></li>
          </ul>
          <p>Paths from product1.html (in the products directory):</p>
          <ul>
            <li>To main index: <code>{'<a href="../index.html">'}</code></li>
            <li>To other product: <code>{'<a href="product2.html">'}</code></li>
            <li>To logo: <code>{'<img src="../images/logo.png">'}</code></li>
          </ul>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML File Paths Complete Example',
      description: 'A comprehensive example showing the use of different file paths in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML File Paths Example</title>
  <meta charset="UTF-8">
  <!-- Root-relative path to CSS file -->
  <link rel="stylesheet" href="/css/styles.css">
  
  <!-- Relative path to CSS file -->
  <link rel="stylesheet" href="css/page-specific.css">
  
  <!-- Absolute path to external CSS -->
  <link rel="stylesheet" href="https://cdn.example.com/css/framework.css">
  
  <!-- Favicon with relative path -->
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
  
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .demo-section {
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f8f9fa;
    }
    
    .file-structure {
      font-family: monospace;
      background-color: #f1f1f1;
      padding: 15px;
      border-radius: 4px;
      white-space: pre;
      overflow-x: auto;
    }
    
    .path-example {
      background-color: #fff;
      padding: 10px;
      border-left: 4px solid #4a90e2;
      margin: 10px 0;
    }
    
    .path-explanation {
      color: #666;
      font-style: italic;
      margin-top: 5px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
    }
    
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    
    th {
      background-color: #f2f2f2;
    }
    
    .code {
      font-family: monospace;
      background-color: #f1f1f1;
      padding: 2px 4px;
      border-radius: 3px;
    }
    
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 15px 0;
    }
    
    .gallery img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    
    .navigation {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    
    .navigation a {
      padding: 8px 12px;
      background-color: #4a90e2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    
    .navigation a:hover {
      background-color: #357abd;
    }
  </style>
</head>
<body>

  <h1>Understanding HTML File Paths</h1>
  
  <div class="navigation">
    <!-- Same directory links -->
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    
    <!-- Subdirectory links -->
    <a href="products/index.html">Products</a>
    <a href="services/support.html">Support</a>
    
    <!-- Parent directory link -->
    <a href="../index.html">Parent Home</a>
    
    <!-- Root-relative link -->
    <a href="/contact.html">Contact</a>
    
    <!-- Absolute link -->
    <a href="https://www.example.com">External Site</a>
  </div>
  
  <div class="demo-section">
    <h2>1. Website Directory Structure</h2>
    <p>Consider the following website structure:</p>
    
    <div class="file-structure">
/mywebsite
  |-- index.html (you are here)
  |-- about.html
  |-- contact.html
  |-- products/
  |    |-- index.html
  |    |-- product1.html
  |    |-- product2.html
  |
  |-- images/
  |    |-- logo.png
  |    |-- banner.jpg
  |    |-- products/
  |    |    |-- product1.jpg
  |    |    |-- product2.jpg
  |
  |-- css/
  |    |-- style.css
  |
  |-- js/
       |-- script.js
    </div>
  </div>
  
  <div class="demo-section">
    <h2>2. Relative Paths from index.html</h2>
    <p>When linking from the main index.html file:</p>
    
    <div class="path-example">
      <div class="code">&lt;a href="about.html"&gt;About Us&lt;/a&gt;</div>
      <div class="path-explanation">Links to about.html in the same directory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;a href="products/index.html"&gt;Products&lt;/a&gt;</div>
      <div class="path-explanation">Links to index.html in the products subdirectory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="images/logo.png" alt="Logo"&gt;</div>
      <div class="path-explanation">References logo.png in the images subdirectory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="images/products/product1.jpg" alt="Product 1"&gt;</div>
      <div class="path-explanation">References product1.jpg in the images/products subdirectory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;link rel="stylesheet" href="css/style.css"&gt;</div>
      <div class="path-explanation">References style.css in the css subdirectory</div>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>3. Relative Paths from product1.html</h2>
    <p>When linking from the product1.html file in the products directory:</p>
    
    <div class="path-example">
      <div class="code">&lt;a href="../index.html"&gt;Home&lt;/a&gt;</div>
      <div class="path-explanation">Links to index.html in the parent directory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;a href="product2.html"&gt;Product 2&lt;/a&gt;</div>
      <div class="path-explanation">Links to product2.html in the same directory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="../images/logo.png" alt="Logo"&gt;</div>
      <div class="path-explanation">References logo.png in the images directory, one level up from current directory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="../images/products/product2.jpg" alt="Product 2"&gt;</div>
      <div class="path-explanation">References product2.jpg in the images/products directory, accessed from the parent directory</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;link rel="stylesheet" href="../css/style.css"&gt;</div>
      <div class="path-explanation">References style.css in the css directory, one level up from current directory</div>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>4. Root-Relative Paths</h2>
    <p>Root-relative paths start with a forward slash and are relative to the domain root:</p>
    
    <div class="path-example">
      <div class="code">&lt;a href="/index.html"&gt;Home&lt;/a&gt;</div>
      <div class="path-explanation">Links to index.html at the root of the domain, from anywhere in the website</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;a href="/products/product1.html"&gt;Product 1&lt;/a&gt;</div>
      <div class="path-explanation">Links to product1.html in the products directory at the root of the domain</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="/images/logo.png" alt="Logo"&gt;</div>
      <div class="path-explanation">References logo.png in the images directory at the root of the domain</div>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>5. Absolute Paths</h2>
    <p>Absolute paths include the full URL with the protocol and domain:</p>
    
    <div class="path-example">
      <div class="code">&lt;a href="https://www.example.com/about.html"&gt;About Us&lt;/a&gt;</div>
      <div class="path-explanation">Links to about.html on the example.com domain</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;img src="https://www.example.com/images/logo.png" alt="Logo"&gt;</div>
      <div class="path-explanation">References logo.png in the images directory on the example.com domain</div>
    </div>
    
    <div class="path-example">
      <div class="code">&lt;script src="https://cdn.example.com/js/library.js"&gt;&lt;/script&gt;</div>
      <div class="path-explanation">References a JavaScript file from a content delivery network</div>
    </div>
  </div>
  
  <div class="demo-section">
    <h2>6. Path Usage in Different HTML Elements</h2>
    <p>Paths are used in various HTML elements:</p>
    
    <table>
      <tr>
        <th>HTML Element</th>
        <th>Example</th>
        <th>Purpose</th>
      </tr>
      <tr>
        <td>Link</td>
        <td><span class="code">&lt;a href="path/to/page.html"&gt;Link&lt;/a&gt;</span></td>
        <td>Navigate to another page</td>
      </tr>
      <tr>
        <td>Image</td>
        <td><span class="code">&lt;img src="path/to/image.jpg" alt="Description"&gt;</span></td>
        <td>Display an image</td>
      </tr>
      <tr>
        <td>Stylesheet</td>
        <td><span class="code">&lt;link rel="stylesheet" href="path/to/style.css"&gt;</span></td>
        <td>Apply CSS styling</td>
      </tr>
      <tr>
        <td>Script</td>
        <td><span class="code">&lt;script src="path/to/script.js"&gt;&lt;/script&gt;</span></td>
        <td>Include JavaScript functionality</td>
      </tr>
      <tr>
        <td>Video</td>
        <td><span class="code">&lt;video src="path/to/video.mp4"&gt;&lt;/video&gt;</span></td>
        <td>Play video content</td>
      </tr>
      <tr>
        <td>Audio</td>
        <td><span class="code">&lt;audio src="path/to/audio.mp3"&gt;&lt;/audio&gt;</span></td>
        <td>Play audio content</td>
      </tr>
      <tr>
        <td>Favicon</td>
        <td><span class="code">&lt;link rel="icon" href="path/to/favicon.ico"&gt;</span></td>
        <td>Display page icon in browser</td>
      </tr>
    </table>
  </div>
  
  <div class="demo-section">
    <h2>7. Image Gallery Example</h2>
    <p>Displaying images using relative paths:</p>
    
    <div class="gallery">
      <!-- These paths assume the images exist in the specified locations -->
      <img src="images/photo1.jpg" alt="Photo 1">
      <img src="images/photo2.jpg" alt="Photo 2">
      <img src="images/photo3.jpg" alt="Photo 3">
      <img src="images/photo4.jpg" alt="Photo 4">
    </div>
  </div>
  
  <div class="demo-section">
    <h2>8. Best Practices</h2>
    <ul>
      <li>Use relative paths for internal resources when possible</li>
      <li>Use root-relative paths for larger websites with complex structures</li>
      <li>Use absolute paths for external resources</li>
      <li>Avoid spaces in filenames and folder names</li>
      <li>Be consistent with file naming conventions (all lowercase is recommended)</li>
      <li>Always use forward slashes (/) in paths, not backslashes (\\)</li>
      <li>Be aware of case sensitivity on some servers</li>
    </ul>
  </div>
  
  <!-- Relative path to JavaScript file -->
  <script src="js/script.js"></script>
  
  <!-- Root-relative path to JavaScript file -->
  <script src="/js/common.js"></script>
  
  <!-- Absolute path to external JavaScript -->
  <script src="https://cdn.example.com/js/library.js"></script>
  
</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_javascript'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_head')
}; 