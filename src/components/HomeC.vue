<template>

    <div>
        <h1 class="home">Welcome</h1>



        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src="../assets/images/slide1.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Get Clean</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/images/slide2.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/images/slide3.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    


    </div>
</template>


<script>

export default{

    name:'HomeC'
}

</script>

<style scoped>

.home{
    text-align:center;
}

</style>