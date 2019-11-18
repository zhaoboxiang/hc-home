module.exports = {
  pages: {
    home: {
      // entry for the page
      entry: "src/views/home/index.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "home"]
    },
    about: {
      // entry for the page
      entry: "src/views/about/about.js",
      // the source template
      template: "public/about.html",
      // output as dist/index.html
      filename: "about.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "about"]
    },
    "wisdom-city-solution": {
      // entry for the page
      entry: "src/views/solution/city/wisdom-city-solution.js",
      // the source template
      template: "public/wisdom-city-solution.html",
      // output as dist/index.html
      filename: "wisdom-city-solution.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-city-solution"]
    },
    "wisdom-env-solution": {
      // entry for the page
      entry: "src/views/solution/environment/wisdom-env-solution.js",
      // the source template
      template: "public/wisdom-env-solution.html",
      // output as dist/index.html
      filename: "wisdom-env-solution.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-env-solution"]
    },
    "wisdom-water-solution": {
      // entry for the page
      entry: "src/views/solution/water/wisdom-water-solution.js",
      // the source template
      template: "public/wisdom-water-solution.html",
      // output as dist/index.html
      filename: "wisdom-water-solution.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-water-solution"]
    },
    "wisdom-park-solution": {
      // entry for the page
      entry: "src/views/solution/park/wisdom-park-solution.js",
      // the source template
      template: "public/wisdom-park-solution.html",
      // output as dist/index.html
      filename: "wisdom-park-solution.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-park-solution"]
    },
    "wisdom-env-product": {
      // entry for the page
      entry: "src/views/product/environment/wisdom-env-product.js",
      // the source template
      template: "public/wisdom-env-product.html",
      // output as dist/index.html
      filename: "wisdom-env-product.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-env-product"]
    },
    "wisdom-water-product": {
      // entry for the page
      entry: "src/views/product/water/wisdom-water-product.js",
      // the source template
      template: "public/wisdom-water-product.html",
      // output as dist/index.html
      filename: "wisdom-water-product.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-water-product"]
    },
    "wisdom-park-product": {
      // entry for the page
      entry: "src/views/product/park/wisdom-park-product.js",
      // the source template
      template: "public/wisdom-park-product.html",
      // output as dist/index.html
      filename: "wisdom-park-product.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "wisdom-park-product"]
    },
    "env-detail": {
      // entry for the page
      entry: "src/views/product/environment/env-detail/env-detail.js",
      // the source template
      template: "public/env-detail.html",
      // output as dist/index.html
      filename: "env-detail.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "env-detail"]
    },
    "water-detail": {
      // entry for the page
      entry: "src/views/product/water/water-detail/water-detail.js",
      // the source template
      template: "public/water-detail.html",
      // output as dist/index.html
      filename: "water-detail.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "water-detail"]
    },
    "park-detail": {
      // entry for the page
      entry: "src/views/product/park/park-detail/park-detail.js",
      // the source template
      template: "public/park-detail.html",
      // output as dist/index.html
      filename: "park-detail.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "park-detail"]
    },
    careers: {
      // entry for the page
      entry: "src/views/careers/careers.js",
      // the source template
      template: "public/careers.html",
      // output as dist/index.html
      filename: "careers.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "深圳虹川科技有限公司",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "careers"]
    }

    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    //   subpage: 'src/subpage/main.js'
  }
};
