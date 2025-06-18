import { htmlTopics } from './htmlTopics';

export const htmlFavicon = {
  id: 'html_favicon',
  title: 'HTML Favicon',
  description: 'A favicon is a small image displayed next to the page title in the browser tab.',
  sections: [
    {
      title: 'What is a Favicon?',
      content: (
        <>
          <p>A favicon is a small image displayed next to the page title in the browser tab.</p>
          <p>A favicon is a small square image that is used to represent a website in web browsers. It is usually displayed in the address bar, browser tabs, bookmarks, and history.</p>
        </>
      )
    },
    {
      title: 'How To Add a Favicon',
      content: (
        <>
          <p>You can use any image as your favicon, but most browsers support favicon.ico (image/x-icon), PNG, GIF, or JPEG formats.</p>
          <p>To add a favicon to your website, either save your favicon image as favicon.ico, or create a link element in the HTML file, after the <code>{'<title>'}</code> element:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Favicon File Formats',
      content: (
        <>
          <p>The following table shows the preferred favicon format for each major browser:</p>
          <table>
            <tr>
              <th>Browser</th>
              <th>Favicon Format</th>
            </tr>
            <tr>
              <td>Edge</td>
              <td>ICO, PNG</td>
            </tr>
            <tr>
              <td>Chrome</td>
              <td>ICO, PNG, GIF, JPEG, SVG</td>
            </tr>
            <tr>
              <td>Firefox</td>
              <td>ICO, PNG, GIF, JPEG, SVG</td>
            </tr>
            <tr>
              <td>Safari</td>
              <td>ICO, PNG</td>
            </tr>
            <tr>
              <td>Opera</td>
              <td>ICO, PNG, GIF, JPEG, SVG</td>
            </tr>
          </table>
        </>
      )
    },
    {
      title: 'Favicon File Location',
      content: (
        <>
          <p>The HTML <code>{'<link>'}</code> element is used to link to external resources, such as stylesheets, favicons, etc.</p>
          <p>The <code>rel</code> attribute specifies the relationship between the current document and the linked resource.</p>
          <p>The <code>type</code> attribute specifies the media type of the linked resource.</p>
          <p>The <code>href</code> attribute specifies the location (URL) of the external resource (often a style sheet file).</p>
          <p>The favicon is usually stored in the root directory of your website. However, you can store your favicon wherever you want, just make sure that the <code>href</code> attribute points to the favicon's location.</p>
        </>
      ),
      example: `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
    },
    {
      title: 'Creating a Favicon',
      content: (
        <>
          <p>You can create your own favicon using image editing software, or you can use an online favicon generator.</p>
          <p>To create a favicon, follow these steps:</p>
          <ol>
            <li>Create a small square image (16x16 pixels, 32x32 pixels, or 48x48 pixels)</li>
            <li>Save the image as .ico, .png, .gif, or .jpeg</li>
            <li>Add the <code>{'<link>'}</code> element to your HTML file</li>
            <li>Upload the image and the HTML file to your website</li>
          </ol>
        </>
      )
    },
    {
      title: 'Browser Support',
      content: (
        <>
          <p>The <code>{'<link>'}</code> element with the <code>rel="icon"</code> attribute is supported in all major browsers.</p>
          <p>The <code>favicon.ico</code> file format is supported in all major browsers.</p>
          <p>The PNG file format is supported in all major browsers, except Internet Explorer 10 and earlier versions.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML Favicon Example',
      description: 'Example showing how to add a favicon to an HTML document.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My Website with Favicon</title>
  <!-- Basic favicon for most browsers -->
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  
  <!-- For Apple devices -->
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
  
  <!-- For Android devices -->
  <link rel="icon" type="image/png" sizes="192x192" href="/images/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/images/android-chrome-512x512.png">
  
  <!-- For Microsoft Edge and IE -->
  <meta name="msapplication-TileImage" content="/images/mstile-150x150.png">
  <meta name="msapplication-TileColor" content="#ffffff">
  
  <!-- Site metadata -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>Website with Favicon</h1>
  <p>Look at the browser tab to see the favicon next to the page title.</p>
  
  <h2>What is a Favicon?</h2>
  <p>A favicon (short for "favorite icon") is a small, iconic image that represents a website or web page in browser tabs, bookmarks, and other UI elements.</p>
  
  <h2>Benefits of Using a Favicon</h2>
  <ul>
    <li>Improves brand recognition</li>
    <li>Makes it easier for users to identify your site in their open tabs</li>
    <li>Enhances the professional appearance of your website</li>
    <li>Helps users locate your site in their bookmarks</li>
  </ul>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_images'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_page_title')
}; 