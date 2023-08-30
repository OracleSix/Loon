let obj = JSON.stringify($request.headers);
let cookie = JSON.parse(obj).cookie;
console.log("🍪本次获取到的cookie:\n" + cookie);
if (cookie != $persistentStore.read("YC")) {
$persistentStore.write(cookie, "YC");
$notification.post("cookie已更新🎉","","");
$done({});
} else {
$notification.post("无需更新Cookie","","");
$done({});
};
