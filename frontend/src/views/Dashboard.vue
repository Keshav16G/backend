<template>
  <div>
    <h2>Chargers</h2>
    <input v-model="search" placeholder="Search by name..." />
    <select v-model="status">
      <option value="">All</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>
    <ul>
      <li v-for="charger in filteredChargers" :key="charger._id">
        {{ charger.name }} - {{ charger.status }}
        <button @click="deleteCharger(charger._id)">🗑</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import api from '../api';

const chargers = ref([]);
const search = ref('');
const status = ref('');

const fetchChargers = async () => {
  const res = await api.get('/chargers');
  chargers.value = res.data;
};

const deleteCharger = async (id) => {
  await api.delete(`/chargers/${id}`);
  fetchChargers();
};

onMounted(fetchChargers);

const filteredChargers = computed(() =>
  chargers.value.filter(c =>
    c.name.toLowerCase().includes(search.value.toLowerCase()) &&
    (!status.value || c.status === status.value)
  )
);
</script>