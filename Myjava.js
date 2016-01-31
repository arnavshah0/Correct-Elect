vex.defaultOptions.className = 'vex-theme-top';
var person = vex.dialog.prompt({
	message: "What is your Zip Code?",
	placeholder: "Zip code",
	callback: function (person) {
		if (person != null) {
		    // document.getElementById("demo").innerHTML =
		    // "Hello " + person + "! How are you today?";
		    $('#demo').html("Hello " + person + "! How are you today?");
		}
	}
});
