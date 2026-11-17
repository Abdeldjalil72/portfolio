import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, CheckCircle2, Sparkles, User, MessageSquare, Tag, Loader2, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const topics = [
  "Job Opportunity",
  "Campus France / Academic",
  "SaaS & Full-Stack Project",
  "AI & Research Collaboration",
  "General Inquiry"
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (web3FormsKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            subject: `Portfolio [${topic}] from ${name}`,
            message,
            from_name: name
          })
        });

        const result = await response.json();
        if (result.success) {
          setStatus('success');
          return;
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Web3Forms submission error:', err);
        // Fall back to showing email client option
        setStatus('error');
        setErrorMessage('Direct API dispatch is unavailable. You can launch your mail client with this message pre-filled below.');
        return;
      }
    }

    // Default fallback if no third-party API key is configured yet:
    // Seamlessly construct mailto payload and transition to success
    setTimeout(() => {
      const mailtoUrl = `mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`[${topic}] Inquiry from ${name}`)}&body=${encodeURIComponent(`Hi Abdeldjalil,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n`)}`;
      window.open(mailtoUrl, '_blank');
      setStatus('success');
    }, 600);
  };

  const handleCopyDraft = async () => {
    const draftText = `To: bouchamaabdeldjalil@gmail.com\nSubject: [${topic}] Inquiry from ${name}\nFrom: ${name} (${email})\n\n${message}`;
    try {
      await navigator.clipboard.writeText(draftText);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 3000);
    } catch {
      // ignore
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setTopic(topics[0]);
    setStatus('idle');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-stroke shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-stroke/60 text-text-primary">
                    <Sparkles className="w-4 h-4 text-[#89AACC]" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    Direct Contact
                  </span>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close message modal"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-text-primary hover:bg-stroke/60 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {status !== 'success' ? (
                <>
                  <h2 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-1 leading-tight">
                    Send a direct note
                  </h2>
                  <p className="text-xs sm:text-sm text-muted mb-6">
                    Have a question, project proposal, or academic inquiry? Leave a message and I'll reply promptly.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>Your Name</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Connor or Recruiter Name"
                        className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke text-text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>Your Email Address</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke text-text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors"
                      />
                    </div>

                    {/* Topic Selector */}
                    <div>
                      <label className="block text-xs font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>Topic / Purpose</span>
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {topics.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTopic(t)}
                            className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer min-h-[32px] flex items-center ${
                              topic === t
                                ? 'bg-text-primary text-bg font-medium shadow-sm'
                                : 'bg-bg border border-stroke text-muted hover:text-text-primary hover:border-stroke/80'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-medium text-text-primary mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>Message</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your note or project brief here..."
                        className="w-full px-4 py-3 rounded-2xl bg-bg border border-stroke text-text-primary placeholder:text-muted/60 text-sm focus:outline-none focus:border-[#89AACC] transition-colors resize-none"
                      />
                    </div>

                    {/* Error Notice */}
                    {status === 'error' && (
                      <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 space-y-2">
                        <p>{errorMessage}</p>
                        <div className="flex items-center gap-2 pt-1">
                          <a
                            href={`mailto:bouchamaabdeldjalil@gmail.com?subject=${encodeURIComponent(`[${topic}] Inquiry from ${name}`)}&body=${encodeURIComponent(message)}`}
                            className="inline-flex items-center gap-1 font-semibold underline hover:text-red-400"
                          >
                            <span>Open Mail Client</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                          <span>•</span>
                          <button
                            type="button"
                            onClick={handleCopyDraft}
                            className="inline-flex items-center gap-1 font-semibold underline hover:text-red-400 cursor-pointer"
                          >
                            {copiedDraft ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedDraft ? "Copied!" : "Copy Text"}</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="text-[11px] text-muted flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Sent directly to bouchamaabdeldjalil@gmail.com</span>
                      </span>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="group/btn relative rounded-full inline-flex w-full sm:w-auto cursor-pointer"
                      >
                        <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-full bg-text-primary text-bg group-hover/btn:bg-bg group-hover/btn:text-text-primary rounded-full text-xs sm:text-sm px-6 py-3 transition-all flex items-center justify-center gap-2 min-h-[44px]">
                          {status === 'loading' ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-muted max-w-md mb-6 leading-relaxed">
                    Thank you, <strong className="text-text-primary">{name}</strong>. Your note regarding <strong className="text-text-primary">{topic}</strong> has been transmitted. I will get back to you at <strong className="text-text-primary">{email}</strong> as soon as possible.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-text-primary text-bg hover:opacity-90 transition-opacity min-h-[40px] cursor-pointer"
                    >
                      Done
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-bg border border-stroke text-muted hover:text-text-primary transition-colors min-h-[40px] cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
