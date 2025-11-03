import { useState, useRef } from 'react';
import { Factory, Truck, Clipboard, Package, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import { useLanguage } from '../../i18n/LanguageContext';

const projects = [
  {
    id: 'erp-vyrobni',
    icon: Factory,
    title: 'ERP Výrobní systém',
    year: '2024',
    status: 'Aktivní',
    statusColor: 'green',
    color: 'blue',
    description: 'Kompletní výrobní ERP systém s pokročilou správou výroby',
    tags: ['Výroba', 'Sklad', 'Finance']
  },
  {
    id: 'crm-logistika',
    icon: Truck,
    title: 'CRM Logistika',
    year: '2023-24',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'cyan',
    description: 'CRM systém pro logistickou společnost s GPS trackingem',
    tags: ['CRM', 'GPS', 'Mobile']
  },
  {
    id: 'pm-system',
    icon: Clipboard,
    title: 'Project Management System',
    year: '2023',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'purple',
    description: 'Systém pro řízení projektů s agilní metodologií',
    tags: ['PM', 'Agile', 'Time tracking']
  },
  {
    id: 'wms',
    icon: Package,
    title: 'Warehouse Management (WMS)',
    year: '2022-23',
    status: 'Hotovo',
    statusColor: 'blue',
    color: 'orange',
    description: 'Pokročilý skladový systém s barcode skenováním',
    tags: ['Barcode', 'Inventura', 'E-shop']
  },
  {
    id: 'dalsi-projekty',
    icon: MoreHorizontal,
    title: 'Dalších 11+ projektů',
    year: '2018-22',
    status: 'Různé',
    statusColor: 'neutral',
    color: 'green',
    description: 'Portfolio různých ERP implementací a customizací',
    tags: ['ERP', 'Integrace', 'Custom']
  }
];

const ProjectsTab = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (selectedProject) {
    return <ProjectDetail projectId={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-neutral-900">{t.projects.heading}</h3>
        <p className="text-neutral-600">{t.projects.subtitle}</p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-sage-500/30"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center hover:bg-sage-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-sage-500/30"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scroll-smooth px-12">
          <div className="flex gap-6 min-w-max">
            {projects.map((project, index) => {
              const projectData = t.projects.list[index];
              const statusText = project.statusColor === 'green' ? t.projects.status.active :
                               project.statusColor === 'blue' ? t.projects.status.completed :
                               t.projects.status.various;

              return (
                <div key={index} className="flex-shrink-0 w-80">
                  <div
                    onClick={() => setSelectedProject(project.id)}
                    className="bg-white/60 border border-neutral-200 rounded-2xl p-6 hover:bg-white transition-all duration-300 group h-full cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${
                        project.color === 'blue' ? 'bg-sage-600' :
                        project.color === 'cyan' ? 'bg-lavender-600' :
                        project.color === 'purple' ? 'bg-peach-600' :
                        project.color === 'orange' ? 'bg-cream-600' :
                        'bg-sage-600'
                      } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.statusColor === 'green' ? 'bg-green-500/20 text-green-600' :
                        project.statusColor === 'blue' ? 'bg-lavender-500/20 text-lavender-600' :
                        'bg-neutral-500/20 text-neutral-600'
                      }`}>
                        {statusText}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold mb-2 text-neutral-900">{projectData.title}</h4>
                    <p className="text-sm text-neutral-600 mb-3">{project.year}</p>
                    <p className="text-neutral-700 mb-4 text-sm leading-relaxed">{projectData.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {projectData.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-sage-600 text-sm font-medium group-hover:text-sage-700 transition-colors">
                      {t.projects.viewDetail} →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-neutral-600 text-sm">
        {t.projects.scrollHint}
      </div>
    </div>
  );
};

export default ProjectsTab;
