import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function BookMeeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <button
      data-cal-link="maktouch/15min"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Book a meeting
    </button>
  );
}
