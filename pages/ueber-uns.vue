<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <!--  -->
    <SvgHeader
      top="-165"
      width="900"
      svg-name="ueber-uns"
      :title="page?.header.title"
      :subtitle="page?.header.subtitle"
    />
    <!---->
    <section class="relative pt-20 pb-20 bg-teal-800 md:pt-32 md:pb-40">
      <div class="container">
        <div class="grid grid-cols-7 gap-12">
          <div class="col-span-7 md:col-span-4">
            <AnimateOnScroll>
              <div
                class="text-sm font-light leading-tight tracking-wider text-white uppercase md:text-base"
              >
                <span>{{ page?.about.pretitle }}</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="1">
              <h2
                class="mb-2 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl"
              >
                {{ page?.about.title }}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="2">
              <p class="mb-10 text-base text-gray-300 md:text-lg">
                {{ page?.about.subtitle }}
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll :delay="3">
              <p class="text-base text-gray-100 delay-300 md:text-lg">
                {{ page?.about.text }}
              </p>
            </AnimateOnScroll>
          </div>
          <div class="col-span-7 row-start-1 md:col-span-2 md:col-start-6">
            <div class="w-4/5 mx-auto md:w-full">
              <AnimateOnScroll>
                <img
                  class="bg-white border-4 rounded-full border-sunshine-500"
                  :src="`/media/${page?.about.image}`"
                  sizes="lg:800px"
                  alt="Daniel Mössner"
                />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- faq section -->
    <section class="pt-20 pb-20 bg-gray-100 md:pt-32 md:pb-40">
      <div class="container">
        <div class="flex flex-col items-center mb-10 md:mb-20">
          <AnimateOnScroll>
            <div class="max-w-xl">
              <h2 class="text-2xl font-bold text-center md:text-3xl">
                {{ page?.faq.title }}
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="1">
            <div class="max-w-xl">
              <div class="text-base text-gray-800 md:text-lg">
                {{ page?.faq.subtitle }}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <div class="">
          <div class="">
            <AnimateOnScroll
              v-for="(item, index) in page?.faq.questions"
              :key="index"
            >
              <BaseFaq
                class=""
                :question="item.question"
                :answer="item.answer"
              />
            </AnimateOnScroll>
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
<script lang="ts" setup>
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import BaseFaq from "@/components/BaseFaq.vue";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("about", () =>
  queryContent("/page/about").findOne(),
);
</script>
