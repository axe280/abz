<template>
  <section class="form-section">
    <div class="container">
      <div class="seciton-header">
        <div class="title-site title-site_h1 text_center">Register to get a work</div>
        <p>Attention! After successful registration and alert, update the list of users in the block from the top</p>
      </div>

      <form 
        @submit.prevent="submitForm"
        class="form"
      >
        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Name</div>
            <div class="field-item__field">
              <input
                v-model="name"
                type="text"
                required="required"
                placeholder="Your name" />
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Email</div>
            <div class="field-item__field">
              <input
                v-model="email"
                type="email"
                required="required"
                placeholder="Your email" />
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Phone number</div>
            <div class="field-item__field">
              <input
                v-model="phone"
                type="text"
                required="required"
                placeholder="+380 XX XXX XX XX" />
            </div>
            <div class="field-item__info">Enter phone number in open format</div>
          </label>
        </div>

        <div class="form-group">
          <div class="field-item">
            <div class="field-item__label">Select your position</div>
          </div>

          <div class="form-st-radio-group">
            <div 
              v-for="position in positions"
              :key="position.id"
              class="form-st-radio"
            >
              <label>
                {{ position.name }}
                <input
                  v-model="positionName"
                  :value="position.name"
                  type="radio"
                  name="position" />
                <span class="fake-control"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="field-item">
            <div class="field-item__label">Photo</div>
            <div class="field-item__field">
              <input
                @change="setFile"
                type="file"
                placeholder="Upload your photo" />
            </div>
          </label>
        </div>

        <div class="form-button-wrap">
          <button
            :disabled="!formSuccess"
            class="btn"
            type="submit"
          >Sing up now</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import request from '../api'

export default {
  data() {
    return {
      positions: [],
      positionName: '',
      name: '',
      email: '',
      phone: '',
      file: null,
      formSuccess: false,
    }
  },

  computed: {
    getPositionId() {
      const position = this.positions.find(item => {
        return item.name === this.positionName;
      });

      return position.id;
    }
  },

  methods: {
    setFile(event) {
      this.file = event.target.files[0];
    },

    async submitForm() {
      let formData = new FormData();
      formData.append('position_id', this.getPositionId);
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('photo', this.file);
    }
  },

  async mounted() {
    const data = await request('https://frontend-test-assignment-api.abz.agency/api/v1/positions');

    this.positions = data.positions;
  }
};
</script>