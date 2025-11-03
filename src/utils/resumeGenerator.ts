export const downloadResume = () => {
  const resumeContent = `
═══════════════════════════════════════════════════════════════════════════
                        VOLODYMYR SYMCHYCH
                 Solutions Architect & Technical Project Manager
═══════════════════════════════════════════════════════════════════════════

KONTAKT
───────────────────────────────────────────────────────────────────────────
Email:     volodymyr.symchych@example.com
Telefon:   +420 123 456 789
LinkedIn:  linkedin.com/in/volodymyr-symchych
GitHub:    github.com/volodymyr-symchych
Lokace:    Brno, Česká republika

PROFIL
───────────────────────────────────────────────────────────────────────────
Solutions Architect a Technical Project Manager se 7+ lety zkušeností
v návrhu, implementaci a řízení komplexních ERP systémů na platformě FUSIO.
Specializuji se na pre-sales design, database architekturu a technické
vedení projektů. Úspěšně jsem dokončil 15+ implementací s 98% spokojeností
zákazníků.

KLÍČOVÉ KOMPETENCE
───────────────────────────────────────────────────────────────────────────
• ERP Systémy: Výroba, Sklad, Finance, CRM, Logistika
• Platform Expert: FUSIO (95% expertíza)
• Database Architecture: SQL Server, PostgreSQL (90%)
• Development: C#, .NET, SQL (70-85%)
• Project Management: Agile, Scrum, Technical Leadership (85-95%)
• Pre-sales: Requirements Analysis, Solution Design, Presentations

PRACOVNÍ ZKUŠENOSTI
───────────────────────────────────────────────────────────────────────────

ANTS - Advanced Network & Technology Solutions           2018 - současnost
Solutions Architect & Technical Project Manager                    Brno, CZ

• Návrh a implementace 15+ komplexních ERP systémů na platformě FUSIO
• Vedení pre-sales aktivit: analýza požadavků, návrh řešení, prezentace
• Architektura databází a optimalizace výkonu systémů
• Koordinace vývojových týmů a technické řízení projektů
• Dosažení 98% spokojenosti zákazníků a 40% zrychlení procesů

Klíčové projekty:
─────────────────
• ERP Výrobní systém (2024) - Kompletní výrobní ERP s pokročilou správou
  Technologie: FUSIO, SQL Server, C#

• CRM Logistika (2023-24) - CRM systém s GPS trackingem
  Technologie: FUSIO, Mobile integration, REST API

• Project Management System (2023) - Agilní PM systém
  Technologie: FUSIO, Time tracking, Reporting

• Warehouse Management WMS (2022-23) - Skladový systém s barcode
  Technologie: FUSIO, Barcode scanning, E-shop integration

• +11 dalších ERP implementací (2018-2022)

VZDĚLÁNÍ
───────────────────────────────────────────────────────────────────────────
Bc. - Informační technologie
Univerzita | Brno, Česká republika

TECHNICKÉ DOVEDNOSTI
───────────────────────────────────────────────────────────────────────────
Platformy:     FUSIO (expert), .NET Framework, .NET Core
Jazyky:        C#, SQL, T-SQL, PL/SQL, TypeScript
Databáze:      SQL Server, PostgreSQL, Database Design & Optimization
Tools:         Visual Studio, Git, Azure DevOps, JIRA
Metodologie:   Agile, Scrum, Waterfall, DevOps

PROJECT MANAGEMENT
───────────────────────────────────────────────────────────────────────────
• Technical Project Management (95%)
• Agile & Scrum metodologie (85%)
• Requirements Analysis & Documentation (90%)
• Team Coordination & Leadership (88%)
• Stakeholder Management
• Risk Management
• Resource Planning

SOFT SKILLS
───────────────────────────────────────────────────────────────────────────
• Prezentační dovednosti
• Komunikace s klienty a týmem
• Analytické myšlení
• Problem-solving
• Multitasking
• Leadership a mentoring

METODOLOGIE PRÁCE
───────────────────────────────────────────────────────────────────────────
1. Research (1-2 týdny)
   - Výjezd k zákazníkovi, interview, analýza procesů

2. Design (1-2 týdny)
   - Architektura řešení, database design, dokumentace

3. Prezentace (1-3 dny)
   - Live demo, feedback, schválení řešení

4. Realizace (4-12 týdnů)
   - Vývoj, testování, demo sessions s klientem

5. Nasazení (průběžně)
   - Školení, deployment, podpora

OSOBNÍ PROJEKTY
───────────────────────────────────────────────────────────────────────────
• FUSIO Dev Tools - Nástroje pro zrychlení vývoje (C#, .NET)
• ERP Analytics Dashboard - Vizualizace ERP dat (React, Charts)
• Database Migration Tool - Bezpečná migrace databází (C#, SQL)
• AI Code Assistant - Experimentální AI asistent (Python, OpenAI)
• Open Source Contributions - Příspěvky do .NET komunity

JAZYKY
───────────────────────────────────────────────────────────────────────────
Ukrajinština:  Rodilý mluvčí
Čeština:       Plynule
Angličtina:    Profesionální úroveň
Ruština:       Pokročilá

ÚSPĚCHY A METRIKY
───────────────────────────────────────────────────────────────────────────
• 15+ úspěšně implementovaných ERP projektů
• 98% spokojenost zákazníků
• 40% průměrné zrychlení business procesů
• 7+ let zkušeností v oboru
• 100% projektů dokončeno včas a v rámci rozpočtu

═══════════════════════════════════════════════════════════════════════════
                     Generováno z Portfolio webu
                         portfolio.volodymyr.cz
═══════════════════════════════════════════════════════════════════════════
`;

  const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Volodymyr_Symchych_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
