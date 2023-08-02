//统一获取url和body
const url = $request.url;
let obj = JSON.parse($response.body);
//-----------------------------------
if (url.includes("homefeed?")) {//⛔️去除主页赞助广告直播
obj.data = obj.data.filter(item => {
return !(item.is_tracking===true||item.is_ads===true||item.live||item.ads_info);
console.log("主页广告已屏蔽🥰");
});
} else if (url.includes("get_danmaku?")) {//⛔️弹幕净化
obj.data.infos = obj.data.infos.filter(item => {return !(/厄运|恶运|噩运|走开|..走./.test(item.content))});
console.log("弹幕已精华🤩");
} else if (url.includes("search/notes?")) {//⛔️去除搜索页广告
obj.data.items = obj.data.items.filter(item => {return !(item.ads);});
console.log("搜索页广告已驱逐🔍");
} else if (url.includes("note/feed")||url.includes("note/redtube")||url.includes("note/videofeed")){
//去水印
obj.data.note_list.media_save_config.disable_watermark=true;
console.log("水印已去除🫡");
}
$done({body:JSON.stringify(obj)});
