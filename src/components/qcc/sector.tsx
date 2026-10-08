import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react';
import { c, labels, pages, type Lang } from '@/lib/qcc/content';
import { approachSteps, sectorBySlug, sectorList, sectorPath, type SectorSlug } from '@/lib/qcc/sectors';
import { Action, PageLink } from './link';
import { Reveal, sectorIcons } from './sections';
import { Shell } from './shell';

export function SectorPage({ slug, lang }: { slug: SectorSlug; lang: Lang }) {
  const s = sectorBySlug(slug);
  const Icon = sectorIcons[s.icon];
  const others = sectorList.filter(o => o.slug !== slug);
  const style = { '--sector-accent': s.accent } as React.CSSProperties;
  return (
    <Shell>
      <section className="sector-hero" style={style}>
        <motion.img src={s.image} alt="" aria-hidden className="sector-hero-bg" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} />
        <div className="sector-hero-shade" />
        <div className="container sector-hero-inner">
          <div className="breadcrumb">
            <PageLink page="home" lang={lang}>{pages.home.title[lang]}</PageLink><ChevronRight size={12} className="directional" />
            <PageLink page="industries" lang={lang}>{pages.industries.title[lang]}</PageLink><ChevronRight size={12} className="directional" />
            <span>{s.title[lang]}</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .2, ease: [0.16, 1, 0.3, 1] }}>
            <span className="sector-badge"><Icon size={18} />{c('Sector', 'القطاع')[lang]}</span>
            <h1>{s.title[lang]}</h1>
            <p className="sector-tagline">{s.tagline[lang]}</p>
            <div className="sector-hero-actions">
              <Action lang={lang}>{labels.quote[lang]}</Action>
              <a href="#sector-services" className="sector-ghost">{c('See services', 'عرض الخدمات')[lang]}<ArrowUpRight size={16} className="directional" /></a>
            </div>
          </motion.div>
          <div className="sector-env-strip">
            {s.environments.map((e, i) => <motion.span key={e.en} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 + i * .08 }}>{e[lang]}</motion.span>)}
          </div>
        </div>
      </section>

      <section className="section" style={style}>
        <Reveal className="container sector-intro">
          <div>
            <div className="eyebrow">{c('Overview', 'نظرة عامة')[lang]}</div>
            <h2 className="section-heading">{c('Service shaped around your environment.', 'خدمة تتشكل حول بيئتكم.')[lang]}</h2>
          </div>
          <p className="body-copy sector-lead">{s.intro[lang]}</p>
        </Reveal>
        <div className="container sector-priorities">
          {s.priorities.map((p, i) => (
            <motion.article key={p.title.en} className="sector-priority" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12, duration: .7 }} whileHover={{ y: -8 }}>
              <span className="sector-priority-num">0{i + 1}</span>
              <h3>{p.title[lang]}</h3>
              <p>{p.body[lang]}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="sector-services" className="section sector-services" style={style}>
        <Reveal className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">{c('Relevant services', 'الخدمات ذات الصلة')[lang]}</div>
              <h2 className="section-heading">{c('What we bring to ', 'ما نقدمه لقطاع ')[lang]}{s.title[lang]}</h2>
            </div>
            <PageLink page="services" lang={lang} className="text-link">{c('All our services', 'جميع خدماتنا')[lang]}<ArrowUpRight size={16} className="directional" /></PageLink>
          </div>
          <div className="sector-service-grid">
            {s.services.map(group => (
              <div key={group.division} className="sector-service-card">
                <h3>{pages[group.division].title[lang]}</h3>
                <ul>{group.items.map(item => <li key={item.en}><Check />{item[lang]}</li>)}</ul>
                <PageLink page={group.division} lang={lang} className="text-link">{c('Explore division', 'استكشف القسم')[lang]}<ArrowUpRight size={15} className="directional" /></PageLink>
              </div>
            ))}
          </div>
          <p className="caption mt-5">{c('Indicative scope for presentation. Final services, schedules and availability are agreed after a site review and remain subject to client approval.', 'نطاق استرشادي للعرض. يتم الاتفاق على الخدمات والجداول والتوافر النهائية بعد مراجعة الموقع وتخضع لاعتماد العميل.')[lang]}</p>
        </Reveal>
      </section>

      <section className="section" style={style}>
        <Reveal className="container">
          <div className="eyebrow">{c('How we work', 'كيف نعمل')[lang]}</div>
          <h2 className="section-heading">{c('From first visit to everyday consistency.', 'من الزيارة الأولى إلى الاستمرارية اليومية.')[lang]}</h2>
          <ol className="sector-steps">
            {approachSteps.map((st, i) => <li key={st.title.en}><span>{i + 1}</span><h3>{st.title[lang]}</h3><p>{st.body[lang]}</p></li>)}
          </ol>
        </Reveal>
      </section>

      <section className="section services-section">
        <Reveal className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">{c('Other sectors', 'قطاعات أخرى')[lang]}</div>
              <h2 className="section-heading">{c('Explore more environments.', 'استكشفوا بيئات أخرى.')[lang]}</h2>
            </div>
          </div>
          <div className="sector-others">
            {others.map(o => {
              const OIcon = sectorIcons[o.icon];
              return (
                <Link key={o.slug} to={sectorPath(o.slug, lang)} className="sector-mini" style={{ '--sector-accent': o.accent } as React.CSSProperties}>
                  <img src={o.image} alt="" aria-hidden loading="lazy" />
                  <span className="sector-mini-label"><OIcon size={18} />{o.title[lang]}</span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>
    </Shell>
  );
}
