const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&units=imperial&APPID=ac910de0dc502653ff941e31a485a349';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const current = jsObject.current
        document.getElementById('currently').textContent = Math.round(jsObject.current.temp);
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('feels_like').textContent = Math.round(jsObject.current.feels_like);
        
    });

    const fcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Cozumel,mx&units=imperial&APPID=ac910de0dc502653ff941e31a485a349';
    fetch(fcastURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const fcastcurrent = jsObject.fcastcurrent
            document.getElementById('fcast').textContent = Math.round(jsObject.list[1].main.temp);
                        
        });

