<template>
  <div class="upravljaj">
    <div>
      <div class="col-12 text-center mt-5">
        <h1 class="text-dark pt-4">Pregled Artikla</h1>
        <div class="border-top border-danger w-100 mx-auto my-3"></div>
        <div class="container-fluid">
          <div class="container-fluid padding">
            <div class="row">
              <div class="col-lg-6 py-4 my-4 mx-auto md-4">
                <div class="form-group">
                  <h1 class="text-dark pt-4">Odaberi Kategoriju</h1>
                  <select
                    name="Odabir3"
                    class="form-control w-50 mx-auto"
                    id="KategorijePrikaz4"
                    v-model="KategorijaPrikaz4"
                  >
                    <option value="Jelo" @click="Clear">Jelo</option>
                    <option value="Piće" @click="Clear">Piće</option>
                  </select>
                  <div
                    class="border-top border-danger w-100 mx-auto my-3"
                  ></div>

                  <template v-if="KategorijaPrikaz4 === 'Jelo'">
                    <label for="kategorijeJela">Kategorija Jela:</label>
                    <div
                      class="
                        form-group
                        container-fluid
                        padding
                        w-50
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
                  </template>
                  <template v-if="KategorijaPrikaz4 === 'Piće'">
                    <label for="kategorijePica">Kategorija Pića:</label>
                    <div
                      class="
                        form-group
                        container-fluid
                        padding
                        w-50
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
                  </template>
                </div>
              </div>
              <div class="container mt-5">
                <div class="col-12 py-4 my-4 mx-auto md-3">
                  <template v-if="KategorijaPrikaz4 === 'Jelo'">
                    <div
                      class="border-top border-danger w-100 mx-auto my-3"
                    ></div>
                    <div class="row">
                      <Artikl
                        class="col-lg-3"
                        v-for="Artikla in Artikli"
                        :key="Artikla.id"
                        :ArtiklNaziv="Artikla"
                        v-on:brisi="DeleteArtiklJela($event)"
                        v-on:artikljelo="UrediArtiklJelo($event)"
                      />
                    </div>
                    <div
                      class="border-top border-danger w-100 mx-auto my-3"
                    ></div>
                  </template>
                </div>
              </div>
              <div class="container mt-5">
                <div class="col-12 py-4 my-4 mx-auto md-3">
                  <template v-if="KategorijaPrikaz4 === 'Piće'">
                    <div
                      class="border-top border-danger w-100 mx-auto my-3"
                    ></div>
                    <div class="row">
                      <Artikl
                        class="col-lg-3"
                        v-for="Artikla in Artikli"
                        :key="Artikla.id"
                        :ArtiklNaziv="Artikla"
                        v-on:brisip="DeleteArtiklPica($event)"
                        v-on:artiklpica="UredArtiklPice($event)"
                      />
                    </div>
                    <div
                      class="border-top border-danger w-100 mx-auto my-3"
                    ></div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- UREDI ARTIKL --><br />
      <div v-show="showEdit">
        <div id="container">
          <h1 class="text-dark pt-4">Uredi Artikl</h1>
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
              <div
                class="col-sm-8 col-md-6 col-lg-4 bg-light rounded p-4 shadow"
              >
                <div class="row justify-content-center mb-4">
                  <img src="@/../public/images/logo.png" class="" />
                </div>

                <form>
                  <div class="form-group">
                    <div class="mb-4">
                      <label for="naziv2" class="form-label"
                        >Naziv Proizvoda:</label
                      >
                      <input
                        type="naziv2"
                        class="form-control"
                        id="naziv2"
                        required
                        v-model="NazivEdit"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="mb-4">
                      <label for="sastojci2" class="form-label"
                        >Sastojci:</label
                      >
                      <input
                        type="sastojci2"
                        class="form-control"
                        id="sastojci2"
                        required
                        v-model="SastojciEdit"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="mb-4">
                      <label for="cijena2" class="form-label">Cijena:</label>
                      <input
                        type="number"
                        class="form-control"
                        id="cijena2"
                        required
                        v-model="CijenaEdit"
                      />
                    </div>
                  </div>
                  <template v-if="KategorijaPrikaz4 === 'Jelo'">
                    <div class="form-group">
                      <div class="mb-4">
                        <button
                          type="button"
                          class="btn btn-danger w-20"
                          @click="ArtiklOdustaniEdit"
                        >
                          Odustani
                        </button>
                        <button
                          type="button"
                          class="btn btn-success w-20"
                          @click="ArtiklUrediJelo(idedit)"
                        >
                          Uredi Jelo
                        </button>
                      </div>
                    </div>
                  </template>
                  <template v-if="KategorijaPrikaz4 === 'Piće'">
                    <div class="form-group">
                      <div class="mb-4">
                        <button
                          type="button"
                          class="btn btn-danger w-20"
                          @click="ArtiklOdustaniEdit"
                        >
                          Odustani
                        </button>
                        <button
                          type="button"
                          class="btn btn-success w-20"
                          @click="ArtiklUrediPice(idedit2)"
                        >
                          Uredi Piće
                        </button>
                      </div>
                    </div>
                  </template>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="container">
        <div class="container py-4 my-4">
          <div class="container-fluid padding py-4 my-4">
            <div class="row padding">
              <div class="col-lg-6 py-4 my-4 md-0">
                <!-- DODAJ KATEGORIJE -->
                <h1>Dodaj kategorije</h1>
                <div class="border-top border-danger w-100 mx-auto my-3"></div>
                <div class="mt-4 py-4 md-4">
                  <table class="table pd-4 py-4 md-4">
                    <thead>
                      <tr class="bg-reddanger text-white">
                        <th scope="col">Naziv Kategorije</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <div class="form-group my-4 w-100 col">
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
                            <div class="mb-4 w-100 col">
                              <input
                                type="kategorijaJela"
                                v-model="Naziv_kategorijeJela"
                                class="form-control w-80"
                                id="kategorijaJela"
                              />
                            </div>
                          </template>
                          <template v-if="KategorijaPrikaz2 === 'Piće'">
                            <div class="mb-4 w-100 col">
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
                              required
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
                              required
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
                <!-- PRIKAZ KATEGORIJE -->
                <h1>Prikaz kategorije</h1>
                <div class="border-top border-danger w-100 mx-auto my-3"></div>
                <div class="card mt-4 py-4 md-4">
                  <table class="table m-0 pd-4 py-4 md-4 table-hover">
                    <thead>
                      <tr class="bg-reddanger text-white">
                        <th scope="col ">Naziv Kategorije Jela</th>
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
                  </table>
                  <table class="table m-0 pd-4 py-4 md-4 table-hover">
                    <thead>
                      <tr class="bg-reddanger text-white">
                        <th scope="col ">Naziv Kategorije Pića</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- DODAJ ARTIKL -->
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
                    <label for="naziv" class="form-label"
                      >Naziv Proizvoda:</label
                    >
                    <input
                      type="naziv"
                      v-model="Naziv"
                      class="form-control"
                      id="naziv"
                      required
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
                    required
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
                      required
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
                      required
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
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="file" class="form-label">Slika:</label>
                  <div class="mb-4">
                    <croppa :width="100" :height="100" v-model="Slika" required>
                    </croppa>
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
        <!-- PREGLED NARUDŽBI -->
        <div class="col-12 text-center mt-5">
          <h1 class="text-dark pt-4">Pregled Narudžbi</h1>
          <div class="border-top border-danger w-100 mx-auto my-3"></div>
        </div>
        <div class="container mt-5">
          <div class="col-lg-12 py-4 my-4 mx-auto">
            <div class="table-responsive">
              <table
                class="
                  table
                  m-0
                  pd-4
                  py-4
                  md-4
                  mx-auto
                  table-striped table-hover
                  shadowbox
                "
              >
                <thead>
                  <tr class="bg-reddanger text-white">
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
                  <!-- PRIKAZ -->
                  <tr v-for="Narudzba in Narudzbe" :key="Narudzba.id">
                    <th scope="col">{{ Narudzba.Ime }}</th>
                    <th scope="col">{{ Narudzba.Prezime }}</th>
                    <th scope="col">{{ Narudzba.BrojTelefona }}</th>
                    <th scope="col">{{ Narudzba.Adresa }}</th>
                    <th scope="col">{{ Narudzba.KategorijaJela }}</th>
                    <th scope="col">{{ Narudzba.Jelo }}</th>
                    <th scope="col">{{ Narudzba.Pice }}</th>
                    <th scope="col">{{ Narudzba.Napomena }}</th>
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
      //EDIT
      NazivEdit: "",
      SastojciEdit: "",
      CijenaEdit: "",
      idedit: "",
      idedit2: "",
      ArtiklEditJ: [],

      //
      showEdit: true,

      Artikli: [],
    };
  },
  props: {
    showEdit: Boolean,
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

    //DOHVACANJE NARUDZBE
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

    // BRISANJE NARUDZBE

    Delete(id) {
      db.collection("Narudzbe")
        .doc(id)
        .delete()
        .then(() => {
          this.GetNarudzbe();
        });
    },

    // KATEGORIJA

    // DOHVACANJE KATEGORIJE JELA
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

    // DODAVANJE KATEGORIJE JELA
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
        })
        .set(((this.Naziv_kategorijeJela = ""), (this.KategorijaPrikaz2 = "")));
    },

    // DODAVANJE KATEGORIJE PIĆA
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
        })
        .set(((this.Naziv_kategorijePica = ""), (this.KategorijaPrikaz2 = "")));
    },

    // DOHVACANJE KATEGORIJE PIĆA
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

    // BRISANJE KATEGORIJE JELA
    DeleteKategorijuJela(id) {
      db.collection("Jelo")
        .doc(id)

        .delete()
        .then(() => {
          this.GetKategorijuJela();
          this.GetArtikliJela();
        });
      setTimeout(() => {
        this.KategorijaPrikaz3 = "";
      }, 100);
    },

    // BRISANJE KATEGORIJE PIĆA
    DeleteKategorijuPica(id) {
      console.log(id);
      db.collection("Pica")
        .doc(id)
        .delete()
        .then(() => {
          this.GetKategorijuPica();
          this.GetArtikliPica();
        });
      setTimeout(() => {
        this.KategorijaPrikaz3 = "";
      }, 100);
    },

    //DODAVANJE ARTIKLA (JELO) -- PREKO FORME

    DodajArtiklJelo() {
      this.Slika.generateBlob((blobData) => {
        let ImgName = "Jela/" + Date.now() + ".png";
        storage
          .ref(ImgName)
          .put(blobData)
          .then((result) => {
            result.ref.getDownloadURL().then((url) => {
              db.collection("Jelo")
                .doc(this.KategorijaJelaPrikaz)
                .collection(this.KategorijaJelaPrikaz)
                .doc(this.Naziv)
                .set({
                  Naziv: this.Naziv,
                  Sastojci: this.Sastojci,
                  KategorijaJela: this.KategorijaPrikaz,
                  Cijena: this.Cijena,
                  Slika: url,
                  Date: Date.now(),
                })
                .then(() => {
                  this.GetArtikliJela();
                })
                .catch((error) => {
                  console.error(error);
                });
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
      setTimeout(() => {
        this.OdustaniArtikl();
      }, 1000);
    },

    //DODAVANJE ARTIKLA (PIĆE) -- PREKO FORME

    DodajArtiklPice() {
      this.Slika.generateBlob((blobData) => {
        let ImgName = "Pica/" + Date.now() + ".png";
        storage
          .ref(ImgName)
          .put(blobData)
          .then((result) => {
            result.ref.getDownloadURL().then((url) => {
              db.collection("Pica")
                .doc(this.KategorijaPicaPrikaz)
                .collection(this.KategorijaPicaPrikaz)
                .doc(this.Naziv)
                .set({
                  Naziv: this.Naziv,
                  Sastojci: this.Sastojci,
                  KategorijaPica: this.KategorijaPrikaz,
                  Cijena: this.Cijena,
                  Slika: url,
                  Date: Date.now(),
                })
                .then(() => {
                  this.GetArtikliPica();
                })
                .catch((error) => {
                  console.error(error);
                });
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
      setTimeout(() => {
        this.OdustaniArtikl();
      }, 1000);
    },

    //DOHVACANJE JELA kad se klikne
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
              KategorijaJela: doc.data().KategorijaJela,
              Sastojci: doc.data().Sastojci,
              Cijena: doc.data().Cijena,
              Slika: doc.data().Slika,
            });
          });
        });
    },

    //DOHVACANJE PIĆA kad se klikne

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
              KategorijaPica: doc.data().KategorijaPica,
              Sastojci: doc.data().Sastojci,
              Cijena: doc.data().Cijena,
              Slika: doc.data().Slika,
            });
          });
        });
    },

    Clear() {
      this.KategorijaPrikaz3 = "";
      this.GetArtikliJela();
      this.GetArtikliPica();
      this.Artikli = [];
    },

    // BRISANJE forme

    OdustaniArtikl() {
      (this.Naziv = ""),
        (this.KategorijaPrikaz = ""),
        (this.KategorijaJelaPrikaz = ""),
        (this.KategorijaPicaPrikaz = ""),
        (this.Sastojci = ""),
        (this.Cijena = ""),
        this.Slika.remove();
    },

    DeleteArtiklJela(id) {
      db.collection("Jelo")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)
        .doc(id)
        .delete()
        .then(() => {
          this.GetArtikliJela();
        });
    },
    DeleteArtiklPica(id2) {
      db.collection("Pica")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)
        .doc(id2)
        .delete()
        .then(() => {
          this.GetArtikliPica();
        });
    },
    UrediArtiklJelo(artiklj) {
      this.showEdit = true;
      (this.idedit = artiklj.ide),
        (this.NazivEdit = artiklj.NazivJ),
        (this.SastojciEdit = artiklj.SastojciJ),
        (this.CijenaEdit = artiklj.CijenaJ);
      setTimeout(() => {
        document.getElementsByTagName("br")[0].scrollIntoView();
      }, 100);
    },
    UredArtiklPice(artiklp) {
      this.showEdit = true;
      (this.idedit2 = artiklp.ide2),
        (this.NazivEdit = artiklp.NazivP),
        (this.SastojciEdit = artiklp.SastojciP),
        (this.CijenaEdit = artiklp.CijenaP);

      setTimeout(() => {
        document.getElementsByTagName("br")[0].scrollIntoView();
      }, 100);
    },

    ArtiklOdustaniEdit() {
      (this.NazivEdit = ""), (this.SastojciEdit = ""), (this.CijenaEdit = "");
      setTimeout(() => {
        this.showEdit = false;
        document.getElementsByTagName("h1")[1].scrollIntoView();
      }, 500);
    },

    ArtiklUrediJelo(idedit) {
      db.collection("Jelo")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)
        .doc(this.idedit)
        .update({
          Naziv: this.NazivEdit,
          Sastojci: this.SastojciEdit,
          Cijena: this.CijenaEdit,
          Date: Date.now(),
        })
        .then(() => {
          this.GetArtikliJela();
        });
      setTimeout(() => {
        this.ArtiklOdustaniEdit();
        this.showEdit = false;
        document.getElementsByTagName("h1")[1].scrollIntoView();
      }, 1000);
    },
    ArtiklUrediPice(idedit2) {
      db.collection("Pica")
        .doc(this.KategorijaPrikaz3)
        .collection(this.KategorijaPrikaz3)
        .doc(this.idedit2)
        .update({
          Naziv: this.NazivEdit,
          Sastojci: this.SastojciEdit,
          Cijena: this.CijenaEdit,
          Date: Date.now(),
        })
        .then(() => {
          this.GetArtikliPica();
        });
      setTimeout(() => {
        this.ArtiklOdustaniEdit();
        this.showEdit = false;
        document.getElementsByTagName("h1")[1].scrollIntoView();
      }, 1000);
    },
  }, //  od methods
};
</script>
