<template>
  <div class="prijavise">
    <div class="container">
      <div class="row wh-100 align items-center justify-content center">
        <div class="col-sm-8 col-md-6 col-lg-4 bg-white rounded p-4 shadow">
          <div class="row justify-content-center mb-4">
            <img src="@/../public/images/logo.png" class="" />
          </div>
          <form>
            <div class="mb-4">
              <label for="username" class="form-label">Username:</label>
              <input type="username" class="form-control" id="username" />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-success w-100">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style></style>
