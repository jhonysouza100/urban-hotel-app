import Script from "next/script";
import config from "@/config";

function AdSenseScript() {
  const pId = config.GOOGLE_PUB_ID;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
export default AdSenseScript;
