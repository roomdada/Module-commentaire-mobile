<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, onMounted } from 'vue';
import useArticle  from '@/composables/article';

const { articles, loading, fetchArticles } = useArticle();



export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },

  setup() {
    onMounted(() => {
      fetchArticles();
    });

    return {
      articles,
      loading
    };
  }

});
</script>
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Liste des articles</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">


      <div id="container">
        <ion-card>
    <ion-card-header>
      <ion-card-title>Recents</ion-card-title>
      <ion-card-subtitle>Les meilleurs articles</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-list>

        <ion-item v-for="article in articles" :key="article.id">
          <ion-thumbnail slot="start">
            <img alt="Silhouette of mountains" class="rounded-md" :src="article.image"/>
          </ion-thumbnail>
          <ion-label>{{ article.title }}</ion-label>
          <ion-button slot="end" fill="outline" color="primary">Voir</ion-button>
        </ion-item>

      </ion-list>
    </ion-card-content>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>



<style scoped>
#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
