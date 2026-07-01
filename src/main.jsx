import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const features = [
  'Create, import, lock, and unlock wallet sessions',
  'Portfolio balances with fiat value and 24h movement',
  'Review fees, total debit, and post-send estimates',
  'Encrypted local wallet persistence through Tauri',
];

const screens = ['Send', 'Receive', 'Swap', 'Assets', 'Activity', 'Settings'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.25),transparent_32rem),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_28rem)]" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 font-black text-teal-200">
              VF
            </div>
            <span className="text-lg font-semibold tracking-wide">VaultForge</span>
          </div>
          <a
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-teal-300/60 hover:text-white"
            href="https://github.com/kunningKing11/vaultforge"
          >
            View GitHub
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-teal-300/25 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-200">
              Local-first crypto wallet desktop app
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your keys stay local. Your wallet still feels modern.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              VaultForge combines a TypeScript and Tailwind interface with a Rust-powered Tauri backend for encrypted storage, transaction signing, and provider-backed wallet reads.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-teal-300 px-6 py-3 text-center font-bold text-slate-950 transition hover:bg-teal-200"
                href="https://github.com/kunningKing11/vaultforge"
              >
                Explore the project
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-center font-bold text-white transition hover:border-white/40 hover:bg-white/5"
                href="#demo"
              >
                See demo flow
              </a>
            </div>
          </div>

          <WalletMockup />
        </div>
      </section>

      <section id="demo" className="border-y border-white/10 bg-white/[0.03] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/10 text-sm font-black text-teal-200">
                0{index + 1}
              </div>
              <h2 className="text-xl font-bold">{feature}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Built for a desktop wallet experience where sensitive actions are deliberate, visible, and backed by local encrypted state.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal-200">Screens included</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Everything needed to show the wallet story.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen) => (
              <div key={screen} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 font-semibold text-slate-100">
                {screen}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function WalletMockup() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-teal-950/40 backdrop-blur">
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Portfolio value</p>
            <p className="text-4xl font-black">$24,918.42</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">+4.8%</span>
        </div>
        <div className="space-y-3">
          {[
            ['ETH', '8.42', '$18,710'],
            ['SOL', '120.5', '$4,996'],
            ['USDC', '1,212', '$1,212'],
          ].map(([symbol, amount, value]) => (
            <div key={symbol} className="flex items-center justify-between rounded-2xl bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-300/10 font-bold text-teal-200">{symbol[0]}</div>
                <div>
                  <p className="font-bold">{symbol}</p>
                  <p className="text-sm text-slate-400">{amount} available</p>
                </div>
              </div>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
          <p className="text-sm font-bold text-amber-200">Transaction review</p>
          <p className="mt-1 text-sm text-slate-300">Confirm chain, recipient, fee, and total debit before signing locally.</p>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
