<template>
  <div class="Jelovnik">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="row">
      <div class="col-lg-6 py-4 my-4 mx-auto md-4">
        <div class="form-group">
          <div class="form-group container-fluid padding mx-auto text-center">
            <select
              name="Odabir5"
              class="form-control w-50 mx-auto"
              id="KategorijePrikaz4"
              v-model="PrikazKategorije"
              @click="Clear"
            >
              <option value="Jelo">Jelo</option>
              <option value="Piće">Piće</option>
            </select>
            <div class="border-top border-danger w-100 mx-auto my-3"></div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="PrikazKategorije === 'Jelo'">
      <div class="form-group">
        <label for="kategorijeJela">Kategorija Jela:</label>
        <div class="form-group container-fluid padding mx-auto text-center">
          <div class="col-sm-6 col-md-12 col-lg-6 mx-auto">
            <select
              class="form-control w-50 mx-auto"
              id="kategorijeJela"
              v-model="KategorijaJelaPrikaz"
              @click="GetArtikliJela(KategorijaJelaPrikaz)"
            >
              <option
                v-for="KategorijaJela in KategorijeJela"
                :key="KategorijaJela.id"
              >
                {{ KategorijaJela.NazivJela }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="col-12 py-4 my-4 mx-auto md-3">
          <div class="border-top border-danger w-100 mx-auto my-3"></div>
          <div class="row">
            <Artikl
              class="col-lg-3 col-md-6 col-sm-12"
              v-for="Artikla in Artikli"
              :key="Artikla.id"
              :ArtiklNaziv="Artikla"
              v-on:jelonaruci="DodajJelo($event)"
            />
          </div>
          <div class="border-top border-danger w-100 mx-auto my-3"></div>
        </div>
      </div>
    </template>
    <template v-if="PrikazKategorije === 'Piće'">
      <div class="form-group">
        <label for="kategorijePica">Kategorija Pića:</label>
        <div class="form-group container-fluid padding mx-auto text-center">
          <div class="col-sm-6 col-md-12 col-lg-6 mx-auto">
            <select
              class="form-control mx-auto w-50"
              id="kategorijePica"
              v-model="KategorijaPicaPrikaz"
              required
              @click="GetArtikliPica(KategorijaPicaPrikaz)"
            >
              <option
                v-for="KategorijePice in KategorijePica"
                :key="KategorijePice.id"
              >
                {{ KategorijePice.NazivPica }}
              </option>
            </select>
          </div>
        </div>
        <div class="container mt-5">
          <div class="col-12 py-4 my-4 mx-auto md-3">
            <div class="border-top border-danger w-100 mx-auto my-3"></div>
            <div class="row">
              <Artikl
                class="col-lg-3 col-md-6 col-sm-12"
                v-for="Artikla in Artikli"
                :key="Artikla.id"
                :ArtiklNaziv="Artikla"
                v-on:picenaruci="DodajPice($event)"
              />
            </div>
            <div class="border-top border-danger w-100 mx-auto my-3"></div>
          </div>
        </div>
      </div>
    </template>

    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Vaš Odabir</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="container mt-5">
      <div class="col-12 py-4 my-4 mx-auto md-3">
        <div class="row">
          <Artikl
            class="col-lg-3 col-md-6 col-sm-12"
            v-for="Artikla in ArtikliPolje"
            :key="Artikla.id"
            :ArtiklNaziv="Artikla"
            v-on:nulaje="NulaBrisi($event)"
            v-on:dodaj="Dodaj($event)"
          />
        </div>
      </div>
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
            <div class="mb-4">
              <label for="Napomena" class="form-label">Napomena:</label>
              <textarea v-model="Napomena" class="form-control" id="Napomena" />
            </div>
            <div class="col-lg-12 text-center">
              <div class="mb-4">
                <label for="Iznos" class="form-label">Iznos:</label>

                <label for="Iznoskn" class="form-label"
                  >{{ this.sveukupno }},00 HRK</label
                >
              </div>
            </div>
            <div class="mb-4">
              <div class="row">
                <div class="mb-4 col-md-12 col-lg-12 col-sm-12">
                  <button
                    type="button"
                    @click="Odustani"
                    class="btn btn-danger w-50 rounded"
                  >
                    Odustani
                  </button>
                </div>
                <div class="mb-4 col-md-12 col-lg-12 col-sm-12">
                  <button
                    type="button"
                    @click="Posalji"
                    class="btn btn-success w-50 rounded"
                  >
                    Pošalji
                  </button>
                </div>
              </div>
            </div>
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
import { storage } from "@/firebase";
import store from "@/store";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";

export default {
  name: "Jelovnik",
  props: ["JeloPrikaz"],
  props: ["ArtiklNaziv"],

  data() {
    return {
      //naruc
      Ime: "",
      Prezime: "",
      BrojTelefona: "",
      Adresa: "",
      KategorijaJela: "",
      Jelo: "",
      Pice: "",
      Napomena: "",
      //naruc
      KategorijaJelaPrikaz: "",
      KategorijaPicaPrikaz: "",
      Artikli: [],
      KategorijaPrikaz3: "",

      KategorijeJela: [],
      KategorijePica: [],

      ArtikliPolje: [],
      PrikazKategorije: "",
      PrikazKategorije1: "",

      idj: "",
      nazivj: "",
      sastojcij: "",
      cijenaj: "",
      kolicinaj: "",
      dodanj: "",

      naziv: "",
      cijena: "",
      kolicina: "",

      idp: "",
      nazivp: "",
      sastojcip: "",
      cijenap: "",
      kolicinap: "",
      dodanp: "",

      sveukupnacijena: 0,

      sve: "",
      Narudzba: "",

      sveukupno: 0,
    };
  },
  mounted() {},

  components: {
    Artikl,
  },
  mounted() {
    this.GetKategorijuJelaP();
    this.GetKategorijuPicaP();
  },
  methods: {
    GetKategorijuJelaP() {
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

    GetKategorijuPicaP() {
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

    Dodaj(pov) {
      let k = 0;
      let c = 0;
      let sv = 0;
      this.naziv = pov.naziv;
      this.kolicina = pov.Kolicina;
      this.sveukupno = 0;

      for (let i = 0; i < this.ArtikliPolje.length; i++) {
        if (this.ArtikliPolje[i].Naziv === this.naziv)
          this.ArtikliPolje[i].kolicina = this.kolicina;

        k = this.ArtikliPolje[i].kolicina;
        c = this.ArtikliPolje[i].Cijena;
        this.sveukupno = this.sveukupno + c * k;
      }
      console.log("ovo je cijena", this.sveukupno);
    },

    Clear() {
      this.KategorijaJelaPrikaz = "";
      this.Artikli = [];
      this.GetArtikliJela();
      this.GetArtikliPica();
    },

    Posalji() {
      let t = "";
      let k = "";
      let c = 0;
      let svi = "";
      let sveuk = 0;

      for (let i = 0; i < this.ArtikliPolje.length; i++) {
        t = this.ArtikliPolje[i].Naziv;
        k = this.ArtikliPolje[i].kolicina;
        c = this.ArtikliPolje[i].Cijena;

        svi = svi + " " + t + " x" + k;

        this.Narudzba = svi;

        sveuk = c * k;

        this.sveukupnacijena = this.sveukupnacijena + sveuk;
      }

      if (
        this.Ime === "" ||
        this.Prezime === "" ||
        this.BrojTelefona === "" ||
        this.Adresa === "" ||
        this.ArtikliPolje === [] ||
        this.Narudzba === ""
      ) {
        alert("Molim vas ispunite cijelu formu ");
      } else {
        db.collection("Narudzbe").doc().set({
          Ime: this.Ime,
          Prezime: this.Prezime,
          BrojTelefona: this.BrojTelefona,
          Adresa: this.Adresa,
          Narudzba: this.Narudzba,
          cijena: this.sveukupnacijena,
          Napomena: this.Napomena,
          Date: Date.now(),
        });
      }
      setTimeout(() => {
        this.Odustani();
        alert("Poslano!");
      }, 100);
    },
    GetArtikliJela(KategorijaJelaPrikaz) {
      db.collection("Jelo")
        .doc(this.KategorijaJelaPrikaz)
        .collection(this.KategorijaJelaPrikaz)

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
              Kolicina: doc.data().Kolicina,
            });
          });
        });
    },
    GetArtikliPica(KategorijaPrikaz3) {
      db.collection("Pica")
        .doc(this.KategorijaPicaPrikaz)
        .collection(this.KategorijaPicaPrikaz)

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
              Kolicina: doc.data().Kolicina,
            });
          });
        });
    },

    DodajJelo(narucij) {
      let k = 0;
      let c = 0;
      let a = false;

      (this.idj = narucij.idjs),
        (this.nazivj = narucij.NazivJs),
        (this.sastojcij = narucij.SastojciJs),
        (this.cijenaj = narucij.CijenaJs),
        (this.slikaj = narucij.SlikaJs),
        (this.kolicinaj = narucij.KolicinaJs);

      for (let i = 0; i < this.ArtikliPolje.length; i++) {
        if (this.idj === this.ArtikliPolje[i].id) {
          alert("već je dodano u košarici");
          a = true;
          delete this.ArtikliPolje[i];
          this.ArtikliPolje.splice(i, 1);
        }
      }

      this.ArtikliPolje.push({
        id: this.idj,
        Naziv: this.nazivj,
        Sastojci: this.sastojcij,
        Cijena: this.cijenaj,
        Slika: this.slikaj,
        kolicina: this.kolicinaj,
      });
      if (a === false) {
        for (let i = 0; i < this.ArtikliPolje.length; i++) {
          if (this.ArtikliPolje[i].Naziv === this.nazivj) {
            this.ArtikliPolje[i].kolicina = 1;

            k = this.ArtikliPolje[i].kolicina;
            c = this.ArtikliPolje[i].Cijena;
            this.sveukupno = this.sveukupno + c * k;
          }
        }
      }

      console.log("ovo je cijena", this.sveukupno);
    },
    DodajPice(narucip) {
      let k = 0;
      let c = 0;
      let a = false;

      (this.idp = narucip.idps),
        (this.nazivp = narucip.NazivPs),
        (this.sastojcip = narucip.SastojciPs),
        (this.cijenap = narucip.CijenaPs),
        (this.slikap = narucip.SlikaPs),
        (this.kolicinap = narucip.KolicinaPs);

      for (let i = 0; i < this.ArtikliPolje.length; i++) {
        if (this.idp === this.ArtikliPolje[i].id) {
          alert("već je dodano u košarici");
          a = true;
          delete this.ArtikliPolje[i];
          this.ArtikliPolje.splice(i, 1);
        }
      }

      this.ArtikliPolje.push({
        id: this.idp,
        Naziv: this.nazivp,
        Sastojci: this.sastojcip,
        Cijena: this.cijenap,
        Slika: this.slikap,
        kolicina: this.kolicinap,
      });
      if (a === false) {
        for (let i = 0; i < this.ArtikliPolje.length; i++) {
          if (this.ArtikliPolje[i].Naziv === this.nazivp) {
            this.ArtikliPolje[i].kolicina = 1;

            k = this.ArtikliPolje[i].kolicina;
            c = this.ArtikliPolje[i].Cijena;
            this.sveukupno = this.sveukupno + c * k;
          }
        }
      }

      console.log("ovo je cijena", this.sveukupno);
    },

    NulaBrisi(id) {
      for (let i = 0; i < this.ArtikliPolje.length; i++) {
        if (id === this.ArtikliPolje[i].id) {
          delete this.ArtikliPolje[i];
          this.ArtikliPolje.splice(i, 1);
        }
      }
    },

    Odustani() {
      (this.Ime = ""),
        (this.Prezime = ""),
        (this.BrojTelefona = ""),
        (this.Adresa = ""),
        (this.Napomena = ""),
        (this.ArtikliPolje = []),
        (this.Narudzba = ""),
        (this.sveukupnacijena = ""),
        (this.sveukupno = 0);
    },
  }, // od methods
};
</script>

<style></style>
