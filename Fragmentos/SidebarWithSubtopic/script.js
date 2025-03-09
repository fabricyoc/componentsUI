function toggleSubmenu(id) {
    let submenuAtual = document.getElementById(id);
    let todosOsSubmenus = document.querySelectorAll(".submenu");

    // Fechar todos os outros submenus antes de abrir o atual
    todosOsSubmenus.forEach(submenu => {
        if (submenu.id !== id) {
            submenu.style.display = "none";
        }
    });

    // Alternar a visibilidade do submenu atual
    submenuAtual.style.display = (submenuAtual.style.display === "block") ? "none" : "block";
}
