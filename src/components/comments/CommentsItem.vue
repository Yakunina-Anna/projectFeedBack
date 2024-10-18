<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiThumbUpOutline, mdiThumbUp, mdiCommentOutline, mdiComment } from '@mdi/js';

interface Props {
  comment: any;
}

const props = withDefaults(defineProps<Props>(), {
  comment: {},
});

const emit = defineEmits(['reply']);

const mdiLikeOutline = ref(mdiThumbUpOutline);
const mdiLikebUp = ref(mdiThumbUp);
const isLike = ref<boolean>(false);
const isComment = ref<boolean>(false);
const isShowInput = ref<boolean>(false);
const newComment = ref<string>('');
const isReplying = ref<boolean>(false); // Флаг для отслеживания вызова функции

const replyToComment = (event:any) => {
  console.log(event);

  console.log('replyToComment called');
  emit('reply', props.comment.id, newComment.value);
  console.log('test');

  newComment.value = '';
  closeComment();
};

const getToComment = () => {
  console.log('getToComment called');
  isComment.value = true;
  isShowInput.value = true;
}

const closeComment = () => {
  console.log('closeComment called');
  isComment.value = false;
  isShowInput.value = false;
}
</script>

<template>
  <div v-if="comment.text" :class="$style.container">
    <div :class="$style.avatar">
      <!-- <img src="@/assets/images/avatar.png" alt="User avatar" /> -->
    </div>
    <div style="width: 100%;">
      <div :class="['border-input',$style.content]">
        <div :class="$style.header">
          <p :class="$style.username">{{ comment.userName }}</p>
          <p :class="$style.date">{{ comment.createdAt }}</p>
        </div>
        <p>{{ comment.text }}</p>
        <div :class="$style.icons">
          <svg-icon v-if="!isLike" type="mdi" :path="mdiLikeOutline" @click="isLike = true"/>
          <svg-icon v-else type="mdi" :path="mdiLikebUp" @click="isLike = false"/>
          <svg-icon v-if="!isComment" type="mdi" :path="mdiCommentOutline" @click="getToComment"/>
          <svg-icon v-else type="mdi" :path="mdiComment" @click="closeComment"/>
        </div>
      </div>
      <div v-if="comment.text && comment.childIds.length > 0" :class="$style.replies">
        <CommentsItem v-for="reply in comment.childIds" :key="reply.id" :comment="reply" @reply="replyToComment"/>
      </div>
      <form v-if="isShowInput" @submit.prevent="replyToComment">
        <input style="color:white" class="border-input" v-model="newComment" placeholder="Add a comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  gap: 0 20px;
}

.content {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.username {
  font-family: 'Menrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
}

.date {
  font-size: 16px;
  color: var(--gray-600);
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.icons {
  align-self: flex-end;
  display: flex;
  gap: 0 16px;
  color: var(--gray-600)
}
</style>
