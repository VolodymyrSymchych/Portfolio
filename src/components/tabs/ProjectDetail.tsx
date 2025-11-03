import { ArrowLeft, Calendar, Tag, CheckCircle2, Users, Target, TrendingUp } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const projectDetails: Record<string, any> = {
  'erp-vyrobni': {
    title: 'ERP Výrobní systém',
    year: '2024',
    status: 'Aktivní',
    statusColor: 'green',
    color: 'blue',
    tagline: 'Komplexní řešení pro moderní výrobní podniky',
    description: 'Rozsáhlý ERP systém navržený pro středně velké výrobní společnosti. Systém integruje výrobu, sklad, logistiku a finance do jedné platformy s důrazem na automatizaci a efektivitu.',

    challenge: 'Výrobní společnost potřebovala nahradit zastaralý systém, který neumožňoval real-time sledování výroby a měl problémy s integracemi. Hlavní výzvy byly: fragmentovaná data napříč různými systémy, neefektivní plánování výroby, nedostatečná viditelnost do stavu zakázek.',

    solution: 'Implementovali jsme moderní ERP řešení postavené na platformě FUSIO s custom moduly pro specifické potřeby klienta. Klíčové bylo propojení výrobní haly přes IoT senzory a tablety pro operátory, vytvoření pokročilého plánovacího modulu s optimalizací zdrojů, a integrace s existujícími systémy pomocí REST API.',

    results: [
      'Snížení času na plánování výroby o 60%',
      'Zvýšení přesnostiInventury na 98%',
      'Zkrácení průběžné doby výroby o 25%',
      'Reálný čas viditelnost do všech zakázek',
      'Automatizace 80% rutinních úkolů'
    ],

    technologies: [
      'FUSIO Platform',
      'C# / .NET Core',
      'SQL Server',
      'REST API',
      'React Dashboard',
      'IoT Integration',
      'Power BI',
      'Azure Cloud'
    ],

    features: [
      { name: 'Výrobní plánování', desc: 'Pokročilé plánování s optimalizací zdrojů a kapacit' },
      { name: 'Sledování výroby', desc: 'Real-time monitoring výrobních operací přes tablety' },
      { name: 'Skladové hospodářství', desc: 'Kompletní WMS s barcode a RFID podporou' },
      { name: 'Finanční modul', desc: 'Integrace s účetnictvím, fakturace, náklady' },
      { name: 'Reporting & Analytics', desc: 'Interaktivní dashboardy a pokročilé reporty' },
      { name: 'Mobilní aplikace', desc: 'Aplikace pro operátory a vedoucí výroby' }
    ],

    team: '5-8 lidí (PM, 2 developers, tester, business analytik)',
    duration: '14 měsíců',
    methodology: 'Agile/Scrum s 2-týdenními sprinty'
  },

  'crm-logistika': {
    title: 'CRM Logistika',
    year: '2023-24',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'cyan',
    tagline: 'Moderní CRM systém pro logistické společnosti',
    description: 'Specializovaný CRM systém pro střední logistickou společnost s GPS trackingem vozidel, správou zásilek a automatizací komunikace se zákazníky.',

    challenge: 'Logistická společnost měla problémy s koordinací vozidel, nedostatečnou viditelností do pozice zásilek pro zákazníky a manuální komunikací. Ztráty času při plánování tras a zákazníci měli omezené informace o stavu jejich zásilek.',

    solution: 'Vytvořili jsme CRM systém integrovaný s GPS tracking platformou a automatizací komunikace. Implementovali jsme customer portal kde klienti vidí real-time pozici zásilek, automatické notifikace o stavu zásilky, optimalizaci tras pomocí AI algoritmů, a mobilní aplikaci pro řidiče.',

    results: [
      'Zvýšení spokojenosti zákazníků o 45%',
      'Snížení nákladů na palivo o 18%',
      'Zkrácení času doručení o 22%',
      '95% zásilek doručeno včas',
      'Automatizace 70% zákaznické komunikace'
    ],

    technologies: [
      'FUSIO CRM',
      'C# / ASP.NET',
      'PostgreSQL',
      'Google Maps API',
      'GPS Tracking SDK',
      'React Portal',
      'Mobile App (React Native)',
      'SendGrid API'
    ],

    features: [
      { name: 'GPS Tracking', desc: 'Real-time sledování vozidel a zásilek na mapě' },
      { name: 'Customer Portal', desc: 'Webový portál pro zákazníky s tracking zásilek' },
      { name: 'Správa objednávek', desc: 'Kompletní lifecycle objednávky od příjmu po doručení' },
      { name: 'Optimalizace tras', desc: 'AI-powered optimalizace tras pro minimalizaci nákladů' },
      { name: 'Mobilní app pro řidiče', desc: 'Aplikace s navigací, skenováním a komunikací' },
      { name: 'Automatické notifikace', desc: 'SMS a email notifikace o stavu zásilky' }
    ],

    team: '4-6 lidí (PM, 2 developers, mobile dev, tester)',
    duration: '9 měsíců',
    methodology: 'Agile s průběžným nasazováním'
  },

  'pm-system': {
    title: 'Project Management System',
    year: '2023',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'purple',
    tagline: 'Komplexní nástroj pro řízení projektů',
    description: 'Interní PM systém pro software development agenturu, která spravuje desítky projektů současně. Systém podporuje Agile metodologie, time tracking, resource management a reporting.',

    challenge: 'Softwarová agentura používala kombinaci různých nástrojů (Jira, Excel, Slack), což vedlo k fragmentaci dat a neefektivní komunikaci. Nemohli efektivně trackovat profitabilitu projektů a alokaci zdrojů.',

    solution: 'Vyvinuli jsme unified PM platformu, která kombinuje project planning, time tracking, resource management a financial tracking. Systém zahrnuje Kanban a Scrum boardy, integraci s Git pro automatické trackování práce, dashboardy pro management s real-time metrikami, a automatizované reporty pro klienty.',

    results: [
      'Centralizace všech project dat na jedno místo',
      'Zvýšení produktivity týmů o 30%',
      'Lepší viditelnost do profitability projektů',
      'Zkrácení času na reporting o 75%',
      'Vyšší spokojenost klientů díky transparenci'
    ],

    technologies: [
      'React + TypeScript',
      'Node.js / Express',
      'MongoDB',
      'GraphQL',
      'Git Integration',
      'Chart.js',
      'WebSocket',
      'Docker'
    ],

    features: [
      { name: 'Agile Boards', desc: 'Kanban a Scrum boardy s drag & drop' },
      { name: 'Time Tracking', desc: 'Detailní sledování času s integrací do úkolů' },
      { name: 'Resource Planning', desc: 'Alokace lidí na projekty s capacity planning' },
      { name: 'Gantt Charts', desc: 'Vizualizace timeline projektů a závislostí' },
      { name: 'Financial Tracking', desc: 'Sledování nákladů, rozpočtů a profitability' },
      { name: 'Client Portal', desc: 'Portál pro klienty s progress reporty' }
    ],

    team: '3-4 lidé (Full-stack devs, UX designer)',
    duration: '6 měsíců',
    methodology: 'Agile (dogfooding - používali vlastní systém)'
  },

  'wms': {
    title: 'Warehouse Management System',
    year: '2022-23',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'orange',
    tagline: 'Pokročilý skladový systém s automatizací',
    description: 'WMS systém pro e-commerce distribuční centrum s pokročilým barcode skenováním, automatickou alokací zboží a integrací s e-shopy.',

    challenge: 'E-commerce distributor měl problémy s rychlostí expedice objednávek, vysokou chybovostí při kompletaci a neefektivním využitím skladových prostor. Manuální procesy vedly k chybám a zdržením.',

    solution: 'Implementovali jsme moderní WMS s podporou handheld scannerů, optimalizací umístění zboží podle frekvence výdejů, automatickou alokací při příjmu zboží, a wave picking pro efektivní kompletaci. Systém integrován s e-shopy a kurýrními službami.',

    results: [
      'Zvýšení rychlosti expedice o 200%',
      'Snížení chybovosti na 0.5%',
      'Optimalizace využití skladu o 40%',
      'Real-time inventura s 99.5% přesností',
      'Zkrácení onboarding nových zaměstnanců'
    ],

    technologies: [
      'FUSIO Platform',
      'C# / .NET',
      'SQL Server',
      'Barcode SDK',
      'Zebra Printers API',
      'E-shop Integrations',
      'Shipping APIs',
      'Windows Mobile'
    ],

    features: [
      { name: 'Barcode Scanning', desc: 'Podpora handheld scannerů pro příjem a výdej' },
      { name: 'Smart Allocation', desc: 'Automatická alokace zboží podle pravidel' },
      { name: 'Wave Picking', desc: 'Grupování objednávek pro efektivní kompletaci' },
      { name: 'Inventura', desc: 'Cyklická inventura s minimálním dopadem na provoz' },
      { name: 'E-shop Integration', desc: 'Real-time synchronizace stavů a objednávek' },
      { name: 'Shipping Integration', desc: 'Automatické generování štítků a tracking' }
    ],

    team: '4-5 lidí (PM, developer, mobile dev, tester)',
    duration: '8 měsíců',
    methodology: 'Waterfall s iteracemi (specifika HW integrace)'
  },

  'dalsi-projekty': {
    title: 'Portfolio ERP Projektů',
    year: '2018-22',
    status: 'Různé',
    statusColor: 'neutral',
    color: 'green',
    tagline: '11+ úspěšných ERP implementací',
    description: 'Souhrn různých ERP projektů realizovaných v průběhu let 2018-2022. Portfolio zahrnuje implementace, migrace, customizace a integrační projekty.',

    challenge: 'Každý projekt měl unikátní výzvy - od migrace legacy systémů po specifické business požadavky klientů z různých odvětví (výroba, retail, služby).',

    solution: 'Flexibilní přístup s využitím best practices a osvědčených metodologií. Důraz na důkladnou analýzu, iterativní dodávky a úzkou spolupráci s klienty.',

    results: [
      'Více než 11 úspěšně dokončených projektů',
      '100% projektů uvedeno do provozu',
      'Dlouhodobá podpora a rozvoj systémů',
      'Vysoká míra spokojenosti klientů',
      'Rozšíření do různých business domén'
    ],

    technologies: [
      'FUSIO Platform',
      'C# / .NET Framework',
      'SQL Server / PostgreSQL',
      'Various APIs',
      'Crystal Reports',
      'DevExpress',
      'Legacy System Integration',
      'Custom Protocols'
    ],

    features: [
      { name: 'Výrobní systémy', desc: 'Implementace pro různé typy výroby' },
      { name: 'Retail řešení', desc: 'POS systémy a e-shop integrace' },
      { name: 'Servisní organizace', desc: 'Ticketing a SLA management' },
      { name: 'Migrace dat', desc: 'Přechody z legacy systémů' },
      { name: 'Custom moduly', desc: 'Specifické business logiky' },
      { name: 'Integrace', desc: 'Propojení s external systémy' }
    ],

    team: 'Různé týmy 2-8 lidí podle projektu',
    duration: 'Projekty 2-18 měsíců',
    methodology: 'Mix Agile a Waterfall podle projektu'
  }
};

