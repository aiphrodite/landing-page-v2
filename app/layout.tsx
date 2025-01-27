import './css/style.css'
import Script from 'next/script'
import Header from '@/components/ui/header'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Start of LinkedIn Insight Tag Code --> */}
        <Script id="linkedin-insight-tag">
          {`
            _linkedin_partner_id = '6703628';
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);

            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName('script')[0];
              var b = document.createElement('script');
              b.type = 'text/javascript';
              b.async = true;
              b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        {/* <!-- End of LinkedIn Insight Tag Code --> */}
        {/* <!-- Start of HubSpot Embed Code --> */}
        <Script id="hs-script-loader" async defer src="//js.hs-scripts.com/45658506.js"></Script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6703628&fmt=gif"
            loading="lazy"
          />
        </noscript>
      </body>
    </html>
  )
}