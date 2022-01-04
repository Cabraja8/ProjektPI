<template>
  <div class="artikl">
    <div class="container-fluid py-4 my-4 bg-reddanger md-0 col-lg-12 mt-5">
      <div class="card container-fluid">
        <img
          :src="ArtiklNaziv.Slika"
          class="card-img-top img-thumbnail"
          alt="..."
        />
        <div class="card-body py-4 my-4 col-lg-12 md-4">
          <h5 class="card-title">{{ ArtiklNaziv.Naziv }}</h5>
          <p class="card-text">{{ ArtiklNaziv.Sastojci }}</p>
          <p class="card-text">{{ ArtiklNaziv.Cijena }},00 HRK</p>

          <template v-if="user !== null">
            <template v-if="ArtiklNaziv.KategorijaJela === 'Jelo'">
              <div class="form-group">
                <button
                  class="btn btn-success btn-12-sm"
                  @click="EditArtiklClickJela"
                >
                  Uredi Jelo
                </button>
                <button class="btn btn-danger btn-12-sm" @click="NaziviJela">
                  Obriši Jelo
                </button>
              </div>
            </template>
            <template v-else>
              <button
                class="btn btn-success btn-12-sm"
                @click="EditArtiklClickPica"
              >
                Uredi Piće
              </button>
              <button class="btn btn-danger btn-12-sm" @click="NaziviPica">
                Obriši Piće
              </button>
            </template>
          </template>
          <template v-if="user === null">
            <div class="form-group">
              <button class="btn btn-success btn-12-sm" @click="NaruciJelo">
                Dodaj Jelo
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import upravljaj from "@/views/Upravljaj.vue";
import store from "@/store";
import Narudzbe from "@/views/Narudzbe.vue";

export default {
  name: "Artikl",
  props: ["ArtiklNaziv"],
  data() {
    return {
      id: "",
      id2: "",
      artiklisve: [],
      user: store.currentUser,
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
    EditArtiklClickJela() {
      this.id = this.ArtiklNaziv.id;

      this.$emit(
        "artikljelo",
        (this.artiklj = {
          ide: this.ArtiklNaziv.id,
          NazivJ: this.ArtiklNaziv.Naziv,
          SastojciJ: this.ArtiklNaziv.Sastojci,
          CijenaJ: this.ArtiklNaziv.Cijena,
        })
      );
    },

    EditArtiklClickPica() {
      this.id2 = this.ArtiklNaziv.id;

      this.$emit(
        "artiklpica",
        (this.artiklp = {
          ide2: this.ArtiklNaziv.id,
          NazivP: this.ArtiklNaziv.Naziv,
          SastojciP: this.ArtiklNaziv.Sastojci,
          CijenaP: this.ArtiklNaziv.Cijena,
        })
      );
    },
    NaruciJelo() {},
  }, //od Methods
};
</script>

<style></style>
