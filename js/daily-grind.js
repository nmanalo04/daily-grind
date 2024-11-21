

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

switch(myDay){

   case 0:
       today="Sunday";
   break;

   case 1:
       today="Monday";
    break;

   case 2:
       today="Tuesday";
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

   default:
       today ="Something went wrong";
}


alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee){
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
}