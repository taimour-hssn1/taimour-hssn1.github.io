// Paste this temporarily in any component, e.g. App.jsx
import { useState } from "react";

const chars = " .:-=+*#%@".split("");

const GenerateAsciiData = () => {
  const [status, setStatus] = useState("idle");

  const generate = () => {
    setStatus("processing...");
    const sizes = [220, 280, 400];
    const result = {};
    let processed = 0;

    sizes.forEach((targetSize) => {
      const img = new Image();
      img.src = "/profile.jpeg"; // your image path
      img.onload = () => {
        const offscreen = document.createElement("canvas");
        offscreen.width = targetSize;
        offscreen.height = targetSize;
        const offCtx = offscreen.getContext("2d");

        const scale = 0.8;
        const imgAspect = img.width / img.height;
        let drawHeight = targetSize * scale;
        let drawWidth = drawHeight * imgAspect;

        if (drawWidth > targetSize * scale) {
          drawWidth = targetSize * scale;
          drawHeight = drawWidth / imgAspect;
        }

        const offsetX = (targetSize - drawWidth) / 2;
        const offsetY = (targetSize - drawHeight) / 2;

        offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        const pixels = offCtx.getImageData(0, 0, targetSize, targetSize).data;

        const isMobileSize = targetSize <= 280;
        const fontSize = isMobileSize ? 5 : 7;
        const colGap = fontSize * 0.7;
        const rowGap = fontSize * 1.1;
        const raw = [];

        for (let y = 0; y < targetSize; y += rowGap) {
          for (let x = 0; x < targetSize; x += colGap) {
            const i = (Math.floor(y) * targetSize + Math.floor(x)) * 4;
            if (pixels[i + 3] > 128) {
              const r = pixels[i], g = pixels[i+1], b = pixels[i+2];
              const brightness = (r + g + b) / (3 * 255);
              raw.push({
                x: Number(x.toFixed(1)),
                y: Number(y.toFixed(1)),
                char: chars[Math.floor(brightness * (chars.length - 1))],
                alpha: Number((0.4 + brightness * 0.6).toFixed(2)),
              });
            }
          }
        }

        result[targetSize] = raw;
        processed++;

        // All 3 sizes done — download the file
        if (processed === sizes.length) {
          const content = `export const asciiData = ${JSON.stringify(result, null, 2)};\n`;
          const blob = new Blob([content], { type: "text/javascript" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "asciiData.js";
          a.click();
          URL.revokeObjectURL(url);
          setStatus("done! check your downloads.");
        }
      };
    });
  };

  return (
    <button onClick={generate} style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}>
      {status === "idle" ? "Generate asciiData.js" : status}
    </button>
  );
};

export default GenerateAsciiData;