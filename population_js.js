const chart=document.getElementById("pop");
let canvas= new Chart(chart,{
    type: 'line',
    data: {
        labels: ["Argentina","Belgium","Brazil","Canada","Chile","Colombia","Czechia","France","Germany","India","Indonesia","Iran","Iraq","Italy","Japan","Malaysia","Mexico","Netherlands","Philipines","Poland","Romania","Russia","South Africa","Spain","Thailand","Turkey","UK","Ukraine","USA","Vietnam"],
        datasets:[
            {
                label: "Cases",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#EC255A",
                borderColor: "#EC255A",
                borderCapstyle: 'butt',
                borderDash:[],
                borderDashOffset: 0.0,
                borderJoinStyle:'miter',
                pointBorderColor:"#EC255A",
                pointBackgroundColor:"#000",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#EC255A",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data:[128402,39321,96311,10054,7247,30283,11452,305322,93154,253496,793,2394,2385,184615,10046,3684,44187,33344,34021,16878,9785,21155,5917,159161,8167,184615,90133,10046,619909,16725]
            },
        
        {
            label: "Deaths",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#161853",
            borderColor: "#161853",
            borderCapstyle: 'butt',
            borderDash:[],
            borderDashOffset: 0.0,
            borderJoinStyle:'miter',
            pointBorderColor:"#161853",
            pointBackgroundColor:"#000",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#161853",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:[138,27,126,35,41,96,18,225,261,8,5,30,4,316,12,190,13,82,481,34,740,5917,112,14,153,335,191,1501,206]

        },
        {
            label: "Recoveries",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#E8AF46",
            borderColor: "#E8AF46",
            borderCapstyle: 'butt',
            borderDash:[],
            borderDashOffset: 0.0,
            borderJoinStyle:'miter',
            pointBorderColor:"#E8AF46",
            pointBackgroundColor:"#000",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#E8AF46",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:[80188,11170,0,19841,958,22574,182,93878,41500,90916,385,1953,370,82803,3292,9590,12752,4694,9876,6158,25984,37201,16476,3845,51675,89173,7202,65945,26031]
        }
    ]
    }
} );
