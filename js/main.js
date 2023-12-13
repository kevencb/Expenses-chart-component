import data from './data.json' assert {type: 'json'};

let chartContent = document.querySelector('.chart__content')

//Regla de tres para calcular el alto de cada barra dinamicamente.
/**
 * 
 *  53.3px -> 200px(altura máxima de la barra)
 *  17.45 -> x
 *  x = (17.45 * 200px) / 52.35px
 * 
 *  alturaActualpx"actualHeight = (nuevoValor * alturaMáxima"maxHeight") / máximoValor"maxValue"
 * 
 * **/

let values = [] //Almacena los valores de data: amount

data.forEach(element => {
    values.push(element.amount)
    chartContent.innerHTML += `
    <div class="chart">
        <p class="chart__worth">$${element.amount}</p>
        <p class="chart__day">${element.day}</p>
    </div>
    `
});

let maxHeight = 150;
let maxValue = Math.max(...values)

let charts = document.querySelectorAll('.chart')
charts = [...charts]

charts.forEach(bar => {
    
    let newValor = parseFloat(bar.childNodes[1].innerText.slice(1))
    
    let actualHeight = (newValor * maxHeight) / maxValue

    bar.style.height = `${actualHeight}px`

    //Destacar valor más alto
    if(newValor == maxValue){
        bar.style.backgroundColor = '#76B5BC'
    }

    bar.addEventListener('mouseover', e => {
        if(e.target.className == 'chart'){
            let worth = e.target.childNodes[1]
            worth.style.display = 'block'
        }
    })
    bar.addEventListener('mouseout', e => {
        if(e.target.className == 'chart'){
            let worth = e.target.childNodes[1]
            worth.style.display = 'none'
        }
    })
})