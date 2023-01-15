<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <!---->
    <section class="lg:bg-gray-100 bg-sunshine-100">
      <div class="container">
        <div class="min-h-screen pb-24 pt-14 bg-sunshine-100">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-2xl font-bold text-gray-800">
              {{ page?.header.title }}
            </h1>
            <div
              class="mt-8 md:border-l md:border-gray-200 md:pl-6 md:dark:border-zinc-700/40"
            >
              <div class="flex flex-col space-y-16">
                <article
                  v-for="article in articles"
                  :key="article.title"
                  class="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div class="col-span-3">
                    <BlogCard
                      :title="article.title"
                      :description="article.description"
                      :slug="article.slug"
                      :date="formatDate(article.date)"
                      :button="page?.button"
                    />
                  </div>
                  <time
                    class="relative z-10 items-center order-first hidden mt-1 mb-3 text-sm text-gray-500 md:block dark:text-zinc-500"
                    :datetime="article.date"
                    >{{ formatDate(article.date) }}</time
                  >
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import BlogCard from "@/components/BlogCard.vue";
import { formatDate } from "@/lib/formatDate";
// import TealButton from "@/components/TealButton.vue";
// import SvgHeader from "@/components/SvgHeader.vue";
// import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("page", () =>
  queryContent("/page/blog").findOne(),
);
const { data: articles } = await useAsyncData("articles", () =>
  queryContent("/blog").sort({ date: -1 }).find(),
);

useMeta(page);
</script>
