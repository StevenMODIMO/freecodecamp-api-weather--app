window.addEventListener('load', event => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function showPosition(position)  {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude; 
            console.log(latitude, longitude)


            const fetchAPI = fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`)
            .then( res => {
               return res.json()
            }).then( data => {
                const image = document.getElementById('image');
                image.src = `${data.weather[0].icon}`

                const temp = document.getElementById('temp');
                temp.textContent = `Temperature: ${data.main['temp']}`;

                const location = document.getElementById('location');
                location.textContent = `Your Location: ${data.name}, ${data.sys['country']}`

                const condition = document.getElementById('condition');
                condition.textContent = `Condition: ${data.weather[0].main}`
                console.log(data)
            })
            console.log(fetchAPI)
            
        }, error => {
            console.log(error.code)
        })
    }  else { 
        console.log('Not Supported')
    }
})