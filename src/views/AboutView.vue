<script lang="ts" setup>
import { ref } from 'vue';
import CommentsList from '@/components/comments/CommentsList.vue';
import AppLayoutDefault from '@/components/layout/AppLayoutDefault.vue';

const postId= ref('post1')
</script>

<template>  
  <AppLayoutDefault>
    <h2>Post Title</h2>
    <p>Post content...</p>
    <CommentsList :post-id="postId" />
  </AppLayoutDefault>
</template>