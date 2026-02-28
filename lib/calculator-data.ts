// ── Role data (PH vs AU salary benchmarks) ───────────────────────────────────
// Edit salaries here to update the cost calculator dropdown.

export const ROLE_DATA: Record<string, Array<{ name: string; ph: number; au: number }>> = {
  'Finance & Accounting': [
    { name: 'Accountant', ph: 21000, au: 82000 },
    { name: 'Bookkeeping Support', ph: 17000, au: 73000 },
    { name: 'AP / AR Specialist', ph: 13000, au: 72000 },
    { name: 'Payroll Support', ph: 14000, au: 69000 },
    { name: 'Financial Analyst', ph: 21000, au: 95000 },
  ],
  'Construction & Design': [
    { name: 'Draftsman', ph: 16000, au: 75000 },
    { name: 'Estimator', ph: 18000, au: 110000 },
    { name: 'AutoCAD / CAD Designer', ph: 16000, au: 80000 },
    { name: 'Construction Surveyor', ph: 18000, au: 95000 },
    { name: 'Architect', ph: 23000, au: 110000 },
    { name: 'Engineer (Civil / Structural)', ph: 24000, au: 110000 },
  ],
  'Creative & Digital Marketing': [
    { name: 'Graphic Designer', ph: 15000, au: 75000 },
    { name: 'Video Editor', ph: 13000, au: 70000 },
    { name: 'Social Media Coordinator', ph: 12000, au: 65000 },
    { name: 'PPC / Paid Media Support', ph: 17000, au: 80000 },
    { name: 'Web Developer', ph: 19000, au: 95000 },
  ],
  'Admin & Operations': [
    { name: 'Executive Assistant (EA)', ph: 17000, au: 85000 },
    { name: 'Administrative Assistant / Office Admin', ph: 11000, au: 62000 },
    { name: 'Customer Support Representative', ph: 10000, au: 58000 },
    { name: 'Data Entry / CRM Administration', ph: 8000, au: 55000 },
    { name: 'Scheduling & Inbox Coordination', ph: 10000, au: 58000 },
    { name: 'Listings & Marketing Admin', ph: 10000, au: 60000 },
    { name: 'CRM / Database Management', ph: 12000, au: 70000 },
    { name: 'Leasing Support', ph: 10000, au: 60000 },
    { name: 'Market Research', ph: 13000, au: 75000 },
    { name: 'Document Prep (contracts / forms / inspections)', ph: 9000, au: 58000 },
  ],
  'Technology': [
    { name: 'QA Tester', ph: 18000, au: 85000 },
    { name: 'Front-End Web Developer', ph: 19000, au: 77000 },
    { name: 'Automation / Scripting Support', ph: 21000, au: 95000 },
    { name: 'IT Support / Helpdesk (Tier 1)', ph: 15000, au: 62000 },
    { name: 'Sysadmin / Network Support', ph: 19000, au: 90000 },
  ],
};

// ── Default assumption values ─────────────────────────────────────────────────
// Edit these to change the calculator's starting values.

export const INITIAL = {
  selectedRole: 'Finance & Accounting::Accountant',
  // Australian Direct Hire
  au_salary: 82000,
  au_super: 11.5,        // % mandatory superannuation
  au_workersComp: 1.5,   // % workers compensation insurance
  au_leaveAccrual: 5.0,  // % leave entitlement accrual (annual, sick, LSL)
  au_equipment: 200,     // AUD/mo
  au_software: 150,      // AUD/mo
  au_payrollAdmin: 100,  // AUD/mo (payroll processing, HR admin)
  // TrustedOps
  to_salary: 21000,
  to_eorQtrFee: 2500,           // AUD/qtr flat fee
  to_equipment: 150,            // AUD/mo
  to_software: 150,             // AUD/mo
  to_mandatoryEntitlements: 10, // % of monthly salary (SSS, PhilHealth, Pag-IBIG, allowances)
};
