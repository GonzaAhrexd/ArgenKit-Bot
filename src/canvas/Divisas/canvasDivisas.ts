import { createCanvas, loadImage } from 'canvas';
import { AttachmentBuilder, ColorResolvable } from 'discord.js';
import axios from 'axios';

import addTextCanvas from '../CanvasFunctions/AddTextCanvas';
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
}
                  
// Función helper para dibujar rectángulos redondeados
function roundRect(ctx: any, x: number, y: number, w: number, h: number, r: number) {
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

// Función para formatear números como moneda argentina
function formatARS(num: number): string {
    return num.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export async function generateDolarImage(data: divisaData): Promise<AttachmentBuilder> {
    const width = 900;
    const height = data.iso !== 'USD' ? 680 : 630;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    const padding = 30;

    // --- FONDO PRINCIPAL (Gradiente oscuro) ---
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
   
    const color1 = data.gradient ? data.gradient[0].toString() : '#1e2a25';
    const color2 = data.gradient ? data.gradient[1].toString() : '#151a17';

    const gradientBox1 = data.gradientBox ? data.gradientBox[0].toString() : '#2a3d35';
    const gradientBox2 = data.gradientBox ? data.gradientBox[1].toString() : "#252f2a";

    bgGradient.addColorStop(0, color1);
    bgGradient.addColorStop(1, color2);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // --- HEADER: Título ---
    let yPos = 45;
    
    // // Título principal
    addTextCanvas(ctx, 'bold 32px sans-serif', '#FFFFFF', `${data.nombre}`, padding, yPos);
    addTextCanvas(ctx, '24px sans-serif', '#FFFFFF', `${data.iso} - ${data.simbolo}`, padding, yPos + 28);

    // Cargar imagen de la divisa
    try {
        const response = await axios.get(data.img, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        const bandera = await loadImage(buffer);
        ctx.drawImage(bandera, width - padding - 60, yPos - 10, 50, 50);
    } catch (error) {
        console.error('Error cargando imagen:', error);
    }

    // --- SECCIÓN: EQUIVALENCIA EN DÓLARES (solo si no es USD) ---
    if (data.iso !== 'USD') {
        yPos += 45;
        ctx.fillStyle = gradientBox1;
        roundRect(ctx, padding, yPos, width - padding * 2, 40, 10);
        ctx.fill();
        
        // Texto "Equivalencia" a la izquierda
        addTextCanvas(ctx, '16px sans-serif', '#e5e7e6', 'Equivalencia:', padding + 15, yPos + 26);
        // Texto de conversión a la derecha
        addTextCanvas(ctx, 'bold 16px sans-serif', data.color.toString(), `1 USD = ${formatARS(data.conversionDolares)} ${data.iso}`, padding + 120, yPos + 26);
    }

    // --- SECCIÓN: COTIZACIÓN OFICIAL ---
    yPos += data.iso !== 'USD' ? 75 : 70;
    
    // Icono banco clásico con techo triangular y columnas
    const bankX = padding;
    const bankY = yPos - 20;
    const bankColor = data.color.toString();
    
    // Techo triangular
    ctx.fillStyle = bankColor;
    ctx.beginPath();
    ctx.moveTo(bankX + 14, bankY);           // Punta superior
    ctx.lineTo(bankX + 28, bankY + 10);      // Esquina derecha
    ctx.lineTo(bankX, bankY + 10);           // Esquina izquierda
    ctx.closePath();
    ctx.fill();
    
    // Base del techo
    ctx.fillRect(bankX - 2, bankY + 10, 32, 3);
    
    // Columnas (3 columnas)
    ctx.fillRect(bankX + 2, bankY + 13, 4, 12);
    ctx.fillRect(bankX + 12, bankY + 13, 4, 12);
    ctx.fillRect(bankX + 22, bankY + 13, 4, 12);
    
    // Base inferior
    ctx.fillRect(bankX - 2, bankY + 25, 32, 3);
    
    addTextCanvas(ctx, 'bold 22px sans-serif', data.color.toString(), 'COTIZACIÓN OFICIAL', padding + 40, yPos);
 
    // --- BOXES: COMPRA Y VENTA ---
    yPos += 25;
    const boxWidth = (width - padding * 2 - 20) / 2;
    const boxHeight = 80;
    
    // Box COMPRA
    ctx.fillStyle = gradientBox2;
    roundRect(ctx, padding, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = data.color.toString().toString();
    roundRect(ctx, padding, yPos, 6, boxHeight, 3);
    ctx.fill();
    
    // COMPRA
    addTextCanvas(ctx, '16px sans-serif', '#e5e7e6', 'COMPRA', padding + 20, yPos + 28);
    addTextCanvas(ctx, 'bold 24px sans-serif', data.color.toString(), `ARS $${formatARS(data.compra)}`, padding + 20, yPos + 58);
 
    // Box VENTA
    const ventaX = padding + boxWidth + 20;
    ctx.fillStyle = gradientBox2;
    roundRect(ctx, ventaX, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = data.color.toString();
    roundRect(ctx, ventaX, yPos, 6, boxHeight, 3);
    ctx.fill();
    
    addTextCanvas(ctx, '16px sans-serif', '#e5e7e6', 'VENTA', ventaX + 20, yPos + 28);
    addTextCanvas(ctx, 'bold 24px sans-serif', data.color.toString(), `ARS $${formatARS(data.venta)}`, ventaX + 20, yPos + 58);
   
    // --- SECCIÓN: IMPUESTOS NACIONALES ---
    yPos += boxHeight + 40;
    
    // Icono calculadora/documento fiscal
    const docX = padding;
    const docY = yPos - 22;
    const docColor = data.color.toString();
    
    // Cuerpo del documento
    ctx.fillStyle = docColor;
    roundRect(ctx, docX, docY, 26, 30, 4);
    ctx.fill();
    
    // Esquina doblada (triángulo)
    ctx.fillStyle = color1;
    ctx.beginPath();
    ctx.moveTo(docX + 18, docY);
    ctx.lineTo(docX + 26, docY);
    ctx.lineTo(docX + 26, docY + 8);
    ctx.closePath();
    ctx.fill();
    
    // Líneas de texto
    ctx.fillStyle = color1;
    ctx.fillRect(docX + 5, docY + 12, 16, 2);
    ctx.fillRect(docX + 5, docY + 17, 12, 2);
    ctx.fillRect(docX + 5, docY + 22, 14, 2);
    
    addTextCanvas(ctx, 'bold 20px sans-serif', data.color.toString(), 'IMPUESTOS NACIONALES', padding + 35, yPos); 

    // --- BOXES: IVA Y GANANCIAS ---
    yPos += 25;
    const taxBoxHeight = 105;
    
    // Box IVA
    ctx.fillStyle = gradientBox2;
    roundRect(ctx, padding, yPos, boxWidth, taxBoxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = data.color.toString();
    roundRect(ctx, padding, yPos, 6, taxBoxHeight, 3);
    ctx.fill();
    
    // Label IVA
    addTextCanvas(ctx, '16px sans-serif', '#e5e7e6', 'IVA', padding + 20, yPos + 28);
    
    // Badge 21% (alineado a la derecha)
    const badge21X = padding + boxWidth - 65;
    ctx.fillStyle = '#3d4a44';
    roundRect(ctx, badge21X, yPos + 12, 45, 22, 6);
    ctx.fill();
    addTextCanvas(ctx, 'bold 14px sans-serif', data.color.toString(), `21%`, badge21X + 8, yPos + 28);
    
    addTextCanvas(ctx, 'bold 24px sans-serif', data.color.toString(), `ARS $${formatARS(data.iva)}`, padding + 20, yPos + 58);
    addTextCanvas(ctx, '12px sans-serif', '#6b7c75', 'Servicios digitales: Netflix, Spotify, iCloud', padding + 20, yPos + 78);
    addTextCanvas(ctx, '12px sans-serif', '#6b7c75', 'Videojuegos (Steam, Xbox, PS) están exentos de ganancias', padding + 20, yPos + 92);
   
    
    // Box GANANCIAS
    ctx.fillStyle = gradientBox2;
    roundRect(ctx, ventaX, yPos, boxWidth, taxBoxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = data.color.toString();
    roundRect(ctx, ventaX, yPos, 6, taxBoxHeight, 3);
    ctx.fill();
    
    // Label Percepción de Ganancias
    addTextCanvas(ctx, '16px sans-serif', '#e5e7e6', 'GANANCIAS', ventaX + 20, yPos + 28);
    
    // Badge 30% (alineado a la derecha)
    const badge30X = ventaX + boxWidth - 65;
    ctx.fillStyle = '#3d4a44';
    roundRect(ctx, badge30X, yPos + 12, 45, 22, 6);
    ctx.fill();
    addTextCanvas(ctx, 'bold 14px sans-serif', data.color.toString(), `30%`, badge30X + 8, yPos + 28);
    
    addTextCanvas(ctx, 'bold 24px sans-serif', data.color.toString(), `ARS $${formatARS(data.ganancias)}`, ventaX + 20, yPos + 58);
    addTextCanvas(ctx, '12px sans-serif', '#6b7c75', 'Compras en moneda extranjera no digitales', ventaX + 20, yPos + 78);
    addTextCanvas(ctx, '12px sans-serif', '#6b7c75', 'Evitable pagando con USD en TC bancarias', ventaX + 20, yPos + 92);

    
  

    // --- BOX FINAL: PERCEPCIÓN + IVA ---
    yPos += taxBoxHeight + 25;
    const finalBoxHeight = 75;
    const finalBoxWidth = width - padding * 2;
    
    // Fondo con gradiente verde sutil
    const finalGradient = ctx.createLinearGradient(padding, yPos, padding + finalBoxWidth, yPos);
    finalGradient.addColorStop(0, gradientBox1);
    finalGradient.addColorStop(1, gradientBox2);
    ctx.fillStyle = finalGradient;
    roundRect(ctx, padding, yPos, finalBoxWidth, finalBoxHeight, 12);
    ctx.fill();
    
   
    
    // Texto izquierdo
    addTextCanvas(ctx, 'bold 18px sans-serif', "#e5e7e6", 'PERCEPCIÓN + IVA (51%)', padding + 20, yPos + 32); 
    addTextCanvas(ctx, '16px sans-serif', '#6b7c75', 'Servicios digitales no exentos pagados con tarjeta en pesos', padding + 20, yPos + 52); 

    
    // Valor grande a la derecha
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    const totalText = `ARS $${formatARS(data.totalImpuestos)}`;
    const totalWidth = ctx.measureText(totalText).width;

    addTextCanvas(ctx, 'bold 28px sans-serif', '#FFFFFF', totalText, width - padding - totalWidth - 20, yPos + 48);

    // --- BOX INFORMATIVO: CÓMO EVITAR PERCEPCIONES ---
    yPos += finalBoxHeight + 15;
    const infoBoxHeight = 70;
    
    ctx.fillStyle = '#1a1f1c';
    roundRect(ctx, padding, yPos, finalBoxWidth, infoBoxHeight, 10);
    ctx.fill();
    
    // Icono de información (círculo con i)
    const infoX = padding + 18;
    const infoY = yPos + infoBoxHeight / 2;
    ctx.beginPath();
    ctx.arc(infoX, infoY, 12, 0, Math.PI * 2);
    ctx.fillStyle = '#3d4a44';
    ctx.fill();
    addTextCanvas(ctx, 'bold 16px sans-serif', '#6b7c75', 'i', infoX - 3, infoY + 6);
    
    // Texto informativo
    addTextCanvas(ctx, '13px sans-serif', '#6b7c75', 'Algunas tarjetas no cobran percepciones. También podés evitarlas pagando con dólares', padding + 45, yPos + 24);
    addTextCanvas(ctx, '13px sans-serif', '#6b7c75', 'en débito o saldando el resumen de tu tarjeta de crédito en USD antes del vencimiento.', padding + 45, yPos + 42);
    addTextCanvas(ctx, '13px sans-serif', '#6b7c75', 'Para más información, pulsa el botón de Guía de Impuestos.', padding + 45, yPos + 60);

    const buffer = canvas.toBuffer('image/png');
    return new AttachmentBuilder(buffer, { name: 'cotizacion-moderna.png' });
}