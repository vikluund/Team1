<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>


<template>


<!--Card-->
<div id="booking-form" class="card shadow mb-5 bg-white rounded">

	<!--Card-Body-->
	<div class="card-body">

		<!--Card-Title-->
		<p class="card-title text-center shadow mb-5 rounded">Search For Availability</p>

 <div class="icons text-center">
    <i  class='fas fa-hiking' style='font-size:48px; color:black'></i>
<!-- <i class="fa fa-plane fa-2x" aria-hidden="true"></i> -->
<!-- <i class="fa fa-taxi fa-2x" aria-hidden="true"></i> -->
<!-- <i class="fa fa-train fa-2x" aria-hidden="true"></i> -->


 </div>

    <hr>

		<!-- <p class="searchText"><strong>Search For Availability</strong></p> -->

		<!--First Row-->
		<!-- <div class="row mb-3 mt-3">

			<label class="radiobtn"><input type="radio" name="gender" value="male">One Way</label>
			<label class="radiobtn"><input type="radio" name="gender" value="male">Round Trip</label>

		</div> -->
        <div class="form-group">
    <label for="first">First name</label>
    <input type="text" class="form-control" id="first" placeholder="First name">
  </div>
  <div class="form-group">
    <label for="last">Last name</label>
    <input type="text" class="form-control" id="last" placeholder="Last name">
  </div>


		<!--Second Row-->

        <br>
		<!-- <div class="row">

			<div class="col-sm-6">
				<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">From City/Airport</option>
        <option value="1">New Delhi</option>
        <option value="2">Mumbai</option>
        <option value="3">Bangalore</option>
    </select>
			</div>

			<div class="col-sm-6">
				<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">To City/Airport</option>
       <option value="1">New Delhi</option>
        <option value="2">Mumbai</option>
        <option value="3">Bangalore</option>
    </select>
			</div>

		</div> -->


		<!--Third Row-->
		<div class="row">

			<div class="col-sm-6">
                <label for="departure">Date</label>
				<input  type="date" id="date-picker-example" class="form-control datepicker mb-4" style="font-family:Arial, FontAwesome" >
			</div>

				<!-- <div class="col-sm-6">
                    <label for="arriving">Arriving</label>
					<input placeholder="&#xf073; Arriving" type="date" id="date-picker-example" class="form-control datepicker" style="font-family:Arial, FontAwesome" >
			</div> -->

				</div>


				<!--Fourth Row-->
				<!-- <div class="row mt-4">

					<div class="col-sm-6">
						<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Anytime</option>
        <option value="1">6:00 AM</option>
        <option value="2">3:00 PM</option>
        <option value="3">6:00 PM</option>
    </select>
					</div>

					<div class="col-sm-6">
						<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Anytime</option>
          <option value="1">6:00 AM</option>
        <option value="2">3:00 PM</option>
        <option value="3">6:00 PM</option>
    </select>
					</div>

				</div> -->




				<!--Fifth Row-->
                <div class="col-sm-4">
						<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Adults(18-64)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
    </select>
					</div>

				<div class="row">

					<div class="col-sm-4">
						<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Kids(0-14)</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
					</div>



					<!-- <div class="col-sm-4">
						<select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected="">Seniors(65+)</option>
   <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
					</div> -->



				</div>

				<a href="#" id="btn-book-now" class="btn btn-primary float-right mt-5">Book now</a>
			</div>
		</div>

</template>

<style scoped>

.card{
  margin:auto;
  border:solid 1px #dbdad7;
  width:60%;
  padding-left:10px!important;
  padding-bottom:10px!important;
  padding-right:10px!important;
  padding-top: 0px!important;

}

.card-title{
  margin:auto;
  padding:15px;
  background-color: #70c1ff;
  color: white;
  width:80%;
}

div.card-body{
  padding:0px;
}
.custom-select{
  width:100%;
}

.btn2{
  margin-left:10%;
}
input {
  outline: 0!important;
  border-width: 0 0 2px!important;
  border-color: #d1d1cf!important;
}
input:focus {
  border-color: #d1d1cf!important;
 -webkit-box-shadow: none!important;
  box-shadow: none!important;
}

select{

 outline: 0!important;
  border-width: 0 0 2px!important;
  border-color: #d1d1cf!important;
}

select:focus{
    border-color: #d1d1cf!important;
 -webkit-box-shadow: none!important;
  box-shadow: none!important;
}

.radiobtn{
  margin-left: 3.5%;
}

.icons{
  margin:auto!important;

}

.fa{
  border-radius: 25px;
  width: 10%;
  margin-left: 5%;
  border:solid 2px #dbdad7;
  margin-top:5%;
  text-align: center;
}

/* .fa-plane{
  color:#1c7aad;
} */

/* .fa-taxi{
  color: #c2f700;
} */

/* .fa-train{
  color:red;
} */

@media only screen and (max-width: 600px) {
  .card{
    margin:auto;
    border:solid 1px #dbdad7;
    width:90%;
    padding-left:10px!important;
    padding-bottom:10px!important;
    padding-right:10px!important;
    padding-top: 0px!important;

  }

  .fa{
    border-radius: 25px;
    width: 15%;
    margin-left: 5%;
    border:solid 2px #dbdad7;
    margin-top:5%;
    text-align: center;
  }

  #btn-book-now{
    background-color: #70c1ff;
  }

  #booking-form{
    margin-top: 15vh;
  }
}
</style>
