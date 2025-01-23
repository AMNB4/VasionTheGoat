

function switchTab(tabName) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));
  document.getElementById(`${tabName}Content`).classList.add('active');

  const buttons = document.querySelectorAll('.tab button');
  buttons.forEach(button => button.classList.remove('active'));
  document.getElementById(`${tabName}Tab`).classList.add('active');
}

document.getElementById('presetsTab').addEventListener('click', () => switchTab('presets'));
document.getElementById('uploadTab').addEventListener('click', () => switchTab('upload'));
document.getElementById('urlTab').addEventListener('click', () => switchTab('url'));

document.getElementById("saveSettings").addEventListener("click", () => {
  const activeTab = document.querySelector('.tab button.active').id; 
  const bgImageInput = document.getElementById("bgImageInput");
  const bgImageUrl = document.getElementById("bgImageUrl").value;

  
  localStorage.setItem('lastTab', activeTab);
  localStorage.setItem('lastUrl', bgImageUrl);

  document.body.style.background = "url('/img/vasionss.png') no-repeat center center fixed;";

  if (activeTab === "uploadTab" && bgImageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem('bgImageData', e.target.result);
      localStorage.removeItem('bgImageUrl');
      document.body.style.backgroundImage = `url(${e.target.result})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    };
    reader.readAsDataURL(bgImageInput.files[0]);
  } else if (activeTab === "urlTab" && bgImageUrl) {
    const formattedUrl = bgImageUrl.trim();
    if (formattedUrl && (formattedUrl.startsWith('http://') || formattedUrl.startsWith('https://'))) {
      localStorage.setItem('bgImageUrl', formattedUrl);
      document.body.style.backgroundImage = `url(${formattedUrl})`;
      document.body.style.backgroundSize = "cover";
      localStorage.removeItem('bgImageData');
      document.body.style.backgroundPosition = "center";
    } else {
      alert("Please enter a valid URL starting with http:// or https://.");
    }
  }

  if (activeTab === "preset1Tab") {
    document.body.style.background = "url('/img/vasionss.png') no-repeat center center fixed;";
    localStorage.removeItem('bgImageData');
    localStorage.removeItem('bgImageUrl');
  }

  alert("Settings saved!");
});

document.addEventListener("DOMContentLoaded", () => {
  const lastTab = localStorage.getItem("lastTab");
  if (lastTab) {
    switchTab(lastTab.replace('Tab', '').toLowerCase());
  }

  const lastUrl = localStorage.getItem('lastUrl');
  const lastBgImageData = localStorage.getItem('bgImageData');

  if (lastTab === "urlTab" & lastUrl) {
    document.body.style.backgroundImage = `url(${lastUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  } else if (lastTab === "uploadTab" & lastBgImageData) {
    document.body.style.backgroundImage = `url(${lastBgImageData})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }

  if (lastTab === "presetsTab") {
    document.body.style.background = "url('/img/vasionss.png') no-repeat center center fixed;";
    localStorage.removeItem('bgImageData');
    localStorage.removeItem('bgImageUrl');
  }
});

document.getElementById("resetSettings").addEventListener("click", () => {
  if (confirm("Are you sure you want to reset all options to default? This cannot be undone.")) {
    localStorage.removeItem('lastTab');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('bgImageData');
    localStorage.removeItem('bgImageUrl');

    document.body.style.background = "url('/img/vasionss.png') no-repeat center center fixed;";

    switchTab('presets');

    alert("All settings have been reset to default.");
  }
});