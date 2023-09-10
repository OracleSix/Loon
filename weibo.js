const url = $request.url;
let obj = $response.body;

if (url.includes("comments/build_comments")) {
obj = obj.replace(/position":\d+/g,'position":-1');
//console.log("\n👀微博评论页广告净化");
$done({body:obj});
} else if (url.includes("statuses/extend")) {
obj = obj.replace(/head_cards/g,'head_car');
//console.log("\n😘微博评论区head卡片广告已去除");
$done({body:JSON.stringify(obj)});
} else if (url.includes("messageflow/notice")) {
obj = JSON.parse(obj);
obj.messages = obj.messages.filter(item => !item.msg_card.ad_tag);
//console.log("\n💁🏻微博动态消息嵌入广告已净化");
$done({body:JSON.stringify(obj)});
} else if (url.includes("statuses/container_timeline_hot")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.itemExt);
//console.log("\n🫵🏻微博主页信息流广告已净化");
$done({body:JSON.stringify(obj)});
} else if (url.includes("wbapplua/wbpullad.lua")) {
obj = obj.replace(/ads/g,'a');
//console.log("\n🤛🏻微博开屏广告已屏蔽");
$done({body:obj});
} else if (url.includes("profile/container_timeline")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.data?.mblogtypename);
//console.log("\n🤠微博个人主页信息流广告已屏蔽");
$done({body:JSON.stringify(obj)}); 
} else if (url.includes("profile/me")) {
obj = JSON.parse(obj);
delete obj.items[0].header.vipView;
obj.items[1].items.splice(4);
delete obj.items[2];
obj.items = obj.items.filter(item => !item.title);
//console.log("\n🫶🏻微博'我'页面不必要模块净化");
$done({body:JSON.stringify(obj)}); 
} else if (url.includes("statuses/container_timeline_unread")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item.itemExt);
//console.log("\n😼微博'我的关注'热推净化");
$done({body:JSON.stringify(obj)}); 
} else if (url.includes("search/container_timeline")) {
obj = JSON.parse(obj);
obj.items = obj.items.filter(item => !item?.itemExt);
//console.log("\n🧭微博发现页广告净化");
$done({body:JSON.stringify(obj)});
} else if (url.includes("search/finder")) {
obj = JSON.parse(obj);
obj.channelInfo.channels[0].payload.items = obj?.channelInfo?.channels[0]?.payload?.items.filter(item => !item?.itemExt);
//console.log("\n💡微博发现页预加载已净化");
$done({body:JSON.stringify(obj)});
}
