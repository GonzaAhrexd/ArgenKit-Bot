import { CanvasRenderingContext2D, loadImage } from "canvas";
import addTextCanvas from "./AddTextCanvas";
import path from "path";

const creditosArgenkit = async (
    canvas: CanvasRenderingContext2D,
    padding: number,
    yPos: number
): Promise<void> => {
        
    // Logo
    const logoPath = path.join(__dirname, '../img/argkitbot_logo.png');
    const logo = await loadImage(logoPath);
    const logoHeight = 20;
    const logoWidth = (logo.width / logo.height) * logoHeight;
    canvas.drawImage(logo, padding - 30, yPos - 15, logoWidth, logoHeight);

    // Texto
    addTextCanvas(canvas, '13px sans-serif', '#6b7280', 'Argenkit Bot - el bot con funciones útiles para usuarios de Argentina', padding, yPos);

}

export default creditosArgenkit;
