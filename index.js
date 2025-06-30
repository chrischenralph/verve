function Menu(e) { let list = document.querySelector("ul"); 
    e.name === "menu" ? ((e.name = "close"), 
        
        list.classList.add("top-[70px]"),
        list.classList.add("opacity-100"),
        list.classList.add("bg-[#3a4750]"), 
        list.classList.add("text-center")) :
    
        ((e.name = "menu"), 
        list.classList.remove("top-[70px]"),
        list.classList.remove("opacity-100"),
        list.classList.remove("bg-[#3a4750]"),
        list.classList.add("text-center")); 
}


        

document.addEventListener("DOMContentLoaded", () => {

    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            return;
        }
        entry.target.classList.remove('in-view');
        });
    });

    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));
}); 