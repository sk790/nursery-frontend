import "./BlogSection.css"; // Import the CSS file

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: "Images/blog1.jpg",
      title: "Why PM Modi Planted Parijat Tree in Ayodhya?",
      linkText: "Read now",
    },
    {
      imgSrc: "Images/blog2.jpg",
      title: "The Hidden Powers of Maghai Pan: More than Just a Chew",
      linkText: "Read now",
    },
    {
      imgSrc: "Images/blog3.jpg",
      title: "Unleash the Beauty and Fragrance of Ranjai Plants",
      linkText: "Read now",
    },
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-title">From The Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={post.imgSrc} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-heading">{post.title}</h3>
              <a href="#" className="blog-link">
                {post.linkText} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
