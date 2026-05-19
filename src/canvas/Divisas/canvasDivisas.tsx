/** @jsxRuntime automatic */
/** @jsxImportSource satori */
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { AttachmentBuilder, ColorResolvable } from "discord.js";
import { readFileSync } from "fs";
import axios from "axios";

const font     = readFileSync("./src/fonts/Inter-Regular.ttf");
const fontBold = readFileSync("./src/fonts/Inter-Bold.ttf");

type divisaData = {
  nombre: string;
  bandera: string;
  iso: string;
  img: string;
  color: ColorResolvable;
  gradient?: [ColorResolvable, ColorResolvable];
  gradientBox?: [ColorResolvable, ColorResolvable];
  simbolo: string;
  cantidadLabel: string;
  conversionDolares: number;
  compra: number;
  venta: number;
  iva: number;
  ganancias: number;
  totalImpuestos: number;
};

function formatARS(num: number): string {
  return num.toLocaleString("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// export async function generateDolarImage(
//   data: divisaData,
// ): Promise<AttachmentBuilder> {
//   const accent      = data.color.toString();
//   const color1      = data.gradient?.[0].toString()    ?? "#1e2a25";
//   const color2      = data.gradient?.[1].toString()    ?? "#151a17";
//   const box1        = data.gradientBox?.[0].toString() ?? "#2a3d35";
//   const box2        = data.gradientBox?.[1].toString() ?? "#252f2a";
//   const isUSD       = data.iso === "USD";
//   const width       = 900;
//   const height      = isUSD ? 630 : 680;

//   // Imagen de la divisa en base64
//   let imgBase64: string | null = null;
//   try {
//     const response = await axios.get(data.img, { responseType: "arraybuffer" });
//     imgBase64 = `data:image/png;base64,${Buffer.from(response.data).toString("base64")}`;
//   } catch {
//     console.error("Error cargando imagen de divisa");
//   }

//   // const svg = await satori(
//   //   <div style={{
//   //     width: "100%", height: "100%",
//   //     background: `linear-gradient(to bottom, ${color1}, ${color2})`,
//   //     padding: "30px",
//   //     fontFamily: "Inter",
//   //     display: "flex",
//   //     flexDirection: "column",
//   //     gap: "16px",
//   //     boxSizing: "border-box",
//   //   }}>

//   //     {/* ── HEADER ── */}
//   //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
//   //       <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//   //         <span style={{ fontSize: 32, fontWeight: "bold", color: "#fff" }}>
//   //           {data.nombre}
//   //         </span>
//   //         <span style={{ fontSize: 24, color: "#fff" }}>
//   //           {data.iso} — {data.simbolo}
//   //         </span>
//   //       </div>
//   //       {imgBase64 && (
//   //         <img src={imgBase64} width={50} height={50}
//   //           style={{ borderRadius: 4, objectFit: "cover" }} />
//   //       )}
//   //     </div>

//   //     {/* ── EQUIVALENCIA (solo si no es USD) ── */}
//   //     {!isUSD && (
//   //       <div style={{
//   //         background: box1, borderRadius: 10,
//   //         padding: "10px 15px", display: "flex",
//   //         alignItems: "center", gap: "8px",
//   //       }}>
//   //         <span style={{ fontSize: 16, color: "#e5e7e6" }}>Equivalencia:</span>
//   //         <span style={{ fontSize: 16, fontWeight: "bold", color: accent }}>
//   //           1 USD = {formatARS(data.conversionDolares)} {data.iso}
//   //         </span>
//   //       </div>
//   //     )}

//   //     {/* ── COTIZACIÓN OFICIAL ── */}
//   //     <span style={{ fontSize: 22, fontWeight: "bold", color: accent, display: "flex" }}>
//   //       🏛 COTIZACIÓN OFICIAL
//   //     </span>

//   //     {/* ── BOXES: COMPRA | VENTA ── */}
//   //     <div style={{ display: "flex", gap: "20px" }}>
//   //       {[
//   //         { label: "COMPRA", value: data.compra },
//   //         { label: "VENTA",  value: data.venta  },
//   //       ].map(({ label, value }) => (
//   //         <div key={label} style={{
//   //           flex: 1, background: box2, borderRadius: 12,
//   //           borderLeft: `6px solid ${accent}`,
//   //           padding: "16px 20px", display: "flex",
//   //           flexDirection: "column", gap: "10px",
//   //         }}>
//   //           <span style={{ fontSize: 16, color: "#e5e7e6" }}>{label}</span>
//   //           <span style={{ fontSize: 24, fontWeight: "bold", color: accent }}>
//   //             ARS ${formatARS(value)}
//   //           </span>
//   //         </div>
//   //       ))}
//   //     </div>

//   //     {/* ── IMPUESTOS NACIONALES ── */}
//   //     <span style={{ fontSize: 20, fontWeight: "bold", color: accent, display: "flex" }}>
//   //       📄 IMPUESTOS NACIONALES
//   //     </span>

//   //     {/* ── BOXES: IVA | GANANCIAS ── */}
//   //     <div style={{ display: "flex", gap: "20px" }}>

//   //       {/* IVA */}
//   //       <div style={{
//   //         flex: 1, background: box2, borderRadius: 12,
//   //         borderLeft: `6px solid ${accent}`,
//   //         padding: "16px 20px", display: "flex",
//   //         flexDirection: "column", gap: "8px",
//   //       }}>
//   //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//   //           <span style={{ fontSize: 16, color: "#e5e7e6" }}>IVA</span>
//   //           <span style={{
//   //             background: "#3d4a44", borderRadius: 6,
//   //             padding: "2px 10px", fontSize: 14,
//   //             fontWeight: "bold", color: accent,
//   //           }}>21%</span>
//   //         </div>
//   //         <span style={{ fontSize: 24, fontWeight: "bold", color: accent }}>
//   //           ARS ${formatARS(data.iva)}
//   //         </span>
//   //         <span style={{ fontSize: 12, color: "#6b7c75" }}>
//   //           Servicios digitales: Netflix, Spotify, iCloud
//   //         </span>
//   //         <span style={{ fontSize: 12, color: "#6b7c75" }}>
//   //           Videojuegos (Steam, Xbox, PS) están exentos de ganancias
//   //         </span>
//   //       </div>

//   //       {/* GANANCIAS */}
//   //       <div style={{
//   //         flex: 1, background: box2, borderRadius: 12,
//   //         borderLeft: `6px solid ${accent}`,
//   //         padding: "16px 20px", display: "flex",
//   //         flexDirection: "column", gap: "8px",
//   //       }}>
//   //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//   //           <span style={{ fontSize: 16, color: "#e5e7e6" }}>GANANCIAS</span>
//   //           <span style={{
//   //             background: "#3d4a44", borderRadius: 6,
//   //             padding: "2px 10px", fontSize: 14,
//   //             fontWeight: "bold", color: accent,
//   //           }}>30%</span>
//   //         </div>
//   //         <span style={{ fontSize: 24, fontWeight: "bold", color: accent }}>
//   //           ARS ${formatARS(data.ganancias)}
//   //         </span>
//   //         <span style={{ fontSize: 12, color: "#6b7c75" }}>
//   //           Compras en moneda extranjera no digitales
//   //         </span>
//   //         <span style={{ fontSize: 12, color: "#6b7c75" }}>
//   //           Evitable pagando con USD en TC bancarias
//   //         </span>
//   //       </div>
//   //     </div>

//   //     {/* ── PERCEPCIÓN + IVA TOTAL ── */}
//   //     <div style={{
//   //       background: `linear-gradient(to right, ${box1}, ${box2})`,
//   //       borderRadius: 12, padding: "14px 20px",
//   //       display: "flex", justifyContent: "space-between", alignItems: "center",
//   //     }}>
//   //       <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//   //         <span style={{ fontSize: 18, fontWeight: "bold", color: "#e5e7e6" }}>
//   //           PERCEPCIÓN + IVA (51%)
//   //         </span>
//   //         <span style={{ fontSize: 14, color: "#6b7c75" }}>
//   //           Servicios digitales no exentos pagados con tarjeta en pesos
//   //         </span>
//   //       </div>
//   //       <span style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
//   //         ARS ${formatARS(data.totalImpuestos)}
//   //       </span>
//   //     </div>

//   //     {/* ── NOTA INFORMATIVA ── */}
//   //     <div style={{
//   //       background: "#1a1f1c", borderRadius: 10,
//   //       padding: "12px 16px", display: "flex",
//   //       alignItems: "flex-start", gap: "12px",
//   //     }}>
//   //       <div style={{
//   //         background: "#3d4a44", borderRadius: "50%",
//   //         width: 28, height: 28, display: "flex",
//   //         alignItems: "center", justifyContent: "center",
//   //         flexShrink: 0,
//   //       }}>
//   //         <span style={{ fontSize: 16, fontWeight: "bold", color: "#6b7c75" }}>i</span>
//   //       </div>
//   //       <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//   //         <span style={{ fontSize: 13, color: "#6b7c75" }}>
//   //           Algunas tarjetas no cobran percepciones. También podés evitarlas pagando con dólares
//   //           en débito o saldando el resumen de tu tarjeta de crédito en USD antes del vencimiento.
//   //         </span>
//   //         <span style={{ fontSize: 13, color: "#6b7c75" }}>
//   //           Para más información, pulsa el botón de Guía de Impuestos.
//   //         </span>
//   //       </div>
//   //     </div>

//   //   </div>,
//   //   {
//   //     width,
//   //     height,
//   //     fonts: [
//   //       { name: "Inter", data: font,     weight: 400, style: "normal" },
//   //       { name: "Inter", data: fontBold, weight: 700, style: "normal" },
//   //     ],
//   //   },
//   // );

//   // const resvg  = new Resvg(svg, { fitTo: { mode: "width", value: width } });
//   // const buffer = Buffer.from(resvg.render().asPng());

//   // return new AttachmentBuilder(buffer, { name: "cotizacion-moderna.png" });
// }
