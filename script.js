function getvalue() {
$(document).ready(function(){
	       // $.ajax({
	       // 	type: "GET",
	       // 	url: "https://59e080373b0a4d001272d0c8.mockapi.io/registration",
	       // 	dataType: "json",
	       // 	success:function(result) {
	       // 		var txt = "";
	       // 		for(i = 0; i < result.length; i++) {
	       // 			txt += "<tr><td>" + result[i].id + "</td><td>" + result[i].name + "</td><td>" + result[i].age + "</td><td>" + result[i].gender + "</td><td>" + result[i].adharno + "</td></tr>";

	       // 		}
	       // 		$("#bodyin").html(txt);
	       // 	}
	       // })
		
		    var patientdetails = {
			name: $("#name").val(),
			age: $("#age").val(),
            gender:  $("input:radio:checked").val(),
            adharno: $("#adhar").val(),
            address: $("#address").val()
		}
		$.post("https://59e080373b0a4d001272d0c8.mockapi.io/registration",patientdetails,function(){
			$("#name").val(""),
			$("#age").val(""),
			$("input:radio:checked").val(""),
			$("#adhar").val(""),
		    $("#address").val("")
		});

   
	
});
}