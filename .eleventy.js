module.exports = function(eleventyConfig) {

    const yaml = require("js-yaml");

    eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.load(contents)
    );

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/admin");

    return {
        passthrouhgFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html","njk", "md"],
        dir: {
        input: "src",
        output: "_site",
        include: "includes"
      }
    }
  };