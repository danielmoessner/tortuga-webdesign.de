<template>
  <main>
    <!---->
    <base-section>
      <h1 class="text-6xl mb-24">Styleguide</h1>
      <!--  -->
      <StyleguideHeading text="Typography" />
      <div class="grid grid-cols-2 gap-8">
        <div class="grid grid-cols-1 gap-8">
          <StyleguideColumn text="Heading 1">
            <h1 class="text-6xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h1>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 2" class="col-start-1">
            <h2 class="text-4xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h2>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 3" class="col-start-1">
            <h3 class="text-3xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h3>
          </StyleguideColumn>
          <StyleguideColumn text="Heading 4" class="col-start-1">
            <h4 class="text-2xl tracking-tight leading-tight">
              Lorem dolor sit amet ti!
            </h4>
          </StyleguideColumn>
        </div>
        <div class="grid grid-cols-1 gap-8">
          <StyleguideColumn text="Paragraph" class="">
            <p class="text-lg mb-2 text-gray-800">
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
      <div class="grid grid-cols-3 gap-8">
        <StyleguideColumn text="Primary">
          <PrimaryButton />
        </StyleguideColumn>
        <StyleguideColumn text="Secondary">
          <TealButton />
        </StyleguideColumn>
        <StyleguideColumn text="Tertiary">
          <TertiaryButton />
        </StyleguideColumn>
      </div>
      <!--  -->
      <StyleguideHeading text="Color Palette" />
      <div class="grid grid-cols-5">
        <StyleguideColumn text="Warm" class="col-span-2">
          <div class="grid grid-cols-2">
            <StyleguideColumn text="Red (Hue: 0)">
              <div class="h-12 realtive bg-red-100"></div>
              <div class="h-12 realtive bg-red-200"></div>
              <div class="h-12 realtive bg-red-300">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 realtive bg-red-400">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 realtive bg-red-500"></div>
              <div class="h-12 realtive bg-red-600">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 realtive bg-red-700">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 realtive bg-red-800"></div>
              <div class="h-12 realtive bg-red-900"></div>
            </StyleguideColumn>
            <StyleguideColumn text="Sunshine (Hue: 40)">
              <div class="h-12 relative bg-sunshine-100"></div>
              <div class="h-12 relative bg-sunshine-200"></div>
              <div class="h-12 relative bg-sunshine-300"></div>
              <div class="h-12 relative bg-sunshine-400">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-sunshine-500">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-sunshine-600">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-sunshine-700">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-sunshine-800"></div>
              <div class="h-12 relative bg-sunshine-900"></div>
            </StyleguideColumn>
          </div>
        </StyleguideColumn>
        <StyleguideColumn text="Cool" class="col-span-2">
          <div class="grid grid-cols-2">
            <StyleguideColumn text="Teal (Hue: 180)">
              <div class="h-12 relative bg-teal-100"></div>
              <div class="h-12 relative bg-teal-200"></div>
              <div class="h-12 relative bg-teal-300">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-teal-400">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-teal-500"></div>
              <div class="h-12 relative bg-teal-600"></div>
              <div class="h-12 relative bg-teal-700">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-teal-800">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-teal-900"></div>
            </StyleguideColumn>
            <StyleguideColumn text="Blue (Hue: 220)">
              <div class="h-12 relative bg-blue-100"></div>
              <div class="h-12 relative bg-blue-200"></div>
              <div class="h-12 relative bg-blue-300">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-blue-400">
                <div class="absolute bg-black w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-blue-500"></div>
              <div class="h-12 relative bg-blue-600"></div>
              <div class="h-12 relative bg-blue-700">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-blue-800">
                <div class="absolute bg-gray-100 w-4 h-12 left-0"></div>
              </div>
              <div class="h-12 relative bg-blue-900"></div>
            </StyleguideColumn>
          </div>
        </StyleguideColumn>
        <StyleguideColumn text="Neutral" class="">
          <StyleguideColumn text="Gray">
            <div class="h-12 bg-gray-100"></div>
            <div class="h-12 bg-gray-200"></div>
            <div class="h-12 bg-gray-300"></div>
            <div class="h-12 bg-gray-400"></div>
            <div class="h-12 bg-gray-500"></div>
            <div class="h-12 bg-gray-600"></div>
            <div class="h-12 bg-gray-700"></div>
            <div class="h-12 bg-gray-800"></div>
            <div class="h-12 bg-gray-900"></div>
          </StyleguideColumn>
        </StyleguideColumn>
      </div>
      <!--  -->
      <StyleguideHeading text="Chosen Colors" />
      <div class="grid grid-cols-7">
        <div class="grid grid-cols-1 gap-4 justify-items-end col-start-2">
          <div class="h-24 w-24 bg-red-300 p-2 font-bold">
            <span class="text-black">Red 300</span>
          </div>
          <div class="h-24 w-24 bg-red-400 p-2 font-bold">
            <span class="text-black">Red 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100"></div>
          <div class="h-24 w-24 bg-red-600 p-2 font-bold">
            <span class="text-white">Red 600</span>
          </div>
          <div class="h-24 w-24 bg-red-700 p-2 font-bold">
            <span class="text-white">Red 700</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-end">
          <div class="p-2 font-bold h-24 w-24 bg-sunshine-400">
            <span class="text-black">Sunshine 400</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-sunshine-500">
            <span class="text-black">Sunshine 500</span>
          </div>
          <div class="w-full h-1 bg-gray-100"></div>
          <div class="p-2 font-bold h-24 w-24 bg-sunshine-600">
            <span class="text-white">Sunshine 600</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-sunshine-700">
            <span class="text-white">Sunshine 700</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-center">
          <div class="flex items-center justify-center relative w-full h-full">
            <div class="w-full h-1 bg-gray-100"></div>
            <div
              class="h-full w-1 bg-gray-100 absolute left-0 right-0 mx-auto"
            ></div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-start">
          <div class="p-2 font-bold h-24 w-24 bg-teal-300">
            <span class="text-black">Teal 300</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-teal-400">
            <span class="text-black">Teal 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100"></div>
          <div class="p-2 font-bold h-24 w-24 bg-teal-700">
            <span class="text-white">Teal 700</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-teal-800">
            <span class="text-white">Teal 800</span>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 justify-items-start">
          <div class="p-2 font-bold h-24 w-24 bg-blue-300">
            <span class="text-black">Blue 300</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-blue-400">
            <span class="text-black">Blue 400</span>
          </div>
          <div class="w-full h-1 bg-gray-100"></div>
          <div class="p-2 font-bold h-24 w-24 bg-blue-700">
            <span class="text-white">Blue 700</span>
          </div>
          <div class="p-2 font-bold h-24 w-24 bg-blue-800">
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
        <div class="col-span-2 flex justify-center items-center">
          <p class="text-center">
            Warm &amp; Light <br />
            with <br />
            Cool &amp; Dark
          </p>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-2 flex justify-center items-center">
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
    </base-section>
    <!---->
    <base-section>
      <TheFooter />
    </base-section>
    <!---->
  </main>
</template>
<script>
import BaseSection from "@/components/BaseSection.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHeaderReflection from "@/components/TheHeaderReflection.vue";
import TheSubpageHeader from "@/components/TheSubpageHeader.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import TealButton from "@/components/TealButton.vue";
import TertiaryButton from "@/components/TertiaryButton.vue";
import StyleguideColumn from "@/components/StyleguideColumn.vue";
import StyleguideHeading from "@/components/StyleguideHeading.vue";
import ColorCombination from "@/components/ColorCombination.vue";

export default {
  name: "Styleguide",
  components: {
    ColorCombination,
    StyleguideColumn,
    TertiaryButton,
    StyleguideHeading,
    PrimaryButton,
    TealButton,
    BaseSection,
    TheFooter,
    TheHeaderReflection,
    TheSubpageHeader
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Styleguide"
    };
  }
};
</script>
