<template>
  <main class="">
    <!---->
    <SubNavigation :text="page?.thankYou.title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      :title="page?.thankYou.header.title"
      :subtitle="page?.thankYou.header.subtitle"
      width="800"
      top="-110"
      svg-name="hilfestellung"
    />
    <!---->
    <section class="relative pt-24 pb-24 bg-white md:pt-32 md:pb-40">
      <div class="container">
        <div class="border-l-4 rounded-md bg-sunshine-200 border-sunshine-700">
          <div class="p-6">
            <h2 class="mb-4 text-2xl font-bold text-sunshine-900">
              {{ page?.thankYou.text.title }}
            </h2>
            <p class="mb-1 text-sunshine-900">
              {{ page?.thankYou.text.text }}
            </p>
            <p class="">
              <nuxt-link
                class="underline text-sunshine-900 hover:text-sunshine-600"
                :to="page?.thankYou.text.link.to"
                target="_blank"
              >
                {{ page?.thankYou.text.link.text }}
              </nuxt-link>
            </p>
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

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("page", () =>
  queryContent("/page/leadgenerator").findOne(),
);

useMeta(page);
</script>
