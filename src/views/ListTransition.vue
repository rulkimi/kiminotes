<script setup>
import PageLayout from '../layout/PageLayout.vue';
import { ref } from 'vue';

const activeTab = ref('template');

const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Watermelon' },
  { id: 4, name: 'Papaya' },
  { id: 5, name: 'Pineapple' },
]);

const itemsTwo = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Watermelon' },
  { id: 4, name: 'Papaya' },
  { id: 5, name: 'Pineapple' },
]);

const itemsThree = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Watermelon' },
  { id: 4, name: 'Papaya' },
  { id: 5, name: 'Pineapple' },
]);

const removeItem = (items, itemId) => {
  const index = items.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
  }
};

const templateCode = ref(`<transition-group class="relative flex flex-col gap-1" name="list" tag="ul" appear>
    <li
      class="flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1"
      v-for="item in items"
      :key="item.id"
    >
      {{ item.name }}
      <button
        class="close-icon"
        @click="removeItem(items, item.id)"
      >
        x
      </button>
    </li>
  </transition-group>
`);

const scriptCode = ref(`import { ref } from 'vue';

const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Watermelon' },
  { id: 4, name: 'Papaya' },
  { id: 5, name: 'Pineapple' },
]);

const removeItem = (items, itemId) => {
  const index = items.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
  }
};
`);

const styleCode = ref(`.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s ease;
}

.list-move {
  transition: all 0.3s ease;
}

.list-leave-active {
  position: absolute;
}
`);
</script>

<template>
  <PageLayout>
    <template #subtitle>
      To make a smooth transition when an item is deleted or added from a list.
    </template>

    <template #content>

      <div class="h-[220px] p-2 flex items-start gap-6">
        <transition-group class="relative flex flex-col gap-1" tag="ul">
          <span key="title">No transition</span>
          <li
            class="flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1 w-[150px]"
            v-for="item in items"
            :key="item.id"
          >
            {{ item.name }}
            <button class="close-icon" @click="removeItem(items, item.id)">x</button>
          </li>
        </transition-group>
        <transition-group class="relative flex flex-col gap-1" name="list" tag="ul">
          <span key="title">Transition</span>
          <li
            class="flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1 w-[150px]"
            v-for="item in itemsTwo"
            :key="item.id"
          >
            {{ item.name }}
            <button class="close-icon" @click="removeItem(itemsTwo, item.id)">x</button>
          </li>
        </transition-group>
        <transition-group class="relative flex flex-col gap-1" name="list" tag="ul" appear>
          <span key="title" class="text-nowrap"><span class="font-mono">appear</span> attribute</span>
          <li
            class="flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1 w-[150px]"
            v-for="item in itemsThree"
            :key="item.id"
          >
            {{ item.name }}
            <button class="close-icon" @click="removeItem(itemsThree, item.id)">x</button>
          </li>
        </transition-group>
      </div>

      <div class="flex flex-col mt-2">

        <!-- Tabs -->
        <div class="flex space-x-4 p-2 border-t border-x rounded-t-lg">
          <button
            :class="{ 'text-primary font-semibold': activeTab === 'template' }"
            @click="activeTab = 'template'"
          >
            Template
          </button>
          <button
            :class="{ 'text-primary font-semibold': activeTab === 'script' }"
            @click="activeTab = 'script'"

          >
            Script
          </button>
          <button
            :class="{ 'text-primary font-semibold': activeTab === 'style' }"
            @click="activeTab = 'style'"
          >
            Style
          </button>
        </div>

        <!-- Code Display -->
        <div v-if="activeTab === 'template'">
          <pre v-highlight:template>
            <code class="xml">{{ templateCode }}</code>
          </pre>
        </div>
        <div v-if="activeTab === 'script'">
          <pre v-highlight:script>
            <code class="javascript">{{ scriptCode }}</code>
          </pre>
        </div>
        <div v-if="activeTab === 'style'">
          <pre v-highlight:style-scoped>
            <code class="css">{{ styleCode }}</code>
          </pre>
        </div>

      </div>
    </template>
  </PageLayout>
</template>

<style scoped>
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s ease;
}

.list-move {
  transition: all 0.3s ease;
}

.list-leave-active {
  position: absolute;
}
</style>