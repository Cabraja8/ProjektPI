<template>
  <div class="upravljaj">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled Artikla</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="container my-4">
      <div class="row">
        <div class="col-4 my-4">
          <Artikl />
        </div>
        <div class="col-4 my-4">
          <Artikl />
        </div>
        <div class="col-4 my-4">
          <Artikl />
        </div>
        <div class="col-4 my-4">
          <Artikl />
        </div>
        <div class="col-4 my-4">
          <Artikl />
        </div>
        <div class="col-4 my-4">
          <Artikl />
        </div>
      </div>
    </div>
    <div id="container">
      <div class="container py-4 my-4">
        <div class="container-fluid padding py-4 my-4">
          <div class="row padding">
            <div class="col-lg-6 py-4 my-4">
              <!-- prvi dio -->
              <h1>Dodaj kategorije</h1>
              <div class="border-top border-danger w-100 mx-auto my-3"></div>
              <div class="card mt-4 py-4 md-4">
                <table class="table m-0">
                  <thead>
                    <tr>
                      <th scope="col">Naziv Kategorije</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="mb-4">
                          <input
                            type="kategorijaJela"
                            v-model="Naziv_kategorijeJela"
                            class="form-control w-80"
                            id="kategorijaJela"
                          />
                        </div>
                        <div class="mb-4">
                          <input
                            type="kategorijaPica"
                            v-model="Naziv_kategorijePica"
                            class="form-control w-80"
                            id="kategorijaPica"
                          />
                        </div>
                      </td>
                      <div class="mb-4 my-4">
                        <button
                          @click="AddKategoriju"
                          class="btn btn-success btn-sm w-80"
                        >
                          Dodaj Jelo
                        </button>
                      </div>
                      <div class="mb-4 my-4">
                        <button
                          @click="AddKategorijuPica"
                          class="btn btn-success btn-sm w-80"
                        >
                          Dodaj Piće
                        </button>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-6 py-4 my-4">
              <!-- drugi dio -->
              <h1>Prikaz kategorije</h1>
              <div class="border-top border-danger w-100 mx-auto my-3"></div>
              <div class="card mt-4 py-4 md-4">
                <table class="table m-0 pd-4 py-4 md-4">
                  <thead>
                    <tr>
                      <th scope="col">Naziv Kategorije Jela</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="KategorijaJela in KategorijeJela"
                      :key="KategorijaJela.id"
                    >
                      <td>{{ KategorijaJela.NazivJela }}</td>
                      <td>
                        <button
                          class="btn btn-danger btn-sm w-100"
                          @click="DeleteKategorijuJela(KategorijaJela.id)"
                        >
                          Briši
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <th scope="col">Naziv Kategorije Pića</th>
                  <th scope="col"></th>
                  <tr
                    v-for="KategorijePice in KategorijePica"
                    :key="KategorijePice.id"
                  >
                    <td>{{ KategorijePice.NazivPica }}</td>
                    <td>
                      <button
                        class="btn btn-danger btn-sm w-100"
                        @click="DeleteKategorijuPica(KategorijePice.id)"
                      >
                        Briši
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Dodaj Artikl</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
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
                <label for="naziv" class="form-label">Naziv Proizvoda:</label>
                <input
                  type="naziv"
                  v-model="Naziv_proizvoda"
                  class="form-control"
                  id="ime"
                />
              </div>
              <div class="form-group">
                <label for="kategorijeJela">Kategorija Jela:</label>
                <select
                  class="form-control"
                  id="kategorijeJela"
                  v-model="KategorijaJelaPrikaz"
                >
                  <option
                    v-for="KategorijaJela in KategorijeJela"
                    :key="KategorijaJela.id"
                  >
                    {{ KategorijaJela.NazivJela }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="kategorijePica">Kategorija Pića:</label>
                <select
                  class="form-control"
                  id="kategorijePica"
                  v-model="KategorijaPicaPrikaz"
                >
                  <option
                    v-for="KategorijePice in KategorijePica"
                    :key="KategorijePice.id"
                  >
                    {{ KategorijePice.NazivPica }}
                  </option>
                </select>
              </div>
              <div class="mb-4">
                <label for="sastojci" class="form-label">Sastojci:</label>
                <input type="sastojci" class="form-control" id="sastojci" />
              </div>

              <div class="mb-4">
                <label for="cijena" class="form-label">Cijena:</label>
                <input
                  type="number"
                  v-model="Cijena"
                  class="form-control"
                  id="cijena"
                />
              </div>
              <div class="mb-4">
                <label for="file" class="form-label">Slika:</label>
                <input
                  type="file"
                  v-on="Slika"
                  class="form-control"
                  id="file"
                />
              </div>

              <button
                type="button"
                class="btn btn-danger w-50"
                @click="OdustaniArtikl"
              >
                Odustani
              </button>
              <div class="mb-4"></div>
              <button
                type="button"
                class="btn btn-success w-50"
                @click="DodajArtikl"
              >
                Dodaj
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled Narudžbi</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="card mt-4 py-4 my-4 md-4">
      <table class="table m-0 pd-4 py-4 md-4">
        <thead>
          <tr>
            <th scope="col ">Ime</th>
            <th scope="col">Prezime</th>
            <th scope="col">Broj Telefona</th>
            <th scope="col">Adresa</th>
            <th scope="col">Jelo</th>
            <th scope="col">Piće</th>
            <th scope="col">Cijena</th>
            <th scope="col">Napomena</th>
            <th scope="col">Brisanje</th>
          </tr>
        </thead>
        <tbody>
          <!-- prikaz narudzbe -->
          <tr v-for="Narudzba in Narudzbe" :key="Narudzba.id">
            <td>{{ Narudzba.Ime }}</td>
            <td>{{ Narudzba.Prezime }}</td>
            <td>{{ Narudzba.BrojTelefona }}</td>
            <td>{{ Narudzba.Adresa }}</td>
            <td>{{ Narudzba.KategorijaJela }}</td>
            <td>{{ Narudzba.Jelo }}</td>
            <td>{{ Narudzba.Pice }}</td>
            <td>{{ Narudzba.Napomena }}</td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                @click="Delete(Narudzba.id)"
              >
                Obriši
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { firebase } from "@/firebase";

import Artikl from "@/components/Artikl.vue";

export default {
  name: "Upravljaj",
  data() {
    return {
      //Narudzbe
      Narudzbe: [],
      //Kategorije
      KategorijeJela: [],
      KategorijePica: [],
      Naziv_kategorijeJela: "",
      Naziv_kategorijePica: "",
      //Forma za dodavanje
      Naziv_proizvoda: "",
      KategorijaJelaPrikaz: "",
      KategorijaPicaPrikaz: "",
      Sastojci: "",
      Cijena: "",
      Slika: "",
      // input

      JeloClick: true,
      PiceClick: true,
    };
  },
  components: {
    Artikl,
  },
  mounted() {
    this.GetNarudzbe();
    this.GetKategorijuJela();
    this.GetKategorijuPica();
  },

  methods: {
    // NARUDZBE
    GetNarudzbe() {
      db.collection("Narudzbe")
        .orderBy("Date", "desc")
        .get()
        .then((query) => {
          this.Narudzbe = [];
          query.forEach((doc) => {
            this.Narudzbe.push({
              id: doc.id,
              Ime: doc.data().Ime,
              Prezime: doc.data().Prezime,
              BrojTelefona: doc.data().BrojTelefona,
              Adresa: doc.data().Adresa,
              KategorijaJela: doc.data().KategorijaJela,
              Jelo: doc.data().Jelo,
              Pice: doc.data().Pice,
              Napomena: doc.data().Napomena,
            });
          });
        });
    },

    Delete(id) {
      db.collection("Narudzbe")
        .doc(id)
        .delete()
        .then(() => {
          this.GetNarudzbe();
        });
    },

    // KATEGORIJA
    GetKategorijuJela() {
      db.collection("Jelo")
        .orderBy("Date", "desc")
        .get()
        .then((query) => {
          this.KategorijeJela = [];
          query.forEach((doc) => {
            this.KategorijeJela.push({
              id: doc.id,
              NazivJela: doc.data().NazivJela,
            });
          });
        });
    },

    AddKategoriju() {
      db.collection("Jelo")
        .doc()
        .set({
          NazivJela: this.Naziv_kategorijeJela,
          Date: Date.now(),
        })
        .then(() => {
          this.GetKategorijuJela();
        });
    },

    AddKategorijuPica() {
      db.collection("Pica")
        .doc()
        .set({
          NazivPica: this.Naziv_kategorijePica,
          Date: Date.now(),
        })
        .then(() => {
          this.GetKategorijuPica();
        });
    },

    GetKategorijuPica() {
      db.collection("Pica")
        .orderBy("Date", "desc")
        .get()
        .then((query) => {
          this.KategorijePica = [];
          query.forEach((doc) => {
            this.KategorijePica.push({
              id: doc.id,
              NazivPica: doc.data().NazivPica,
            });
          });
        });
    },

    DeleteKategorijuJela(id) {
      db.collection("Jelo")
        .doc(id)
        .delete()
        .then(() => {
          this.GetKategorijuJela();
        });
    },
    DeleteKategorijuPica(id) {
      db.collection("Pica")
        .doc(id)
        .delete()
        .then(() => {
          KategorijeJela.value = "";
          this.GetKategorijuPica();
        });
    },

    //DODAVANJE ARTIKLA

    DodajArtikl() {},
    OdustaniArtikl() {},

    //PRIKAZ ARTIKLA
  }, //  od methods
};
</script>
