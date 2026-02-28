'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ROLE_DATA, INITIAL } from '@/lib/calculator-data';

// ── State ─────────────────────────────────────────────────────────────────────

type State = typeof INITIAL;

const STORAGE_KEY = 'trustedops_cost_calc_v3';

// ── Formatting ─────────────────────────────────────────────────────────────

const fmtAUD = (n: number) =>
  new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(n);

// ── Calculations ──────────────────────────────────────────────────────────

type Row = { label: string; value: number };

function calcAU(s: State): { total: number; rows: Row[] } {
  const mo = s.au_salary / 12;
  const superMo = mo * s.au_super / 100;
  const workersComp = mo * s.au_workersComp / 100;
  const leaveAccrual = mo * s.au_leaveAccrual / 100;
  const total = mo + superMo + workersComp + leaveAccrual + s.au_equipment + s.au_software + s.au_payrollAdmin;
  return {
    total,
    rows: [
      { label: 'Base salary', value: mo },
      { label: `Superannuation (${s.au_super}%)`, value: superMo },
      { label: `Workers compensation (${s.au_workersComp}%)`, value: workersComp },
      { label: `Leave entitlements (${s.au_leaveAccrual}%)`, value: leaveAccrual },
      { label: 'Equipment', value: s.au_equipment },
      { label: 'Software & tools', value: s.au_software },
      { label: 'Payroll & HR admin', value: s.au_payrollAdmin },
    ].filter((r) => r.value > 0),
  };
}

function calcTO(s: State): { total: number; rows: Row[] } {
  const mo = s.to_salary / 12;
  const eorMo = s.to_eorQtrFee / 3;
  const thirteenthMonth = mo / 12; // 1 extra month's salary spread monthly
  const entitlements = mo * (s.to_mandatoryEntitlements || 0) / 100;
  const total = mo + eorMo + thirteenthMonth + entitlements + s.to_equipment + s.to_software;
  return {
    total,
    rows: [
      { label: 'Offshore salary', value: mo },
      { label: `TrustedOps EoR (${fmtAUD(s.to_eorQtrFee)}/qtr)`, value: eorMo },
      { label: '13th month pay', value: thirteenthMonth },
      { label: `Mandatory entitlements (${s.to_mandatoryEntitlements}%)`, value: entitlements },
      { label: 'Equipment', value: s.to_equipment },
      { label: 'Software & tools', value: s.to_software },
    ].filter((r) => r.value > 0),
  };
}

// ── Shared input style ─────────────────────────────────────────────────────

const numCls =
  'w-full rounded-lg border border-gray-200 px-2.5 py-1.5 text-sm text-brand-navy ' +
  'outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/10 transition ' +
  'text-right [appearance:textfield] ' +
  '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';

// ── NumField ──────────────────────────────────────────────────────────────

function NumField({
  label,
  value,
  onChange,
  unit,
  hint,
  step = 1,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
  hint?: string;
  step?: number;
  min?: number;
}) {
  return (
    <div>
      <label className="mb-1 block text-[10px] font-semibold tracking-wider uppercase text-brand-navy/40">
        {label}
        {hint && <span className="ml-1 normal-case font-normal text-brand-navy/30">{hint}</span>}
      </label>
      <div className="flex items-center gap-1.5">
        <input
          type="number"
          className={numCls}
          value={value || ''}
          onChange={onChange}
          step={step}
          min={min}
        />
        {unit && <span className="w-9 shrink-0 text-xs text-brand-navy/40">{unit}</span>}
      </div>
    </div>
  );
}

// ── CompBar (horizontal comparison bar) ──────────────────────────────────

