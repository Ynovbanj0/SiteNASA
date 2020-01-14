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
        <div class="col-sm mb-5" id="right">
          <img :src="require('@/assets/Rover.png')" width="900" id="rover" class="text-center" />
        </div>
      </div>
    </div>

    <div class="container-fluid text-center mt-5">
      <h1 class="mt-5 mb-5">MARS VIEWS</h1>
      <p class="mt-5 mb-5">With this buttons you can observe different point of views of Mars.</p>
      <div class="row">
        <div class="col-sm">
          <img :src="roverA.photos[this.compteurA].img_src" width="500" alt />
          <p>{{ roverA.photos[this.compteurA].earth_date }}</p>
          <button class="btn btn-danger mb-5" id="button" v-on:click="ShowA">Suivant</button>
          <div class="col-sm mb-5">
            <img :src="roverB.photos[this.compteurB].img_src" width="500" alt />
            <p>{{ roverB.photos[this.compteurB].earth_date }}</p>
            <button type="button" class="btn btn-danger mb-5" id="button" v-on:click="ShowB">Suivant</button>
          </div>
        </div>

        <div class="col-sm mb-5">
          <img :src="roverC.photos[this.compteurC].img_src" width="500" alt />
          <p>{{ roverC.photos[this.compteurC].earth_date }}</p>
          <button class="btn btn-danger mb-5" id="button" v-on:click="ShowC">Suivant</button>
          <div class="col-sm mb-5">
            <img :src="roverD.photos[this.compteurD].img_src" width="500" alt />
            <p>{{ roverD.photos[this.compteurD].earth_date }}</p>
            <button class="btn btn-danger mb-5" id="button" v-on:click="ShowD">Suivant</button>
          </div>
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
      roverA: {},
      roverB: {},
      roverC: {},
      roverD: {},
      compteurA: 0,
      compteurB: 0,
      compteurC: 0,
      compteurD: 0
    };
  },

  methods: {
    RoverRecup1() {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&page=5&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.roverA = result;
        });
    },
    RoverRecup2() {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=0&page=1&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.roverB = result;
        });
    },
    RoverRecup3() {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1500&page=1&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.roverC = result;
        });
    },
    RoverRecup4() {
      fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=5&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.roverD = result;
        });
    },
    ShowA() {
      this.compteurA += 1;
    },
    ShowB() {
      this.compteurB += 1;
    },
    ShowC() {
      this.compteurC += 1;
    },
    ShowD() {
      this.compteurD += 1;
    }
  },

  mounted: function() {
    this.RoverRecup1();
    this.RoverRecup2();
    this.RoverRecup3();
    this.RoverRecup4();
  },
  props: {
    msg: String
  }
};
</script>


<style scoped>
* {
  padding: 0;
}
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
  margin-top: 15%;
}
#rover {
  margin-left: 9%;
  margin-top: 10%;
}
#API {
  margin-top: 10%;
}
</style>
