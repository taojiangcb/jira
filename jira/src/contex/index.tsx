import React, { PropsWithChildren, ReactNode } from "react";
import { AuthProvider } from "./auth-context";

interface AppProvidersProps {
  children?: ReactNode;
}

export const AppProviders = (props: AppProvidersProps) => (
  <AuthProvider>
    {props.children}
  </AuthProvider>
)