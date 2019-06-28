module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@vue/app", "@babel/preset-env"];
  
    return {
      presets
    };
  }