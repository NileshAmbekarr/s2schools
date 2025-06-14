import { htmlTopics } from './htmlTopics';

export const htmlStyles = {
  id: 'html_styles',
  title: 'HTML Styles',
  description: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more.',
  sections: [
    {
      title: 'The HTML Style Attribute',
      content: (
        <>
          <p>Setting the style of an HTML element, can be done with the <code>style</code> attribute.</p>
          <p>The HTML <code>style</code> attribute has the following syntax:</p>
          <p><code>{'<tagname style="property:value;">'}</code></p>
          <p>The <strong>property</strong> is a CSS property. The <strong>value</strong> is a CSS value.</p>
        </>
      )
    },
    {
      title: 'Background Color',
      content: (
        <>
          <p>The CSS <code>background-color</code> property defines the background color for an HTML element.</p>
        </>
      ),
      example: `<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>`
    },
    {
      title: 'Text Color',
      content: (
        <>
          <p>The CSS <code>color</code> property defines the text color for an HTML element:</p>
        </>
      ),
      example: `<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`
    },
    {
      title: 'Fonts',
      content: (
        <>
          <p>The CSS <code>font-family</code> property defines the font to be used for an HTML element:</p>
        </>
      ),
      example: `<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`
    },
    {
      title: 'Text Size',
      content: (
        <>
          <p>The CSS <code>font-size</code> property defines the text size for an HTML element:</p>
        </>
      ),
      example: `<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`
    },
    {
      title: 'Text Alignment',
      content: (
        <>
          <p>The CSS <code>text-align</code> property defines the horizontal text alignment for an HTML element:</p>
        </>
      ),
      example: `<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Styles Example',
      description: 'Example showing various HTML style attributes.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Styles</title>
  <meta charset="UTF-8">
</head>
<body style="background-color:#f0f8ff;">

  <h1 style="color:#0000ff; font-family:Arial; text-align:center;">
    Styling with HTML
  </h1>
  
  <p style="font-size:18px; color:#333333; font-family:Verdana;">
    This paragraph has custom font, size, and color.
  </p>
  
  <div style="background-color:#e6e6fa; padding:15px; border:2px solid #9370db;">
    <h2 style="color:#800080;">Styled Container</h2>
    <p style="font-style:italic;">This text is inside a styled container.</p>
  </div>
  
  <p style="text-align:right; margin-top:20px; font-weight:bold;">
    This paragraph is right-aligned and bold.
  </p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_paragraphs'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_formatting')
}; 