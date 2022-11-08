import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { defaultTheme } from '@vuepress/theme-default'

export const domain = 'https://asusrouter.vaskivskyi.com';
const isDevelop = !!process.env.DEVELOP_BRANCH;

export function getBase() {
  let base = '/';
  if (isDevelop) base += 'develop/';
  return base;
}

const pagePatterns = ['**/*.md', '!.vuepress', '!node_modules'];

const conf = {
  base: getBase(),
  title: 'AsusRouter' + ( isDevelop ? ' develop' : '' ),
  description: 'Monitor and control your AsusWRT-powered router from Home Assistant',

  dest: 'dist',
  public: 'public',
  temp: '.temp',
  cache: '.cache',

  pagePatterns,

  head: [
    ['link', {
      rel: 'manifest',
      href: `${ getBase() }site.webmanifest`,
    }],
  ],

  theme: defaultTheme({
    editLinkText: "📖 Edit this page on GitHub to make it better",
    contributors: false,
    docsDir: "docs",
    docsRepo: "Vaskivskyi/docs-asusrouter",
    navbar: navbar,
    repo: "Vaskivskyi/ha-asusrouter",
    sidebar: sidebar,
    sidebarDepth: 2,
    themePlugins: {
      git: true,
    },
  }),

  debug: false,

  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-DFHSWJ3ELB',
      },
    ],
    [
      'vuepress-plugin-sitemap2',
      { hostname: domain }
    ],
    [
      path.resolve(__dirname, './docs/.vuepress/defaultPageClassPlugin.ts'),
    ],
  ],
}

if(isDevelop) {
  conf.head.push(['meta', { name: 'robots', content: 'noindex' }]);
}

export default conf;