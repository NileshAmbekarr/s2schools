import { htmlTopics } from './htmlTopics';

export const htmlComments = {
  id: 'html_comments',
  title: 'HTML Comments',
  description: 'HTML comments are not displayed in the browser, but they can help document your HTML source code.',
  sections: [
    {
      title: 'HTML Comments',
      content: (
        <>
          <p>HTML comments are not displayed in the browser, but they can help document your HTML source code.</p>
        </>
      )
    },
    {
      title: 'HTML Comment Tags',
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
          <p>Comments can be useful for debugging HTML, because you can comment out HTML lines one at a time to search for errors:</p>
        </>
      ),
      example: `<!-- <img src="broken-image.jpg" alt="Broken Image"> -->
<p>If you comment out the image, the page still works properly.</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Comments Example',
      description: 'Example showing various ways to use HTML comments.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Comments</title>
  <meta charset="UTF-8">
  <!-- This meta tag ensures proper rendering and touch zooming -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

  <!-- Header Section -->
  <header>
    <h1>HTML Comments Tutorial</h1>
    <p>Learn how to use comments in HTML.</p>
  </header>
  
  <!-- Main Content Section -->
  <main>
    <!-- Introduction -->
    <section>
      <h2>Introduction to Comments</h2>
      <p>Comments are not displayed by the browser but help document the code.</p>
      <!-- Add more details about HTML comments here later -->
    </section>
    
    <!-- Examples Section -->
    <section>
      <h2>Comment Examples</h2>
      
      <!-- Example 1: Basic Comment -->
      <div class="example">
        <h3>Basic Comment</h3>
        <p>This is visible text.</p>
        <!-- This comment won't be visible in the browser -->
      </div>
      
      <!-- Example 2: Commenting Out Code -->
      <div class="example">
        <h3>Commenting Out Code</h3>
        <p>This paragraph is visible.</p>
        <!-- 
        <p>This paragraph is commented out and won't be visible.</p>
        <p>This one too.</p>
        -->
        <p>This paragraph is visible again.</p>
      </div>
      
      <!-- Example 3: Inline Comments -->
      <div class="example">
        <h3>Inline Comments</h3>
        <p>This text is <!-- not --> visible.</p>
        <!-- Only "This text is visible" will appear -->
      </div>
    </section>
  </main>
  
  <!-- Footer Section -->
  <footer>
    <!-- Copyright information -->
    <p>&copy; 2023 HTML Comments Tutorial</p>
  </footer>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_quotations'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_colors')
}; 