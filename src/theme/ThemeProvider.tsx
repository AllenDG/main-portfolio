// src/components/theme/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark" // ✅ Force dark mode as default
      enableSystem={false} // ❌ Disable system preference
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
