<template>
  <section class="form-section" id="formWrapper">
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
                @input="delayTouch($v.name)"
                type="text"
                placeholder="Your name" />
            </div>

            <small class="field-item__error">
              <template v-if="!$v.name.required">
                Please fill in this field
              </template>
              <template v-else-if="!$v.name.minLength">
                {{ `The name must be at least ${$v.name.$params.minLength.min} characters` }}
              </template>
              <template v-else-if="!$v.name.maxLength">
                {{ `Max length is ${$v.name.$params.maxLength.max} characters` }}
              </template>
            </small>
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
                @input="delayTouch($v.email)"
                type="email"
                placeholder="Your email" />
            </div>

            <small class="field-item__error">
              <template v-if="!$v.email.required">
                Please fill in this field
              </template>
              <template v-else-if="!$v.email.minLength">
                {{ `The email must be at least ${$v.email.$params.minLength.min} characters` }}
              </template>
              <template v-else-if="!$v.email.maxLength">
                {{ `Max length is ${$v.email.$params.maxLength.max} characters` }}
              </template>
              <template v-else-if="!$v.email.validateEmail">
                The email must be a valid email address
              </template>
            </small>
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
            <small class="field-item__info">
              Enter phone number in open format
            </small>

            <small class="field-item__error">
              <template v-if="!$v.phone.required">
                Please fill in this field
              </template>
              <template v-else-if="!$v.phone.validatePhone">
                Check your phone number
              </template>
            </small>
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

            <small class="field-item__error">
              <template v-if="!$v.positionName.required">
                Please choose position
              </template>
            </small>
          </div>
        </div>

        <div
          :class="{ 'form-group_error' : $v.file.$error }"
          class="form-group"
        >
          <label class="field-item">
            <div class="field-item__label">Photo</div>
            <div class="field-item__field">
              <div class="custom-file">
                <div 
                  :class="{active: file}"
                  class="custom-file__name"
                >
                  {{ file ? file.name : 'Upload your photo' }}
                </div>
                <div class="custom-file__btn">Browse</div>
                <input
                  @change="setFile"
                  type="file"
                  placeholder="Upload your photo" />
              </div>
            </div>

            <small class="field-item__error">
              <template v-if="!$v.file.required">
                Please add your photo
              </template>
              <template v-else-if="!$v.file.typeImage">
                The photo format must be jpeg/jpg type
              </template>
              <template v-else-if="!$v.file.sizeImage">
                The photo size must not be greater than 5 Mb
              </template>
            </small>
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
import { request, sendFormApi, getTokenApi } from '../api';
import { mapGetters, mapMutations } from "vuex";
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

const touchMap = new WeakMap();
const phonePattern = /^[+]{0,1}380([0-9]{9})$/;
const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

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
    ...mapGetters(['getToken']),

    getPositionId() {
      const position = this.positions.find(item => {
        return item.name === this.positionName;
      });

      return position.id;
    }
  },

  methods: {
    ...mapMutations(['openCloseModal', 'setModalData', 'forceRerenderForm', 'forceRerenderUsers', 'setToken']),

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
      this.delayTouch(this.$v.phone);
      
      const val = event.target.value;
      this.phone = '+380' + val.slice(4, 13).replace(/\D+/g, '');
    },

    delayTouch($v) {
      $v.$reset();
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v));
      }
      touchMap.set($v, setTimeout($v.$touch, 1000));
    },

    createFormData() {
      let formData = new FormData();
      formData.append('position_id', this.getPositionId);
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('photo', this.file);

      return formData;
    },

    async submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {

        try {

          this.submitStatus = 'OK';
          const formData = this.createFormData();
          let token = this.getToken;
          let response;

          response = await sendFormApi(formData, token);

          if (response.status === 401) {
            const newTokenData = await getTokenApi();
            this.setToken(newTokenData);
            token = newTokenData.token;

            response = await sendFormApi(formData, token);
          }

          const responseData = await response.json();

          if (responseData.success) {
            this.forceRerenderForm();
            this.forceRerenderUsers();
          } else {
            // proccess server errors
          }

          this.setModalData(responseData);
          this.openCloseModal(true);

        } catch(e) {
          // proccess network errors
        }
      }

    }
  },

  async mounted() {
    try {

      const positionsData = await request(`
        https://frontend-test-assignment-api.abz.agency/api/v1/positions
      `);
      this.positions = positionsData.positions;

    } catch(e) {
      // proccess server errors
    }
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
        return emailPattern.test(String(val).toLowerCase());
      }
    },

    phone: {
      required,
      validatePhone: val => {
        return phonePattern.test(String(val));
      }
    },

    positionName: {
      required
    },

    file: {
      required,
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