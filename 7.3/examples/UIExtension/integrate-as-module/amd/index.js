define([
    'UIExtension',
    '../../../license-key.js',
    '@lib/UIExtension.css'
], function(UIExtension, license) {
    PDFViewCtrl.Log.setLogLevel(PDFViewCtrl.Log.LEVELS.LEVEL_ERROR);

    var pdfui = new UIExtension.PDFUI({
        viewerOptions: {
            libPath: '/lib',
            jr: {
                licenseKey: license.licenseKey,
                licenseSN: license.licenseSN,
                enginePath: './jr-engine/gsdk',
                fontPath: '../external/brotli'
            }
        },
        renderTo: '#pdf-ui',
        addons: [
            '/lib/uix-addons/path-objects'
        ]
    });
    pdfui.openPDFByHttpRangeRequest(
        {
            range: {
                url: '/docs/FoxitPDFSDKforWeb_DeveloperGuide.pdf'
            }
        },
        { fileName: 'FoxitPDFSDKforWeb_DeveloperGuide.pdf' }
    );
});
