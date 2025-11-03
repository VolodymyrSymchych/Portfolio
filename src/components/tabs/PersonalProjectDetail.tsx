import { ArrowLeft, Calendar, Tag, CheckCircle2, Code2, Github, ExternalLink } from 'lucide-react';

interface PersonalProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const projectDetails: Record<string, any> = {
  'portfolio': {
    title: 'Personal Portfolio',
    tagline: 'Moderní portfolio web s interaktivními komponentami',
    description: 'Osobní portfolio website vytvořený s důrazem na moderní design, plynulé animace a skvělou user experience. Web prezentuje moje dovednosti, projekty a služby profesionálním a přístupným způsobem.',

    motivation: 'Chtěl jsem vytvořit osobní web, který nejen prezentuje moji práci, ale také demonstruje moje frontend skills. Cílem bylo vytvořit něco jedinečného, co se odlišuje od běžných portfolio šablon.',

    implementation: 'Web je postavený na React s TypeScript pro type safety a lepší developer experience. Použil jsem TailwindCSS pro rapid styling a konzistentní design system. Všechny animace jsou CSS-based pro optimální performance. Design je fully responsive a optimalizovaný pro všechny device sizes.',

    learnings: [
      'Pokročilé CSS animace a transitions',
      'Component architecture v Reactu',
      'TypeScript best practices',
      'TailwindCSS utility-first approach',
      'Performance optimization',
      'Responsive design patterns'
    ],

    technologies: [
      'React 18',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'Lucide Icons',
      'CSS Animations',
      'Responsive Design'
    ],

    features: [
      { name: 'Responsive Design', desc: 'Plně responzivní layout pro všechny obrazovky' },
      { name: 'Dark Theme', desc: 'Moderní dark mode s gradient efekty' },
      { name: 'Smooth Animations', desc: 'Plynulé animace a transitions' },
      { name: 'Interactive Components', desc: 'Interaktivní karty a modaly' },
      { name: 'Tab Navigation', desc: 'Přehledná tab-based navigace' },
      { name: 'Contact Form', desc: 'Funkční kontaktní formulář' }
    ],

    status: 'Completed',
    statusColor: 'green',
    year: '2024',
    duration: '3 týdny',
    github: null,
    demo: null
  },

  'fusio-tools': {
    title: 'FUSIO Dev Tools',
    tagline: 'Sada nástrojů pro rychlejší vývoj na FUSIO platformě',
    description: 'Collection of development tools a utilities, které zrychlují a zjednodušují vývoj aplikací na platformě FUSIO. Zahrnuje code generators, testing utilities, debugging tools a performance analyzers.',

    motivation: 'Při práci na FUSIO projektech jsem neustále narážel na opakující se úkoly a boilerplate code. Rozhodl jsem se vytvořit sadu nástrojů, které tyto procesy automatizují a šetří čas celému týmu.',

    implementation: 'Toolset je napsaný v C# jako sada command-line utilit a Visual Studio extensions. Využívám FUSIO SDK pro práci s metadaty a generování kódu. Tools jsou navrženy jako pluggable a extensible, aby je mohli ostatní rozšiřovat.',

    learnings: [
      'Roslyn API pro code generation',
      'Visual Studio extension development',
      'CLI tool design patterns',
      'Template engines',
      'Metaprogramming v C#',
      'FUSIO Platform internals'
    ],

    technologies: [
      'C# 10',
      '.NET 6',
      'FUSIO SDK',
      'Roslyn API',
      'Visual Studio SDK',
      'Command Line Parser',
      'T4 Templates',
      'MSBuild'
    ],

    features: [
      { name: 'Code Generators', desc: 'Generování boilerplate code pro entity, services, API endpoints' },
      { name: 'Testing Utilities', desc: 'Helpers pro unit a integration testy' },
      { name: 'Performance Profiler', desc: 'Analýza performance FUSIO aplikací' },
      { name: 'Migration Tools', desc: 'Automatizace databázových migrací' },
      { name: 'VS Extension', desc: 'Integrace do Visual Studio IDE' },
      { name: 'Documentation Generator', desc: 'Auto-generování dokumentace z kódu' }
    ],

    status: 'In Progress',
    statusColor: 'orange',
    year: '2024',
    duration: 'Ongoing (6+ měsíců)',
    github: null,
    demo: null
  },

