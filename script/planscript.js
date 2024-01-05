// pdf opening script

function openPDF(pdfPath, imagePath, title) {
  var newWindow = window.open("", "_blank");
  newWindow.document.write(
    "<html><head><title>" + title + "</title></head><body>"
  );
  newWindow.document.write(
    '<img src="' + imagePath + '" alt="' + title + '" />'
  );
  newWindow.document.write(
    '<embed width="100%" height="100%" name="plugin" src="' +
      pdfPath +
      '" type="application/pdf">'
  );
  newWindow.document.write("</body></html>");
  newWindow.document.close();
}

function openPDF(pdfPath) {
  window.open(pdfPath, "_blank");
}
