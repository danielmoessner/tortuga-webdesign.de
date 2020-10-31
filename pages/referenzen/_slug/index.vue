<template>
  <main>
    <SubNavigation :text="item.title" class="bg-sunshine-100" />
    <!---->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute bg-no-repeat bg-cover w-full top-0 min-h-screen z-0"
        style="background-image: url('/referenzen.svg');background-size: 800px auto;background-position: 50% -120px;"
      ></div>
      <div class="container">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <h1
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              Referenz
            </h1>
            <p
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ item.title }}
            </p>
            <TealButton text="Jetzt zusammenarbeiten" class="mb-1" />
            <span class="tracking-wide text-sm font-light text-white"
              >Kostenloses Erstgespräch</span
            >
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-32 pb-40 bg-sunshine-100">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="">
            <StickyInfo
              :dark-tag="itemDate"
              :tags="item.tags"
              :title="item.title"
              :description="item.description"
            >
              <a
                class="underline transition ease-in-out duration-150 text-gray-900 hover:text-gray-700"
                :href="item.url"
                >{{ itemUrlClean }}</a
              >
            </StickyInfo>
          </div>
          <div class="col-span-1 lg:col-span-2">
            <div class="border-4 border-teal-700 shadow-lg rounded-lg">
              <div class="bg-teal-700 rounded overflow-hidden">
                <img :src="item.image" :alt="item.title" />
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <div class="flex flex-wrap">
              <GrayButton
                text="Zurück zu allen Referenzen"
                to="/referenzen/"
                class="mb-2"
              />
              <TealButton text="Jetzt zusammenarbeiten" to="/kontakt/" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <!---->
    <NewFooter
      bg-color="bg-teal-900"
      text-color="text-white"
      link-color="text-sunshine-200"
      hover-color="text-sunshine-300"
      :invert-logo="true"
    />
    <!---->
  </main>
</template>
<script>
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import TealButton from "@/components/TealButton.vue";
import StickyInfo from "@/components/StickyInfo.vue";
import GrayButton from "@/components/GrayButton.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    GrayButton,
    StickyInfo,
    TealButton,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content, params, error }) {
    let item;
    try {
      item = await $content("portfolio", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Referenz nicht gefunden." });
    }

    return {
      item,
    };
  },
  data() {
    return {
      slug: this.$route.params.slug,
      buttonText: "Die Webseite besuchen",
      buttonTarget: "_blank",
      subtitle: "Referenz",
      months: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
    };
  },
  computed: {
    buttonHref() {
      return this.item.url;
    },
    itemDate() {
      const date = new Date(this.item.date);
      return this.months[date.getMonth()] + " " + date.getFullYear();
    },
    itemUrlClean() {
      let url = this.item.url;
      return url.replace("https://", "").replace("http://", "");
    },
    title() {
      return this.item.title + " - Referenz";
    },
    description() {
      return this.item.description;
    },
  },
};
</script>
