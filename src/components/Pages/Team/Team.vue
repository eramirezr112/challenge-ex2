<template>
  <div class="container py-20 mx-auto px-4 md:px-12 bg-gray-50">
    <PinnedContacts :contacts="contacts" />
    <ContactList :contacts="contacts" />
  </div>
</template>

<script>
import ContactList from "../../ContactList/ContactList";
import PinnedContacts from "../../PinnedContacts/PinnedContacts";
import { getAllContacts } from "../../../core/api";
export default {
  name: "Team",
  data() {
    return {
      contacts: [],
    };
  },
  components: {
    PinnedContacts,
    ContactList,
  },
  props: {
    msg: String,
  },
  mounted() {
    getAllContacts().then((result) => {
      this.contacts = result.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
