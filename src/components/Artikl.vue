<template>
  <div class="artikl">
    <div class="container">
      <div class="card">
        <img
          src="@/../public/images/pizza.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Naziv_proizvoda</h5>
          <p class="card-text">Sastojci</p>
          <p class="card-text">Cijena</p>
          <a href="#" class="btn btn-success">Edit</a>
          <a href="#" class="btn btn-danger">Obriši</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artikl",
};
</script>

<style></style>
