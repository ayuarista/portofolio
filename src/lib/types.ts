// export interface Category {
//     id: number;
//     name: string;
//     slug: string;
//     description?: string;
//     posts_count?: number;
//     created_at: string;
//   }
  
//   export interface Post {
//     id: number;
//     title: string;
//     slug: string;
//     content: string;
//     description: string;
//     image: string;
//     category?: {
//       id: number;
//       name: string;
//       slug: string;
//     };
//     tags?: string[];
//     is_published: boolean;
//     published_at: string;
//     reading_time?: string;
//     created_at: string;
//     updated_at: string;
//   }
  
//   export interface BlogApiResponse {
//     data: Post[];
//   }
  
//   export interface CategoryApiResponse {
//     data: Category[];
//   }
  
//   export interface SinglePostApiResponse {
//     data: Post;
//   }