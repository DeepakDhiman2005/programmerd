// Adsense
import { Adsense } from "@ctrl/react-adsense";

const Ads = () => {
    return <div className="adsbygoogle">
    {/* <!-- myAds --> */}
    {/* <ins className="adsbygoogle"
        style={{display: "block"}}
        data-ad-client="ca-pub-2256609026395082"
        data-ad-slot="9162336199"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins> */}

      <Adsense
        client="ca-pub-2256609026395082"
        slot="9162336199"
        style={{ display: "block" }}
        layout="in-article"
        format="auto"
        responsive="true"
      />
    </div>
}

export default Ads;