<template>
  <header>
    <div class="score">
      <!-- <img src="../../assets/images/" alt=""> -->
      <h2></h2>
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
    background-color: #13293D;
    display: flex;
    align-items: center;
    padding: 15px 20px;
  }
  header h2 {
    color: #FABE19;
    margin-bottom: 0;
  }
  header nav {
    margin: auto;
    margin-right: 0;
  }
  header nav a {
    color: #fff;
  }
  .score {
    display: flex;
    align-items: center;
  }
  .score img {
    margin: auto;
    margin-right: 15px;
  }
</style>