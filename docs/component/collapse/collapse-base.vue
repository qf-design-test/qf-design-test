<template>
  <qf-collapse v-model="active">
    <qf-collapse-item title="标题1" name="1">
      <p>
        在这个广袤的世界上，有着无数美丽的风景，每一片土地都有着属于自己的故事。在这里，我们可以感受到大自然的宏伟壮丽，体会到岁月的沉淀与积淀。让我们怀着一颗敬畏之心，去欣赏这美丽的世界，感受生命的意义与价值。愿每个人都能在这片美丽的土地上，找到属于自己的幸福与快乐
      </p>
    </qf-collapse-item>
    <qf-collapse-item title="标题2" name="2">
      <p>
        在这个广袤的世界上，有着无数美丽的风景，每一片土地都有着属于自己的故事。在这里，我们可以感受到大自然的宏伟壮丽，体会到岁月的沉淀与积淀。让我们怀着一颗敬畏之心，去欣赏这美丽的世界，感受生命的意义与价值。愿每个人都能在这片美丽的土地上，找到属于自己的幸福与快乐
      </p>
    </qf-collapse-item>
  </qf-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const active = ref(['1']);
</script>
