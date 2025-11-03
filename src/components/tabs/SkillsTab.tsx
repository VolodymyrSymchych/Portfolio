import { Code2, Briefcase, Users } from 'lucide-react';

const technicalSkills = [
  { name: 'FUSIO Platform', level: 95, color: 'blue' },
  { name: 'Database Architecture', level: 90, color: 'cyan' },
  { name: 'SQL Server / PostgreSQL', level: 85, color: 'purple' },
  { name: 'C# / .NET', level: 70, color: 'pink' }
];

const pmSkills = [
  { name: 'Technical Project Management', level: 95, color: 'orange' },
  { name: 'Agile / Scrum', level: 85, color: 'amber' },
  { name: 'Requirements Analysis', level: 90, color: 'green' },
  { name: 'Team Coordination', level: 88, color: 'emerald' }
];

const softSkills = [
  { name: 'Prezentace', icon: '🎯' },
  { name: 'Komunikace', icon: '💬' },
  { name: 'Analytické myšlení', icon: '🧠' },
  { name: 'Problem-solving', icon: '🔧' },
  { name: 'Multitasking', icon: '⚡' },
  { name: 'Leadership', icon: '👥' }
];

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    green: 'bg-green-500',
    emerald: 'bg-emerald-500'
  };
  return colors[color] || 'bg-blue-500';
};

const SkillsTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-blue-400" />
          Technické dovednosti
        </h3>
        <div className="space-y-4">
          {technicalSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-neutral-300">{skill.name}</span>
                <span className="text-neutral-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClasses(skill.color)} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-orange-400" />
          Project Management
        </h3>
        <div className="space-y-4">
          {pmSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-neutral-300">{skill.name}</span>
                <span className="text-neutral-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClasses(skill.color)} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-400" />
          Soft Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <div className="text-sm text-neutral-300">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
