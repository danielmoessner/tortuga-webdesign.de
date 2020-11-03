<template>
  <div>
    <form
      ref="contactForm"
      name="contact"
      data-netlify="true"
      method="post"
      action="/kontakt/danke/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="grid grid-cols-5 md:grid-cols-7 md:gap-4 gap-y-1">
        <div
          class="col-span-5 md:col-span-2 flex items-start md:justify-end mt-4 md:mt-2"
        >
          <label for="name" class="pl-1 md:pr-0 block text-right"
            >Vor- &amp; Nachname</label
          >
        </div>
        <div class="col-span-5">
          <div class="flex items-center w-full">
            <div class="relative w-full">
              <input
                id="name"
                class="form-input placeholder-gray-300 pl-10 w-full border-opacity-75 focus:shadow-teal"
                type="text"
                name="name"
                placeholder="Max Müller"
              />
              <span
                class="absolute flex h-10 items-center justify-center left-0 text-gray-300 top-0 w-10"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="svg-inline--fa fa-user fa-w-14"
                >
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    class=""
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 col-span-5">
          <div class="flex items-start md:justify-end mt-4 md:mt-2">
            <label class="pl-1 md:pr-0 block text-right" for="mail">
              Geschäftliche E-Mail
            </label>
          </div>
        </div>
        <div class="col-span-5">
          <div class="flex items-center">
            <div class="relative w-full">
              <input
                id="mail"
                class="form-input placeholder-gray-300 pl-10 w-full border-opacity-75 focus:shadow-teal"
                type="email"
                name="email"
                placeholder="max@mustermann.de"
              />
              <span
                class="absolute flex h-10 items-center justify-center left-0 text-gray-300 top-0 w-10"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-envelope fa-w-16"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    class=""
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-5 md:col-span-2">
          <div class="flex items-start md:justify-end mt-4 md:mt-2">
            <label class="pl-1 md:pr-0 block text-right" for="website"
              >Webseite (optional)
            </label>
          </div>
        </div>
        <div class="col-span-5">
          <div class="flex items-center">
            <div class="relative w-full">
              <input
                id="website"
                class="form-input placeholder-gray-300 pl-10 w-full border-opacity-75 focus:shadow-teal"
                type="text"
                name="website"
                placeholder="maxmustermann.de"
              />
              <span
                class="absolute flex h-10 items-center justify-center left-0 text-gray-300 top-0 w-10"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="svg-inline--fa fa-home fa-w-18"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    class=""
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="col-span-5 md:col-span-2">
          <div class="flex items-start md:justify-end mt-4 md:mt-2">
            <label class="pl-1 md:pr-0 block text-right" for="message"
              >Weitere Projektdetails (optional)
            </label>
          </div>
        </div>
        <div class="col-span-5">
          <div class="flex items-center">
            <textarea
              id="message"
              rows="4"
              class="form-textarea placeholder-gray-300 w-full border-opacity-75 focus:shadow-teal"
              name="message"
              placeholder="Erzählen Sie uns mehr über Ihr Unternehmen oder Geschäft, Ihre Anforderungen und weitere Spezifika."
            ></textarea>
          </div>
        </div>
        <div class="col-span-5 md:col-span-2">
          <div class="flex items-start mt-2 md:justify-end">
            <label class="pl-1 md:pr-0 block text-right">Datenschutz</label>
          </div>
        </div>
        <div class="col-span-5">
          <div class="flex items-center">
            <div class="relative w-full">
              <div class="flex items-center form-input placeholder-gray-300">
                <input
                  id="dataprotection"
                  type="checkbox"
                  class="form-checkbox text-teal-600 focus:shadow-teal border-opacity-75 ml-0 mr-3 w-5 h-5 cursor-pointer"
                  name="dataprotection"
                  required
                />
                <label class="leading-tight" for="dataprotection">
                  Ich habe die
                  <a class="underline" href="/datenschutz"
                    >Informationen zur Datenverarbeitung</a
                  >
                  zur Kenntnis genommen. Meine angegebenen Daten werden zum
                  Zweck der Bearbeitung meiner Anfrage von Tortuga Webdesign
                  gespeichert.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 md:col-start-3">
          <div class="flex items-center col-start-3 pt-6 md:pt-3 pb-2">
            <slot> </slot>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  components: {},
};
</script>
<style scoped>
.mt-08 {
  margin-top: 0.8rem;
}

.checkbox {
  display: flex;
  height: auto;
}
.checkbox input {
  margin-right: 10px;
  margin-left: 8px;
  min-width: 13px;
}

.checkbox label {
  cursor: pointer;
}

.field-label {
  flex-grow: 2;
}
</style>
