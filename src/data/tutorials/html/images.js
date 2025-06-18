import { htmlTopics } from './htmlTopics';

export const htmlImages = {
  id: 'html_images',
  title: 'HTML Images',
  description: 'Images can improve the design and the appearance of a web page.',
  sections: [
    {
      title: 'HTML Images Syntax',
      content: (
        <>
          <p>In HTML, images are defined with the <code>{'<img>'}</code> tag.</p>
          <p>The <code>{'<img>'}</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
          <p>The <code>src</code> attribute specifies the URL (web address) of the image:</p>
        </>
      ),
      example: `<img src="url">`
    },
    {
      title: 'The src Attribute',
      content: (
        <>
          <p>The required <code>src</code> attribute specifies the path (URL) to the image.</p>
          <p>Note: When a web page loads, it is the browser that actually requests the image from the web server and embeds it in the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon. The broken link icon is shown if the browser cannot find the image.</p>
        </>
      ),
      example: `<img src="img_chania.jpg" alt="Flowers in Chania">`
    },
    {
      title: 'The alt Attribute',
      content: (
        <>
          <p>The required <code>alt</code> attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</p>
          <p>The value of the <code>alt</code> attribute should describe the image:</p>
        </>
      ),
      example: `<img src="img_chania.jpg" alt="Flowers in Chania">`
    },
    {
      title: 'Image Size - Width and Height',
      content: (
        <>
          <p>You can use the <code>style</code> attribute to specify the width and height of an image.</p>
        </>
      ),
      example: `<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">`
    },
    {
      title: 'Width and Height, or Style?',
      content: (
        <>
          <p>The <code>width</code>, <code>height</code>, and <code>style</code> attributes are all valid in HTML.</p>
          <p>However, we suggest using the <code>style</code> attribute. It prevents styles sheets from changing the size of images:</p>
        </>
      ),
      example: `<!-- Using style (recommended) -->
<img src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">

<!-- Using width and height attributes -->
<img src="html5.gif" alt="HTML5 Icon" width="128" height="128">`
    },
    {
      title: 'Images in Another Folder',
      content: (
        <>
          <p>If you have your images in a sub-folder, you must include the folder name in the <code>src</code> attribute:</p>
        </>
      ),
      example: `<img src="/images/html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;">`
    },
    {
      title: 'Images on Another Server/Website',
      content: (
        <>
          <p>Some websites point to an image on another server.</p>
          <p>To point to an image on another server, you must specify an absolute (full) URL in the <code>src</code> attribute:</p>
        </>
      ),
      example: `<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">`
    },
    {
      title: 'Animated Images',
      content: (
        <>
          <p>HTML allows animated GIFs:</p>
        </>
      ),
      example: `<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;">`
    },
    {
      title: 'Image as a Link',
      content: (
        <>
          <p>To use an image as a link, put the <code>{'<img>'}</code> tag inside the <code>{'<a>'}</code> tag:</p>
        </>
      ),
      example: `<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>`
    },
    {
      title: 'Image Floating',
      content: (
        <>
          <p>Use the CSS <code>float</code> property to let the image float to the right or to the left of a text:</p>
        </>
      ),
      example: `<p>
  <img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
  The image will float to the right of the text.
</p>

<p>
  <img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
  The image will float to the left of the text.
</p>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Images Example',
      description: 'Example showing various ways to use images in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Images</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    .image-container {
      margin-bottom: 30px;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .responsive-img {
      max-width: 100%;
      height: auto;
    }
    .img-gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .img-gallery img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border: 1px solid #ddd;
    }
    .text-with-image {
      overflow: auto;
      margin-bottom: 20px;
    }
    .float-right {
      float: right;
      margin-left: 15px;
      margin-bottom: 10px;
    }
    .float-left {
      float: left;
      margin-right: 15px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <h1>HTML Images Tutorial</h1>
  
  <div class="image-container">
    <h2>Basic Image</h2>
    <img src="sample-image.jpg" alt="Sample Image">
  </div>
  
  <div class="image-container">
    <h2>Image with Size</h2>
    <img src="sample-image.jpg" alt="Sample Image" width="300" height="200">
  </div>
  
  <div class="image-container">
    <h2>Responsive Image</h2>
    <img src="sample-image.jpg" alt="Sample Image" class="responsive-img">
    <p>This image will scale down if the container is smaller than the image.</p>
  </div>
  
  <div class="image-container">
    <h2>Image Gallery</h2>
    <div class="img-gallery">
      <img src="gallery-1.jpg" alt="Gallery Image 1">
      <img src="gallery-2.jpg" alt="Gallery Image 2">
      <img src="gallery-3.jpg" alt="Gallery Image 3">
      <img src="gallery-4.jpg" alt="Gallery Image 4">
    </div>
  </div>
  
  <div class="image-container">
    <h2>Image as a Link</h2>
    <a href="https://www.example.com">
      <img src="link-image.jpg" alt="Click me to visit example.com" width="150" height="100">
    </a>
  </div>
  
  <div class="image-container">
    <h2>Images with Text Wrapping</h2>
    
    <div class="text-with-image">
      <img src="float-right.jpg" alt="Float Right Image" width="150" height="100" class="float-right">
      <p>This is an example of text wrapping around an image that is floated to the right. The text will flow around the image as needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus eu nisi tempor lacinia. Phasellus at commodo ligula. Nullam in dui at orci commodo pretium.</p>
    </div>
    
    <div class="text-with-image">
      <img src="float-left.jpg" alt="Float Left Image" width="150" height="100" class="float-left">
      <p>This is an example of text wrapping around an image that is floated to the left. The text will flow around the image as needed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in metus eu nisi tempor lacinia. Phasellus at commodo ligula. Nullam in dui at orci commodo pretium.</p>
    </div>
  </div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_links'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_favicon')
}; 