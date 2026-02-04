
import { GoogleGenAI, Type } from "@google/genai";
import { Event, EventType, County } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDynamicEvents = async (count: number = 3): Promise<Event[]> => {
  if (!process.env.API_KEY) return [];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate ${count} realistic future Catholic Young Adult events strictly for Ventura County, California (cities like Ventura, Ojai, Oxnard, Camarillo). 
                 Return as a JSON array of event objects matching the schema: 
                 title, description, start(ISO), end(ISO), parishName, address, city, county('Ventura'), lat, lng, tags(array), type(one of: 'Prayer', 'Social', 'Service', 'Study').`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              start: { type: Type.STRING },
              end: { type: Type.STRING },
              parishName: { type: Type.STRING },
              address: { type: Type.STRING },
              city: { type: Type.STRING },
              county: { type: Type.STRING },
              lat: { type: Type.NUMBER },
              lng: { type: Type.NUMBER },
              tags: { type: Type.ARRAY, items: { type: Type.STRING } },
              type: { type: Type.STRING },
            }
          }
        }
      }
    });

    const data = JSON.parse(response.text || '[]');
    return data.map((item: any, idx: number) => ({
      ...item,
      id: `dynamic-${Date.now()}-${idx}`,
      start: new Date(item.start),
      end: new Date(item.end),
      county: 'Ventura',
      imageUrl: `https://picsum.photos/seed/event-ventura-${idx}/600/400`
    }));
  } catch (error) {
    console.error("Gemini failed to generate Ventura events:", error);
    return [];
  }
};
