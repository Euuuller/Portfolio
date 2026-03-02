import SectionHeader from './SectionHeader';
import { SKILLS } from '../data';

export default function Skills() {
  const half = Math.ceil(SKILLS.length / 2);
  const track1 = SKILLS.slice(0, half);
  const track2 = SKILLS.slice(half);

  return (
    <section id="habilidades" className="min-h-[100dvh] flex flex-col pt-[120px] pb-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader 
          title="Habilidades Técnicas" 
          subtitle="Stack tecnológica otimizada para análise de dados, machine learning e visualização." 
        />
        
        <div className="flex flex-col gap-16 mt-10 mask-fade">
          {/* Track 1 - Scrolls Left */}
          <div className="flex gap-24 w-max animate-scroll-left">
            {[...track1, ...track1, ...track1, ...track1].map((skill, i) => (
              <SkillCard key={`t1-${i}`} skill={skill} />
            ))}
          </div>
          
          {/* Track 2 - Scrolls Right */}
          <div className="flex gap-24 w-max animate-scroll-right">
            {[...track2, ...track2, ...track2, ...track2].map((skill, i) => (
              <SkillCard key={`t2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: any) {
  return (
    <div className="flex flex-col items-center justify-center w-[160px] gap-3 group pt-2">
      <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
        <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain drop-shadow-sm" />
      </div>
      <div className="flex flex-col items-center text-center">
        <h4 className="font-bold text-navy dark:text-white text-[15px]">{skill.name}</h4>
        <span className="text-[12px] text-slate-500 dark:text-slate-400 mt-1">{skill.phrase}</span>
      </div>
    </div>
  );
}
