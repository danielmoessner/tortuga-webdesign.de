<template>
  <main>
    <!---->
    <SubNavigation :text="page.navigation.title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      top="-165"
      width="900"
      svg-name="ueber-uns"
      :title="page.header.title"
      :subtitle="page.header.subtitle"
    />
    <!---->
    <section class="pt-20 pb-40 bg-gray-50 relative">
      <div class="container">
        <div class="sm:flex sm:flex-col sm:align-center">
          <p class="mt-5 text-xl text-gray-700 sm:text-center">
            {{ page.content.text }}
          </p>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3"
        >
          <div
            v-for="p in packages"
            :key="p.slug"
            class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
          >
            <div class="p-6">
              <h2 class="text-lg leading-6 font-medium text-gray-900">
                {{ p.title }}
              </h2>
              <p class="mt-4 text-sm text-gray-500">
                {{ p.description }}
              </p>
              <p class="mt-8">
                <span class="text-4xl font-extrabold text-gray-900">
                  {{ p.price }},00 €
                </span>
                {{ " " }}
                <span class="text-base font-medium text-gray-500">(Netto)</span>
              </p>
            </div>
            <div class="pt-6 pb-8 px-6">
              <h3
                class="text-xs font-medium text-gray-900 tracking-wide uppercase"
              >
                {{ page.content.features }}
              </h3>
              <ul class="mt-6 space-y-4">
                <li
                  v-for="feature in p.features"
                  :key="feature.text"
                  class="flex space-x-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm text-gray-500">{{ feature.text }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import MetaTags from "@/mixins/MetaTags.js";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

export default {
  components: {
    AnimateOnScroll,
    SvgHeader,
    NewFooter,
    SubNavigation,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/prices").fetch();
    const packages = await $content("packages").fetch();

    return {
      page,
      packages,
    };
  },
  data() {
    return {
      tiers: [
        {
          name: "Hobby",
          href: "#",
          priceMonthly: 12,
          description: "All the basics for starting a new business",
          includedFeatures: [
            "Potenti felis, in cras at at ligula nunc.",
            "Orci neque eget pellentesque.",
          ],
        },
        {
          name: "Freelancer",
          href: "#",
          priceMonthly: 24,
          description: "All the basics for starting a new business",
          includedFeatures: [
            "Potenti felis, in cras at at ligula nunc. ",
            "Orci neque eget pellentesque.",
            "Donec mauris sit in eu tincidunt etiam.",
          ],
        },
        {
          name: "Startup",
          href: "#",
          priceMonthly: 32,
          description: "All the basics for starting a new business",
          includedFeatures: [
            "Potenti felis, in cras at at ligula nunc. ",
            "Orci neque eget pellentesque.",
            "Donec mauris sit in eu tincidunt etiam.",
            "Faucibus volutpat magna.",
          ],
        },
        {
          name: "Enterprise",
          href: "#",
          priceMonthly: 48,
          description: "All the basics for starting a new business",
          includedFeatures: [
            "Potenti felis, in cras at at ligula nunc. ",
            "Orci neque eget pellentesque.",
            "Donec mauris sit in eu tincidunt etiam.",
            "Faucibus volutpat magna.",
            "Id sed tellus in varius quisque.",
            "Risus egestas faucibus.",
            "Risus cursus ullamcorper.",
          ],
        },
      ],
    };
  },
};
</script>
