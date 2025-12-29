import { MessageCircle, Twitter, Youtube, ShoppingBag } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    play: [
      { name: "How to Join", href: "#" },
      { name: "Server Rules", href: "#" },
      { name: "Vote for Us", href: "#" },
      { name: "Server Status", href: "#" },
    ],
    community: [
      { name: "Discord", href: "#" },
      { name: "Forums", href: "#" },
      { name: "Apply for Staff", href: "#" },
      { name: "Report a Player", href: "#" },
    ],
    support: [
      { name: "Store", href: "#" },
      { name: "Support Tickets", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socials = [
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: ShoppingBag, href: "#", label: "Store" },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-pixel text-3xl text-foreground mb-2">
              <span className="text-primary">DASH</span>MC
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              The ultimate Minecraft server experience. Join our growing community and explore endless adventures.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">PLAY</h4>
            <ul className="space-y-2">
              {links.play.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">COMMUNITY</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DashMC Network. Not affiliated with Mojang Studios.
          </p>
          <p className="text-muted-foreground text-sm">
            Minecraft Java Edition 1.20.x • play.dashmc.net
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
