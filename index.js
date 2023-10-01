const zodiac=document.getElementById("zodiac")

const changeBackground=()=>{
   //console.log(zodiac.value) 
   //if we write zodiac.value then we will get the value that we have named in html.
   //suppose user chooses Leo then we will get value = leo becoz we have named the value as leo for Option Leo.
   const body=document.body; //accessing body to change bg color.
  
  switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor="grey";
        break;
    case "leo":
        body.style.backgroundColor="pink";
        break;
    case "taurus":
        body.style.backgroundColor="blue";
        break;
    case "gemini":
         body.style.backgroundColor="green";
        break;
    case "cancer":
        body.style.backgroundColor="aqua";
        break;
    case "virgo":
        body.style.backgroundColor="yellow";
        break;
    case "saggitarius":
        body.style.backgroundColor="violet";
        break;
    case "capricon":
        body.style.backgroundColor="beige";
        break;
    case "pisces":
        body.style.backgroundColor="brown";
        break;
    case "aquarius":
        body.style.backgroundColor="purple";
        break;
    case "scorpio":
        body.style.backgroundColor="red";
        break;
    case "libra":
        body.style.backgroundColor="aquamarine";
        break;
    default:
        body.style.backgroundColor="white";
        break;
  }
}