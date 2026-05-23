import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../../data/blog-posts';
import { Calendar, Clock, ArrowLeft, Send } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Scroll to top when post loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-accent font-semibold hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  // Helper to parse simple markdown to react elements (headings, bold, links)
  const parseContent = (contentString) => {
    if (!contentString) return null;

    const blocks = contentString.split('\n');
    return blocks.map((block, idx) => {
      const trimmed = block.trim();

      if (!trimmed) return <div key={idx} className="h-4" />;

      // Header 1
      if (trimmed.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-3xl sm:text-4xl font-display font-black text-primary mt-10 mb-6 leading-tight">
            {parseInline(trimmed.replace('# ', ''))}
          </h1>
        );
      }

      // Header 2
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-2xl font-display font-black text-primary mt-8 mb-4 leading-snug">
            {parseInline(trimmed.replace('## ', ''))}
          </h2>
        );
      }

      // Bullets
      if (trimmed.startsWith('- ')) {
        return (
          <li key={idx} className="ml-6 list-disc text-text-dark text-base sm:text-lg leading-relaxed mb-3">
            {parseInline(trimmed.replace('- ', ''))}
          </li>
        );
      }

      // Normal paragraph
      return (
        <p key={idx} className="text-text-dark text-base sm:text-lg leading-relaxed mb-6 font-normal">
          {parseInline(trimmed)}
        </p>
      );
    });
  };

  // Helper to parse bold (**text**) and links ([text](url))
  const parseInline = (text) => {
    // Regex for bold: \*\*(.*?)\*\*
    // Regex for links: \[(.*?)\]\((.*?)\)
    const tokens = [];
    let remaining = text;

    while (remaining) {
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
      const linkMatch = remaining.match(/\[(.*?)\]\((.*?)\)/);

      // Find which match occurs first
      const boldIndex = boldMatch ? remaining.indexOf(boldMatch[0]) : -1;
      const linkIndex = linkMatch ? remaining.indexOf(linkMatch[0]) : -1;

      if (boldIndex === -1 && linkIndex === -1) {
        tokens.push(remaining);
        break;
      }

      // If bold is first
      if (boldIndex !== -1 && (linkIndex === -1 || boldIndex < linkIndex)) {
        if (boldIndex > 0) {
          tokens.push(remaining.substring(0, boldIndex));
        }
        tokens.push(
          <strong key={tokens.length} className="font-bold text-primary">
            {boldMatch[1]}
          </strong>
        );
        remaining = remaining.substring(boldIndex + boldMatch[0].length);
      } else {
        // link is first
        if (linkIndex > 0) {
          tokens.push(remaining.substring(0, linkIndex));
        }
        const isExternal = linkMatch[2].startsWith('http');
        if (isExternal) {
          tokens.push(
            <a
              key={tokens.length}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline"
            >
              {linkMatch[1]}
            </a>
          );
        } else {
          tokens.push(
            <Link
              key={tokens.length}
              to={linkMatch[2]}
              className="text-accent font-semibold hover:underline"
            >
              {linkMatch[1]}
            </Link>
          );
        }
        remaining = remaining.substring(linkIndex + linkMatch[0].length);
      }
    }

    return tokens;
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen text-text-dark">
      <Helmet>
        <title>{`${post.title} | Klyro Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://klyro.work/blog/${post.slug}`} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-text-light font-semibold hover:text-accent transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to blog list
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl p-6 sm:p-12">
          
          {/* Category */}
          <span className="bg-accent-light text-accent text-xs font-bold px-3.5 py-2 rounded-md tracking-wider uppercase inline-block mb-6">
            {post.category}
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-light font-semibold mb-10 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} read
            </span>
            <span className="text-primary font-bold">By Klyro Marketing Team</span>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg border border-gray-100 max-h-[400px] relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-[200px] flex items-center justify-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 items-center justify-center"
              style={{ display: 'none' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">{post.category}</span>
              </div>
            </div>
          </div>

          {/* Styled Content Body */}
          <div className="prose max-w-none">
            {parseContent(post.content)}
          </div>

          {/* Soft Lead CTA Box at bottom of article */}
          <div className="mt-12 bg-accent-light border border-accent/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md text-center sm:text-left">
              <h4 className="font-display font-black text-xl text-primary mb-2">
                Need more calls in your local area?
              </h4>
              <p className="text-text-dark/85 text-sm sm:text-base font-normal">
                Let us build your custom website, configure Google Maps, and optimize your Local SEO. Done in 7 days.
              </p>
            </div>
            <Link
              to="/#contact"
              className="bg-accent text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg shadow-accent/20 hover:bg-primary transition-all duration-300 flex-shrink-0"
            >
              Get Free Website Audit <Send className="w-4 h-4" />
            </Link>
          </div>

        </article>
      </div>
    </div>
  );
}
