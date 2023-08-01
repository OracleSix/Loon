var obj = JSON.stringify($request.headers);
var cookie = JSON.parse(obj).cookie
console.log(cookie);
if (cookie != $persistentStore.read("YC")) {
$persistentStore.write(cookie, "YC");
$notification.post("cookie已更新🎉","","");
} else {
$notification.post("无需更新Cookie","","");
};
$done({});
