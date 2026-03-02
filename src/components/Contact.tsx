import { useState, FormEvent } from 'react';
import SectionHeader from './SectionHeader';
import { SOCIAL_LINKS } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some(Boolean)) {
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contato" className="min-h-[100dvh] flex flex-col pt-[120px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader 
          title="Entre em Contato" 
          subtitle="Vamos conversar sobre como posso ajudar a sua empresa a tomar decisões baseadas em dados." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[60px] items-start">
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#0a0a0a] p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 hover:translate-x-1 transition-all duration-300 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${link.bg} ${link.color}`}>
                  <i className={`${link.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-navy dark:text-white text-sm">{link.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Assunto</label>
              <input 
                type="text" 
                placeholder="Qual o motivo do contato?"
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.subject ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
              <textarea 
                placeholder="Escreva sua mensagem aqui..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className={`px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[140px] resize-y ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-blue-500'}`}
              ></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
              Enviar Mensagem <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
