<template>
  <div class="card">
    <h3>{{ charger.name }}</h3>
    <p>Status: {{ charger.status }}</p>
    <p>Power: {{ charger.powerOutput }} kW</p>
    <p>Type: {{ charger.connectorType }}</p>
  </div>
</template>

<script setup>
defineProps(['charger']);
</script>