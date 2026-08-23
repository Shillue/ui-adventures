import { projects } from "./projectData.js";

export function createProject(lista) {
  if (!lista) return;

  projects.forEach((project) => {
    const li = document.createElement("li");

    li.classList.add("card");

    li.innerHTML = `
      <div class="card__img">
        <img
          src="${project.image.src}"
          alt="${project.image.alt}"
        />
      </div>

      <div class="card__content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <a
          href="${project.link}"
          class="card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mais
        </a>
      </div>
    `;

    lista.appendChild(li);
  });

  createComingSoon(lista);
}

function createComingSoon(lista) {
  const li = document.createElement("li");

  li.classList.add("card");

  li.innerHTML = `
    <div class="card__img">
      <img
        src="./assets/images/new.jpeg"
        alt="Projeto futuro"
      />
    </div>

    <div class="card__content">
      <h3>Coming Soon</h3>
      <p>Novo projeto em breve...</p>
    </div>
  `;

  lista.appendChild(li);
}