// Letters
const letters = "abcdefghijklmnopqrstvuwxyz";

// letters-container
let letters_container = document.querySelector(".letters");

// Get Array From String
let lettersArray = Array.from(letters);

// create Letters
lettersArray.forEach((letter) => {
    // craete span
    let span = document.createElement("span");

    // add  class to span
    span.className = "letter-box";

    // creat tetxt span
    let textspan = document.createTextNode(letter);

    // add text span to span
    span.appendChild(textspan);

    // add span to leteer-container
    letters_container.appendChild(span);
});

// Object Of Words + Categories (to accwss easy of thats words and section)
const words = {
    programming: [
        "php",
        "javascript",
        "go",
        "scala",
        "fortran",
        "r",
        "mysql",
        "python",
    ],
    movies: [
        "Prestige",
        "Inception",
        "Parasite",
        "Interstellar",
        "Whiplash",
        "Memento",
        "Coco",
        "Up",
    ],
    people: [
        "Albert Einstein",
        "Hitchcock",
        "Alexander",
        "Cleopatra",
        "Mahatma Ghandi",
    ],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

//Get Random value and property

// get sections
let section = Object.keys(words);

// get Index Random section
let IndexRandomSection = Math.floor(Math.random() * section.length);

// get Random section
let RandomSection = section[IndexRandomSection];

// thats section inside the object
let RandomProperties = words[RandomSection];

//get Index Random propertry
let IndexRandompropertry = Math.floor(Math.random() * RandomProperties.length);

//get Random propertry fromRandomProperties
let Randompropertry = RandomProperties[IndexRandompropertry];

// showing section in page
document.querySelector(".catagory span").innerHTML = RandomSection;

// Convert this word to array
let ArrayofWord = Array.from(Randompropertry);

//select letters-guess
let lettersguess = document.querySelector(".letters-guess");

// Looping in ArrayofWords
ArrayofWord.forEach((letter) => {
    // Create span to store letter in span
    let spanletter = document.createElement("span");

    // if exist space
    if (letter === " ") {
        // add class to spanletter
        spanletter.className = "with-space";
    }

    // add span to Element
    lettersguess.appendChild(spanletter);
});

// all span in letters-guess
let guess_span = document.querySelectorAll(".letters-guess span");

// wronge shossen
let wronge = 0;

// select hangman-draw
let thedraw = document.querySelector(".hangman-draw");

// add event click to the letter
document.addEventListener("click", (e) => {
    // Set Choose Status
    let status = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");

        // Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The Chosen Word
        let theChosenWord = Array.from(Randompropertry.toLowerCase());

        theChosenWord.forEach((wordLetter, WordIndex) => {
            // If The Clicked Letter Equal To One Of The Chosen Word Letter
            if (theClickedLetter == wordLetter) {
                status = true;
                // Loop On All Guess Spans
                guess_span.forEach((span, spanIndex) => {
                    if (WordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                        span.classList.add("final");
                    }
                });
            }
        });
        // outside Looop

        // increment wrong
        if (status != true) {
            wronge++;
            thedraw.classList.add(`wrong-${wronge}`);
            if (wronge == 8) {
                letters_container.classList.add("finished");
                swal({
                    text: "Game Over!",
                });
            }
        } else if (
            ArrayofWord.length ==
            document.querySelectorAll(".letters-guess span.final").length
        ) {
            swal({
                text: "congratulations!",
            });
            letters_container.classList.add("finished");
        }
    }
});