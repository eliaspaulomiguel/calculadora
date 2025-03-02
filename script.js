const num = document.querySelectorAll('#num')
const btnnum = document.querySelectorAll('.btnnum')
const calc_display = document.querySelector('.calc-display')
const apagar = document.querySelector('#apagar')
const apagarc = document.querySelector('#apagarc')
const res = document.querySelector('#res')
const op = document.querySelectorAll('#op')

let sinal = false
num.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (calc_display.innerHTML == 0 && calc_display.innerHTML != '0.'){
            calc_display.innerHTML = ''
        }
        calc_display.innerHTML += evt.target.innerHTML
        
        
    })
})

op.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal && evt.target.innerHTML == 'x'){
            sinal = true
            calc_display.innerHTML += '*'
        }else if (!sinal) {
            sinal = true
            calc_display.innerHTML += evt.target.innerHTML
        }
        
    })
})

apagar.addEventListener('click', (evt) => {
    sinal = false
    calc_display.innerHTML = '0'
})
apagarc.addEventListener('click', (evt) => {
    sinal = false
    calc_display.innerHTML = calc_display.innerHTML.slice(0, -1)
    if (calc_display.innerHTML == ''){
        calc_display.innerHTML = '0'
    }
    
})

res.addEventListener('click', (evt) => {
    try {
        calc_display.innerHTML = eval(calc_display.innerHTML)
    if (calc_display.innerHTML == Infinity) {
        calc_display.innerHTML = "Erro"
    }
    }catch {
        calc_display.innerHTML = "Invalido"
    }
})
