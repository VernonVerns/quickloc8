<script setup()>
    export default {
    data() {
        return {
            loading: false,
        };
    },
    async created () {
        this.loading = true;

        try {
            this.loading = setTimeout(() => this.loading = false, 3500);

        } catch (error) {
            console.log(error)
            this.loading = false
        }
    }
};
</script>
<template>
    <div id="splash_screen" v-if='loading'>
        <div class="content">
            <img src="../assets/img/redish_logo.png" alt="Company Logo">
        </div>
    </div>
</template>