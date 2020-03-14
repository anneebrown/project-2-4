/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// I used the study guide for this project as a basis for my code - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//variable to store the student list items as an array
const listItems = document.querySelectorAll(".student-details");
//variable to store the number of items displayed on each page
const itemsPerPage = 10; 


//showPage function to show only the items meant to be shown
function showPage(list, page) {
   let startIndex = (page*itemsPerPage) - itemsPerPage;
   let endIndex = (page*itemsPerPage);
   for (let i = 0; i < listItems.length; i +=1){
      //appending items to show to the DOM by using an if statement to select items based on their index value
      if (listItems[i] >= startIndex && listItems[i] <= endIndex){
         let ul = document.querySelector(".student-list");
         ul.appendChild(listItems[i]);
         }
    }
   }

//appendPageLinks function to create the buttons and make them functional
function appendPageLinks (list){
   let numberOfPages = listItems.length/itemsPerPage; 
   let paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination'
   let pageDiv = document.querySelector('.page')
   pageDiv.appendChild(paginationDiv);
   let ul = document.createElement('ul');
   paginationDiv.appendChild(ul);
   for (let i = 0; i < numberOfPages; i += 1){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.setAttribute("tag", "a");
      li.setAttribute("href", "#");
      li.textContent = `${i}`; 
      li.className = "active"
      li.addEventListener('click', showPage(list, i));
      for (let i = 0; i < li.length; i +=1){
        li[i].classList.remove('active');
      }
      li.e.target = li.classList.add('active');

   }
}

showPage(listItems, 1);
appendPageLinks(listItems);
