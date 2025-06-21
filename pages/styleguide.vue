<template>
  <main>
    <!---->
    <section class="pt-32 pb-40">
      <h1 class="mb-24 text-6xl">Styleguide</h1>
      <!--  -->
      <StyleguideHeading text="Typography" />
      <div class="grid grid-cols-2 gap-8">
        <div class="grid grid-cols-1 gap-8">
          <StyleguideColumn text="Heading 1">
            <h1 class="text-6xl leading-tight tracking-tight">
              Lorem dolor sit amet ti!
            </h1>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 2" class="col-start-1">
            <h2 class="text-4xl leading-tight tracking-tight">
              Lorem dolor sit amet ti!
            </h2>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 3" class="col-start-1">
            <h3 class="text-3xl leading-tight tracking-tight">
              Lorem dolor sit amet ti!
            </h3>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 4" class="col-start-1">
            <h4 class="text-2xl leading-tight tracking-tight">
              Lorem dolor sit amet ti!
            </h4>
          </StyleguideColumn>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <StyleguideColumn text="Paragraph" class="">
            <p class="mb-2 text-lg text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              quas magni distinctio doloremque laudantium odit ea non nostrum
              eveniet quisquam nobis, inventore repudiandae, nemo vel culpa
              animi porro eaque! Nisi?
            </p>
            <p class="text-lg text-gray-800">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              nobis facere incidunt aliquam nihil facilis voluptatum. Distinctio
              officiis provident sint vitae recusandae harum, eos consequatur?
              Quasi maiores maxime eius ea.
            </p>
          </StyleguideColumn>
          <StyleguideColumn text="Paragraph Small">
            <p class="mb-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              provident aperiam iure totam distinctio dolorum, repudiandae quod
              molestiae hic esse qui alias. Aliquid dicta itaque, earum placeat
              vel iure doloremque.
            </p>
            <p class="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              reiciendis unde molestiae itaque voluptatem, nostrum quo nam!
              Maiores consequuntur tempora, quis accusamus officia, et, eveniet
              iure sit dolor aliquid vero?
            </p>
          </StyleguideColumn>
        </div>
      </div>
      <!--  -->
      <StyleguideHeading text="Buttons" />
      <div class="grid grid-cols-4 gap-8">
        <StyleguideColumn text="Red">
          <RedButton />
        </StyleguideColumn>
        <StyleguideColumn text="Teal">
          <TealButton />
        </StyleguideColumn>
        <StyleguideColumn text="Sunshine">
          <SunshineButton />
        </StyleguideColumn>
        <StyleguideColumn text="Blue">
          <BlueButton />
        </StyleguideColumn>
      </div>
      <!--  -->
      <StyleguideHeading text="Color Palette" />
      <div class="grid grid-cols-5">
        <StyleguideColumn text="Warm" class="col-span-2">
          <div class="grid grid-cols-2">
            <StyleguideColumn text="Red (Hue: 0)">
              <StyleguideColor color="FFFAFA" />
              <StyleguideColor color="FCD7D8" />
              <StyleguideColor color="FAB5B6" :selected="true" />
              <StyleguideColor color="EF7577" :selected="true" />
              <StyleguideColor color="DD4447" />
              <StyleguideColor color="C12326" :selected="true" />
              <StyleguideColor color="9B0F11" :selected="true" />
              <StyleguideColor color="690506" />
              <StyleguideColor color="330102" />
            </StyleguideColumn>
            <StyleguideColumn text="Sunshine (Hue: 40)">
              <StyleguideColor color="FFFDFA" />
              <StyleguideColor color="FEF2D8" />
              <StyleguideColor color="FDE6B7" />
              <StyleguideColor color="F6CC79" :selected="true" />
              <StyleguideColor color="E0AC45" :selected="true" />
              <StyleguideColor color="926A1B" :selected="true" />
              <StyleguideColor color="724F0B" :selected="true" />
              <StyleguideColor color="684705" />
              <StyleguideColor color="664502" />
            </StyleguideColumn>
          </div>
        </StyleguideColumn>
        <StyleguideColumn text="Cool" class="col-span-2">
          <div class="grid grid-cols-2">
            <StyleguideColumn text="Teal (Hue: 180)">
              <StyleguideColor color="FAFFFF" />
              <StyleguideColor color="D6FBFB" />
              <StyleguideColor color="B2F6F6" :selected="true" />
              <StyleguideColor color="6DDFDF" :selected="true" />
              <StyleguideColor color="38B6B6" />
              <StyleguideColor color="188282" :selected="true" />
              <StyleguideColor color="085656" :selected="true" />
              <StyleguideColor color="033C3C" />
              <StyleguideColor color="013333" />
            </StyleguideColumn>
            <StyleguideColumn text="Blue (Hue: 220)">
              <StyleguideColor color="FAFCFF" />
              <StyleguideColor color="D7E4FD" />
              <StyleguideColor color="B6CDFB" :selected="true" />
              <StyleguideColor color="77A0F3" :selected="true" />
              <StyleguideColor color="477CE5" />
              <StyleguideColor color="265FD1" />
              <StyleguideColor color="1148B4" :selected="true" />
              <StyleguideColor color="07348F" :selected="true" />
              <StyleguideColor color="022366" />
            </StyleguideColumn>
          </div>
        </StyleguideColumn>
        <StyleguideColumn text="Neutral" class="">
          <StyleguideColumn text="Gray">
            <StyleguideColor color="eaebeb" />
            <StyleguideColor color="d5d7d8" />
            <StyleguideColor color="b7bbbd" />
            <StyleguideColor color="92979b" />
            <StyleguideColor color="72777b" />
            <StyleguideColor color="62676a" />
            <StyleguideColor color="4e5255" />
            <StyleguideColor color="36393a" />
            <StyleguideColor color="1d1f20" />
          </StyleguideColumn>
        </StyleguideColumn>
      </div>
      <!--  -->
      <StyleguideHeading text="Chosen Colors" />
      <div class="grid grid-cols-7">
        <div class="grid grid-cols-1 col-start-2 gap-4 justify-items-end">
          <div class="w-24 h-24 p-2 font-bold bg-red-300">
            <span class="text-black">Red 300</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-red-400">
            <span class="text-black">Red 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100" />
          <div class="w-24 h-24 p-2 font-bold bg-red-600">
            <span class="text-white">Red 600</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-red-700">
            <span class="text-white">Red 700</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-end">
          <div class="w-24 h-24 p-2 font-bold bg-sunshine-400">
            <span class="text-black">Sunshine 400</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-sunshine-500">
            <span class="text-black">Sunshine 500</span>
          </div>
          <div class="w-full h-1 bg-gray-100" />
          <div class="w-24 h-24 p-2 font-bold bg-sunshine-600">
            <span class="text-white">Sunshine 600</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-sunshine-700">
            <span class="text-white">Sunshine 700</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-center">
          <div class="relative flex items-center justify-center w-full h-full">
            <div class="w-full h-1 bg-gray-100" />
            <div
              class="absolute left-0 right-0 w-1 h-full mx-auto bg-gray-100"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-start">
          <div class="w-24 h-24 p-2 font-bold bg-teal-300">
            <span class="text-black">Teal 300</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-teal-400">
            <span class="text-black">Teal 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100" />
          <div class="w-24 h-24 p-2 font-bold bg-teal-700">
            <span class="text-white">Teal 700</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-teal-800">
            <span class="text-white">Teal 800</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-start">
          <div class="w-24 h-24 p-2 font-bold bg-blue-300">
            <span class="text-black">Blue 300</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-blue-400">
            <span class="text-black">Blue 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100" />
          <div class="w-24 h-24 p-2 font-bold bg-blue-700">
            <span class="text-white">Blue 700</span>
          </div>
          <div class="w-24 h-24 p-2 font-bold bg-blue-800">
            <span class="text-white">Blue 800</span>
          </div>
        </div>
      </div>
      <StyleguideHeading text="Color Combinations" />
      <div class="grid grid-cols-6 gap-4 mb-8">
        <div class="grid grid-cols-4 col-span-4 gap-4">
          <ColorCombination color1="red-300" color2="teal-700" />
          <ColorCombination color1="red-300" color2="teal-800" />
          <ColorCombination color1="red-300" color2="blue-700" />
          <ColorCombination color1="red-300" color2="blue-800" />
          <ColorCombination color1="red-400" color2="teal-700" />
          <ColorCombination color1="red-400" color2="teal-800" />
          <ColorCombination color1="red-400" color2="blue-700" />
          <ColorCombination color1="red-400" color2="blue-800" />
          <ColorCombination color1="sunshine-400" color2="teal-700" />
          <ColorCombination color1="sunshine-400" color2="teal-800" />
          <ColorCombination color1="sunshine-400" color2="blue-700" />
          <ColorCombination color1="sunshine-400" color2="blue-800" />
          <ColorCombination color1="sunshine-500" color2="teal-700" />
          <ColorCombination color1="sunshine-500" color2="teal-800" />
          <ColorCombination color1="sunshine-500" color2="blue-700" />
          <ColorCombination color1="sunshine-500" color2="blue-800" />
        </div>
        <div class="flex items-center justify-center col-span-2">
          <p class="text-center">
            Warm &amp; Light <br />
            with <br />
            Cool &amp; Dark
          </p>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="flex items-center justify-center col-span-2">
          <p class="text-center">
            Warm &amp; Dark <br />
            with <br />
            Cool &amp; Light
          </p>
        </div>
        <div class="grid grid-cols-4 col-span-4 gap-4">
          <ColorCombination color1="red-600" color2="teal-300" />
          <ColorCombination color1="red-600" color2="teal-400" />
          <ColorCombination color1="red-600" color2="blue-300" />
          <ColorCombination color1="red-600" color2="blue-300" />
          <ColorCombination color1="red-700" color2="teal-300" />
          <ColorCombination color1="red-700" color2="teal-400" />
          <ColorCombination color1="red-700" color2="blue-300" />
          <ColorCombination color1="red-700" color2="blue-300" />
          <ColorCombination color1="sunshine-600" color2="teal-300" />
          <ColorCombination color1="sunshine-600" color2="teal-400" />
          <ColorCombination color1="sunshine-600" color2="blue-300" />
          <ColorCombination color1="sunshine-600" color2="blue-300" />
          <ColorCombination color1="sunshine-700" color2="teal-300" />
          <ColorCombination color1="sunshine-700" color2="teal-400" />
          <ColorCombination color1="sunshine-700" color2="blue-300" />
          <ColorCombination color1="sunshine-700" color2="blue-300" />
        </div>
      </div>
    </section>

    <!---->
  </main>
</template>

<script setup lang="ts">
import RedButton from "@/components/RedButton.vue";
import TealButton from "@/components/TealButton.vue";
import SunshineButton from "@/components/SunshineButton.vue";
import StyleguideColumn from "@/components/StyleguideColumn.vue";
import StyleguideHeading from "@/components/StyleguideHeading.vue";
import ColorCombination from "@/components/ColorCombination.vue";
import StyleguideColor from "@/components/StyleguideColor.vue";
import BlueButton from "@/components/BlueButton.vue";

definePageMeta({ layout: "new" });
</script>
