<script setup lang="ts">
    import { defineProps } from 'vue'
    import type { TMessage } from '../types'
    defineProps<{ message?: TMessage }>()
</script>
<template>
    <li class="single-message" v-if="message">
        <div class="profile-image">
            <h4>E</h4>
        </div>
        <div class="middle-part">
            <h2>{{ message.subject }}</h2>
            <p>{{ message.message }}</p>
        </div>
        <span>{{ message.display }}</span>
    </li>
</template>