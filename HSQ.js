const url = `https://www.hashiqi.online/aspx3/mobile/qiandao.aspx`;
const method = `POST`;
const headers = {
'Sec-Fetch-Dest' : `document`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Sec-Fetch-Site' : `same-origin`,
'Origin' : `https://www.hashiqi.online`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.41(0x1800292c) NetType/WIFI Language/zh_CN`,
'Sec-Fetch-Mode' : `navigate`,
'Cookie' : `dt_cookie_user_name_remember=DTcms=2146268163; dt_cookie_user_pwd_remember=DTcms=63B5310512CC28EE; ASP.NET_SessionId=2u1yxvkvnregxw1541ihip4a; dt_cookie_url_referrer=%2faspx3%2fmobile%2fusercenter.aspx%3faction%3dindex`,
'Host' : `www.hashiqi.online`,
'Referer' : `https://www.hashiqi.online/aspx3/mobile/qiandao.aspx`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `__EVENTTARGET=_lbtqd&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwUKMTQxNDYwMTM4MA9kFgJmD2QWAgIDDw8WAh4EVGV4dAUk562%2B5Yiw5Y%2Bv6I635b6X6ZqP5py66YeR5biBKDEwMC0xNjApZGRkTaWmQ8mmPalDGu3CFP2%2F%2BJjNI28asqScK5wLJepqeRs%3D&__VIEWSTATEGENERATOR=AAC8AF03`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};
//http post
$httpClient.post(myRequest, function(errormsg,response,data){
const regex = /恭喜你获得金币\d+/;
const regexdone = /今日已签到！已获随机金币\d+/;
regex.exec(data)?$notification.post("哈士奇签到成功🏆",`签到成功:${regex.exec(data)}`,""):$notification.post("哈士奇已签到成功😋",`请勿重复签到:${regexdone.exec(data)}`,"");
$done();
});
