// 画面上部に指定した元素の情報を表示する
function showElement(ele) {
    document.getElementById('question_number').innerText = '第' + (answeredQuestions.length + 1) + '問';
    document.getElementById('element_view_number').innerText = 'No.' + ele.num;
    document.getElementById('element_view_symbol').innerText = ele.symbol;
    document.getElementById('element_view_en').innerText = ele.en;
    document.getElementById('element_view_jp').innerText = ele.jp;
}

// 問題番号, 元素番号, 元素記号, 英語名, 日本語名 の表示/非表示を切り替える
function setElementViewVisibility(qnum, num, sym, en, jp) {
    setDisplay('question_number', qnum ? 'inline-block' : 'none');
    setDisplay('element_view_number', num ? 'inline-block' : 'none');
    setDisplay('element_view_symbol', sym ? 'inline-block' : 'none');
    setDisplay('element_view_en', en ? 'inline-block' : 'none');
    setDisplay('element_view_jp', jp ? 'inline-block' : 'none');
    setDisplay('element_view', qnum || num || sym || en || jp ? 'block' : 'none');
}

function setDisplay(id, state) {
    document.getElementById(id).style.display = state;
}

let currentElement;
function showElementRandomly() {
    currentElement = getRandomElement();
    showElement(currentElement);
}

function showElementForLearning(num) {
    if(quizMode != NOT_PLAYING_GAME) return;
    showElement(elements[num - 1]);
}