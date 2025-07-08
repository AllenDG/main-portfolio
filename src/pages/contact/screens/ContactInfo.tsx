// components/ContactInfo.tsx
import { Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex items-center justify-center gap-3">
        <Mail className="text-neutral-400 w-5 h-5" />
        <span className="text-muted-foreground">
          allenwalterfiestada@gmail.com
        </span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Phone className="text-neutral-400 w-5 h-5" />
        <span className="text-muted-foreground">+63 948 742 7663</span>
      </div>
    </div>
  );
}
