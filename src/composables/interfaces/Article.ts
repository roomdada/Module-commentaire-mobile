import Category from "./Category";
import Comment from "./Comment";
export default interface Article {
  id: number;
  title: string;
  image: string;
  created_at: string;
  updated_at: string;
  category_id: number;
  category: Category;
  comments: Comment;
  comments_count: number;

}
