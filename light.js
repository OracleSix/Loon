const url = $request.url;
let obj = $response.body;

if (url.includes('subscribers')) {
//subscription,自动获取的。很重要‼️
obj = JSON.parse($response.body);
!obj.offerings || $done({});
const data = {
    "expires_date": "2099-09-23T07:24:33Z",
    "original_purchase_date": "2023-08-23T07:21:06Z",
    "purchase_date": "2023-08-23T07:24:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

obj.subscriber.subscriptions["com.miiiao.premium"] = data;
obj.subscriber.entitlements["premium_rc"] = data;
obj.subscriber.entitlements["premium_rc"].product_identifier = "com.miiiao.premium";
$done({body:JSON.stringify(obj)});
} /*else {
//恢复购买。这个不常用。
obj = JSON.parse($response.body);
let vipBody = {"entitlements":{"premium_rc":{"expires_date":"2099-09-23T07:24:33Z","grace_period_expires_date":null,"product_identifier":"com.miiiao.premium","purchase_date":"2023-08-23T07:24:33Z"}},"first_seen":"2023-08-23T07:22:21Z","last_seen":"2023-08-24T12:43:20Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:72be35611cc54c188c00d3394380cb62","original_application_version":"1.54","original_purchase_date":"2023-08-23T07:21:06Z","other_purchases":{},"subscriptions":{"com.miiiao.premium":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2099-09-23T07:24:33Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-08-23T07:24:33Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2023-08-23T07:24:33Z","refunded_at":null,"store":"app_store","store_transaction_id":"150001496305388","unsubscribe_detected_at":"2023-08-23T07:26:29Z"}}};
obj.subscriber = vipBody;
$done({body:JSON.stringify(obj)});
};*/
