//统一获取url和body
const url = $request.url;
let obj = JSON.parse($response.body);
//-----------------------------------
if (url.includes("homefeed?")) {//⛔️去除主页赞助广告直播
obj.data = obj.data.filter(item => {
return !(item.is_tracking===true||item.is_ads===true||item.live||item.ads_info);
});
} else if (url.includes("get_danmaku?")) {//⛔️弹幕净化
obj.data.infos = obj.data.infos.filter(item => {return !(/厄运|恶运|噩运|走开|..走./.test(item.content))});
} else if (url.includes("search/notes?")) {//⛔️去除搜索页广告
obj.data.items = obj.data.items.filter(item => {return !(item.ads);});
} else if (url.includes("note/feed")||url.includes("note/redtube")||url.includes("note/videofeed")){
//去水印
obj.data.note_list.media_save_config.disable_watermark=true;
}
$done({body:JSON.stringify(obj)});
