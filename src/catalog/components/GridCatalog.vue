<script lang="ts" setup>
import { CatalogItem as CatalogItemType } from "@/types/Catalog"
import CatalogItem from "@/catalog/components/CatalogItem.vue"


const items: CatalogItemType[] = [
  {
    id: 1,
    title: "Kanguro",
    route:"image1.jpg"
  },
  {
    id: 2,
    title: "playera",
    route:"image2.jpg"
  },
  {
    id: 3,
    title: "bolsa",
    route:"image3.jpg"
  }
];

</script>

<template>
  <section class="grid justify-center gap-y-5 ">

    <CatalogItem
        v-for="item in items"
        :source="item.route"
    />
  </section>
</template>
