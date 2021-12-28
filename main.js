const url = `https://api.openweathermap.org/data/2.5/weather?q=Sylhet&appid=c42756cbd053d1ee1148b053de09fcd6`

fetch(url)
.then(res => res.json())
.then(data => static(data))

const static = (data) => {
    const situation = data.weather[0].main;
    const cel = parseInt(data.main.temp - 273);
    getHTMLData("state",situation)
    getHTMLData("deg",cel)
    getHTMLData("city",data.name)
}







// dynamic change with search 

const btn = document.querySelector(".btn")
// const input = document.getElementById("input")


btn.addEventListener("click", () => {
    const inputValue = commonFunction("input");

    if(inputValue){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=c42756cbd053d1ee1148b053de09fcd6`;

    fetch(url)
    .then(res => res.json())
    .then(data => weatherData(data))
    }else{
        const err = document.querySelector("#error");
        err.classList.add("active")

        setTimeout(() => {
            
            err.classList.remove("active")
        }, 5000);
    }

    

    // console.log(inputValue)
})




const commonFunction = (id) => {
    const h = document.getElementById(id).value;
    return h;
}

const weatherData = (data) => {
    
    
        const situation = data.weather[0].main;
        const cel = parseInt(data.main.temp - 273);
        getHTMLData("state",situation)
        getHTMLData("deg",cel)
        getHTMLData("city",data.name)
   
}


// const get innerHTML data  by function 

const getHTMLData = (id,city) => {
    const value = document.getElementById(id)
    value.innerHTML = city;
}