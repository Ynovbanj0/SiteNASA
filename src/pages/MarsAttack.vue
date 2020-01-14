<template>
  <div class="container text-center">
    <div v-if="!playing">
      <h5>
        Les règles de la pétanque cosmique sont les suivantes : vous vous verrez attribué un astéroïde ayant frôlé la Terre le 11 Novembre 2019. Choisissez dès maintenant qui sera le joueur 1 et le joueur 2. Celui qui se verra attribuer l'astéroïde qui sera passé le plus près de la Terre aura gagné. Ainsi va la pétanque cosmique. Bonne chance.
      </h5>
      <button class="btn btn-success btn-large" id="button" v-on:click="Play">Lancer le jeu !</button>
    </div>
    <div v-if="finish" >
      <h2 class>
        Le joueur {{ whoWon()[0] }} à gagné ! Félicitations mais l'essentiel est de participer. 
        Reste humble, c'est du hasard.
      </h2>
      <p>
        Le joueur {{ whoWon()[0] }} a gagné grâce a l'astéroïde {{ asterName() }} avec une distance de {{ whoWon()[1] }} km. OUF !
      </p>
      <button class="btn btn-success btn-large" id="button" v-on:click="Play">Rejouer ! La chance, c'est comme les planètes, ca tourne.</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarsAttack",

  data() {
    return {
      neos : {},
      picked1 : {},
      picked2 : {},
      random : null,
      playing : false,
      finish : false
    };
  },

  methods: {
    TestFetch() {
      // On vérifie que l'objet neos n'est pas vide pour s'assurer que le fetch a bien été réalisé
      if(this.neos == {})
        return true;
      else
        return false;
    },
    RandomNumber() {
      // Cette fonction retourne un nombre aléatoire dans la limite de la liste d'astéroids
      // On récupère le nombre d'éléments de la liste - 1
      this.max = this.neos.element_count - 1;
      // On génère un nombre aléatoire dans cet intervalle grâce à Lodash
      this.random = this.lodash.random(0, this.max);
    },
    RecupNeos() {
      // On fetch pour récupérer les données de l'A.P.I. et les stockées dans "neos"
      fetch(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-11-11&end_date=2019-11-11&api_key=CzWhkTtM5WlZWmjsRzNn4ULYz5mVCZqOu6WaVddK"
      )
        .then(result => result.json())
        .then(result => {
          this.neos = result;
        })
    },
    Play() {
      this.playing = true;
      // On test si le fetch a bien été réalisé, sinon on relance le fetch
      while(this.TestFetch() == true) {
        this.RecupNeos();
      }
      // On attribut un astéroïde a chaque joueur
      this.PickNeos()
      // On passe l'attribut "finish" a true pour afficher le résultat de la partie dans la page
      this.finish = true;
    },
    PickNeos() {
      // Stocke une première distance dans "picked1" puis une deuxieme dans "picked2" et vérifie que les distances ne sont pas les mêmes.
      // On commence donc par le joueur 1
      this.RandomNumber()
      this.picked1 = this.neos.near_earth_objects["2019-11-11"][this.random];
      // On vérifie que l'astéroïde choisi a bien une distance connue sinon on en prends un autre
      while(this.picked1 == {}) {
        this.RandomNumber()
        this.picked1 = this.neos.near_earth_objects["2019-11-11"][this.random];
      }
      // On prends un autre nombre aléatoire dans la liste pour attribuer un autre asteroïde au joueur 2
      this.RandomNumber()
      this.picked2 = this.neos.near_earth_objects["2019-11-11"][this.random];
      // On s'assure que picked2 a bien une distance et que les deux astéroïdes ne sont pas les même parce que l'égalité c'est bien en politique mais bon...
      while(this.picked1 == this.picked2 || this.picked2 == {}) {
        this.RandomNumber()
        this.picked2 = this.neos.near_earth_objects["2019-11-11"][this.random];
      }
    },
    whoWon() {
      //Compare les deux distances pour savoir qui a gagné...
      // Ici aller chercher la distance pour la comparer, car ce qui a stocké était les données de l'astéroïde
      // On retourne le numéro du joueur qui a gagné après avoir comparer les distances
      if(this.picked1.close_approach_data[0].miss_distance.kilometers > this.picked2.close_approach_data[0].miss_distance.kilometers)
        return [1, this.picked1.close_approach_data[0].miss_distance.kilometers];
      else
        return [2, this.picked2.close_approach_data[0].miss_distance.kilometers];
    },
    asterName() {
      // Ici on return le nom de l'astéroïde en fonction du gagnant
      if( this.whoWon() == 1) {
        return this.picked1.name
      } else {
        return this.picked2.name
      }
    }
  },
  mounted: function() {
    // On réalise le fetch au moment du chargement de la page
    this.RecupNeos();
  },
  props: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-large {
  margin-top: 80px;
}

h2 {
  margin-top: 80px;
  margin-bottom: 80px;
}

h5 {
  margin-top: 80px;
}

</style>
