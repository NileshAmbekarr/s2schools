import { htmlTopics } from './htmlTopics';

export const htmlQuotations = {
  id: 'html_quotations',
  title: 'HTML Quotations',
  description: 'HTML quotation elements provide special meaning to quoted text.',
  sections: [
    {
      title: 'HTML Quotation and Citation Elements',
      content: (
        <>
          <p>In this chapter we will go through the <code>{'<blockquote>'}</code>, <code>{'<q>'}</code>, <code>{'<abbr>'}</code>, <code>{'<address>'}</code>, <code>{'<cite>'}</code>, and <code>{'<bdo>'}</code> HTML elements.</p>
        </>
      )
    },
    {
      title: 'HTML <blockquote> for Quotations',
      content: (
        <>
          <p>The HTML <code>{'<blockquote>'}</code> element defines a section that is quoted from another source.</p>
          <p>Browsers usually indent <code>{'<blockquote>'}</code> elements.</p>
        </>
      ),
      example: `<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote>`
    },
    {
      title: 'HTML <q> for Short Quotations',
      content: (
        <>
          <p>The HTML <code>{'<q>'}</code> tag defines a short quotation.</p>
          <p>Browsers normally insert quotation marks around the quotation.</p>
        </>
      ),
      example: `<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`
    },
    {
      title: 'HTML <abbr> for Abbreviations',
      content: (
        <>
          <p>The HTML <code>{'<abbr>'}</code> tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
          <p>Marking abbreviations can give useful information to browsers, translation systems and search-engines.</p>
          <p>Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.</p>
        </>
      ),
      example: `<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`
    },
    {
      title: 'HTML <address> for Contact Information',
      content: (
        <>
          <p>The HTML <code>{'<address>'}</code> tag defines the contact information for the author/owner of a document or an article.</p>
          <p>The contact information can be an email address, URL, physical address, phone number, social media handle, etc.</p>
          <p>The text in the <code>{'<address>'}</code> element usually renders in italic, and browsers will always add a line break before and after the <code>{'<address>'}</code> element.</p>
        </>
      ),
      example: `<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>`
    },
    {
      title: 'HTML <cite> for Work Title',
      content: (
        <>
          <p>The HTML <code>{'<cite>'}</code> tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).</p>
          <p>Note: A person's name is not the title of a work.</p>
          <p>The text in the <code>{'<cite>'}</code> element usually renders in italic.</p>
        </>
      ),
      example: `<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`
    },
    {
      title: 'HTML <bdo> for Bi-Directional Override',
      content: (
        <>
          <p>BDO stands for Bi-Directional Override.</p>
          <p>The HTML <code>{'<bdo>'}</code> tag is used to override the current text direction:</p>
        </>
      ),
      example: `<bdo dir="rtl">This text will be written from right to left</bdo>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Quotations Example',
      description: 'Example showing various HTML quotation and citation elements.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Quotations</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Quotation and Citation Elements</h1>
  
  <h2>Blockquote</h2>
  <blockquote cite="https://www.example.com/quote.html">
    This is a long quotation taken from another source. Browsers typically indent blockquote elements to distinguish them from normal text.
  </blockquote>
  
  <h2>Short Quotation</h2>
  <p>As John said: <q>The quick brown fox jumps over the lazy dog.</q></p>
  
  <h2>Abbreviations</h2>
  <p>The <abbr title="World Wide Web">WWW</abbr> is a global information medium.</p>
  <p>The <abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for creating web pages.</p>
  
  <h2>Address</h2>
  <address>
    Written by <a href="mailto:webmaster@example.com">John Doe</a>.<br>
    Visit us at:<br>
    example.com<br>
    Box 564, Disneyland<br>
    USA
  </address>
  
  <h2>Work Citation</h2>
  <p><cite>The Starry Night</cite> by Vincent van Gogh. Painted in 1889.</p>
  
  <h2>Bi-Directional Text</h2>
  <p>Default direction: Hello World!</p>
  <p><bdo dir="rtl">Reversed direction: Hello World!</bdo></p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_formatting'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_comments')
}; 