<template>
  <div>
    <h1>{{ texto }}</h1>
    <input v-model="message" placeholder="Nombre" />
    <input v-model="message" placeholder="Telefono" />
    <input v-model="message" placeholder="Correo" />
    <select v-model="selected">
      <option disabled value="">Seleccione una ciudad</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <select v-model="selected">
      <option disabled value="">Seleccione un Estado</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <input v-model="message" placeholder="Nombre del proyecto" />
    <input v-model="message" placeholder="Descripcion del proyecto" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Contactanos",
    };
  },
};
</script>

