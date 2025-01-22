// Function to create and insert the navbar
function insertNavbar() {
  // Define the HTML for the navbar
  const navbarHTML = `
  <script src="/static/particles.js"></script>
  <style type="text/css">
        .item {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease forwards;
    animation-delay: calc(var(--index) * 0.2s);
}
.games-content {
    overflow-y: auto !important;
    max-height: 500px !important;
    padding-right: 5px;
}
.game-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 10px;
    width: 100%;
    scrollbar-color: transparent transparent;
}

.game-container a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: white
;
    border: 2px solid red;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 200px;
    text-align: center;
}

.game-container a:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px var(--accent-color);
}

@media (max-width: 600px) {
    .game-container a {
        width: 100%;
    }
}
          .secret-mode {
            color: red;
            animation: secret-glow 2s infinite alternate;
        }

        @keyframes secret-glow {
            0% {
                text-shadow: 0 0 10px red;
            }
            100% {
                text-shadow: 0 0 20px red;
            }
        }
    .context-menu {
      position: absolute;
      text-align: center;
      background: lightgray;
      border: 1px solid black;
      border-radius: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, .1);
      padding: 10px;
    }

    .context-menu ul {
      padding: 0px;
      margin: 0px;
      min-width: 150px;
      list-style: none;
    }

    .context-menu ul li {
      padding-bottom: 7px;
      border-radius: 100px;
      padding-top: 7px;
      border: 1px solid black;
    }

    .context-menu ul li a {
      text-decoration: none;
      color: black;
    }

    .context-menu ul li:hover {
      background: darkgray;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
    }

  
/* Navbar Styling */
.navbar {
   overflow: hidden;
   background-color: #333;
   position: relative; /* Ensure it respects z-index */
   z-index: 100; /* Ensure it's above particles */
}

.navbar a {
   float: left;
   font-size: 16px;
   color: white;
   text-align: center;
   padding: 14px 16px;
   text-decoration: none;
   z-index: 101; /* Optional, ensures it's clickable */
}

.dropdown {
   float: left;
   position: relative; /* Ensure dropdown positions properly */
   z-index: 100;
   overflow: visible; /* Ensure dropdown content isn't clipped */
}

.dropdown .dropbtn {
   font-size: 16px;
   border: none;
   outline: none;
   padding: 14px 16px;
   background-color: inherit;
   font-family: inherit;
   z-index: 101; /* Optional */
   margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
   background-color: red;
}

.dropdown-content {
   display: none;
   position: absolute;
   background-color: #f9f9f9;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   z-index: 101; /* Ensure dropdown content is above particles */
}

.dropdown-content a {
   float: none;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
   text-align: left;
}

.dropdown-content a:hover {
   background-color: #ddd;
}

.dropdown:hover .dropdown-content {
   display: block;
}

  </style>
  <div class="navbar">
    <a href="/">Home</a>
    <a href="/g.html">Games</a>
  </div>
  `;
  const navbarDiv = document.createElement('div');
  navbarDiv.innerHTML = navbarHTML;

  // Insert the navbar at the top of the body
  const body = document.body;
  body.insertBefore(navbarDiv, body.firstChild);

}

document.addEventListener("DOMContentLoaded", () => {
    insertNavbar();  // Insert navbar after DOM is ready
});
