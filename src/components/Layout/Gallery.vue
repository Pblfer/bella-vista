<template>
    <div class="bg-secondary p-0 pt-3">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <!-- Itera sobre el array de imágenes y crea un elemento para cada una -->
        <div v-for="(image, index) in images" :key="index" class="relative">
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover rounded-sm" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageGallery",
    data() {
      return {
        // Lista de imágenes con URLs y descripciones
        images: [
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 1" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 2" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 3" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 4" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 5" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 6" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 7" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 8" },
          { src: "https://fakeimg.pl/1500x800/171a1f/9d7ee7?text=Owwny", alt: "Imagen 9" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  