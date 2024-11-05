function onClick(inputName) {
    const repeatuppercase = inputName.repeat(9999).toUpperCase()
    document.getElementById("output").innerHTML = "Welcome " + inputName.split('') + ' How are you doing?'
    alert("Well, Well, Well. What do you know? Its " + inputName + repeatuppercase + repeatuppercase + ' What do you know?')
}