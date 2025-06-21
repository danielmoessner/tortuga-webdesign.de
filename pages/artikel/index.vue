<template>
  <main class="">
    <SubNavigation small :text="page?.title" class="bg-sunshine-100" />
    <section class="lg:bg-gray-100 bg-sunshine-100">
      <div class="container small">
        <div class="min-h-screen pb-24 bg-sunshine-100 pt-14">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-2xl font-bold text-gray-800">
              {{ page?.body.header.title }}
            </h1>
            <div class="mt-8">
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
                      :slug="article.meta.slug"
                      :date="formatDate(article.meta.date)"
                      :button="page?.body.button"
                    />
                  </div>
                  <time
                    class="relative z-10 items-center order-first hidden mt-1 mb-3 text-sm text-gray-500 md:block"
                    :datetime="article.meta.date"
                    >{{ formatDate(article.meta.date) }}</time
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

definePageMeta({ layout: "narrow-layout" });

const { data: page } = await useAsyncData("page", () =>
  queryCollection("content").path("/page/blog").first(),
);
const { data: articles } = await useAsyncData("articles", () =>
  queryCollection("content").where("path", "LIKE", "/blog%").all(),
);

useMeta(page);
</script>
