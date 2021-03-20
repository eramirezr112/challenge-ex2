<template>
  <!-- Column 
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="contact in contacts" v-bind:key="contact">        
    -->
  <!-- Article -->
  <article class="overflow-hidden rounded-lg shadow-lg bg-white">
    <header class="flex items-center justify-between leading-tight p-2 md:p-6">
      <h1 class="text-lg">
        <a class="no-underline hover:underline text-black" href="#">
          {{ info.first_name }} {{ info.last_name }}
        </a>
        <span
          class="rounded-full px-4 mr-2 py-1 mx-2 text-xs font-medium text-green-900  rounded  leading-none "
          :class="info.active ? 'bg-green-200' : 'bg-red-200'"
          >{{ info.active ? "Active" : "Inactive" }}</span
        >

        <span class="block text-gray-400 text-base">{{ info.title }}</span>
      </h1>
      <a
        class="flex items-center no-underline hover:underline text-gray-500"
        href="#"
      >
        <img alt="Placeholder" class="block rounded-full" :src="info.photo" />
      </a>
    </header>

    <footer class="flex items-center justify-between leading-none border">
      <a
        class="flex items-center no-underline hover:underline text-gray-500 px-20"
        href="#"
      >
        <svg class="w-5 h-5 fill-current text-gray-500">
          <path
            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
          />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <p class="ml-2 text-sm text-gray-500">
          Email
        </p>
      </a>

      <a
        class="flex items-center no-underline hover:underline px-20 py-4 border-l"
        href="#"
      >
        <svg class="w-5 h-5 fill-current text-gray-500">
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
        <p class="ml-2 text-sm text-gray-500">
          Call
        </p>
      </a>
    </footer>
  </article>
  <!-- END Article -->
  <!-- 
    </div>
    END Column -->
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    position: String,
    avatar: String,
    email: String,
    phone: String,
    info: Object,
  },
};
</script>
