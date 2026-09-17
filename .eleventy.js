const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Luxon date filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Rank other posts by shared category/tags so each post can link to related reading
  eleventyConfig.addFilter("getRelatedPosts", (allPosts, currentUrl, category, tags, limit) => {
    const currentTags = tags || [];
    return allPosts
      .filter((post) => post.url !== currentUrl)
      .map((post) => {
        let score = 0;
        if (category && post.data.category === category) score += 2;
        for (const tag of currentTags) {
          if (post.data.tags && post.data.tags.includes(tag)) score += 1;
        }
        return { post, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || b.post.date - a.post.date)
      .slice(0, limit || 3)
      .map((entry) => ({
        url: entry.post.url,
        title: entry.post.data.title,
        category: entry.post.data.category
      }));
  });

  // Your existing passthrough copies
  eleventyConfig.addPassthroughCopy("ssi_site_v2/images");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/admin");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/icon_310x310.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/styles.css");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/_redirects");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/sign-up.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/setting-tab.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-construction-manager-overview.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-trade-app-overview.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-schedule.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-animated-explainer.mp4");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/Screenshot_1.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/Screenshot_2.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/Screenshot_3.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/Screenshot_4.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/Screenshot_5.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-animated-explainer-poster.jpg");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-construction-manager-overview-poster.jpg");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi-trade-app-overview-poster.jpg");

  // Your existing collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("ssi_site_v2/posts/*.md");
  });

  return {
    dir: {
      input: "ssi_site_v2",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};