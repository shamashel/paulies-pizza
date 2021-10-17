<template>
  <!-- Landing Section -->
  <section class="body py-5 px-4 px-lg-5 mt-5">
      <h1>Business Information</h1>
      <div class="container my-5 d-flex flex-column flex-xl-row">
        <div class="col-12 col-xl-6 mr-0 mr-xl-3 business-information">
          <div class="mb-5 business-information-explanation">
            <h2>What is Paulie's Pizza?</h2>
            <!-- Explanation text here -->
            <!-- Should consist of the reason why the business exists as well as how it plans to make money-->
            <div class="business-information-explanation-content">
              <p>
                Paulie's Pizza is a new type of food chain, following in the footsteps of other 
                new chains such as Mr. Beast Burger.
              </p>
              <p>
                We operate entirely online and offer local business owners the opportunity to use
                their excess ingredients to make delicious Italian food and have it hand-delivered 
                to their customers without any of the worries that normally come with setting up a 
                new branch of an existing chain
              </p>
              <p>
                By allowing local businesses to run their own franchise, we hope to decrease delivery times
                to customers while simultaneously allowing customers to help support local business.
              </p>
            </div>
          </div>
          <div class="my-5 business-information-why">
            <h2>Why Paulie's?</h2>
            <!-- Pitch text here -->
            <!-- Should consist of the reasons why a business should partner with Paulie's Pizza, leading to a CTA of getting in touch-->
            <div class="business-information-why-content">
              <p>
                During the trying times of 2020 and 2021, every business around the world has begun to realize
                the potential of delivery services.
              </p>
              <p>
                While creating a new food delivery serivce offers a completely new stream of revenue
                for your business, it also comes with its own share of risks: how do you manage the
                delivery service, and how do you know the service will by liked by your customers?
              </p>
              <p>
                That's where we come in.
              </p>
              <p>
                We'll provide you with our proven recipes and delivery infrastructure, as well as support
                for any setup or hiccups that might show up along the way. 
              </p>
              <p>
                So, are you ready to start diversifying your business's income?
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6 ml-0 ml-xl-3 business-information-contact">
          <h1>Get in touch</h1>
          <p>
            If you and your team are interested in working with Paulie's, fill out the form below and one of our
            experts will reach out to you so we can get the ball rolling!
          </p>
          <form class="contact-form">
            <div class="contact-form-body">
              <div class="form-group my-2">
                <label for="inputHelp" class="mb-1">How can we help you?</label>
                <select class="form-control" id="inputHelp">
                  <option>Please Select</option>
                  <option>Request a demo</option>
                  <option>Sign up as a new partner</option>
                  <option>Questions about partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group my-2">
                <label for="inputFullName" class="mb-1">Full Name</label>
                <input type="text" class="form-control" id="inputFullName">
              </div>
              <div class="form-group my-2">
                <label for="inputBusinessName" class="mb-1">Business Name</label>
                <input type="text" class="form-control" id="inputBusinessName">
              </div>
              <div class="form-group my-2">
                <label for="inputBusinessName" class="mb-1">Email Address</label>
                <input type="email" class="form-control" id="inputBusinessName">
              </div>
              <div class="form-group my-2">
                <label for="inputBusinessName" class="mb-1">Phone Number</label>
                <input type="tel" class="form-control" id="inputBusinessName">
              </div>
              <div class="form-group my-2">
                <label for="inputBusinessName" class="mb-1">Full Address</label>
                <input type="text" class="form-control" id="inputBusinessName">
              </div>
              <!-- For the purposes of the project, this can probably remain as a regular submit button. In an actual app, this would trigger an API response. -->
              <button type="submit" class="btn btn-primary my-2 w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style lang="scss" scoped>
  .business-information-contact {
    padding: 32px;
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    border-radius: 20px;
  }

  .contact-form {
    border: solid 2px var(--neutral-0);
    background-color: var(--neutral-0);
    border-radius: 20px;
  }

  .contact-form-body {
    padding: 20px;
  }
</style>