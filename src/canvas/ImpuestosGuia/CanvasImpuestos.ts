import { createCanvas } from 'canvas';
import { AttachmentBuilder } from 'discord.js';
import addTextCanvas from '../CanvasFunctions/AddTextCanvas';

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

// Dibujar ícono de porcentaje
function drawPercentIcon(ctx: any, x: number, y: number, size: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + size * 0.25, y + size * 0.25, size * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + size * 0.75, y + size * 0.75, size * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + size * 0.85, y + size * 0.15);
    ctx.lineTo(x + size * 0.15, y + size * 0.85);
    ctx.stroke();
}

// Dibujar ícono de billete/físico
function drawBillIcon(ctx: any, x: number, y: number, size: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    roundRect(ctx, x, y + size * 0.2, size, size * 0.6, 4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + size * 0.5, y + size * 0.5, size * 0.15, 0, Math.PI * 2);
    ctx.stroke();
}

// Dibujar ícono de calculadora/total
function drawCalculatorIcon(ctx: any, x: number, y: number, size: number, color: string) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    roundRect(ctx, x + size * 0.1, y, size * 0.8, size, 4);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fillRect(x + size * 0.2, y + size * 0.15, size * 0.6, size * 0.25);
    // Botones
    const btnSize = size * 0.12;
    for (let row = 0; row < 2; row++) {
        for (let col = 0; col < 3; col++) {
            ctx.fillRect(
                x + size * 0.2 + col * (btnSize + size * 0.1),
                y + size * 0.55 + row * (btnSize + size * 0.08),
                btnSize,
                btnSize
            );
        }
    }
}

// Dibujar ícono de check/punto
function drawBulletPoint(ctx: any, x: number, y: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
}

// Dibujar ícono de bombilla (tip)
function drawLightbulbIcon(ctx: any, x: number, y: number, size: number, color: string) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x + size * 0.5, y + size * 0.35, size * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(x + size * 0.35, y + size * 0.6, size * 0.3, size * 0.25);
    // Rayos
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    const rays = [
        { x1: size * 0.5, y1: 0, x2: size * 0.5, y2: size * 0.1 },
        { x1: size * 0.15, y1: size * 0.15, x2: size * 0.25, y2: size * 0.25 },
        { x1: size * 0.85, y1: size * 0.15, x2: size * 0.75, y2: size * 0.25 },
    ];
    rays.forEach(ray => {
        ctx.beginPath();
        ctx.moveTo(x + ray.x1, y + ray.y1);
        ctx.lineTo(x + ray.x2, y + ray.y2);
        ctx.stroke();
    });
}

