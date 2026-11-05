
"use client";

import { useMemo, useState } from "react";

type Language = "en" | "uz";

const modules = [
  { id: "all", icon: "◈", en: "All topics", uz: "Barcha mavzular" },
  { id: "anatomy", icon: "⌘", en: "Oral Anatomy", uz: "Og‘iz anatomiyasi" },
  { id: "pathology", icon: "◎", en: "Oral Pathology", uz: "Og‘iz patologiyasi" },
  { id: "surgery", icon: "✚", en: "Maxillofacial Surgery", uz: "Yuz-jag‘ jarrohligi" },
  { id: "cbct", icon: "▦", en: "CBCT Atlas", uz: "CBCT atlasi" },
  { id: "implant", icon: "◉", en: "Implantology", uz: "Implantologiya" },
];

const topics = [
  {
    id: 1, category: "anatomy", code: "ANATOMY · 001",
    en: "Mandibular nerve anatomy", uz: "Pastki jag‘ nervi anatomiyasi",
    descEn: "Anatomical course and clinical significance of the inferior alveolar nerve.",
    descUz: "Pastki alveolyar nervning anatomik yo‘li va klinik ahamiyati.",
    level: "Foundation", time: "8 min",
  },
  {
    id: 2, category: "pathology", code: "PATHOLOGY · 001",
    en: "Odontogenic cysts", uz: "Odontogen kistalar",
    descEn: "Classification, clinical features and diagnostic principles.",
    descUz: "Kistalarning klassifikatsiyasi, klinik belgilari va diagnostikasi.",
    level: "Intermediate", time: "12 min",
  },
  {
    id: 3, category: "surgery", code: "SURGERY · 001",
    en: "Mandibular fractures", uz: "Pastki jag‘ sinishlari",
    descEn: "Classification, fracture patterns and treatment principles.",
    descUz: "Sinishlar klassifikatsiyasi va davolash tamoyillari.",
    level: "Advanced", time: "15 min",
  },
  {
    id: 4, category: "cbct", code: "CBCT · 001",
    en: "CBCT anatomical landmarks", uz: "CBCT anatomik orientirlari",
    descEn: "Essential radiographic landmarks for clinical interpretation.",
    descUz: "Klinik tahlil uchun muhim rentgenologik anatomik belgilar.",
    level: "Intermediate", time: "10 min",
  },
  {
    id: 5, category: "implant", code: "IMPLANT · 001",
    en: "Bone quality: D1–D4", uz: "Suyak sifati: D1–D4",
    descEn: "Bone density classification and its relevance to implant planning.",
    descUz: "Suyak zichligi klassifikatsiyasi va implant rejalashtirishdagi ahamiyati.",
    level: "Foundation", time: "9 min",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeModule, setActiveModule] = useState("all");
  const [search, setSearch] = useState("");

  const t = (en: string, uz: string) =>
    language === "en" ? en : uz;

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesModule =
        activeModule === "all" || topic.category === activeModule;

      const query = search.toLowerCase();
      const matchesSearch =
        `${topic.en} ${topic.uz} ${topic.descEn} ${topic.descUz}`
          .toLowerCase()
          .includes(query);

      return matchesModule && matchesSearch;
    });
  }, [activeModule, search]);

  return (
    <main className="min-h-screen bg-[#f5f7f8] text-[#172b3a]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-[260px] shrink-0 border-r border-slate-200 bg-white px-5 py-7 lg:flex lg:flex-col">
          <a href="#" className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123b50] text-xl text-white">
              ✦
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">OpenDental</div>
              <div className="text-xs tracking-[0.18em] text-slate-400">ATLAS</div>
            </div>
          </a>

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {t("Knowledge library", "Bilimlar kutubxonasi")}
          </p>

          <nav className="space-y-1">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                  activeModule === module.id
                    ? "bg-[#eaf2f5] font-semibold text-[#17485d]"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="w-6 text-center text-lg">{module.icon}</span>
                {language === "en" ? module.en : module.uz}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#f1f5f6] p-4">
            <div className="mb-2 text-sm font-semibold">
              {t("Open knowledge", "Ochiq bilim")}
            </div>
            <p className="text-xs leading-5 text-slate-500">
              {t(
                "Built for dental students, clinicians and researchers.",
                "Talabalar, klinitsistlar va tadqiqotchilar uchun."
              )}
            </p>
          </div>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1">
          <header className="flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-5 md:px-10">
            <div className="text-sm text-slate-400">
              {t("Dental knowledge platform", "Stomatologik bilimlar platformasi")}
            </div>
            <button
              onClick={() =>
                setLanguage(language === "en" ? "uz" : "en")
              }
              className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold hover:bg-slate-50"
            >
              {language === "en" ? "EN  /  UZ" : "UZ  /  EN"}
            </button>
          </header>

          <div className="mx-auto max-w-[1200px] px-5 py-9 md:px-10 md:py-12">
            {/* Hero */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#123b50] px-7 py-10 text-white md:px-12 md:py-14">
              <div className="absolute -right-12 -top-24 h-80 w-80 rounded-full border border-white/10" />
              <div className="absolute -right-2 -top-14 h-60 w-60 rounded-full border border-white/10" />

              <div className="relative max-w-[650px]">
                <div className="mb-5 inline-flex rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  OPEN ACCESS · DENTAL EDUCATION
                </div>
                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  {t(
                    "Knowledge for better clinical decisions.",
                    "Yaxshiroq klinik qarorlar uchun bilim."
                  )}
                </h1>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  {t(
                    "Explore dental anatomy, oral pathology, maxillofacial surgery, CBCT and implantology in one structured knowledge platform.",
                    "Dental anatomiya, og‘iz patologiyasi, yuz-jag‘ jarrohligi, CBCT va implantologiyani yagona bilim platformasida o‘rganing."
                  )}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-9">
              <label className="mb-3 block text-sm font-semibold">
                {t("Explore the knowledge base", "Bilimlar bazasini o‘rganing")}
              </label>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm focus-within:border-[#54899b]">
                <span className="text-xl text-slate-400">⌕</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t(
                    "Search anatomy, pathology, surgery...",
                    "Anatomiya, patologiya, jarrohlik..."
                  )}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
                <span className="hidden whitespace-nowrap text-xs text-slate-400 sm:block">
                  {t("Search topics", "Mavzularni qidirish")}
                </span>
              </div>
            </div>

            {/* Module cards */}
            <div className="mb-10 mt-9">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold">
                  {t("Clinical disciplines", "Klinik yo‘nalishlar")}
                </h2>
                <span className="text-xs text-slate-400">05 MODULES</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {modules.filter((m) => m.id !== "all").map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-md ${
                      activeModule === module.id
                        ? "border-[#8baebb] bg-[#eaf2f5]"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3f5] text-xl text-[#28566a]">
                      {module.icon}
                    </div>
                    <div className="text-sm font-semibold leading-5">
                      {language === "en" ? module.en : module.uz}
                    </div>
                    <div className="mt-2 text-xs text-slate-400">
                      {`0${index + 1}`} / 05
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">
                    {t("Featured learning topics", "Tavsiya etilgan mavzular")}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    {t("Curated educational content", "Saralangan o‘quv materiallari")}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveModule("all");
                    setSearch("");
                  }}
                  className="text-xs font-semibold text-[#28566a] hover:underline"
                >
                  {t("View all", "Barchasi")}
                </button>
              </div>

              <div className="space-y-3">
                {filteredTopics.map((topic) => (
                  <article
                    key={topic.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm md:p-6"
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="min-w-0">
                        <div className="mb-2 text-[10px] font-bold tracking-[0.16em] text-[#54899b]">
                          {topic.code}
                        </div>
                        <h3 className="text-base font-bold">
                          {language === "en" ? topic.en : topic.uz}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                          {language === "en" ? topic.descEn : topic.descUz}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <div className="text-right">
                          <div className="text-xs font-semibold text-slate-600">
                            {topic.level}
                          </div>
                          <div className="mt-1 text-xs text-slate-400">
                            {topic.time}
                          </div>
                        </div>
                        <span className="text-xl text-[#54899b]">↗</span>
                      </div>
                    </div>
                  </article>
                ))}

                {filteredTopics.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                    {t("No matching topics found.", "Mos mavzu topilmadi.")}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-14 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-400">
              <div className="font-semibold text-slate-600">OpenDental Atlas</div>
              <p className="mt-1">
                {t(
                  "An open-source dental and maxillofacial knowledge project.",
                  "Ochiq kodli stomatologik va yuz-jag‘ bilimlari loyihasi."
                )}
              </p>
              <p className="mt-2">
                {t(
                  "Educational resource only. Not a substitute for professional clinical judgment.",
                  "Faqat ta'limiy manba. Professional klinik qaror o‘rnini bosmaydi."
                )}
              </p>
              <p className="mt-3">© 2026 OpenDental Atlas</p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
