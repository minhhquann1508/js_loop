//Bài 1 
const firstBtn = document.getElementById('btn-1')
firstBtn.onclick =(e) => {
    e.preventDefault();
    let inputValue = document.getElementById('input-1').value;
    calc1(inputValue);
}
function calc1 (n) {
    let content = '';
    let count = 1;
    while(n > 1) {
        n = Math.floor(n/2);
        content += `Count ${count} - Num: ${n} <br/>` 
        count++;
    }
    document.querySelector('.result-1').style.display = 'block';
    document.querySelector('.result-1').innerHTML = content;
}



//Bài 2
const secondBtn = document.getElementById('btn-2')
secondBtn.onclick = (e) => {
    e.preventDefault();
    let inputValue = document.getElementById('input-2').value;
    calc2(inputValue)
}
function calc2 (n) {
    let total = 0;
    for(let i=1;i<=n;i++) {
        total += i;
    }
    document.querySelector('.result-2').style.display = 'block';
    document.querySelector('.result-2').innerHTML = `Total : ${total}`;
}