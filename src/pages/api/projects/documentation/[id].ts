import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextApiRequest, NextApiResponse } from "next"
import PDFDocument from 'pdfkit'
import DotEnv from 'dotenv'

DotEnv.config()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const pdf = new PDFDocument({
        compress: true,
        lang: 'tr'
    })
    pdf.fontSize(14).font('src/fonts/OpenSans.ttf')

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || 'SAMPLE_API_KEY' );
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = "Bana örnek bir yazılım projesi dökümantasyonu sağlayabilir misin?";

    const result = await model.generateContent(prompt);
    
    // console.log(result.response.text());
    
    pdf.text(result.response.text(), 100, 100);
    
    res.status(200) //.json({ success: true });

    pdf.pipe(res);

    pdf.end();
}