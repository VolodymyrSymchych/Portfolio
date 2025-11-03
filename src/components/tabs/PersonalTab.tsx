import { useState } from 'react';
import { Globe, Wrench, BarChart3, Brain, Database, Github } from 'lucide-react';
import PersonalProjectDetail from './PersonalProjectDetail';
import { useLanguage } from '../../i18n/LanguageContext';

const getStatusColor = (color: string) => {
  const colors: Record<string, string> = {
    green: 'bg-green-500/20 text-green-600',
    peach: 'bg-peach-500/20 text-peach-600',
    lavender: 'bg-lavender-500/20 text-lavender-600'
  };
  return colors[color] || 'bg-neutral-500/20 text-neutral-600';
};

const PersonalTab = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { t } = useLanguage();

  const projectIds = ['portfolio', 'fusio-tools', 'analytics-dashboard', 'ai-assistant', 'db-migration', 'open-source'];
  const projectIcons = [Globe, Wrench, BarChart3, Brain, Database, Github];
  const projectStatuses = ['completed', 'inProgress', 'completed', 'learning', 'completed', 'ongoing'];
  const projectStatusColors = ['green', 'peach', 'green', 'lavender', 'green', 'lavender'];
  const projectGradients = [
    'from-sage-500 to-sage-600',
    'from-lavender-500 to-lavender-600',
    'from-peach-500 to-peach-600',
    'from-lavender-500 to-sage-500',
    'from-sage-500 to-sage-600',
    'from-lavender-500 to-lavender-600',
  ];

  if (selectedProject) {
    return <PersonalProjectDetail projectId={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-neutral-900">{t.personal.heading}</h3>
        <p className="text-neutral-600">{t.personal.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.personal.projects.map((project, index) => {
          const Icon = projectIcons[index];
          const projectId = projectIds[index];
          const statusKey = projectStatuses[index] as keyof typeof t.personal.status;
          const status = t.personal.status[statusKey];
          const statusColor = projectStatusColors[index];
          const gradient = projectGradients[index];

          return (
            <div
              key={index}
              onClick={() => setSelectedProject(projectId)}
              className="bg-white/60 border border-neutral-200 rounded-2xl p-6 hover:bg-white transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(statusColor)}`}>
                  {status}
                </span>
              </div>

              <h4 className="text-lg font-bold mb-2 text-neutral-900">{project.title}</h4>
              <p className="text-sm text-neutral-700 mb-3">{project.description}</p>

              <div className="mb-4">
                <span className="text-xs text-neutral-600">{t.personal.techStack}</span>
                <p className="text-sm text-sage-600 mt-1">{project.tech}</p>
              </div>

              <div className="space-y-1 mb-4">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-neutral-700">
                    <span className="text-sage-600">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-lavender-600 text-sm font-medium group-hover:text-lavender-700 transition-colors">
                {t.personal.viewDetail} →
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalTab;
