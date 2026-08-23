import { createProject } from "./createProject.js";

export function initProject() {
    const lista = document.querySelector(".cards__list");
    
    if(!lista) return;

    createProject(lista);
}