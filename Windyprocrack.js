// WindyInfoTemplate.js
// Quantumult X - script-response-body
// 用于本地测试 / 恢复脚本结构
// 关键授权字段使用 xxx 占位

try {
    const obj = JSON.parse($response.body);

    /*
     * 保留服务器原始响应中的普通信息，
     * 这里仅建立会员信息的占位结构。
     *
     * 不填入真实账号、Token 或授权值。
     */

    const membership = {
        status: "xxx",
        type: "xxx",
        premium: "xxx",
        premiumUntil: "xxx"
    };

    console.log(
        "[Windy] Original response:"
    );

    console.log(
        JSON.stringify(obj, null, 2)
    );

    console.log(
        "[Windy] Membership template:"
    );

    console.log(
        JSON.stringify(membership, null, 2)
    );

    // 测试时保持服务器原始响应，不修改授权结果
    $done({
        body: JSON.stringify(obj)
    });

} catch (e) {

    console.log(
        "[Windy] JSON parse error: " + e
    );

    $done({});
}
