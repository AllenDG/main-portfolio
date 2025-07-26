import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils"; // optional utility for className merging

type CautionCardProps = {
  message?: string;
  className?: string;
};

export default function CautionCard({ message, className }: CautionCardProps) {
  return (
    <div
      className={cn(
        "flex items-center text-center gap-3 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-100 p-4 rounded-md shadow-sm",
        className
      )}
    >
      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-300" />
      <p className="text-sm leading-relaxed">
        {message ??
          "Please note: This project was built for a real client. As a result, access to sensitive features or credentials is restricted. Thank you for your understanding."}
      </p>
    </div>
  );
}
