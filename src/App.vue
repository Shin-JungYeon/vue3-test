<template>
  <div>
    <Header />
    <div class="wrap">
      <SideBar />
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import SideBar from "@/components/Layouts/SideBar";
import Content from "@/components/Layouts/Content";
import Footer from "@/components/Layouts/Footer";

export default {
  name: "app",
  components: {
    Footer,
    Header,
    SideBar,
    Content
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrap {
  display: flex;
}
</style>
