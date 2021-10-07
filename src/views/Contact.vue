<template>
  <!-- Landing Section -->
  <section class="body py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="jumbotron">
          <div class="my-5 business-information">
            <h1>Business Information</h1>
            <div class="my-5 business-information-explanation">
              <h2>What is Paulie's Pizza?</h2>
              <!-- Explanation text here -->
              <!-- Should consist of the reason why the business exists as well as how it plans to make money-->
              <div class="business-information-explanation-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos saepe consectetur eos, harum molestias officia eaque explicabo, vero sapiente culpa. Ipsum accusantium in error libero dolores ex quia cupiditate!
              </div>
            </div>
            <div class="my-5 business-information-why">
              <h2>Why Paulie's?</h2>
              <!-- Pitch text here -->
              <!-- Should consist of the reasons why a business should partner with Paulie's Pizza, leading to a CTA of getting in touch-->
              <div class="business-information-why-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos saepe consectetur eos, harum molestias officia eaque explicabo, vero sapiente culpa. Ipsum accusantium in error libero dolores ex quia cupiditate!
              </div>
            </div>
          </div>
          <hr>
          <div class="my-5 business-information">
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
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style lang="scss" scoped>
  .contact-form {
    border: solid 2px var(--white);
    background-color: var(--white);
    border-radius: 20px;
  }

  .contact-form-body {
    padding: 20px;
  }
</style>