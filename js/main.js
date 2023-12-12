import data from './data.json' assert {type: 'json'};

let chartContent = document.querySelector('.chart__content')

data.forEach(element => {
    chartContent.innerHTML += `
    <div class="chart">
        <div class="chart__column"></div>
        <p class="chart__day">mon</p>
    </div>
    `
    console.log(element)
});