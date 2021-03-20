<template>
  <div>
    <p class="font-medium">Pinned Contacts</p>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        v-for="contact in contacts"
        v-bind:key="contact"
      >
        <Card :info="contact" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card/Card";
export default {
  name: "PinnedContacts",
  props: {
    contacts: Array,
  },
  components: {
    Card,
  },
};
</script>
