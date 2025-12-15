import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        size="lg"
        className="shadow-lg shadow-brand-blue/20"
        aria-label="Chat with us on WhatsApp"
      >
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" /> Chat with us on WhatsApp
        </a>
      </Button>
    </div>
  );
}
