<script setup lang="ts">
import type { User } from '@/types'
import PickUser from './PickUser.vue';
import { computed } from 'vue';
import router from '@/router'

const props = defineProps<{
  userCount: number
  users: User[]
}>()

const firstUserId = computed(() => props.users?.[0]?.id || null);

const navItems = computed( () => {
    return router.getRoutes().filter(r => r.name).map(r => {
        const label = r.meta?.label ?? (typeof r.name === 'string' ? r.name : '');
        let to = r.path;
        if( to.includes(':')) {
            to = to.replace(/:([^/]+)/g, (_m, p1) => {
          if (p1 === 'id') return String(firstUserId.value)
          return ''
        });
        }
        return {label, to, path: r.path};
    })
})

</script>
<template>
  <ul>
    <li v-for="item in navItems" :key="item.to">
      <router-link :to="item.to">{{ item.label }}</router-link>
    </li>
    <li>
        <PickUser :users="props.users" />
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: white;
  background-color: #333;
}

li {
  float: left;
  color: white;
}
</style>
