<template>
  <div
    class="mb-6 overflow-hidden rounded-lg bg-white shadow-md relative"
    @click="clicked"
  >
    <div
      ref="question"
      class="cursor-pointer flex justify-between shadow relative rounded-lg"
    >
      <div
        class="font-bold text-base md:text-lg text-gray-800 flex items-center flex-grow px-3 md:px-4 py-2 md:py-3 pl-4 md:pl-5 leading-tight"
      >
        {{ question }}
      </div>
      <div
        class="flex items-center justify-center px-3 py-3"
        :style="iconStyle"
      >
        <span class="icon text-teal-700">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            class="svg-inline--fa fa-angle-down fa-w-10 fill-current w-8"
          >
            <path
              fill="currentColor"
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              class=""
            ></path>
          </svg>
        </span>
      </div>
    </div>
    <div
      ref="answer"
      class="transition-all ease-in-out duration-500 bg-white"
      :style="{ height: answerHeight }"
    >
      <div class="p-3 md:p-4 pl-4 md:pl-5 text-base md:text-lg">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFaq",
  components: {},
  props: {
    question: {
      required: true,
      type: String,
    },
    answer: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    answerHeight() {
      return this.isOpen && this.$refs.answer
        ? this.$refs.answer.scrollHeight + "px"
        : 0;
    },
    iconStyle() {
      return this.isOpen ? { transform: "scaleY(-1)" } : {};
    },
  },
  methods: {
    clicked() {
      this.isOpen = this.isOpen ? false : true;
    },
  },
};
</script>
