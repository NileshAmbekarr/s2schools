import { htmlTopics } from './htmlTopics';

export const htmlLinks = {
  id: 'html_links',
  title: 'HTML Links',
  description: 'HTML links are hyperlinks that allow users to click and navigate to another document.',
  sections: [
    {
      title: 'HTML Links - Hyperlinks',
      content: (
        <>
          <p>HTML links are hyperlinks.</p>
          <p>You can click on a link and jump to another document.</p>
          <p>When you move the mouse over a link, the mouse arrow will turn into a little hand.</p>
          <p>Note: A link does not have to be text. A link can be an image or any other HTML element!</p>
        </>
      )
    },
    {
      title: 'HTML Links - Syntax',
      content: (
        <>
          <p>The HTML <code>{'<a>'}</code> tag defines a hyperlink. It has the following syntax:</p>
        </>
      ),
      example: `<a href="url">link text</a>`
    },
    {
      title: 'The href Attribute',
      content: (
        <>
          <p>The most important attribute of the <code>{'<a>'}</code> element is the <code>href</code> attribute, which indicates the link's destination.</p>
          <p>The <code>link text</code> is the part that will be visible to the reader.</p>
          <p>Clicking on the link text will send the reader to the specified URL address.</p>
        </>
      ),
      example: `<a href="https://www.s2schools.com">Visit S2Schools.com!</a>`
    },
    {
      title: 'HTML Links - The target Attribute',
      content: (
        <>
          <p>By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.</p>
          <p>The <code>target</code> attribute specifies where to open the linked document.</p>
          <p>The <code>target</code> attribute can have one of the following values:</p>
          <ul>
            <li><code>_self</code> - Default. Opens the document in the same window/tab as it was clicked</li>
            <li><code>_blank</code> - Opens the document in a new window or tab</li>
            <li><code>_parent</code> - Opens the document in the parent frame</li>
            <li><code>_top</code> - Opens the document in the full body of the window</li>
          </ul>
        </>
      ),
      example: `<a href="https://www.s2schools.com" target="_blank">Visit S2Schools!</a>`
    },
    {
      title: 'Absolute URLs vs. Relative URLs',
      content: (
        <>
          <p>Both examples above are using an <strong>absolute URL</strong> (a full web address) in the <code>href</code> attribute.</p>
          <p>A local link (a link to a page within the same website) is specified with a <strong>relative URL</strong> (without the "https://www" part):</p>
        </>
      ),
      example: `<h2>Absolute URLs</h2>
<p><a href="https://www.s2schools.com">S2Schools</a></p>
<p><a href="https://www.google.com">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>`
    },
    {
      title: 'HTML Links - Use an Image as a Link',
      content: (
        <>
          <p>To use an image as a link, just put the <code>{'<img>'}</code> tag inside the <code>{'<a>'}</code> tag:</p>
        </>
      ),
      example: `<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`
    },
    {
      title: 'Link to an Email Address',
      content: (
        <>
          <p>Use <code>mailto:</code> inside the <code>href</code> attribute to create a link that opens the user's email program (to let them send a new email):</p>
        </>
      ),
      example: `<a href="mailto:someone@example.com">Send email</a>`
    },
    {
      title: 'Button as a Link',
      content: (
        <>
          <p>To use an HTML button as a link, you have to add some JavaScript code.</p>
          <p>JavaScript allows you to specify what happens at certain events, such as a click of a button:</p>
        </>
      ),
      example: `<button onclick="document.location='default.asp'">HTML Tutorial</button>`
    },
    {
      title: 'Link Titles',
      content: (
        <>
          <p>The <code>title</code> attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.</p>
        </>
      ),
      example: `<a href="https://www.s2schools.com" title="Go to S2Schools HTML section">Visit our HTML Tutorial</a>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Links Example',
      description: 'Example showing various ways to create links in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Links</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    .link-section {
      margin-bottom: 30px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .button-link {
      display: inline-block;
      padding: 10px 15px;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .image-link {
      border: none;
    }
    .image-link img {
      border: 2px solid transparent;
      transition: border-color 0.3s;
    }
    .image-link:hover img {
      border-color: #4CAF50;
    }
  </style>
</head>
<body>

  <h1>HTML Links Tutorial</h1>
  
  <div class="link-section">
    <h2>Basic Links</h2>
    <p><a href="https://www.example.com">Visit Example.com</a></p>
    <p><a href="https://www.example.com" target="_blank">Open Example.com in a new tab</a></p>
  </div>
  
  <div class="link-section">
    <h2>Relative Links</h2>
    <p><a href="images.html">Go to Images page</a></p>
    <p><a href="../css/styles.html">Go to CSS Styles page</a></p>
  </div>
  
  <div class="link-section">
    <h2>Image Links</h2>
    <a href="https://www.example.com" class="image-link">
      <img src="example-logo.png" alt="Example Website" width="100" height="50">
    </a>
  </div>
  
  <div class="link-section">
    <h2>Styled Links</h2>
    <p><a href="https://www.example.com" class="button-link">Button-styled Link</a></p>
  </div>
  
  <div class="link-section">
    <h2>Email Links</h2>
    <p><a href="mailto:info@example.com?subject=Question%20about%20HTML">Send us an email</a></p>
  </div>
  
  <div class="link-section">
    <h2>Link with Title</h2>
    <p><a href="https://www.example.com" title="Visit Example.com for more information">Link with tooltip</a> (hover over to see tooltip)</p>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_css'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_images')
}; 