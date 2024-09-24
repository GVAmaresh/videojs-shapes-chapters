export default {
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false, 
      };
      return config;
    },
  };