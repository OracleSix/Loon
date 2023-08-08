const url = $request.url
let obj = $response.body;

if (url.includes("main/index")) {
    obj = JSON.parse(obj);//JSON类型
    obj.data = obj.data.filter(item => {
    return item.entityTemplate==="feed";
    });
//body = body.replace(/extraData/g,"extraDa");//⛔️什么值得买
    console.log("酷安主页已净化🫡");
    $done({body:JSON.stringify(obj)});
} else if (url.includes("feed/replyList")) {
    obj = obj.replace(/sponsor/g,"spons");
    console.log("酷安回复页广告已去除🦏");
    $done({body:obj});
} else if (url.includes("page/dataList")) {
    obj = obj.replace(/sponsor/g,"spons");
    console.log("酷安话题流广告已净化🎉");
    $done({body:obj});
}