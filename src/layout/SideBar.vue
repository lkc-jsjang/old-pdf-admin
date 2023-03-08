<template>
  <v-navigation-drawer
    app
    v-model="project.drawer"
    :mini-variant="project.mini"
    clipped
    permanent
    color="green-500"
    width="200"
  >
    <v-list dense>
      <v-list-item-group v-model="selectedMenu" color="white">
        <v-list-item
          v-for="menu in menus"
          :key="menu.id"
          link
          @click="goPageUrl(menu.url)"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-button">
              {{ menu.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'SideBar',
  computed: {
    ...mapState(['project', 'menus']),
  },
  data() {
    return {
      selectedMenu: 0,
    };
  },
  methods: {
    goPageUrl(url) {
      if (this.$route.path != url) {
        this.$router.push({ path: url });
      }
    },
  },
};
</script>

<style></style>
