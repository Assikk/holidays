<template>
  <div class="my-4">
    <Title> Праздники 2021 года</Title>
    <Element v-for="(el, index) in page" :key="index" :el="el" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapState({
      page: (state) => state.element.page,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "element/get_page",
    }),
    getPage() {
      this.get_page("https://date.nager.at/api/v3/publicholidays/2021/RU");
    },
  },
  mounted() {
    this.getPage();
  },
};
</script>
