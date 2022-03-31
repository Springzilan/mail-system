<template>
  <div>122
    <navbar />
    <sidebar></sidebar>
    <app-main></app-main>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/SideBar.vue'
import AppMain from './components/AppMain.vue'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>
