import { Code2, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    sage: 'bg-sage-500',
    lavender: 'bg-lavender-500',
    peach: 'bg-peach-500'
  };
  return colors[color] || 'bg-sage-500';
};

const SkillsTab = () => {
  const { t } = useLanguage();

  const technicalSkillColors = ['sage', 'sage', 'lavender', 'lavender'];
  const pmSkillColors = ['peach', 'peach', 'sage', 'sage'];

  return (
    <div className="space-y-6">
      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-neutral-900">
          <Code2 className="w-6 h-6 text-sage-600" />
          {t.skills.technicalSkillsTitle}
        </h3>
        <div className="space-y-4">
          {t.skills.technicalSkills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-neutral-700">{skill.name}</span>
                <span className="text-neutral-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClasses(technicalSkillColors[index])} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-neutral-900">
          <Briefcase className="w-6 h-6 text-peach-600" />
          {t.skills.pmSkillsTitle}
        </h3>
        <div className="space-y-4">
          {t.skills.pmSkills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-neutral-700">{skill.name}</span>
                <span className="text-neutral-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getColorClasses(pmSkillColors[index])} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-neutral-900">
          <Users className="w-6 h-6 text-lavender-600" />
          {t.skills.softSkillsTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.skills.softSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 hover:bg-white transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <div className="text-sm text-neutral-700">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
