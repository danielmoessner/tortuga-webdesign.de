<template>
  <main>
    <!---->
    <SubNavigation :text="page?.navigation.title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      top="-165"
      width="900"
      svg-name="ueber-uns"
      :title="page?.header.title"
      :subtitle="page?.header.subtitle"
    />
    <!---->
    <section class="relative pt-20 pb-40 bg-gray-50">
      <div class="container">
        <div class="sm:flex sm:flex-col sm:align-center">
          <p class="mt-5 text-xl text-gray-700 sm:text-center">
            {{ page?.content.text }}
          </p>
        </div>
        <div
          class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3"
        >
          <div
            v-for="p in packages"
            :key="p.slug"
            class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
          >
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">
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
            <div class="px-6 pt-6 pb-8">
              <h3
                class="text-xs font-medium tracking-wide text-gray-900 uppercase"
              >
                {{ page?.content.features }}
              </h3>
              <ul class="mt-6 space-y-4">
                <li
                  v-for="feature in p.features"
                  :key="feature.text"
                  class="flex space-x-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 w-5 h-5 text-green-500"
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

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import SvgHeader from "@/components/SvgHeader.vue";
// import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("prices", () =>
  queryContent("/page/prices").findOne(),
);

const { data: packages } = await useAsyncData("packages", () =>
  queryContent("/packages").find(),
);
</script>
