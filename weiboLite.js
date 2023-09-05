let obj = JSON.parse($response.body);
//obj.launch.vip_enable = 1;
obj.data = {};
console.log(JSON.stringify(obj));
$done({body:JSON.stringify(obj)});
