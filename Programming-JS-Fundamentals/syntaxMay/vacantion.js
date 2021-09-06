function vacantion(group, type, day) {
    let price = 0;

    if(type === "Students" && day === "Friday") {
        price = 8.45;
    } else if(type === "Students" && day === "Saturday") {
        price = 9.80;
    } else if(type === "Students" && day === "Sunday") {
        price = 10.46;
    }  else if(type === "Business" && day === "Friday") {
        price = 10.90;
    }  else if(type === "Business" && day === "Saturday") {
        price = 15.60;
    }  else if(type === "Business" && day === "Sunday") {
        price = 16;
    }  else if(type === "Regular" && day === "Friday") {
        price = 15;
    }  else if(type === "Regular" && day === "Saturday") {
        price = 20;
    }  else if(type === "Regular" && day === "Sunday") {
        price = 22.50;
    }

    let total = price * group;
    if (type === "Students" && group >= 30) {
        total = total * 0.85;
    }else if (type === "Business" && group >= 100){
        total = total - (10* price);
    }else if (type === "Regular" && group >= 10 && group <=20){
        total = total * 0.95;
    }
console.log(`Total price: ${total.toFixed(2)}`)
}
vacantion(30,
    "Students",
    "Sunday"
    )