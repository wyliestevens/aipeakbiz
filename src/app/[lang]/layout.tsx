import { Navbar } from "@/components/navbar";
import { MissionStatement } from "@/components/mission-statement";
import { Footer } from "@/components/footer";
import { AnalyticsScripts } from "@/components/analytics";
import { SkipToMain } from "@/components/skip-to-main";
import { ChatWidget } from "@/components/chat-widget";
import { HtmlLang } from "@/components/html-lang";
import { I18nProvider } from "@/i18n/context";
import { getDictionary, locales } from "@/i18n";
import type { Lang } from "@/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (locales.includes(langParam as Lang) ? langParam : "en") as Lang;
  const dict = getDictionary(lang);

  return (
    <I18nProvider dict={dict} lang={lang}>
      <HtmlLang lang={lang} />
      <SkipToMain />
      <Navbar />
      <MissionStatement />
      <main id="main-content">{children}</main>
      <Footer />
      <AnalyticsScripts />
      <ChatWidget />
    </I18nProvider>
  );
}
