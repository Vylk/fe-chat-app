<template>
<router-view v-slot="{Component}">
    <component :is="Component" :key="$route.path"></component>
</router-view>
</template>