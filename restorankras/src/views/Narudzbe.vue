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
              <label for="username" class="form-label">Ime:</label>
              <input type="username" class="form-control" id="ime" />
            </div>
            <div class="mb-4">
              <label for="prezime" class="form-label">Prezime:</label>
              <input type="prezime" class="form-control" id="prezime" />
            </div>
            <div class="mb-4">
              <label for="brtelefona" class="form-label">Broj Telefona:</label>
              <input type="brtelefona" class="form-control" id="brtelefona" />
            </div>
            <div class="mb-4">
              <label for="adresa" class="form-label">Adresa:</label>
              <input type="adresa" class="form-control" id="Adresa" />
            </div>
            <div class="mb-4">
              <label for="kategorija" class="form-label"
                >Kategorija jela:</label
              >
              <input type="kategorija" class="form-control" id="kategorija" />
            </div>
            <div class="mb-4">
              <label for="jelo" class="form-label">Jelo:</label>
              <input type="jelo" class="form-control" id="jelo" />
            </div>
            <div class="mb-4">
              <label for="pice" class="form-label">Piće:</label>
              <input type="pice" class="form-control" id="pice" />
            </div>
            <button type="submit" class="btn btn-danger w-50">Odustani</button>
            <div class="mb-4"></div>
            <button type="submit" class="btn btn-danger w-50">Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Narudzbe",
};
</script>

<style></style>
