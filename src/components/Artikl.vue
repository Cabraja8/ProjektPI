<template>
  <div class="artikl bg-op">
    <div class="container-fluid py-4 my-4 bg-reddanger md-0 col-lg-12 mt-5">
      <div class="card container-fluid">
        <img
          :src="ArtiklNaziv.Slika"
          class="card-img-top img-thumbnail"
          alt="..."
        />
        <div class="card-body py-4 my-4 col-lg-12 md-4">
          <h4 class="text-dark pt-4">{{ ArtiklNaziv.Naziv }}</h4>
          <div class="border-top border-danger w-75 mx-auto my-3"></div>
          <p class="card-text">{{ ArtiklNaziv.Sastojci }}</p>

          <template v-if="user !== null">
            <p class="card-text">{{ ArtiklNaziv.Cijena }},00 HRK</p>
            <template v-if="ArtiklNaziv.KategorijaJela === 'Jelo'">
              <div class="form-group">
                <div class="row">
                  <div class="col">
                    <button
                      class="btn btn-success"
                      @click="EditArtiklClickJela"
                    >
                      Uredi Jelo
                    </button>
                    <button
                      class="btn btn-danger btn-12-sm"
                      @click="NaziviJela"
                    >
                      Obriši Jelo
                    </button>
                  </div>
                </div>
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
            <p class="card-text">{{ this.cijena }},00 HRK</p>
            <template v-if="ArtiklNaziv.KategorijaJela">
              <div class="form-group">
                <button
                  v-on:click="dodan = true"
                  class="btn btn-success w-50 btn-sm"
                  @click="NaruciJelo"
                >
                  Dodaj Jelo
                </button>
              </div>
            </template>
            <template v-if="ArtiklNaziv.KategorijaPica">
              <div class="form-group">
                <button class="btn btn-success w-50 btn-sm" @click="NaruciPice">
                  Dodaj Piće
                </button>
              </div>
            </template>
            <template
              v-if="!ArtiklNaziv.KategorijaPica && !ArtiklNaziv.KategorijaJela"
            >
              <div class="mx-auto container-fluid">
                <div class="row">
                  <button
                    class="
                      btn btn-danger
                      rounded
                      col-md-4 col-sm-4 col-lg-3 col-sm-4 col
                    "
                    @click="Smanji(ArtiklNaziv.id)"
                  >
                    -
                  </button>
                  <div class="col col-md-4 col-lg-6 col-sm-4">
                    <h5 class="h5">{{ this.Kolicina }}</h5>
                  </div>
                  <button
                    class="
                      btn btn-success
                      rounded
                      col-md-4 col-sm-4 col-lg-3 col-sm-4 col
                    "
                    @click="Povecaj(ArtiklNaziv.id)"
                  >
                    +
                  </button>
                </div>
              </div>
            </template>
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
      id: this.ArtiklNaziv.Naziv,
      id2: "",

      user: store.currentUser,
      Kolicina: this.ArtiklNaziv.kolicina,
      cijena: this.ArtiklNaziv.Cijena,
    };
  },

  mounted() {},
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
    NaruciJelo() {
      this.id = this.ArtiklNaziv.id;
      this.Kolicina = this.ArtiklNaziv.Kolicina;

      this.$emit(
        "jelonaruci",
        (this.narucij = {
          idjs: this.id,
          NazivJs: this.ArtiklNaziv.Naziv,
          SastojciJs: this.ArtiklNaziv.Sastojci,
          CijenaJs: this.ArtiklNaziv.Cijena,
          SlikaJs: this.ArtiklNaziv.Slika,
          KolicinaJs: this.Kolicina,
        })
      );
    },

    NaruciPice() {
      this.id2 = this.ArtiklNaziv.id;
      this.Kolicina = this.ArtiklNaziv.Kolicina;

      this.$emit(
        "picenaruci",
        (this.narucip = {
          idps: this.id2,
          NazivPs: this.ArtiklNaziv.Naziv,
          SastojciPs: this.ArtiklNaziv.Sastojci,
          CijenaPs: this.ArtiklNaziv.Cijena,
          SlikaPs: this.ArtiklNaziv.Slika,
          KolicinaPs: this.Kolicina,
        })
      );
    },

    Povecaj(id) {
      this.Kolicina++;

      this.$emit(
        "dodaj",
        (this.pov = {
          naziv: this.ArtiklNaziv.Naziv,
          Kolicina: this.Kolicina,
        })
      );

      this.cijena = parseInt(this.ArtiklNaziv.Cijena * this.Kolicina);
    },

    Smanji(id) {
      this.Kolicina--;

      this.$emit(
        "dodaj",
        (this.pov = {
          naziv: this.ArtiklNaziv.Naziv,
          Kolicina: this.Kolicina,
        })
      );

      this.cijena = parseInt(this.ArtiklNaziv.Cijena * this.Kolicina);

      if (this.Kolicina === 0) {
        this.$emit("nulaje", this.ArtiklNaziv.id);
      }
    },
  }, //od Methods
};
</script>

<style></style>
