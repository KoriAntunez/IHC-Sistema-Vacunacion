/*var doc = new jsPDF('p','pt','a4');
var specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true;
  } };

$('#btnCrearPdf').click(function () {
    var doc = new jsPDF('p','pt','a4');
  doc.fromHTML($('#reporte').html(),{
    'width': 190
    });

  doc.save('sample-page.pdf');
});
*/

//# sourceURL=pen.js
/*
var doc = new jsPDF('p','pt','a4');
var specialElementHandlers = {
  '#editor': function (element, renderer) {
    return true;
  } };

$('#btnCrearPdf').click(function () {
  doc.fromHTML($('#reporte').html(),{
    'width': 190
    });

  doc.save('sample-page.pdf');
});
*/
/*  
$("#btnCrearPdf").click(function (e) {
    var doc = new jsPDF();
    var elementHTML = $('reporte').html();
    doc.fromHTML(elementHTML, 15, 15, {
        width: 1000

    });
    doc.save('sample-page.pdf');
});
*/
$('#btnCrearPdf').click(function () {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $('#reporte')[0];
  
    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
      // element with id of "bypass" - jQuery style selector
      '#bypassme': function(element, renderer) {
        // true = "handled elsewhere, bypass text extraction"
        return true
      }
    };
    margins = {
      top: 80,
      bottom: 60,
      left: 10,
      width: 700
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
      },
  
      function(dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
      }, margins);
    });
  
