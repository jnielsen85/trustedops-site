export type Role = {
  name: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  intro: string[];
  roles: Role[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: 'accounting-finance',
    name: 'Accounting & Finance',
    tagline: 'Qualified CPAs and finance professionals, trained to international standards',
    summary:
      'Filipino accounting professionals combine strong formal training with fluent English. Over 175,000 licensed CPAs and graduates trained in GAAP, IFRS and international standards — ready to integrate seamlessly into your team.',
    intro: [
      'Filipino accounting professionals bring a powerful combination of strong formal training and fluent English communication. The Philippines produces large numbers of qualified accountants – over 175,000 licensed CPAs and accounting graduates – who are trained in U.S. GAAP, IFRS and international standards. Business and tertiary education are taught in English, and the Philippines ranks highly on global English proficiency.',
      'This means Filipino accountants can prepare financial reports, manage bookkeeping and payroll, handle AR/AP tasks and perform financial analysis to Western standards without language gaps. Outsourced Filipino finance staff are noted for their meticulous attention to detail and ability to integrate seamlessly as part of a client\'s team.',
    ],
    roles: [
      {
        name: 'Accountants',
        description:
          'Filipino accountants typically hold university degrees and professional certifications (CPAs, BSA) and are adept at financial reporting, budgeting, tax compliance and audit support. They are well-versed in popular accounting software and financial modelling tools.',
      },
      {
        name: 'Bookkeeping Support',
        description:
          'Skilled bookkeepers in the Philippines can maintain ledgers, manage journals and prepare monthly accounts with accuracy. They are trained in accounting systems (e.g. Xero, QuickBooks, MYOB) and procedures such as bank reconciliation, expense tracking and fixed-asset management.',
      },
      {
        name: 'AP / AR Specialist',
        description:
          'Filipino AP/AR clerks efficiently process invoices, billing and collections. They work with global formats (e.g. ERP modules, Excel) and can manage creditor payments and customer invoicing reliably, thanks to strong process discipline and English fluency.',
      },
      {
        name: 'Payroll Support',
        description:
          'Payroll specialists are familiar with payslip preparation, tax withholding and social security contributions. Many have experience with international payroll software and ensure payroll runs on time. They can also assist with expense claims and compliance reporting.',
      },
      {
        name: 'Financial Analyst',
        description:
          'Filipino financial analysts can analyse budgets, cash flows and financial models. They are often proficient in Excel, Power BI or similar tools, enabling tasks like forecasting, KPI tracking and variance analysis. Their Western-style education means they can translate business data into reports and recommendations for decision-makers.',
      },
    ],
  },
  {
    slug: 'construction-services',
    name: 'Construction Services',
    tagline: 'Technical drafters, estimators and engineers for your design and build projects',
    summary:
      'Thousands of Filipino civil, mechanical and electrical engineers and architects graduate each year, trained in English and aligned with international standards. From CAD drafting to structural calculations, they integrate smoothly into global teams.',
    intro: [
      'The Philippines offers a deep pool of technically trained construction and design professionals. Every year thousands of Filipinos graduate in civil, mechanical and electrical engineering and architecture programs, where instruction is in English and aligned with international standards. As a result, Filipino architects, engineers and draftspeople excel in structural design, Revit/BIM coordination and CAD drafting. They are familiar with global building codes and modern workflows, making them capable partners for project design and documentation. Many are certified in leading software (AutoCAD, Revit, Tekla, etc.) and are comfortable collaborating via online platforms.',
      'Remote Philippine teams in construction can handle tasks such as blueprint drafting, quantity surveying, cost estimation and site planning with professionalism. Outsourced Filipino engineers and architects bring strong English communication and Western cultural adaptability, so they integrate smoothly with international clients. They also offer high retention and consistency: overseas firms report that Philippines-based engineering staff often become long-term, dedicated team members.',
    ],
    roles: [
      {
        name: 'Draftsman',
        description:
          'Filipino draftsmen are well-trained in CAD (AutoCAD, SolidWorks, Revit) and 3D modelling. They can produce detailed technical drawings for civil, structural or mechanical projects. With a strong educational background in design, they ensure accuracy and adhere to international drafting standards.',
      },
      {
        name: 'Estimator',
        description:
          'Philippine construction estimators apply analytical rigour to cost forecasting. They analyse blueprints, calculate material quantities, and solicit supplier quotes to produce precise project budgets. They can specialise by discipline (electrical, civil, HVAC, etc.) and often provide value-engineering suggestions to optimise costs without sacrificing quality.',
      },
      {
        name: 'AutoCAD / CAD Designer',
        description:
          'Many Filipino CAD operators focus exclusively on complex drafting and detailing. They keep pace with high-volume projects and can update plans rapidly. Their English fluency means design revisions and annotations match client requirements exactly.',
      },
      {
        name: 'Construction Surveyor',
        description:
          'Filipino surveyors use modern surveying software and GPS tools to gather site measurements. They can prepare land surveys, topographic maps and track project progress. Trained in international standards, they ensure data is communicated clearly and accurately for global teams.',
      },
      {
        name: 'Architect',
        description:
          'Philippines-trained architects offer skills in design, space planning and BIM coordination. They are fluent in English and proficient in design software (SketchUp, Revit) and can support everything from schematic design to preparing plan sets. Their Western-style education and hospitality culture often lead to a friendly, client-focused approach.',
      },
      {
        name: 'Engineer (Civil / Structural)',
        description:
          'Filipino civil, structural and MEP engineers are experienced with international projects. They perform structural calculations, develop design plans and review technical details. Many hold engineering licenses and certifications. They work with global tools (SAP2000, STAAD, ETABS, etc.) and maintain high accuracy, frequently functioning as reliable extensions of overseas teams.',
      },
    ],
  },
  {
    slug: 'creative-marketing',
    name: 'Creative & Marketing',
    tagline: 'Designers, editors and digital marketers with global-ready skills',
    summary:
      'From brand identity to paid media, Filipino creatives and marketers deliver polished, on-trend work. Degree-educated, fluent in English, and experienced with international clients — they slot directly into your marketing team.',
    intro: [
      'The Philippines is home to a vibrant creative workforce with strong English skills and digital expertise. Filipino graphic designers and video editors receive rigorous training in their crafts, often with university degrees or certifications in design, multimedia or digital arts. They are well-versed in industry-standard tools (Adobe Photoshop/Illustrator/InDesign, Premiere Pro, After Effects, Figma, Sketch etc.) and understand design principles, branding and user experience.',
      'Digital marketing specialists in the Philippines are similarly skilled and culturally attuned. Social media coordinators, PPC/paid-media experts and web developers often have hands-on experience with global platforms (Facebook Ads, Google Ads, LinkedIn, etc.), and many have worked directly with Western clients. English proficiency and familiarity with Western pop culture allow them to craft on-trend content and campaigns that resonate abroad.',
    ],
    roles: [
      {
        name: 'Graphic Designer',
        description:
          'Filipino graphic designers offer creative branding, illustration and visual layout services. They combine artistry with technical precision, creating logos, brochures, digital ads, infographics and more. They follow brand guidelines closely and communicate in clear English, ensuring designs match client vision.',
      },
      {
        name: 'Video Editor',
        description:
          'Filipino video editors are adept at transforming footage into engaging stories. Whether for social media clips, marketing videos or longer corporate productions, they handle cutting, transitions, sound editing and basic visual effects. Many editors are familiar with modern editing suites (Premiere, Final Cut, DaVinci Resolve) and coordinate smoothly with client feedback loops.',
      },
      {
        name: 'Social Media Coordinator',
        description:
          'Social media specialists from the Philippines are creative, adaptable and customer-focused. They can manage content calendars, engage followers, and run community outreach across platforms (Facebook, Instagram, LinkedIn, TikTok, etc.). They generate high-quality, audience-tailored content and leverage strong English skills to write posts, handle enquiries, and moderate communities effectively.',
      },
      {
        name: 'PPC / Paid Media Support',
        description:
          'Philippine PPC experts are highly trained in paid advertising. Many are Google Ads certified and skilled in platforms like Microsoft Ads and Meta Ads. They are familiar with Western market practices and understand international audiences and ROI metrics. These specialists structure campaigns, optimise bidding and ad copy, and report on performance.',
      },
      {
        name: 'Web Development',
        description:
          'Filipino web developers cover front-end, back-end and full-stack roles. They are proficient in languages like JavaScript (React, Angular, Vue), PHP, Python, Java, .NET and others, and integrate well with databases like MySQL, Oracle or SQL Server. They build and maintain websites, web applications and e-commerce platforms as part of your extended team.',
      },
    ],
  },
  {
    slug: 'admin-back-office',
    name: 'Admin & Back Office',
    tagline: 'Reliable, English-fluent professionals to keep your operations running',
    summary:
      'Filipino admin professionals combine university-level education with deep familiarity with Western business practices. Tech-savvy, detail-oriented and service-focused — they handle the work that keeps your business moving.',
    intro: [
      'Filipino administrative professionals are known for their education level, English fluency and strong work ethic. The Philippines has one of Asia\'s highest tertiary-education rates, and many university courses use English as the medium of instruction. As a result, executive assistants and office administrators from the Philippines write and speak English professionally. They are also highly tech-savvy: Filipino virtual assistants quickly master tools like CRM systems, project management platforms and office suites.',
      'On top of technical ability, they bring cultural alignment with Western norms — Filipinos are accustomed to Western business practices, show respect for deadlines and hierarchy, and have a warm, service-oriented approach ingrained by hospitality values. Employers consistently highlight Filipino administrative staff for their reliability, conscientiousness and positive attitude.',
    ],
    roles: [
      {
        name: 'Executive Assistant (EA)',
        description:
          'Philippine executive assistants are adept at managing schedules, coordinating travel and handling confidential tasks. Their strong English and organisational skills enable them to prepare presentations, plan meetings and liaise with stakeholders independently. They serve as trusted partners who adapt to changing needs and proactively solve problems.',
      },
      {
        name: 'Administrative Assistant / Office Admin',
        description:
          'These professionals handle day-to-day office operations. Filipino admins manage phones and email, file management, document preparation and general clerical duties with care. They are proficient in Microsoft Office and Google Workspace. Filipino admins also excel at customer-facing tasks, offering friendly and efficient support over phone or email.',
      },
      {
        name: 'Customer Support Representative',
        description:
          'Drawing on the Philippines\' robust call-centre heritage, Filipino customer service agents are experienced in multi-channel support (phone, email, chat). Thanks to the local culture\'s emphasis on hospitality, these agents tend to be patient and courteous, quickly resolving client inquiries. Clear English and cultural empathy mean they communicate effectively with global customers.',
      },
      {
        name: 'Data Entry / CRM Administration',
        description:
          'Filipino data-entry clerks and CRM admins are detail-oriented and used to high-volume work. They can accurately input data, update customer or property databases, and maintain clean digital records. Whether you need contact information updated or sales leads followed up, your data remains reliable and current.',
      },
      {
        name: 'Scheduling & Inbox Coordination',
        description:
          'Virtual assistants in the Philippines often specialise in calendar and email management. They coordinate meetings across time zones, filter correspondence and prioritise tasks so executives can focus on strategy. Their strong time-management skills mean your schedule and inbox are handled with professionalism.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate Support',
    tagline: 'Property, leasing and compliance specialists who understand your workflow',
    summary:
      'Filipino real estate teams are college-educated, English-fluent and trained for property management tasks. From listing management to lease documentation, they handle processes end-to-end with accuracy and speed.',
    intro: [
      'Philippine outsourcing teams have developed extensive expertise in real estate operations. These professionals are typically college-educated, English-fluent and trained specifically for property management tasks. Many Filipino leasing and property assistants can handle leasing processes end-to-end — listing properties on multiple platforms, responding to inquiries, scheduling viewings and conducting background checks on applications. Because responses are often measured in minutes rather than days, this level of service leads to faster tenant conversion and higher satisfaction.',
      'These teams are also skilled in maintaining property data and documentation. Filipino staff can craft engaging property descriptions, optimise listings for search, and keep availability calendars up to date. They excel at database and CRM management, and meticulously prepare lease agreements, inspection forms and compliance documents — reducing errors and freeing up local agents to focus on client relationships.',
    ],
    roles: [
      {
        name: 'Listings & Marketing Admin',
        description:
          'Filipino specialists update online property listings, write ad copy and manage digital marketing collateral. They use English fluently to highlight key features of properties and can coordinate multi-channel promotions (websites, portals, social media). Their consistency across platforms strengthens your professional presence and helps attract potential buyers or tenants.',
      },
      {
        name: 'CRM / Database Management',
        description:
          'These teams keep client and lead databases organised. They enter and verify contact details, segment potential clients, and generate reports. They ensure information like contact histories and property preferences is easily accessible to sales or leasing teams.',
      },
      {
        name: 'Leasing Support',
        description:
          'Filipino leasing coordinators handle tenant applications from start to finish. They manage detailed steps like credit checks, background verifications and reference calls efficiently. With familiarity in compliance requirements, they methodically process screening packages so that the approval workflow moves forward without delays.',
      },
      {
        name: 'Market Research',
        description:
          'Filipino analysts can support market analysis and research tasks. They gather data on local property trends, pricing, and competitor offerings, often using advanced tools. Many contribute to in-depth investment research and strategic planning — roles once thought too specialised to offshore. Their strong English skills allow them to present findings and insights clearly.',
      },
      {
        name: 'Document Prep',
        description:
          'Remote staff in the Philippines prepare and manage real estate paperwork with precision. They can draft and customise lease contracts, manage digital signature workflows, and organise inspection reports. Their follow-up ensures that tenants sign agreements on time and that all regulatory forms are completed accurately, reducing compliance risk.',
      },
    ],
  },
  {
    slug: 'it-tech',
    name: 'IT & Tech',
    tagline: 'Developers, QA testers and sysadmins with strong technical foundations',
    summary:
      "The Philippine IT talent pool is large, well-educated and English-native. Filipino IT professionals don't just speak English — they think, troubleshoot and communicate in it. From front-end development to sysadmin, they integrate as genuine team members.",
    intro: [
      "The Philippine IT talent pool is large, well-educated and native in English, making it a strong choice for tech roles. Numerous Filipinos graduate yearly with computer science or information technology degrees from universities where English is the language of instruction. Filipino IT professionals don't just speak English — they think, troubleshoot, document, and communicate in English as naturally as their native language. This fluency ensures clear client support, precise documentation and effective problem-solving for global projects.",
      "Remote IT teams in the Philippines cover a wide range of specialties — front-end, back-end and full-stack development, automation and scripting, Tier 1 helpdesk, server and network administration, and quality assurance. QA engineers typically have both testing and development experience: they methodically find and report bugs, develop test plans (manual and automated), and go above and beyond to ensure your software is deployable and valuable.",
    ],
    roles: [
      {
        name: 'QA Tester',
        description:
          'Filipino QA testers and engineers have strong analytical skills and technical know-how. They hold experience in functional, integration and automation testing, often with backgrounds in software or database development. They design test cases, run regressions and work closely with developers to fix issues. Philippine QA specialists are praised for their attention to detail and for catching defects early in the development cycle.',
      },
      {
        name: 'Front-End Web Developer',
        description:
          'Front-end developers from the Philippines create user interfaces and web experiences. They commonly use HTML/CSS/JavaScript and frameworks like React, Angular or Vue. Many have solid UI/UX sensibilities and can convert design mockups into responsive sites. They communicate in English and collaborate via tools like Git, JIRA or Asana, making them easy to integrate into global dev teams.',
      },
      {
        name: 'Automation / Scripting Support',
        description:
          'Filipino IT specialists can build and maintain automation tools and scripts. This includes setting up CI/CD pipelines, writing deployment scripts, or automating routine IT tasks. Their strong programming fundamentals mean they often tackle tasks with languages such as Python, Ruby or PowerShell. They help reduce manual effort and speed up workflows for operations and development teams.',
      },
      {
        name: 'IT Support / Helpdesk (Tier 1)',
        description:
          'Helpdesk agents in the Philippines handle first-level technical support. They are trained to diagnose common hardware/software/network issues via phone, chat or email. Thanks to their high English proficiency and customer-service orientation, they provide clear instructions and friendly assistance. Many have certifications (e.g. CompTIA A+) and use ticketing systems (Zendesk, ServiceNow) to track and resolve incidents efficiently.',
      },
      {
        name: 'Sysadmin / Network Support',
        description:
          'Filipino system administrators are well-versed in server and network administration. They manage Linux/Windows servers, configure routers and switches, and ensure backups and security protocols are in place. Many hold certifications (Cisco, Microsoft, AWS) or experience in cloud platforms. These engineers integrate into global IT teams, often working off-hours to provide 24/7 coverage thanks to time-zone overlap with Western markets.',
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
