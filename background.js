// function inject() {
// 	var elt = document.createElement("script");
// 	elt.type = "application/javascript";
// 	elt.innerHTML = "function INJECTED_BABY(){console.log('injected')}};"
// 	document.head.appendChild(elt);
// 	document.body.style.backgroundColor = 'red';
// 	console.log('Hello world!');
// }

// function HelloWorld() {
// 	console.log('Hello world');
// }

// chrome.action.onClicked.addListener((tab) => {
// 	hello;
// 	chrome.scripting.executeScript({
// 		target: { tabId: tab.id },
// 		func: HelloWorld,
// 	});
// });

function reddenPage() {
	document.body.style.backgroundColor = 'red';
	var elt = document.createElement("script");
	elt.type = "application/javascript";
	elt.innerHTML = "function INJECTED_BABY(){console.log('injected')}};"
	document.head.appendChild(elt);
	console.log('Hello world');
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});