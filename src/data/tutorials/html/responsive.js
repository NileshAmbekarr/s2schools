import { htmlTopics } from './htmlTopics';

export const htmlResponsive = {
  id: 'html_responsive',
  title: 'HTML Responsive Web Design',
  description: 'Learn how to create websites that work well on all devices, from desktop computers to mobile phones.',
  sections: [
    {
      title: 'What is Responsive Web Design?',
      content: (
        <>
          <p>Responsive Web Design is about creating web pages that look good on all devices!</p>
          <p>A responsive web design will automatically adjust for different screen sizes and viewports.</p>
          <p>Responsive web design makes your web page look good on all devices (desktops, tablets, and phones).</p>
          <p>Responsive web design does not require a separate website for mobile devices.</p>
        </>
      )
    },
    {
      title: 'Setting The Viewport',
      content: (
        <>
          <p>To create a responsive website, add the following <code>{'<meta>'}</code> tag to all your web pages:</p>
        </>
      ),
      example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    },
    {
      title: 'What is The Viewport?',
      content: (
        <>
          <p>The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.</p>
          <p>Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and fixed size.</p>
          <p>Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.</p>
          <p>This was not perfect! But a quick fix.</p>
          <p>Setting the viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling.</p>
          <p>The <code>width=device-width</code> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>
          <p>The <code>initial-scale=1.0</code> part sets the initial zoom level when the page is first loaded by the browser.</p>
        </>
      )
    },
    {
      title: 'Responsive Images',
      content: (
        <>
          <p>Responsive images are images that scale nicely to fit any browser size.</p>
          <h3>Using the width Property</h3>
          <p>If the CSS <code>width</code> property is set to a percentage value, the image will scale up and down when resizing the browser window. Resize the browser window to see the effect:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
img {
  width: 100%;
  height: auto;
}
</style>
</head>
<body>

<img src="img_responsive.jpg" alt="Responsive Image">
<p>Resize the browser window to see how the image scales.</p>

</body>
</html>`
    },
    {
      title: 'The max-width Property',
      content: (
        <>
          <p>If the <code>max-width</code> property is set to 100%, the image will scale down if it has to, but never scale up to be larger than its original size:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
</head>
<body>

<img src="img_responsive.jpg" alt="Responsive Image">
<p>Resize the browser window to see the effect.</p>

</body>
</html>`
    },
    {
      title: 'Responsive Text Size',
      content: (
        <>
          <p>The text size can be set with a "vw" unit, which means "viewport width".</p>
          <p>That way the text size will follow the size of the browser window:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  font-size: 5vw;
}

p {
  font-size: 3vw;
}
</style>
</head>
<body>

<h1>Responsive Text</h1>
<p>Resize the browser window to see how the text size scales.</p>
<p>Use the "vw" unit when sizing the text. 10vw will set the size to 10% of the viewport width.</p>
<p>Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.</p>

</body>
</html>`
    },
    {
      title: 'Media Queries',
      content: (
        <>
          <p>In addition to resizing text and images, it is also common to use media queries in responsive web pages.</p>
          <p>With media queries you can define completely different styles for different browser sizes.</p>
          <p>Media queries are used to create responsive designs that adapt to various devices and screen sizes. They allow you to specify different CSS styles for different viewport dimensions, device characteristics, and orientation.</p>
          <p>The following example shows a menu that will display differently depending on the screen size:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.menu {
  float: left;
  width: 20%;
}

.menuitem {
  padding: 8px;
  margin-top: 7px;
  border-bottom: 1px solid #f1f1f1;
}

.main {
  float: left;
  width: 60%;
  padding: 0 20px;
}

.right {
  background-color: lightblue;
  float: left;
  width: 20%;
  padding: 10px 15px;
  margin-top: 7px;
}

@media only screen and (max-width:800px) {
  /* For tablets: */
  .main {
    width: 80%;
  }
  .right {
    width: 100%;
  }
}

@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .main, .right {
    width: 100%;
  }
}
</style>
</head>
<body style="font-family:Verdana;">

<div style="background-color:#f1f1f1;padding:15px;">
  <h1>Responsive Website</h1>
  <p>Resize the browser window to see the effect.</p>
</div>

<div style="overflow:auto">
  <div class="menu">
    <div class="menuitem">Home</div>
    <div class="menuitem">About</div>
    <div class="menuitem">Services</div>
    <div class="menuitem">Portfolio</div>
    <div class="menuitem">Contact</div>
  </div>

  <div class="main">
    <h2>Responsive Design</h2>
    <p>Responsive web design makes your web page look good on all devices.</p>
    <p>This example uses media queries to rearrange the layout when the screen size is changed.</p>
    <img src="img_responsive.jpg" style="width:100%">
  </div>

  <div class="right">
    <h2>Sidebar</h2>
    <p>This sidebar adjusts width based on screen size.</p>
  </div>
</div>

<div style="background-color:#f1f1f1;text-align:center;padding:10px;margin-top:7px;font-size:12px;">
  This example uses media queries to create a responsive layout.
</div>

</body>
</html>`
    },
    {
      title: 'Responsive Web Design - Frameworks',
      content: (
        <>
          <p>All popular CSS Frameworks offer responsive design features:</p>
          <ul>
            <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></li>
            <li><a href="https://bulma.io/" target="_blank">Bulma</a></li>
            <li><a href="https://foundation.zurb.com/" target="_blank">Foundation</a></li>
          </ul>
          <p>These frameworks make responsive design much easier to implement. They come with pre-built responsive classes and components that you can use directly in your HTML.</p>
        </>
      ),
      example: `<!-- Bootstrap Responsive Grid Example -->
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container">
  <h1>Bootstrap Responsive Grid</h1>
  <p>Resize the browser window to see how the columns adjust.</p>
  
  <div class="row">
    <div class="col-sm-4 bg-primary text-white p-3">
      <h3>Column 1</h3>
      <p>This column takes up 4/12 of the grid on small screens and above.</p>
    </div>
    <div class="col-sm-4 bg-success text-white p-3">
      <h3>Column 2</h3>
      <p>This column takes up 4/12 of the grid on small screens and above.</p>
    </div>
    <div class="col-sm-4 bg-warning text-white p-3">
      <h3>Column 3</h3>
      <p>This column takes up 4/12 of the grid on small screens and above.</p>
    </div>
  </div>
  
  <div class="row mt-3">
    <div class="col-md-6 bg-info text-white p-3">
      <h3>Column 1</h3>
      <p>This column takes up 6/12 of the grid on medium screens and above.</p>
    </div>
    <div class="col-md-6 bg-danger text-white p-3">
      <h3>Column 2</h3>
      <p>This column takes up 6/12 of the grid on medium screens and above.</p>
    </div>
  </div>
</div>

</body>
</html>`
    },
    {
      title: 'Responsive Web Design - Best Practices',
      content: (
        <>
          <p>Here are some best practices for creating responsive websites:</p>
          <ol>
            <li><strong>Always include the viewport meta tag</strong> in your HTML documents.</li>
            <li><strong>Use relative units</strong> like percentages, em, rem, or vw/vh instead of fixed pixel values.</li>
            <li><strong>Set max-width: 100%</strong> on elements like images to prevent them from overflowing their containers.</li>
            <li><strong>Use media queries</strong> to adjust layouts for different screen sizes.</li>
            <li><strong>Design for mobile first</strong>, then enhance for larger screens. This ensures a good experience on the most constrained devices.</li>
            <li><strong>Test on real devices</strong> whenever possible, not just browser resizing.</li>
            <li><strong>Use flexible layout methods</strong> like Flexbox and Grid.</li>
            <li><strong>Consider touch targets</strong> - buttons and links should be at least 44px by 44px for easy tapping on mobile.</li>
            <li><strong>Optimize images</strong> to reduce load times on mobile devices.</li>
            <li><strong>Hide non-essential content</strong> on smaller screens to focus on what's important.</li>
          </ol>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Complete Responsive Website Example',
      description: 'A comprehensive example of a responsive website using media queries and flexible layouts.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Website Example</title>
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
    }
    
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
    }
    
    /* Header Styles */
    header {
      background-color: #2c3e50;
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    /* Navigation */
    nav ul {
      list-style: none;
      display: flex;
    }
    
    nav ul li {
      margin-left: 20px;
    }
    
    nav ul li a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    nav ul li a:hover {
      color: #3498db;
    }
    
    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    /* Hero Section */
    .hero {
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://via.placeholder.com/1920x1080');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 100px 0;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 800px;
      margin: 0 auto 2rem;
    }
    
    .btn {
      display: inline-block;
      background-color: #3498db;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #2980b9;
    }
    
    /* Features Section */
    .features {
      padding: 80px 0;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2rem;
    }
    
    .features-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
    }
    
    .feature-box {
      flex: 1 1 300px;
      background-color: #f8f9fa;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    
    .feature-box i {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #3498db;
    }
    
    .feature-box h3 {
      margin-bottom: 15px;
    }
    
    /* About Section */
    .about {
      padding: 80px 0;
      background-color: #f1f1f1;
    }
    
    .about-container {
      display: flex;
      align-items: center;
      gap: 50px;
    }
    
    .about-image {
      flex: 1;
    }
    
    .about-image img {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .about-content {
      flex: 1;
    }
    
    .about-content h2 {
      margin-bottom: 20px;
    }
    
    /* Footer */
    footer {
      background-color: #2c3e50;
      color: white;
      padding: 50px 0 20px;
    }
    
    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 30px;
      margin-bottom: 30px;
    }
    
    .footer-section {
      flex: 1 1 200px;
    }
    
    .footer-section h3 {
      margin-bottom: 20px;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
      display: inline-block;
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section ul li {
      margin-bottom: 10px;
    }
    
    .footer-section ul li a {
      color: #ecf0f1;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-section ul li a:hover {
      color: #3498db;
    }
    
    .copyright {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #34495e;
    }
    
    /* Media Queries */
    @media screen and (max-width: 992px) {
      .about-container {
        flex-direction: column;
      }
      
      .feature-box {
        flex: 1 1 45%;
      }
    }
    
    @media screen and (max-width: 768px) {
      .mobile-menu-button {
        display: block;
      }
      
      nav ul {
        display: none;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: #2c3e50;
        flex-direction: column;
        padding: 20px;
      }
      
      nav ul.show {
        display: flex;
      }
      
      nav ul li {
        margin: 10px 0;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .feature-box {
        flex: 1 1 100%;
      }
    }
    
    @media screen and (max-width: 576px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .hero p {
        font-size: 1rem;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .footer-section {
        flex: 1 1 100%;
      }
    }
  </style>
</head>
<body>

  <header>
    <div class="container header-container">
      <div class="logo">ResponsiveDesign</div>
      
      <button class="mobile-menu-button">☰</button>
      
      <nav>
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h1>Welcome to Responsive Web Design</h1>
      <p>Create beautiful websites that work on all devices - desktop computers, tablets, and phones.</p>
      <a href="#" class="btn">Learn More</a>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <h2 class="section-title">Our Features</h2>
      
      <div class="features-container">
        <div class="feature-box">
          <i>📱</i>
          <h3>Fully Responsive</h3>
          <p>Our designs work perfectly on all devices, from desktop to mobile phones.</p>
        </div>
        
        <div class="feature-box">
          <i>🎨</i>
          <h3>Modern Design</h3>
          <p>Clean, professional, and contemporary designs that make your website stand out.</p>
        </div>
        
        <div class="feature-box">
          <i>⚡</i>
          <h3>Fast Performance</h3>
          <p>Optimized code and assets ensure your website loads quickly on all devices.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="about">
    <div class="container">
      <h2 class="section-title">About Responsive Design</h2>
      
      <div class="about-container">
        <div class="about-image">
          <img src="https://via.placeholder.com/600x400" alt="About Responsive Design">
        </div>
        
        <div class="about-content">
          <h2>Why Choose Responsive Design?</h2>
          <p>Responsive web design makes your web page look good on all devices. It uses only HTML and CSS to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.</p>
          <p>With more people accessing the internet using mobile devices than desktops, it's essential that your website works well on all screen sizes.</p>
          <p>Our approach to responsive design ensures your website will provide an optimal viewing experience across a wide range of devices.</p>
          <a href="#" class="btn" style="margin-top: 20px;">Read More</a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to creating responsive, accessible, and beautiful websites that work across all devices.</p>
        </div>
        
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Web Street, Internet City</li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; 2023 ResponsiveDesign. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    // Simple JavaScript for mobile menu toggle
    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
      document.getElementById('menu').classList.toggle('show');
    });
  </script>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_layout'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_computercode')
}; 