export async function generateImpuestosGuiaImage(): Promise<AttachmentBuilder> {
    const width = 900;
    const height = 1000;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    const padding = 30;

    // Colores
    const colors = {
        background: '#1a1d21',
        cardBg: '#22262c',
        yellow: '#e8b923',
        blue: '#4a9eff',
        purple: '#a855f7',
        cyan: '#22d3ee',
        green: '#10b981',
        textPrimary: '#ffffff',
        textSecondary: '#9ca3af',
        tipBg: '#1e3a5f',
        tipBorder: '#3b82f6'
    };

    // --- FONDO PRINCIPAL ---
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
    bgGradient.addColorStop(0, '#1a1d21');
    bgGradient.addColorStop(1, '#12141a');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    let yPos = 35;

    // --- HEADER ---
    // Ícono del título (cuadrado con texto)
    ctx.fillStyle = colors.yellow;
    roundRect(ctx, padding, yPos - 5, 28, 28, 6);
    ctx.fill();
    addTextCanvas(ctx, 'bold 16px sans-serif', '#1a1d21', '📋', padding + 4, yPos + 15);
    
    // Título principal
    addTextCanvas(ctx, 'bold 28px sans-serif', colors.textPrimary, 'Guía de Impuestos', padding + 40, yPos + 18);
    
    yPos += 45;
    addTextCanvas(ctx, '15px sans-serif', colors.textSecondary, 'Compras en moneda extranjera', padding, yPos);

    // ========================================
    // SECCIÓN 1: Solo IVA (21%) - DIGITAL
    // ========================================
    yPos += 40;
    const section1Height = 140;
    
    // Card background
    ctx.fillStyle = colors.cardBg;
    roundRect(ctx, padding, yPos, width - padding * 2, section1Height, 12);
    ctx.fill();
    
    // Ícono de porcentaje (círculo amarillo)
    ctx.fillStyle = '#3d3520';
    ctx.beginPath();
    ctx.arc(padding + 28, yPos + 35, 22, 0, Math.PI * 2);
    ctx.fill();
    drawPercentIcon(ctx, padding + 10, yPos + 17, 36, colors.yellow);
    
    // Título y badge
    addTextCanvas(ctx, 'bold 20px sans-serif', colors.yellow, 'IVA (21%)', padding + 60, yPos + 40);
    
    // Badge DIGITAL
    const badgeX = width - padding - 75;
    ctx.fillStyle = '#2d4a3d';
    roundRect(ctx, badgeX, yPos + 20, 60, 24, 12);
    ctx.fill();
    addTextCanvas(ctx, 'bold 11px sans-serif', '#4ade80', 'SERVICIOS', badgeX + 8, yPos + 36);
    
    // Descripción
    yPos += 65;
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Se aplica a los Servicios Digitales que figuran en la "Lista A" de ARCA y que son consumidos por individuos.', padding + 15, yPos);
    
    // Bullet points
    yPos += 25;
    drawBulletPoint(ctx, padding + 22, yPos - 4, colors.yellow);
    addTextCanvas(ctx, 'bold 13px sans-serif', colors.textSecondary, 'Servicios:', padding + 32, yPos);
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Netflix, Spotify, iCloud, YouTube Premium, etc. (Consultar lista)', padding + 100, yPos);
    
    yPos += 22;
    drawBulletPoint(ctx, padding + 22, yPos - 4, colors.yellow);
    addTextCanvas(ctx, 'bold 13px sans-serif', colors.textSecondary, 'Videojuegos:', padding + 32, yPos);
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Steam, Epic Games, Xbox Store, PS Store, Nintendo E Shop, etc. Estos están exentos de Ganancias (Consultar lista).', padding + 118, yPos);
    // ========================================
    // SECCIÓN 2: Solo Ganancias (30%) - FÍSICO
    // ========================================
    yPos += 40;
    const section2Start = yPos;
    const section2Height = 220;
    
    // Card background
    ctx.fillStyle = colors.cardBg;
    roundRect(ctx, padding, yPos, width - padding * 2, section2Height, 12);
    ctx.fill();
    
    // Ícono de billete (círculo azul)
    ctx.fillStyle = '#1e3a5f';
    ctx.beginPath();
    ctx.arc(padding + 28, yPos + 35, 22, 0, Math.PI * 2);
    ctx.fill();
    drawBillIcon(ctx, padding + 8, yPos + 12, 40, colors.blue);
    
    // Título y badge
    addTextCanvas(ctx, 'bold 20px sans-serif', colors.blue, 'Percepción de Ganancias (30%)', padding + 60, yPos + 40);
    
    // Badge FÍSICO
    ctx.fillStyle = '#3d2d4a';
    roundRect(ctx, badgeX + 5, yPos + 20, 55, 24, 12);
    ctx.fill();
    addTextCanvas(ctx, 'bold 11px sans-serif', '#c084fc', 'FÍSICO', badgeX + 14, yPos + 36);
    
    // Descripción
    yPos += 70;
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Se aplica a cualquier consumo en moneda extranjera que NO sea considerado Servicio Digital de la "Lista A" de ARCA.', padding + 15, yPos);
    // Bullet points
    yPos += 25;
    drawBulletPoint(ctx, padding + 22, yPos - 4, colors.blue);
    addTextCanvas(ctx, 'bold 13px sans-serif', colors.textSecondary, 'Ejemplos:', padding + 32, yPos);
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Comprar ropa en tiendas online del exterior, pagar hoteles en Booking o compras físicas afuera.', padding + 100, yPos);

    // Tip box
    yPos += 25;
    const tipHeight = 90;
    ctx.fillStyle = '#1a2e44';
    roundRect(ctx, padding + 10, yPos, width - padding * 2 - 20, tipHeight, 10);
    ctx.fill();
    
    // Borde izquierdo del tip
    ctx.fillStyle = colors.cyan;
    roundRect(ctx, padding + 10, yPos, 4, tipHeight, 2);
    ctx.fill();
    
    // Ícono bombilla
    ctx.fillStyle = colors.cyan;
    ctx.beginPath();
    ctx.arc(padding + 30, yPos + 20, 8, 0, Math.PI * 2);
    ctx.fill();
    
    addTextCanvas(ctx, 'bold 12px sans-serif', colors.cyan, 'Evita el impuesto:', padding + 45, yPos + 24);
    addTextCanvas(ctx, '11px sans-serif', '#b0c4de', 'Algunas tarjetas prepagas o billeteras NO debitan la percepción de Ganancias (MercadoPago, Ualá, AstroPay, etc). También es posible pagar debitando de dólares', padding + 22, yPos + 42);
    addTextCanvas(ctx, '11px sans-serif', '#b0c4de', '(AstroPay, Galicia, Naranja X, Cocos) o pagando el resumen de la tarjeta de crédito en dólares.', padding + 22, yPos + 58);
    addTextCanvas(ctx, '11px sans-serif', '#b0c4de', 'Es recomendable averiguar el caso para cada tarjeta antes de utilizarla.', padding + 22, yPos + 74);
    // ========================================
    // SECCIÓN 3: IVA + Ganancias (51%) - TOTAL
    // ========================================
    yPos += tipHeight + 25;
    const section3Height = 145;
    
    // Card background
    ctx.fillStyle = colors.cardBg;
    roundRect(ctx, padding, yPos, width - padding * 2, section3Height, 12);
    ctx.fill();
    
    // Ícono de calculadora (círculo púrpura)
    ctx.fillStyle = '#2d1f3d';
    ctx.beginPath();
    ctx.arc(padding + 28, yPos + 35, 22, 0, Math.PI * 2);
    ctx.fill();
    drawCalculatorIcon(ctx, padding + 8, yPos + 12, 40, colors.purple);
    
    // Título y badge
    addTextCanvas(ctx, 'bold 20px sans-serif', colors.purple, 'IVA + Ganancias (51%)', padding + 60, yPos + 40);
    
    // Badge TOTAL
    ctx.fillStyle = '#1e3a5f';
    roundRect(ctx, badgeX + 5, yPos + 20, 55, 24, 12);
    ctx.fill();
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.blue, 'TOTAL', badgeX + 16, yPos + 36);
    
    // Descripción
    yPos += 70;
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Este es el caso de los servicios digitales que no son videojuegos y que se pagan en pesos con tarjeta.', padding + 15, yPos);
    
    // Bullet points
    yPos += 25;
    drawBulletPoint(ctx, padding + 22, yPos - 4, colors.purple);
    addTextCanvas(ctx, 'bold 13px sans-serif', colors.textSecondary, 'Motivo:', padding + 32, yPos);
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Al ser servicio digital lleva IVA. Al ser pago al exterior en pesos, lleva percepción de Ganancias.', padding + 90, yPos);
    
    yPos += 22;
    drawBulletPoint(ctx, padding + 22, yPos - 4, colors.purple);
    addTextCanvas(ctx, 'bold 13px sans-serif', colors.textSecondary, 'Evitable:', padding + 32, yPos);
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Como se mencionó, la percepción de Ganancias es evitable con algunas tarjetas o pagando en USD.', padding + 95, yPos);

    // ========================================
    // SECCIÓN 4: Ingresos Brutos (Provincial)
    // ========================================
    yPos += 40;
    const section4Height = 260;
    
    // Card background
    ctx.fillStyle = colors.cardBg;
    roundRect(ctx, padding, yPos, width - padding * 2, section4Height, 12);
    ctx.fill();
    
    // Ícono de mapa (círculo verde)
    ctx.fillStyle = '#1a3d2e';
    ctx.beginPath();
    ctx.arc(padding + 28, yPos + 35, 22, 0, Math.PI * 2);
    ctx.fill();
    // Dibujar icono de ubicación
    ctx.fillStyle = colors.green;
    ctx.beginPath();
    ctx.arc(padding + 28, yPos + 28, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(padding + 28, yPos + 28);
    ctx.lineTo(padding + 20, yPos + 45);
    ctx.lineTo(padding + 36, yPos + 45);
    ctx.closePath();
    ctx.fill();
    
    // Título y badge
    addTextCanvas(ctx, 'bold 20px sans-serif', colors.green, 'Ingresos Brutos (Provincial)', padding + 60, yPos + 40);
    
    // Badge PROVINCIAL
    ctx.fillStyle = '#1a3d2e';
    roundRect(ctx, badgeX - 10, yPos + 20, 80, 24, 12);
    ctx.fill();
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.green, 'PROVINCIAL', badgeX - 2, yPos + 36);
    
    // Descripción
    yPos += 75;
    addTextCanvas(ctx, '13px sans-serif', colors.textSecondary, 'Algunas provincias cobran un impuesto adicional sobre servicios digitales. El porcentaje varía según la provincia:', padding + 15, yPos);
    addTextCanvas(ctx, '11px sans-serif', colors.textSecondary, 'Algunas tarjetas no lo debitan.', padding + 15, yPos + 18);
    // Tabla de provincias
    yPos += 25;
    const tableStartY = yPos;
    const colWidth = (width - padding * 2 - 30) / 3;
    const rowHeight = 22;
    
    // Datos de provincias
    const provincias = [
        { nombre: 'CABA', porcentaje: '2%' },
        { nombre: 'Bs. As.', porcentaje: '2%' },
        { nombre: 'Córdoba', porcentaje: '3%' },
        { nombre: 'La Pampa', porcentaje: '1%' },
        { nombre: 'Río Negro', porcentaje: '5%' },
        { nombre: 'Salta', porcentaje: '3,6%' },
        { nombre: 'Santa Fe', porcentaje: '3% - 4,5%' },
        { nombre: 'Chaco', porcentaje: '5,5%' },
        { nombre: 'Neuquén', porcentaje: '4%' },
        { nombre: 'T. del Fuego', porcentaje: '3%' },
        { nombre: 'San Juan', porcentaje: '3%' },
    ];
    
    // Dibujar header de tabla
    ctx.fillStyle = '#2a2f36';
    roundRect(ctx, padding + 15, yPos - 5, width - padding * 2 - 30, rowHeight + 2, 6);
    ctx.fill();
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.textSecondary, 'Provincia', padding + 25, yPos + 12);
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.textSecondary, 'Porcentaje', padding + 25 + colWidth, yPos + 12);
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.textSecondary, 'Provincia', padding + 25 + colWidth * 2, yPos + 12);
    addTextCanvas(ctx, 'bold 11px sans-serif', colors.textSecondary, 'Porcentaje', padding + 25 + colWidth * 2 + 100, yPos + 12);
    
    yPos += rowHeight + 5;
    
    // Dibujar filas (2 columnas de provincias)
    const halfProvincias = Math.ceil(provincias.length / 2);
    for (let i = 0; i < halfProvincias; i++) {
        const prov1 = provincias[i];
        const prov2 = provincias[i + halfProvincias];
        
        // Fondo alternado
        if (i % 2 === 0) {
            ctx.fillStyle = '#1e2227';
            roundRect(ctx, padding + 15, yPos - 5, width - padding * 2 - 30, rowHeight, 3);
            ctx.fill();
        }
        
        // Columna izquierda
        addTextCanvas(ctx, '11px sans-serif', colors.textSecondary, prov1.nombre, padding + 25, yPos + 10);
        addTextCanvas(ctx, 'bold 11px sans-serif', colors.green, prov1.porcentaje, padding + 25 + colWidth, yPos + 10);
        
        // Columna derecha
        if (prov2) {
            addTextCanvas(ctx, '11px sans-serif', colors.textSecondary, prov2.nombre, padding + 25 + colWidth * 2, yPos + 10);
            addTextCanvas(ctx, 'bold 11px sans-serif', colors.green, prov2.porcentaje, padding + 25 + colWidth * 2 + 100, yPos + 10);
        }
        
        yPos += rowHeight;
    }
    
    // Nota sobre Santa Fe
    yPos += 10;
    addTextCanvas(ctx, '10px sans-serif', '#6b7280', '* Santa Fe: 3% suscripciones, 4,5% servicios digitales. Algunas provincias no tienen este impuesto.', padding + 20, yPos);

    // ========================================
    // FOOTER - Disclaimer
    // ========================================
    yPos += 40;
    addTextCanvas(ctx, '11px sans-serif', '#6b7280', 'Valores sujetos a cambios normativos. Consultar siempre la legislación vigente.', width / 2 - 190, yPos);

    // Crear el attachment
    const buffer = canvas.toBuffer('image/png');
    return new AttachmentBuilder(buffer, { name: 'guia-impuestos.png' });
}
