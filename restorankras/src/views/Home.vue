<template>
  <div class="Home">
    <div
      id="carousel"
      class="carousel slide"
      data-ride="carousel"
      data
      interval="2000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active text-center">
          <img src="@/../public/images/steak.jpg" alt="" class="w-100" />
          <div class="carousel-caption">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-8 bg-sh py-3">
                  <h1>dobro došli</h1>
                  <div class="border-top border-danger w-50 mx-auto my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Šta vas zanima</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>

    <div class="container">
      <div class="row my-5">
        <div class="col-md-4 my-4">
          <img src="@/../public/images/ponude.jpg" alt="" class="w-100" />
          <h4 class="my-4">Ponude</h4>
          <p>Sve šta vas zanimna stistnite gumb za više informacija</p>
          <router-link to="@/../Narudzbe" class="btn btn-outline-danger btn-md"
            >Pogledajte ponude</router-link
          >
        </div>
        <div class="col-md-4 my-4">
          <img src="@/../public/images/takeaway.png" alt="" class="w-100" />
          <h4 class="my-4">Take Away</h4>
          <p>Uzmi si hranu za van i uživaj</p>
          <router-link to="@/../o-nama" class="btn btn-outline-danger btn-md"
            >Više informacija</router-link
          >
        </div>
        <div class="col-md-4 my-4">
          <img src="@/../public/images/coffetogo.jpg" alt="" class="w-100" />
          <h4 class="my-4">Coffe to Go</h4>
          <p>Uzmite si kavu za van uz dobro jutro</p>
          <router-link to="@/../o-nama" class="btn btn-outline-danger btn-md"
            >Više informacija</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
};
</script>
