let obj = JSON.parse($response.body);
obj.UserInfo.gu_type=1;
$done({body:JSON.stringify(obj)});