let currentTab = "all";
const tabActive = ["bg-blue-600", "border-blue-600", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

  
function switchTab(tab) {
  console.log(tab);
  const tabs = ["all", "interview", "reject"];
  
  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    }
    else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }
  const pages = [allContainer, interviewContainer, rejectContainer];
  for (const section of pages) {
    section.classList.add("hidden");
  }
  if (tab === "all") {
    allContainer.classList.remove("hidden");
  }
  else if (tab === "interview") {
    interviewContainer.classList.remove("hidden");
  
  }
  else {
    rejectContainer.classList.remove("hidden");

  }
}

const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectedStat = document.getElementById("stat-rejected");

switchTab(currentTab);

document.getElementById("tab-all").addEventListener("click", function (event) {

  const clickedElement = event.target;
  const card = clickedElement.closest(".job-card");

  if (clickedElement.classList.contains("interview")) {
    interviewContainer.appendChild(card);
  }
  if (clickedElement.classList.contains("rejected")) {
    rejectContainer.appendChild(card);
  }
  if (clickedElement.classList.contains("delete")) {
    card.remove();
  }
};