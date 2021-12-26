<template>
  <div class="artikl">
    <div class="container-fluid py-4 my-4">
      <div class="card">
        <img
          :src="ArtiklNaziv.Slika"
          class="card-img-top img-thumbnail"
          alt="..."
        />
        <div class="card-body py-4 my-4">
          <h5 class="card-title">{{ ArtiklNaziv.Naziv }}</h5>
          <p class="card-text">{{ ArtiklNaziv.Sastojci }}</p>
          <p class="card-text">{{ ArtiklNaziv.Cijena }},00 HRK</p>
          <a href="#" class="btn btn-success">Uredi</a>
          <a href="#" class="btn btn-danger">Obriši</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artikl",
  props: ["ArtiklNaziv"],
};
</script>

<style></style>
