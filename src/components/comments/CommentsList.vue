<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { collection, addDoc, getDocs, query, orderBy, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from '@/firebaseConfig';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import CommentsItem from '@/components/comments/CommentsItem.vue';

const authStore = storeToRefs(useAuthStore());

interface CommentType {
  id: string;
  text: string;
  createdAt: string;
  userName: string;
  userEmail: string;
  parentId?: string;
  childIds?: string[];
}

interface Props {
  postId: string;
}

const props = withDefaults(defineProps<Props>(), {
  postId: ''
})

const comments = ref<CommentType[]>([]);
const newComment = ref('');
const parentCommentId = ref<string | null>(null);

const fetchComments = async () => {
  const commentsQuery = query(collection(db, 'posts', props.postId, 'comments'), orderBy('createdAt'));
  const querySnapshot = await getDocs(commentsQuery);
  const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  // Создаем структуру комментариев с дочерними комментариями
  const commentsMap = new Map<string, CommentType>();
  commentsData.forEach((comment: any) => {
    commentsMap.set(comment.id, comment);
  });

  commentsData.forEach(comment => {
    if (comment.parentId) {
      const parentComment = commentsMap.get(comment.parentId);
      if (parentComment) {
        parentComment.childIds = parentComment.childIds || [];
        parentComment.childIds.push(comment);
      }
    }
  });

  comments.value = commentsData.filter(comment => !comment.parentId);
};

const addComment = async (comment: string) => {
  const localUsername = localStorage.getItem('username');
  const piniaUsername = authStore.authUser.value?.name;

  if ((newComment.value.trim() || comment.trim()) && authStore.authUser.value) {
    const commentData = {
      text: comment ? comment : newComment.value,
      createdAt: new Date().toISOString(), // Используйте ISO формат для даты
      userName: localUsername,
      userEmail: authStore.authUser.value.email,
      parentId: parentCommentId.value || null, // Обновлено для установки parentId
      childIds: []
    };

    const commentRef = await addDoc(collection(db, 'posts', props.postId, 'comments'), commentData);

    if (parentCommentId.value) {
      const parentCommentRef = doc(db, 'posts', props.postId, 'comments', parentCommentId.value);
      await updateDoc(parentCommentRef, {
        childIds: arrayUnion(commentRef.id)
      });
    }

    newComment.value = '';
    parentCommentId.value = null; // Сброс значения после добавления комментария
    fetchComments(); // Обновление списка комментариев
  }
};

const replyToComment = (commentId: string, comment: string) => {
  parentCommentId.value = commentId; // Устанавливаем id родительского комментария
  addComment(comment);
};

onMounted(() => {
  fetchComments();
});
</script>

<template>
  <h3>Comments</h3>
  <div v-for="comment in comments" :key="comment.id">
    <CommentsItem :comment="comment" @reply="replyToComment" />
  </div>
  <!-- <form @submit.prevent="addComment">
    <input class="border-input" v-model="newComment" placeholder="Add a comment" />
    <button type="submit">Add Comment</button>
  </form> -->
</template>

<style lang="css" module>
</style>
