<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-resposive img-logo" src="@/assets/task-list-icon.jpg" alt="Logo">
        </section>
        <section class="navbar-section">
          <a href="" class="btn btn-link">GitHub</a>
        </section>
      </header>
      <router-view class="pt-2" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.img-logo {
  max-width: 100px;
}
</style>