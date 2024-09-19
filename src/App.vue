<template>

<div>

<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="#">MY CARWASH</router-link>
  

    <div class=" navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link active ms-5" aria-current="page" to="/home">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link active ms-5" aria-current="page" to="/services">Services</router-link>
        </li>


        <li class="nav-item">
          <router-link class="nav-link active  ms-5" aria-current="page" to="/contact">Contact</router-link>
        </li>

       
      
       
      </ul>
     
    </div>
  </div>
</nav>


</div>


<router-view/>
</template>


<script>

export default{
  name:'App'
}

</script>


<style scoped>

</style>