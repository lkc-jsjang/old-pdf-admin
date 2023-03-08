<template>
  <v-app-bar app clipped-left dense flat color="bg-white">
    <v-app-bar-nav-icon @click.stop="drawerAction" />
    <v-toolbar-title class="font-weight-bold">COUPON</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['project']),
  },
  data() {
    return {};
  },
  methods: {
    drawerAction() {
      this.project.mini = !this.project.mini;
    },
  },
};
</script>

<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  border-bottom: 1px solid rgb(238, 238, 238) !important;
}
</style>
