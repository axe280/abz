<template>
  <section class="users-section">
    <div class="container">
      <div class="seciton-header">
        <div class="title-site title-site_h1 text_center">Our cheerful users</div>
        <p>Attention! Sorting users by registration date</p>
      </div>

      <div class="users-wrap-list">
        <ul class="users-list">
          <li 
            v-for="user in users"
            :key="user.id"
            class="user-item"
          >
            <div class="user-item-info">
              <div class="user-item__avatar">
                <img :src="user.photo" alt="" />
              </div>

              <div class="user-item__name">
                {{ user.name }}
              </div>

              <div class="user-item_position">
                {{ user.position }}
              </div>

              <div class="user-item__contact">
                <a 
                  :href="`mailto: ${user.email}`"
                  :content="user.email"
                  v-tippy="{
                    followCursor: 'horizontal',
                    placement: 'bottom',
                    animateFill: false,
                    animation : 'shift-toward'
                  }"
                >
                  {{ user.email }}
                </a>
              </div>

              <div class="user-item__contact">
                <a 
                  :href="`tel: ${user.phone}`"
                  :content="formatPhone(user.phone)"
                  v-tippy="{
                    followCursor: 'horizontal',
                    placement: 'bottom',
                    animateFill: false,
                    animation : 'shift-toward'
                  }"
                >
                  {{ formatPhone(user.phone) }}
                </a>
              </div>
            </div>
          </li>
        </ul>

        <button 
          :style="buttonHidden"
          @click="showMore"
          class="btn"
          type="button"
        >Show more</button>
      </div>
    </div>
  </section>
</template>

<script>
import usersSortByDate from '../helpers/sortusers.js';
import { request } from '../api';

export default {
  data() {
    return {
      showMoreButton: true,
      page: 1,
      count: 3,
      users: []
    }
  },

  computed: {
    buttonHidden() {
      return {
        display: !this.showMoreButton ? 'none' : ''
      };
    }
  },

  methods: {
    formatPhone(phoneNumber) {
      const partNumber1 = phoneNumber.slice(0, 4),
            partNumber2 = phoneNumber.slice(4, 6),
            partNumber3 = phoneNumber.slice(6, 9),
            partNumber4 = phoneNumber.slice(9, 11),
            partNumber5 = phoneNumber.slice(11, 13);

      const completePhoneNumber = `
        ${partNumber1} ${partNumber2} ${partNumber3} ${partNumber4} ${partNumber5}
      `;

      return completePhoneNumber;
    },

    async showMore() {
      try {

        this.page = this.page + 1;

        const data = await request(`
          https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=${this.count}
        `);

        if(data.success) {
          const users = usersSortByDate(data.users);

          users.forEach(user => {
            this.users.push(user);
          });

          if (data.total_pages === this.page) {
            this.showMoreButton = false;
          }
        } else {
          this.page = this.page - 1;
        }

      } catch(e) {
        // proccess server errors
        this.page = this.page - 1;
      }
    }
  },

  async mounted() {
    if (window.innerWidth > 767) {
      this.count = 6;
    }
  
    try {

      const data = await request(`
        https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=${this.count}
      `);

      if(data.success) {
        this.count = data.count;
        this.page = data.page;
        
        const users = usersSortByDate(data.users);
        this.users = users;
      } else {
        // proccess server errors
      }

    } catch(e) {
      // proccess server errors
    }
  }
};
</script>