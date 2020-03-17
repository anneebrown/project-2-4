/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// I used the study guide for this project as a basis for my code - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//variable to store the student list items as an array
const listItems = document.querySelectorAll(".student-item");
//variable to store the number of items displayed on each page
const itemsPerPage = 10; 


//showPage function to show only the items meant to be shown
function showPage(list, page) {
   //sets the first item from the student list to be shown on each page
   let startIndex = (page*itemsPerPage) - itemsPerPage;
   //sets the last item from the student list to be shown on each page
   let endIndex = (page*itemsPerPage);
   //loops over the list to determine which students will be shown on the page
   for (let i = 0; i < list.length; i +=1){
      //setting which items to display ('block') and which not to display ('none')
      if (i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
         } else {
         list[i].style.display = 'none';
         }
    }
   }

//appendPageLinks function to create the buttons and make them functional
function appendPageLinks (list){
   //dynamically determines how many pages are needed
   let numberOfPages = listItems.length/itemsPerPage; 
   //creates a new div for the links
   let paginationDiv = document.createElement('div');
   //adds the pagination class to each new div
   paginationDiv.className = 'pagination';
   //selects the parent div for the newly created pagination div
   let pageDiv = document.querySelector('.page');
   //appends the new div to the DOM
   pageDiv.appendChild(paginationDiv);
   //creates an element for a list to store each link
   let ul = document.createElement('ul');
   //appends that list to the DOM, as a child for our new pagination div
   paginationDiv.appendChild(ul);
   //for loop to create the links and append them to the DOM
   for (let i = 1; i < numberOfPages+1; i += 1){
      //creates list items
      let li = document.createElement('li');
      //appends the list items to the DOM
      ul.appendChild(li);
      //creates the a tags
      let aTag = document.createElement('a');
      //appends them to the the list items
      li.appendChild(aTag);
      //sets the necessary attributes for the a tags
      aTag.setAttribute("href", "#");
      //sets the button text
      aTag.textContent = i; 
      //selects the first a tag in the list (number 1 button)
      let firstATag = document.querySelector('a');
      //selects all a tag elements and puts them into an array
      let allATags = document.querySelectorAll('a');
      //gives the active class to the first link
      firstATag.className = 'active';
      //using event bubbling and added an event listener to the li element
      li.addEventListener('click', (event) => {showPage(list, parseInt(aTag.textContent))});
     
      
   

   }
   
}

//calls both functions
showPage(listItems, 1);
appendPageLinks(listItems);
