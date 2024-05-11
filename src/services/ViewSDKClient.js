class ViewSDKClient {
  constructor() {
    this.readyPromise = new Promise((resolve) => {
      if (window.AdobeDC) {
        resolve();
      } else {
        document.addEventListener("adobe_dc_view_sdk.ready", () => {
          resolve();
        });
      }
    });
    this.adobeDCView = undefined;
  }

  ready() {
    return this.readyPromise;
  }

  previewFile(divId, fileUrl, fileName, viewerConfig) {
    const config = {
      clientId: "5854e423c45d40e0a261a1907fb4db96",
      locale: "pt-BR",
    };
    if (divId) {
      config.divId = divId;
    }
    this.adobeDCView = new window.AdobeDC.View(config);

    const previewFilePromise = this.adobeDCView.previewFile(
      {
        content: {
          location: {
            url: fileUrl,
          },
        },
        metaData: {
          fileName,
          hasReadOnlyAccess: true,
        },
      },
      viewerConfig,
    );
    return previewFilePromise;
  }

  previewFileUsingFilePromise(divId, filePromise, fileName) {
    this.adobeDCView = new window.AdobeDC.View({
      clientId: "5854e423c45d40e0a261a1907fb4db96",
      divId,
    });

    this.adobeDCView.previewFile(
      {
        content: {
          promise: filePromise,
        },
        metaData: {
          fileName: fileName,
        },
      },
      {},
    );
  }
}

export default ViewSDKClient;
