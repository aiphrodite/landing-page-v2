"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import PostItem from "@/components/post-item";
import { BlogPost } from "@/lib/blog";

interface BlogProps {
  allBlogs: BlogPost[];
}

export default function Blog({ allBlogs }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredBlogs = selectedCategory === "All"
    ? allBlogs
    : allBlogs.filter(post => post.metadata.kind === selectedCategory);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-16">
            <h1 className="mb-4 text-5xl font-bold">aiphrodite.ai' musings</h1>
            {/* <p className="text-lg text-gray-700">
              Content for developers, product, and digital experts.
            </p> */}
          </div>
          {/* Categories */}
          <div className="mb-10 flex flex-wrap gap-2">
            {["All", "Case Studies", "Product", "Blog"].map(category => (
              <button
                key={category}
                className={`btn-sm ${selectedCategory === category ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} font-normal shadow-sm hover:bg-gray-50`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-10 border-l [border-image:linear-gradient(to_bottom,var(--color-slate-200),var(--color-slate-300),transparent)1]">
            {filteredBlogs.map((post, postIndex) => (
              <PostItem key={postIndex} {...post} />
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 text-center">
            <button className="btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow-sm hover:bg-gray-900">
              Load more{" "}
              <span className="ml-2 tracking-normal text-gray-500">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}