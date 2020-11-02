<template>
  <main>
    <SubNavigation :text="page.title" class="bg-sunshine-100" />
    <!---->
    <section class="pt-32 pb-40 relative bg-sunshine-200">
      <div
        class="absolute min-h-screen z-0 left-1/2 transform -translate-x-1/2"
        style="width: 800px; top: -105px"
        v-html="require('@/assets/svg/kontakt.svg?include')"
      ></div>
      <div class="container">
        <div class="">
          <div class="flex justify-center items-center flex-col">
            <h1
              class="text-gray-100 text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
            >
              {{ page.header.title }}
            </h1>
            <p
              class="max-w-xl text-center text-2xl md:text-3xl text-gray-200 font-light tracking-wide mb-10"
            >
              {{ page.header.subtitle }}
            </p>
            <TealButton
              text="Anfrage per Mail stellen"
              href="mailto:kontakt@tortuga-webdesign.de?subject=Anfrage"
              class="mb-1"
            />
            <span class="tracking-wide text-sm font-light text-white"
              >Kostenloses Erstgespräch</span
            >
          </div>
        </div>
      </div>
    </section>
    <!---->
    <section class="pt-24 pb-32 bg-teal-700">
      <div class="container">
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-16 md:gap-x-8"
        >
          <div class="col-span-2 md:col-span-1">
            <h3 class="text-3xl font-bold text-gray-100">Kontaktdaten</h3>
          </div>
          <div>
            <h4 class="text-xl font-bold text-gray-100 mb-1">Telefon</h4>
            <p class="text-lg text-gray-200">Daniel Mössner</p>
            <a
              class="text-lg text-gray-200 underline hover:text-gray-100 active:text-white transition ease-in-out duration-150"
              href=""
            >
              0176 38385646
            </a>
          </div>
          <div>
            <h4 class="text-xl font-bold text-gray-100 mb-1">E-Mail</h4>
            <a
              class="text-lg text-gray-200 underline hover:text-gray-100 active:text-white transition ease-in-out duration-150"
              href=""
              >kontakt@tortuga-webdesign.de
            </a>
          </div>
          <div class="md:col-start-2">
            <h4 class="text-xl font-bold text-gray-100 mb-1">Adresse</h4>
            <address class="text-gray-200 text-lg not-italic">
              <span class="font-medium">Tortuga Webdesign</span> <br />
              Albert-Schweitzer-Str. 17b <br />
              85375 Neufahrn b. Freising
            </address>
          </div>
          <div class="col-start-1">
            <h3 class="text-3xl font-bold text-gray-100 mt-12 md:mt-0">
              Kontaktformular
            </h3>
          </div>
          <div class="col-span-2">
            <div class="p-4 bg-sunshine-200 rounded-lg overflow-hidden">
              <ContactForm
                ><TealButton text="Absenden" :submit="true"
              /></ContactForm>
            </div>
          </div>
          <div class="col-start-1">
            <h3 class="text-3xl font-bold text-gray-100 mt-12 md:mt-0">Maps</h3>
          </div>
          <div class="col-span-2">
            <div class="p-4 bg-sunshine-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170187.9866221967!2d11.496716990307563!3d48.203008313388644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e6df61b80d737%3A0xb6121f1e0704ba6a!2sTortuga+Webdesign!5e0!3m2!1sde!2sde!4v1551033670191"
                frameborder="0"
                style="border: 0; width: 100%; height: 450px"
                allowfullscreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---->
    <NewFooter />
    <!---->
  </main>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import SubNavigation from "@/components/SubNavigation.vue";
import NewFooter from "@/components/NewFooter.vue";
import TealButton from "@/components/TealButton.vue";
import MetaTags from "@/mixins/MetaTags.js";

export default {
  components: {
    TealButton,
    NewFooter,
    SubNavigation,
    ContactForm,
  },
  mixins: [MetaTags],
  layout: "new",
  async asyncData({ $content }) {
    const page = await $content("page/contact").fetch();

    return {
      page,
    };
  },
};
</script>
