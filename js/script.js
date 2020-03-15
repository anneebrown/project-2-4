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
   let startIndex = (page*itemsPerPage) - itemsPerPage;
   let endIndex = (page*itemsPerPage);
   for (let i = 0; i < list.length; i +=1){
      //appending items to show to the DOM by using an if statement to select items based on their index value
      if (i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
         } else {
         list[i].style.display = 'none';
         }
    }
   }

//appendPageLinks function to create the buttons and make them functional
function appendPageLinks (list){
   let numberOfPages = listItems.length/itemsPerPage; 
   let paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   let pageDiv = document.querySelector('.page');
   pageDiv.appendChild(paginationDiv);
   let ul = document.createElement('ul');
   paginationDiv.appendChild(ul);
   for (let i = 1; i < numberOfPages+1; i += 1){
      let li = document.createElement('li');
      ul.appendChild(li);
      let aTag = document.createElement('a');
      li.appendChild(aTag);
      aTag.setAttribute("href", "#");
      aTag.textContent = `${i}`; 
      let aTagList = document.querySelectorAll('a');
      
      for (let j = 0; j < aTagList.length; j +=1){
        aTagList[j].addEventListener('click', showPage(list, j));
        
      }

   }
}

showPage(listItems, 1);
appendPageLinks(listItems);
