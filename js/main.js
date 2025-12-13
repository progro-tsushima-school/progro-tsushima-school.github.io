// js/main.js
import { members, roleLabels } from "./config.js?v=2025-12-13";

const container = document.getElementById("members");

// 表示順：在籍生 → 講師 → 同窓生
const roleOrder = ["student", "teacher", "alumni"];

const grouped = members.reduce((acc, m) => {
  (acc[m.role] ||= []).push(m);
  return acc;
}, {});

function renderCards(list) {
  return `
    <div class="member-grid">
      ${list
        .map(
          (m) => `
        <a href="${m.link}" class="member-card">
          <img src="${m.icon}" alt="${m.name}">
          <div class="name">${m.name}</div>
          <!--<div class="id">${m.progroId}</div>-->
        </a>
      `
        )
        .join("")}
    </div>
  `;
}

roleOrder.forEach((role) => {
  const list = grouped[role];
  if (!list || list.length === 0) return;

  // 同窓生だけ折りたたみ
  if (role === "alumni") {
    const details = document.createElement("details");
    details.className = "role-section alumni";

    // 初期状態：閉じる（開きたいなら details.open = true;）
    // details.open = true;

    details.innerHTML = `
      <summary class="role-summary">
        ${roleLabels[role]}
        <span class="summary-hint">クリックして開閉</span>
      </summary>
      ${renderCards(list)}
    `;
    container.appendChild(details);
    return;
  }

  // それ以外は通常表示
  const section = document.createElement("section");
  section.className = "role-section";
  section.dataset.role = role;

  section.innerHTML = `
    <h2 class="role-title">${roleLabels[role]}</h2>
    ${renderCards(list)}
  `;
  container.appendChild(section);
});
