// HTML topics data - this will be used to generate the sidebar and navigate between tutorials
export const htmlTopics = [
  { id: 'html_intro', title: 'HTML Introduction', path: '/tutorials/html/introduction' },
  { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' },
  { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' },
  { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' },
  { id: 'html_attributes', title: 'HTML Attributes', path: '/tutorials/html/attributes' },
  { id: 'html_headings', title: 'HTML Headings', path: '/tutorials/html/headings' },
  { id: 'html_paragraphs', title: 'HTML Paragraphs', path: '/tutorials/html/paragraphs' },
  { id: 'html_styles', title: 'HTML Styles', path: '/tutorials/html/styles' },
  { id: 'html_formatting', title: 'HTML Formatting', path: '/tutorials/html/formatting' },
  { id: 'html_quotations', title: 'HTML Quotations', path: '/tutorials/html/quotations' },
  { id: 'html_comments', title: 'HTML Comments', path: '/tutorials/html/comments' },
  { id: 'html_colors', title: 'HTML Colors', path: '/tutorials/html/colors' },
  { id: 'html_css', title: 'HTML CSS', path: '/tutorials/html/css' },
  { id: 'html_links', title: 'HTML Links', path: '/tutorials/html/links' },
  { id: 'html_images', title: 'HTML Images', path: '/tutorials/html/images' },
  { id: 'html_tables', title: 'HTML Tables', path: '/tutorials/html/tables' },
  { id: 'html_lists', title: 'HTML Lists', path: '/tutorials/html/lists' },
  { id: 'html_blocks', title: 'HTML Blocks', path: '/tutorials/html/blocks' },
  { id: 'html_classes', title: 'HTML Classes', path: '/tutorials/html/classes' },
  { id: 'html_id', title: 'HTML Id', path: '/tutorials/html/id' },
  { id: 'html_iframes', title: 'HTML Iframes', path: '/tutorials/html/iframes' },
  { id: 'html_javascript', title: 'HTML JavaScript', path: '/tutorials/html/javascript' },
  { id: 'html_forms', title: 'HTML Forms', path: '/tutorials/html/forms' },
];

// Content for the HTML introduction tutorial
export const htmlIntroduction = {
  id: 'html_intro',
  title: 'HTML Introduction',
  description: 'HTML is the standard markup language for creating Web pages.',
  sections: [
    {
      title: 'What is HTML?',
      content: (
        <>
          <p>HTML stands for Hyper Text Markup Language.</p>
          <p>HTML is the standard markup language for creating Web pages.</p>
          <p>HTML describes the structure of a Web page.</p>
          <p>HTML consists of a series of elements.</p>
          <p>HTML elements tell the browser how to display the content.</p>
        </>
      )
    },
    {
      title: 'A Simple HTML Document',
      content: (
        <>
          <p>The following example shows a very simple HTML document:</p>
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
      title: 'Example Explained',
      content: (
        <>
          <p>The <code>!DOCTYPE html</code> declaration defines that this document is an HTML5 document.</p>
          <p>The <code>html</code> element is the root element of an HTML page.</p>
          <p>The <code>head</code> element contains meta information about the HTML page.</p>
          <p>The <code>title</code> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).</p>
          <p>The <code>body</code> element defines the document's body, which contains all the visible contents of a web page.</p>
          <p>The <code>h1</code> element defines a large heading.</p>
          <p>The <code>p</code> element defines a paragraph.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'Simple HTML Page',
      description: 'A basic HTML page with headings and paragraphs.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>

  <h1>Welcome to HTML</h1>
  <p>This is your first HTML page.</p>
  <h2>What is HTML?</h2>
  <p>HTML stands for Hyper Text Markup Language.</p>
  <p>It is the standard markup language for creating Web pages.</p>

</body>
</html>`
    },
    {
      title: 'HTML with Formatting',
      description: 'An HTML page with basic text formatting.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Formatting</title>
</head>
<body>

  <h1>Text Formatting in HTML</h1>
  
  <p>This text is normal.</p>
  <p><b>This text is bold.</b></p>
  <p><i>This text is italic.</i></p>
  <p><mark>This text is highlighted.</mark></p>
  <p><small>This text is small.</small></p>
  <p><del>This text is deleted.</del></p>
  <p><ins>This text is inserted.</ins></p>
  <p>This is <sub>subscript</sub> and <sup>superscript</sup></p>

</body>
</html>`
    }
  ],
  nextTopic: { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' }
};

// Content for the HTML Editors tutorial
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
  previousTopic: { id: 'html_intro', title: 'HTML Introduction', path: '/tutorials/html/introduction' },
  nextTopic: { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' }
};

// Content for the HTML Basic tutorial
export const htmlBasic = {
  id: 'html_basic',
  title: 'HTML Basic',
  description: 'In this chapter we will show some basic HTML examples.',
  sections: [
    {
      title: 'HTML Documents',
      content: (
        <>
          <p>All HTML documents must start with a document type declaration: <code>{'<!DOCTYPE html>'}</code>.</p>
          <p>The HTML document itself begins with <code>{'<html>'}</code> and ends with <code>{'</html>'}</code>.</p>
          <p>The visible part of the HTML document is between <code>{'<body>'}</code> and <code>{'</body>'}</code>.</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    },
    {
      title: 'The <!DOCTYPE> Declaration',
      content: (
        <>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>
          <p>It must only appear once, at the top of the page (before any HTML tags).</p>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration is not case sensitive.</p>
          <p>The <code>{'<!DOCTYPE>'}</code> declaration for HTML5 is:</p>
        </>
      ),
      example: `<!DOCTYPE html>`
    },
    {
      title: 'HTML Headings',
      content: (
        <>
          <p>HTML headings are defined with the <code>{'<h1>'}</code> to <code>{'<h6>'}</code> tags.</p>
          <p><code>{'<h1>'}</code> defines the most important heading. <code>{'<h6>'}</code> defines the least important heading.</p>
        </>
      ),
      example: `<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`
    },
    {
      title: 'HTML Paragraphs',
      content: (
        <>
          <p>HTML paragraphs are defined with the <code>{'<p>'}</code> tag.</p>
        </>
      ),
      example: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
    },
    {
      title: 'HTML Links',
      content: (
        <>
          <p>HTML links are defined with the <code>{'<a>'}</code> tag.</p>
        </>
      ),
      example: `<a href="https://www.w3schools.com">This is a link</a>`
    },
    {
      title: 'HTML Images',
      content: (
        <>
          <p>HTML images are defined with the <code>{'<img>'}</code> tag.</p>
          <p>The source file (<code>src</code>), alternative text (<code>alt</code>), <code>width</code>, and <code>height</code> are provided as attributes.</p>
        </>
      ),
      example: `<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`
    }
  ],
  codeExamples: [
    {
      title: 'Basic HTML Document Structure',
      description: 'The main elements of an HTML document.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

  <h1>My Heading</h1>
  <p>My paragraph.</p>
  <a href="https://www.example.com">This is a link</a>
  <img src="image.jpg" alt="Description of image">

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_editors', title: 'HTML Editors', path: '/tutorials/html/editors' },
  nextTopic: { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' }
};

// Content for the HTML Elements tutorial
export const htmlElements = {
  id: 'html_elements',
  title: 'HTML Elements',
  description: 'HTML elements are the building blocks of HTML pages.',
  sections: [
    {
      title: 'HTML Elements',
      content: (
        <>
          <p>An HTML element is defined by a start tag, some content, and an end tag:</p>
          <p><code>{'<tagname>Content goes here...</tagname>'}</code></p>
          <p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
          <p><code>{'<p>My first paragraph.</p>'}</code></p>
        </>
      ),
      example: `<h1>My First Heading</h1>
<p>My first paragraph.</p>`
    },
    {
      title: 'Nested HTML Elements',
      content: (
        <>
          <p>HTML elements can be nested (this means that elements can contain other elements).</p>
          <p>All HTML documents consist of nested HTML elements.</p>
          <p>The following example contains four HTML elements (<code>{'<html>'}</code>, <code>{'<body>'}</code>, <code>{'<h1>'}</code> and <code>{'<p>'}</code>):</p>
        </>
      ),
      example: `<!DOCTYPE html>
<html>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`
    },
    {
      title: 'Never Skip the End Tag',
      content: (
        <>
          <p>Some HTML elements will display correctly, even if you forget the end tag:</p>
        </>
      ),
      example: `<html>
<body>

  <p>This is a paragraph
  <p>This is a paragraph

</body>
</html>`
    },
    {
      title: 'Empty HTML Elements',
      content: (
        <>
          <p>HTML elements with no content are called empty elements.</p>
          <p>The <code>{'<br>'}</code> tag defines a line break, and is an empty element without a closing tag:</p>
        </>
      ),
      example: `<p>This is a <br> paragraph with a line break.</p>`
    },
    {
      title: 'HTML is Not Case Sensitive',
      content: (
        <>
          <p>HTML tags are not case sensitive: <code>{'<P>'}</code> means the same as <code>{'<p>'}</code>.</p>
          <p>The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.</p>
          <p>At S2Schools we always use lowercase tag names.</p>
        </>
      )
    }
  ],
  codeExamples: [
    {
      title: 'HTML Element Structure',
      description: 'Example showing the structure of HTML elements.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Elements</title>
</head>
<body>

  <!-- This is an HTML element with a start tag, content, and end tag -->
  <h1>This is a heading element</h1>
  
  <!-- This is another HTML element -->
  <p>This is a paragraph element.</p>
  
  <!-- This is a nested HTML element -->
  <div>
    <p>This paragraph is nested inside a div element.</p>
  </div>
  
  <!-- This is an empty HTML element -->
  <hr>
  
  <p>The line above is created with the hr element.</p>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_basic', title: 'HTML Basic', path: '/tutorials/html/basic' },
  nextTopic: { id: 'html_attributes', title: 'HTML Attributes', path: '/tutorials/html/attributes' }
};

// Content for the HTML Attributes tutorial
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
  previousTopic: { id: 'html_elements', title: 'HTML Elements', path: '/tutorials/html/elements' },
  nextTopic: { id: 'html_headings', title: 'HTML Headings', path: '/tutorials/html/headings' }
};

// Content for the HTML Headings tutorial
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
  previousTopic: { id: 'html_attributes', title: 'HTML Attributes', path: '/tutorials/html/attributes' },
  nextTopic: { id: 'html_paragraphs', title: 'HTML Paragraphs', path: '/tutorials/html/paragraphs' }
};

// Content for the HTML Paragraphs tutorial
export const htmlParagraphs = {
  id: 'html_paragraphs',
  title: 'HTML Paragraphs',
  description: 'HTML paragraphs are defined with the p tag.',
  sections: [
    {
      title: 'HTML Paragraphs',
      content: (
        <>
          <p>The HTML <code>{'<p>'}</code> element defines a paragraph.</p>
          <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
        </>
      ),
      example: `<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
    },
    {
      title: 'HTML Display',
      content: (
        <>
          <p>You cannot be sure how HTML will be displayed.</p>
          <p>Large or small screens, and resized windows will create different results.</p>
          <p>With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.</p>
          <p>The browser will automatically remove any extra spaces and lines when the page is displayed:</p>
        </>
      ),
      example: `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`
    },
    {
      title: 'HTML Line Breaks',
      content: (
        <>
          <p>The HTML <code>{'<br>'}</code> element defines a line break.</p>
          <p>Use <code>{'<br>'}</code> if you want a line break (a new line) without starting a new paragraph:</p>
        </>
      ),
      example: `<p>This is<br>a paragraph<br>with line breaks.</p>`
    },
    {
      title: 'The HTML <pre> Element',
      content: (
        <>
          <p>The HTML <code>{'<pre>'}</code> element defines preformatted text.</p>
          <p>The text inside a <code>{'<pre>'}</code> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:</p>
        </>
      ),
      example: `<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Paragraphs Example',
      description: 'Example showing different ways to work with paragraphs in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Paragraphs</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Paragraphs</h1>
  
  <h2>Basic Paragraphs</h2>
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  
  <h2>Line Breaks</h2>
  <p>This is a paragraph<br>with line breaks<br>that create new lines<br>without new paragraphs.</p>
  
  <h2>Preformatted Text</h2>
  <pre>
    This text is preformatted.
    Spaces and line breaks
    are preserved exactly as written
    in the HTML code.
        This line has extra indentation.
  </pre>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_headings', title: 'HTML Headings', path: '/tutorials/html/headings' },
  nextTopic: { id: 'html_styles', title: 'HTML Styles', path: '/tutorials/html/styles' }
};

// Content for the HTML Styles tutorial
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
          <p>The CSS <code>background-color</code> property defines the background color for an HTML element:</p>
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
      description: 'Example showing various inline styles in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Styles</title>
  <meta charset="UTF-8">
</head>
<body style="background-color:#f0f8ff; font-family:Arial, sans-serif;">

  <h1 style="color:#0066cc; text-align:center; font-size:36px;">HTML Styling</h1>
  
  <h2 style="color:#006600; font-family:Georgia, serif;">Text Colors and Fonts</h2>
  <p style="color:#333333; font-size:18px;">This paragraph has custom text color and size.</p>
  
  <h2 style="color:#660066; text-decoration:underline;">Text Decoration</h2>
  <p style="font-weight:bold;">This is a bold paragraph.</p>
  <p style="font-style:italic;">This is an italic paragraph.</p>
  
  <h2 style="color:#cc6600; text-align:right;">Text Alignment</h2>
  <p style="text-align:center;">This paragraph is centered.</p>
  <p style="text-align:right;">This paragraph is right-aligned.</p>
  
  <div style="background-color:#e6e6e6; padding:15px; border:2px solid #999999; margin-top:20px;">
    <h3 style="margin-top:0;">Boxed Content</h3>
    <p>This content is inside a styled div element with background color, padding, and border.</p>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_paragraphs', title: 'HTML Paragraphs', path: '/tutorials/html/paragraphs' },
  nextTopic: { id: 'html_formatting', title: 'HTML Formatting', path: '/tutorials/html/formatting' }
};

// Content for the HTML Formatting tutorial
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
          <p>HTML uses elements like <code>{'<b>'}</code> and <code>{'<i>'}</code> for formatting output, like bold or italic text.</p>
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
          <p>The HTML <code>{'<strong>'}</code> element defines text with strong importance. The content inside is typically displayed in bold.</p>
        </>
      ),
      example: `<b>This text is bold</b>
<strong>This text is important!</strong>`
    },
    {
      title: 'HTML <i> and <em> Elements',
      content: (
        <>
          <p>The HTML <code>{'<i>'}</code> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</p>
          <p>The HTML <code>{'<em>'}</code> element defines emphasized text. The content inside is typically displayed in italic.</p>
        </>
      ),
      example: `<i>This text is italic</i>
<em>This text is emphasized</em>`
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
      title: 'HTML Text Formatting Example',
      description: 'Example showing various text formatting elements in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Text Formatting</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Text Formatting</h1>
  
  <h2>Bold and Important Text</h2>
  <p><b>This text is bold</b></p>
  <p><strong>This text is important!</strong></p>
  
  <h2>Italic and Emphasized Text</h2>
  <p><i>This text is italic</i></p>
  <p><em>This text is emphasized</em></p>
  
  <h2>Highlighted, Small, Deleted and Inserted Text</h2>
  <p>This is <mark>highlighted</mark> text.</p>
  <p>This is <small>smaller</small> text.</p>
  <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
  
  <h2>Subscript and Superscript</h2>
  <p>H<sub>2</sub>O is the chemical formula for water.</p>
  <p>E=mc<sup>2</sup> is Einstein's famous equation.</p>
  
  <h2>Combining Formatting Elements</h2>
  <p>You can <mark><b>combine</b> formatting <i>elements</i></mark> for more complex formatting.</p>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_styles', title: 'HTML Styles', path: '/tutorials/html/styles' },
  nextTopic: { id: 'html_quotations', title: 'HTML Quotations', path: '/tutorials/html/quotations' }
};

// Content for the HTML Quotations tutorial
export const htmlQuotations = {
  id: 'html_quotations',
  title: 'HTML Quotations',
  description: 'HTML quotation elements provide special meaning to sections of text.',
  sections: [
    {
      title: 'HTML <blockquote> for Quotations',
      content: (
        <>
          <p>The HTML <code>{'<blockquote>'}</code> element defines a section that is quoted from another source.</p>
          <p>Browsers usually indent <code>{'<blockquote>'}</code> elements.</p>
        </>
      ),
      example: `<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>`
    },
    {
      title: 'HTML <q> for Short Quotations',
      content: (
        <>
          <p>The HTML <code>{'<q>'}</code> element defines a short quotation.</p>
          <p>Browsers normally insert quotation marks around the quotation.</p>
        </>
      ),
      example: `<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`
    },
    {
      title: 'HTML <abbr> for Abbreviations',
      content: (
        <>
          <p>The HTML <code>{'<abbr>'}</code> element defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
          <p>Marking abbreviations can give useful information to browsers, translation systems and search-engines.</p>
          <p>Use the global <code>title</code> attribute to show the description for the abbreviation/acronym when you mouse over the element.</p>
        </>
      ),
      example: `<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`
    },
    {
      title: 'HTML <address> for Contact Information',
      content: (
        <>
          <p>The HTML <code>{'<address>'}</code> element defines the contact information for the author/owner of a document or an article.</p>
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
          <p>The HTML <code>{'<cite>'}</code> element defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).</p>
          <p>The text in the <code>{'<cite>'}</code> element usually renders in italic.</p>
        </>
      ),
      example: `<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`
    },
    {
      title: 'HTML <bdo> for Bi-Directional Override',
      content: (
        <>
          <p>The HTML <code>{'<bdo>'}</code> element defines bi-directional override.</p>
          <p>The <code>{'<bdo>'}</code> element is used to override the current text direction:</p>
        </>
      ),
      example: `<bdo dir="rtl">This text will be written from right to left</bdo>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Quotations and Citations Example',
      description: 'Example showing various quotation and citation elements in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Quotations and Citations</title>
  <meta charset="UTF-8">
</head>
<body>

  <h1>HTML Quotations and Citations</h1>
  
  <h2>Blockquote Example</h2>
  <blockquote cite="https://www.s2schools.com/html/html_quotations.asp">
    A blockquote is a section that is quoted from another source. Browsers usually indent blockquote elements to indicate they are quoted text.
  </blockquote>
  <p>Source: S2Schools HTML Tutorial</p>
  
  <h2>Short Quotation Example</h2>
  <p>According to the S2Schools HTML Tutorial, <q>HTML is the standard markup language for creating Web pages.</q></p>
  
  <h2>Abbreviation Example</h2>
  <p>The <abbr title="World Wide Web">WWW</abbr> and <abbr title="HyperText Markup Language">HTML</abbr> were invented by <abbr title="Sir Tim Berners-Lee">TBL</abbr>.</p>
  
  <h2>Address Example</h2>
  <address>
    Written by <a href="mailto:john@example.com">John Doe</a>.<br>
    Visit us at:<br>
    S2Schools.com<br>
    123 Web Dev Lane<br>
    Internet City, Web 12345<br>
    USA
  </address>
  
  <h2>Citation Example</h2>
  <p><cite>The Starry Night</cite> by Vincent van Gogh. Painted in 1889.</p>
  
  <h2>Bi-directional Text Example</h2>
  <p>Default direction: Hello World!</p>
  <p>Right-to-left override: <bdo dir="rtl">Hello World!</bdo></p>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_formatting', title: 'HTML Formatting', path: '/tutorials/html/formatting' },
  nextTopic: { id: 'html_comments', title: 'HTML Comments', path: '/tutorials/html/comments' }
};

// Content for the HTML Comments tutorial
export const htmlComments = {
  id: 'html_comments',
  title: 'HTML Comments',
  description: 'HTML comments are not displayed in the browser, but they can help document your HTML code.',
  sections: [
    {
      title: 'HTML Comment Tag',
      content: (
        <>
          <p>You can add comments to your HTML source by using the following syntax:</p>
        </>
      ),
      example: `<!-- Write your comments here -->`
    },
    {
      title: 'Add Comments',
      content: (
        <>
          <p>With comments you can place notifications and reminders in your HTML code:</p>
        </>
      ),
      example: `<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->`
    },
    {
      title: 'Hide Content',
      content: (
        <>
          <p>Comments can be used to hide content temporarily:</p>
        </>
      ),
      example: `<p>This is a paragraph.</p>

<!-- <p>This is another paragraph</p> -->

<p>This is a paragraph too.</p>`
    },
    {
      title: 'Hide Inline Content',
      content: (
        <>
          <p>Comments can also be used to hide parts of a line:</p>
        </>
      ),
      example: `<p>This <!-- great text --> is a paragraph.</p>`
    },
    {
      title: 'Using Comments for Debugging',
      content: (
        <>
          <p>Comments can be used to temporarily "comment out" parts of your code for debugging purposes:</p>
        </>
      ),
      example: `<!-- <img src="image.gif" alt="HTML Tutorial"> -->
<p>The image above is not displayed because it has been "commented out".</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Comments Example',
      description: 'Example showing various ways to use comments in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Comments</title>
  <meta charset="UTF-8">
  <!-- This meta tag ensures proper character encoding -->
</head>
<body>

  <!-- This is the main heading -->
  <h1>HTML Comments Example</h1>
  
  <!-- 
    Author: John Doe
    Date: January 1, 2023
    Purpose: Demonstrate HTML comments
  -->
  
  <p>This is a visible paragraph.</p>
  
  <!-- This paragraph is hidden
  <p>This paragraph will not be displayed in the browser.</p>
  -->
  
  <!-- The following section contains navigation links -->
  <nav>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <!-- <li><a href="#section3">Section 3</a></li> --> <!-- Coming soon -->
    </ul>
  </nav>
  
  <section id="section1">
    <h2>Section 1</h2>
    <p>This is section 1 content.</p>
  </section>
  
  <section id="section2">
    <h2>Section 2</h2>
    <p>This is <!-- important --> section 2 content.</p>
  </section>
  
  <!-- TODO: Add section 3 later -->
  
  <!-- End of document -->

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_quotations', title: 'HTML Quotations', path: '/tutorials/html/quotations' },
  nextTopic: { id: 'html_colors', title: 'HTML Colors', path: '/tutorials/html/colors' }
};

// Content for the HTML Colors tutorial
export const htmlColors = {
  id: 'html_colors',
  title: 'HTML Colors',
  description: 'HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, or HSLA values.',
  sections: [
    {
      title: 'Color Names',
      content: (
        <>
          <p>In HTML, colors can be specified using color names:</p>
        </>
      ),
      example: `<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="background-color:Gray;">Gray</h1>
<h1 style="background-color:SlateBlue;">SlateBlue</h1>
<h1 style="background-color:Violet;">Violet</h1>
<h1 style="background-color:LightGray;">LightGray</h1>`
    },
    {
      title: 'Background Color',
      content: (
        <>
          <p>You can set the background color for HTML elements:</p>
        </>
      ),
      example: `<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`
    },
    {
      title: 'Text Color',
      content: (
        <>
          <p>You can set the color of text:</p>
        </>
      ),
      example: `<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`
    },
    {
      title: 'Border Color',
      content: (
        <>
          <p>You can set the color of borders:</p>
        </>
      ),
      example: `<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`
    },
    {
      title: 'Color Values',
      content: (
        <>
          <p>In HTML, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values.</p>
          <p>The following three <code>div</code> elements have their background color set with RGB, HEX, and HSL values:</p>
        </>
      ),
      example: `<div style="background-color:rgb(255, 99, 71);">RGB(255, 99, 71)</div>
<div style="background-color:#ff6347;">#ff6347</div>
<div style="background-color:hsl(9, 100%, 64%);">hsl(9, 100%, 64%)</div>

<div style="background-color:rgba(255, 99, 71, 0.5);">rgba(255, 99, 71, 0.5)</div>
<div style="background-color:hsla(9, 100%, 64%, 0.5);">hsla(9, 100%, 64%, 0.5)</div>`
    },
    {
      title: 'RGB Color Values',
      content: (
        <>
          <p>In HTML, a color can be specified as an RGB value, using this formula:</p>
          <p><code>rgb(red, green, blue)</code></p>
          <p>Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.</p>
          <p>This means that there are 256 x 256 x 256 = 16,777,216 possible colors!</p>
          <p>For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255), and the other two (green and blue) are set to 0.</p>
        </>
      ),
      example: `<h1 style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</h1>
<h1 style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</h1>
<h1 style="background-color:rgb(60, 179, 113);">rgb(60, 179, 113)</h1>
<h1 style="background-color:rgb(238, 130, 238);">rgb(238, 130, 238)</h1>
<h1 style="background-color:rgb(255, 165, 0);">rgb(255, 165, 0)</h1>
<h1 style="background-color:rgb(106, 90, 205);">rgb(106, 90, 205)</h1>`
    },
    {
      title: 'HEX Color Values',
      content: (
        <>
          <p>In HTML, a color can be specified using a hexadecimal value in the form:</p>
          <p><code>#rrggbb</code></p>
          <p>Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).</p>
          <p>For example, #ff0000 is displayed as red, because red is set to its highest value (ff), and the other two (green and blue) are set to 00.</p>
        </>
      ),
      example: `<h1 style="background-color:#ff0000;">#ff0000</h1>
<h1 style="background-color:#0000ff;">#0000ff</h1>
<h1 style="background-color:#3cb371;">#3cb371</h1>
<h1 style="background-color:#ee82ee;">#ee82ee</h1>
<h1 style="background-color:#ffa500;">#ffa500</h1>
<h1 style="background-color:#6a5acd;">#6a5acd</h1>`
    },
    {
      title: 'HSL Color Values',
      content: (
        <>
          <p>In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:</p>
          <p><code>hsl(hue, saturation, lightness)</code></p>
          <p>Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.</p>
          <p>Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.</p>
          <p>Lightness is also a percentage value, 0% is black, 50% is neither light or dark, 100% is white.</p>
        </>
      ),
      example: `<h1 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color:hsl(240, 100%, 50%);">hsl(240, 100%, 50%)</h1>
<h1 style="background-color:hsl(147, 50%, 47%);">hsl(147, 50%, 47%)</h1>
<h1 style="background-color:hsl(300, 76%, 72%);">hsl(300, 76%, 72%)</h1>
<h1 style="background-color:hsl(39, 100%, 50%);">hsl(39, 100%, 50%)</h1>
<h1 style="background-color:hsl(248, 53%, 58%);">hsl(248, 53%, 58%)</h1>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Colors Example',
      description: 'Example showing various ways to use colors in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Colors</title>
  <meta charset="UTF-8">
  <style>
    .color-box {
      width: 200px;
      height: 100px;
      margin: 10px;
      display: inline-block;
      text-align: center;
      line-height: 100px;
      color: white;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>HTML Colors</h1>
  
  <h2>Color Names</h2>
  <div class="color-box" style="background-color:Red;">Red</div>
  <div class="color-box" style="background-color:Green;">Green</div>
  <div class="color-box" style="background-color:Blue;">Blue</div>
  
  <h2>RGB Values</h2>
  <div class="color-box" style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</div>
  <div class="color-box" style="background-color:rgb(0, 255, 0);">rgb(0, 255, 0)</div>
  <div class="color-box" style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</div>
  
  <h2>HEX Values</h2>
  <div class="color-box" style="background-color:#FF0000;">#FF0000</div>
  <div class="color-box" style="background-color:#00FF00;">#00FF00</div>
  <div class="color-box" style="background-color:#0000FF;">#0000FF</div>
  
  <h2>HSL Values</h2>
  <div class="color-box" style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</div>
  <div class="color-box" style="background-color:hsl(120, 100%, 50%);">hsl(120, 100%, 50%)</div>
  <div class="color-box" style="background-color:hsl(240, 100%, 50%);">hsl(240, 100%, 50%)</div>
  
  <h2>Opacity/Transparency</h2>
  <div class="color-box" style="background-color:rgba(255, 0, 0, 0.6);">rgba(255, 0, 0, 0.6)</div>
  <div class="color-box" style="background-color:hsla(120, 100%, 50%, 0.6);">hsla(120, 100%, 50%, 0.6)</div>
  
  <h2>Text and Border Colors</h2>
  <p style="color:blue;">This text is blue.</p>
  <p style="border:2px solid red; padding:10px;">This paragraph has a red border.</p>
  
  <h2>Background Colors</h2>
  <div style="background-color:lightblue; padding:20px;">
    <h3>Background Color Example</h3>
    <p>This div has a light blue background color.</p>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: { id: 'html_comments', title: 'HTML Comments', path: '/tutorials/html/comments' },
  nextTopic: { id: 'html_css', title: 'HTML CSS', path: '/tutorials/html/css' }
}; 