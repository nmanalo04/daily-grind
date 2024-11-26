

/*
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    name - for ex: bubble tea
    pic - for bubbtle-stea.jpg
    alt - name of coffee in alt tag
    color - color associated with coffee
    desc - description of coffee
    day - day of the week
*/

let myDate=new Date;
let myDay=myDate.getDay();
let coffee = "";
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }
 
 myDay = parseInt(myDay);//must change to integer for switch

//myDay = 5;

switch(myDay){

   case 0:
       today="Sunday";
       coffee ={
        name: "Drip",
        pic: "images/drip.jpg",
        alt: "A pic of a Drip Coffee",
        color: "#704c49",
        day: "Sunday",
        desc: `i like Cold Brew`
    };
   break;

   case 1:
       today="Monday";
         coffee ={
             name: "Cold Brew",
             pic: "images/cold-brew.jpg",
             alt: "A pic of a Cold Brew",
             color: "brown",
             day: "Monday",
             desc: `i like Cold Brew`
         };
    break;

   case 2:
       today="Tuesday";
       coffee ={
        name: "Caramel Latte",
        pic: "images/caramel-latte.jpg",
        alt: "A pic of a Caramel Latte",
        color: "#bd6754",
        day: "Tuesday",
        desc: `i like Caramel Latte`
    };
    break;

   case 3:
       today="Wednesday";
        coffee ={
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: `i like Bubble tea`
        };
     break;

     case 4:
        today="Thursday";
         coffee ={
             name: "Frappaccino",
             pic: "images/frappaccino.jpg",
             alt: "A pic of a bubble tea",
             color: "#659571",
             day: "Thursday",
             desc: `i like Bubble tea`
         };
      break;

      case 5:
        today="Friday";
         coffee ={
             name: "Mocha",
             pic: "images/mocha.jpg",
             alt: "A pic of a Mocha",
             color: "#d8c685",
             day: "Friday",
             desc: `i like Bubble tea`
         };
      break;

      case 6:
        today="Saturday";
         coffee ={
             name: "Pumkin",
             pic: "images/pumpkin-spice-patte.jpg",
             alt: "A pic of a bubble tea",
             color: "#ea8447",
             day: "Saturday",
             desc: `i like Bubble tea`
         };
      break;

   default:
       today ="Something went wrong";
}


//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;


function coffeeTemplate(coffee){
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
}