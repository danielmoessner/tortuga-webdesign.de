<template>
  <main class="">
    <SubNavigation small :text="page.title" class="bg-sunshine-100" />
    <section class="lg:bg-gray-100 bg-sunshine-100">
      <div class="container small">
        <div class="min-h-screen pb-24 bg-sunshine-100 pt-14">
          <div class="max-w-3xl mx-auto">
            <h1 class="text-2xl font-bold text-gray-800">
              {{ page.meta.header.title }}
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
                      :slug="article.slug"
                      :date="formatDate(article.date)"
                      :button="page.meta.button"
                    />
                  </div>
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

const { data: page } = await useAsyncData("blog", () =>
  queryCollection("seiten").path("/page/blog").first(),
);
const { data: articles } = await useAsyncData("articles", () =>
  queryCollection("artikel").all(),
);

useMeta(page);
</script>
