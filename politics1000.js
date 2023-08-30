const url = $request.url;

if (url.includes("unlockCourse")) {
let obj = JSON.parse($response.body);
obj = {"errorCode":0,"errorMsg":"ok","stime":1693380623697}
$done({body:JSON.stringify(obj)});
} else if (url.includes("user")||url.includes("index")) {
let obj = $response.body;
obj = obj.replace(/upValue":\d*/gi,'upValue":66666');
//obj = obj.replace(/false/gi,'true');
$done({body:obj});
}