  'analytics-dashboard': {
    title: 'ERP Analytics Dashboard',
    tagline: 'Real-time vizualizace dat z ERP systémů',
    description: 'Interaktivní dashboard pro vizualizaci a analýzu dat z různých ERP systémů. Poskytuje real-time insights do business metrik, KPIs a trends s podporou custom reportů a exportů.',

    motivation: 'Mnoho ERP systémů má omezené reporting capabilities nebo zastaralé UI. Chtěl jsem vytvořit moderní dashboard, který data prezentuje intuitivním a actionable způsobem.',

    implementation: 'Frontend je postavený v Reactu s Chart.js pro vizualizace. Backend používá REST API pro sběr dat z různých zdrojů. Implementoval jsem real-time updates přes WebSockets a caching layer pro performance. Dashboard je plně customizable s podporou pro různé typy chartů.',

    learnings: [
      'Data visualization best practices',
      'Chart.js a D3.js libraries',
      'Real-time data streaming',
      'REST API design',
      'Caching strategies',
      'Responsive chart design'
    ],

    technologies: [
      'React',
      'TypeScript',
      'Chart.js',
      'REST API',
      'WebSocket',
      'Redis Cache',
      'Node.js',
      'Express'
    ],

    features: [
      { name: 'Real-time Data', desc: 'Live updates dat bez nutnosti refresh' },
      { name: 'Custom Charts', desc: 'Různé typy chartů - line, bar, pie, scatter' },
      { name: 'Export Reports', desc: 'Export do PDF, Excel, CSV formátů' },
      { name: 'Filter & Drill-down', desc: 'Pokročilé filtrování a drill-down analýzy' },
      { name: 'Custom Dashboards', desc: 'Uživatelé si mohou vytvořit vlastní dashboardy' },
      { name: 'Mobile Responsive', desc: 'Optimalizováno pro mobilní zařízení' }
    ],

    status: 'Completed',
    statusColor: 'green',
    year: '2023',
    duration: '4 měsíce',
    github: null,
    demo: null
  },

  'ai-assistant': {
    title: 'AI Code Assistant',
    tagline: 'Experimentální AI asistent pro FUSIO development',
    description: 'Proof-of-concept AI asistent, který pomáhá s generováním FUSIO kódu, detekuje potenciální bugy a navrhuje best practices. Využívá GPT-4 pro understanding kontextu a generování relevantního kódu.',

    motivation: 'Zajímá mě AI/ML a chtěl jsem experimentovat s využitím LLMs pro developer productivity. FUSIO má specifickou syntax a patterns, takže generic AI assistants nejsou optimální.',

    implementation: 'Asistent je napsaný v Pythonu s integrací OpenAI API. Trénoval jsem ho na našich internal FUSIO code patterns a best practices. Implementoval jsem context awareness - asistent rozumí struktuře FUSIO projektů. Momentálně je to CLI tool, plánuji VS Code extension.',

    learnings: [
      'OpenAI API a prompt engineering',
      'Fine-tuning LLMs',
      'Code parsing a AST manipulation',
      'Context window management',
      'Python development',
      'AI model limitations a edge cases'
    ],

    technologies: [
      'Python 3.11',
      'OpenAI GPT-4 API',
      'LangChain',
      'AST Parser',
      'Click (CLI)',
      'Vector DB (Pinecone)',
      'FUSIO SDK',
      'Pytest'
    ],

    features: [
      { name: 'Code Completion', desc: 'Intelligent code completion pro FUSIO syntax' },
      { name: 'Bug Detection', desc: 'Detekce common mistakes a anti-patterns' },
      { name: 'Best Practices', desc: 'Návrhy na zlepšení kódu podle best practices' },
      { name: 'Code Explanation', desc: 'Vysvětlení complex FUSIO kódu' },
      { name: 'Refactoring Suggestions', desc: 'Návrhy na refactoring' },
      { name: 'Documentation', desc: 'Auto-generování code comments a docs' }
    ],

    status: 'Learning',
    statusColor: 'blue',
    year: '2024',
    duration: 'Ongoing (3 měsíce)',
    github: null,
    demo: null
  },

  'db-migration': {
    title: 'Database Migration Tool',
    tagline: 'Bezpečná migrace databází mezi verzemi',
    description: 'Nástroj pro automatizovanou migraci databází mezi různými verzemi ERP systémů. Podporuje schema diff, data migration, validation a rollback capabilities. Důraz na bezpečnost a data integrity.',

    motivation: 'Migrace databází při updates ERP systémů je risky a time-consuming. Chtěl jsem vytvořit tool, který tento process automatizuje a minimalizuje riziko data loss.',

    implementation: 'Tool je napsaný v C# s podporou pro SQL Server a PostgreSQL. Používám schema comparison pro detekci změn, generování migration scriptů s rollback možností, data validation před a po migraci, a dry-run mode pro testování. Všechny operace jsou logovány pro audit trail.',

    learnings: [
      'Database schema comparison algorithms',
      'SQL Server a PostgreSQL internals',
      'Transaction management',
      'Data validation techniques',
      'Error handling a recovery',
      'Migration script generation'
    ],

    technologies: [
      'C# 10',
      '.NET 6',
      'SQL Server',
      'PostgreSQL',
      'Entity Framework',
      'Dapper',
      'NLog',
      'xUnit'
    ],

    features: [
      { name: 'Schema Diff', desc: 'Detekce rozdílů mezi databázovými schématy' },
      { name: 'Data Migration', desc: 'Bezpečná migrace dat s validací' },
      { name: 'Rollback Support', desc: 'Možnost rollback při problémech' },
      { name: 'Dry Run Mode', desc: 'Test migrace bez skutečných změn' },
      { name: 'Validation', desc: 'Pre a post-migration data validation' },
      { name: 'Audit Trail', desc: 'Detailní logging všech operací' }
    ],

    status: 'Completed',
    statusColor: 'green',
    year: '2023',
    duration: '5 měsíců',
    github: null,
    demo: null
  },

