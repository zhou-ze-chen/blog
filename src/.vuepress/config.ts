import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Ron 个人博客",
  description: "Ron的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
