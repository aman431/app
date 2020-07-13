let onclick = document.getElementById('b1');
onclick.addEventListener('click' , function(){
	location.reload(true);
	const name = document.getElementById('text').value;
	const pass = document.getElementById('password').value;
	if(name === "Aman" && pass === "123")
	{
		window.open("js/error.html");
	}
	else if(name === "" || pass=== "")
	{
		alert("Field should not be empty");
	}
	else
	{
//		document.open("error.html");
		alert("Try again");
	}
});


