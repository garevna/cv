/**
 * Every tile in the portfolio, as data.
 *
 * It used to be twelve hand-written blocks in PortfolioButtons.vue — a
 * `clickXxx()` function and forty lines of markup each, with the link, the logo
 * and the label sitting in the template. Adding a project meant editing the
 * component, adding a function, importing an asset and, for the ones that open
 * a description, a component and a route as well. That is why the portfolio
 * kept falling behind the work: a project cost an evening. Now it costs one
 * object.
 *
 * The descriptions moved in here too. They were in three shapes at once —
 * two components with their text in config files, one component with the text
 * written into its markup — and, more to the point, eight tiles had a pointer
 * button while only three descriptions were ever rendered. Pressing VD EXPRESS,
 * IS PORTAL, BUS PORTAL, ITNET or Roles manager did nothing at all.
 *
 * The rule now: a project with `description` gets the pointer button that opens
 * it, and a project without one gets a plain link out. A dead button is no
 * longer possible to write.
 */

export interface PortfolioProject {
  /** Shown under the tile on hover, and used as the button's alt text. */
  label: string
  /** Where the tile links. '#' for the ones that only open a description. */
  href: string
  /** The file in src/assets, or 'glitch' for the animated logo component. */
  logo: string
  /** The image's own alt, where it differs from the label. */
  alt?: string
  width: number
  /**
   * Left out for DGtek on purpose: the original markup had `heigh="48"`, a
   * typo, so that image has never had a height attribute and is scaled by its
   * width alone. Writing 48 here would change how the tile looks.
   */
  height?: number
  /** The class on the <img>, which carries its vertical nudge. */
  imageClass: string
  /** The ground behind the icon. */
  fone?: 'normal-fone' | 'black-fone'
  /** The label on the button itself, where it differs from the tile's. */
  buttonLabel?: string

  /**
   * The key the tile selects, and the text it opens. Both or neither: a key
   * without a description is the dead button this structure exists to prevent.
   */
  selects?: string
  description?: string
  /** Shown above the description by ExpandedText. */
  role?: string
  stack?: string
  /** A button under the description, for projects with something to open. */
  demo?: { href: string; label: string }
  /** An embedded playlist under the description. */
  video?: string
  /**
   * Set where the description is a component of its own rather than prose —
   * only the task manager, whose layout is not a paragraph.
   */
  component?: 'task-manager'
}

