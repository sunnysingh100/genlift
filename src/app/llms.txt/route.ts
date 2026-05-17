import { createLlmsTxtHandler } from "@dualmark/nextjs";

const handler = createLlmsTxtHandler({
  brandName: "Genlift",
  description:
    "Genlift builds and deploys custom AI voice agents for small and medium-sized businesses. Automate calls, capture leads 24/7, and delight customers with human-like voice AI.",
  sections: [
    {
      title: "Pages",
      links: [
        { title: "Home", href: "https://genlift.online/" },
        {
          title: "Book a Strategy Call",
          href: "https://cal.com/sunny-singh/quick-chat",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          title: "Custom Voice Agent Development",
          href: "https://genlift.online/#services",
        },
        {
          title: "Tool & CRM Integration",
          href: "https://genlift.online/#services",
        },
        {
          title: "Inbound & Outbound Calls",
          href: "https://genlift.online/#services",
        },
        {
          title: "Analytics & Reporting",
          href: "https://genlift.online/#services",
        },
        {
          title: "Multi-Language Support",
          href: "https://genlift.online/#services",
        },
        {
          title: "Ongoing Support & Optimization",
          href: "https://genlift.online/#services",
        },
      ],
    },
    {
      title: "Industries",
      links: [
        {
          title: "Real Estate",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Healthcare",
          href: "https://genlift.online/#industries",
        },
        {
          title: "E-Commerce",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Restaurants",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Legal Services",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Insurance",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Automotive",
          href: "https://genlift.online/#industries",
        },
        {
          title: "Education",
          href: "https://genlift.online/#industries",
        },
      ],
    },
  ],
});

export const dynamic = "force-static";
export const GET = handler.GET;
