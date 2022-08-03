<script setup lang="ts">
    import { messages } from '../data/messages.json';
    import SingleMessage from '@/components/SingleMessage.vue';
</script>
<template>
    <div id="messages">
        <div class="header-part">
            <router-link to="/"><i class="fa fa-chevron-left"></i></router-link>
            <h2>Messages</h2>
        </div>
        <div class="search-container">
            <div class="search">
                <i class="fa fa-search"></i>
                <input type="search" name="search" id="search" placeholder="Search taxi">
            </div>
        </div>
        <ul class="messages list-unstyled">
            <SingleMessage v-for="message in messages" :key="message.id" :message="message" />
        </ul>
    </div>
</template>