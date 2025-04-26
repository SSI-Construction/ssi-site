module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("ssi_site_v2/images");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/admin");

  eleventyConfig.addPassthroughCopy("ssi_site_v2/icon_310x310.png");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/ssi_walkthrough.mp4");

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
