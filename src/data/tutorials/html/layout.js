import { htmlTopics } from './htmlTopics';

export const htmlLayout = {
  id: 'html_layout',
  title: 'HTML Layout',
  description: 'Learn about HTML layout techniques to create attractive webpage designs.',
  sections: [
    {
      title: 'HTML Layout Elements',
      content: (
        <>
          <p>Websites often display content in multiple columns (like a magazine or a newspaper).</p>
          <p>HTML offers several semantic elements that define the different parts of a web page:</p>
          <ul>
            <li><code>{'<header>'}</code> - Defines a header for a document or a section</li>
            <li><code>{'<nav>'}</code> - Defines a set of navigation links</li>
            <li><code>{'<section>'}</code> - Defines a section in a document</li>
            <li><code>{'<article>'}</code> - Defines an independent, self-contained content</li>
            <li><code>{'<aside>'}</code> - Defines content aside from the content (like a sidebar)</li>
            <li><code>{'<footer>'}</code> - Defines a footer for a document or a section</li>
            <li><code>{'<details>'}</code> - Defines additional details that the user can open and close on demand</li>
            <li><code>{'<summary>'}</code> - Defines a heading for the <code>{'<details>'}</code> element</li>
          </ul>
          <img src="/images/img_sem_elements.gif" alt="HTML Semantic Elements" style={{ width: '100%', maxWidth: '600px' }} />
        </>
      ),
      example: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Layout Elements</title>
</head>
<body>

  <header>
    <h1>City Gallery</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Paris</a></li>
      <li><a href="#">Tokyo</a></li>
    </ul>
  </nav>
  
  <section>
    <h2>Famous Cities</h2>
    
    <article>
      <h3>London</h3>
      <p>London is the capital of England and the United Kingdom.</p>
    </article>
    
    <article>
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </article>
    
    <article>
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </article>
  </section>
  
  <aside>
    <h4>Travel Tips</h4>
    <p>Plan ahead and book your tickets early for the best deals.</p>
  </aside>
  
  <footer>
    <p>Copyright © 2023 City Gallery</p>
  </footer>

</body>
</html>`
    },
    {
      title: 'HTML Layout Techniques',
      content: (
        <>
          <p>There are four different techniques to create multicolumn layouts. Each technique has its pros and cons:</p>
          <ul>
            <li><strong>CSS framework</strong> - Use a CSS framework like Bootstrap</li>
            <li><strong>CSS float property</strong> - Using the CSS float property</li>
            <li><strong>CSS flexbox</strong> - Using CSS flexbox</li>
            <li><strong>CSS grid</strong> - Using CSS grid</li>
          </ul>
        </>
      )
    },
    {
      title: 'CSS Frameworks',
      content: (
        <>
          <p>If you want to create your layout fast, you can use a CSS framework like Bootstrap, Tailwind CSS, or Bulma.</p>
          <p>CSS frameworks provide ready-to-use CSS classes that make layout design easier and more responsive:</p>
          <ul>
            <li>Bootstrap - A comprehensive CSS framework with pre-designed components and a responsive grid system</li>
            <li>Tailwind CSS - A utility-first CSS framework focused on utility classes</li>
            <li>Bulma - A modern CSS framework based on Flexbox</li>
            <li>Foundation - An advanced responsive front-end framework</li>
          </ul>
          <p>These frameworks significantly speed up development time and ensure cross-browser compatibility.</p>
        </>
      ),
      example: `<!-- Bootstrap example -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Layout Example</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Column 1</h2>
        <p>This is the first column content.</p>
      </div>
      <div class="col-md-4">
        <h2>Column 2</h2>
        <p>This is the second column content.</p>
      </div>
      <div class="col-md-4">
        <h2>Column 3</h2>
        <p>This is the third column content.</p>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    {
      title: 'CSS Float Layout',
      content: (
        <>
          <p>The CSS <code>float</code> property is a traditional way to create layouts, allowing elements to float to the left or right of their container:</p>
          <ul>
            <li>Elements are removed from the normal flow of the document</li>
            <li>Floating elements can be positioned to the left or right</li>
            <li>Text and inline elements will wrap around floated elements</li>
            <li>The parent element containing floated elements often needs a clearfix</li>
          </ul>
          <p>While float-based layouts were once the standard, they have largely been replaced by Flexbox and Grid for more complex layouts.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

.header, .footer {
  background-color: grey;
  color: white;
  padding: 15px;
  text-align: center;
}

.column {
  float: left;
  padding: 15px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.menu {
  width: 25%;
}

.content {
  width: 75%;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 8px;
  background-color: #33b5e5;
  color: white;
}

.menu li:hover {
  background-color: #0099cc;
}
</style>
</head>
<body>

<div class="header">
  <h1>My Website</h1>
</div>

<div class="clearfix">
  <div class="column menu">
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
  </div>

  <div class="column content">
    <h1>Web Development</h1>
    <p>Learn to create websites with HTML, style them with CSS, and add interactivity with JavaScript.</p>
    <p>Modern frameworks like React make building complex user interfaces easier.</p>
  </div>
</div>

<div class="footer">
  <p>Footer Text</p>
</div>

</body>
</html>`
    },
    {
      title: 'CSS Flexbox Layout',
      content: (
        <>
          <p>Flexbox is a modern layout model that makes it easier to design flexible responsive layouts:</p>
          <ul>
            <li>Provides a more efficient way to lay out, align, and distribute space among items in a container</li>
            <li>Works well for one-dimensional layouts (row or column)</li>
            <li>Offers powerful alignment and ordering capabilities</li>
            <li>Makes responsive design simpler with fewer media queries</li>
          </ul>
          <p>Flexbox is ideal for components of an application and small-scale layouts, while Grid is better for larger-scale layouts.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header, .footer {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

.main-container {
  display: flex;
}

.menu {
  background-color: #f1f1f1;
  padding: 20px;
  flex: 1;
}

.content {
  padding: 20px;
  flex: 3;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #04AA6D;
  color: white;
  border-radius: 4px;
}

.menu li:hover {
  background-color: #059862;
}

@media screen and (max-width: 700px) {
  .main-container {
    flex-direction: column;
  }
}
</style>
</head>
<body>

<div class="header">
  <h1>Flexbox Layout</h1>
</div>

<div class="main-container">
  <div class="menu">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </div>

  <div class="content">
    <h2>Using CSS Flexbox</h2>
    <p>Flexbox makes it easier to design flexible responsive layout structure without using float or positioning.</p>
    <p>This example uses a flexbox-based layout to create a two-column design that automatically adjusts on smaller screens.</p>
  </div>
</div>

<div class="footer">
  <p>Footer</p>
</div>

</body>
</html>`
    },
    {
      title: 'CSS Grid Layout',
      content: (
        <>
          <p>CSS Grid Layout is a two-dimensional layout system designed specifically for laying out web pages:</p>
          <ul>
            <li>Allows for advanced layouts not easily achieved with other methods</li>
            <li>Provides both row-based and column-based layout control</li>
            <li>Makes it easy to place items in exact positions</li>
            <li>Perfect for overall page layouts and complex grid systems</li>
          </ul>
          <p>CSS Grid is particularly powerful for creating magazine-style layouts, asymmetrical designs, and responsive layouts with less code.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header header header'
    'menu main main main main'
    'footer footer footer footer footer';
  gap: 10px;
  background-color: #f8f9fa;
  padding: 10px;
}

.grid-container > div {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header {
  grid-area: header;
  text-align: center;
  background-color: #4285f4;
  color: white;
}

.menu {
  grid-area: menu;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
  text-align: center;
  background-color: #f1f1f1;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 10px;
  margin-bottom: 10px;
  background-color: #34a853;
  color: white;
  border-radius: 4px;
}

.menu li:hover {
  background-color: #2d9248;
}

@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-areas:
      'header header header'
      'menu menu menu'
      'main main main'
      'footer footer footer';
  }
}
</style>
</head>
<body>

<div class="grid-container">
  <div class="header">
    <h1>CSS Grid Layout</h1>
  </div>
  
  <div class="menu">
    <h2>Menu</h2>
    <ul>
      <li>Dashboard</li>
      <li>Products</li>
      <li>Reports</li>
      <li>Customers</li>
      <li>Settings</li>
    </ul>
  </div>
  
  <div class="main">
    <h2>Grid Layout Example</h2>
    <p>This example uses CSS Grid to create a responsive layout with named grid areas.</p>
    <p>Grid allows you to define layouts in terms of rows and columns, making complex layouts simpler to implement.</p>
    <p>The layout automatically adjusts to different screen sizes by changing the grid template areas in media queries.</p>
  </div>
  
  <div class="footer">
    <p>Footer © 2023</p>
  </div>
</div>

</body>
</html>`
    },
    {
      title: 'Which Layout Method Should You Choose?',
      content: (
        <>
          <p>Here are some general guidelines for choosing a layout method:</p>
          <ul>
            <li><strong>Use CSS Frameworks</strong> when you need to develop rapidly or if you're not confident in your CSS skills.</li>
            <li><strong>Use CSS Float</strong> only for simpler cases like wrapping text around images.</li>
            <li><strong>Use CSS Flexbox</strong> for one-dimensional layouts and components (navigation menus, card layouts).</li>
            <li><strong>Use CSS Grid</strong> for two-dimensional layouts and overall page structure.</li>
          </ul>
          <p>In modern web development, Flexbox and Grid are often used together:</p>
          <ul>
            <li>Grid for the main layout structure</li>
            <li>Flexbox for alignment within grid cells and for UI components</li>
          </ul>
          <p>Remember, all these methods can be combined to create complex, responsive layouts that work across different devices and screen sizes.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Comprehensive HTML Layout Example',
      description: 'An example combining semantic elements with CSS Grid for a responsive layout.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern HTML Layout Example</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    
    .container {
      display: grid;
      grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: auto auto auto;
      min-height: 100vh;
      max-width: 1200px;
      margin: 0 auto;
      gap: 10px;
    }
    
    header {
      grid-area: header;
      background-color: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    nav {
      grid-area: nav;
      background-color: #34495e;
      padding: 20px;
    }
    
    main {
      grid-area: main;
      background-color: white;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    aside {
      grid-area: aside;
      background-color: #ecf0f1;
      padding: 20px;
    }
    
    footer {
      grid-area: footer;
      background-color: #2c3e50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    nav ul {
      list-style: none;
    }
    
    nav li {
      margin-bottom: 10px;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      display: block;
      padding: 8px;
      background-color: #455a74;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }
    
    nav a:hover {
      background-color: #5d7795;
    }
    
    article {
      background-color: #f9f9f9;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
      border-left: 4px solid #3498db;
    }
    
    article h2 {
      color: #2980b9;
    }
    
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 20px;
    }
    
    .card {
      flex: 1 1 300px;
      background-color: white;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .card h3 {
      margin-bottom: 10px;
      color: #2c3e50;
    }
    
    .card img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
      border-radius: 4px;
    }
    
    .aside-widget {
      background-color: white;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .aside-widget h3 {
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
    
    /* Responsive layout */
    @media (max-width: 768px) {
      .container {
        grid-template-areas:
          "header"
          "nav"
          "main"
          "aside"
          "footer";
        grid-template-columns: 1fr;
      }
      
      nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      
      nav li {
        margin-bottom: 0;
        flex-grow: 1;
      }
      
      .card-container {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <header>
    <h1>Modern Web Layout</h1>
    <p>Using HTML5 Semantic Elements with CSS Grid and Flexbox</p>
  </header>
  
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  
  <main>
    <section>
      <h2>Welcome to Our Website</h2>
      <p>This example demonstrates a modern HTML layout using semantic HTML5 elements combined with CSS Grid for the page structure and Flexbox for component layouts.</p>
      
      <article>
        <h2>HTML5 Semantic Elements</h2>
        <p>HTML5 introduced several semantic elements that clearly describe their meaning to both the browser and the developer, making the code more readable and better for SEO.</p>
        <p>Elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, and &lt;footer&gt; provide structural meaning to the web page.</p>
      </article>
      
      <article>
        <h2>CSS Grid Layout</h2>
        <p>CSS Grid Layout is a powerful two-dimensional layout system designed specifically for laying out web pages. It's perfect for dividing a page into major regions or defining the relationship in terms of size, position, and layer between parts of a control.</p>
      </article>
      
      <h2>Our Services</h2>
      <div class="card-container">
        <div class="card">
          <h3>Web Design</h3>
          <img src="https://via.placeholder.com/300x200" alt="Web Design">
          <p>Creative and responsive web design solutions tailored to your business needs.</p>
        </div>
        
        <div class="card">
          <h3>Development</h3>
          <img src="https://via.placeholder.com/300x200" alt="Web Development">
          <p>Full-stack development services using the latest technologies and frameworks.</p>
        </div>
        
        <div class="card">
          <h3>SEO</h3>
          <img src="https://via.placeholder.com/300x200" alt="SEO Services">
          <p>Search engine optimization to improve your website's visibility and traffic.</p>
        </div>
      </div>
    </section>
  </main>
  
  <aside>
    <div class="aside-widget">
      <h3>Recent Posts</h3>
      <ul>
        <li>Understanding CSS Grid</li>
        <li>The Power of Flexbox</li>
        <li>Semantic HTML Benefits</li>
        <li>Responsive Design Tips</li>
      </ul>
    </div>
    
    <div class="aside-widget">
      <h3>Contact Info</h3>
      <p>Email: info@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Web Dev St, Internet City</p>
    </div>
  </aside>
  
  <footer>
    <p>&copy; 2023 Modern Layout Example. All rights reserved.</p>
    <p>This page demonstrates semantic HTML elements and modern CSS layout techniques.</p>
  </footer>
</div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_head'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_responsive')
}; 