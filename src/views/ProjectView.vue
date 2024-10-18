<script lang="ts" setup>
import { ref } from 'vue';
import CommentsList from '@/components/comments/CommentsList.vue';
import AppLayoutDefault from '@/components/layout/AppLayoutDefault.vue';

const postId= ref('post1')

// const getrPost = async () => {
//   await addDoc(collection(db, 'posts', props.postId, 'comments'), {
//       text: newComment.value,
//       createdAt: new Date().toDateString(),
//       userName: authStore.authUser.value.name,
//       userEmail: authStore.authUser.value.email
//     });
// }
</script>

<template>  
  <AppLayoutDefault>
   <div :class="$style.image">
    <img src="@/assets/images/project1.jpeg" alt="project1" />
   </div>
   <div>
    <h1 :class="$style.title">A small selection of recent projects</h1>
    <p :class="$style.description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula quis lacus fermentum, vitae vulputate sem tristique. Nunc justo orci, porta in luctus eget, ultrices vitae justo. Mauris dignissim laoreet mi, a commodo libero volutpat non. Maecenas aliquam sed leo eu blandit. Nam vehicula rhoncus libero ut porttitor. Proin urna tortor, bibendum at faucibus auctor, cursus sit amet odio. In hac habitasse platea dictumst. Proin ac tortor vel tortor auctor pellentesque eget nec nisl. Phasellus pulvinar varius tortor sed sagittis. Etiam aliquam consectetur purus fringilla varius. Maecenas nec dolor dolor. Cras faucibus malesuada luctus. Nam auctor vel tortor eget congue. Fusce porta imperdiet ante scelerisque ullamcorper. Pellentesque luctus ullamcorper lectus faucibus fringilla. Aenean tristique efficitur iaculis. Aliquam eu egestas mi, quis tristique justo. Donec eu ante at tellus eleifend pellentesque. Curabitur fermentum lectus eu erat porta, id sagittis sem aliquet. Integer aliquet vehicula lectus, nec finibus nibh tincidunt eu. Vestibulum quis dui nisi. In a pharetra enim, id blandit quam. Sed lobortis ligula enim, egestas aliquam purus facilisis et. Phasellus vitae leo a ligula commodo ultrices sed non elit.</p>
   </div>
   <div :class="$style.comments">    
      <CommentsList :post-id="postId" />
   </div>
  </AppLayoutDefault>
</template>

<style lang="css" module>
.image {
  width: 100%;
  height: 502px;
  margin: 0 auto;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-weight: 700;
  font-size: 48px;
}

.description {
  font-weight: 400;
  font-size: 20px;
}

.comments {
  width:720px;
  margin: 0 auto;
}
</style>