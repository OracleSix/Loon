const url = $request.url;
let obj = $request.body;

if (url.includes("unlockCourse")) {
obj = JSON.parse(obj);
obj = {"errorCode":0,"errorMsg":"ok","stime":1693380623697}
$done({body:JSON.stringify(obj)});
} else if (url.includes("indexInfo")) {
obj = obj.replace(/upValue":\d*/gi,'upValue":66666');
//obj = obj.replace(/false/gi,'true');
$done({body:obj});
}
