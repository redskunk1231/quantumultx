#!name=WindyPro 解锁
#!desc=解锁 WindyPro 订阅功能


[rewrite_local]

^https?:\/\/account\.windy\.com\/api\/info url script-response-body WindyProCrack.js

[mitm]

hostname = account.windy.com

var ddgksf2013=JSON.parse($response.body);$done({body:JSON.stringify(ddgksf2013={墨鱼手记})});
