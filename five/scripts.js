window.addEventListener('load',function(e){
//attaches an event listener to the 'window' object that is triggered when the page.
	var appleGrid = document.getElementById('apple-grid');
//attaches an event listener to the applesgrid（3x3）.and that will follow the change with CSS(background-color).
	var appleList = document.getElementById('apple-list');
//attaches an grid, and that it will follow the change with CSS. (the grid on the right side).
	var appleThumbs = document.getElementById('apple-thumbs');
//attaches an even listener to the little buttom which in the lower right.
	var gridApples = document.querySelectorAll('.apple');
//return a nodeList containing all of the matching element nodes within the node’s subtrees, in document order.

	gridApples.forEach((gridApple, i) => {
    //the mouse-click work for every gridapple.
		gridApple.addEventListener('click', pickApple);
	});
//Simulates a mouse-click on apples.

	function pickApple(e) {
//the function is executed when "something" invokes it.
		var apple = e.target;
  //each apple will become the target that is triggered when the mouse.
		var appleName = apple.dataset.apple.toString();
//when you click each of applename that will converts an element to a string(element and name).
		var appleListItem = document.createElement('li');
//Creates an instance of the element for the specified tag(li).
		var ol = appleList.querySelector('ol');
//return the element that matches the specified tag.

		ol.appendChild(appleListItem);
//Adds a new child node to an element, as the last child node
		appleListItem.innerText = appleName;
//the name is showed in certain place.

		var appleThumb = apple.cloneNode(true);
//create a copy of the node and they can return.

		appleThumbs.appendChild(appleThumb);
//apecify which two onjects.


	}

});
