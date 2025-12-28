<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <SvgHeader
      :title="page?.meta.thankYou.header.title"
      :subtitle="page?.meta.thankYou.header.subtitle"
      width="800"
      top="-110"
      svg-name="hilfestellung"
    />
    <section class="relative pt-24 pb-24 bg-white md:pt-32 md:pb-40">
      <div class="container">
        <div class="border-l-4 rounded-md bg-sunshine-200 border-sunshine-700">
          <div class="p-6">
            <h2 class="mb-4 text-2xl font-bold text-sunshine-900">
              {{ page?.meta.thankYou.text.title }}
            </h2>
            <p class="mb-1 text-sunshine-900">
              {{ page?.meta.thankYou.text.text }}
            </p>
            <p class="">
              <nuxt-link
                class="underline text-sunshine-900 hover:text-sunshine-600"
                :to="page?.meta.thankYou.text.link.to"
                target="_blank"
              >
                {{ page?.meta.thankYou.text.link.text }}
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <NewFooter
      bg-color="bg-teal-900"
      text-color="text-white"
      link-color="text-sunshine-200"
      hover-color="text-sunshine-300"
      :invert-logo="true"
    />
  </main>
</template>

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import SvgHeader from "@/components/SvgHeader.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("page", () =>
  queryCollection("seiten").path("/page/leadgenerator").first(),
);

useMeta(page);
</script>
