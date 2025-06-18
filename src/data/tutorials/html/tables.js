import { htmlTopics } from './htmlTopics';

export const htmlTables = {
  id: 'html_tables',
  title: 'HTML Tables',
  description: 'HTML tables allow web developers to arrange data into rows and columns.',
  sections: [
    {
      title: 'Define an HTML Table',
      content: (
        <>
          <p>A table in HTML consists of table cells inside rows and columns.</p>
          <p>An HTML table is defined with the <code>{'<table>'}</code> tag.</p>
          <p>Each table row is defined with the <code>{'<tr>'}</code> tag. A table header is defined with the <code>{'<th>'}</code> tag. By default, table headings are bold and centered. A table data/cell is defined with the <code>{'<td>'}</code> tag.</p>
        </>
      ),
      example: `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Add a Border',
      content: (
        <>
          <p>To add a border to a table, use the CSS <code>border</code> property:</p>
        </>
      ),
      example: `<style>
table, th, td {
  border: 1px solid black;
}
</style>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Collapsed Borders',
      content: (
        <>
          <p>To avoid having double borders, like in the example above, set the CSS <code>border-collapse</code> property to <code>collapse</code>.</p>
          <p>This will make the borders collapse into a single border:</p>
        </>
      ),
      example: `<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Add Cell Padding',
      content: (
        <>
          <p>Cell padding is the space between the cell content and its borders.</p>
          <p>By default, the padding is set to 0.</p>
          <p>To add padding, use the CSS <code>padding</code> property:</p>
        </>
      ),
      example: `<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
}
</style>`
    },
    {
      title: 'HTML Table - Left-align Headings',
      content: (
        <>
          <p>By default, table headings are bold and centered.</p>
          <p>To left-align the table headings, use the CSS <code>text-align</code> property:</p>
        </>
      ),
      example: `<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  text-align: left;
}
</style>`
    },
    {
      title: 'HTML Table - Add Border Spacing',
      content: (
        <>
          <p>Border spacing specifies the space between the cells.</p>
          <p>To set the border spacing for a table, use the CSS <code>border-spacing</code> property:</p>
        </>
      ),
      example: `<style>
table, th, td {
  border: 1px solid black;
}
table {
  border-spacing: 30px;
}
</style>`
    },
    {
      title: 'HTML Table - Cells that Span Many Columns',
      content: (
        <>
          <p>To make a cell span more than one column, use the <code>colspan</code> attribute:</p>
        </>
      ),
      example: `<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Cells that Span Many Rows',
      content: (
        <>
          <p>To make a cell span more than one row, use the <code>rowspan</code> attribute:</p>
        </>
      ),
      example: `<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Add a Caption',
      content: (
        <>
          <p>To add a caption to a table, use the <code>{'<caption>'}</code> tag:</p>
        </>
      ),
      example: `<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>`
    },
    {
      title: 'HTML Table - Add a Table Header, Body, and Footer',
      content: (
        <>
          <p>Tables can be divided into three sections: header, body, and footer.</p>
          <p>The <code>{'<thead>'}</code> element is used to group header content in an HTML table.</p>
          <p>The <code>{'<tbody>'}</code> element is used to group the body content in an HTML table.</p>
          <p>The <code>{'<tfoot>'}</code> element is used to group footer content in an HTML table.</p>
        </>
      ),
      example: `<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>`
    }
  ],
  codeExamples: [
    {
      title: 'HTML Tables Example',
      description: 'Example showing various table features in HTML.',
      code: `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tables</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 30px;
    }
    
    th, td {
      padding: 12px;
      text-align: left;
      border: 1px solid #ddd;
    }
    
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    
    tr:hover {
      background-color: #f5f5f5;
    }
    
    caption {
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1.2em;
    }
    
    .styled-table {
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
    }
    
    .styled-table thead tr {
      background-color: #009879;
      color: white;
      text-align: left;
    }
    
    .styled-table th,
    .styled-table td {
      padding: 12px 15px;
    }
    
    .styled-table tbody tr {
      border-bottom: 1px solid #dddddd;
    }
    
    .styled-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
    }
    
    .styled-table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
    }
    
    h2 {
      margin-top: 40px;
      border-bottom: 2px solid #009879;
      padding-bottom: 10px;
    }
  </style>
</head>
<body>

  <h1>HTML Tables Tutorial</h1>
  
  <h2>Basic Table Structure</h2>
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>25</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Smith</td>
      <td>32</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Johnson</td>
      <td>45</td>
    </tr>
  </table>
  
  <h2>Table with Caption</h2>
  <table>
    <caption>Employee Information</caption>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>Marketing</td>
      <td>$50,000</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>Smith</td>
      <td>Development</td>
      <td>$75,000</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>Johnson</td>
      <td>Sales</td>
      <td>$65,000</td>
    </tr>
  </table>
  
  <h2>Table with Colspan and Rowspan</h2>
  <table>
    <tr>
      <th>Name</th>
      <th colspan="2">Phone Numbers</th>
    </tr>
    <tr>
      <td>John Doe</td>
      <td>555-1234</td>
      <td>555-5678</td>
    </tr>
    <tr>
      <td rowspan="2">Jane Smith</td>
      <td>555-8765</td>
      <td>555-4321</td>
    </tr>
    <tr>
      <td>555-7890</td>
      <td>555-0987</td>
    </tr>
  </table>
  
  <h2>Table with Header, Body, and Footer</h2>
  <table>
    <thead>
      <tr>
        <th>Month</th>
        <th>Income</th>
        <th>Expenses</th>
        <th>Savings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>January</td>
        <td>$5,000</td>
        <td>$3,500</td>
        <td>$1,500</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$5,200</td>
        <td>$3,200</td>
        <td>$2,000</td>
      </tr>
      <tr>
        <td>March</td>
        <td>$5,500</td>
        <td>$3,700</td>
        <td>$1,800</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>$15,700</td>
        <td>$10,400</td>
        <td>$5,300</td>
      </tr>
    </tfoot>
  </table>
  
  <h2>Styled Table Example</h2>
  <table class="styled-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th>Age</th>
        <th>Start Date</th>
        <th>Salary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>Edinburgh</td>
        <td>61</td>
        <td>2011/04/25</td>
        <td>$320,800</td>
      </tr>
      <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>Tokyo</td>
        <td>63</td>
        <td>2011/07/25</td>
        <td>$170,750</td>
      </tr>
      <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>San Francisco</td>
        <td>66</td>
        <td>2009/01/12</td>
        <td>$86,000</td>
      </tr>
      <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>Edinburgh</td>
        <td>22</td>
        <td>2012/03/29</td>
        <td>$433,060</td>
      </tr>
    </tbody>
  </table>

</body>
</html>`
    }
  ],
  previousTopic: htmlTopics.find(topic => topic.id === 'html_page_title'),
  nextTopic: htmlTopics.find(topic => topic.id === 'html_lists')
}; 