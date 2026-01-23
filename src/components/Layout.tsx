import Navbar, { PillNavItem } from "./common/Navbar"; // Using default export as 'Navbar' (it was exported as PillNav)
import StaggeredMenu from "./common/Menu";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: PillNavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Layout = ({ children }: LayoutProps) => {

  const staggeredItems = navItems.map((item) => ({
    label: item.label,
    link: item.href,
    ariaLabel: item.label,
  }));

  return (
    <div className="relative w-full">
      {/* Desktop Navbar (PillNav) */}
      <div className="hidden md:flex fixed top-0 left-0 w-full z-50 p-4 justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar
            items={navItems}
            initialLoadAnimation={true}
            className="backdrop-blur-md"
          />
        </div>
      </div>

      {/* Mobile Navbar (StaggeredMenu) */}
      <div className="md:hidden pointer-events-auto">
        <StaggeredMenu
          items={staggeredItems}
          isFixed={true}
          colors={["#22d3ee", "#64ffda", "#4cc9f0", "#0ea5e9"]}
          accentColor="#64ffda"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#ffffff"
        />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
