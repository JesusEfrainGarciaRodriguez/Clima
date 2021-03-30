function consult() {
    const ciudad = document.getElementById('city-input');
    if (ciudad.value.length){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=12c49ef835196bec77edd6ef3fa8830c`)
        .then(response => response.json())
        .then(json => {

            //Ocultar form y aparecer card
            document.getElementById('form').classList.add('d-none');
            document.getElementById('card').classList.remove('d-none');

            //Asignar valores a card
            document.getElementById('date').innerHTML = getDate().toLocaleDateString();
            document.getElementById('day').innerHTML = getDay();
            const urlImg = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
            document.getElementById("img").src = urlImg;
            document.getElementById('temp').innerHTML = tempConverter(json.main.temp).toFixed(1);
            document.getElementById('main').innerHTML = json.weather[0].main;
            /* document.getElementById('descripcion').innerHTML = json.weather[0].description; */
            document.getElementById('city').innerHTML = `${json.name},${json.sys.country}`;
            
        })
        .catch(error => {
            back();
            window.alert('City no found');
        });
    }
    
}

function back() {
    document.getElementById('card').classList.add('d-none');
    document.getElementById('form').classList.remove('d-none');
}

function getDay() {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    /* var n = weekday[d.getDay()]; */
    var n = weekday[getDate().getDay()];
    return n;
}

function getDate() { return new Date(); }

function tempConverter(temp) { return temp - 273.15; }