// data/menuItems.ts
export const menuItems = [
  { label: "Home", href: "/home" },
  { label: "Announcements", href: "/announcements" },
  {
    label: "Deacons",
    children: [
      { label: "All Deacons", href: "/deacons" },
      { label: "Schedules", href: "/deacons/schedules" },
    ],
  },
  {
    label: "Donation / Fundraising",
    children: [
      { label: "Make a Donation", href: "/donation" },
      { label: "Fundraising Events", href: "/donation/events" },
    ],
  },
  { label: "Our Diocese", href: "/diocese" },
  {
    label: "Our Church",
    children: [
      { label: "About", href: "/church/about" },
      { label: "Events", href: "/church/events" },
    ],
  },
  { label: "Sunday School", href: "/sunday-school" },
  {
    label: "Youth Corner",
    children: [
      { label: "Programs", href: "/youth/programs" },
      { label: "Media", href: "/youth/media" },
    ],
  },
  {
    label: "Prayers & Quotes",
    children: [
      { label: "Morning Prayers", href: "/prayers/morning" },
      { label: "Quotes", href: "/quotes" },
    ],
  },
  {
    label: "Holy Family Meeting",
    children: [
      { label: "Info", href: "/holy-family/info" },
      { label: "Meetings", href: "/holy-family/meetings" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
]
