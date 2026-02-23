'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RampPlanGuide } from './RampPlanGuide';

const STORAGE_KEY = 'trustedops_ramp_plan_v1';

// ─── Types ───────────────────────────────────────────────────────────────────

type StakeholderRow = { name: string; handoff: string; cadence: string };
type KpiRow = {
  metric: string;
  def: string;
  source: string;
  baseline: string;
  target: string;
  cadence: string;
};

interface FormData {
  // Context
  company: string;
  team: string;
  roleTitle: string;
  startDate: string;
  timezoneOverlap: string;
  manager: string;
  planOwner: string;
  // Role Definition
  mission: string;
  resp: string[]; // 7 items
  inScope: string;
  outScope: string;
  // Dynamic rows
  stakeholders: StakeholderRow[];
  kpis: KpiRow[];
  // Access
  access_email: boolean;       access_email_owner: string;
  access_docs: boolean;        access_docs_owner: string;
  access_chat: boolean;        access_chat_owner: string;
  access_ticketing: boolean;   access_ticketing_owner: string;
  access_coreapp: boolean;     access_coreapp_owner: string;
  access_other: string;        access_other_owner: string;
  // Training
  training_topics: string;
  training_owner: string;
  // 30/60/90
  d30_learning: string; d30_deliverables: string; d30_ownership: string; d30_risks: string;
  d60_learning: string; d60_deliverables: string; d60_ownership: string; d60_risks: string;
  d90_learning: string; d90_deliverables: string; d90_ownership: string; d90_risks: string;
  // Cadence
  weekly_cadence: string;
  weekly_agenda: string;
  evidence: string;
  // Sign-off
  sign_manager: string;
  sign_hire: string;
  sign_date: string;
  sign_notes: string;
}

// ─── Initial data ─────────────────────────────────────────────────────────────

const EMPTY_STAKEHOLDER: StakeholderRow = { name: '', handoff: '', cadence: '' };
const EMPTY_KPI: KpiRow = { metric: '', def: '', source: '', baseline: '', target: '', cadence: '' };

const INITIAL: FormData = {
  company: '', team: '', roleTitle: '', startDate: '', timezoneOverlap: '', manager: '', planOwner: '',
  mission: '',
  resp: ['', '', '', '', '', '', ''],
  inScope: '', outScope: '',
  stakeholders: [EMPTY_STAKEHOLDER, EMPTY_STAKEHOLDER, EMPTY_STAKEHOLDER],
  kpis: [EMPTY_KPI, EMPTY_KPI, EMPTY_KPI, EMPTY_KPI],
  access_email: false,     access_email_owner: '',
  access_docs: false,      access_docs_owner: '',
  access_chat: false,      access_chat_owner: '',
  access_ticketing: false, access_ticketing_owner: '',
  access_coreapp: false,   access_coreapp_owner: '',
  access_other: '',        access_other_owner: '',
  training_topics: '', training_owner: '',
  d30_learning: '', d30_deliverables: '', d30_ownership: '', d30_risks: '',
  d60_learning: '', d60_deliverables: '', d60_ownership: '', d60_risks: '',
  d90_learning: '', d90_deliverables: '', d90_ownership: '', d90_risks: '',
  weekly_cadence: '', weekly_agenda: '', evidence: '',
  sign_manager: '', sign_hire: '', sign_date: '', sign_notes: '',
};

// ─── Style constants ──────────────────────────────────────────────────────────

const inputCls =
  'w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-brand-navy ' +
  'placeholder:text-brand-navy/25 outline-none focus:border-brand-teal ' +
  'focus:ring-2 focus:ring-brand-teal/10 transition';

const textareaCls = inputCls + ' min-h-[88px] resize-y';

const tableInputCls =
  'w-full border border-gray-200 rounded-lg px-2.5 py-2 text-sm text-brand-navy ' +
  'placeholder:text-brand-navy/20 outline-none focus:border-brand-teal ' +
  'focus:ring-1 focus:ring-brand-teal/10 transition';

const grid = 'grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-x-4';

