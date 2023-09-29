
const url = $request.url;
let obj = $response.body;

if (url.includes("topstory/recommend")) {
   /*!(undefined == $prefs.setValueForKey(obj,"topStory"))||$prefs.setValueForKey(obj,"topStory");
    obj = $prefs.valueForKey("topStory");*/
    obj = JSON.parse(obj);
    obj.data = [];
    obj.fresh_text = ' ';
    $done({body:JSON.stringify(obj)});
} else if (url.includes("feed/render/tab")) {

//obj = obj.replace(/全站/gi," ");
//obj = obj.replace(/直播/gi," ");
//obj = obj.replace(/职场季/gi," ");
//obj = obj.replace(/section_name:".*?"/gi,'section_name:""');
//obj = obj.replace(/zhimg/gi,"zhi");
//placeholder_title":"职场季","img_url":"https://picx.zhimg.com/v2-ce30f9115b882b17b32cddec8e5aacd6.png","img_url_night":"https://pic1.zhimg.com/v2-003f27cec2f5c2daf4e5a75969c18001.png","img_width":60,"img_height":15,"title":"职场季"}
obj.selected_sections = [];
obj.guess_like_sections = [];
obj.more_sections = [];

$done({body:obj});    
} else if (url.includes('preset_words')) {
    obj = JSON.parse(obj);
    obj.preset_words = {};
    $done({body:JSON.stringify(obj)});
};
