
import { GoogleGenAI } from "@google/genai";

/**
 * Serviço preparado para integrar com Gemini no futuro,
 * caso o usuário deseje gerar descrições automáticas de jogos
 * ou recomendações personalizadas.
 */
export const getAiRecommendation = async (prompt: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key não configurada.";
  
  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Você é um especialista em curadoria de jogos digitais para a loja ZeroCost Games.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("Erro ao contatar Gemini:", error);
    return "Erro ao carregar recomendação.";
  }
};
