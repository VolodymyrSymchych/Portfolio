export const translations = {
  en: {
    // Hero
    hero: {
      title: 'Portfolio',
      subtitle: 'Bc. Volodymyr Symchych — Solutions Architect & Technical Project Manager',
    },
    // Main Card
    mainCard: {
      name: 'Bc. Symchych Volodymyr',
      title: 'ERP Solutions Architect & Technical Project Manager',
      cvButton: 'Resume',
      contactButton: 'Contact',
    },
    // Tabs
    tabs: {
      about: 'About',
      services: 'Services',
      skills: 'Skills',
      projects: 'Projects',
      process: 'How I Work',
      personal: 'Personal Projects',
      booking: 'Booking',
    },
    // About Tab
    about: {
      profileTitle: 'Profile',
      profileDescription: 'Solutions Architect and Technical Project Manager focused on designing, implementing, and managing complex ERP systems on the FUSIO platform. I combine technical expertise with practical project leadership.',
      company: 'ANTS spol. s.r.o',
      location: 'Brno, Czech Republic',
      platform: 'FUSIO',
      specializationTitle: 'Specialization',
      specializations: [
        {
          title: 'ERP Systems',
          description: 'Manufacturing, Warehouse, Finance, CRM',
        },
        {
          title: 'Database Architecture',
          description: 'SQL Server, PostgreSQL, Optimization',
        },
        {
          title: 'Development',
          description: 'C#, .NET, FUSIO implementation',
        },
        {
          title: 'Project Management',
          description: 'Agile, Technical Leadership',
        },
      ],
      achievementsTitle: 'Key Achievements',
      achievements: [
        {
          number: '15+',
          label: 'Implemented projects',
        },
        {
          number: '98%',
          label: 'Customer satisfaction',
        },
        {
          number: '40%',
          label: 'Process acceleration',
        },
        {
          number: '2+',
          label: 'Years of experience',
        },
      ],
    },
    // Services Tab
    services: {
      services: [
        {
          title: 'Pre-sales Design',
          features: [
            'Customer requirements analysis',
            'Solution architecture design',
            'Technical presentation and demo',
            'Effort estimation and timeline',
          ],
        },
        {
          title: 'Implementation & Development',
          features: [
            'Development on FUSIO platform',
            'Database design and optimization',
            'Custom modules and integrations',
            'Code review and best practices',
          ],
        },
        {
          title: 'Technical Project Management',
          features: [
            'Development team coordination',
            'Agile methodology',
            'Risk management',
            'Stakeholder communication',
          ],
        },
        {
          title: 'Consulting & Support',
          features: [
            'Technical consulting',
            'System performance optimization',
            'Training and documentation',
            'Long-term support',
          ],
        },
      ],
    },
    // Skills Tab
    skills: {
      technicalSkillsTitle: 'Technical Skills',
      pmSkillsTitle: 'Project Management',
      softSkillsTitle: 'Soft Skills',
      technicalSkills: [
        { name: 'FUSIO Platform', level: 95 },
        { name: 'Database Architecture', level: 90 },
        { name: 'SQL Server / PostgreSQL', level: 85 },
        { name: 'C# / .NET', level: 70 },
      ],
      pmSkills: [
        { name: 'Technical Project Management', level: 95 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Requirements Analysis', level: 90 },
        { name: 'Team Coordination', level: 88 },
      ],
      softSkills: [
        { name: 'Presentations', icon: '🎯' },
        { name: 'Communication', icon: '💬' },
        { name: 'Analytical thinking', icon: '🧠' },
        { name: 'Problem-solving', icon: '🔧' },
        { name: 'Multitasking', icon: '⚡' },
        { name: 'Leadership', icon: '👥' },
      ],
    },
    // Projects Tab
    projects: {
      heading: 'Implementation Timeline',
      subtitle: '15+ successfully completed ERP projects',
      scrollHint: '← Scroll for more projects →',
      viewDetail: 'View details',
      status: {
        active: 'Active',
        completed: 'Completed',
        various: 'Various',
      },
      list: [
        {
          title: 'ERP Manufacturing System',
          description: 'Complete manufacturing ERP system with advanced production management',
          tags: ['Manufacturing', 'Warehouse', 'Finance'],
        },
        {
          title: 'CRM Logistics',
          description: 'CRM system for logistics company with GPS tracking',
          tags: ['CRM', 'GPS', 'Mobile'],
        },
        {
          title: 'Project Management System',
          description: 'Project management system with agile methodology',
          tags: ['PM', 'Agile', 'Time tracking'],
        },
        {
          title: 'Warehouse Management (WMS)',
          description: 'Advanced warehouse system with barcode scanning',
          tags: ['Barcode', 'Inventory', 'E-shop'],
        },
        {
          title: '11+ Other Projects',
          description: 'Portfolio of various ERP implementations and customizations',
          tags: ['ERP', 'Integration', 'Custom'],
        },
      ],
    },
    // Process Tab
    process: {
      heading: '5-step Process',
      subtitle: 'From analysis to deployment - proven ERP implementation process',
      steps: [
        {
          title: 'Research',
          subtitle: 'Research & Analysis',
          duration: '1-2 weeks',
          activities: [
            'On-site customer visit',
            'Interview with key users',
            'Current process analysis',
            'Requirements identification',
          ],
        },
        {
          title: 'Design',
          subtitle: 'Design & Architecture',
          duration: '1-2 weeks',
          activities: [
            'Solution architecture design',
            'Database design',
            'Wireframes and mockups',
            'Technical documentation',
          ],
        },
        {
          title: 'Presentation',
          subtitle: 'Presentation & Demo',
          duration: '1-3 days',
          activities: [
            'Client design presentation',
            'Live prototype demo',
            'Feedback collection',
            'Solution approval',
          ],
        },
        {
          title: 'Implementation',
          subtitle: 'Development & Testing',
          duration: '4-12 weeks',
          activities: [
            'Module implementation',
            'Unit and integration tests',
            'Code review',
            'Demo sessions with client',
          ],
        },
        {
          title: 'Deployment',
          subtitle: 'Deployment & Support',
          duration: 'Ongoing',
          activities: [
            'User training',
            'Production deployment',
            'Performance monitoring',
            'Long-term support',
          ],
        },
      ],
    },
    // Personal Tab
    personal: {
      heading: 'Personal Projects & Open Source',
      subtitle: 'Side projects and community contributions',
      viewDetail: 'View details',
      techStack: 'Tech Stack:',
      status: {
        completed: 'Completed',
        inProgress: 'In Progress',
        learning: 'Learning',
        ongoing: 'Ongoing',
      },
      projects: [
        {
          title: 'Personal Portfolio',
          description: 'Modern portfolio website with interactive components',
          tech: 'React, TypeScript, TailwindCSS',
          features: ['Responsive design', 'Dark theme', 'Animations'],
        },
        {
          title: 'FUSIO Dev Tools',
          description: 'Toolkit to speed up development on FUSIO platform',
          tech: 'C#, .NET, FUSIO SDK',
          features: ['Code generators', 'Testing utilities', 'Performance tools'],
        },
        {
          title: 'ERP Analytics Dashboard',
          description: 'Dashboard for ERP systems data visualization',
          tech: 'React, Chart.js, REST API',
          features: ['Real-time data', 'Custom charts', 'Export reports'],
        },
        {
          title: 'AI Code Assistant',
          description: 'Experimental AI assistant for generating FUSIO code',
          tech: 'Python, OpenAI API',
          features: ['Code completion', 'Bug detection', 'Best practices'],
        },
        {
          title: 'Database Migration Tool',
          description: 'Tool for safe database migration between versions',
          tech: 'C#, SQL Server, PostgreSQL',
          features: ['Schema diff', 'Data migration', 'Rollback support'],
        },
        {
          title: 'Open Source Contributions',
          description: 'Contributions to open source projects and communities',
          tech: '.NET, Various technologies',
          features: ['Bug fixes', 'Documentation', 'Community support'],
        },
      ],
    },
    // Booking Tab
    booking: {
      heading: 'Book a Consultation',
      subtitle: 'Select meeting type and fill in contact details',
      submitted: {
        icon: '✓',
        title: 'Booking submitted!',
        message: 'We will contact you within 24 hours.',
      },
      services: [
        {
          title: 'Intro Consultation',
          duration: '30 min',
          price: 'Free',
          description: 'Initial meeting to understand your needs',
        },
        {
          title: 'Technical Consultation',
          duration: '60 min',
          price: '2000 CZK',
          description: 'Detailed technical consultation and solution proposal',
        },
        {
          title: 'Workshop',
          duration: '2-4 hrs',
          price: 'By agreement',
          description: 'Practical workshop for your team',
        },
        {
          title: 'Pre-sales Presentation',
          duration: '1-2 hrs',
          price: 'By agreement',
          description: 'Solution presentation for your project',
        },
      ],
      form: {
        title: 'Contact Form',
        nameLabel: 'Name *',
        emailLabel: 'Email *',
        phoneLabel: 'Phone',
        companyLabel: 'Company',
        noteLabel: 'Note',
        submitButton: 'Submit booking',
        selectServiceButton: 'Select meeting type',
      },
      meetingInfo: {
        title: 'Meeting Information',
        location: 'Online (Google Meet) or in person in Brno',
        hours: 'Weekdays 9:00 - 17:00',
        cancellation: 'Cancellation possible up to 24 hours before meeting',
      },
      alternativeContact: {
        title: 'Alternative Contact',
      },
    },
    // Contact Modal
    contact: {
      title: 'Contact Me',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButton: 'Send',
      closeButton: 'Close',
      successIcon: '✓',
      successMessage: 'Thank you for your message!',
    },
    // Footer
    footer: {
      projectsLabel: 'Projects',
      yearsLabel: 'Years of experience',
    },
  },
  cz: {
    // Hero
    hero: {
      title: 'Portfolio',
      subtitle: 'Bc. Volodymyr Symchych — Solutions Architect & Technical Project Manager',
    },
    // Main Card
    mainCard: {
      name: 'Bc. Symchych Volodymyr',
      title: 'ERP Solutions Architect & Technical Project Manager',
      cvButton: 'CV',
      contactButton: 'Kontakt',
    },
    // Tabs
    tabs: {
      about: 'O mně',
      services: 'Služby',
      skills: 'Dovednosti',
      projects: 'Projekty',
      process: 'Jak pracuji',
      personal: 'Osobní projekty',
      booking: 'Rezervace',
    },
    // About Tab
    about: {
      profileTitle: 'Profil',
      profileDescription: 'Solutions Architect a Technical Project Manager se zaměřením na návrh, implementaci a řízení komplexních ERP systémů na platformě FUSIO. Kombinuji technickou expertízu s praktickým vedením projektů.',
      company: 'ANTS spol. s.r.o',
      location: 'Brno, Česká republika',
      platform: 'FUSIO',
      specializationTitle: 'Specializace',
      specializations: [
        {
          title: 'ERP Systémy',
          description: 'Výroba, Sklad, Finance, CRM',
        },
        {
          title: 'Database Architecture',
          description: 'SQL Server, PostgreSQL, Optimalizace',
        },
        {
          title: 'Development',
          description: 'C#, .NET, FUSIO implementace',
        },
        {
          title: 'Project Management',
          description: 'Agile, Technical Leadership',
        },
      ],
      achievementsTitle: 'Klíčové úspěchy',
      achievements: [
        {
          number: '15+',
          label: 'Implementovaných projektů',
        },
        {
          number: '98%',
          label: 'Spokojenost zákazníků',
        },
        {
          number: '40%',
          label: 'Zrychlení procesů',
        },
        {
          number: '2+',
          label: 'Let zkušeností',
        },
      ],
    },
    // Services Tab
    services: {
      services: [
        {
          title: 'Pre-sales Design',
          features: [
            'Analýza požadavků zákazníka',
            'Návrh architektury řešení',
            'Technická prezentace a demo',
            'Odhad náročnosti a timeline',
          ],
        },
        {
          title: 'Implementace & Vývoj',
          features: [
            'Vývoj na platformě FUSIO',
            'Database design a optimalizace',
            'Custom moduly a integrace',
            'Code review a best practices',
          ],
        },
        {
          title: 'Technical Project Management',
          features: [
            'Koordinace vývojového týmu',
            'Agile metodologie',
            'Risk management',
            'Stakeholder komunikace',
          ],
        },
        {
          title: 'Consulting & Support',
          features: [
            'Technické konzultace',
            'Optimalizace výkonu systému',
            'Školení a dokumentace',
            'Long-term podpora',
          ],
        },
      ],
    },
    // Skills Tab
    skills: {
      technicalSkillsTitle: 'Technické dovednosti',
      pmSkillsTitle: 'Project Management',
      softSkillsTitle: 'Soft Skills',
      technicalSkills: [
        { name: 'FUSIO Platform', level: 95 },
        { name: 'Database Architecture', level: 90 },
        { name: 'SQL Server / PostgreSQL', level: 85 },
        { name: 'C# / .NET', level: 70 },
      ],
      pmSkills: [
        { name: 'Technical Project Management', level: 95 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Requirements Analysis', level: 90 },
        { name: 'Team Coordination', level: 88 },
      ],
      softSkills: [
        { name: 'Prezentace', icon: '🎯' },
        { name: 'Komunikace', icon: '💬' },
        { name: 'Analytické myšlení', icon: '🧠' },
        { name: 'Problem-solving', icon: '🔧' },
        { name: 'Multitasking', icon: '⚡' },
        { name: 'Leadership', icon: '👥' },
      ],
    },
    // Projects Tab
    projects: {
      heading: 'Timeline implementací',
      subtitle: '15+ úspěšně dokončených ERP projektů',
      scrollHint: '← Scrollujte pro více projektů →',
      viewDetail: 'Zobrazit detail',
      status: {
        active: 'Aktivní',
        completed: 'Hotovo',
        various: 'Různé',
      },
      list: [
        {
          title: 'ERP Výrobní systém',
          description: 'Kompletní výrobní ERP systém s pokročilou správou výroby',
          tags: ['Výroba', 'Sklad', 'Finance'],
        },
        {
          title: 'CRM Logistika',
          description: 'CRM systém pro logistickou společnost s GPS trackingem',
          tags: ['CRM', 'GPS', 'Mobile'],
        },
        {
          title: 'Project Management System',
          description: 'Systém pro řízení projektů s agilní metodologií',
          tags: ['PM', 'Agile', 'Time tracking'],
        },
        {
          title: 'Warehouse Management (WMS)',
          description: 'Pokročilý skladový systém s barcode skenováním',
          tags: ['Barcode', 'Inventura', 'E-shop'],
        },
        {
          title: 'Dalších 11+ projektů',
          description: 'Portfolio různých ERP implementací a customizací',
          tags: ['ERP', 'Integrace', 'Custom'],
        },
      ],
    },
    // Process Tab
    process: {
      heading: '5-krokový proces',
      subtitle: 'Od analýzy po nasazení - ověřený proces implementace ERP',
      steps: [
        {
          title: 'Výzkum',
          subtitle: 'Research & Analysis',
          duration: '1-2 týdny',
          activities: [
            'Výjezd k zákazníkovi',
            'Interview s klíčovými uživateli',
            'Analýza současných procesů',
            'Identifikace požadavků',
          ],
        },
        {
          title: 'Návrh',
          subtitle: 'Design & Architecture',
          duration: '1-2 týdny',
          activities: [
            'Návrh architektury řešení',
            'Návrh databáze',
            'Wireframes a mockupy',
            'Technická dokumentace',
          ],
        },
        {
          title: 'Prezentace',
          subtitle: 'Presentation & Demo',
          duration: '1-3 dny',
          activities: [
            'Prezentace návrhu klientovi',
            'Live demo prototypu',
            'Zpětná vazba',
            'Schválení řešení',
          ],
        },
        {
          title: 'Realizace',
          subtitle: 'Development & Testing',
          duration: '4-12 týdnů',
          activities: [
            'Implementace modulů',
            'Unit a integrační testy',
            'Code review',
            'Demo sessions s klientem',
          ],
        },
        {
          title: 'Nasazení',
          subtitle: 'Deployment & Support',
          duration: 'Průběžně',
          activities: [
            'Školení uživatelů',
            'Nasazení do produkce',
            'Monitoring výkonu',
            'Dlouhodobá podpora',
          ],
        },
      ],
    },
    // Personal Tab
    personal: {
      heading: 'Osobní projekty & Open Source',
      subtitle: 'Vedlejší projekty a příspěvky do komunity',
      viewDetail: 'Zobrazit detail',
      techStack: 'Tech Stack:',
      status: {
        completed: 'Completed',
        inProgress: 'In Progress',
        learning: 'Learning',
        ongoing: 'Ongoing',
      },
      projects: [
        {
          title: 'Personal Portfolio',
          description: 'Moderní portfolio web s interaktivními komponentami',
          tech: 'React, TypeScript, TailwindCSS',
          features: ['Responsive design', 'Dark theme', 'Animations'],
        },
        {
          title: 'FUSIO Dev Tools',
          description: 'Sada nástrojů pro zrychlení vývoje na platformě FUSIO',
          tech: 'C#, .NET, FUSIO SDK',
          features: ['Code generators', 'Testing utilities', 'Performance tools'],
        },
        {
          title: 'ERP Analytics Dashboard',
          description: 'Dashboard pro vizualizaci dat z ERP systémů',
          tech: 'React, Chart.js, REST API',
          features: ['Real-time data', 'Custom charts', 'Export reports'],
        },
        {
          title: 'AI Code Assistant',
          description: 'Experimentální AI asistent pro generování FUSIO kódu',
          tech: 'Python, OpenAI API',
          features: ['Code completion', 'Bug detection', 'Best practices'],
        },
        {
          title: 'Database Migration Tool',
          description: 'Nástroj pro bezpečnou migraci databází mezi verzemi',
          tech: 'C#, SQL Server, PostgreSQL',
          features: ['Schema diff', 'Data migration', 'Rollback support'],
        },
        {
          title: 'Open Source Contributions',
          description: 'Příspěvky do open source projektů a komunit',
          tech: '.NET, Various technologies',
          features: ['Bug fixes', 'Documentation', 'Community support'],
        },
      ],
    },
    // Booking Tab
    booking: {
      heading: 'Rezervace konzultace',
      subtitle: 'Vyberte typ schůzky a vyplňte kontaktní údaje',
      submitted: {
        icon: '✓',
        title: 'Rezervace odeslána!',
        message: 'Ozveme se vám do 24 hodin.',
      },
      services: [
        {
          title: 'Intro konzultace',
          duration: '30 min',
          price: 'Zdarma',
          description: 'Úvodní schůzka pro zjištění vašich potřeb',
        },
        {
          title: 'Technical konzultace',
          duration: '60 min',
          price: '2000 Kč',
          description: 'Detailní technická konzultace a návrh řešení',
        },
        {
          title: 'Workshop',
          duration: '2-4 hod',
          price: 'Dohodou',
          description: 'Praktický workshop pro váš tým',
        },
        {
          title: 'Pre-sales prezentace',
          duration: '1-2 hod',
          price: 'Dohodou',
          description: 'Prezentace řešení pro váš projekt',
        },
      ],
      form: {
        title: 'Kontaktní formulář',
        nameLabel: 'Jméno *',
        emailLabel: 'Email *',
        phoneLabel: 'Telefon',
        companyLabel: 'Společnost',
        noteLabel: 'Poznámka',
        submitButton: 'Odeslat rezervaci',
        selectServiceButton: 'Vyberte typ schůzky',
      },
      meetingInfo: {
        title: 'Informace o schůzce',
        location: 'Online (Google Meet) nebo osobně v Brně',
        hours: 'Pracovní dny 9:00 - 17:00',
        cancellation: 'Možnost zrušení do 24 hodin před schůzkou',
      },
      alternativeContact: {
        title: 'Alternativní kontakt',
      },
    },
    // Contact Modal
    contact: {
      title: 'Kontaktujte mě',
      nameLabel: 'Jméno',
      emailLabel: 'Email',
      messageLabel: 'Zpráva',
      sendButton: 'Odeslat',
      closeButton: 'Zavřít',
      successIcon: '✓',
      successMessage: 'Děkuji za zprávu!',
    },
    // Footer
    footer: {
      projectsLabel: 'Projektů',
      yearsLabel: 'Let zkušeností',
    },
  },
};

export type Language = 'en' | 'cz';
export type TranslationKeys = typeof translations.en;
