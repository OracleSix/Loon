const url = `https://yuchenios.com/wp-admin/admin-ajax.php`;
const method = `POST`;
const headers = {
'X-Requested-With' : `XMLHttpRequest`,
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded; charset=UTF-8`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://yuchenios.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x1800252a) NetType/WIFI Language/zh_CN`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : $persistentStore.read("YC"),
'Host' : `yuchenios.com`,
'Referer' : `https://yuchenios.com/users?tab=credit`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `application/json, text/javascript, */*; q=0.01`
};
const body = `action=daily_sign`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
//http post
$httpClient.post(myRequest, function(errormsg,response,data){
console.log(data);
data.includes('success":"success')?
$notification.post("🎉","",""):$notification.post("⛔️","","");
});

$done();