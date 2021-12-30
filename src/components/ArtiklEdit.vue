<template>
  <div class="col-sm-8 col-md-6 col-lg-4 bg-light rounded p-4 shadow">
    <div class="row justify-content-center mb-4">
      <img src="@/../public/images/logo.png" class="" />
    </div>

    <form>
      <div class="form-group">
        <div class="mb-4">
          <label for="naziv" class="form-label">Naziv Proizvoda:</label>
          <input type="naziv" class="form-control" id="naziv" required />
        </div>
      </div>
      <div class="form-group">
        <label for="kategorijePrikaz">Kategorija:</label>
        <select
          name="Odabir"
          class="form-control"
          id="kategorijePrikaz"
          required
        >
          <option value="Jelo">Jelo</option>
          <option value="Piće">Piće</option>
        </select>
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
          ></option>
        </select>
      </div>

      <div class="form-group">
        <div class="mb-4">
          <label for="sastojci" class="form-label">Sastojci:</label>
          <input type="sastojci" class="form-control" id="sastojci" required />
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
          <croppa :width="100" :height="100" v-model="Slika" required> </croppa>
        </div>
      </div>
      <div class="form-group">
        <div class="mb-4">
          <button type="button" class="btn btn-danger w-20">Odustani</button>
          <button type="button" class="btn btn-success w-20">Dodaj Jelo</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ArtiklEdit",
  data() {},
  methods: {},
};
</script>

<style></style>
