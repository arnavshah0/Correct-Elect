vex.defaultOptions.className = 'vex-theme-top';
var person = vex.dialog.prompt({
	message: "What is your Zip Code?",
	placeholder: "Zip code",
	callback: function (person) {
		if (person != null) {
		    // document.getElementById("demo").innerHTML =
		    // "Hello " + person + "! How are you today?";
		    $.get("http://crossorigin.me/http://congress.api.sunlightfoundation.com/legislators/locate?apikey=4461e9332ad1444a94ff3e8720e19386&zip="+person, function (data) {
		    	var stuff = data.results;
		    	var content = "";
		    	stuff.forEach(function (rep) {
		    		if (rep.district == null) {
		    			rep.district = "(Senator)";
		    		}
		    		content += rep.first_name + " " + rep.last_name + " " + rep.district + " " + rep.state_name + " " + ((rep.party == 'D') ? 'Democrat' : "Republican") + "<br>" + "<br>";
		    		// console.log(rep);
		    	});
		    	content += "";
		    	vex.dialog.alert(content);
		    });
		    // $('#demo').html("Hello " + person + "! How are you today?");
		}
	}
});
