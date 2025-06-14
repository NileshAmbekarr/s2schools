import { htmlTopics } from './htmlTopics';

export const htmlFormatting = {
  id: 'html_formatting',
  title: 'HTML Formatting',
  description: 'HTML contains several elements for defining text with a special meaning.',
  sections: [
    {
      title: 'HTML Formatting Elements',
      content: (
        <>
          <p>HTML contains several elements for defining text with a special meaning.</p>
          <p>HTML uses elements like <code>{'<b>'}</code> and <code>{'<i>'}</code> for formatting output, like <strong>bold</strong> or <em>italic</em> text.</p>
          <p>Formatting elements were designed to display special types of text:</p>
          <ul>
            <li><code>{'<b>'}</code> - Bold text</li>
            <li><code>{'<strong>'}</code> - Important text</li>
            <li><code>{'<i>'}</code> - Italic text</li>
            <li><code>{'<em>'}</code> - Emphasized text</li>
            <li><code>{'<mark>'}</code> - Marked text</li>
            <li><code>{'<small>'}</code> - Smaller text</li>
            <li><code>{'<del>'}</code> - Deleted text</li>
            <li><code>{'<ins>'}</code> - Inserted text</li>
            <li><code>{'<sub>'}</code> - Subscript text</li>
            <li><code>{'<sup>'}</code> - Superscript text</li>
          </ul>
        </>
      )
    },
    {
      title: 'HTML <b> and <strong> Elements',
      content: (
        <>
          <p>The HTML <code>{'<b>'}</code> element defines bold text, without any extra importance.</p>
        </>
      ),
      example: `<b>This text is bold</b>`
    },
    {
      title: 'HTML <strong> Element',
      content: (
        <>
          <p>The HTML <code>{'<strong>'}</code> element defines text with strong importance. The content inside is typically displayed in bold.</p>
        </>
      ),
      example: `<strong>This text is important!</strong>`
    },
    {
      title: 'HTML <i> and <em> Elements',
      content: (
        <>
          <p>The HTML <code>{'<i>'}</code> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</p>
          <p>The <code>{'<i>'}</code> tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.</p>
        </>
      ),
      example: `<i>This text is italic</i>`
    },
    {
      title: 'HTML <em> Element',
      content: (
        <>
          <p>The HTML <code>{'<em>'}</code> element defines emphasized text. The content inside is typically displayed in italic.</p>
        </>
      ),
      example: `<em>This text is emphasized</em>`
    },
    {
      title: 'HTML <small> Element',
      content: (
        <>
          <p>The HTML <code>{'<small>'}</code> element defines smaller text:</p>
        </>
      ),
      example: `<small>This is some smaller text.</small>`
    },
    {
      title: 'HTML <mark> Element',
      content: (
        <>
          <p>The HTML <code>{'<mark>'}</code> element defines text that should be marked or highlighted:</p>
        </>
      ),
      example: `<p>Do not forget to buy <mark>milk</mark> today.</p>`
    },
    {
      title: 'HTML <del> Element',
      content: (
        <>
          <p>The HTML <code>{'<del>'}</code> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:</p>
        </>
      ),
      example: `<p>My favorite color is <del>blue</del> red.</p>`
    },
    {
      title: 'HTML <ins> Element',
      content: (
        <>
          <p>The HTML <code>{'<ins>'}</code> element defines a text that has been inserted into a document. Browsers will usually underline inserted text:</p>
        </>
      ),
      example: `<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`
    },
    {
      title: 'HTML <sub> Element',
      content: (
        <>
          <p>The HTML <code>{'<sub>'}</code> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H₂O:</p>
        </>
      ),
      example: `<p>This is <sub>subscripted</sub> text.</p>`
    },
    {
      title: 'HTML <sup> Element',
      content: (
        <>
          <p>The HTML <code>{'<sup>'}</code> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:</p>
        </>
      ),
      example: `<p>This is <sup>superscripted</sup> text.</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Formatting Example',
      description: 'Example showing various HTML formatting elements.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Formatting</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Text Formatting</h1>
  
  <h2>Bold and Strong</h2>
  <p><b>This text is bold</b></p>
  <p><strong>This text is strong (important)</strong></p>
  
  <h2>Italic and Emphasized</h2>
  <p><i>This text is italic</i></p>
  <p><em>This text is emphasized</em></p>
  
  <h2>Marked, Smaller, Deleted and Inserted</h2>
  <p>This is <mark>marked</mark> text</p>
  <p>This is <small>smaller</small> text</p>
  <p>This is <del>deleted</del> text</p>
  <p>This is <ins>inserted</ins> text</p>
  
  <h2>Subscript and Superscript</h2>
  <p>This is <sub>subscript</sub> text</p>
  <p>This is <sup>superscript</sup> text</p>
  
  <h2>Practical Examples</h2>
  <p>H<sub>2</sub>O is the scientific formula for water.</p>
  <p>The 1<sup>st</sup> of January is New Year's Day.</p>
  <p>The price was <del>$50</del> but is now <ins>$40</ins>!</p>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_styles'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_quotations')
}; 