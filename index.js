let currentTab = "all";
const tabActive = ["bg-blue-600", "border-blue-600", "text-white"];
const tabInactive = ["bg-transparent", "text-slate-700", "border-slate-200"];
  
function switchTab(tab) {
  console.log(tab);
  const tabs = ["all", "interview", "rejected"];
  
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
}

switchTab(currentTab);
