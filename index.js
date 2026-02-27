document.addEventListener("DOMContentLoaded", function () {
  switchTab("all");
  updateStats();
});

// ================= TAB SWITCH =================
function switchTab(tab) {

  const sections = ["all", "interview", "reject"];

  sections.forEach(sec => {
    document.getElementById(sec + "-container").classList.add("hidden");
  });

  document.getElementById(tab + "-container").classList.remove("hidden");

  // Tab Design
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-transparent", "text-black");
  });

  const activeBtn = document.getElementById("tab-" + tab);
  activeBtn.classList.remove("bg-transparent", "text-black");
  activeBtn.classList.add("bg-blue-600", "text-white");
}



// ================= GLOBAL CLICK EVENT =================
document.addEventListener("click", function (e) {

  const card = e.target.closest(".job-card");
  if (!card) return;

  const badge = card.querySelector(".status");
  const isAllTabCard = card.closest("#all-container");

  // ===== INTERVIEW =====
  if (e.target.classList.contains("interview")) {

    updateBadge(badge, "INTERVIEW", "green");

    if (isAllTabCard) {
      moveClone(card, "interview-container", "reject-container");
    } else {
      moveBetweenTabs(card, "interview-container", "reject-container");
    }

    updateStats();
  }

  // ===== REJECT =====
  if (e.target.classList.contains("rejected")) {

    updateBadge(badge, "REJECTED", "red");

    if (isAllTabCard) {
      moveClone(card, "reject-container", "interview-container");
    } else {
      moveBetweenTabs(card, "reject-container", "interview-container");
    }

    updateStats();
  }

  // ===== DELETE =====
  if (e.target.closest(".delete")) {

    const parentSection = card.parentElement.id;

    if (parentSection === "all-container") {
      // delete everywhere
      deleteEverywhere(card);
    } else {
      card.remove();
    }

    updateStats();
  }

});



// ================= BADGE FUNCTION =================
function updateBadge(badge, text, color) {

  if (color === "green") {
    badge.className = "status inline-block mt-3 px-3 py-1 text-xs font-semibold rounded bg-green-100 text-green-700";
  } else {
    badge.className = "status inline-block mt-3 px-3 py-1 text-xs font-semibold rounded bg-red-100 text-red-700";
  }

  badge.textContent = text;
}



// ================= ADD FROM ALL TAB =================
function moveClone(originalCard, targetId, removeFromId) {

  const target = document.getElementById(targetId);
  const removeFrom = document.getElementById(removeFromId);

  // remove from opposite tab
  removeDuplicate(originalCard, removeFrom);

  // prevent duplicate
  if (existsIn(originalCard, target)) return;

  const clone = originalCard.cloneNode(true);
  target.appendChild(clone);
}






// ================= DELETE FROM ALL =================
function deleteEverywhere(originalCard) {

  const title = originalCard.querySelector("h3").textContent;

  ["all-container", "interview-container", "reject-container"].forEach(id => {

    document.querySelectorAll("#" + id + " .job-card").forEach(card => {
      if (card.querySelector("h3").textContent === title) {
        card.remove();
      }
    });

  });
}



// ================= HELPERS =================
function existsIn(card, container) {

  const title = card.querySelector("h3").textContent;

  return Array.from(container.querySelectorAll(".job-card"))
    .some(c => c.querySelector("h3").textContent === title);
}

function removeDuplicate(card, container) {

  const title = card.querySelector("h3").textContent;

  container.querySelectorAll(".job-card").forEach(c => {
    if (c.querySelector("h3").textContent === title) {
      c.remove();
    }
  });
}



// ================= STATS =================
function updateStats() {

  const total = document.querySelectorAll("#all-container .job-card").length;
  const interview = document.querySelectorAll("#interview-container .job-card").length;
  const rejected = document.querySelectorAll("#reject-container .job-card").length;

  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-interview").textContent = interview;
  document.getElementById("stat-rejected").textContent = rejected;
}