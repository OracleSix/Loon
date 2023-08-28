//console.log($response.body);
let obj = JSON.parse($response.body);
let vipBody = {"entitlements":{"premium_rc":{"expires_date":"2099-09-23T07:24:33Z","grace_period_expires_date":null,"product_identifier":"com.miiiao.premium","purchase_date":"2023-08-23T07:24:33Z"}},"first_seen":"2023-08-23T07:22:21Z","last_seen":"2023-08-24T12:43:20Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:72be35611cc54c188c00d3394380cb62","original_application_version":"1.54","original_purchase_date":"2023-08-23T07:21:06Z","other_purchases":{},"subscriptions":{"com.miiiao.premium":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2099-09-23T07:24:33Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-08-23T07:24:33Z","ownership_type":"PURCHASED","period_type":"normal","purchase_date":"2023-08-23T07:24:33Z","refunded_at":null,"store":"app_store","store_transaction_id":"150001496305388","unsubscribe_detected_at":"2023-08-23T07:26:29Z"}}};
obj.subscriber = vipBody;
//console.log("\n\n"+JSON.stringify(obj));
$done({body:JSON.stringify(obj)});
