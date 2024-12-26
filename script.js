const weatherOptions = document.querySelectorAll('input[name="weather"]:checked')
const temperatureOptions = document.querySelectorAll('input[name="temperature"]:checked')
const styleOptions = document.querySelectorAll('input[name="style"]:checked')

const resultDiv = document.getElementById('result')

if (weatherOptions.length === 0 || temperatureOptions.length === 0 || styleOptions.length === 0) {
    return ;
}



