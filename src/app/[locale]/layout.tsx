
import {Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';


const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: Promise<{locale:string}>;
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error)
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'am'].map((locale) => ({locale}));
}

export async function generateMetadata(props:Omit<Props,'children'>) {
  const {locale} =await props.params;
  
  const messages = await getMessages(locale);

 
  const t = createTranslator({locale, messages});

  return {
    title: t('LocaleLayout.title')
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const{locale}=await params;
  const messages = await getMessages(locale);

  return (
    <html className="" lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
       
          {children}
        
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
