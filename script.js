var header = document.getElementById("header");
var model = document.getElementById("model");

var ms = document.getElementById("model_s").addEventListener("click", ()=>{
    header.style.backgroundImage = "url(images/image-1.png)";
    model.style.color = "red";
    document.getElementById("acceleration").innerHTML = "1.9 s";
    document.getElementById("acceleration_value").innerHTML = "0-60 mph";
    document.getElementById("speed").innerHTML = "200 mph";
    document.getElementById("range").innerHTML = "396 mi";
})
var m3 = document.getElementById("model_3").addEventListener("click", ()=>{
    header.style.backgroundImage = "url(images/image-2.png)";
    model.innerHTML = "Model 3";
    model.style.color = "red";
    document.getElementById("acceleration").innerHTML = "3.1 s";
    document.getElementById("acceleration_value").innerHTML = "0-60 mph";
    document.getElementById("speed").innerHTML = "162 mph";
    document.getElementById("range").innerHTML = "358 mi";
})
var mx = document.getElementById("model_x").addEventListener("click", ()=>{
    header.style.backgroundImage = "url(images/image-3.png)";
    model.innerHTML = "Model X";
    model.style.color = "blue"
    document.getElementById("acceleration").innerHTML = "3.8 s";
    document.getElementById("acceleration_value").innerHTML = "0-60 mph";
    document.getElementById("speed").innerHTML = "155 mph";
    document.getElementById("range").innerHTML = "348 mi";
})
var my = document.getElementById("model_y").addEventListener("click", ()=>{
    header.style.backgroundImage = "url(images/image-4.png)";
    model.innerHTML = "Model Y";
    model.style.color = "white"
    document.getElementById("acceleration").innerHTML = "4.7 s";
    document.getElementById("acceleration_value").innerHTML = "0-60 mph";
    document.getElementById("speed").innerHTML = "155 mph";
    document.getElementById("range").innerHTML = "330 mi";
})