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
        <div
          :class="{ 'form-group_error' : $v.name.$error }"
          class="form-group"
        >
          <label class="field-item">
            <div class="field-item__label">Name</div>
            <div class="field-item__field">
              <input
                v-model.trim="$v.name.$model"
                type="text"
                placeholder="Your name" />
            </div>
            <div
              v-if="!$v.name.required"
              class="field-item__error"
            >
              Please fill in this field
            </div>
            <div
              v-else-if="!$v.name.minLength"
              class="field-item__error"
            >
              {{ `The name must be at least ${$v.name.$params.minLength.min} characters.` }}
            </div>
            <div
              v-else-if="!$v.name.maxLength"
              class="field-item__error"
            >
              {{ `Max length is ${$v.name.$params.maxLength.max} characters.` }}
            </div>
          </label>
        </div>

        <div
          :class="{ 'form-group_error' : $v.email.$error }"
          class="form-group"
        >
          <label class="field-item">
            <div class="field-item__label">Email</div>
            <div class="field-item__field">
              <input
                v-model="$v.email.$model"
                type="email"
                placeholder="Your email" />
            </div>
            <div
              v-if="!$v.email.required"
              class="field-item__error"
            >
              Please fill in this field
            </div>
            <div
              v-else-if="!$v.email.minLength"
              class="field-item__error"
            >
              {{ `The name must be at least ${$v.email.$params.minLength.min} characters.` }}
            </div>
            <div
              v-else-if="!$v.email.maxLength"
              class="field-item__error"
            >
              {{ `Max length is ${$v.email.$params.maxLength.max} characters.` }}
            </div>
            <div
              v-else-if="!$v.email.validateEmail"
              class="field-item__error"
            >
              {{ 'The email must be a valid email address.' }}
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
                placeholder="+380 XX XXX XX XX" />
            </div>
            <div class="field-item__info">
              Enter phone number in open format
            </div>
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
            class="btn"
            type="submit"
          >Sing up now</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import request from '../api';
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      positions: [],
      positionName: '',
      name: '',
      email: '',
      phone: '',
      file: null
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
      // let formData = new FormData();
      // formData.append('position_id', this.getPositionId);
      // formData.append('name', this.name);
      // formData.append('email', this.email);
      // formData.append('phone', this.phone);
      // formData.append('photo', this.file);
    }
  },

  async mounted() {
    const data = await request('https://frontend-test-assignment-api.abz.agency/api/v1/positions');

    this.positions = data.positions;
  },

  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60)
    },
    email: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(100),
      validateEmail: val => {
        const pattern = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
        return pattern.test(String(val).toLowerCase());
      }
    }
  }
};
</script>