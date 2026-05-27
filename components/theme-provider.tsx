"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  return useNextTheme()
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </NextThemesProvider>
  )
}
