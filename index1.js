alert("connected!");
var div = document.querySelectorAll("div");
var body = document.querySelector("body");
for(var i = 0; i < div.length; i++)
{
	div[i].addEventListener("click",function(){
	
});
}
body.addEventListener("click",function(){
	this.classList.toggle("ba");
})
