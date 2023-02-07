const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    alert("click en el botón")
    console.log("click")
})



$(() => {
    $("button").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})