import { htmlTopics } from './htmlTopics';

export const htmlAttributes = {
  id: 'html_attributes',
  title: 'HTML Attributes',
  description: 'HTML attributes provide additional information about HTML elements.',
  sections: [
    {
      title: 'HTML Attributes',
      content: (
        <>
          <p>All HTML elements can have <strong>attributes</strong></p>
          <p>Attributes provide <strong>additional information</strong> about elements</p>
          <p>Attributes are always specified in <strong>the start tag</strong></p>
          <p>Attributes usually come in name/value pairs like: <strong>name="value"</strong></p>
        </>
      )
    },
    {
      title: 'The href Attribute',
      content: (
        <>
          <p>The <code>{'<a>'}</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL of the page the link goes to:</p>
        </>
      ),
      example: `<a href="https://www.s2schools.com">Visit S2Schools</a>`
    },
    {
      title: 'The src Attribute',
      content: (
        <>
          <p>The <code>{'<img>'}</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute specifies the path to the image to be displayed:</p>
        </>
      ),
      example: `<img src="img_girl.jpg">`
    },
    {
      title: 'The width and height Attributes',
      content: (
        <>
          <p>The <code>{'<img>'}</code> tag should also contain the <code>width</code> and <code>height</code> attributes, which specify the width and height of the image (in pixels):</p>
        </>
      ),
      example: `<img src="img_girl.jpg" width="500" height="600">`
    },
    {
      title: 'The alt Attribute',
      content: (
        <>
          <p>The required <code>alt</code> attribute for the <code>{'<img>'}</code> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the <code>src</code> attribute, or if the user uses a screen reader.</p>
        </>
      ),
      example: `<img src="img_girl.jpg" alt="Girl with a jacket">`
    },
    {
      title: 'The style Attribute',
      content: (
        <>
          <p>The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.</p>
        </>
      ),
      example: `<p style="color:red;">This is a red paragraph.</p>`
    },
    {
      title: 'The lang Attribute',
      content: (
        <>
          <p>The language of the document can be declared in the <code>{'<html>'}</code> tag. The language is declared with the <code>lang</code> attribute. Declaring a language is important for accessibility applications (screen readers) and search engines:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>`
    },
    {
      title: 'The title Attribute',
      content: (
        <>
          <p>The <code>title</code> attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element:</p>
        </>
      ),
      example: `<p title="I'm a tooltip">This is a paragraph.</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Attributes Example',
      description: 'Example showing various HTML attributes in use.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>HTML Attributes Example</title>
  <meta charset="UTF-8">
</head>
<body>

  <!-- href attribute -->
  <h2>The href Attribute</h2>
  <a href="https://www.s2schools.com">Visit S2Schools.com</a>
  
  <!-- src, alt, width, height attributes -->
  <h2>The src, alt, width, and height Attributes</h2>
  <img src="s2schools_logo.png" alt="S2Schools Logo" width="300" height="100">
  
  <!-- style attribute -->
  <h2>The style Attribute</h2>
  <p style="color:blue; font-size:20px;">This is a paragraph with style.</p>
  
  <!-- title attribute -->
  <h2>The title Attribute</h2>
  <p title="I'm a tooltip">Hover over this paragraph to see the title attribute value.</p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_elements'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_headings')
}; 