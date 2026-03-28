import {
  barChart2,
  bell,
  caretDown,
  fileBarChart,
  mousePointerClick,
  sparkles,
  target,
} from "./icons";

const icon = caretDown;

export const items = [
  {
    itemName: "Features",
    itemHref: "#",
    id: 1,
    icon: icon,
  },
  { itemName: "Developers", itemHref: "#", id: 2 },
  { itemName: "Company", itemHref: "#", id: 3, icon: icon },
  { itemName: "Blog", itemHref: "#", id: 4 },
  { itemName: "Changelog", itemHref: "#", id: 5 },
];

export const features = [
  {
    icon: barChart2,
    title: "Visual reports",
    description: "Visual insights into your site's performance.",
  },
  {
    icon: target,
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    icon: mousePointerClick,
    title: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: sparkles,
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
  },
  {
    icon: bell,
    title: "Automated alerts",
    description:
      "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    icon: fileBarChart,
    title: "Competitor reports",
    description:
      "Provides insights into competitors' keyword strategies and ranking.",
  },
];
