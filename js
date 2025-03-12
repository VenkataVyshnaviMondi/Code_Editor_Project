document.getElementById("run-button").addEventListener("click", function() {
    // Get the code from the HTML, CSS, and JavaScript text areas
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;

    // Create the final output by embedding HTML, CSS, and JavaScript
    const finalCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;

    // Display the output in the iframe
    const iframe = document.getElementById("output");
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(finalCode);
    iframeDoc.close();
});
