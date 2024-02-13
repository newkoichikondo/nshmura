---
theme: page
title: サーバサイドエンジニアのメモ
next: false
prev: false
---

<script setup>
import { data as posts } from '../.vitepress/theme/posts.data.js'
import moment from 'moment';
</script>

# nshmura.com

サーバサイドエンジニアのメモ


<article v-for="post of posts" class="home-posts-article">
  <p>
    <a :href="post.url" class="home-posts-article-title">{{ post.frontmatter.title }}</a>
  </p>
  <p>{{ post.frontmatter.description }}</p>
  <p>
    <a :href="post.url">続きを読む</a>
  </p>
</article>
