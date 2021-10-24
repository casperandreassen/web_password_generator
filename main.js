let uppercase_select = true; 
let numbers_select = true; 
let special_chars_select = true; 
let number_of_chars = 10; 

document.getElementById('new_password').addEventListener('click', run);

function run() {
    new_password = main(uppercase_select, numbers_select, special_chars_select, number_of_chars);
    document.getElementById('password_output').innerHTML = new_password;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


function main(uppercase, numbers, special_characters, length) {
    let generated_password_ascii = [];
    let generated_password = "";
    if (uppercase === true && numbers === true && special_characters === true) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(33, 126)
            if (random_int == 60 || random_int == 62) {
                i -= 1
                continue
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === false && numbers === false && special_characters === false) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(97, 122)
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === true && numbers === false && special_characters === false) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(65, 122)
            if (random_int > 90 && random_int < 97) {
                i -= 1
                continue 
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === true && numbers === true && special_characters === false) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(48, 122)
            if (random_int > 90 && random_int < 97 || random_int > 57 && random_int < 65) {
                i -= 1
                continue 
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === false && numbers === true && special_characters === true) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(33, 126)
            if (random_int > 64 && random_int < 91) {
                i -= 1
                continue 
            } else if (random_int == 60 || random_int == 62) {
                i -= 1
                continue
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === false && numbers === true && special_characters === false) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(48, 122)
            if (random_int > 57 && random_int < 97) {
                i -= 1
                continue 
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === false && numbers === false && special_characters === true) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(33, 126)
            if (random_int > 47 && random_int < 58 || random_int > 64 && random_int < 91) {
                i -= 1
                continue 
            } else if (random_int == 60 || random_int == 62) {
                i -= 1 
                continue
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === true && numbers === false && special_characters === true) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(33, 126)
            if (random_int > 47 && random_int < 58) {
                i -= 1
                continue 
            } else if (random_int == 60 || random_int == 62) {
                i -= 1
                continue
            }
            generated_password_ascii.push(random_int)
        }
    }
    else if (uppercase === false && numbers === true && special_characters === true) {
        for (let i = 0; i < length; i++) {
            let random_int = getRndInteger(33, 126)
            if (random_int > 64 && random_int < 91) {
                i -= 1
                continue 
            } else if (random_int == 60 || random_int == 62) {
                i -= 1 
                continue
            }
            generated_password_ascii.push(random_int)
        }
    }
    else {
        alert("option error, try reloading the site")
    }
    for (let i = 0; i < generated_password_ascii.length; i++) {
        generated_password = generated_password.concat(String.fromCharCode(generated_password_ascii[i]))
    }
    return generated_password
}


function changeNumberOfChars(self) {
    number_of_chars = self.value
    run()
}

function changeSetting(self) {
    if (self.id == "uppercase_select") {
        uppercase_select = self.checked
    } else if (self.id == "numbers_select") {
        numbers_select = self.checked
    } else if (self.id == "special_chars_select") {
        special_chars_select = self.checked
    }
    run()
}


