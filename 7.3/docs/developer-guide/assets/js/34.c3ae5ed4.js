(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{467:function(t,e,s){"use strict";s.r(e);var a=s(56),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"foxitpdfsdk-for-web-example-react-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foxitpdfsdk-for-web-example-react-js"}},[t._v("#")]),t._v(" FoxitPDFSDK for Web Example - React.js")]),t._v(" "),s("p",[t._v("This guide shows two examples. One introduces how to quickly run the out-of=the-box sample for react.js in FoxitPDFSDK for Web package, and the other presents a way to integrate FoxitPDFSDK for Web into an existing React app created with WebPack and Babel.")]),t._v(" "),s("h2",{attrs:{id:"quickly-run-the-out-of-the-box-sample-for-reac-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quickly-run-the-out-of-the-box-sample-for-reac-js"}},[t._v("#")]),t._v(" Quickly run the out-of-the-box sample for reac.js")]),t._v(" "),s("p",[s("em",[t._v("Note:The root folder of "),s("code",[t._v("FoxitPDFSDK for Web")]),t._v(" is referred as "),s("code",[t._v("root")]),t._v(" in the following.")])]),t._v(" "),s("p",[t._v("FoxitPDFSDK for Web provides a boilerplate project for React app which was created with WebPack and Babel. This example can be found at "),s("code",[t._v("root/integrations/")]),t._v(" inside FoxitPDFSDK for Web package.")]),t._v(" "),s("h3",{attrs:{id:"overview-the-project-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview-the-project-structure"}},[t._v("#")]),t._v(" Overview the project structure")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("├─app/\n│  ├─components/\n│  │  └─PDFViewer/\n│  ├─containers/\n│  │  └─App/\n│  ├─foxit-lib/\n│  │    ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│  ├─app.js\n│  ├─index.html\n│  ├─preload.js\n│  └─license-key.js\n├─development/\n│  ├─webpack/\n│  │    ├─"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n│  └─setup.js\n├─package.json\n├─babel.config.js\n")])])]),s("h4",{attrs:{id:"key-directory-and-files-descriptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-directory-and-files-descriptions"}},[t._v("#")]),t._v(" Key directory and files descriptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("File/Folder")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("app/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Contains all JS and CSS files for the app.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("app/components/PDFViewer/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Contains the initilization plugins for FoxitPDFSDK for Web.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("app/preload.js")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("This entry point used to preload SDK core assets.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("app/app.js")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("The entry point for application.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("development/")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Contains automated scripts for packaging in dev mode, application initialization and etc.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("package.json")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Lists dependencies, version build information and ect.")])])])]),t._v(" "),s("h3",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.foxitsoftware.com/pdf-sdk/Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("FoxitPDFSDK for Web"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("p",[t._v("Navigate to "),s("code",[t._v("root/integratons/react.js/")]),t._v(", and execute:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run setup\n")])])]),s("p",[t._v("This setup will implement the followings:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("npm install")]),t._v(" to install dependencies.")]),t._v(" "),s("li",[s("code",[t._v("npm run update-sdk")]),t._v(" "),s("ul",[s("li",[t._v("Copy "),s("code",[t._v("lib")]),t._v(" folder from the root folder to the "),s("code",[t._v("root/integratons/react.js/app/")]),t._v(", and auto rename it to "),s("code",[t._v("foxit-lib")]),t._v(".")]),t._v(" "),s("li",[t._v("Copy "),s("code",[t._v("root/examples/license-key.js")]),t._v("to the "),s("code",[t._v("root/integratons/react.js/app/")]),t._v(".")])])])]),t._v(" "),s("h3",{attrs:{id:"referencing-addons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referencing-addons"}},[t._v("#")]),t._v(" Referencing Addons")]),t._v(" "),s("p",[t._v("If you are integrating FoxitPDFSDK for Web into your existing React project, you should read this section before continue. You may want to check out "),s("RouterLink",{attrs:{to:"/ui-extension/addons/introduction.html"}},[t._v("Addons")]),t._v(" for detailed introductions.")],1),t._v(" "),s("p",[t._v("Here we introduce three ways to reference SDK addons for Anguar project, you may choose one of them based on your needs. This "),s("a",{attrs:{href:"#comparisons-of-loading-methods"}},[t._v("Comparison")]),t._v(" will help you to better understand the difference of the three ways and make a choice.")]),t._v(" "),s("h4",{attrs:{id:"_1-reference-fragmented-addons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-reference-fragmented-addons"}},[t._v("#")]),t._v(" 1. Reference fragmented addons")]),t._v(" "),s("p",[t._v("This method was used by default in past versions before version 7.2. You should open "),s("code",[t._v("components/PDFViewer/index.js")]),t._v(", and referece addons as shown below:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    addons"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        the_path_to_foxit_lib "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/uix-addons/file-property/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        the_path_to_foxit_lib "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/uix-addons/full-screen/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .etc")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Where "),s("code",[t._v("the_path_to_foxit_lib")]),t._v(" is the SDK lib folder，")]),t._v(" "),s("h4",{attrs:{id:"_2-import-modular-addons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-modular-addons"}},[t._v("#")]),t._v(" 2.  Import modular addons")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D @foxitsoftware/addon-loader\n")])])])]),t._v(" "),s("li",[s("p",[t._v("update "),s("code",[t._v("development/webpack/webpack.base.js")]),t._v(" configuration:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/addon\\.info\\.json$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    include"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/foxit-lib/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        loader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("babelLoaderOptions\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@foxitsoftware/addon-loader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javascript/auto'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("In"),s("code",[t._v("components/PDFViewer/index.js")]),t._v(", import "),s("code",[t._v("addon.info.json")]),t._v(" for each addon:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" UIExtension "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/UIExtension.full.js'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" filePropertyAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/file-property/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiMediaAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/multi-media/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" passwordProtectAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/password-protect/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" redactionAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/redaction/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pathObjectsAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/path-objects/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" printAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/print/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fullScreenAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/full-screen/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" importFormAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/import-form/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exportFormAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/export-form/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" undoRedoAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/undo-redo/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" textObjectAddon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/text-object/addon.info.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("And pass addons to the PDFUI constructor:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" libPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foxit-lib/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        addons"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filePropertyAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            multiMediaAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            passwordProtectAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            redactionAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pathObjectsAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            printAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fullScreenAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            importFormAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            exportFormAddon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            undoRedoAddon\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// text-object addon is disabled on mobile platform")]),t._v("\n            UIExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFViewCtrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeviceInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMobile\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" textObjectAddon\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"_3-reference-allinone-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-reference-allinone-js"}},[t._v("#")]),t._v(" 3. Reference allInOne.js")]),t._v(" "),s("p",[t._v("The allInOne.js already combines all addons, which locates in "),s("code",[t._v("foxit-lib/uix-addons/")]),t._v(". To refenece this file, open "),s("code",[t._v("components/PDFViewer/index.js")]),t._v(", and update the code as follows:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" UIExtension "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/UIExtension.full.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Addons "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/allInOne.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),s("p",[t._v("And pass parameters to the PDFUI constructor:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    addons"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UIExtension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFViewCtrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeviceInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMobile\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Addons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("it")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textEditObject'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Addons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"comparisons-of-loading-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparisons-of-loading-methods"}},[t._v("#")]),t._v(" Comparisons of loading methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Loading methods")]),t._v(" "),s("th",[t._v("Configuration")]),t._v(" "),s("th",[t._v("HTTP Requests")]),t._v(" "),s("th",[t._v("Editable (i.e edit localization resoures, and addon.info.json)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Fragmentized")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("n+")]),t._v(" "),s("td",[t._v("Yes")])]),t._v(" "),s("tr",[s("td",[t._v("Modularized")]),t._v(" "),s("td",[t._v("Configure gulp")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("Yes,but should re-merge the addons after modification")])]),t._v(" "),s("tr",[s("td",[t._v("allInOne.js")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("No")])])])]),t._v(" "),s("p",[t._v("Note: You can rebuild allInOne.js by using our "),s("RouterLink",{attrs:{to:"/ui-extension/addons/introduction.html#how-to-merge-addons"}},[t._v("Addons merge tools")])],1),t._v(" "),s("h3",{attrs:{id:"runnning-the-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runnning-the-example"}},[t._v("#")]),t._v(" Runnning the example")]),t._v(" "),s("p",[t._v("On the shell, execute the following command to start the development service:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),s("p",[t._v("Now you are ready to launch the app. Open your browser, navigate to "),s("code",[t._v("<http://127.0.0.1:9102/>")]),t._v(" to load your example.")]),t._v(" "),s("h3",{attrs:{id:"building"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building"}},[t._v("#")]),t._v(" Building")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("p",[t._v("The production will be placed into "),s("code",[t._v("root/integratons/react.js/dist")])]),t._v(" "),s("h3",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./dist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" http-server -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),s("h2",{attrs:{id:"integrate-foxitpdfsdk-for-web-into-existing-react-js-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-foxitpdfsdk-for-web-into-existing-react-js-project"}},[t._v("#")]),t._v(" Integrate FoxitPDFSDK for Web into existing React.js project")]),t._v(" "),s("p",[t._v("This integration assumes you have React app created with Webpack and Babel.")]),t._v(" "),s("h3",{attrs:{id:"prerequisites-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-2"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reac.js created with WebPack and Babel"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developers.foxitsoftware.com/pdf-sdk/Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("FoxitPDFSDK for Web"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"webpack-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-configuration"}},[t._v("#")]),t._v(" Webpack configuration")]),t._v(" "),s("p",[t._v("Let's call the root folder of your existing React project and "),s("code",[t._v("FoxitPDFSDK for Web")]),t._v(" as ReactJS and SDK.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create and configure the following 3 files in the "),s("code",[t._v("ReactJS/development/webpacK")]),t._v("folder:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("webpack.base.js")])]),t._v(" "),s("li",[s("code",[t._v("webpack.dev.js")])]),t._v(" "),s("li",[s("code",[t._v("webpack.prod.js")])])]),t._v(" "),s("p",[t._v("For the configuration details, refer to the counterpart files in "),s("code",[t._v("SDK/integrations/react.js/development/webpack/")]),t._v(". You can also directly duplicate the files to "),s("code",[t._v("ReactJS/development/webpacK")])])]),t._v(" "),s("li",[s("p",[t._v("Configure npm script in package.json")])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"script"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack-dev-server --config development/webpack/webpack.dev.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config development/webpack/webpack.prod.js"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"adding-dependencies-and-entry-point-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-dependencies-and-entry-point-files"}},[t._v("#")]),t._v(" Adding dependencies and entry point files")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("In SDK, copy the "),s("code",[t._v("lib")]),t._v(" and "),s("code",[t._v("SDK/examples/license-key.js")]),t._v("to "),s("code",[t._v("ReacJS/app")]),t._v(", and change the lib name to "),s("code",[t._v("foxi-lib")]),t._v(". Besides, to correctly referene your fonts lib, you also need to duplicate the "),s("code",[t._v("external")]),t._v(" folder inside SDK to "),s("code",[t._v("ReactJS/app/foxit-lib/assets")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Create and configure the following files in ReacJS:")]),t._v(" "),s("ul",[s("li",[t._v("the "),s("a",{attrs:{href:"https://www.npmjs.com/package/@babel/preset-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel.config.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("the "),s("code",[t._v("../app/components/PDFViewer/index.js")])]),t._v(" "),s("li",[t._v("the "),s("code",[t._v("../app/containers/App/index.js")])]),t._v(" "),s("li",[t._v("the "),s("code",[t._v("index.htm")]),t._v(","),s("code",[t._v("app.js")]),t._v(" and "),s("code",[t._v("preload.js")]),t._v(" inside "),s("code",[t._v("../app/")])])]),t._v(" "),s("p",[t._v("For the configuration details, refer to the corresponding files in SDK. You can also directly duplicate those files into the counterpart folders in ReactJS.")])])]),t._v(" "),s("h3",{attrs:{id:"running-your-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-your-application"}},[t._v("#")]),t._v(" Running your application")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),s("p",[t._v("Now everything is set up. Open your browser, navigate to "),s("a",{attrs:{href:"http://127.0.0.1:9102/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9102/"),s("OutboundLink")],1),t._v(" to launch your application.")])])}),[],!1,null,null,null);e.default=n.exports}}]);