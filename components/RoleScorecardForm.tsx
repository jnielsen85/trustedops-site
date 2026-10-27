'use client';

import Image from 'next/image';
import { useState } from 'react';
import { readStored, useHydrated } from '@/lib/stored-form';

const STORAGE_KEY = 'trustedops_role_scorecard_v1';

const INITIAL_DATA = {
  roleTitle: '',
  reportsTo: '',
  team: '',
  location: '',
  mission: '',
  outcomes: '',
  kpis: '',
  decisions: '',
  stakeholders: '',
  responsibilities: '',
  mustHaves: '',
  niceHaves: '',
  antiPatterns: '',
  d30: '',
  d60: '',
  d90: '',
};

type FormData = typeof INITIAL_DATA;

const inputCls =
  'w-full border border-black/10 rounded-xl px-3 py-2.5 text-sm text-brand-navy ' +
  'placeholder:text-brand-navy/40 outline-none focus:border-brand-teal ' +
  'focus:ring-2 focus:ring-brand-teal/10 transition';

const textareaCls = inputCls + ' min-h-[88px] resize-y';

const pillBtn =
  'cursor-pointer rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50';

const printBtn =
  'cursor-pointer rounded-full bg-brand-navy px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90';

const grid = 'grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-x-4';

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <label className="mb-1.5 block text-[11px] font-bold tracking-wider uppercase text-brand-navy/70">
        {label}
      </label>
      {children}
    </div>
  );
}

function FormSection({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 border-t border-black/10 pt-5">
      <h2 className="mb-2 text-base font-bold text-brand-navy">{title}</h2>
      {hint && <p className="mb-3.5 text-sm text-brand-navy/70">{hint}</p>}
      {children}
    </div>
  );
}

export function RoleScorecardForm() {
  // Server and hydration render the defaults; once hydrated, remount with any saved progress.
  const hydrated = useHydrated();
  return (
    <RoleScorecard
      key={hydrated ? 'stored' : 'initial'}
      initial={hydrated ? readStored(STORAGE_KEY, INITIAL_DATA) : INITIAL_DATA}
    />
  );
}

function RoleScorecard({ initial }: { initial: FormData }) {
  const [data, setData] = useState<FormData>(initial);
  const [savedMsg, setSavedMsg] = useState(false);

  const set =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const handleClear = () => {
    if (!confirm('Clear all fields?')) return;
    setData(INITIAL_DATA);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div>
      {/* ── Toolbar ── */}
      <div className="mb-5 flex flex-wrap justify-end gap-2.5 print:hidden">
        <button type="button" onClick={handleSave} className={pillBtn}>
          {savedMsg ? 'Saved!' : 'Save'}
        </button>
        <button type="button" onClick={handleClear} className={pillBtn}>
          Clear
        </button>
        <button type="button" onClick={() => window.print()} className={printBtn}>
          Print
        </button>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white print:rounded-none print:border-0">
        {/* Print-only header: the site header is hidden when printing, so this brands the page */}
        <div className="hidden items-center gap-4 border-b-4 border-brand-teal px-6 py-5 print:flex">
          <Image
            src="/brand/trustedops_logo_horizontal_lockup_color.svg"
            alt="TrustedOps"
            width={264}
            height={44}
          />
          <div className="text-xl font-semibold tracking-tight text-brand-navy">Role Scorecard</div>
        </div>

      {/* Form body */}
      <form className="px-6 pb-8 pt-5" onSubmit={(e) => e.preventDefault()}>
        {/* Role details */}
        <div className={grid}>
          <Field label="Role title">
            <input
              className={inputCls}
              placeholder="e.g., Customer Success Associate"
              value={data.roleTitle}
              onChange={set('roleTitle')}
            />
          </Field>
          <Field label="Reports to">
            <input
              className={inputCls}
              placeholder="e.g., Head of Operations"
              value={data.reportsTo}
              onChange={set('reportsTo')}
            />
          </Field>
          <Field label="Team / function">
            <input
              className={inputCls}
              placeholder="e.g., Operations"
              value={data.team}
              onChange={set('team')}
            />
          </Field>
          <Field label="Location / timezone">
            <input
              className={inputCls}
              placeholder="e.g., Manila, working AEST hours"
              value={data.location}
              onChange={set('location')}
            />
          </Field>
          <Field label="Role mission (1–2 sentences)" full>
            <textarea
              className={textareaCls}
              placeholder="The purpose of this role is to…"
              value={data.mission}
              onChange={set('mission')}
            />
          </Field>
        </div>

        {/* Outcomes */}
        <FormSection title="Outcomes" hint="Write outcomes as measurable results, not activities.">
          <div className={grid}>
            <Field label='Top 3 outcomes (what "good" delivers)' full>
              <textarea
                className={textareaCls}
                placeholder={'1) …\n2) …\n3) …'}
                value={data.outcomes}
                onChange={set('outcomes')}
              />
            </Field>
            <Field label="Key performance indicators" full>
              <textarea
                className={textareaCls}
                placeholder="KPI | Target | Cadence (weekly/monthly)…"
                value={data.kpis}
                onChange={set('kpis')}
              />
            </Field>
          </div>
        </FormSection>

        {/* Scope & Interfaces */}
        <FormSection title="Scope & Interfaces">
          <div className={grid}>
            <Field label="Decision rights">
              <textarea
                className={textareaCls}
                placeholder="What this role can decide without approval…"
                value={data.decisions}
                onChange={set('decisions')}
              />
            </Field>
            <Field label="Key stakeholders">
              <textarea
                className={textareaCls}
                placeholder="Who they work with most…"
                value={data.stakeholders}
                onChange={set('stakeholders')}
              />
            </Field>
            <Field label="Core responsibilities (bullets)" full>
              <textarea
                className={textareaCls}
                placeholder="What they do to achieve outcomes…"
                value={data.responsibilities}
                onChange={set('responsibilities')}
              />
            </Field>
          </div>
        </FormSection>

        {/* Capabilities */}
        <FormSection title="Capabilities">
          <div className={grid}>
            <Field label="Must-have skills">
              <textarea
                className={textareaCls}
                placeholder="Non-negotiables…"
                value={data.mustHaves}
                onChange={set('mustHaves')}
              />
            </Field>
            <Field label="Nice-to-have skills">
              <textarea
                className={textareaCls}
                placeholder="Bonus capabilities…"
                value={data.niceHaves}
                onChange={set('niceHaves')}
              />
            </Field>
            <Field label={'Anti-patterns (what "bad" looks like)'} full>
              <textarea
                className={textareaCls}
                placeholder="Behaviours or failure modes to avoid…"
                value={data.antiPatterns}
                onChange={set('antiPatterns')}
              />
            </Field>
          </div>
        </FormSection>

        {/* Ramp Plan */}
        <FormSection title="Ramp Plan">
          <div className={grid}>
            <Field label="First 30 days">
              <textarea
                className={textareaCls}
                placeholder="Learning + initial wins…"
                value={data.d30}
                onChange={set('d30')}
              />
            </Field>
            <Field label="Days 31–60">
              <textarea
                className={textareaCls}
                placeholder="Own processes + deliver outcomes…"
                value={data.d60}
                onChange={set('d60')}
              />
            </Field>
            <Field label="Days 61–90" full>
              <textarea
                className={textareaCls}
                placeholder="Operate independently + improve the system…"
                value={data.d90}
                onChange={set('d90')}
              />
            </Field>
          </div>
        </FormSection>
      </form>
      </div>
    </div>
  );
}
