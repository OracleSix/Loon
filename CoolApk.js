const url = $request.url
let obj = JSON.parse($response.body);

if (url.includes("main/index")) {
    obj.data = obj.data.filter(item => {
    return item.entityTemplate==="feed";
    });
//body = body.replace(/extraData/g,"extraDa");//⛔️什么值得买
    console.log("酷安主页已净化🫡");
    $done({body:JSON.stringify(obj)});
} else if (url.includes("feed/replyList")) {
    obj = JSON.stringify(obj).replace(/sponsor/g,"spons");
    console.log("酷安回复页广告已去除🦏");
    $done({body:obj});
}
