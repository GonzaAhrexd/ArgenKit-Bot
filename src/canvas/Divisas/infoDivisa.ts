import { createCanvas, loadImage } from "canvas";
import { AttachmentBuilder, ColorResolvable } from "discord.js";

import addTextCanvas from "../CanvasFunctions/AddTextCanvas";
import creditosArgenkit from "../CanvasFunctions/CreditosArgenkit";

type divisaData = {
  nombre: string;
  bandera: string;
  iso: string;
  img: string;
  color: ColorResolvable;
  gradient?: [ColorResolvable, ColorResolvable];
  gradientBox?: [ColorResolvable, ColorResolvable];
  simbolo: string;
  descripcion: string;
  ac: string;
  paises: string;
  billetes: string;
  monedas: string;
  inflacion: string;
  emisor: string;
};

// Helper: rectángulo redondeado
function roundRect(
  ctx: any,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Helper: texto alineado al centro horizontal del box, baseline = top
function drawCenteredText(
  ctx: any,
  text: string,
  font: string,
  color: string,
  boxX: number,
  boxW: number,
  y: number,
) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(text, boxX + boxW / 2, y);
  ctx.restore();
}

// Helper: texto alineado a la izquierda, baseline = top
function drawLeftText(
  ctx: any,
  text: string,
  font: string,
  color: string,
  x: number,
  y: number,
) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(text, x, y);
  ctx.restore();
}

// Helper: texto envuelto, centrado dentro de un box
function drawWrappedCentered(
  ctx: any,
  text: string,
  font: string,
  color: string,
  boxX: number,
  boxW: number,
  startY: number,
  lineHeight: number,
  maxWidth: number,
): number {
  const lines = wrapText(ctx, text, font, maxWidth);
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (const line of lines) {
    ctx.fillText(line, boxX + boxW / 2, startY);
    startY += lineHeight;
  }
  ctx.restore();
  return startY;
}

