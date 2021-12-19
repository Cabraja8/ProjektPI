<template>
  <div class="upravljaj">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled Artikla</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div id="container">
      <Artikl />
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
                            type="kategorija"
                            v-model="Naziv_kategorije"
                            class="form-control w-80"
                            id="cijena"
                          />
                        </div>
                      </td>
                      <td>
                        <button
                          @click="AddKategoriju"
                          class="btn btn-success btn-sm w-100"
                        >
                          Dodaj
                        </button>
                      </td>
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
                      <th scope="col">Naziv Kategorije</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="Kategorija in Kategorije" :key="Kategorija.id">
                      <td>{{ Kategorija.Naziv }}</td>
                      <td>
                        <button
                          class="btn btn-danger btn-sm w-100"
                          @click="DeleteKategoriju(Kategorija.id)"
                        >
                          Briši
                        </button>
                      </td>
                    </tr>
                  </tbody>
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
                <label for="kategorije">Kategorija Proizvoda:</label>
                <select
                  class="form-control"
                  v-model="Kategorija_proizvoda"
                  id="kategorije"
                >
                  <option v-for="Kategorija in Kategorije" :key="Kategorija.id">
                    {{ Kategorija.Naziv }}
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
    <div class="card mt-4 py-4 md-4">
      <table class="table m-0 pd-4 py-4 md-4">
        <thead>
          <tr>
            <th scope="col">Ime</th>
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
// import Artikl from "../components/Artikl.vue";

export default {
  name: "Upravljaj",
  data() {
    return {
      Narudzbe: [],
      Kategorije: [],
      Naziv_kategorije: "",
      Naziv_proizvoda: "",
      KategorijaProizvoda: "",
      Sastojci: "",
      Cijena: "",
      Slika: "",
    };
  },
  // components: {
  //   Artikl,
  // },
  mounted() {
    this.GetNarudzbe();
    this.GetKategoriju();
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
    GetKategoriju() {
      db.collection("Kategorije")
        .orderBy("Date", "desc")
        .get()
        .then((query) => {
          this.Kategorije = [];
          query.forEach((doc) => {
            this.Kategorije.push({
              id: doc.id,
              Naziv: doc.data().Naziv,
            });
          });
        });
    },

    AddKategoriju() {
      db.collection("Kategorije")
        .doc()
        .set({
          Naziv: this.Naziv_kategorije,
          Date: Date.now(),
        })
        .then(() => {
          this.GetKategoriju();
        });
    },
    DeleteKategoriju(id) {
      db.collection("Kategorije")
        .doc(id)
        .delete()
        .then(() => {
          this.GetKategoriju();
        });
    },

    //DODAVANJE ARTIKLA

    DodajArtikl() {},
    OdustaniArtikl() {},

    //PRIKAZ ARTIKLA
  }, //  od methods
};
</script>
