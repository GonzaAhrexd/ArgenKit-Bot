import { createCanvas } from 'canvas';
import { AttachmentBuilder } from 'discord.js';

interface DolarData {
    nombre: string;
    bandera: string; 
    iso: string;
    cantidadLabel: string; 
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

export async function generateDolarImage(data: DolarData): Promise<AttachmentBuilder> {
    const width = 650;
    const height = 850;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    const padding = 35;

    // --- FONDO PRINCIPAL (Gradiente oscuro) ---
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
    bgGradient.addColorStop(0, '#1e2a25');
    bgGradient.addColorStop(1, '#151a17');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // --- HEADER: Título y emoji ---
    let yPos = 55;
    
    // Título principal
    ctx.font = 'bold 36px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${data.nombre} ${data.iso}`, padding, yPos);
    
    // Emoji verde (círculo con carita)
    const emojiX = width - padding - 40;
    const emojiY = yPos - 18;
    ctx.beginPath();
    ctx.arc(emojiX, emojiY, 28, 0, Math.PI * 2);
    ctx.fillStyle = '#43B581';
    ctx.fill();
    // Ojos
    ctx.fillStyle = '#1a1c1e';
    ctx.beginPath();
    ctx.arc(emojiX - 9, emojiY - 5, 5, 0, Math.PI * 2);
    ctx.arc(emojiX + 9, emojiY - 5, 5, 0, Math.PI * 2);
    ctx.fill();
    // Sonrisa
    ctx.beginPath();
    ctx.arc(emojiX, emojiY + 4, 12, 0.1 * Math.PI, 0.9 * Math.PI);
    ctx.strokeStyle = '#1a1c1e';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Subtítulo
    yPos += 35;
    ctx.font = '20px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('Actualización en tiempo real', padding, yPos);

    // --- SECCIÓN: COTIZACIÓN OFICIAL ---
    yPos += 50;
    
    // Icono banco (cuadrado con columnas)
    ctx.fillStyle = '#43B581';
    ctx.fillRect(padding, yPos - 18, 28, 22);
    ctx.fillStyle = '#1e2a25';
    ctx.fillRect(padding + 6, yPos - 12, 5, 16);
    ctx.fillRect(padding + 17, yPos - 12, 5, 16);
    
    ctx.font = 'bold 22px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText('COTIZACIÓN OFICIAL', padding + 40, yPos);
    
    yPos += 32;
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('Valor del Dólar en pesos argentinos bajo esquema de flotación entre', padding, yPos);
    yPos += 26;
    ctx.fillText('bandas.', padding, yPos);

    // --- BOXES: COMPRA Y VENTA ---
    yPos += 40;
    const boxWidth = (width - padding * 2 - 25) / 2;
    const boxHeight = 115;
    
    // Box COMPRA
    ctx.fillStyle = '#252f2a';
    roundRect(ctx, padding, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = '#43B581';
    roundRect(ctx, padding, yPos, 6, boxHeight, 3);
    ctx.fill();
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('COMPRA', padding + 25, yPos + 35);
    
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText(`ARS $${formatARS(data.compra)}`, padding + 25, yPos + 80);
    
    // Box VENTA
    const ventaX = padding + boxWidth + 25;
    ctx.fillStyle = '#252f2a';
    roundRect(ctx, ventaX, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    // Borde izquierdo verde
    ctx.fillStyle = '#43B581';
    roundRect(ctx, ventaX, yPos, 6, boxHeight, 3);
    ctx.fill();
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('VENTA', ventaX + 25, yPos + 35);
    
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText(`ARS $${formatARS(data.venta)}`, ventaX + 25, yPos + 80);

    // --- SECCIÓN: IMPUESTOS NACIONALES ---
    yPos += boxHeight + 50;
    
    // Icono documento
    ctx.fillStyle = '#43B581';
    roundRect(ctx, padding, yPos - 18, 24, 28, 5);
    ctx.fill();
    ctx.fillStyle = '#1e2a25';
    ctx.fillRect(padding + 6, yPos - 10, 12, 3);
    ctx.fillRect(padding + 6, yPos - 4, 12, 3);
    ctx.fillRect(padding + 6, yPos + 2, 8, 3);
    
    ctx.font = 'bold 22px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText('IMPUESTOS NACIONALES', padding + 38, yPos);
    
    yPos += 32;
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('Impuestos sobre tarjetas de crédito y débito a la compra de moneda', padding, yPos);
    yPos += 26;
    ctx.fillText('extranjera.', padding, yPos);

    // --- BOXES: IVA Y GANANCIAS ---
    yPos += 40;
    
    // Box IVA
    ctx.fillStyle = '#252f2a';
    roundRect(ctx, padding, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    // Label IVA con badge
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('IVA', padding + 25, yPos + 35);
    
    // Badge 21%
    const badge21X = padding + 65;
    ctx.fillStyle = '#3d4a44';
    roundRect(ctx, badge21X, yPos + 18, 50, 28, 6);
    ctx.fill();
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText('21%', badge21X + 10, yPos + 38);
    
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`ARS $${formatARS(data.iva)}`, padding + 25, yPos + 80);
    
    // Box GANANCIAS
    ctx.fillStyle = '#252f2a';
    roundRect(ctx, ventaX, yPos, boxWidth, boxHeight, 12);
    ctx.fill();
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('Percepción Ganancias', ventaX + 25, yPos + 35);
    
    // Badge 30%
    const badge30X = ventaX + boxWidth - 75;
    ctx.fillStyle = '#3d4a44';
    roundRect(ctx, badge30X, yPos + 18, 50, 28, 6);
    ctx.fill();
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText('30%', badge30X + 10, yPos + 38);
    
    ctx.font = 'bold 28px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`ARS $${formatARS(data.ganancias)}`, ventaX + 25, yPos + 80);

    // --- BOX FINAL: PERCEPCIÓN + IVA ---
    yPos += boxHeight + 35;
    const finalBoxHeight = 110;
    const finalBoxWidth = width - padding * 2;
    
    // Fondo con gradiente verde sutil
    const finalGradient = ctx.createLinearGradient(padding, yPos, padding + finalBoxWidth, yPos);
    finalGradient.addColorStop(0, '#2a3d35');
    finalGradient.addColorStop(1, '#252f2a');
    ctx.fillStyle = finalGradient;
    roundRect(ctx, padding, yPos, finalBoxWidth, finalBoxHeight, 12);
    ctx.fill();
    
    // Borde superior verde
    ctx.fillStyle = '#43B581';
    ctx.fillRect(padding + 15, yPos, finalBoxWidth - 30, 4);
    
    // Texto izquierdo
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = '#43B581';
    ctx.fillText('PERCEPCIÓN + IVA (51%)', padding + 25, yPos + 45);
    
    ctx.font = '18px sans-serif';
    ctx.fillStyle = '#6b7c75';
    ctx.fillText('Precio final tarjeta', padding + 25, yPos + 75);
    
    // Valor grande a la derecha
    ctx.font = 'bold 34px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    const totalText = `ARS $${formatARS(data.totalImpuestos)}`;
    const totalWidth = ctx.measureText(totalText).width;
    ctx.fillText(totalText, width - padding - totalWidth - 25, yPos + 68);

    const buffer = canvas.toBuffer('image/png');
    return new AttachmentBuilder(buffer, { name: 'cotizacion-moderna.png' });
}