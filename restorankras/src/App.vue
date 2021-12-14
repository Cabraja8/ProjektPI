<template>
  <div id="app">
    <header>
      <div class="top-bar">
        <div class="container">
          <div class="col 12 text-right">
            <p><a href="">Tel:+385 52 443 695</a></p>
          </div>
        </div>
      </div>

      <nav id="nav" class="navbar bg-light navbar-light navbar-expand-lg">
        <div class="container">
          <router-link to="/" class="navbar-brand"
            ><img src="@/../public/images/logo.png" alt="Logo"
          /></router-link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Početna</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/Narudzbe" class="nav-link"
                  >Naruđžbe</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/o-nama" class="nav-link">O Nama</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Login" class="nav-link"
                  >Prijavi se</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <router-view />

    <footer>
      <div class="container">
        <div class="row text-light text-center py-4 justify-content-center">
          <div class="col-sm-10 col-md-8-col-lg-6">
            <img src="@/../public/images/logo-white.png" alt="" />
            <p>"domaće je najbolje"</p>
            <ul class="social pt-3">
              <li>
                <a href="" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="" target="_blank"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
            <br />
            <p>Radno vrijeme: 07:00h-23:00h</p>
          </div>
        </div>
      </div>
    </footer>
    <div class="socket text-light text-center py3">
      <p>&copy; <a href="" target="_blank"></a></p>
    </div>
  </div>
</template>

//

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #5b5555;

    &.router-link-exact-active {
      color: #ed4646;
    }
  }
}
</style>
