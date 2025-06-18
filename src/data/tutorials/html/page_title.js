import { htmlTopics } from './htmlTopics';

export const htmlPageTitle = {
  id: 'html_page_title',
  title: 'HTML Page Title',
  description: 'The HTML <title> element defines the title of the document, which appears in the browser\'s title bar or tab.',
  sections: [
    {
      title: 'The HTML <title> Element',
      content: (
        <>
          <p>The <code>{'<title>'}</code> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.</p>
          <p>The <code>{'<title>'}</code> element is required in HTML documents.</p>
          <p>The <code>{'<title>'}</code> element:</p>
          <ul>
            <li>defines a title in the browser toolbar</li>
            <li>provides a title for the page when it is added to favorites</li>
            <li>displays a title for the page in search engine results</li>
          </ul>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'The Page Title and SEO',
      content: (
        <>
          <p>The title of your web page is very important for search engine optimization (SEO). The title is used by search engine algorithms to determine the order when listing pages in search results.</p>
          <p>Here are some tips for creating good titles:</p>
          <ul>
            <li>Go for a longer, descriptive title (avoid one or two words)</li>
            <li>Search engines will display about 50-60 characters of the title, so try not to have titles longer than that</li>
            <li>Do not use just a list of words as the title (this may reduce the page's position in search results)</li>
          </ul>
        </>
      )
    },
    {
      title: 'Best Practices for Page Titles',
      content: (
        <>
          <p>Here are some best practices for creating effective page titles:</p>
          <ol>
            <li><strong>Be descriptive and concise</strong>: Your title should accurately describe the content of the page in a concise manner.</li>
            <li><strong>Include keywords</strong>: Include relevant keywords that users might search for.</li>
            <li><strong>Keep it under 60 characters</strong>: While there's no strict limit, search engines typically display only the first 50-60 characters.</li>
            <li><strong>Make each page title unique</strong>: Every page on your website should have a different title.</li>
            <li><strong>Include your brand name</strong>: Consider including your brand or website name, typically at the end of the title.</li>
            <li><strong>Write for humans first</strong>: While optimizing for search engines is important, make sure your title is readable and makes sense to human visitors.</li>
          </ol>
        </>
      )
    },
    {
      title: 'Common Title Formats',
      content: (
        <>
          <p>Here are some common formats for page titles:</p>
          <ul>
            <li><strong>Primary Keyword - Secondary Keyword | Brand Name</strong><br />Example: "HTML Tutorial - Learn HTML Basics | S2Schools"</li>
            <li><strong>Page Name | Site Section | Brand Name</strong><br />Example: "HTML Tables | HTML Tutorial | S2Schools"</li>
            <li><strong>Primary Keyword | Brand Name</strong><br />Example: "How to Create a Website | S2Schools"</li>
            <li><strong>Question Format | Brand Name</strong><br />Example: "What is HTML? | S2Schools"</li>
          </ul>
        </>
      )
    },
    {
      title: 'Location of the <title> Element',
      content: (
        <>
          <p>The <code>{'<title>'}</code> element is placed within the <code>{'<head>'}</code> section of your HTML document.</p>
          <p>It's important to place the title element correctly in your HTML structure:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title Goes Here</title>
  <meta name="description" content="Description of the page goes here">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Your page content goes here -->
</body>
</html>`
    },
    {
      title: 'Changing the Page Title Dynamically',
      content: (
        <>
          <p>You can change the page title dynamically using JavaScript, which can be useful for single-page applications or to update the title based on user actions:</p>
        </>
      ),
      example: `// JavaScript to change the page title
document.title = "New Page Title";`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Page Title Example',
      description: 'Example showing good page title implementations for different types of pages.',
      code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- Homepage title example -->
  <title>S2Schools - Learn Web Development | HTML, CSS, JavaScript Tutorials</title>
  <meta name="description" content="Free web development tutorials with examples. Learn HTML, CSS, JavaScript and more.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <script>
    // Example of how to change title dynamically
    function changePageTitle(newTitle) {
      document.title = newTitle;
    }
    
    // This function could be called when navigating between sections 
    // in a single page application
    function navigateToSection(section) {
      if (section === "html") {
        changePageTitle("HTML Tutorial | S2Schools");
      } else if (section === "css") {
        changePageTitle("CSS Tutorial | S2Schools");
      } else if (section === "js") {
        changePageTitle("JavaScript Tutorial | S2Schools");
      }
      
      // Additional navigation logic would go here
    }
  </script>
</head>
<body>

  <header>
    <h1>S2Schools Web Development Tutorials</h1>
    <nav>
      <button onclick="navigateToSection('html')">HTML</button>
      <button onclick="navigateToSection('css')">CSS</button>
      <button onclick="navigateToSection('js')">JavaScript</button>
    </nav>
  </header>

  <main>
    <section>
      <h2>The Importance of Page Titles</h2>
      <p>The page title appears in:</p>
      <ul>
        <li>Browser tabs</li>
        <li>Search engine results</li>
        <li>Social media shares</li>
        <li>Browser bookmarks</li>
        <li>Browser history</li>
      </ul>
      
      <p>Click the navigation buttons above to see how the page title changes dynamically!</p>
    </section>
    
    <section>
      <h2>Title Examples for Different Page Types</h2>
      <table>
        <tr>
          <th>Page Type</th>
          <th>Example Title</th>
        </tr>
        <tr>
          <td>Homepage</td>
          <td>S2Schools - Learn Web Development | HTML, CSS, JavaScript Tutorials</td>
        </tr>
        <tr>
          <td>Tutorial Page</td>
          <td>HTML Tables Tutorial - Complete Guide | S2Schools</td>
        </tr>
        <tr>
          <td>Blog Post</td>
          <td>10 HTML Best Practices Every Developer Should Know | S2Schools Blog</td>
        </tr>
        <tr>
          <td>Contact Page</td>
          <td>Contact Us | S2Schools</td>
        </tr>
        <tr>
          <td>About Page</td>
          <td>About S2Schools | Our Mission and Team</td>
        </tr>
      </table>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 S2Schools - Web Development Tutorials</p>
  </footer>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_favicon'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_tables')
}; 