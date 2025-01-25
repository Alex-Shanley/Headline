
document.addEventListener("DOMContentLoaded", () => {
 
  const filterItems = document.querySelectorAll(".filter-item");
  const galleryItems = document.querySelectorAll(".gallery-item");

  
  filterItems.forEach((filter) => {
    filter.addEventListener("click", () => {
     
      filterItems.forEach((item) => item.classList.remove("active"));

      
      filter.classList.add("active");

     
      const filterValue = filter.getAttribute("data-filter");

      
      galleryItems.forEach((item) => {
       
        if (filterValue === "All" || item.classList.contains(filterValue)) {
          item.style.display = "block"; 
        } else {
          item.style.display = "none"; 
        }
      });
    });
  });
});

function showSidebar(){
  const sidebar= document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar() {
  const sidebar= document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

