// import { Post, Category, BlogApiResponse, CategoryApiResponse, SinglePostApiResponse } from './types';

// const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://backend-blogs.up.railway.app/api';

// // Generic fetch function with error handling
// async function fetchApi<T>(endpoint: string): Promise<T> {
//   const res = await fetch(`${API_BASE}${endpoint}`, {
//     next: { revalidate: 60 }, // ISR - revalidate every minute
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
//   }

//   return res.json();
// }

// // Get all posts
// export async function getPosts(): Promise<Post[]> {
//   try {
//     const response = await fetchApi<BlogApiResponse>('/posts');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     return [];
//   }
// }

// // Get single post by slug
// export async function getPost(slug: string): Promise<Post | null> {
//   try {
//     const response = await fetchApi<SinglePostApiResponse>(`/posts/${slug}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching post ${slug}:`, error);
//     return null;
//   }
// }

// // Get all categories
// export async function getCategories(): Promise<Category[]> {
//   try {
//     const response = await fetchApi<CategoryApiResponse>('/categories');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return [];
//   }
// }

// // Get posts by category
// export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
//   try {
//     const response = await fetchApi<BlogApiResponse>(`/categories/${categorySlug}/posts`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching posts for category ${categorySlug}:`, error);
//     return [];
//   }
// }

// // Search posts (if you want to implement search)
// export async function searchPosts(query: string): Promise<Post[]> {
//   try {
//     const response = await fetchApi<BlogApiResponse>(`/posts?search=${encodeURIComponent(query)}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error searching posts with query "${query}":`, error);
//     return [];
//   }
// }