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

          <template v-if="ArtiklNaziv.KategorijaJela === 'Jelo'">
            <a href="#" class="btn btn-success">Uredi Jelo</a>
            <button class="btn btn-danger" @click="NaziviJela">
              Obriši Jelo
            </button>
          </template>
          <template v-else>
            <a href="#" class="btn btn-success">Uredi Piće</a>
            <button class="btn btn-danger" @click="NaziviPica">
              Obriši Piće
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upravljaj from "@/views/Upravljaj.vue";

export default {
  name: "Artikl",
  props: ["ArtiklNaziv"],
  data() {
    return {
      id: "",
      id2: "",
    };
  },
  components: {
    upravljaj,
  },

  methods: {
    NaziviJela() {
      this.id = this.ArtiklNaziv.id;

      this.$emit("brisi", this.id);
    },
    NaziviPica() {
      this.id2 = this.ArtiklNaziv.id;

      this.$emit("brisip", this.id2);
    },
  },
};
</script>

<style></style>
