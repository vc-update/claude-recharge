import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Claude代充 | 国内Claude Pro/Max订阅代充平台',
  description: '专业Claude代充平台，支持Claude Pro（$20）、Claude Max 5x（$100）、Max 20x（$200）三档套餐。微信支付宝直付，无需海外信用卡，仅凭账号邮箱5分钟到账，安全零封号，2026年4月持续更新。',

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  sitemap: {
    hostname: 'https://claude-recharge.com',
    transformItems: (items) => {
      const now = new Date().toISOString().split('T')[0]
      return items.map(item => ({
        ...item,
        lastmod: now
      }))
    }
  },

  head: [
    ['meta', { name: 'keywords', content: 'Claude代充,Claude代充值,Claude Pro代充,Claude Max代充,Claude充值,Claude订阅,Claude会员代充,Claude4代充,Claude代充平台,国内Claude代充,Claude会员开通,Claude代开通,Anthropic代充,Claude代充安全,Claude代充多少钱,claude pro充值,claude max充值,claude国内订阅' }],
    ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:title', content: 'Claude代充 - 国内Claude Pro/Max代充值平台 | 微信支付宝直付' }],
    ['meta', { property: 'og:description', content: '专业Claude代充平台，Claude Pro/$100 Max/$200 Max代充值，微信支付宝直付，5分钟到账。安全零封号，已服务5000+用户。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://claude-recharge.com' }],
    ['meta', { property: 'og:site_name', content: 'Claude代充平台' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Claude代充 - Claude Pro/Max代充值 | 微信支付宝直付' }],
    ['meta', { name: 'twitter:description', content: '专业Claude代充平台。Claude Pro/Max会员代充值，5分钟到账，安全零封号。' }],

    ['meta', { name: 'msvalidate.01', content: 'BING_VERIFICATION_CODE_HERE' }],
    ['meta', { name: 'google-site-verification', content: 'GOOGLE_VERIFICATION_CODE_HERE' }],

    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Claude代充平台",
      "url": "https://claude-recharge.com",
      "description": "专业Claude代充平台，提供Claude Pro/Max会员代充值服务",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "Chinese"
      }
    })],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Claude代充安全吗？需要提供密码吗？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "完全安全。我们的Claude代充服务只需要您的Claude账号邮箱（不是密码），通过正规渠道完成充值。已累计服务5000+用户，零封号记录。"
          }
        },
        {
          "@type": "Question",
          "name": "Claude Pro、Max 5x和Max 20x有什么区别？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Claude Pro $20/月，适合普通用户；Claude Max 5x $100/月，使用额度是Pro的5倍，支持Claude Code优先访问；Claude Max 20x $200/月，20倍额度，适合重度用户和开发者团队。"
          }
        },
        {
          "@type": "Question",
          "name": "Claude代充多久能到账？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "一般5分钟内到账。添加客服微信Luv12203后，选择方案、提供邮箱、完成付款，客服即刻为您操作。微信、支付宝均可付款。"
          }
        },
        {
          "@type": "Question",
          "name": "国内用户为什么需要Claude代充？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Claude官方只接受海外信用卡（Visa/MasterCard）付款，国内银行卡、微信、支付宝均无法直接支付。通过Claude代充服务，您可以用微信/支付宝轻松完成充值，无需办理海外银行卡。"
          }
        }
      ]
    })],
    ['script', {}, `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2e3f5c9f50c34190ae43b4c3dd61195e";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Claude代充',

    nav: [
      { text: '首页', link: '/' },
      { text: '💳 代充教程', link: '/guide/getting-started' },
      { text: '📰 深度评测', link: '/blog/' },
      { text: '📡 最新资讯', link: '/news/' },
      { text: '📞 联系代充', link: 'https://work.weixin.qq.com/kfid/kfc4c78659753e2cf8d' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Claude代充教程',
          items: [
            { text: '2026年04月最新Claude订阅全攻略：国内开通、代充值步骤、套餐区别与常见问题', link: '/guide/claude-subscription-guide-2026-04-430' },
            { text: '2026年04月最新Claude订阅指南：国内开通、代充值流程、套餐区别与常见问题', link: '/guide/claude-subscription-2026-04' },
            { text: '"1｜2026年04月在线计算与Claude代充值全指南（安全、快速、正规）"', link: '/guide/keyword-1-claude-recharge-guide-2026-04' },
            { text: 'Claude订阅完全指南：国内用户2026年04月最新充值教程', link: '/guide/claude-subscription-guide-202604' },
            { text: '2026年04月最新｜Claude订阅完整攻略：注册、升级Pro、国内代充全流程', link: '/guide/claude-subscription-guide-2026-04-427-2' },
            { text: 'Claude订阅完全指南：2026年04月最新国内使用攻略（官网+代充+直连）', link: '/guide/claude-subscription-guide-2026-04-427' },
            { text: '2026年04月最新 Claude 订阅完整攻略：注册、充值、代充值全流程（国内用户适用）', link: '/guide/claude-subscription-guide-2026-04' },
            { text: 'Claude Pro订阅完整指南：国内如何安全充值开通（2026年最新）', link: '/guide/claude-pro-subscription-guide-2026-04' },
            { text: 'Claude充值完全指南：国内用户2026年最新充值方法与代充服务', link: '/guide/claude-chongzhi-guide-2026-04' },
            { text: 'Claude注册与使用入门', link: '/guide/getting-started' },
            { text: 'Claude代充流程详解', link: '/guide/recharge-process' },
            { text: 'Claude Pro充值指南（2026最新）', link: '/guide/claude-pro-recharge-guide-202604' },
            { text: 'Claude会员开通指南：国内如何充值 Claude Pro', link: '/guide/claude-huiyuan-chongzhi-guide-2026-04' },
            { text: '2026年Claude代充最全指南', link: '/guide/claude-recharge-guide-2026-04' },
            { text: 'Claude Pro订阅全攻略（2026年4月更新）', link: '/guide/claude-pro-subscription-guide-202604' },
            { text: 'Claude官网充值完整指南：套餐对比与代充流程', link: '/guide/claude-official-recharge-guide-2026-04' },
            { text: '2026最新Claude会员开通全攻略', link: '/guide/claude-huiyuan-guide-2026-04' },
            { text: 'Claude使用技巧', link: '/guide/tips' },
            { text: 'Claude代充常见问题FAQ', link: '/guide/faq' }
          ]
        }
      ],
      '/blog/': [
        {
          text: '深度评测',
          items: [
            { text: '全部文章', link: '/blog/' },
            { text: '2026最新Claude代充教程（实测有效）', link: '/blog/grok-recharge-tutorial-2026' },
            { text: 'Claude Max代充完整指南：Pro/Max全套餐', link: '/blog/grok-super-recharge-guide-2026' },
            { text: 'Claude代充安全吗？风险与避坑指南', link: '/blog/grok-recharge-safety-guide' },
            { text: 'Claude代充哪家靠谱？平台选择攻略', link: '/blog/grok-recharge-platform-guide' },
            { text: 'Claude代充指南2026：国内订阅完整攻略', link: '/blog/grok-recharge-guide-2026' },
            { text: 'Claude代充最稳定教程：2026年4月实测', link: '/blog/grok-daichong-supergrok-zuiwendig-jiaocheng-2026' },
            { text: 'Claude怎么充值？完整充值教程（微信/支付宝）', link: '/blog/grok-daichong-zenme-chong-supergrok-jiaocheng-2026' },
            { text: 'Claude Max 20x开通教程：企业级AI如何代充', link: '/blog/supergrok-heavy-recharge-guide' },
            { text: 'Claude Max vs Pro怎么选？2026年详细对比', link: '/blog/supergrok-annual-vs-monthly' },
            { text: 'Claude Pro月付使用指南：从开通到用好', link: '/blog/supergrok-annual-subscription-guide' },
            { text: 'Claude代充流程完整攻略：5分钟搞定', link: '/blog/supergrok-monthly-recharge-guide' },
            { text: 'Claude免费版限制解析：2026年还能用吗', link: '/blog/grok-free-limits-2026' },
            { text: 'Claude Pro vs 免费版：全面功能对比', link: '/blog/supergrok-vs-free' },
            { text: 'Claude 4.6功能中文完整指南', link: '/blog/grok4-features-chinese-guide' },
            { text: 'Claude Sonnet 4.6深度评测：最强日用AI？', link: '/blog/grok4-review' },
            { text: 'Claude Max 20x深度解析：$200/月值不值？', link: '/blog/supergrok-heavy-review' },
            { text: 'Claude vs ChatGPT 5.4横评：哪个AI更强？', link: '/blog/grok4-vs-chatgpt5-2026' },
            { text: 'Claude vs ChatGPT vs Grok 2026年三巨头横评', link: '/blog/grok-vs-chatgpt-vs-claude' },
            { text: 'Claude Opus 4.7升级指南：旗舰模型如何开通', link: '/blog/grok-420-upgrade-guide' },
            { text: 'Claude多任务实战评测：并行处理能力测试', link: '/blog/grok-42-multi-agent-review' },
            { text: 'Claude注册教程2026：国内如何注册账号', link: '/blog/grok-register-tutorial-2026' }
          ]
        }
      ],
      '/news/': [
        {
          text: '最新资讯',
          items: [
            { text: '全部资讯', link: '/news/' },
            { text: 'Claude Max代充完整教程', link: '/news/claude-max-daichong-guide-2026' },
            { text: 'Claude国内订阅完整指南', link: '/news/claude-china-subscription-guide-2026' },
            { text: 'Claude Max 5x vs 20x深度对比', link: '/news/claude-max-5x-vs-20x-guide-2026' },
            { text: 'Claude代充安全性完整分析', link: '/news/claude-daichong-anquan-ma-fengxian-zhinan-2026' },
            { text: 'Claude代充多少钱？2026年最新指南', link: '/news/claude-daichong-duoshao-qian-jiage-zhinan-2026' },
            { text: 'Claude Pro为什么值得订阅？', link: '/news/claude-pro-why-subscribe-now-2026' },
            { text: 'Claude Code使用指南2026', link: '/news/claude-code-guide-2026' },
            { text: 'Claude 4.6 vs GPT-5.4 vs Gemini 深度横评', link: '/news/claude-46-vs-gpt54-vs-gemini-2026' }
          ]
        }
      ]
    },

    footer: {
      message: '微信客服：Luv12203 ｜ 每天 9:00-23:00 在线',
      copyright: '© 2025-2026 Claude代充平台 claude-recharge.com'
    },

    socialLinks: [],

    outline: {
      label: '本文目录',
      level: [2, 3]
    },

    lastUpdated: {
      text: '更新于'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    }
  },

  transformPageData(pageData) {
    const SITE_HOST = 'https://claude-recharge.com'
    const SITE_NAME = 'Claude代充平台'
    const fm = pageData.frontmatter || {}
    pageData.frontmatter.head = pageData.frontmatter.head || []

    const cleanPath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')
    const canonicalUrl = cleanPath ? `${SITE_HOST}/${cleanPath}` : SITE_HOST
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )

    const pageTitle = fm.title || pageData.title || SITE_NAME
    const pageDesc = fm.description || pageData.description || ''
    pageData.frontmatter.head.push(
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDesc }],
      ['meta', { property: 'og:url', content: canonicalUrl }]
    )

    if (pageData.relativePath !== 'index.md') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageTitle,
        description: pageDesc,
        datePublished: fm.date
          ? new Date(fm.date).toISOString()
          : new Date('2026-01-01').toISOString(),
        dateModified: fm.lastUpdated
          ? new Date(fm.lastUpdated).toISOString()
          : new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_HOST
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        inLanguage: 'zh-CN'
      }
      pageData.frontmatter.head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(articleSchema)
      ])
    }
  }
})
