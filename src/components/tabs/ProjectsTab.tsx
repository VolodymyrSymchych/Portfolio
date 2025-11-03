import { Factory, Truck, Clipboard, Package, MoreHorizontal } from 'lucide-react';

const projects = [
  {
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
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Timeline implementací</h3>
        <p className="text-neutral-400">15+ úspěšně dokončených ERP projektů</p>
      </div>

      <div className="relative">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.statusColor === 'green' ? 'bg-green-500/20 text-green-400' :
                      project.statusColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-neutral-500/20 text-neutral-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-neutral-400 mb-3">{project.year}</p>
                  <p className="text-neutral-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-l from-[#0a1628] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 -left-2 w-8 h-8 bg-gradient-to-r from-[#0a1628] to-transparent pointer-events-none" />
      </div>

      <div className="mt-6 text-center text-neutral-400 text-sm">
        ← Scrollujte pro více projektů →
      </div>
    </div>
  );
};

export default ProjectsTab;
