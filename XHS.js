//统一获取url和body
const url = $request.url;
let obj = $response.body;

if (url.includes("homefeed?")) {
obj = JSON.parse(obj);//JSON
obj.data = obj.data.filter(item => {
//return !(item.is_tracking===true||item.is_ads===true||item.live||item.ads_info);
item.is_tracking == false;});
console.log("主页广告已屏蔽🥰");
$done({body:JSON.stringify(obj)});
} else if (url.includes("get_danmaku?")) {
obj = JSON.parse(obj);//JSON类型
obj.data.infos = obj.data.infos.filter(item => {!(/(厄运|恶运|噩运|邪运|走开|..走.)/.test(item.content))});
console.log("弹幕已净化🤩");
$done({body:JSON.stringify(obj)});
} else if (url.includes("search/notes?")) {
obj = JSON.parse(obj);//JSON类型
obj.data.items = obj.data.items.filter(item => {!(item.ads);});
console.log("搜索页广告已驱逐🔍");
$done({body:JSON.stringify(obj)});
} else if (url.includes("splash_config")) {
// 开屏广告
obj = JSON.parse(obj);//JSON类型
  if (obj.data?.ads_groups) {
    obj.data.ads_groups.forEach((i) => {
      i.start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
      i.end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
      if (i.ads) {
        i.ads.forEach((j) => {
          j.start_time = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
          j.end_time = 2209046399; // Unix 时间戳 2040-01-01 23:59:59
        });
      }
    });
  }
console.log("开屏广告已屏蔽🍑");
$done({body:JSON.stringify(obj)});
}else if (url.includes("note/feed")||url.includes("note/redtube")||url.includes("note/videofeed")) {
obj = obj.replace('disable_watermark":false','disable_watermark":true');
console.log("水印已去除🫡");
$done({body:obj});
};
