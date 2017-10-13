$(document).ready(function(){
	       $.ajax({
	       	type: "GET",
	       	url: "https://59e080373b0a4d001272d0c8.mockapi.io/registration",
	       	dataType: "json",
	       	success:function(result) {
	       		var txt = "";
	       		for(i = 0; i < result.length; i++) {
	       			var sno = 0;
	       			sno =1+i;
	       			txt += "<tr><td>" + sno + "</td><td>" + result[i].name + "</td><td>" + result[i].age + "</td><td>" + result[i].gender + "</td><td>" + result[i].adharno + "</td></tr>";
                        
	       		}
	       		$("#bodyin").html(txt);
	       	}
	       })
	});