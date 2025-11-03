import { Building2, MapPin, Code2, Target, Award, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const AboutTab = () => {
  const { t } = useLanguage();

  const achievementIcons = [TrendingUp, Users, Target, Award];
  const achievementColors = ['sage', 'sage', 'lavender', 'green'];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
            <Target className="w-6 h-6 text-sage-600" />
            {t.about.profileTitle}
          </h3>
          <p className="text-neutral-700 mb-4 leading-relaxed">
            {t.about.profileDescription}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-neutral-700">
              <Building2 className="w-5 h-5 text-sage-600" />
              <span>{t.about.company}</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-700">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>{t.about.location}</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-700">
              <Code2 className="w-5 h-5 text-lavender-600" />
              <span>{t.about.platform}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-neutral-900">
            <Code2 className="w-6 h-6 text-lavender-600" />
            {t.about.specializationTitle}
          </h3>
          <div className="space-y-3">
            {t.about.specializations.map((spec, index) => (
              <div key={index} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className={`font-semibold mb-1 ${
                  index === 0 ? 'text-sage-600' :
                  index === 1 ? 'text-sage-600' :
                  index === 2 ? 'text-lavender-600' :
                  'text-green-600'
                }`}>{spec.title}</div>
                <div className="text-sm text-neutral-600">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/60 border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-neutral-900">
          <Award className="w-6 h-6 text-green-600" />
          {t.about.achievementsTitle}
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {t.about.achievements.map((achievement, index) => {
            const Icon = achievementIcons[index];
            const color = achievementColors[index];
            return (
              <div key={index} className="text-center p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                <Icon className={`w-8 h-8 text-${color}-600 mx-auto mb-2`} />
                <div className={`text-2xl font-bold text-${color}-600`}>{achievement.number}</div>
                <div className="text-sm text-neutral-600">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
