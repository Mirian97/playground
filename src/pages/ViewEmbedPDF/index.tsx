import ViewSDKClient from "@/services/ViewSDKClient";
import { useLayoutEffect } from "react";

const ViewEmbedPDF = () => {
  useLayoutEffect(() => {
    const renderAdobeEmbedPDF = () => {
      const viewSDKClient = new ViewSDKClient();
      viewSDKClient
        .ready()
        .then(() => {
          viewSDKClient.previewFile(
            "pdf-div",
            "https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf",
            "Expert Biography.pdf",
            {
              embedMode: "SIZED_CONTAINER",
              focusOnRendering: true,
              enableLinearization: true,
            },
          );
        })
        .catch((error) => console.error(error));
    };
    renderAdobeEmbedPDF();
  }, []);

  return (
    <div className="h-screen w-full bg-red-100">
      <div id="pdf-div" />
    </div>
  );
};

export default ViewEmbedPDF;
