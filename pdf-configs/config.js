module.exports = {
    stylesheet: "./pdf-configs/style.css",
    body_class: "markdown-body",
    marked_options: {
        headerIds: false,
        smartypants: true,
    },
    launch_options: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    },
    pdf_options: {
        format: 'A4',
        margin: {
            top: '20mm',
            right: '20mm',
            bottom: '20mm',
            left: '20mm'
        },
        printBackground: true,
        "headerTemplate": "<style>\n  section {\n    margin: 0 auto;\n    font-size: 9px;\n  }\n</style>",
        "footerTemplate": "<section>\n  <div>\n    <span class=\"pageNumber\"></span>\n    / <span class=\"totalPages\"></span>\n  </div>\n</section>"
    },
    stylesheet_encoding: "utf-8",
};
