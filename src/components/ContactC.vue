<template>

    <div class="heading">
        
        <h1 >Contact us</h1>

    </div>
<div>

    <div class="container">
  <div class="row">

    <div class="col  mt-5">

        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">First Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Last Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name">
</div>

<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="email" class="form-control" id="formGroupExampleInput3" placeholder="Email">
</div>

<button type="button" class="btn btn-info">Submit</button>
     
    </div>

    <div class="col ms-5 mt-5">
   <h1> Opening Hours</h1>
   <h3>Monday-Friday 7am-6pm</h3>
   <h3>Saturday-Sunday 9am-6pm</h3>
    </div>
  </div>
</div>

</div>

<div class="address">
<h1>Address</h1>

<h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364608379668!2d36.799728933098734!3d-1.2681032269244752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1726767190770!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></h2>

</div>


</template>


<script>

export default{

    name:'ContactC'
}

</script>

<style scoped>

.heading {
    text-align: center;
    background-color: rgba(0, 255, 255, 0.235);
    margin: 10px 5px;
    border-radius: 10px;
    
}

.address{
    text-align: center;
}


</style>