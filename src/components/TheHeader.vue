<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <router-link class="navbar-brand" to="/">
      <img :src="require(`../assets/nasalogo.png`)" width="100" />
    </router-link>
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
        <router-link class="nav-item nav-link active" to="/">
          Picture of the Day
          <span class="sr-only">(current)</span>
        </router-link>
        <router-link class="nav-item nav-link" to="/gallery">Gallerie</router-link>
        <router-link class="nav-item nav-link" to="/marsAttack">Mars-Attack</router-link>
        <router-link class="nav-item nav-link" to="/robotRock">Robot-Rock</router-link>
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