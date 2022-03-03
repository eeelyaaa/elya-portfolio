<template>
  <header class="bg-portfolio-50">
    <nav class="max-w-7xl mx-auto px-4 lg:px-8" aria-label="Top">
      <div class="py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="../assets/image001.png" alt="me" />
          </a>
          <div class="ml-10 ">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-portfolio-100 hover:text-portfolio-300">
              {{ link.name }}
            </a>
          </div>
          <div class="absolute right-0 mr-10">
            <h1 class="text-portfolio-100 font-bold text-xl text-right">Elya Murza</h1>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: 'Home', href: '#' },
]

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>