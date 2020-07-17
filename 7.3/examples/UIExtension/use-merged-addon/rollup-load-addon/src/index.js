import * as UIExtension from '../../../../../lib/UIExtension.full';
import '../../../../../examples/license-key';
import { default as addons } from '../dist/merged-addons';

var PDFViewCtrl = UIExtension.PDFViewCtrl;

PDFViewCtrl.Log.setLogLevel(PDFViewCtrl.Log.LEVELS.LEVEL_ERROR)

const pdfui = new UIExtension.PDFUI({
    viewerOptions: {
        libPath: '/lib',
        jr: {
            licenseKey, licenseSN, // exported as global variable from license-key.js
            enginePath: './jr-engine/gsdk',
            fontPath: '../external/brotli'
        }
    },
    renderTo: '#pdf-ui',
    addons
});

pdfui.openPDFByHttpRangeRequest({
    range:{
        url:'/docs/FoxitPDFSDKforWeb_DeveloperGuide.pdf',
    }
},{fileName:'FoxitPDFSDKforWeb_DeveloperGuide.pdf'});