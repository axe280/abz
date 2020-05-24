<template>
  <div
    @click.self="openCloseModal(false)"
    class="simple-modal"
  >
    <div class="modal-inner">
      <div class="modal-content">
        <div class="modal-head">
          <button
            @click="openCloseModal(false)"
            class="modal-close"
          >&times;</button>
          <span class="title-site title-site_h2">
            {{ getModalData.title }}
          </span>
        </div>

        <div class="modal-body">
          <p>{{ getModalData.message }}</p>
        </div>

        <div class="modal-footer">
          <button
            @click="openCloseModal(false)"
            class="btn btn_min"
          >Great</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(['getModalData'])
  },

  methods: {
    ...mapMutations(['openCloseModal'])
  },
};
</script>