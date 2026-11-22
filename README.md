# astro-resume

一个**可配置的前端简历站模板**。姓名、职位、联系方式、个人评价、工作经历、技能全部写在根目录的
`meta.config.js` 里——改一个文件就变成你自己的简历，不用碰任何 `.astro` 或 `.tsx`。

- 在线 demo：https://ma1833577561.github.io/astro-resume/
- 技术栈：Astro · Tailwind CSS · Solid.js · TypeScript
- 构建产物是纯静态文件，可以直接丢到 GitHub Pages / Vercel / 任意对象存储

## 改什么

打开 `meta.config.js`：

| 字段 | 内容 |
|---|---|
| `useInfo` | 姓名、职位、工作年限、微信、电话、邮箱、城市、GitHub 地址、头像 URL |
| `about` | 个人评价，数组里一行一句 |
| `experience` | 工作经历，每段含公司名、起止时间、以及若干 `{ project, detail }` |
| `skills` | 技能列表，会渲染成技能条 |

留空的字段（比如不写微信）对应那一行会直接不渲染，不会留下空白占位。

写经历时建议按 STAR 来：**背景 → 任务 → 行动 → 结果**，结果尽量带数字。

## 本地跑

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物在 dist/（不提交，交给 CI 构建）
```

## 部署

**先改一处**：`astro.config.mjs` 里的 `base: "astro-resume"` 写死的是这个仓库名。
你的仓库如果叫别的（或者绑了自定义域名），把它改成你的仓库名（`/your-repo` 写法更稳），
不改成自定义域名时，改成 `base: "/"`。

推到 `main` 之后，`.github/workflows/static.yml` 会 `npm ci && npm run build`，
再把 `dist/` 发布到 GitHub Pages。仓库 Settings → Pages 里把 Source 选成 **GitHub Actions** 即可。

> `dist/` 不在版本库里。以前是提交进去的，容易和源码不同步——现在一律由 CI 现场构建。

## 目录

```
meta.config.js          全部内容都在这
src/pages/index.astro   简历页，只负责排版
src/components/         Skill / Experience 等 Solid 交互组件
src/layouts/            页面骨架
src/assets/             图标字体
```

## License

MIT
