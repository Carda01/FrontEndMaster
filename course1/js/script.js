let ans = '';

function addNumber(number, output){
    if(output === '0' && number !== '0'){
        output = '';
    }
    if(output === '0' && number === '0'){
        return output;
    }
    output += number;
    return output;
}

document.querySelector('.buttons').addEventListener('click', function(event){
    const clickedButton = event.target.innerText;
    const output = document.querySelector('.output');
    let op = '';
    switch(clickedButton){
        case 'C':
            output.innerText = 0;
            ans = '';
            break;
        case '←':
            if(output.innerText.length == 1)
                output.innerText = '0';
            else
                output.innerText = output.innerText.slice(0, -1);
            break;
        case '÷':
            op = '/';
            break;
        case 'x':
            op = '*';
            break;
        case '-':
            op = '-';
            break;
        case '+':
            op = '+';
            break;
        case '=':
            ans += output.innerText;
            output.innerText = eval(ans);
            ans = '';
            break;
        default:
            output.innerText = addNumber(clickedButton, output.innerText);
            break;
    }
    if (op != ''){
        ans = ans + output.innerText + op;
        output.innerText = '0';
    }
});