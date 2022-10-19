import { ref } from 'vue';
import Article from './interfaces/Article';
import axios from 'axios';

export default function useArticle() {
  const articles  = ref<Article[]>([]);
  const loading = ref<boolean>(false);

  const fetchArticles = async () => {
    loading.value = true;
    await axios.get('https://api-regs.herokuapp.com/api/articles').then((response) => {
      articles.value = response.data.data;
    }).catch((error) => {
      console.log(error);
    }).finally(() => loading.value = false);
  }

  return {
    articles,
    loading,
    fetchArticles
  }
  
}
