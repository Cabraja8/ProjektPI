<template>
  <div class="upravljaj">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled Artikla</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
      <div class="container-fluid">
        <div class="container-fluid padding">
          <div class="row">
            <div class="col-lg-4 py-4 my-4"></div>
            <div class="col-lg-4 py-4 my-4 mx-auto">
              <div class="form-group">
                <h1 class="text-dark pt-4">Odaberi Kategoriju</h1>
                <select
                  name="Odabir3"
                  class="form-control"
                  id="KategorijePrikaz4"
                  v-model="KategorijaPrikaz4"
                >
                  <option value="Jelo">Jelo</option>
                  <option value="Piće">Piće</option>
                </select>
              </div>
              <template v-if="KategorijaPrikaz4 === 'Jelo'">
                <div class="form-group">
                  <label for="kategorijeJela">Kategorija Jela:</label>
                  <div
                    class="
                      form-group
                      container-fluid
                      padding
                      w-80
                      mx-auto
                      text-center
                    "
                  >
                    <select
                      class="form-control"
                      id="kategorijeJela"
                      v-model="KategorijaPrikaz3"
                      @click="GetArtikliJela(KategorijaPrikaz3)"
                    >
                      <option
                        v-for="KategorijaJela in KategorijeJela"
                        :key="KategorijaJela.id"
                      >
                        {{ KategorijaJela.NazivJela }}
                      </option>
                    </select>
                  </div>
                  <Artikl
                    v-for="Artikla in Artikli"
                    :key="Artikla.id"
                    :ArtiklNaziv="Artikla"
                  />
                </div>
              </template>
              <template v-if="KategorijaPrikaz4 === 'Piće'">
                <div class="form-group">
                  <label for="kategorijePica">Kategorija Pića:</label>
                  <div
                    class="
                      form-group
                      container-fluid
                      padding
                      w-80
                      mx-auto
                      text-center
                    "
                  >
                    <select
                      class="form-control"
                      id="kategorijeJela"
                      v-model="KategorijaPrikaz3"
                      @click="GetArtikliPica(KategorijaPrikaz3)"
                    >
                      <option
                        v-for="KategorijaPice in KategorijePica"
                        :key="KategorijaPice.id"
                      >
                        {{ KategorijaPice.NazivPica }}
                      </option>
                    </select>
                  </div>
                  <Artikl
                    v-for="Artikla in Artikli"
                    :key="Artikla.id"
                    :ArtiklNaziv="Artikla"
                  />
                </div>
              </template>
            </div>
            <div class="col-lg-4 py-4 my-4"></div>
          </div>
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
                      <div class="form-group">
                        <select
                          name="Odabir2"
                          class="form-control"
                          id="KategorijePrikaz2"
                          v-model="KategorijaPrikaz2"
                        >
                          <option value="Jelo">Jelo</option>
                          <option value="Piće">Piće</option>
                        </select>
                      </div>
                    </tr>
                    <tr>
                      <td>
                        <template v-if="KategorijaPrikaz2 === 'Jelo'">
                          <div class="mb-4">
                            <input
                              type="kategorijaJela"
                              v-model="Naziv_kategorijeJela"
                              class="form-control w-80"
                              id="kategorijaJela"
                            />
                          </div>
                        </template>
                        <template v-if="KategorijaPrikaz2 === 'Piće'">
                          <div class="mb-4">
                            <input
                              type="kategorijaPica"
                              v-model="Naziv_kategorijePica"
                              class="form-control w-80"
                              id="kategorijaPica"
                            />
                          </div>
                        </template>
                      </td>
                      <template v-if="KategorijaPrikaz2 === 'Jelo'">
                        <div class="mb-4 my-4">
                          <button
                            @click="AddKategoriju"
                            class="btn btn-success btn-sm w-80"
                          >
                            Dodaj Jelo
                          </button>
                        </div>
                      </template>
                      <template v-if="KategorijaPrikaz2 === 'Piće'">
                        <div class="mb-4 my-4">
                          <button
                            @click="AddKategorijuPica"
                            class="btn btn-success btn-sm w-80"
                          >
                            Dodaj Piće
                          </button>
                        </div>
                      </template>
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
              <div class="form-group">
                <div class="mb-4">
                  <label for="naziv" class="form-label">Naziv Proizvoda:</label>
                  <input
                    type="naziv"
                    v-model="Naziv"
                    class="form-control"
                    id="naziv"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="kategorijePrikaz">Kategorija:</label>
                <select
                  name="Odabir"
                  class="form-control"
                  id="kategorijePrikaz"
                  v-model="KategorijaPrikaz"
                >
                  <option value="Jelo">Jelo</option>
                  <option value="Piće">Piće</option>
                </select>
              </div>
              <template v-if="KategorijaPrikaz === 'Jelo'">
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
              </template>
              <template v-if="KategorijaPrikaz === 'Piće'">
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
              </template>
              <div class="form-group">
                <div class="mb-4">
                  <label for="sastojci" class="form-label">Sastojci:</label>
                  <input
                    type="sastojci"
                    class="form-control"
                    id="sastojci"
                    v-model="Sastojci"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="mb-4">
                  <label for="cijena" class="form-label">Cijena:</label>
                  <input
                    type="number"
                    v-model="Cijena"
                    class="form-control"
                    id="cijena"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="file" class="form-label">Slika:</label>
                <div class="mb-4">
                  <croppa :width="100" :height="100" v-model="Slika"> </croppa>
                  <!-- <input
                    type="file"
                    @change="UploadFile"
                    class="form-control"
                    id="file"
                  /> -->
                </div>
              </div>
              <div class="form-group">
                <div class="mb-4">
                  <template v-if="KategorijaPrikaz === 'Jelo'">
                    <button
                      type="button"
                      class="btn btn-danger w-20"
                      @click="OdustaniArtikl"
                    >
                      Odustani
                    </button>
                    <button
                      type="button"
                      class="btn btn-success w-20"
                      @click="DodajArtiklJelo"
                    >
                      Dodaj Jelo
                    </button>
                  </template>
                  <template v-if="KategorijaPrikaz === 'Piće'">
                    <button
                      type="button"
                      class="btn btn-danger w-20"
                      @click="OdustaniArtikl"
                    >
                      Odustani
                    </button>
                    <button
                      type="button"
                      class="btn btn-success w-20"
                      @click="DodajArtiklPice"
                    >
                      Dodaj Piće
                    </button>
                  </template>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-12 text-center mt-5">
        <h1 class="text-dark pt-4">Pregled Narudžbi</h1>
        <div class="border-top border-danger w-100 mx-auto my-3"></div>
      </div>
      <div class="col-lg-12 py-4 my-4 mx-auto">
        <table class="table m-0 pd-4 py-4 md-4 mx-auto">
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
  </div>
