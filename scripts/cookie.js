// Cookieに格納されたデータをmapにして返す
function getMapFromCookie() {
    let map = new Map();
    for(const data of document.cookie.split('; ')) {
        const splitdata = data.split('=');
        if(splitdata.length < 2) continue;
        const attr = splitdata[0];
        const val  = unescape(splitdata[1]);
        map.set(attr, val);
    }
    return map;
}

// Cookieに値を登録する
function setAttribute(key, val) {
    const presentDay = new Date();
    const dd = presentDay.getDate() + 365;
    presentDay.setDate(dd);
    const expTime = presentDay.toGMTString(); // ここまで有効期限の計算
    document.cookie = key + "=" + escape(val) + "; expires=" + expTime; // 登録 
}

// クイズのモードとそれに対応する元素のキー名を取得
function elementCookieKey(mode, element) {
    switch(mode) {
        case SYMBOL_TO_JA_NAME:
            return "s2j_" + element.symbol;
        case SYMBOL_TO_EN_NAME:
            return "s2e_" + element.symbol;
        case JA_NAME_TO_SYMBOL:
            return "j2s_" + element.symbol;
        case EN_NAME_TO_SYMBOL:
            return "e2s_" + element.symbol;
        default:
            return "";
    }
}