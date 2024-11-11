function onClick(inputName) {
    const sum = add(2.145265)
    const war = "I am constantly at war with the bunnies!" 
    const repeatuppercase = inputName.repeat(9999).toUpperCase()
    document.getElementById("output").innerHTML = "The answer is: " + sum + "........... " + inputName.split('').map(item => {return item + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" }) + ' How are you doing?'
    alert("Well, Well, Well. What do you know? Its " + inputName + repeatuppercase + repeatuppercase + ' What do you know?')
}

function add(a) {
    return a + 1
}