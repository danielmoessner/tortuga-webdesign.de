<template>
  <main class="">
    <SubNavigation :text="title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      :title="item?.title"
      :sr-only-title="item?.srOnlyTitle"
      subtitle="Leistung"
      top="-110"
      width="800"
      svg-name="hilfestellung"
    />
    <!---->
    <section class="relative z-0 pt-32 pb-40 bg-white">
      <div
        class="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-5xl"
      >
        <article
          class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-xl"
        >
          <ContentRenderer v-if="item" :value="item"></ContentRenderer>
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
  </main>
</template>

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import SvgHeader from "@/components/SvgHeader.vue";

definePageMeta({ layout: "new", documentDrive: false });

const { params, path } = useRoute();

const { data: item } = await useAsyncData(`service-${path}`, () =>
  queryContent(`/service/${params.slug}`).findOne(),
);

if (!item.value?.title) {
  throw createError({
    statusCode: 404,
  });
}

const title = computed(() => {
  return `${item.value?.title} - ${item.value?.subtitle}`;
});
</script>
