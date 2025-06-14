import { htmlTopics } from './htmlTopics';

export const htmlEditors = {
  id: 'html_editors',
  title: 'HTML Editors',
  description: 'Web pages can be created and modified by using professional HTML editors.',
  sections: [
    {
      title: 'Learn HTML Using Notepad or TextEdit',
      content: (
        <>
          <p>Web pages can be created and modified by using professional HTML editors.</p>
          <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
          <p>We believe in using the simplest editor when learning HTML, as it helps focus on learning HTML, and not on the editor itself.</p>
        </>
      )
    },
    {
      title: 'Step 1: Open Notepad (PC)',
      content: (
        <>
          <p>Windows 8 or later:</p>
          <p>Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.</p>
          <p>Windows 7 or earlier:</p>
          <p>Open Start {'>'} Programs {'>'} Accessories {'>'} Notepad</p>
        </>
      )
    },
    {
      title: 'Step 2: Write Some HTML',
      content: (
        <>
          <p>Write or copy the following HTML code into Notepad:</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Step 3: Save the HTML Page',
      content: (
        <>
          <p>Save the file on your computer. Select File {'>'} Save as in the Notepad menu.</p>
          <p>Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).</p>
        </>
      )
    },
    {
      title: 'Step 4: View the HTML Page in Your Browser',
      content: (
        <>
          <p>Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Basic HTML Template',
      description: 'A starter template you can use in any text editor.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_intro'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_basic')
}; 