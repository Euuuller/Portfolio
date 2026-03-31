import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import SectionHeader from './SectionHeader';
import { SOCIAL_LINKS } from '../data';

// ─── Configuração Formspree ──────────────────────────────────────────────────
// 1. Crie uma conta em formspree.io
// 2. Crie um novo form → copie o ID gerado
// 3. Substitua 'YOUR_FORM_ID' pelo ID (ex: "xpzgkqvb")
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
// ────────────────────────────────────────────────────────────────────────────

type FormData   = { name: string; email: string; subject: string; message: string };
type FormErrors = { name: boolean; email: boolean; subject: boolean; message: boolean };

const EMPTY_FORM: FormData   = { name: '', email: '', subject: '', message: '' };
const NO_ERRORS: FormErrors  = { name: false, email: false, subject: false, message: false };

const inputBase =
  'px-4 py-3 rounded-lg border-[1.5px] text-sm text-navy dark:text-white bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors';
const inputError = 'border-red-500 focus:border-red-500';
const inputOk    = 'border-slate-200 dark:border-slate-700 focus:border-blue-500';

export default function Contact() {
  const [formData,  setFormData]  = useState<FormData>(EMPTY_FORM);
  const [errors,    setErrors]    = useState<FormErrors>(NO_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [sendError, setSendError] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev: FormData) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendError(false);

    const newErrors: FormErrors = {
      name:    !formData.name.trim(),
      email:   !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData(EMPTY_FORM);
        setErrors(NO_ERRORS);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative md:min-h-dvh flex flex-col pt-[120px] pb-[80px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader
          title="Entre em Contato"
          subtitle="Estou disponível para novas oportunidades como Estágio e colaborações."
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
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Nome Completo
                </label>
                <input
                  id="name" name="name" type="text" placeholder="Seu nome"
                  value={formData.name} onChange={handleChange}
                  className={`${inputBase} ${errors.name ? inputError : inputOk}`}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email" name="email" type="email" placeholder="seu@email.com"
                  value={formData.email} onChange={handleChange}
                  className={`${inputBase} ${errors.email ? inputError : inputOk}`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                Assunto
              </label>
              <input
                id="subject" name="subject" type="text" placeholder="Qual o motivo do contato?"
                value={formData.subject} onChange={handleChange}
                className={`${inputBase} ${errors.subject ? inputError : inputOk}`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[13px] font-medium text-slate-700 dark:text-slate-300">
                Mensagem
              </label>
              <textarea
                id="message" name="message" placeholder="Escreva sua mensagem aqui..."
                value={formData.message} onChange={handleChange}
                className={`${inputBase} min-h-[140px] resize-y ${errors.message ? inputError : inputOk}`}
              />
            </div>

            {/* Feedback */}
            {submitted && (
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-lg px-4 py-3">
                <i className="fa-solid fa-circle-check"></i>
                Mensagem enviada! Entrarei em contato em breve.
              </div>
            )}
            {sendError && (
              <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-4 py-3">
                <i className="fa-solid fa-circle-exclamation"></i>
                Erro ao enviar. Tente novamente ou use os links ao lado.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading
                ? <><i className="fa-solid fa-spinner animate-spin"></i> Enviando…</>
                : <><i className="fa-solid fa-arrow-right"></i> Enviar Mensagem</>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
