<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <a class="navbar-brand" href="/">
      <img :src="require(`../assets/nasalogo.png`)" width="100" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-text" id="navbarNavAltMarkup">
      <div class="navbar-nav text-center">
        <a class="nav-item nav-link active" href="/">
          Picture of the Day
          <span class="sr-only">(current)</span>
        </a>
        <a class="nav-item nav-link" href="/gallery">Gallerie</a>
        <a class="nav-item nav-link" href="/marsAttack">Mars-Attack</a>
        <a class="nav-item nav-link" href="/robotRock">Robot-Rock</a>
      </div>
    </div>
  </nav>
</template>

<style>
@font-face {
  font-family: "Nasalization";
  src: url("../assets/fonts/nasalization-rg.ttf");
}
h1 {
  margin-bottom: 30px;
}
p {
  margin-top: 30px;
}
a {
  font-family: "Nasalization";
}
</style>