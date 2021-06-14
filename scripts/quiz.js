let quizMode = 0;
const NOT_PLAYING_GAME = 0;
const SYMBOL_TO_JA_NAME = 1;
const SYMBOL_TO_EN_NAME = 2;
const JA_NAME_TO_SYMBOL = 3;
const EN_NAME_TO_SYMBOL = 4;

let answeredQuestions = [];

function getCurrentQuestionText() {
    switch(quizMode) {
        case SYMBOL_TO_JA_NAME:
        case SYMBOL_TO_EN_NAME:
            return currentElement.symbol;
        case JA_NAME_TO_SYMBOL:
            return currentElement.jp;
        case EN_NAME_TO_SYMBOL:
            return currentElement.en;
        default:
            return '';
    }
}

function appendAnsweredQuestion(playersAnswer) {
    answeredQuestions.push({
        correct: playersAnswer == getCurrentAnswerKey(),
        question: getCurrentQuestionText(),
        response: playersAnswer,
        answer: getCurrentAnswerKey()
    });
}

// 入力された文字列にコードが埋め込まれていても無害な文字列に変換する
function sanitaize(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// 正誤表を作る
function buildErrata() {
    if(answeredQuestions.length == 0) {
        document.getElementById('quiz_result_table').innerHTML = '';
        return;
    }
    let html = '';
    html += '<tr><th>正誤</th><th>問題</th><th>正解</th><th>あなたの回答</th></tr>';
    for(const result of answeredQuestions) {
        html += '<tr>';
        const className = result.correct ? 'correct_sign' : 'incorrect_sign';
        const status = result.correct ? '正解' : '不正解';
        html += `<td><span class="${className}">${status}</span></td>`;
        html += `<td>${result.question}</td>`;
        html += `<td>${result.answer}</td>`;
        html += `<td>${sanitaize(result.response)}</td>`;
        html += '</tr>';
    }
    document.getElementById('quiz_result_table').innerHTML = html;
}

// ゲームを開始
function startQuiz() {
    answeredQuestions = [];
    const selected = document.quizmenu.quizes.selectedIndex;
    quizMode = parseInt(document.quizmenu.quizes.options[selected].value);

    setElementViewVisibilityOfQuiz();
    setAnswerBoxPlaceholder();

    setDisplay('quiz', 'block');
    setDisplay('menu', 'none');
    showElementRandomly();
}

// ゲームを終了
function closeQuiz() {
    quizMode = NOT_PLAYING_GAME;
    buildErrata();

    setDisplay('quiz', 'none');
    setDisplay('menu', 'block');

    document.getElementById('explanation').innerHTML = '';
    document.getElementById('quiz_result').innerHTML = '';
    document.getElementById('quiz_result').className = '';

    setElementViewVisibility(false, true, true, true, true);
}

// 回答欄のプレースホルダを設定
function setAnswerBoxPlaceholder() {
    switch(quizMode) {
        case SYMBOL_TO_JA_NAME:
            document.quizOperationBoard.answer.placeholder = "日本語名"; break;
        case SYMBOL_TO_EN_NAME:
            document.quizOperationBoard.answer.placeholder = "英語名 (IUPAC名, 先頭大文字)"; break;
        case JA_NAME_TO_SYMBOL:
        case EN_NAME_TO_SYMBOL:
            document.quizOperationBoard.answer.placeholder = "元素記号"; break;
        default:
            quizMode = NOT_PLAYING_GAME; return;
    }
}

// 出題欄に表示する情報の設定
function setElementViewVisibilityOfQuiz() {
    switch(quizMode) {
        case SYMBOL_TO_JA_NAME:
        case SYMBOL_TO_EN_NAME:
            setElementViewVisibility(true, true, true, false, false); break;
        case JA_NAME_TO_SYMBOL:
            setElementViewVisibility(true, true, false, false, true); break;
        case EN_NAME_TO_SYMBOL:
            setElementViewVisibility(true, true, false, true, false); break;
        default:
            quizMode = NOT_PLAYING_GAME; return;
    }
}

// 解説を設定
function setExplanation(correct, element) {
    const resultClassName = correct ? "correct_sign" : "incorrect_sign";
    document.getElementById('quiz_result').className = resultClassName;
    document.getElementById('quiz_result').innerText = correct ? '正解' : '不正解';
    let msg = '';
    switch(quizMode) {
        case SYMBOL_TO_JA_NAME:
            msg = `${element.symbol} は <strong>${element.jp}</strong> (${element.en}) の元素記号です。`; break;
        case SYMBOL_TO_EN_NAME:
            msg = `${element.symbol} は <strong>${element.en}</strong> (${element.jp}) の元素記号です。`; break;
        case JA_NAME_TO_SYMBOL:
            msg = `${element.jp} (${element.en}) の元素記号は <strong>${element.symbol}</strong> です。`; break;
        case EN_NAME_TO_SYMBOL:
            msg = `${element.en} (${element.jp}) の元素記号は <strong>${element.symbol}</strong> です。`; break;
        default:
            break;
    }
    document.getElementById('explanation').innerHTML = msg;
}

// 現在のクイズのモードに対応する答えを返す
function getCurrentAnswerKey() {
    switch(quizMode) {
        case SYMBOL_TO_JA_NAME:
            return currentElement.jp;
        case SYMBOL_TO_EN_NAME:
            return currentElement.en;
        case JA_NAME_TO_SYMBOL:
        case EN_NAME_TO_SYMBOL:
            return currentElement.symbol;
        default:
            return "";
    }
}

// クイズに答える
function answerQuiz() {
    const response = document.quizOperationBoard.answer.value;
    if(response == "") {
        return;
    } else if(response == getCurrentAnswerKey()) {
        setAttribute(elementCookieKey(quizMode, currentElement), "AC");
    } else {
        setAttribute(elementCookieKey(quizMode, currentElement), "WA");
    }
    document.quizOperationBoard.answer.value = "";
    setExplanation(response == getCurrentAnswerKey(), currentElement);
    appendAnsweredQuestion(response);
    updateElementsTable();
    showElementRandomly();
}