import { User, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function OurBlog() {
  const blogPosts = [
    {
      title: "Discover Top Hourly House Cleaning Service Today",
      author: "By Admin",
      comments: "No Comments",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      title: "Clean Your Bidet: Easy Steps From Aethla",
      author: "By Admin",
      comments: "No Comments",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    },
    {
      title: "Clean a Toothbrush Holder Easily: Aethla Guide",
      author: "By Admin",
      comments: "No Comments",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Stay Updates With Our Every Latest News
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Curved teal background extending beyond image */}
                <div className="absolute -top-8 left-0 right-0 h-32 bg-[#48C2CB] rounded-b-[50%] z-0"></div>
                <div className="relative z-10 h-full pt-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#48C2CB] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
