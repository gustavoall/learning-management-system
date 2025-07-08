<template>
  <header>
    <div class="logo">
      <img src="../../assets/images/tecnologia.png" alt="">
      <h2>LMS</h2>
    </div>
    <nav>
      <a href="/">Menu</a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script> 

<style>
  header {
    background-color: #52b9bd;
    display: flex;
    align-items: center;
    padding: 15px 20px;
  }
  header h2 {
    color: #fff;
    margin-bottom: 0;
  }
  header nav {
    margin: auto;
    margin-right: 0;
  }
  header nav a {
    color: #fff;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    margin: auto;
    margin-right: 15px;
  }
</style>