function demo(input){
    let hour = Number (input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18 && day === "Monday"){
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && day === "Tuesday"){
        console.log("open");
    }else if (hour >= 10 && hour <= 18 && day === "Wednesday"){
        console.log("open");
    }else if (hour >= 10 && hour <= 18 && day === "Thursday"){
        console.log("open");
    }else if (hour >= 10 && hour <= 18 && day === "Friday"){
        console.log("open");
    }else if (hour >= 10 && hour <= 18 && day === "Saturday"){
        console.log("open");
    } else {
        console.log("closed");
    }
    

}
demo(["11", "Ms"])