// ─── Sub-components ───────────────────────────────────────────────────────────

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
      <label className="mb-1.5 block text-[11px] font-bold tracking-wider uppercase text-brand-navy/50">
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
    <div className="mt-5 border-t border-slate-100 pt-5">
      <h2 className="mb-3 text-sm font-semibold text-brand-navy">{title}</h2>
      {hint && <p className="mb-3.5 text-[13px] text-brand-navy/50">{hint}</p>}
      {children}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function RampPlanForm() {
  const [showGuide, setShowGuide] = useState(true);
  const [data, setData] = useState<FormData>(INITIAL);
  const [savedMsg, setSavedMsg] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      if (stored) setData({ ...INITIAL, ...stored });
    } catch {
      // ignore corrupt data
    }
  }, []);

  // Generic string field setter
  const set = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((prev) => ({ ...prev, [key]: e.target.value } as unknown as FormData));

  // Checkbox setter
  const setCheck = (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, [key]: e.target.checked } as unknown as FormData));

  // Responsibility setter
  const setResp = (idx: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((prev) => {
        const resp = [...prev.resp];
        resp[idx] = e.target.value;
        return { ...prev, resp };
      });

  // Stakeholder row setter
  const setStakeholder =
    (idx: number, field: keyof StakeholderRow) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({
        ...prev,
        stakeholders: prev.stakeholders.map((row, i) =>
          i === idx ? { ...row, [field]: e.target.value } : row
        ),
      }));

  const addStakeholder = () =>
    setData((prev) => ({
      ...prev,
      stakeholders: [...prev.stakeholders, { ...EMPTY_STAKEHOLDER }],
    }));

  // KPI row setter
  const setKpi =
    (idx: number, field: keyof KpiRow) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({
        ...prev,
        kpis: prev.kpis.map((row, i) =>
          i === idx ? { ...row, [field]: e.target.value } : row
        ),
      }));

  const addKpi = () =>
    setData((prev) => ({
      ...prev,
      kpis: [...prev.kpis, { ...EMPTY_KPI }],
    }));

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const handleClear = () => {
    if (!confirm('Clear all fields?')) return;
    setData(INITIAL);
    localStorage.removeItem(STORAGE_KEY);
  };

  const ACCESS_ITEMS = [
    { key: 'access_email',     ownerKey: 'access_email_owner',     label: 'Email / Identity' },
    { key: 'access_docs',      ownerKey: 'access_docs_owner',      label: 'Docs / Knowledge Base' },
    { key: 'access_chat',      ownerKey: 'access_chat_owner',      label: 'Chat / Comms' },
    { key: 'access_ticketing', ownerKey: 'access_ticketing_owner', label: 'Ticketing / Workflow' },
    { key: 'access_coreapp',   ownerKey: 'access_coreapp_owner',   label: 'Core Systems (CRM, Finance, etc.)' },
  ] as const;

  const PHASES = [
    { prefix: 'd30', legend: 'Days 1–30',  note: 'Learn + initial wins' },
    { prefix: 'd60', legend: 'Days 31–60', note: 'Deliver core scope' },
    { prefix: 'd90', legend: 'Days 61–90', note: 'Own outcomes + improve the system' },
  ] as const;

  type PhasePrefix = 'd30' | 'd60' | 'd90';

  return (
    <>
      {showGuide && <RampPlanGuide onClose={() => setShowGuide(false)} />}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft">

        {/* Header */}
        <div className="flex flex-wrap items-center gap-4 border-b-4 border-brand-teal px-6 py-5">
          <Image
            src="/brand/trustedops_logo_horizontal_lockup_color.svg"
            alt="TrustedOps"
            width={176}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <div className="flex-1">
            <h1 className="text-xl font-semibold tracking-tight text-brand-navy">
              30/60/90 Ramp Plan
            </h1>
            <p className="mt-1 text-[13px] text-brand-navy/50 print:hidden">
              Fill in the plan, then print or save as PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 print:hidden">
            <button
              type="button"
              onClick={() => setShowGuide(true)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
            >
              How to use
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
            >
              {savedMsg ? 'Saved!' : 'Save'}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="cursor-pointer rounded-xl border border-brand-navy bg-brand-navy px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Print
            </button>
          </div>
        </div>

        <form className="px-6 pb-8 pt-5" onSubmit={(e) => e.preventDefault()}>

          {/* ── 1. Context ──────────────────────────────────────────────── */}
          <div className={grid}>
            <Field label="Company / Client">
              <input className={inputCls} placeholder="e.g., Acme Pty Ltd" value={data.company} onChange={set('company')} />
            </Field>
            <Field label="Team / Function">
              <input className={inputCls} placeholder="e.g., Operations" value={data.team} onChange={set('team')} />
            </Field>
            <Field label="Role Title">
              <input className={inputCls} placeholder="e.g., Customer Success Associate" value={data.roleTitle} onChange={set('roleTitle')} />
            </Field>
            <Field label="Start Date">
              <input type="date" className={inputCls} value={data.startDate} onChange={set('startDate')} />
            </Field>
            <Field label="Location / Timezone & Overlap">
              <input className={inputCls} placeholder="e.g., PH; 4 hrs overlap with AEST" value={data.timezoneOverlap} onChange={set('timezoneOverlap')} />
            </Field>
            <Field label="Manager / Lead">
              <input className={inputCls} placeholder="e.g., Head of Operations" value={data.manager} onChange={set('manager')} />
            </Field>
            <Field label="Plan Owner" full>
              <input className={inputCls} placeholder="Who maintains this plan" value={data.planOwner} onChange={set('planOwner')} />
            </Field>
          </div>

          {/* ── 2. Role Definition ──────────────────────────────────────── */}
          <FormSection title="Role Definition">
            <Field label="Role Mission (1–2 sentences)">
              <textarea
                className={textareaCls}
                placeholder="The purpose of this role is to…"
                value={data.mission}
                onChange={set('mission')}
              />
            </Field>

            <div className="mt-3.5">
              <div className="mb-2 text-[11px] font-bold tracking-wider uppercase text-brand-navy/50">
                Top Responsibilities (keep to 5–7)
              </div>
              <div className="space-y-2">
                {data.resp.map((val, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-5 shrink-0 text-right text-[11px] font-bold text-brand-navy/30">
                      {i + 1}
                    </span>
                    <input className={inputCls} value={val} onChange={setResp(i)} />
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-3.5 ${grid}`}>
              <Field label="In scope (what this role owns)">
                <textarea
                  className={textareaCls}
                  placeholder="What this role is responsible for…"
                  value={data.inScope}
                  onChange={set('inScope')}
                />
              </Field>
              <Field label="Out of scope (explicit exclusions)">
                <textarea
                  className={textareaCls}
                  placeholder="What this role does not own…"
                  value={data.outScope}
                  onChange={set('outScope')}
                />
              </Field>
            </div>
          </FormSection>

          {/* ── 3. Key Interfaces ───────────────────────────────────────── */}
          <FormSection
            title="Key Interfaces & Handoffs"
            hint="List the people/teams this role depends on or serves, and what the handoff is."
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr>
                    {['Stakeholder / Team', 'Why / Handoff', 'Cadence'].map((h) => (
                      <th
                        key={h}
                        className="pb-2 pr-2 text-left text-[11px] font-bold tracking-wider uppercase text-brand-navy/50 last:pr-0"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.stakeholders.map((row, i) => (
                    <tr key={i}>
                      <td className="pb-2 pr-2">
                        <input className={tableInputCls} value={row.name} onChange={setStakeholder(i, 'name')} />
                      </td>
                      <td className="pb-2 pr-2">
                        <input className={tableInputCls} value={row.handoff} onChange={setStakeholder(i, 'handoff')} />
                      </td>
                      <td className="pb-2">
                        <input className={tableInputCls} placeholder="weekly / ad hoc" value={row.cadence} onChange={setStakeholder(i, 'cadence')} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={addStakeholder}
              className="mt-2 text-[12px] font-semibold text-brand-teal transition hover:text-brand-navy print:hidden"
            >
              + Add stakeholder
            </button>
          </FormSection>

          {/* ── 4. KPIs ─────────────────────────────────────────────────── */}
          <FormSection
            title="Success Measures (KPIs)"
            hint="Keep to 3–6. Define them tightly so measurement is consistent."
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    {['Metric', 'Definition', 'Source of Truth', 'Baseline', 'Target', 'Cadence'].map(
                      (h) => (
                        <th
                          key={h}
                          className="pb-2 pr-2 text-left text-[11px] font-bold tracking-wider uppercase text-brand-navy/50 last:pr-0"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.kpis.map((row, i) => (
                    <tr key={i}>
                      <td className="pb-2 pr-2"><input className={tableInputCls} value={row.metric}   onChange={setKpi(i, 'metric')} /></td>
                      <td className="pb-2 pr-2"><input className={tableInputCls} value={row.def}      onChange={setKpi(i, 'def')} /></td>
                      <td className="pb-2 pr-2"><input className={tableInputCls} value={row.source}   onChange={setKpi(i, 'source')} /></td>
                      <td className="pb-2 pr-2"><input className={tableInputCls} placeholder="TBD" value={row.baseline} onChange={setKpi(i, 'baseline')} /></td>
                      <td className="pb-2 pr-2"><input className={tableInputCls} value={row.target}   onChange={setKpi(i, 'target')} /></td>
                      <td className="pb-2">       <input className={tableInputCls} placeholder="weekly" value={row.cadence} onChange={setKpi(i, 'cadence')} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              type="button"
              onClick={addKpi}
              className="mt-2 text-[12px] font-semibold text-brand-teal transition hover:text-brand-navy print:hidden"
            >
              + Add KPI
            </button>
          </FormSection>

          {/* ── 5. Enablement ───────────────────────────────────────────── */}
          <FormSection title="Enablement (Access & Training)">
            <div className="mb-2 text-[11px] font-bold tracking-wider uppercase text-brand-navy/50">
              Systems / Access Required
            </div>
            <div className="space-y-2.5">
              {ACCESS_ITEMS.map(({ key, ownerKey, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={key}
                    checked={data[key]}
                    onChange={setCheck(key)}
                    className="h-4 w-4 shrink-0 rounded border-gray-300 accent-[#1196CC]"
                  />
                  <label htmlFor={key} className="w-52 shrink-0 text-sm text-brand-navy/70">
                    {label}
                  </label>
                  <input
                    className={inputCls}
                    placeholder="Owner"
                    value={data[ownerKey]}
                    onChange={set(ownerKey)}
                  />
                </div>
              ))}
              {/* Other row */}
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 shrink-0" />
                <input
                  className={`${inputCls} w-52 shrink-0`}
                  placeholder="Other access"
                  value={data.access_other}
                  onChange={set('access_other')}
                />
                <input
                  className={inputCls}
                  placeholder="Owner"
                  value={data.access_other_owner}
                  onChange={set('access_other_owner')}
                />
              </div>
            </div>

            <div className={`mt-4 ${grid}`}>
              <Field label="Training topics + links" full>
                <textarea
                  className={textareaCls}
                  placeholder="What must they learn (topics + links)…"
                  value={data.training_topics}
                  onChange={set('training_topics')}
                />
              </Field>
              <Field label="Training / shadowing owner">
                <input
                  className={inputCls}
                  placeholder="Who provides the training"
                  value={data.training_owner}
                  onChange={set('training_owner')}
                />
              </Field>
            </div>
          </FormSection>

          {/* ── 6. 30/60/90 Plan ────────────────────────────────────────── */}
          <FormSection title="30 / 60 / 90 Plan">
            <div className="space-y-4">
              {PHASES.map(({ prefix, legend, note }) => (
                <div key={prefix} className="rounded-xl border border-gray-200 p-4">
                  <div className="mb-3 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-brand-navy">{legend}</h3>
                    <span className="text-[12px] text-brand-navy/40">{note}</span>
                  </div>
                  <div className={grid}>
                    <Field label="Learning goals">
                      <textarea
                        className={textareaCls}
                        placeholder="What they must understand to operate safely…"
                        value={data[`${prefix}_learning` as keyof FormData] as string}
                        onChange={set(`${prefix}_learning`)}
                      />
                    </Field>
                    <Field label="Deliverables">
                      <textarea
                        className={textareaCls}
                        placeholder="Concrete outputs (shipped, implemented…)"
                        value={data[`${prefix}_deliverables` as keyof FormData] as string}
                        onChange={set(`${prefix}_deliverables`)}
                      />
                    </Field>
                    <Field label="Ownership milestones">
                      <textarea
                        className={textareaCls}
                        placeholder="What they own end-to-end by end of phase…"
                        value={data[`${prefix}_ownership` as keyof FormData] as string}
                        onChange={set(`${prefix}_ownership`)}
                      />
                    </Field>
                    <Field label="Dependencies / risks">
                      <textarea
                        className={textareaCls}
                        placeholder="Access, training, stakeholder time…"
                        value={data[`${prefix}_risks` as keyof FormData] as string}
                        onChange={set(`${prefix}_risks`)}
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </FormSection>

          {/* ── 7. Operating Cadence ────────────────────────────────────── */}
          <FormSection title="Operating Cadence & Evidence">
            <div className={grid}>
              <Field label="Weekly check-in (time + attendees)">
                <input
                  className={inputCls}
                  placeholder="e.g., Mon 9am AEST – Manager + Hire"
                  value={data.weekly_cadence}
                  onChange={set('weekly_cadence')}
                />
              </Field>
              <Field label="Weekly check-in agenda">
                <textarea
                  className={textareaCls}
                  placeholder="Standing agenda items…"
                  value={data.weekly_agenda}
                  onChange={set('weekly_agenda')}
                />
              </Field>
              <Field label="Evidence reviewed (links / reports / dashboards)" full>
                <textarea
                  className={textareaCls}
                  placeholder="Where you'll look for proof of progress…"
                  value={data.evidence}
                  onChange={set('evidence')}
                />
              </Field>
            </div>
          </FormSection>

          {/* ── 8. Sign-off ─────────────────────────────────────────────── */}
          <FormSection title="Sign-off">
            <div className={grid}>
              <Field label="Manager sign-off">
                <input className={inputCls} value={data.sign_manager} onChange={set('sign_manager')} />
              </Field>
              <Field label="Hire acknowledgement">
                <input className={inputCls} value={data.sign_hire} onChange={set('sign_hire')} />
              </Field>
              <Field label="Date">
                <input type="date" className={inputCls} value={data.sign_date} onChange={set('sign_date')} />
              </Field>
              <Field label="Notes / Exceptions" full>
                <textarea
                  className={textareaCls}
                  placeholder="Any adjustments or exceptions to document…"
                  value={data.sign_notes}
                  onChange={set('sign_notes')}
                />
              </Field>
            </div>
          </FormSection>

        </form>
      </div>
    </>
  );
}
