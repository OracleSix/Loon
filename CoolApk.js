let obj = JSON.parse($response.body);

obj.data = obj.data.filter(item => {
return item.entityTemplate==="feed";
console.log("酷安主页已净化🫡");
});
//body = body.replace(/extraData/g,"extraDa");//⛔️什么值得买

$done({body:JSON.stringify(obj)});
