import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  Heart,
  Bookmark,
  Share2,
  TrendingUp,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

const JournalPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");

  const categories = [
    { id: "all", name: "All Articles", count: 24 },
    { id: "trends", name: "Trends", count: 8 },
    { id: "style", name: "Style Guides", count: 6 },
    { id: "sustainable", name: "Sustainable", count: 5 },
    { id: "interview", name: "Interviews", count: 3 },
    { id: "news", name: "News", count: 2 },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of Sustainable Fashion: Beyond the Hype",
    excerpt:
      "Exploring how brands are revolutionizing the industry with circular economy principles, biodegradable materials, and ethical production methods that don't compromise on style.",
    image:
      "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Emma Richardson",
    date: "May 15, 2026",
    readTime: "8 min read",
    comments: 24,
    category: "sustainable",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  };

  const posts = [
    {
      id: 2,
      title: "Minimalist Wardrobe: 10 Essential Pieces for Every Season",
      excerpt:
        "Build a capsule collection that transcends trends and creates endless outfit possibilities with these timeless staples.",
      image:
        "https://images.pexels.com/photos/8943885/pexels-photo-8943885.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Marcus Chen",
      date: "May 12, 2026",
      readTime: "6 min read",
      comments: 18,
      category: "style",
      featured: false,
    },
    {
      id: 3,
      title: "Inside the Studio: A Conversation with Designer Anna Kova",
      excerpt:
        "We sit down with the rising star to discuss her latest collection, creative process, and vision for inclusive fashion.",
      image:
        "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sophia Laurent",
      date: "May 8, 2026",
      readTime: "10 min read",
      comments: 42,
      category: "interview",
      featured: false,
    },
    {
      id: 4,
      title: "Spring/Summer 2026: The Biggest Trends You Need to Know",
      excerpt:
        "From sheer layering to electric color palettes, here's everything that's dominating the runways right now.",
      image:
        "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Olivia Martinez",
      date: "May 5, 2026",
      readTime: "5 min read",
      comments: 31,
      category: "trends",
      featured: false,
    },
    {
      id: 5,
      title: "The Rise of Digital Fashion: NFTs and Virtual Wardrobes",
      excerpt:
        "How blockchain technology is creating new opportunities for self-expression in the metaverse and beyond.",
      image:
        "https://images.pexels.com/photos/5473296/pexels-photo-5473296.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Kim",
      date: "April 28, 2026",
      readTime: "7 min read",
      comments: 15,
      category: "news",
      featured: false,
    },
    {
      id: 6,
      title: "Eco-Friendly Fabrics: A Complete Guide to Sustainable Materials",
      excerpt:
        "From Tencel to Piñatex, learn about the innovative materials changing the way we think about clothing production.",
      image:
        "https://images.pexels.com/photos/6296045/pexels-photo-6296045.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emma Richardson",
      date: "April 22, 2026",
      readTime: "9 min read",
      comments: 27,
      category: "sustainable",
      featured: false,
    },
  ];

  const trendingTopics = [
    { name: "Sustainable Fashion", posts: 12 },
    { name: "Capsule Wardrobe", posts: 8 },
    { name: "Streetwear", posts: 15 },
    { name: "Vintage Style", posts: 6 },
    { name: "Designer Spotlight", posts: 9 },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header with Gradient */}
      <div className="relative overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500 blur-3xl"></div>
          <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Sparkles size={16} />
              <span>Insights & Stories</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              The Journal
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Stories, interviews, and perspectives from the intersection of
              fashion, culture, and innovation.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search
                  className="absolute top-1/2 left-4 -translate-y-1/2 transform text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-full border border-white/20 bg-white/10 py-3 pr-4 pl-12 text-white placeholder-gray-400 backdrop-blur-sm focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Sidebar */}
          <div className="order-2 lg:order-1 lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <TrendingUp size={20} />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 transition-all ${
                        activeCategory === category.id
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span
                        className={`text-sm ${activeCategory === category.id ? "text-gray-300" : "text-gray-400"}`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <TrendingUp size={20} />
                  Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <button
                      key={topic.name}
                      className="rounded-full bg-white px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-black hover:text-white"
                    >
                      #{topic.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-2xl bg-linear-to-br from-gray-900 to-black p-6 text-white">
                <h3 className="mb-2 text-xl font-bold">Weekly Newsletter</h3>
                <p className="mb-4 text-sm text-gray-300">
                  Get the best stories delivered to your inbox every Sunday.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-l-lg px-4 py-2 text-gray-900 focus:outline-none"
                  />
                  <button className="rounded-r-lg bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-100">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="order-1 lg:order-2 lg:w-2/3">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                  <div className="mb-3 flex items-center gap-4 text-sm">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs tracking-wide uppercase backdrop-blur-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="mb-3 cursor-pointer text-3xl font-bold hover:underline">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-gray-200">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.avatar}
                        alt={featuredPost.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium transition-all hover:gap-3">
                      Read Article <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {activeCategory === "all"
                    ? "Latest Articles"
                    : categories.find((c) => c.id === activeCategory)?.name}
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredPosts.length} articles
                </span>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group border-b border-gray-100 pb-8 last:border-0"
                  >
                    <div className="flex flex-col gap-6 md:flex-row">
                      <div className="md:w-2/5">
                        <div className="overflow-hidden rounded-xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/5">
                        <div className="mb-2 flex items-center gap-3 text-xs text-gray-500">
                          <span className="font-medium tracking-wide text-black uppercase">
                            {
                              categories.find((c) => c.id === post.category)
                                ?.name
                            }
                          </span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="mb-2 cursor-pointer text-xl font-bold transition-colors group-hover:text-gray-600">
                          {post.title}
                        </h3>
                        <p className="mb-3 line-clamp-2 text-gray-600">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-gray-400" />
                            <span className="text-sm text-gray-500">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <button className="text-gray-400 transition-colors hover:text-red-500">
                              <Heart size={18} />
                            </button>
                            <button className="text-gray-400 transition-colors hover:text-blue-500">
                              <Bookmark size={18} />
                            </button>
                            <button className="text-gray-400 transition-colors hover:text-green-500">
                              <Share2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="pt-8 text-center">
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-3 font-medium text-black transition-all hover:bg-black hover:text-white">
                  Load More Articles
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
