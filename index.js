function formatName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay){
    if (timeOfDay === "morning"){
        return "Good morning";
    }

        else if (timeOfDay === "afternoon"){
        return "Good afternoon";
    }
        else if (timeOfDay === "evening"){
        return "Good evening";
    }
        else {
        return "Invalid Input";
    }
}

function createGreeting(firstName, lastName, timeOfDay){
    let greeting = getGreeting(timeOfDay);
    let name = formatName(firstName, lastName);
    return `${greeting}, ${name}`;
}
console.log(createGreeting('Ava','Stone','morning'));
