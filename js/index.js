function consultar() {
    var ciudad = document.getElementById('ciudad');
    if (ciudad.value.length){
        console.log(ciudad.value);
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciudad.value+'&appid=12c49ef835196bec77edd6ef3fa8830c')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            document.getElementById('form').classList.add('d-none');
            document.getElementById('card').classList.remove('d-none');
        })
        .catch(error => {
            
        });
    }
    
}

function peticion(ciudad) {
    
}

function regresar() {
    document.getElementById('card').classList.add('d-none');
    document.getElementById('form').classList.remove('d-none');
}