export const portfolioProjects: PortfolioProject[] = [
  {
    label: 'VD EXPRESS',
    href: 'https://dev.vdexpress.isportal.app/',
    logo: 'vd-express-logo.svg',
    width: 56,
    height: 56,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'vd-express',
    role: 'Senior Frontend developer',
    stack:
      'Vue 3 • TypeScript • Vuetify 3 • Pinia • vue-i18n • MapLibre GL • Firebase Auth • WebSocket • pnpm workspaces',
    description: `A booking platform for international coach services, built as a reusable core that serves several independent carriers.

The core is a pnpm monorepo split by responsibility: the booking flow itself, a typed domain contract, the API layer, a shared component library and an event bus.

It imports no host store. The application registers them through registerStoresFor*(), so one core serves several carriers with no fork — and the order of steps is declarative too: predicates on each step decide whether it is enabled and whether it can be entered or left, instead of a flow hard-coded once.

Seat availability is synchronised live over WebSocket, with automatic reconnection and ping monitoring. The cabin layouts are the real ones, with seat types and automatic selection for groups.

Full lifecycle: search with connections, passengers and discounts, payment, PDF tickets by email, cancellation and refund. Three languages with localised formats.`,
  },
  {
    label: 'IS PORTAL',
    href: 'https://isportal.app/',
    logo: 'is-portal-logo.svg',
    width: 56,
    height: 56,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'is-portal',
    role: 'Senior Frontend developer',
    stack: 'Vue 3 • TypeScript • Vite • Pinia • vue-i18n • Vuetify • Swiper • Vitest',
    description: `The public face of a B2B platform that telecoms operators run their field work on — connections, installation crews, requests, warehouses and procurement.

Separate desktop and mobile journeys rather than one layout bent to fit: the navigation, the menus and the section flow differ where the smaller screen needs them to.

A pricing module that switches between monthly and annual subscriptions, request and call-back forms with validation, an FAQ, and carousels built on Swiper.`,
  },
  {
    label: 'BUS PORTAL',
    href: 'https://www.busportal.app/',
    logo: 'bus-portal-logo.svg',
    width: 56,
    height: 56,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'bus-portal',
    role: 'Senior Frontend developer',
    stack:
      'Vue 3 • TypeScript • Vite 7 • vite-ssg • Vuetify 3 • Pinia • @unhead/vue • Directus 11 • GA4',
    description: `A marketing site for a CRM platform aimed at bus and logistics companies, serving the Ukrainian, European and international markets.

Every route is pre-rendered. vite-ssg generates them all as HTML and serialises the Pinia state into the markup, so the page arrives complete and hydrates afterwards — 20+ routes across four languages, each with its own URL, with the locale resolved both during pre-rendering and at runtime.

The SEO layer is a composable rather than scattered meta tags: title, description, canonical, hreflang, Open Graph, Twitter Card and a generated sitemap.

Blog content comes from a self-hosted Directus, pre-rendered with real publication dates and cross-regional alternate links.`,
  },
  {
    label: 'ITNET',
    href: 'https://itnet.lviv.ua/',
    logo: 'it-net-logo.svg',
    width: 52,
    height: 52,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'itnet',
    role: 'Senior Frontend developer',
    stack: 'Vue 3 • TypeScript • Vite • Vuetify • Pinia • vue-i18n • Swiper • Vitest',
    description: `The corporate site of the company behind the portals above — who they are, the CRM products they sell, and how to reach them.

Three languages, interactive cards, separate desktop and mobile navigation flows, feedback forms and pop-up scenarios.

My part was the interface, the responsive layout and the client-side logic; Docker and CI were set up by colleagues.`,
  },
  {
    label: 'Roles manager',
    href: 'https://garevna.github.io/roles-manager/',
    logo: 'icon-ierarchy.svg',
    width: 44,
    height: 44,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'roles-manager',
    role: 'Senior Frontend developer',
    stack: 'Vue 3 • TypeScript • Pinia • Vuetify 3 • Vite',
    description: `An editor for the thing every admin panel needs and nobody enjoys building: who may do what.

Roles, departments and the permissions between them, as a tree you can rearrange — rights are granted and withdrawn by moving them, not by hunting through a grid of checkboxes.

Built for the administration side of the portals, and kept as a standalone demo.`,
    demo: { href: 'https://garevna.github.io/roles-manager/', label: 'Open the demo' },
  },
  {
    label: 'Task manager',
    href: '#',
    logo: 'table-edit.svg',
    width: 44,
    height: 44,
    imageClass: 'task-manager-icon',
    fone: 'normal-fone',
    selects: 'task-manager',
    component: 'task-manager',
  },
  {
    label: 'DGtek portal',
    href: '#',
    logo: 'dgtek.png',
    alt: 'DGtek logo',
    width: 64,
    imageClass: 'dgtek-icon',
    fone: 'normal-fone',
    selects: 'dgtek',
    role: 'Frontend lead | Senior Frontend developer',
    stack:
      'Vue 2 • Vuetify • Vuex • Web Workers • IndexedDB • Service Workers / PWA • Google Maps API • Geoscape • npm publishing',
    description: `A B2B provisioning platform for a fibre network operator expanding from Melbourne across Australia, serving three groups at once: the operator's own admins, the reseller ISPs selling on its network, and the public checking whether their building can be connected.

Four years as the only frontend engineer on it — 14 repositories, around 72,000 lines of Vue, three applications and seven in-house npm packages shared between them, over 100,000 customer and building records.

The data layer is a Web Worker shared by all three applications: a message controller for every API call, credentials encrypted rather than left in localStorage, and a versioned IndexedDB cache of ten stores with secondary indexes. That is what keeps a heavy admin interface responsive on an unstable connection.

Financial reporting runs in the browser, not on the server: monthly revenue, churn and ARPU are computed over IndexedDB cursors and drawn with Google Charts, which removed a whole class of slow endpoints.

Serviceability polygons and building markers on Google Maps with Geoscape address data, in-map editors for polygons and pits, and a build-cost calculator pricing a fibre haul to the nearest pit and exporting a client-ready PDF quote.

The coverage-check packages went further than the portal: resellers embedded them on their own sites, so a visitor's address was resolved against the operator's live polygons and answered with a realistic connection time — coverage edited in one place, every downstream site following.`,
    video:
      'https://www.youtube.com/embed/videoseries?list=PLaum0i8Jzw-uzioRfS95KUfMyH4Y3unkT&autoplay=1',
  },
  {
    label: 'Pineapple CMS',
    href: '#',
    logo: 'pineapple.png',
    alt: 'Pineapple logo',
    width: 44,
    height: 44,
    imageClass: 'pineapple-icon',
    fone: 'black-fone',
    selects: 'pineapple',
    role: 'Senior Vue.js | Nuxt.js | Node.js developer',
    stack: 'Nuxt 2 • Vue 2 • Vuetify • Vuex • vue-lazy-hydration • Node.js • Express • PWA',
    description: `An ISP reselling DGtek's fibre network, and the headless CMS its marketing team runs on.

The public site is Nuxt 2, statically generated: pages ship as HTML and hydrate on demand, straight to a CDN branch. It is composed from ten npm packages I published — navigation, internet plans, FAQ, testimonials, contact form, popup, footer, system bar, how-to-connect and the shared styles — each versioned and released on its own.

Below-the-fold sections cost nothing until the visitor reaches them, through selective hydration. Navigation and page content are resolved from the CMS at runtime, so marketing edits pages without a deploy.

The CMS itself is mine as well, front to back: landing pages stored as JSON with a publish and hide lifecycle, content editable down to the behaviour of individual buttons, and a survey builder with configurable field types.

The address check on every page came from the DGtek packages I also maintained — the same live polygons, the same connection estimate, on a different company's site.`,
    demo: { href: 'https://garevna.github.io/pineapple-lands-editor', label: 'Open the editor' },
  },
  {
    label: 'JS-lessons',
    href: 'https://garevna.github.io/js-lessons/',
    logo: 'glitch',
    width: 70,
    height: 70,
    imageClass: '',
    buttonLabel: 'JS lessons',
  },
  {
    label: 'JS-quiz',
    href: 'https://garevna.github.io/js-quiz/',
    logo: 'js-icon.svg',
    alt: 'js-quiz',
    width: 48,
    height: 48,
    imageClass: 'quiz',
    fone: 'black-fone',
    buttonLabel: 'JS quiz',
  },
  {
    label: 'npm',
    href: 'https://www.npmjs.com/~garevna',
    logo: 'npm.svg',
    alt: 'npm registry',
    width: 64,
    height: 64,
    imageClass: 'npm',
    fone: 'black-fone',
    buttonLabel: 'npm registry',
  },
]
