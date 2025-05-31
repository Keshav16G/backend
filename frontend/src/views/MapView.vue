<template>
  <LMap style="height: 500px;" :zoom="10" :center="[20.5937, 78.9629]">
    <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LMarker
      v-for="charger in chargers"
      :key="charger._id"
      :lat-lng="[charger.location.latitude, charger.location.longitude]"
    >
      <LPopup>{{ charger.name }} - {{ charger.connectorType }}</LPopup>
    </LMarker>
  </LMap>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../api';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet';

const chargers = ref([]);
onMounted(async () => {
  const res = await api.get('/chargers');
  chargers.value = res.data;
});
</script>