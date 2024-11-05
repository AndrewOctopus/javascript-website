function onClick(inputName) {
    document.getElementById("output").innerHTML = "Welcome " + inputName.repeat(99).toUpperCase() + ' How are you doing?'
    alert("Well, Well, Well. What do you know? Its " + inputName + ' What do you know?')
}