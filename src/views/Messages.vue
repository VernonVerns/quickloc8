<script setup lang="ts">
    import { messages } from '../data/messages.json';
    import SingleMessage from '@/components/SingleMessage.vue';
</script>
<template>
    <div id="messages">
        <div class="header-part">
            <router-link to="/"><i class="fa fa-arrow-left"></i></router-link>
            <h2>Messages</h2>
        </div>
        <ul class="messages list-unstyled">
            <SingleMessage v-for="message in messages" :key="message.id" :message="message"/>
        </ul>
    </div>
</template>