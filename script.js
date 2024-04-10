//IEFE

(() => {
    //state variables
    let toDoListArray = [];

    //ui variables
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    //event listeners
    form.addEventListener =("submit", (e) => {
        //prevent default behaviour - page reload
        e.preventDefault();
        //give item a unique ID
        let itemId = String(Date.now());
        //get/assign input value
        let toDoItem = input.value;
        //pass ID and item into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        //clear input box
        input.value = "";
    });

    ul.addEventListener("click",(e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return; //user clicked something else
        //pass id through to function
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    //functions
    function addItemToArray(itemId, toDoItem) {
      //create an li
       const li = document.createElement('li');
       li.setAttribute("data-id", itemId);
       //add item to li
       li.innerHTML = toDoItem;
       //add li to DOM
       ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
          //add item to array as an object with an ID so we can find and delete it later
          toDoListArray.push({ itemId, toDoItem });
          console.log(toDoListArray);
    }
       
       
    function removeItemFromDOM(id) {
        //get the list item by data id
        var li = document.querySelector('[data-id="' + id + '"]');
        //remove list item
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        //create a new toDoListArray with all li's that don't match the ID
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
 
})();