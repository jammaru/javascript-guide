// ナビゲーションのスムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// インタラクティブデモ - 色変更機能
const changeColorBtn = document.getElementById('changeColorBtn');
const colorBox = document.getElementById('colorBox');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
});

// コードブロックのハイライト
document.addEventListener('DOMContentLoaded', (event) => {
    Prism.highlightAll();
});

// スクロールアニメーション
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// 初期ロード時とスクロール時にアニメーションを適用
window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// モバイルナビゲーションの切り替え
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰';
menuToggle.classList.add('menu-toggle');
document.querySelector('nav .container').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    const navUl = document.querySelector('nav ul');
    navUl.classList.toggle('show');
});

// コードサンプルの「実行」機能
function createRunButton(codeBlock) {
    const runButton = document.createElement('button');
    runButton.textContent = 'Run';
    runButton.classList.add('run-code-btn');
    codeBlock.parentNode.insertBefore(runButton, codeBlock.nextSibling);

    runButton.addEventListener('click', () => {
        try {
            const code = codeBlock.textContent;
            const result = eval(code);
            alert(`実行結果: ${result}`);
        } catch (error) {
            alert(`エラーが発生しました: ${error.message}`);
        }
    });
}

document.querySelectorAll('pre code.language-javascript').forEach(createRunButton);

// ページ読み込み完了時のローディングアニメーション
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
    document.body.classList.add('loaded');
});

// スクロールトップボタン
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 簡単なJavaScriptクイズ
const quizContainer = document.getElementById('quiz');
const quizQuestions = [
    {
        question: 'JavaScriptで変数を宣言するキーワードは？',
        answers: ['var', 'let', 'const', 'すべて正解'],
        correct: 3
    },
    {
        question: '配列の長さを取得するプロパティは？',
        answers: ['size', 'length', 'count', 'num'],
        correct: 1
    }
];

function renderQuiz() {
    let quizHTML = '<h3>JavaScriptクイズ</h3>';
    quizQuestions.forEach((q, index) => {
        quizHTML += `<p>${index + 1}. ${q.question}</p>`;
        q.answers.forEach((answer, ansIndex) => {
            quizHTML += `<label><input type="radio" name="q${index}" value="${ansIndex}"> ${answer}</label><br>`;
        });
    });
    quizHTML += '<button id="submitQuiz">回答する</button>';
    quizContainer.innerHTML = quizHTML;

    document.getElementById('submitQuiz').addEventListener('click', checkQuiz);
}

function checkQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correct) {
            score++;
        }
    });
    alert(`${quizQuestions.length}問中${score}問正解です！`);
}

if (quizContainer) {
    renderQuiz();
}