<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      top="-30"
      width="1000"
      svg-name="rechtliches"
      :title="page?.header.title"
      :subtitle="page?.header.subtitle"
    />
    <!---->
    <section class="relative bg-white">
      <div
        class="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-5xl"
      >
        <article
          class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
        >
          <ContentRenderer v-if="page" :value="page"></ContentRenderer>
        </article>
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

const { data: page } = await useAsyncData("imprint", () =>
  queryContent("/page/imprint").findOne(),
);

useMeta(page);
</script>
