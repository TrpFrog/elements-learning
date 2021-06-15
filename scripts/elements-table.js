// クイズのモードに対応する周期表のタイトルを取得する
function getElementTableTitle(mode) {
    return `覚えた元素表 (${getQuizModeName(mode)})`;
}

// 周期表で表示する情報の種類を取得
function getElementsTableMode() {
    // クイズ中でなければプルダウンメニューで選択されているもの
    if(quizMode == NOT_PLAYING_GAME) {
        const selected = document.quizmenu.quizes.selectedIndex;
        return parseInt(document.quizmenu.quizes.options[selected].value);
    } 
    // クイズ中であればクイズの種類を返す
    else {
        return quizMode;
    }
}

const UNKNOWN_ELEMENT = 0;
const REMEMBERED_ELEMENT = 1;
const WRONG_ANSWERED_ELEMENT = 2;
function elementStatus(mode, ele, cookieMap) {
    const hasKey = cookieMap.has(elementCookieKey(mode, ele));
    if(hasKey) {
        const status = cookieMap.get(elementCookieKey(mode, ele));
        return status == 'AC' ? REMEMBERED_ELEMENT : WRONG_ANSWERED_ELEMENT;
    } else {
        return UNKNOWN_ELEMENT;
    }
}

// 周期表の内容を更新
function updateElementsTable() {

    // 周期表の二次元配列を作る
    let elements2d = Array(9);
    for(let i = 0; i < 9; i++) elements2d[i] = Array(18);
    for(let i = 0; i < elements.length; i++) {
        const ele = elements[i];
        elements2d[ele.row][ele.column] = ele;
    }

    let html = '';
    // 正解か不正解かの情報がCookieに書かれているのでそれを取得
    const cookieMap = getMapFromCookie();
    const mode = getElementsTableMode();

    for(let i = 0; i < elements2d.length; i++) {
        html += '<tr>';
        for(let j = 0; j < elements2d[i].length; j++) {
            // 周期表のその位置に元素がなければスキップ
            if(elements2d[i][j] == null) { html += '<td></td>'; continue; }

            // 正解であれば緑、不正解であればオレンジ、未挑戦ならば灰色で表示
            let className;
            switch(elementStatus(mode, elements2d[i][j], cookieMap)) {
                case UNKNOWN_ELEMENT:        className = 'unknown_element'; break;
                case REMEMBERED_ELEMENT:     className = 'remembered_element'; break;
                case WRONG_ANSWERED_ELEMENT: className = 'wrong_answered_element'; break;
                default: className = ''; break;
            }

            html += `<td class="element_table_td ${className}" 
                      onclick="showElementForLearning(${elements2d[i][j].num})">${elements2d[i][j].symbol}</td>`;
        }
        html += '</tr>';
    }
    document.getElementById('elements_table').innerHTML = html;
    document.getElementById('elements_table_title').innerText = getElementTableTitle(mode);
}