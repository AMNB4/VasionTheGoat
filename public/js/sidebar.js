document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.createElement('div');
    sidebar.innerHTML = `
    <div class="sidebar">
        <a href="/"><img src="img/home.png" alt="Home Icon"></a>
        <a href="/g"><img src="img/games.png" alt="Game Icon"></a>
        <a href="/a"><img src="img/apps.png" alt="Grid Icon"></a>
        <a href="/s"><img src="img/settings.png" alt="Gear Icon"></a>
    </div>
    `;
    document.body.appendChild(sidebar);
});
