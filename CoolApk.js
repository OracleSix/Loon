let body = JSON.parse($response.body);

body.data = body.data.filter(item => {
return item.entityTemplate==="feed";
});
//body = body.replace(/extraData/g,"extraDa");//⛔️什么值得买

$done({body:JSON.stringify(body)});
