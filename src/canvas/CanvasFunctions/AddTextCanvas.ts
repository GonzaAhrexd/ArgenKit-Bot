import { CanvasRenderingContext2D } from "canvas";

const addTextCanvas: (
    canvas: CanvasRenderingContext2D, 
    font: string, 
    fontColor: string, 
    text: string, 
    padding: number, 
    y: number) => void = (canvas, font, fontColor, text, padding, y)=> {
    canvas.font = font;
    canvas.fillStyle = fontColor;
    canvas.fillText(text, padding, y);

}

export default addTextCanvas;