<script setup lang="ts">
import { ref } from 'vue'
import ExpandedText from './ExpandedText.vue'

const strengths =
  'One of my strengths is my ability and willingness to learn new things. I think that the professional level of a developers is determined not so much by what they already know and can do, but by what they will know and be able to do in half a year or a year. I.e. the growth potential. I also enjoy solving complex problems and optimising code.'
const weaknesses =
  'One of my weaknesses is perfectionism, which I have to fight against, as there is a saying among developers: ‘The best is the enemy of the good’. That is, the speed of development always conflicts with the desire to improve the code. Professional experience allows you to think about an architectural solution in advance so as to avoid the necessity to improve it later. This is my way of dealing with my weakness.'

// const expandedText = ref('')
const activeStrengths = ref(false)
const activeWeaknessess = ref(false)

function clickStrengths() {
  // expandedText.value = strengths
  activeStrengths.value = !activeStrengths.value
}

function clickWeaknessess() {
  // expandedText.value = weaknesses
  activeWeaknessess.value = !activeWeaknessess.value
}
</script>

<template>
  <div class="about">
    <img alt="garevna" class="logo" src="@/assets/garevna-white.jpg" width="240" height="260" />
    <div class="description">
      <h2>IRINA FYLYPPOVA</h2>
      <h4>(garevna)</h4>
      <h4>
        Higher degree in mathematics.<br />
        10+ years of commercial experience.
      </h4>
    </div>
    <div class="characteristics">
      collaborative 🔸 open-minded 🔸 resourceful 🔸 detail-oriented 🔸 organized 🔸 efficient 🔸
      curious 🔸 results-oriented
    </div>
    <div class="strengths-weaknessess">
      <h3 @click="clickStrengths">Strengths</h3>
      <ExpandedText :isActive="activeStrengths" :text="strengths" role="" stack="" />
      <h3 @click="clickWeaknessess">Weaknessess</h3>
      <ExpandedText :isActive="activeWeaknessess" :text="weaknesses" role="" stack="" />
    </div>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'image description'
    'characteristics characteristics'
    'strengths strengths';
  row-gap: 16px;
}
.description {
  grid-area: 'description';
}
.about img {
  grid-area: image;
  margin-right: 16px;
}
.about h2 {
  font-weight: bold;
  font-size: 2rem;
  position: relative;
  top: -10px;
  color: var(--vt-c-green);
}

.about h4 {
  font-size: 0.9rem;
  color: var(--vt-c-black-soft);
}

.strengths-weaknessess {
  grid-area: strengths;
}

.strengths-weaknessess * {
  cursor: pointer;
}

hr {
  margin: 16px 0;
}

.about h2,
.about h4 {
  text-align: left;
}

.characteristics {
  grid-area: characteristics;
  font-size: 14px;
  color: #079;
}

@media (max-width: 600px) {
  .about {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'description'
      'characteristics'
      'strengths';
    justify-items: center;
  }
  .characteristics {
    padding: 0 12px;
    text-align: justify;
  }
  .strengths-weaknessess > h3 {
    padding: 0 12px;
  }
  .about h2,
  .about h4 {
    text-align: center;
  }
}
</style>
