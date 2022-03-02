
function getBotResponse(input) {

    //rock paper scissors -->>

    if (input == "rock") {
        return "paper";
    }

    else if (input == "paper") {
        return "scissors";
    }

    else if (input == "scissors") {
        return "rock";
    }

    // Simple responses -->>



    if (input == "hello") {

        return "Hello there,how are you today?!";
    }
    else if (input == "goodbye") {

        return "Where are you heading?!";
    }
    else if (input == "tell me a joke") {

        return "Chuck Norris never goes to the dentist because his teeth are unbreakable, His enemies never go to the dentist because they have no teeth";
    }

    else if (input == "another joke?") {

        return "The dinosaurs looked at Chuck Norris the wrong way once, You know what happened to them!";
    }

    else if (input == "sing me a song") {

        return "There is a treasure in this link -> https://youtu.be/eUYUrjaKxR0";
    }

    else {
        return "Try asking something else!?";
    }
}