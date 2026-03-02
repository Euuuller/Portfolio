export default function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-6">{subtitle}</p>
      <div className="w-[60px] h-[3px] bg-blue-500 rounded-full"></div>
    </div>
  );
}
