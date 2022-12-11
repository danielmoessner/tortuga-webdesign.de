<template>
  <main class="">
    <SubNavigation :text="page?.title" class="bg-sunshine-100" />
    <!---->
    <SvgHeader
      :title="page?.header.title"
      :subtitle="page?.header.subtitle"
      width="800"
      top="-105"
      svg-name="kontakt"
    >
      <AnimateOnScroll :delay="2">
        <TealButton
          text="Anfrage per Mail stellen"
          href="mailto:kontakt@tortuga-webdesign.de?subject=Anfrage"
          class="mb-1"
        />
      </AnimateOnScroll>
      <AnimateOnScroll :delay="3">
        <span class="block text-sm font-light tracking-wide text-white"
          >Kostenloses Erstgespräch</span
        >
      </AnimateOnScroll>
    </SvgHeader>
    <!---->
    <section class="relative pt-20 pb-24 bg-teal-700 md:pt-24 md:pb-32">
      <div class="container">
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-y-16 md:gap-x-8"
        >
          <div class="col-span-2 md:col-span-1">
            <AnimateOnScroll :delay="1">
              <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
                Kontaktdaten
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll :delay="1">
            <div>
              <h3 class="mb-1 text-lg font-bold text-gray-100 md:text-xl">
                Telefon
              </h3>
              <p class="text-base text-gray-200 md:text-lg">Daniel Mössner</p>
              <a
                class="text-base text-gray-200 underline transition ease-in-out md:text-lg hover:text-gray-100 active:text-white"
                href="tel:004917638385646"
              >
                0176 38385646
              </a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll :delay="2">
            <div>
              <h3 class="mb-1 text-lg font-bold text-gray-100 md:text-xl">
                E-Mail
              </h3>
              <a
                class="text-base text-gray-200 underline transition duration-150 ease-in-out md:text-lg hover:text-gray-100 active:text-white"
                href="mailto:kontakt@tortuga-webdesign.de?subject=Anfrage"
                >kontakt@tortuga-webdesign.de
              </a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll
            class="col-span-2 md:col-start-2 md:col-span-2"
            :delay="3"
          >
            <div>
              <h3 class="mb-1 text-lg font-bold text-gray-100 md:text-xl">
                Adresse
              </h3>
              <address class="text-base not-italic text-gray-200 md:text-lg">
                <span class="font-medium">Tortuga Webdesign</span> <br />
                Albert-Schweitzer-Str. 17b <br />
                85375 Neufahrn b. Freising
              </address>
            </div>
          </AnimateOnScroll>
          <div class="col-start-1">
            <AnimateOnScroll>
              <h3
                class="mt-12 text-2xl font-bold text-gray-100 md:text-3xl md:mt-0"
              >
                Maps
              </h3>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll class="col-span-2" :delay="1">
            <div>
              <div class="p-4 overflow-hidden rounded-lg bg-sunshine-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191"
                  frameborder="0"
                  title="Standort"
                  style="border: 0; width: 100%; height: 450px"
                  allowfullscreen="false"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
    <!---->
    <NewFooter />
    <!---->
  </main>
</template>

<script setup lang="ts">
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import TealButton from "@/components/TealButton.vue";
import SvgHeader from "@/components/SvgHeader.vue";
import AnimateOnScroll from "@/components/AnimateOnScroll.vue";

definePageMeta({ layout: "new" });

const { data: page } = await useAsyncData("contact", () =>
  queryContent("/page/contact").findOne(),
);
</script>
