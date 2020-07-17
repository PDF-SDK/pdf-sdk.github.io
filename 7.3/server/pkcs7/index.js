const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const fs = require('fs');
const app = new Koa();
var process = require('child_process');

const koabody=require('koa-body')


const router = Router();

router.post('/digest',koabody({multipart:true}),async (ctx)=>{
    switch(+ctx.request.body.algorithm){
        case 0://sha1
            fs.copyFileSync(ctx.request.files.plain.path,".\\temp\\plain");
            process.execSync(".\\bin\\pkcs7.exe digest .\\temp\\plain .\\temp\\sha1");
            ctx.body = fs.createReadStream(".\\temp\\sha1");
            break;
        case 1://sha256
        break;
        case 2://sha384
        break;
        case 3://sha512
        break;
    }
    return;
});

router.post('/sign',koabody({multipart:true}),async (ctx)=>{
    fs.copyFileSync(ctx.request.files.digest.path,".\\temp\\digest");
    process.execSync(".\\bin\\pkcs7.exe sign .\\bin\\foxit_all.pfx 123456 .\\temp\\digest .\\temp\\signedData");
    ctx.body = fs.createReadStream(".\\temp\\signedData");
    return;
});

router.post('/verify',koabody({multipart:true}),async (ctx)=>{
    fs.copyFileSync(ctx.request.files.digest.path,".\\temp\\plainText");
    fs.copyFileSync(ctx.request.files.sign.path,".\\temp\\toBeVerified");
    process.execSync(".\\bin\\pkcs7.exe verify .\\temp\\toBeVerified .\\temp\\plainText .\\temp\\output");
    /*
    return a digital string. one or a combination of below values. 
    StateUnknown:0x80000000
    StateNoSignData:0x00000200
    StateUnsigned:0x00000001
    StateSigned:0x00000002
    StateVerifyValid:0x00000004
    StateVerifyInvalid:0x00000008
    StateVerifyErrorData:0x00000010
    StateVerifyNoSupportWay:0x00000020
    StateVerifyErrorByteRange:0x00000040
    StateVerifyChange:0x00000080
    StateVerifyIncredible:0x00000100
    StateVerifyNoChange:0x00000400
    StateVerifyIssueValid:0x00001000
    StateVerifyIssueUnknown:0x00002000
    StateVerifyIssueRevoke:0x00004000
    StateVerifyIssueExpire:0x00008000
    StateVerifyIssueUncheck:0x00010000
    StateVerifyIssueCurrent:0x00020000
    StateVerifyTimestampNone:0x00040000
    StateVerifyTimestampDoc:0x00080000
    StateVerifyTimestampValid:0x00100000
    StateVerifyTimestampInvalid:0x00200000
    StateVerifyTimestampExpire:0x00400000
    StateVerifyTimestampIssueUnknown:0x00800000
    StateVerifyTimestampIssueValid:0x01000000
    StateVerifyTimestampTimeBefore:0x02000000
    StateCertCannotGetVRI:0x04000000
    StateVerifyChangeLegal:0x08000000
    StateVerifyChangeIllegal:0x10000000
    */
    ctx.body = fs.createReadStream(".\\temp\\output");
});

app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

const port = 7777; 
app.listen(port, function() {
    console.log(`file downloading server is listening on port ${port}`);
});