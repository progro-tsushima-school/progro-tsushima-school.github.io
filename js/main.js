// js/main.js
import { members, roleLabels } from "./config.js";

const container = document.getElementById("members");

const grouped = members.reduce((acc, m) => {
  acc[m.role] = acc[m.role] || [];
  acc[m.role].push(m);
  return acc;
}, {});

Object.keys(grouped).forEach(role => {
  const section = document.createElement("section");
  section.className = "role-section";

  section.innerHTML = `
    <h2>${roleLabels[role]}</h2>
    <div class="member-grid">
      ${grouped[role].map(m => `
        <a href="${m.link}" class="member-card">
          <img src="${m.icon}" alt="${m.name}">
          <div class="name">${m.name}</div>
          <div class="id">${m.progroId}</div>
        </a>
      `).join("")}
    </div>
  `;

  container.appendChild(section);
});
