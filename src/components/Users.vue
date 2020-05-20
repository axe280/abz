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
                <img :src="user.photo" />
              </div>
              <div class="user-item__name">
                {{ user.name }}
              </div>
              <div class="user-item_position">
                {{ user.position }}
              </div>
              <div class="user-item__contact">
                <a :href="`mailto: ${user.email}`">
                  {{ user.email }}
                </a>
              </div>
              <div class="user-item__contact">
                <a :href="`tel: ${user.phone}`">
                  {{ user.phone }}
                </a>
              </div>
            </div>
          </li>
        </ul>

        <button 
          :style="{ display: !showMoreButton ? 'none' : ''}"
          @click="showMore"
          class="btn"
          type="button"
        >Show more</button>
      </div>
    </div>
  </section>
</template>

<script>
import request from '../api'

export default {
  data() {
    return {
      showMoreButton: true,
      page: null,
      count: null,
      users: []
    }
  },

  methods: {
    async showMore() {
      this.page = this.page + 1;

      const data = await request(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=${this.count}`);

      if (data.success){
        data.users.forEach(user => {
          this.users.push(user);
        });
      } else {
        this.page = this.page - 1;
      }
      
      if (data.total_pages === this.page) {
        this.showMoreButton = false;
      }
    }
  },

  async mounted() {
    const data = await request(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5`);

    this.count = data.count;
    this.page = data.page;
    this.users = data.users;
  }
};
</script>