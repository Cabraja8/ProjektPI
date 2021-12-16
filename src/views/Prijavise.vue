<template>
  <div class="prijavise">
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
              <label for="username" class="form-label">Username:</label>
              <input
                type="username"
                v-model="Username"
                class="form-control"
                id="username"
              />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                v-model="Password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="button" @click="proba" class="btn btn-danger w-100">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
export default {
  name: "Login",
  data() {
    return {
      Username: "",
      Password: "",
    };
  },
  methods: {
    proba() {
      alert("Ok");
    },
  },
};
</script>

<style></style>
