function toggleSidebar(){
    const sideBar = document.getElementById("sidebar");
    let displaySidebar = window.getComputedStyle(sideBar).display;
    
    if (displaySidebar === "block") {
        sideBar.style.display = "none";
    } else{
        sideBar.style.display = "block";

    }

}