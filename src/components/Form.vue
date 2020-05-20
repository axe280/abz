<template>
  <section class="form-section">
    <div class="container">
      <div class="seciton-header">
        <div class="title-site title-site_h1 text_center">Register to get a work</div>
        <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
      </div>

      <div class="form">
        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Name</div>
            <div class="field-item__field">
              <input type="text" required="required" placeholder="Your name" />
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Email</div>
            <div class="field-item__field">
              <input type="email" required="required" placeholder="Your email" />
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Phone number</div>
            <div class="field-item__field">
              <input type="text" required="required" placeholder="+380 XX XXX XX XX" />
            </div>
            <div class="field-item__info">Enter phone number in open format</div>
          </label>
        </div>

        <div class="form-group">
          <div class="field-item">
            <div class="field-item__label">Select your position</div>
          </div>

          <div class="form-st-radio-group">
            <div class="form-st-radio">
              <label>
                Frontend developer
                <input type="radio" name="radio" checked />
                <span class="fake-control"></span>
              </label>
            </div>
            <div class="form-st-radio">
              <label>
                Backend developer
                <input type="radio" name="radio" checked />
                <span class="fake-control"></span>
              </label>
            </div>
            <div class="form-st-radio">
              <label>
                Designer
                <input type="radio" name="radio" checked />
                <span class="fake-control"></span>
              </label>
            </div>
            <div class="form-st-radio">
              <label>
                QA
                <input type="radio" name="radio" checked />
                <span class="fake-control"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Photo</div>
            <div class="field-item__field">
              <input type="file" placeholder="Upload your photo" />
            </div>
          </label>
        </div>

        <div class="form-button-wrap">
          <button class="btn" type="submit">Sing up now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>