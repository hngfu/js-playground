var h1 = document.createElement('h1');
h1.innerHTML = '문자열 계산기 시작하기!';
var h2 = document.createElement('h2');
h2.innerHTML = "계산기 입니다. 숫자 입력후 '=' 버튼을 입력해 주세요.";
var input = document.createElement('input');
input.id = 'in';
input.type = 'text';

document.body.appendChild(h1);
document.body.appendChild(h2);
document.body.appendChild(input);

var cal = {};
cal.question = "";
cal.cleaned = [];

cal.cleanUp = function (str) {
    var startI = 0;
    this.cleaned = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '*' || str[i] === '/' || str[i] === '+' || str[i] === '-') {
            this.cleaned.push(str.slice(startI, i));
            this.cleaned.push(str[i]);
            startI = i + 1;
        }
    }
    this.cleaned.push(str.slice(startI, str.length));
};

cal.culator = function () {
    cal.question = document.getElementById('in').value;
    this.cleanUp(cal.question);
    var num = Number(this.cleaned[0]);
    for (var i = 1; i < this.cleaned.length; i += 2) {
        switch (this.cleaned[i]) {
            case '+':
                num += Number(this.cleaned[i + 1]);
                break;
            case '-':
                num -= Number(this.cleaned[i + 1]);
                break;
            case '*':
                num *= Number(this.cleaned[i + 1]);
                break;
            case '/':
                num = Math.floor(num / Number(this.cleaned[i + 1]));
                break;
        }
    }
    document.getElementById('answer').innerHTML = num;
};