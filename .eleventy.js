module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("ssi_site_v2/images");
  
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