<template>
  <div class="Narudzbe">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>

    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Narući</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="container py-6 padding py-4 my-4">
      <div
        class="
          row
          wh-100
          align
          items-center
          justify-content
          form-container
          formcon
        "
      >
        <div class="col-sm-8 col-md-6 col-lg-4 bg-light rounded p-4 shadow">
          <div class="row justify-content-center mb-4">
            <img src="@/../public/images/logo.png" class="" />
          </div>

          <form>
            <div class="mb-4">
              <label for="ime" class="form-label">Ime:</label>
              <input type="ime" v-model="Ime" class="form-control" id="ime" />
            </div>
            <div class="mb-4">
              <label for="prezime" class="form-label">Prezime:</label>
              <input
                type="prezime"
                v-model="Prezime"
                class="form-control"
                id="prezime"
              />
            </div>
            <div class="mb-4">
              <label for="brtelefona" class="form-label">Broj Telefona:</label>
              <input
                type="brtelefona"
                v-model="BrojTelefona"
                class="form-control"
                id="brtelefona"
              />
            </div>
            <div class="mb-4">
              <label for="adresa" class="form-label">Adresa:</label>
              <input
                type="adresa"
                v-model="Adresa"
                class="form-control"
                id="Adresa"
              />
            </div>
            <div class="form-group">
              <label for="kategorije">Kategorija Proizvoda:</label>
              <select class="form-control" id="kategorije">
                <option
                  v-for="Kategorija in KategorijeJela"
                  :key="Kategorija.id"
                >
                  {{ Kategorija.Naziv }}
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label for="jelo" class="form-label">Jelo:</label>
              <input
                type="jelo"
                v-model="Jelo"
                class="form-control"
                id="jelo"
              />
            </div>
            <div class="mb-4">
              <label for="pice" class="form-label">Piće:</label>
              <input
                type="pice"
                v-model="Pice"
                class="form-control"
                id="pice"
              />
            </div>
            <div class="mb-4">
              <label for="Napomena" class="form-label">Napomena:</label>
              <input
                type="Napomena"
                v-model="Napomena"
                class="form-control"
                id="Napomena"
              />
            </div>
            <div class="mb-4">
              <label for="Iznos" class="form-label">Iznos:</label>
            </div>
            <div class="mb-4">
              <label for="Iznoskn" class="form-label"> 0,00</label>
            </div>
            <div class="mb-4">
              <label for="HRK" class="form-label">HRK</label>
            </div>
            <button type="button" @click="Odustani" class="btn btn-danger w-50">
              Odustani
            </button>
            <div class="mb-4"></div>
            <button type="button" @click="Posalji" class="btn btn-danger w-50">
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { firebase } from "@/firebase";
import Upravljaj from "@/views/Upravljaj.vue";
import Artikl from "@/components/Artikl.vue";

export default {
  name: "Narudzbe",
  data() {
    return {
      Ime: "",
      Prezime: "",
      BrojTelefona: "",
      Adresa: "",
      KategorijaJela: "",
      Jelo: "",
      Pice: "",
      Napomena: "",
    };
  },
  mounted() {
    this.GetKategoriju();
  },
  // props: ["ArtiklNaziv"],
  // props: ["KategorijaJela"],
  components: {
    Artikl,
  },
  methods: {
    Posalji() {
      db.collection("Narudzbe").doc().set({
        Ime: this.Ime,
        Prezime: this.Prezime,
        BrojTelefona: this.BrojTelefona,
        Adresa: this.Adresa,
        KategorijaJela: this.KategorijaJela,
        Jelo: this.Jelo,
        Pice: this.Pice,
        Napomena: this.Napomena,
        Date: Date.now(),
      });
    },

    Odustani() {},
  },
};
</script>

<style></style>
