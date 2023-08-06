//统一获取url和body
const url = $request.url;
let obj = $response.body;

if (url.includes("homefeed?")) {
obj = JSON.parse(obj);//JSON
obj.data = obj.data.filter(item => {
return !(item.is_tracking===true||item.is_ads===true||item.live||item.ads_info);
});
console.log("主页广告已屏蔽🥰");
$done({body:JSON.stringify(obj)});
} else if (url.includes("get_danmaku?")) {
obj = JSON.parse(obj);//JSON类型
obj.data.infos = obj.data.infos.filter(item => {return !(/厄运|恶运|噩运|走开|..走./.test(item.content))});
console.log("弹幕已净化🤩");
$done({body:JSON.stringify(obj)});
} else if (url.includes("search/notes?")) {
obj = JSON.parse(obj);//JSON类型
obj.data.items = obj.data.items.filter(item => {return !(item.ads);});
console.log("搜索页广告已驱逐🔍");
$done({body:JSON.stringify(obj)});
} else if (url.includes("splash_config")) {
obj = obj.replace(/ads_groups/g,"a_gro");
console.log("开屏广告已屏蔽🥊");
$done({body:obj});
}else if (url.includes("note/feed")||url.includes("note/redtube")||url.includes("note/videofeed")) {
obj = obj.replace('disable_watermark":false','disable_watermark":true');
console.log("水印已去除🫡");
$done({body:obj});
};