const ProjectDetail = ({ projectId, onBack }: ProjectDetailProps) => {
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
        Zpět na projekty
      </button>

      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">{project.title}</h2>
            <p className="text-xl text-neutral-600">{project.tagline}</p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
            project.statusColor === 'green' ? 'bg-green-500/20 text-green-600' :
            project.statusColor === 'blue' ? 'bg-lavender-500/20 text-lavender-600' :
            'bg-neutral-500/20 text-neutral-600'
          }`}>
            {project.status}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Calendar className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Období</p>
            <p className="text-sm font-semibold text-neutral-900">{project.year}</p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Users className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Tým</p>
            <p className="text-sm font-semibold text-neutral-900">{project.team}</p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
            <Target className="w-5 h-5 text-sage-600 mb-2" />
            <p className="text-xs text-neutral-600">Trvání</p>
            <p className="text-sm font-semibold text-neutral-900">{project.duration}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-sage-500 to-sage-600 rounded"></span>
              Popis projektu
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-peach-500 to-peach-600 rounded"></span>
              Výzva
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <span className="w-1 h-6 bg-gradient-to-b from-lavender-500 to-lavender-600 rounded"></span>
              Řešení
            </h3>
            <p className="text-neutral-700 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Výsledky
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 text-sm">{result}</span>
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
            <h3 className="text-xl font-bold mb-3 text-neutral-900">Technologie</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-sage-500/10 border border-sage-500/20 rounded-lg text-sm text-sage-600 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-sage-500/10 border border-sage-500/20 rounded-xl p-6">
            <h4 className="font-semibold mb-2 text-sage-600">Metodologie</h4>
            <p className="text-neutral-700">{project.methodology}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
