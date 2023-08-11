const url = $request.url;
let obj = $response.body;

if (url.includes("comments/build_comments")) {
obj = obj.replace(/position":\d+/g,'position":-1');
console.log("微博评论页广告净化👀");
$done({body:obj});
} else if (url.includes("statuses/extend")) {
obj = obj.replace(/head_cards/g,'head_car');
console.log("微博评论区head卡片广告已去除😘");
$done({body:JSON.stringify(obj)});
} else if (url.includes("messageflow/notice")) {
obj = JSON.parse(obj);
obj.messages = obj.messages.filter(item => !item.msg_card.ad_tag);
console.log("微博动态消息嵌入广告已净化💁🏻");
$done({body:JSON.stringify(obj)});
} else if (url.includes("statuses/container_timeline_hot")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.itemExt);
console.log("微博主页信息流广告已净化🫵🏻");
$done({body:JSON.stringify(obj)});
} else if (url.includes("wbapplua/wbpullad.lua")) {
obj = obj.replace(/ads/g,'a');
console.log("微博开屏广告已屏蔽🤛🏻");
$done({body:obj});
} else if (url.includes("profile/container_timeline")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.data?.mblogtypename);
console.log("微博个人主页信息流广告已屏蔽🤠");
$done({body:JSON.stringify(obj)}); 
} if (url.includes("profile/me")) {
obj = obj.replace(/vipView/,"vipVi");
obj = JSON.parse(obj);
delete obj.items[2];
delete obj.items[3];
delete obj.items[6];
delete obj.items[7];
console.log("微博'我的个人页'不必要模块净化🫶🏻");
$done({body:JSON.stringify(obj)}); 
} else if (url.includes("statuses/container_timeline_unread")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.itemExt);
console.log("微博'我的关注'不必要模块净化😼");
$done({body:JSON.stringify(obj)}); 
}