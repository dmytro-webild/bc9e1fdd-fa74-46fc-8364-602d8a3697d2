import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Work",
    "href": "#portfolio"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Booking",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="INKSTUDIO"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Book Session",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Email",
              href: "mailto:hello@inkstudio.com",
            },
          ],
        },
        {
          title: "Information",
          items: [
            {
              label: "Location: New York, NY",
              href: "#",
            },
            {
              label: "Hours: Tue-Sat 12-8PM",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2026 INKSTUDIO"
      rightText="Designed for precision."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
