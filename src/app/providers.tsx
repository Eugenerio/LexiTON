'use client';

import { SDKProvider, DisplayGate } from '@tma.js/sdk-react';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import { options } from './config/tma';

function SDKProviderError({ error }: { error: unknown }) {
  return (
    <div>
      Oops. Something went wrong.
      <blockquote>
        <code>{error instanceof Error ? error.message : JSON.stringify(error)}</code>
      </blockquote>
    </div>
  );
}

function SDKProviderLoading() {
  return <div>SDK is loading.</div>;
}

function SDKInitialState() {
  return <div>Waiting for initialization to start.</div>;
}

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SDKProvider options={options}>
      <TonConnectUIProvider
        // ngrok link before slash
        manifestUrl={'/tonconnect-manifest.json'}
        uiPreferences={{ theme: THEME.DARK }}
      >
        <DisplayGate error={SDKProviderError} loading={SDKProviderLoading} initial={SDKInitialState}>
          {children}
        </DisplayGate>
      </TonConnectUIProvider>
    </SDKProvider>
  );
}
