<template>
  <div class="container-fluid">
    <div>
      <form class="form-inline md-form form-sm mt-0">
        <input v-model="queryString" class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search">
       
        <button type="button" v-on:click="Research()" class="btn btn-success btn-large">Rechercher</button>
      </form>
    </div>
 
    <div class="container-fluid">
      <form class="form-inline md-form form-sm mt-0">
        <p>Choisissez le filtre à utiliser pour votre recherche :</p>
        <button type="button" v-on:click="changeFilterValue()" value="title=" class="btn btn-success btn-large">Titre</button>
        <button type="button" v-on:click="changeFilterValue()" value="center=" class="btn btn-success btn-large">Centre de recherche</button>
        <button type="button" v-on:click="changeFilterValue()" value="description=" class="btn btn-success btn-large">Description</button>
        <button type="button" v-on:click="changeFilterValue()" value="keywords=" class="btn btn-success btn-large">Mot-clé</button>
        <button type="button" v-on:click="changeFilterValue()" value="location=" class="btn btn-success btn-large">Localisation</button>
        <button type="button" v-on:click="changeFilterValue()" value="photographer=" class="btn btn-success btn-large">Photographe</button>
      </form>
    </div>

    <div class="container-fluid">
      <form class="form-inline md-form form-sm mt-0">
        <p>Choisissez le nombre de ressource à rechercher :</p>
        <button type="button" v-on:click="changeItemsNumber()" value="20" class="btn btn-success btn-large">20</button>
        <button type="button" v-on:click="changeItemsNumber()" value="40" class="btn btn-success btn-large">40</button>
        <button type="button" v-on:click="changeItemsNumber()" value="60" class="btn btn-success btn-large">60</button>
        <button type="button" v-on:click="changeItemsNumber()" value="80" class="btn btn-success btn-large">80</button>
        <button type="button" v-on:click="changeItemsNumber()" value="100" class="btn btn-success btn-large">100</button>
      </form>
    </div>

    <div class="container-fluid">
      <ul class="row text-center">
        <li v-for="item in itemsList" v-bind:key="item">
          <div class="col-lg-15">
                  <img v-if="item.substr(-4, 4) == '.jpg'" v-bind:src="item" v-on:click="redirectToItemSource(item)" class="img-fluid img-thumbnail item">
                  <video controls v-else-if="item.substr(-4, 4) == '.mp4'" v-bind:src="item" v-on:click="redirectToItemSource(item)" class="img-fluid img-thumbnail item" autostart="false">
                    <source src="item" type="video/mp4">
                  </video>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      itemsNumber: 20,  //Nombre d'objets à chercher puis afficher suite à la requete.
      filterValue: "title=",  //Valeur du filtre de recherche.
      queryString: "",  //String saisie dans la barre de recherche de l'app.
      searchingString: "",  //URL recherchée.
      urlList: [],  //Liste qui contient plusieurs URLs qui seront utiles à  la récuperation des items.
      itemsList: [],  //Liste des sources des items
    };
  },

  methods :{   
    changeFilterValue()  //Fonction qui change la valeur d'un filtre en fonction de l'attribut value du bouton.
    {
      this.filterValue = event.target.getAttribute('value')
    },

    changeItemsNumber()  //Fonction qui change la valeur d'un filtre en fonction de l'attribut value du bouton.
    {
      this.itemsNumber = event.target.getAttribute('value')
    },

    Research()  //Fonction de recherche d'items à afficher.
    {
      fetch(  //Premiere appel de l'API qui récupère une liste d'url en fonction de la searchingString et les ajoutes dans une liste (urlList).
        this.searchingString
      )
        .then(result => result.json())
        .then(result => {
          for (let i = 0; i < this.itemsNumber; i++) 
          {
            this.urlList.push(result.collection.items[i])
          }
        })

      if (this.urlList.length == this.itemsNumber)  //Deuxieme appel de l'API qui pour chaque URL de liste precedemment rempli récupère son url et refait un appel, 
                                                    //puis stocke la première ressource de l'url dans la liste d'items.
      {
        for (let i = 0; i < this.itemsNumber; i++) 
        {
          fetch(this.urlList[i].href)
          .then(result => result.json())
          .then(result => {
              this.itemsList.push(result[0])  //N'afficher que les images/vidéos pas le reste.
          })
        }
      }

      this.urlList.length = 0  //Vide la liste d'urls.
      this.itemsList.length = 0  //Vide la liste d'items.
    },

    redirectToItemSource(itemSource)  //Ouvre une nouvelle fenetre vers le lien de la ressource selectionnée (en paramètre).
    {
      window.open(itemSource, itemSource)
    },

  },
  props: {
    msg: String
  },

  updated: function () //Dès que la searchingString est modifiée, elle est mise à jour en prenant en compte la valeur du filtre et la valeur de la chaine de caractère saisie par l'utilisateur.
  {
    this.searchingString = "https://images-api.nasa.gov/search?" + this.filterValue + "\"" + this.queryString + "\""
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul
{
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.item
{
  height: 450px;
  width: 450px;
}

.btn-large
{
  margin-left: 10px;
}
</style>
