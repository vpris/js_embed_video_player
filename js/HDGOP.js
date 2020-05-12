
let match, pattern = /https:\/\/onvi.cc\/\w+\/\w+\//g,
	stringer = "";
console.log("I'm Started");
let video = document.getElementsByTagName("iframe"),
	test = document.getElementsByTagName("body");
match = test[0].innerText.match(pattern), test[0].innerHTML = test[0].innerHTML.replace(pattern, " "), video[0].attributes[0].value = match[0];
for (let serials = document.getElementById("sb"), ind = 0; ind < match.length; ind++) serials.innerHTML = serials.innerHTML + '<button id="sbutton" data-ep=' + ind + '  onclick="serb(' + ind + ')">Серия ' + (ind + 1) + "</button>";

function serb(t)
{
	video[0].attributes[0].value = match[t]
}