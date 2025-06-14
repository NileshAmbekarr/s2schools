import { htmlTopics } from './htmlTopics';

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
<p style="background-color:Tomato;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>`
    },
    {
      title: 'Text Color',
      content: (
        <>
          <p>You can set the color of text:</p>
        </>
      ),
      example: `<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p style="color:MediumSeaGreen;">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>`
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
          <p>In HTML, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:</p>
        </>
      ),
      example: `<h1 style="background-color:rgb(255, 99, 71);">rgb(255, 99, 71)</h1>
<h1 style="background-color:#ff6347;">#ff6347</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">hsl(9, 100%, 64%)</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">rgba(255, 99, 71, 0.5)</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">hsla(9, 100%, 64%, 0.5)</h1>`
    },
    {
      title: 'RGB Colors',
      content: (
        <>
          <p>RGB color values are specified with: rgb(red, green, blue).</p>
          <p>Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.</p>
          <p>This means that there are 256 x 256 x 256 = 16,777,216 possible colors!</p>
          <p>For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255), and the other two (green and blue) are set to 0.</p>
        </>
      ),
      example: `<h1 style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</h1>
<h1 style="background-color:rgb(0, 255, 0);">rgb(0, 255, 0)</h1>
<h1 style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</h1>`
    },
    {
      title: 'HEX Colors',
      content: (
        <>
          <p>HEX color values are specified with: #RRGGBB, where RR (red), GG (green) and BB (blue) are hexadecimal values between 00 and FF (same as decimal 0-255).</p>
          <p>For example, #FF0000 is displayed as red, because red is set to its highest value (FF), and the other two (green and blue) are set to 0.</p>
        </>
      ),
      example: `<h1 style="background-color:#ff0000;">#ff0000</h1>
<h1 style="background-color:#00ff00;">#00ff00</h1>
<h1 style="background-color:#0000ff;">#0000ff</h1>`
    },
    {
      title: 'HSL Colors',
      content: (
        <>
          <p>HSL color values are specified with: hsl(hue, saturation, lightness).</p>
          <p>Hue is a degree on the color wheel from 0 to 360. 0 (or 360) is red, 120 is green, and 240 is blue.</p>
          <p>Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.</p>
          <p>Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white.</p>
        </>
      ),
      example: `<h1 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h1>
<h1 style="background-color:hsl(120, 100%, 50%);">hsl(120, 100%, 50%)</h1>
<h1 style="background-color:hsl(240, 100%, 50%);">hsl(240, 100%, 50%)</h1>`
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
  
  <h2>RGB Colors</h2>
  <div class="color-box" style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</div>
  <div class="color-box" style="background-color:rgb(0, 255, 0);">rgb(0, 255, 0)</div>
  <div class="color-box" style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</div>
  
  <h2>HEX Colors</h2>
  <div class="color-box" style="background-color:#FF0000;">#FF0000</div>
  <div class="color-box" style="background-color:#00FF00;">#00FF00</div>
  <div class="color-box" style="background-color:#0000FF;">#0000FF</div>
  
  <h2>HSL Colors</h2>
  <div class="color-box" style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</div>
  <div class="color-box" style="background-color:hsl(120, 100%, 50%);">hsl(120, 100%, 50%)</div>
  <div class="color-box" style="background-color:hsl(240, 100%, 50%);">hsl(240, 100%, 50%)</div>
  
  <h2>Transparency</h2>
  <div class="color-box" style="background-color:rgba(255, 0, 0, 0.5);">rgba(255, 0, 0, 0.5)</div>
  <div class="color-box" style="background-color:hsla(120, 100%, 50%, 0.5);">hsla(120, 100%, 50%, 0.5)</div>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_comments'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_css')
}; 