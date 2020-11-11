<template>
  <main class="">
    <SubNavigation :text="item.title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      width="800"
      top="-120"
      svg-name="referenzen"
      title="Referenz"
      :swap-heading-element="true"
      :subtitle="item.title"
    />
    <!---->
    <section class="pb-20 md:pt-32 md:pb-40 bg-sunshine-100 relative">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="">
            <StickyInfo
              :dark-tag="itemDate"
              :tags="item.tags"
              :title="item.title"
              :description="description"
            >
              <a
                v-if="item.url"
                target="_blank"
                class="underline transition ease-in-out duration-150 text-gray-900 hover:text-gray-700"
                :href="item.url"
              >
                {{ itemUrlClean }}
              </a>
              <div class="flex flex-wrap mt-12 md:mt-20">
                <GrayButton
                  text="Zurück zu allen Referenzen"
                  to="/referenzen/"
                  class="mb-2"
                />
              </div>
            </StickyInfo>
          </div>
          <div class="col-span-1 lg:col-span-2">
            <div class="border-4 border-teal-700 shadow-lg rounded-lg">
              <div class="bg-teal-700 rounded overflow-hidden">
                <img
                  :src="
                    require(`@/content/media/${item.image}?resize&size=1000`)
                  "
                  :alt="item.title"
                />
              </div>
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
import StickyInfo from "@/components/StickyInfo.vue";
import GrayButton from "@/components/GrayButton.vue";
import MetaTags from "@/mixins/MetaTags.js";
import SvgHeader from "@/components/SvgHeader.vue";

export default {
  components: {
    GrayButton,
    StickyInfo,
    SvgHeader,
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
      return this.item.description.split("\n").join("<br>");
    },
  },
};
</script>
