//统一获取url和body
const url = $request.url;
let body = JSON.parse($response.body);
//-----------------------------------
if (-1 != url.indexOf("homefeed?")) {//⛔️去除主页赞助广告直播
body.data = body.data.filter(item => {
return !(item.is_tracking===true||item.is_ads===true||item.live||item.ads_info);
});
} else if (-1 != url.indexOf("get_danmaku?")) {//⛔️弹幕净化
body.data.infos = body.data.infos.filter(item => {return !(/厄运|恶运|噩运|走开|..走./.test(item.content))});
} else if (-1 != url.indexOf("search/notes?")) {//⛔️去除搜索页广告
body.data.items = body.data.items.filter(item => {return !(item.ads);});
}
$done({body:JSON.stringify(body)});
