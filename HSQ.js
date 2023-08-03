const url = `https://www.hashiqi.online/aspx3/mobile/qiandao.aspx`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `document`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://www.hashiqi.online`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.34(0x1800222d) NetType/4G Language/en`,
'Sec-Fetch-Mode' : `navigate`,
'Cookie' : `dt_cookie_user_name_remember=DTcms=2146268163; dt_cookie_user_pwd_remember=DTcms=63B5310512CC28EE; ASP.NET_SessionId=cj14doxrvzjmtu4wwam1scxm; dt_cookie_url_referrer=%2faspx3%2fmobile%2fusercenter.aspx%3faction%3dindex`,
'Host' : `www.hashiqi.online`,
'Referer' : `https://www.hashiqi.online/aspx3/mobile/qiandao.aspx`,
'Accept-Language' : `en-US,en;q=0.9`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `__EVENTTARGET=_lbtqd&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwUKMTQxNDYwMTM4MA9kFgJmD2QWAgIDDw8WAh4EVGV4dAUY5oGt5Zac5L2g6I635b6X6YeR5biBMTE1ZGRkagl3Sds2Bw2oT9PGFPjGyWTZHFo2c6sLPpGUZucMelA%3D&__VIEWSTATEGENERATOR=AAC8AF03`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
//http post
$httpClient.post(myRequest,function(error, response, data){
    const body = data
});
console.log(body);
$notification.post("哈士奇iOS签到成功🐕","","")
$done({});