import { htmlTopics } from './htmlTopics';

export const htmlHeadings = {
  id: 'html_headings',
  title: 'HTML Headings',
  description: 'HTML headings are titles or subtitles that you want to display on a webpage.',
  sections: [
    {
      title: 'HTML Headings',
      content: (
        <>
          <p>HTML headings are defined with the <code>{'<h1>'}</code> to <code>{'<h6>'}</code> tags.</p>
          <p><code>{'<h1>'}</code> defines the most important heading. <code>{'<h6>'}</code> defines the least important heading.</p>
        </>
      ),
      example: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`
    },
    {
      title: 'Headings Are Important',
      content: (
        <>
          <p>Search engines use the headings to index the structure and content of your web pages.</p>
          <p>Users often skim a page by its headings. It is important to use headings to show the document structure.</p>
          <p><code>{'<h1>'}</code> headings should be used for main headings, followed by <code>{'<h2>'}</code> headings, then the less important <code>{'<h3>'}</code>, and so on.</p>
        </>
      )
    },
    {
      title: 'Bigger Headings',
      content: (
        <>
          <p>Each HTML heading has a default size. However, you can specify the size for any heading with the <code>style</code> attribute, using the CSS <code>font-size</code> property:</p>
        </>
      ),
      example: `<h1 style="font-size:60px;">Heading 1</h1>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Headings Example',
      description: 'Example showing HTML headings and their usage.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Headings</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>Main Title of the Webpage</h1>
  <p>This paragraph explains what the webpage is about.</p>
  
  <h2>First Subtopic</h2>
  <p>Information about the first subtopic.</p>
  
  <h3>Details of First Subtopic</h3>
  <p>More detailed information about the first subtopic.</p>
  
  <h2>Second Subtopic</h2>
  <p>Information about the second subtopic.</p>
  
  <h2 style="font-size:40px;">Custom Sized Heading</h2>
  <p>This heading has a custom font size using the style attribute.</p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_attributes'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_paragraphs')
};