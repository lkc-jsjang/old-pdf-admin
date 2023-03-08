<template>
  <v-app>
    <Header />

    <SideBar />
    <Contents />
    <Footer />
  </v-app>
</template>

<script>
import Contents from './Contents.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import SideBar from './SideBar.vue';
export default {
  components: { Header, Contents, Footer, SideBar },
  name: 'Layout',
};
</script>

<style></style>
