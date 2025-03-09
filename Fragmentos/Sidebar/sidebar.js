function toggleSidebar(){
    const sideBar = document.getElementById("sidebar");
    let displaySidebar = window.getComputedStyle(sideBar).visibility;
    
    if (displaySidebar === "hidden") {
        sideBar.style.visibility = "visible";
    } else{
        sideBar.style.visibility = "hidden";

    }

}