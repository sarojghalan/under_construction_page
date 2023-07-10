"use client";
import { ThemeProvider } from "styled-components";
import { PZTheme } from "@/lib/theme";

export const PZThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <ThemeProvider theme={PZTheme}>{children}</ThemeProvider>;

