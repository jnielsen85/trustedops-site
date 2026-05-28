"use client";

import { LDProvider } from "launchdarkly-react-client-sdk";

export function LaunchDarklyProvider({ children }: { children: React.ReactNode }) {
  const clientSideId = process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_SIDE_ID!;
  return (
    <LDProvider clientSideID={clientSideId}>
      {children}
    </LDProvider>
  );
}
