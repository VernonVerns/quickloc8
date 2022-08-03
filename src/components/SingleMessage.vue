<script setup lang="ts">
    import { defineProps } from 'vue'
    import type { TMessage } from '../types'
    defineProps<{ message?: TMessage }>()

var colors = ['#FF5722', '#2e302f', '#31087B', '#E6B325', '#7F5283', '#18978F'];
    
</script>
<template>
    <li class="single-message shadow-sm" v-if="message">
        <div class="profile-image" :style="{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }">
            <h4>E</h4>
        </div>
        <div class="middle-part">
            <h2>{{ message.subject }}</h2>
            <p>{{ message.message }}</p>
        </div>
        <span class="date">{{ message.display }}</span>
    </li>
</template>