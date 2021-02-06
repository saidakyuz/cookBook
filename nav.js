var navHtmlForExplore = `<nav class="navbar navbar-expand-md navbar-dark sticky-top bg-suns-color">
<a class="navbar-brand" href="html.com">
    <img src="assets/logotrans.png" width="60" height="45" alt="">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">

        <li class="nav-item">
            <a class="nav-link" href="index.html">HOME <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="All Recipes.html">ALL RECIPES</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="index.html#footer">WHO WE ARE? </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="explore.html">LET'S DECIDE </a>
        </li>


    </ul>
    <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Type here!" aria-label="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
</nav>`;


document.getElementById("navbar-content").innerHTML = navHtmlForExplore;
