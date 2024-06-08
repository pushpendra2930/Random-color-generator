    const getColor = ()=> {

    const randomNumber = Math.floor(Math.random()*16777215);    //for converting in hex code
    const randomCode = "#" + randomNumber.toString(16);  //16 is for hex code
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color').innerText = randomCode;
    console.log(randomNumber, randomCode);
}

    document.getElementById("btn").addEventListener("click",getColor);
