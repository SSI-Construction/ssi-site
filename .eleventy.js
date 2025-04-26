module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("ssi_site_v2/images");
  eleventyConfig.addPassthroughCopy("ssi_site_v2/admin");

  // THIS PART IS CRITICAL:
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
