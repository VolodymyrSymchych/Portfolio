import { Globe, Wrench, BarChart3, Brain, Database, Github } from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Personal Portfolio',
    description: 'Moderní portfolio web s interaktivními komponentami',
    tech: 'React, TypeScript, TailwindCSS',
    status: 'Completed',
    statusColor: 'green',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Responsive design', 'Dark theme', 'Animations']
  },
  {
    icon: Wrench,
    title: 'FUSIO Dev Tools',
    description: 'Sada nástrojů pro zrychlení vývoje na platformě FUSIO',
    tech: 'C#, .NET, FUSIO SDK',
    status: 'In Progress',
    statusColor: 'orange',
    gradient: 'from-purple-500 to-pink-500',
    features: ['Code generators', 'Testing utilities', 'Performance tools']
  },
  {
    icon: BarChart3,
    title: 'ERP Analytics Dashboard',
    description: 'Dashboard pro vizualizaci dat z ERP systémů',
    tech: 'React, Chart.js, REST API',
    status: 'Completed',
    statusColor: 'green',
    gradient: 'from-orange-500 to-amber-500',
    features: ['Real-time data', 'Custom charts', 'Export reports']
  },
  {
    icon: Brain,
    title: 'AI Code Assistant',
    description: 'Experimentální AI asistent pro generování FUSIO kódu',
    tech: 'Python, OpenAI API',
    status: 'Learning',
    statusColor: 'blue',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Code completion', 'Bug detection', 'Best practices']
  },
  {
    icon: Database,
    title: 'Database Migration Tool',
    description: 'Nástroj pro bezpečnou migraci databází mezi verzemi',
    tech: 'C#, SQL Server, PostgreSQL',
    status: 'Completed',
    statusColor: 'green',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Schema diff', 'Data migration', 'Rollback support']
  },
  {
    icon: Github,
    title: 'Open Source Contributions',
    description: 'Příspěvky do open source projektů a komunit',
    tech: '.NET, Various technologies',
    status: 'Ongoing',
    statusColor: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    features: ['Bug fixes', 'Documentation', 'Community support']
  }
];

const getStatusColor = (color: string) => {
  const colors: Record<string, string> = {
    green: 'bg-green-500/20 text-green-400',
    orange: 'bg-orange-500/20 text-orange-400',
    blue: 'bg-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/20 text-purple-400'
  };
  return colors[color] || 'bg-neutral-500/20 text-neutral-400';
};

const PersonalTab = () => {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Osobní projekty & Open Source</h3>
        <p className="text-neutral-400">Vedlejší projekty a příspěvky do komunity</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.statusColor)}`}>
                {project.status}
              </span>
            </div>

            <h4 className="text-lg font-bold mb-2">{project.title}</h4>
            <p className="text-sm text-neutral-300 mb-3">{project.description}</p>

            <div className="mb-4">
              <span className="text-xs text-neutral-400">Tech Stack:</span>
              <p className="text-sm text-cyan-400 mt-1">{project.tech}</p>
            </div>

            <div className="space-y-1">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="text-cyan-400">•</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalTab;
