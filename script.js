let inp1 = document.getElementById('uah')
let dollar = document.getElementById('dollar')
let euro = document.getElementById('euro')
let pln = document.getElementById('pln')
let cursd = document.getElementById('cursd')
let curse = document.getElementById('curse')
let cursp = document.getElementById('cursp')


function calculate(){
    let a = inp1.value;
    let d = cursd.value;
    let e = curse.value;
    let p = cursp.value;
    let answer = document.getElementById('answer')
    if(dollar.checked){
        let c = Number(a)*Number(d);
        answer.innerHTML = c;
    }
    else if (euro.checked){
        let c = Number(a)*Number(e);
        answer.innerHTML = c;
    }
    else if(PLN.checked){
        let c = Number(a)*Number(p);
        answer.innerHTML = c;
    }
}