</template>

<script>
import { db } from "@/firebase";
import { firebase, storage } from "@/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

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
      Naziv: "",
      KategorijaPrikaz: "",
      //
      KategorijaPrikaz2: "",
      //
      KategorijaPrikaz3: "",
      //
      KategorijaPrikaz4: "",
      //
      KategorijaJelaPrikaz: "",
      KategorijaPicaPrikaz: "",
      Sastojci: "",
      Cijena: "",
      Slika: null,

      Artikli: [],
    };
  },

  components: {
    Artikl,
  },
  mounted() {
    this.GetNarudzbe();
    this.GetKategorijuJela();
    this.GetKategorijuPica();
    this.GetArtikliJela();
    this.GetArtikliPica();
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
        .doc(this.Naziv_kategorijeJela)
        .set({
          NazivJela: this.Naziv_kategorijeJela,
          Date: Date.now(),
        })
        .then(() => {
          this.GetKategorijuJela();
          this.GetArtikliJela();
        });
    },

    AddKategorijuPica() {
      db.collection("Pica")
        .doc(this.Naziv_kategorijePica)
        .set({
          NazivPica: this.Naziv_kategorijePica,
          Date: Date.now(),
        })
        .then(() => {
          this.GetKategorijuPica();
          this.GetArtikliPica();
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
          this.GetArtikliJela();
        });
    },
    DeleteKategorijuPica(id) {
      db.collection("Pica")
        .doc(id)
        .delete()
        .then(() => {
          this.GetKategorijuPica();
          this.GetArtikliPica();
        });
    },

    //DODAVANJE ARTIKLA

    DodajArtiklJelo() {
      this.Slika.generateBlob((blobData) => {
        console.log(blobData);
        let ImgName = "Jelo/" + Date.now() + ".png";
        storage
          .ref(ImgName)
          .put(blobData)
          .then((result) => {
            console.log("Uspješno");
            console.log(result);
          });
      });

      db.collection("Jelo")
        .doc(this.KategorijaJelaPrikaz)
        .collection(this.KategorijaJelaPrikaz)
        .doc(this.Naziv)
        .set({
          Naziv: this.Naziv,
          Sastojci: this.Sastojci,
          Cijena: this.Cijena,
          Slika: this.Slika,
          Date: Date.now(),
        })
        .then(() => {
          this.GetArtikliJela();
        });
    },

    DodajArtiklPice() {
      db.collection("Pica")
        .doc(this.KategorijaPicaPrikaz)
        .collection(this.KategorijaPicaPrikaz)
        .doc(this.Naziv)
        .set({
          Naziv: this.Naziv,
          Sastojci: this.Sastojci,
          Cijena: this.Cijena,
          Slika: this.Slika,
          Date: Date.now(),
        })
        .then(() => {
          this.GetArtikliPica();
        });
    },

    GetArtikliJela(KategorijaPrikaz3) {
      db.collection("Jelo")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)

        .get()
        .then((query) => {
          this.Artikli = [];
          query.forEach((doc) => {
            this.Artikli.push({
              id: doc.id,
              Naziv: doc.data().Naziv,
              Sastojci: doc.data().Sastojci,
              Cijena: doc.data().Cijena,
              Slika: doc.data().Slika,
            });
          });
        });
    },

    GetArtikliPica(KategorijaPrikaz3) {
      db.collection("Pica")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)

        .get()
        .then((query) => {
          this.Artikli = [];
          query.forEach((doc) => {
            this.Artikli.push({
              id: doc.id,
              Naziv: doc.data().Naziv,
              Sastojci: doc.data().Sastojci,
              Cijena: doc.data().Cijena,
              Slika: doc.data().Slika,
            });
          });
        });
    },

    UploadFile(imgfile) {},

    OdustaniArtikl() {},

    //PRIKAZ ARTIKLA
  }, //  od methods
};
</script>
