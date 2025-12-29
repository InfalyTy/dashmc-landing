import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Copy } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const serverIP = "play.dashmc.net";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast.success("Server IP copied to clipboard!");
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Game Modes", href: "#modes" },
    { name: "Store", href: "#" },
    { name: "Discord", href: "#" },
    { name: "Vote", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-pixel text-2xl text-foreground">
            <span className="text-primary">DASH</span>MC
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={copyIP}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-pixel text-primary">{serverIP}</span>
              <Copy className="w-4 h-4" />
            </button>
            <Button variant="glow" size="sm">
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="hero" className="w-full" onClick={copyIP}>
                  Copy IP & Play
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
