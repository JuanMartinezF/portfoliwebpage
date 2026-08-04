import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: "Juan Carlos Martínez — Data Scientist & AI Engineer",
  description: "Portfolio of Juan Carlos Martínez Fernández — Data Scientist & AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision and large-scale data acquisition.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="dark">
      <head>
        {/*
          Inline script avoids flash-of-wrong-theme (FOWT).
          Runs synchronously before any paint, reads localStorage
          and sets data-theme before React hydrates.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('nb-theme');
                if (t) document.documentElement.setAttribute('data-theme', t);
              } catch(e) {}
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=DM+Sans:opsz,wght@9..40,400;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
