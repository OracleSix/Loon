//const url = $request.url;
//if (!$response.body) $done({});
let body = JSON.parse($response.body);


//body.data.splice(0,3);//⛔️顶部广告
body.data = body.data.filter(item => {
return item.entityTemplate==="feed";
});
//body = body.replace(/extraData/g,"extraDa");//⛔️什么值得买

$done(JSON.stringify(body));
