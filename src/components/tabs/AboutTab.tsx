import { Building2, MapPin, Code2, Target, Award, TrendingUp, Users } from 'lucide-react';

const AboutTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-400" />
            Profil
          </h3>
          <p className="text-neutral-300 mb-4 leading-relaxed">
            Solutions Architect a Technical Project Manager se zaměřením na návrh, implementaci
            a řízení komplexních ERP systémů na platformě FUSIO. Kombinuji technickou expertízu
            s praktickým vedením projektů.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-neutral-300">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <span>ANTS spol. s.r.o</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>Brno, Česká republika</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span>FUSIO</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            Specializace
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="font-semibold text-blue-400 mb-1">ERP Systémy</div>
              <div className="text-sm text-neutral-400">Výroba, Sklad, Finance, CRM</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="font-semibold text-cyan-400 mb-1">Database Architecture</div>
              <div className="text-sm text-neutral-400">SQL Server, PostgreSQL, Optimalizace</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="font-semibold text-purple-400 mb-1">Development</div>
              <div className="text-sm text-neutral-400">C#, .NET, FUSIO implementace</div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="font-semibold text-green-400 mb-1">Project Management</div>
              <div className="text-sm text-neutral-400">Agile, Technical Leadership</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Award className="w-6 h-6 text-green-400" />
          Klíčové úspěchy
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">15+</div>
            <div className="text-sm text-neutral-400">Implementovaných projektů</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400">98%</div>
            <div className="text-sm text-neutral-400">Spokojenost zákazníků</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">40%</div>
            <div className="text-sm text-neutral-400">Zrychlení procesů</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
            <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">2+</div>
            <div className="text-sm text-neutral-400">Let zkušeností</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
