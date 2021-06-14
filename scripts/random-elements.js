let prioritizeWrongAnswerAndUnquestioned = false; // 誤答, 未回答 を優先する

let priorityElements = Array();

function buildPriorityQuestionList() {
    const cookieMap = getMapFromCookie();
    const mode = getElementsTableMode();
    priorityElements = Array();
    for(let i = 0; i < elements.length; i++) {
        const hasKey = cookieMap.has(elementCookieKey(mode, elements[i]));
        if(hasKey) {
            const status = cookieMap.get(elementCookieKey(mode, elements[i]));
            if(status == "WA") {
                priorityElements.push(elements[i]);
            }
        } else {
            priorityElements.push(elements[i]);
        }
    }
}

// 優先する元素を1つランダムに返す
function getPriorityElements() {
    buildPriorityQuestionList();
    if(priorityElements.length == 0) {
        return getRandomElement(true);
    } else {
        return priorityElements[parseInt(Math.random() * priorityElements.length)];
    }
}

// ランダムに1つ元素の情報を返す
function getRandomElement(enforceRandom = false) {
    const prioritizeWA = document.quizmenu.prioritizeWA.checked;
    if(!enforceRandom && prioritizeWA) {
        return getPriorityElements();
    }
    let idx;
    do {
        idx = parseInt(Math.random() * 118);
    } while(currentElement != null && currentElement.num - 1 == idx);
    return elements[idx];
}