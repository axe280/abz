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
              {{ `The name must be at least ${$v.name.$params.minLength.min} characters` }}
            </div>
            <div
              v-else-if="!$v.name.maxLength"
              class="field-item__error"
            >
              {{ `Max length is ${$v.name.$params.maxLength.max} characters` }}
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
              {{ `The email must be at least ${$v.email.$params.minLength.min} characters` }}
            </div>
            <div
              v-else-if="!$v.email.maxLength"
              class="field-item__error"
            >
              {{ `Max length is ${$v.email.$params.maxLength.max} characters` }}
            </div>
            <div
              v-else-if="!$v.email.validateEmail"
              class="field-item__error"
            >
              The email must be a valid email address
            </div>
          </label>
        </div>

        <div
          :class="{ 'form-group_error' : $v.phone.$error }"
          class="form-group"
        >
          <label class="field-item">
            <div class="field-item__label">Phone number</div>
            <div class="field-item__field">
              <input
                v-model="$v.phone.$model"
                @input="phoneOnInput"
                @focus="phoneOnFocus"
                type="tel"
                placeholder="+380 XX XXX XX XX" />
            </div>
            <div class="field-item__info">
              Enter phone number in open format
            </div>
            <div
              v-if="!$v.phone.required"
              class="field-item__error"
            >
              Please fill in this field
            </div>
            <div
              v-else-if="!$v.phone.validatePhone"
              class="field-item__error"
            >
              Check your phone number
            </div>
          </label>
        </div>

        <div
          :class="{ 'form-group_error' : $v.positionName.$error }"
          class="form-group"
        >
          <div class="field-item">
            <div class="field-item__label">Select your position</div>

            <div class="form-st-radio-group">
              <div 
                v-for="position in positions"
                :key="position.id"
                class="form-st-radio"
              >
                <label>
                  {{ position.name }}
                  <input
                    v-model="$v.positionName.$model"
                    :value="position.name"
                    type="radio"
                    name="position" />
                  <span class="fake-control"></span>
                </label>
              </div>
            </div>

            <div
              v-if="!$v.positionName.required"
              class="field-item__error"
            >
              Please choose position
            </div>
          </div>
        </div>

        <div
          :class="{ 'form-group_error' : $v.file.$error }"
          class="form-group"
        >
          <label class="field-item">
            <div class="field-item__label">Photo</div>
            <div class="field-item__field">
              <input
                @change="setFile"
                type="file"
                placeholder="Upload your photo" />
            </div>
            <div
              v-if="!$v.file.typeImage"
              class="field-item__error"
            >
              The photo format must be jpeg/jpg type
            </div>
            <div
              v-else-if="!$v.file.sizeImage"
              class="field-item__error"
            >
              The photo size must not be greater than 5 Mb
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
      file: null,
      submitStatus: null
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
      this.$v.file.$touch();
    },

    phoneOnFocus() {
      if (!this.phone) {
        this.phone = '+380';
      }
    },

    phoneOnInput(event) {
      const val = event.target.value;
      this.phone = '+380' + val.slice(4, 13).replace(/\D+/g, '');
    },

    async submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      }

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
        const pattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return pattern.test(String(val).toLowerCase());
      }
    },

    phone: {
      required,
      validatePhone: val => {
        const pattern = /^[+]{0,1}380([0-9]{9})$/;
        return pattern.test(String(val));
      }
    },

    positionName: {
      required
    },

    file: {
      typeImage: file => {
        const imgType = 'image/jpeg';
        if (file && file.type !== imgType) {
          return false;
        }
        return true;
      },

      sizeImage: file => {
        const maxSize = 5242880;
        if (file && file.size > maxSize) {
          return false;
        }
        return true;
      }
    }
  }
};
</script>