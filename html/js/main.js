document.getElementById("LoadProducts").addEventListener("click",(event)=>{
event.preventDefault();
fetch ( 'https://fakestoreapi.com/products', {
    method: 'GET'
})
.then((response)=> {
    response.json();
}) .then((data)=> {
    localStorage.setItem()
})

})