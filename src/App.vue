<template>
  <div>
    <Header />
    <div class="wrap">
      <Menu />
      <Content />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header";
import Menu from "@/components/Layouts/Menu";
import Content from "@/components/Layouts/Content";
import Footer from "@/components/Layouts/Footer";

export default {
  name: "app",
  components: {
    Footer,
    Header,
    Menu,
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
