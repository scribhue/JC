
        // URL of the PDF to be loaded
        var url = 'path/Tstpdf/Test.pdf';

        // Asynchronous download of the PDF
        var pdfjsLib = window['pdfjs-dist/build/pdf'];

        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

        // Load the PDF
        pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
            pdfDoc = pdfDoc_;
            // Fetch the first page
            pdfDoc.getPage(1).then(function(page) {
                var viewport = page.getViewport({ scale: 1.5 });
                var canvas = document.getElementById('pdf-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render the page into the canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        });