  'open-source': {
    title: 'Open Source Contributions',
    tagline: 'Příspěvky do open source projektů',
    description: 'Aktivní účast v open source komunitě. Příspěvky zahrnují bug fixes, nové features, dokumentaci a pomoc ostatním developerům. Zaměřuji se primárně na .NET ekosystém a developer tools.',

    motivation: 'Open source mi hodně pomohl v kariéře a chci vrátit komunitě zpátky. Navíc je to skvělý způsob jak se učit nové věci a pracovat s top developery.',

    implementation: 'Pravidelně contributuji do různých projektů, které používám. Začíná to obvykle tím, že narazím na bug nebo chybějící feature, který potřebuji. Přispívám také dokumentací a code review. Snažím se být aktivní v discussions a pomáhat novým contributors.',

    learnings: [
      'Collaboration v distributed týmech',
      'Code review best practices',
      'Git workflow a pull requests',
      'Writing good documentation',
      'Community management',
      'Different coding styles a standards'
    ],

    technologies: [
      '.NET / C#',
      'Git / GitHub',
      'Various OSS projects',
      'Markdown',
      'CI/CD pipelines',
      'Issue tracking',
      'Code review tools'
    ],

    features: [
      { name: 'Bug Fixes', desc: 'Opravy bugů v různých projektech' },
      { name: 'Documentation', desc: 'Vylepšování dokumentace a examples' },
      { name: 'Community Support', desc: 'Pomoc ostatním v discussions a issues' },
      { name: 'Code Reviews', desc: 'Review pull requestů od jiných contributors' },
      { name: 'Feature Development', desc: 'Implementace nových features' },
      { name: 'Testing', desc: 'Psaní testů a zlepšování coverage' }
    ],

    status: 'Ongoing',
    statusColor: 'purple',
    year: '2020-Present',
    duration: 'Průběžně',
    github: 'https://github.com/yourusername',
    demo: null
  }
};

const PersonalProjectDetail = ({ projectId, onBack }: PersonalProjectDetailProps) => {
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600">Project not found</p>
        <button onClick={onBack} className="mt-4 text-sage-600 hover:text-sage-700">
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Zpět na osobní projekty
      </button>

      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">{project.title}</h2>
            <p className="text-xl text-neutral-600">{project.tagline}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
            project.statusColor === 'green' ? 'bg-green-500/20 text-green-600' :
            project.statusColor === 'orange' ? 'bg-peach-500/20 text-peach-600' :
            project.statusColor === 'blue' ? 'bg-lavender-500/20 text-lavender-600' :
            'bg-lavender-500/20 text-lavender-600'
          }`}>
            {project.status}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Calendar className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Rok</p>
            <p className="text-sm font-semibold text-neutral-900">{project.year}</p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Code2 className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Trvání</p>
            <p className="text-sm font-semibold text-neutral-900">{project.duration}</p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Tag className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Typ</p>
            <p className="text-sm font-semibold text-neutral-900">Personal Project</p>
          </div>
        </div>

        {(project.github || project.demo) && (
          <div className="flex gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-white transition-all text-neutral-900"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sage-500/20 to-sage-600/20 border border-sage-500/30 rounded-lg hover:from-sage-500/30 hover:to-sage-600/30 transition-all text-neutral-900"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-sage-500 to-sage-600 rounded"></span>
              O projektu
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-lavender-500 to-lavender-600 rounded"></span>
              Motivace
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.motivation}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-peach-500 to-peach-600 rounded"></span>
              Implementace
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.implementation}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Co jsem se naučil
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.learnings.map((learning: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{learning}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <Tag className="w-5 h-5 text-sage-600" />
              Klíčové funkce
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature: any) => (
                <div key={feature.name} className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h4 className="font-semibold mb-1 text-sage-600">{feature.name}</h4>
                  <p className="text-sm text-neutral-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-neutral-900">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-lavender-500/10 border border-lavender-500/20 rounded-lg text-sm text-lavender-600 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectDetail;
