// ramdom password generator

function generator(lenght, include_lowercase, include_uppercase, include_number, include_symble) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwsyz";
    const UppercaseChars = "ABCDEFGHIJKLNMOPQRSTUVWSYZ";
    const numberChars = "1234567890";
    const symbleChart = "!@#$%^&*?~\-+"
    let allowedchart = "";
    let password = "";

    allowedchart += include_lowercase ? lowercaseChars : "";
    allowedchart += include_uppercase ? UppercaseChars : "";
    allowedchart += include_number ? numberChars : "";
    allowedchart += include_symble ? symbleChart : "";

    if (lenght <= 0) {
        return `(password length must be at lease 1)`;
    }
    if (allowedchart, lenght === 0) {
        return `(At lease 1 set of charactor need to be seleted)`;
    }

    for (let i = 0; i < lenght; i++) {
        const random_index = Math.floor(Math.random() * allowedchart.length);
        password += allowedchart[random_index];
    }


    return password;
}

const password_lenght = 12;
const include_lowercase = true;
const include_uppercase = true;
const include_number = true;
const include_symble = true;

const password = generator(password_lenght,
    include_lowercase,
    include_uppercase,
    include_number,
    include_symble);

console.log(`generated password ${password}`);