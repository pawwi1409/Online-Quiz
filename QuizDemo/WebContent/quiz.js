function login(){
	var username=document.getElementById("userNameId").value;
	var password=document.getElementById("passwordId").value;
	var user="admin";
	var pass="admin";
	if(username==user && password==pass)
	{
		//$("#main").load("main.html");
		return true;
	}
	else
		return false;
}