function CompBar({
  label,
  value,
  max,
  barClass,
  sublabel,
}: {
  label: string;
  value: number;
  max: number;
  barClass: string;
  sublabel?: string;
}) {
  const pct = max > 0 ? Math.max((value / max) * 100, 2) : 2;
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 shrink-0">
        <div className="text-[11px] font-semibold text-brand-navy/70">{label}</div>
        {sublabel && <div className="text-[10px] text-brand-navy/40">{sublabel}</div>}
      </div>
      <div className="flex-1 rounded-full bg-slate-100" style={{ height: 10 }}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${barClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="w-20 shrink-0 text-right text-sm font-bold text-brand-navy">
        {fmtAUD(value)}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────

export function CostCalculatorForm() {
  const [s, setS] = useState<State>(INITIAL);
  const [savedMsg, setSavedMsg] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
      if (stored) setS({ ...INITIAL, ...stored });
    } catch {
      // ignore corrupt data
    }
  }, []);

  function upd<K extends keyof State>(k: K, v: State[K]) {
    setS((prev) => ({ ...prev, [k]: v }));
  }

  const n =
    (k: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>
      upd(k, (e.target.value === '' ? 0 : Number(e.target.value)) as State[typeof k]);

  function handleRoleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const key = e.target.value;
    if (!key) return;
    const [cat, roleName] = key.split('::');
    const role = ROLE_DATA[cat]?.find((r) => r.name === roleName);
    if (role) {
      setS((prev) => ({ ...prev, selectedRole: key, au_salary: role.au, to_salary: role.ph }));
    }
  }

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const handleReset = () => {
    if (!confirm('Reset all values to defaults?')) return;
    setS(INITIAL);
    localStorage.removeItem(STORAGE_KEY);
  };

  // Live calculations
  const au = calcAU(s);
  const to = calcTO(s);
  const monthlySaving = au.total - to.total;
  const annualSaving = monthlySaving * 12;
  const pctOfAU = au.total > 0 ? Math.round((to.total / au.total) * 100) : 0;
  const barMax = Math.max(au.total, to.total);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft">

      {/* ── Header ──────────────────────────────────────────────────────── */}
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
            Fully-Loaded Cost Calculator
          </h1>
          <p className="mt-1 text-[13px] text-brand-navy/50">
            Australian Direct Hire vs TrustedOps — true cost, not just base salary.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={handleSave}
            className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
          >
            {savedMsg ? 'Saved!' : 'Save'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-brand-navy transition hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="px-6 pb-8 pt-6">

        {/* ── Role Selector ────────────────────────────────────────────── */}
        <div className="rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-5">
          <label className="mb-2 block text-[11px] font-bold tracking-widest uppercase text-brand-teal">
            Select a role
          </label>
          <select
            className="w-full rounded-xl border border-brand-teal/25 bg-white px-4 py-3 text-base font-semibold text-brand-navy outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition"
            value={s.selectedRole}
            onChange={handleRoleChange}
          >
            <option value="" disabled>
              — choose a role to auto-fill salary benchmarks —
            </option>
            {Object.entries(ROLE_DATA).map(([cat, roles]) => (
              <optgroup key={cat} label={cat}>
                {roles.map((r) => (
                  <option key={r.name} value={`${cat}::${r.name}`}>
                    {r.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <p className="mt-2 text-[11px] text-brand-teal/70">
            Salary benchmarks auto-fill from our AU vs Philippines data. You can override any figure below.
          </p>
        </div>

        {/* ── Two-column assumption cards ───────────────────────────────── */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          {/* Australian Direct Hire */}
          <div className="overflow-hidden rounded-2xl border border-brand-navy/15">
            <div className="bg-brand-navy px-5 py-4">
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                Option A
              </div>
              <div className="text-base font-semibold text-white">Australian Direct Hire</div>
              <div className="mt-0.5 text-[12px] text-white/50">
                You hire locally and own all employer obligations
              </div>
            </div>
            <div className="bg-white px-5 pb-5 pt-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <NumField
                  label="Annual salary"
                  value={s.au_salary}
                  onChange={n('au_salary')}
                  unit="AUD/yr"
                  step={1000}
                  min={1}
                />
                <NumField
                  label="Superannuation"
                  value={s.au_super}
                  onChange={n('au_super')}
                  unit="%"
                  hint="(mandatory)"
                />
                <NumField
                  label="Workers compensation"
                  value={s.au_workersComp}
                  onChange={n('au_workersComp')}
                  unit="%"
                  hint="(varies by state)"
                />
                <NumField
                  label="Leave entitlements"
                  value={s.au_leaveAccrual}
                  onChange={n('au_leaveAccrual')}
                  unit="%"
                  hint="(annual, sick, LSL)"
                />
                <NumField
                  label="Equipment"
                  value={s.au_equipment}
                  onChange={n('au_equipment')}
                  unit="$/mo"
                />
                <NumField
                  label="Software & tools"
                  value={s.au_software}
                  onChange={n('au_software')}
                  unit="$/mo"
                />
                <div className="col-span-2">
                  <NumField
                    label="Payroll & HR admin"
                    value={s.au_payrollAdmin}
                    onChange={n('au_payrollAdmin')}
                    unit="$/mo"
                    hint="(processing, compliance time)"
                  />
                </div>
              </div>
              {/* AU Total */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-navy/5 px-4 py-3">
                <div className="text-sm font-semibold text-brand-navy/70">
                  Fully-loaded monthly cost
                </div>
                <div className="text-2xl font-bold tracking-tight text-brand-navy">
                  {fmtAUD(au.total)}
                </div>
              </div>
              {/* AU Breakdown */}
              <div className="mt-3 space-y-1 border-t border-slate-100 pt-3">
                {au.rows.map((r) => (
                  <div key={r.label} className="flex justify-between gap-2">
                    <span className="truncate text-[11px] text-brand-navy/40">{r.label}</span>
                    <span className="shrink-0 text-[11px] font-medium text-brand-navy/60">
                      {fmtAUD(r.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TrustedOps */}
          <div className="overflow-hidden rounded-2xl border border-brand-teal/25">
            <div className="bg-brand-teal px-5 py-4">
              <div className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                Option B
              </div>
              <div className="text-base font-semibold text-white">TrustedOps</div>
              <div className="mt-0.5 text-[12px] text-white/50">
                Offshore via Employer of Record — compliance handled for you
              </div>
            </div>
            <div className="bg-white px-5 pb-5 pt-4">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <NumField
                  label="Offshore salary"
                  value={s.to_salary}
                  onChange={n('to_salary')}
                  unit="AUD/yr"
                  step={1000}
                  min={1}
                />
                <div>
                  <label className="mb-1 block text-[10px] font-semibold tracking-wider uppercase text-brand-navy/40">
                    TrustedOps EoR fee
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      className={numCls}
                      value={s.to_eorQtrFee || ''}
                      onChange={n('to_eorQtrFee')}
                      min={0}
                      step={100}
                    />
                    <span className="w-9 shrink-0 text-xs text-brand-navy/40">/qtr</span>
                  </div>
                  <div className="mt-1 text-[10px] text-brand-teal/70">
                    {fmtAUD(s.to_eorQtrFee / 3)}/mo equiv.
                    &nbsp;·&nbsp;covers all PH compliance
                  </div>
                </div>

                {/* 13th Month Pay — read-only, auto-calculated */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold tracking-wider uppercase text-brand-navy/40">
                    13th Month Pay{' '}
                    <span className="normal-case font-normal text-brand-navy/30">(mandatory, fixed)</span>
                  </label>
                  <div className="flex items-center gap-1.5">
                    <div className="flex w-full items-center justify-between rounded-lg border border-gray-100 bg-slate-50 px-2.5 py-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-brand-navy/30">
                        auto
                      </span>
                      <span className="text-sm font-semibold text-brand-navy/50">
                        {fmtAUD(s.to_salary / 144)}
                      </span>
                    </div>
                    <span className="w-9 shrink-0 text-xs text-brand-navy/40">/mo</span>
                  </div>
                  <div className="mt-1 text-[10px] text-brand-navy/30">
                    = {fmtAUD(s.to_salary / 12)} paid annually (1 month&apos;s salary)
                  </div>
                </div>

                {/* Mandatory Entitlements — editable with asterisk */}
                <div>
                  <label className="mb-1 block text-[10px] font-semibold tracking-wider uppercase text-brand-navy/40">
                    Mandatory entitlements
                    <span className="ml-0.5 text-brand-teal">*</span>
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      className={numCls}
                      value={s.to_mandatoryEntitlements ?? ''}
                      onChange={n('to_mandatoryEntitlements')}
                      min={0}
                      step={0.5}
                    />
                    <span className="w-9 shrink-0 text-xs text-brand-navy/40">%</span>
                  </div>
                  <div className="mt-1 text-[10px] text-brand-navy/30">
                    of monthly salary · {fmtAUD((s.to_salary / 12) * (s.to_mandatoryEntitlements || 0) / 100)}/mo
                  </div>
                </div>

                <NumField
                  label="Equipment"
                  value={s.to_equipment}
                  onChange={n('to_equipment')}
                  unit="$/mo"
                />
                <NumField
                  label="Software & tools"
                  value={s.to_software}
                  onChange={n('to_software')}
                  unit="$/mo"
                />
              </div>

              {/* TrustedOps Total */}
              <div className="mt-4 flex items-center justify-between rounded-xl px-4 py-3" style={{ backgroundColor: 'rgb(17 150 204 / 0.07)' }}>
                <div className="text-sm font-semibold text-brand-teal">
                  Fully-loaded monthly cost
                </div>
                <div className="text-2xl font-bold tracking-tight text-brand-teal">
                  {fmtAUD(to.total)}
                </div>
              </div>

              {/* TrustedOps Breakdown */}
              <div className="mt-3 space-y-1 border-t border-slate-100 pt-3">
                {to.rows.map((r) => (
                  <div key={r.label} className="flex justify-between gap-2">
                    <span className="truncate text-[11px] text-brand-navy/40">{r.label}</span>
                    <span className="shrink-0 text-[11px] font-medium text-brand-navy/60">
                      {fmtAUD(r.value)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mandatory entitlements footnote */}
              <div className="mt-3 rounded-lg border border-brand-teal/15 bg-brand-teal/5 px-3 py-2.5">
                <p className="text-[11px] leading-relaxed text-brand-navy/50">
                  <span className="font-semibold text-brand-teal">*</span> Mandatory entitlements
                  typically include: SSS employer contribution, PhilHealth employer contribution,
                  Pag-IBIG employer contribution, and standard allowances (internet / WFH).
                  Rates vary; 10% is a conservative estimate.
                </p>
              </div>

              <p className="mt-2.5 text-[11px] text-brand-navy/30">
                No Australian superannuation, workers comp, or leave entitlements payable.
              </p>
            </div>
          </div>
        </div>

        {/* ── Results ──────────────────────────────────────────────────── */}
        <div className="mt-6 space-y-4">

          {/* Hero savings card */}
          <div className="rounded-2xl border border-brand-teal/20 bg-gradient-to-br from-brand-teal/8 to-brand-navy/5 px-6 py-6" style={{ background: 'linear-gradient(135deg, rgb(17 150 204 / 0.07) 0%, rgb(11 27 58 / 0.04) 100%)' }}>
            <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-brand-navy/40">
                  Your estimated savings with TrustedOps
                </div>
                <div className="mt-1 text-4xl font-bold tracking-tight text-brand-teal">
                  {fmtAUD(annualSaving > 0 ? annualSaving : 0)}
                  <span className="ml-2 text-lg font-semibold text-brand-navy/40">/ year</span>
                </div>
                <div className="mt-1 text-sm text-brand-navy/50">
                  {fmtAUD(monthlySaving > 0 ? monthlySaving : 0)}/mo savings&nbsp;&nbsp;·&nbsp;&nbsp;
                  TrustedOps costs <span className="font-semibold text-brand-navy/70">{pctOfAU}%</span> of an equivalent AU hire
                </div>
              </div>
              <div className="shrink-0 rounded-xl border border-brand-teal/20 bg-white px-5 py-3 text-center">
                <div className="text-[10px] font-bold tracking-widest uppercase text-brand-navy/40">
                  3-year projection
                </div>
                <div className="mt-0.5 text-2xl font-bold text-brand-navy">
                  {fmtAUD(annualSaving > 0 ? annualSaving * 3 : 0)}
                </div>
                <div className="text-[11px] text-brand-navy/40">total savings</div>
              </div>
            </div>
          </div>

          {/* Comparison bars */}
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <p className="mb-4 text-[10px] font-bold tracking-widest uppercase text-brand-navy/40">
              Monthly cost comparison
            </p>
            <div className="space-y-3">
              <CompBar
                label="AU Direct Hire"
                sublabel="fully-loaded"
                value={au.total}
                max={barMax}
                barClass="bg-brand-navy"
              />
              <CompBar
                label="TrustedOps"
                sublabel="fully-loaded"
                value={to.total}
                max={barMax}
                barClass="bg-brand-teal"
              />
            </div>
            {/* 12-month row */}
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
              <div className="rounded-lg bg-brand-navy/5 px-3 py-2.5 text-center">
                <div className="text-[10px] font-bold tracking-widest uppercase text-brand-navy/40">
                  AU Hire · 12 months
                </div>
                <div className="mt-0.5 text-lg font-bold text-brand-navy">{fmtAUD(au.total * 12)}</div>
              </div>
              <div className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: 'rgb(17 150 204 / 0.07)' }}>
                <div className="text-[10px] font-bold tracking-widest uppercase text-brand-teal/60">
                  TrustedOps · 12 months
                </div>
                <div className="mt-0.5 text-lg font-bold text-brand-teal">{fmtAUD(to.total * 12)}</div>
              </div>
            </div>
          </div>

          {/* Did You Know callout */}
          <div className="flex gap-3.5 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
            <div className="mt-0.5 shrink-0 text-lg">💡</div>
            <div>
              <div className="mb-1 text-[10px] font-bold tracking-widest uppercase text-amber-700">
                Did you know?
              </div>
              <p className="text-[13px] leading-relaxed text-amber-900">
                The <span className="font-semibold">Australian HR Institute</span> puts the average cost
                to hire at{' '}
                <span className="font-semibold">A$23,860 per candidate</span>, with an average
                time-to-hire of <span className="font-semibold">40 days</span>. These costs aren&apos;t
                included in the calculator above — but they&apos;re real, and with TrustedOps, they don&apos;t apply.
              </p>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-brand-navy/30">
            All figures in AUD. Salary benchmarks are indicative. Australian on-costs (super, workers comp,
            leave) may vary by state, industry, and award. Consult your accountant or HR advisor for precise figures.
          </p>
        </div>
      </div>
    </div>
  );
}