export async function generateInfoDivisa(
  data: divisaData,
): Promise<AttachmentBuilder> {
  const width = 1200;
  const height = 1000;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  const padding = 30;
  const maxWidth = width - padding * 2;

  // Colores
  const color1 = data.gradient ? data.gradient[0].toString() : "#1e2a25";
  const color2 = data.gradient ? data.gradient[1].toString() : "#151a17";
  const gradientBox1 = data.gradientBox ? data.gradientBox[0].toString() : "#2a3d35";
  const gradientBox2 = data.gradientBox ? data.gradientBox[1].toString() : "#252f2a";
  const accentColor = data.color.toString();

  // --- FONDO ---
  const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
  bgGradient.addColorStop(0, color1);
  bgGradient.addColorStop(1, color2);
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // ─────────────────────────────────────────
  // HEADER: Título y subtítulo (alineados a la izquierda)
  // ─────────────────────────────────────────
  let yPos = 35;

  drawLeftText(ctx, data.nombre, "bold 42px sans-serif", "#FFFFFF", padding, yPos);
  drawLeftText(ctx, `${data.iso} — ${data.simbolo}`, "22px sans-serif", "#e5e7e6", padding, yPos + 50);

  // ─────────────────────────────────────────
  // DESCRIPCIÓN (caja centrada, texto wrapeado centrado)
  // ─────────────────────────────────────────
  yPos += 100;
  const descLines = wrapText(ctx, data.descripcion, "18px sans-serif", maxWidth - 40);
  const descLineHeight = 24;
  const descPadV = 16;
  const descHeight = descLines.length * descLineHeight + descPadV * 2;

  ctx.fillStyle = gradientBox1;
  roundRect(ctx, padding, yPos, maxWidth, descHeight, 10);
  ctx.fill();

  drawWrappedCentered(
    ctx,
    data.descripcion,
    "18px sans-serif",
    "#e5e7e6",
    padding,
    maxWidth,
    yPos + descPadV,
    descLineHeight,
    maxWidth - 40,
  );

  // ─────────────────────────────────────────
  // ACUÑACIÓN (etiqueta accent izquierda, valor centrado)
  // ─────────────────────────────────────────
  yPos += descHeight + 28;

  drawLeftText(ctx, "ACUÑACIÓN", "bold 22px sans-serif", accentColor, padding, yPos);
  yPos += 30;
  drawCenteredText(ctx, data.ac, "24px sans-serif", "#FFFFFF", padding, maxWidth, yPos);

  // ─────────────────────────────────────────
  // BOXES: Código ISO  |  Símbolo
  // ─────────────────────────────────────────
  yPos += 40;
  const boxW = (maxWidth - 20) / 2;
  const boxH = 80;
  const box2X = padding + boxW + 20;

  // Box ISO
  ctx.fillStyle = gradientBox2;
  roundRect(ctx, padding, yPos, boxW, boxH, 10);
  ctx.fill();
  ctx.fillStyle = accentColor;
  roundRect(ctx, padding, yPos, 6, boxH, 3);
  ctx.fill();

  drawCenteredText(ctx, "Código ISO", "18px sans-serif", "#e5e7e6", padding, boxW, yPos + 10);
  drawCenteredText(ctx, data.iso, "bold 32px sans-serif", accentColor, padding, boxW, yPos + 38);

  // Box Símbolo
  ctx.fillStyle = gradientBox2;
  roundRect(ctx, box2X, yPos, boxW, boxH, 10);
  ctx.fill();
  ctx.fillStyle = accentColor;
  roundRect(ctx, box2X, yPos, 6, boxH, 3);
  ctx.fill();

  drawCenteredText(ctx, "Símbolo", "18px sans-serif", "#e5e7e6", box2X, boxW, yPos + 10);
  drawCenteredText(ctx, data.simbolo, "bold 32px sans-serif", accentColor, box2X, boxW, yPos + 38);

  // ─────────────────────────────────────────
  // BOXES: Billetes  |  Monedas
  // ─────────────────────────────────────────
  yPos += boxH + 18;
  const billH = 90;

  // Box Billetes
  ctx.fillStyle = gradientBox2;
  roundRect(ctx, padding, yPos, boxW, billH, 10);
  ctx.fill();
  ctx.fillStyle = accentColor;
  roundRect(ctx, padding, yPos, 6, billH, 3);
  ctx.fill();

  drawCenteredText(ctx, "Billetes 🧾", "bold 18px sans-serif", accentColor, padding, boxW, yPos + 10);
  drawWrappedCentered(
    ctx, data.billetes, "16px sans-serif", "#e5e7e6",
    padding, boxW, yPos + 36, 20, boxW - 24,
  );

  // Box Monedas
  ctx.fillStyle = gradientBox2;
  roundRect(ctx, box2X, yPos, boxW, billH, 10);
  ctx.fill();
  ctx.fillStyle = accentColor;
  roundRect(ctx, box2X, yPos, 6, billH, 3);
  ctx.fill();

  drawCenteredText(ctx, "Monedas 🪙", "bold 18px sans-serif", accentColor, box2X, boxW, yPos + 10);
  drawWrappedCentered(
    ctx, data.monedas, "16px sans-serif", "#e5e7e6",
    box2X, boxW, yPos + 36, 20, boxW - 24,
  );

  // ─────────────────────────────────────────
  // INFLACIÓN
  // ─────────────────────────────────────────
  yPos += billH + 18;
  const inflH = 68;

  ctx.fillStyle = gradientBox1;
  roundRect(ctx, padding, yPos, maxWidth, inflH, 10);
  ctx.fill();

  drawLeftText(ctx, "Inflación anual", "18px sans-serif", "#e5e7e6", padding + 16, yPos + 12);
  drawCenteredText(ctx, data.inflacion, "bold 28px sans-serif", "#FFFFFF", padding, maxWidth, yPos + 36);

  // ─────────────────────────────────────────
  // EMISOR
  // ─────────────────────────────────────────
  yPos += inflH + 18;
  const emisorH = 58;

  ctx.fillStyle = gradientBox2;
  roundRect(ctx, padding, yPos, maxWidth, emisorH, 10);
  ctx.fill();
  ctx.fillStyle = accentColor;
  roundRect(ctx, padding, yPos, 6, emisorH, 3);
  ctx.fill();

  drawLeftText(ctx, "Emisor 🏦", "bold 18px sans-serif", accentColor, padding + 16, yPos + 10);
  drawCenteredText(ctx, data.emisor, "20px sans-serif", "#e5e7e6", padding, maxWidth, yPos + 34);

  // ─────────────────────────────────────────
  // CRÉDITOS
  // ─────────────────────────────────────────
  await creditosArgenkit(ctx, padding, height - 30);

  const buffer = canvas.toBuffer("image/png");
  return new AttachmentBuilder(buffer, { name: "info-divisa.png" });
}

// Helper: envuelve texto respetando maxWidth
function wrapText(
  ctx: any,
  text: string,
  font: string,
  maxWidth: number,
): string[] {
  ctx.font = font;
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth) {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}