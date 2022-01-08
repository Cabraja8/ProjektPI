<template>
  <div class="Narudzbe">
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Pregled</h1>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <div class="form-group container-fluid padding w-50 mx-auto text-center">
      <select
        name="Odabir5"
        class="form-control w-50 mx-auto"
        id="KategorijePrikaz4"
        v-model="PrikazKategorije"
      >
        <option value="Jelo">Jelo</option>
        <option value="Piće">Piće</option>
      </select>
      <div class="border-top border-danger w-100 mx-auto my-3"></div>
    </div>
    <template v-if="PrikazKategorije === 'Jelo'">
      <div class="form-group">
        <label for="kategorijeJela">Kategorija Jela:</label>
        <div
          class="form-group container-fluid padding w-50 mx-auto text-center"
        >
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
        <div
          class="form-group container-fluid padding w-50 mx-auto text-center"
        >
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
              <input
                type="Napomena"
                v-model="Napomena"
                class="form-control"
                id="Napomena"
              />
            </div>
            <div class="col">
              <div class="row">
                <div class="mb-4">
                  <label for="Iznos" class="form-label">Iznos:</label>

                  <label for="Iznoskn" class="form-label"> 0,00</label>

                  <label for="HRK" class="form-label">HRK</label>
                </div>
              </div>
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
  name: "Narudzbe",
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

      idp: "",
      nazivp: "",
      sastojcip: "",
      cijenap: "",
      kolicinap: "",
    };
  },
  mounted() {
    // this.GetKategoriju();
  },
  // props: ["ArtiklNaziv"],
  // props: ["KategorijaJela"],
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
      (this.idj = narucij.idjs),
        (this.nazivj = narucij.NazivJs),
        (this.sastojcij = narucij.SastojciJs),
        (this.cijenaj = narucij.CijenaJs),
        (this.slikaj = narucij.SlikaJs),
        (this.kolicinaj = narucij.KolicinaJs);

      console.log(this.idj);

      let kolicina = 1;
      console.log(this.kolicinaj);

      this.ArtikliPolje.push({
        id: this.idj,
        Naziv: this.nazivj,
        Sastojci: this.sastojcij,
        Cijena: this.cijenaj,
        Slika: this.slikaj,
        kolicina: this.kolicinaj,
      });

      console.log(this.ArtikliPolje);
    },
    DodajPice(narucip) {
      (this.idp = narucip.idps),
        (this.nazivp = narucip.NazivPs),
        (this.sastojcip = narucip.SastojciPs),
        (this.cijenap = narucip.CijenaPs),
        (this.slikap = narucip.SlikaPs),
        (this.kolicinap = narucip.KolicinaPs);

      console.log("test2", narucip.idps);

      this.ArtikliPolje.push({
        id: this.idp,
        Naziv: this.nazivp,
        Sastojci: this.sastojcip,
        Cijena: this.cijenap,
        Slika: this.slikap,
        kolicina: this.kolicinap,
      });
    },

    NulaBrisi(id) {
      console.log("nula je obrisi");
      console.log(" testiranje", id);
      console.log("polje", this.ArtikliPolje.id);

      let t = "";

      for (let i in this.ArtikliPolje) {
        t += this.ArtikliPolje[i];
        console.log("i=", i);
      }
      console.log("t=", t);
    },

    Odustani() {},
  },
};
</script>

<style></style>
