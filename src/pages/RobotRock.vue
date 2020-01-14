<template>
  <div>
    <div class="container-fluid text-center" id="page">
      <div class="row">
        <div class="col-sm" id="left">
          <h1>"ROLL' ROVER BETHOVEEN"</h1>
          <p class="text-justify">
            The Mars Science Laboratory and its rover centerpiece,
            Curiosity, is the most ambitious Mars mission yet flown by NASA.
            The rover landed on Mars in 2012 with a primary mission to find out
            if Mars is, or was, suitable for life.
            <br />
            <br />Another objective is to learn
            more about the Red Planet's environment. In March 2018, it celebrated 2,000 sols
            (Mars days) on the planet, making its way from Gale Crater to Aeolis Mons
            (colloquially called Mount Sharp), where it has looked at geological information embedded
            in the mountain's layers. Along the way, it also has found extensive
            evidence of past water and geological change.
          </p>
        </div>
        <div class="col-sm" id="right">
          <img :src="require('@/assets/Rover.png')" width="900" id="rover" class="text-center" />
        </div>
      </div>
    </div>

    <div class="container-fluid text-center" id="API">
      <h1>MARS VIEWS</h1>
      <p>With this buttons you can observe different point of views of Mars.</p>
      <div class="row">
        <div class="col-lg">
          <button class="btn btn-danger" id="button" v-on:click="RoverRecup">Lancer l'API</button>
        </div>
        <div class="col-lg" v-if="rover > 0">
          <h1>LIFE ON MARS ?</h1>
          <img :src="rover.photos[2].img_src" width="500" alt="rover" />
          <p>{{rover.photos[3].earth_date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RobotRock",

  data() {
    return {
      rover: {}
    };
  },

  methods: {
    RoverRecup() {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2500&rhaz=4&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.rover = result;
        });
    }
  },
  props: {
    msg: String
  }
};
</script>


<style scoped>
h1,
h2 {
  font-family: "Nasalization";
}

@font-face {
  font-family: "Nasalization";
  src: url("../assets/fonts/nasalization-rg.ttf");
}
#page {
  height: 100vh;
  width: 90vw;
}
#left {
  margin-top: 10%;
}
#rover {
  margin-left: 9%;
  margin-top: 5%;
}
#API {
  margin-top: 10%;
}
</style>
