<template>
  <div>
    <!--  <Preloader/>-->
    <Header/>
    <a href="#" class="scrollToTop"><i class="icofont-rounded-up"></i></a>
    <SearchArea/>
    <PageHeader/>
    <CustomFilter/>
    <Gallery/>
    <Newsletter/>
    <Footer/>
  </div>
</template>

<script>
import Preloader from "@/assets/MainLayout/preloader/Preloader";
import SearchArea from "@/components/SearchArea";
import PageHeader from "@/components/GalleryPage/PageHeader";
import Gallery from "@/components/GalleryPage/Gallery";
import Newsletter from "@/components/Newsletter";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import CustomFilter from "@/components/CustomFilter";

export default {
  name: "GalleryPage",
  components: {CustomFilter, Footer, Header, Newsletter, Gallery, PageHeader, SearchArea, Preloader}
}
</script>

<style scoped>

</style>