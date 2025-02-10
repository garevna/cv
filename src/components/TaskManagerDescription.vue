<script setup lang="ts">
import LinkButton from './LinkButton.vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})

function callback() {
  console.log('Callback!')
  window.open('https://garevna.github.io/projects-and-tasks', '_blank')
}
</script>
<template>
  <div v-if="props.isActive" style="max-width: 100vw; padding: 0 16px">
    <h2>Task manager <LinkButton alt="Task manager" :callback="callback" /></h2>
    <!-- <a href="https://garevna.github.io/projects-and-tasks" target="_blank">
      <button class="demo">
        Demo version
        <img
          src="/src/assets/open-in-new.svg"
          width="24"
          height="24"
          alt="Open demo version"
          class="highlighted-on-hover"
          style="vertical-align: text-bottom"
        />
      </button>
    </a> -->

    <p>Stack: Vue 3 | Typescript | Pinia | axios | IndexedDB</p>

    <h3>API</h3>

    <p>The project allows two API options:</p>
    <p>1. json-server</p>
    <p>2. local database (IndexedDB).</p>

    <h4>json-server</h4>

    <p>If you choose the first option, you will need to install the json-server package:</p>

    <div class="bash">yarn add json-server</div>

    <p>
      create a db.json file (to be honest, it would be easier to copy it from the repo) and run the
      API on <span style="color: #079; font-weight: bold">http://localhost:3000</span>:
    </p>

    <div class="bash">json-server db.json</div>

    <p>and after that you can run the application and click "Yes" in the popup:</p>

    <img
      src="https://github.com/user-attachments/assets/c05460e0-7300-4cfa-96bc-672e097be801"
      width="100%"
      height="auto"
      alt="popup"
    />

    <h4>local DB</h4>

    <p>
      If you are too lazy to mess around with API settings or json-server installation is a problem
      for you, you should choose the second option (i.e. click "No" in the pop-up window above),
      then you can work with the demo version without additional efforts on your part.
    </p>

    <p>
      In this case, you have two options: either start with fake source data or start with a "clean
      slate", i.e. with empty databases.
    </p>

    <p>
      If you are running the application for the first time, you have two options: either start with
      fake source data (click "Yes" in the next pop-up window) or start with a “clean slate”, i.e.
      with an empty database (click "No").
    </p>

    <p>
      If you have run the application before and entered any data, click "No" to avoid corrupting
      your data.
    </p>

    <img
      src="https://github.com/user-attachments/assets/ae93959c-ba85-428b-9758-cad1bc03e048"
      width="100%"
      height="auto"
      alt="popup"
    />

    <h4>Start</h4>

    <p>
      Now you are ready to run the demo version of the application. To do this, just click on the
      icon:
      <a href="https://garevna.github.io/projects-and-tasks/" target="_blank">
        <img
          src="https://github.com/user-attachments/assets/de2ad0e6-d8db-466b-aef6-bc3ee7fc378e"
          width="36"
          height="36"
          style="vertical-align: middle; margin-left: 8px; border-radius: 4px"
          alt="icon"
        />
      </a>
    </p>

    <hr />

    <h3>Usage</h3>

    <h4>Buttons, tooltips and menu</h4>

    <video width="100%" height="auto" controls>
      <source
        src="https://github.com/user-attachments/assets/b83c128c-c05c-4cf4-bd5c-fafb6d0b24e0"
        type="video/mp4"
      />
      <!-- <source src="movie.ogg" type="video/ogg"> -->
      Your browser does not support the video tag.
    </video>

    <h4>Resize columns and drag rows</h4>

    <video width="100%" height="auto" controls>
      <source
        src="https://github.com/user-attachments/assets/d2638d20-b4dd-41f2-a8cc-28d58abd46a8"
        type="video/mp4"
      />
    </video>

    <h4>Edit</h4>

    <video width="100%" height="auto" controls>
      <source
        src="https://github.com/user-attachments/assets/9b5eca76-ddc9-4b42-84a0-2936a08140f2"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<style lang="css" scoped>
button.demo {
  border: none;
  background: transparent;
  font-family: Montserrat, monospace;
  font-size: 16px;
  font-weight: bold;
  color: var(--vt-c-green);
  cursor: pointer;
}

.bash {
  width: 100%;
  padding: 8px 16px;
  background: #000;
  color: #ddd;
  margin: 16px 8px;
  font-family: monospace, Roboto;
  font-size: 12px;
}
h3,
h4 {
  width: 100%;
  text-align: left;
  color: #075;
  margin: 24px 0;
  font-weight: bold;
}

p {
  width: 100%;
  text-align: justify;
  font-size: 13px;
}

img {
  margin: 16px 0;
}
</style>
