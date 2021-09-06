function demo(input) {
    let type = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0;

    if (type === "banana") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 2.5 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 2.7 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "apple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 1.2 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 1.25 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "orange") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 0.85 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 0.9 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "grapefruit") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 1.45 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 1.6 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "kiwi") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 2.7 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 3 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "pineapple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 5.5 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 5.6 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }
    } else if (type === "grapes") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            console.log((price = 3.85 * count).toFixed(2));
        } else if (day === "Saturday" || day === "Sunday") {
            console.log((price = 4.2 * count).toFixed(2));
        } else if (day !== "Monday" || day !== "Tuesday" || day !== "Wednesday" || day !== "Thursday" || day !== "Friday" || day !== "Saturday" || day !== "Sunday") {
            console.log(price = "error");
        }

    } else if (type !== "banana" || type !== "apple" || type !== "orange" || type !== "grapefruit" || type !== "kiwi" || type !== "pineapple" || type !== "grapes") {
        console.log(price = "error");
    }

}
demo(["apple", "Tueday", "2"])