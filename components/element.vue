<template>
  <div class="w-1/2 mx-auto my-4 p-4 rounded border-[1px] border-black">
    <p>дата: {{ el.date }}</p>
    <p>Локальное имя: {{ el.localName }}</p>
    <p>Название: {{ el.name }}</p>
    <p>Код страны: {{ el.countryCode }}</p>
  </div>
</template>
<script>
export default {
  props: ["el"],
};
</script>
