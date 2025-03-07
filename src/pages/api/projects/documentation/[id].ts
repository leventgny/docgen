import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextApiRequest, NextApiResponse } from "next"
import PDFDocument from 'pdfkit'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const pdf = new PDFDocument({
        compress: true,
        lang: 'tr'
    })
    pdf.fontSize(14).font('src/fonts/OpenSans.ttf')

    const genAI = new GoogleGenerativeAI("AIzaSyDmcBwQlC4czWNhwPgcSGTxo2aRIHW12Wc");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Bana örnek bir yazılım projesi dökümantasyonu sağlayabilir misin?";

    const result = await model.generateContent(prompt);
    
    // console.log(result.response.text());
    
    pdf.text(result.response.text(), 100, 100);
    
    res.status(200) //.json({ success: true });

    pdf.pipe(res);

    pdf.end();
}