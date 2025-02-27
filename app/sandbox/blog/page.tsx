import Blog from './blog-component';
import { getBlogPosts, BlogPost } from "@/lib/blog";

export default function BlogPage() {
  const allBlogs: BlogPost[] = getBlogPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1;
  });
  return <Blog allBlogs={allBlogs} />;
}