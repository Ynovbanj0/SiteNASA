<template>
  <div class="container-fluid text-center">
    <h1>PICTURE OF THE DAY</h1>
    <div class="row">
      <div class="col-sm">
        <h2>{{ picOfDay.title}}</h2>
        <img :src="picOfDay.hdurl" width="500" alt="pictureoftheday" />
        <p class="text-center text-justify">
          <i class="material-icons">add_a_photo</i>
          Photo take the : {{ picOfDay.date }}
        </p>
      </div>
      <div class="col-sm" id="right-container">
        <h1>Explanation</h1>
        <p class="text-justify">{{ picOfDay.explanation}}</p>
        <h2>Copyright</h2>
        <p>{{ picOfDay.copyright }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureDay",

  data() {
    return {
      picOfDay: {}
    };
  },

  methods: {
    PhotoRecup() {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.picOfDay = result;
        });
    }
  },
  mounted: function() {
    this.PhotoRecup();
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-family: "Nasalization";
}

@font-face {
  font-family: "Nasalization";
  src: url("../assets/fonts/nasalization-rg.ttf");
}
div {
  margin-right: 15px;
}
p {
  margin-bottom: 80px;
  font-size: 13px;
}
#right-container {
  margin-top: 80px;
}
i {
  margin-right: 15px;
  margin-top: 1px;
}
</style>
