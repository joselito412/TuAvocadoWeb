// RAG Service Placeholder
// Este servicio manejará la comunicación con tu Base de Datos Vectorial (Pinecone/Chroma)
// y el backend de IA (OpenAI/Llama).

export const queryLegalAssistant = async (query) => {
  console.log("Querying RAG with:", query);
  
  // TODO: CONECTAR AQUÍ TU VECTOR DB
  // 1. Embed query (OpenAI embeddings)
  // 2. Search in Vector DB
  // 3. Send context + query to LLM
  
  // Mock response for now
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('contrato')) {
        resolve("Para revisar tu contrato, necesito que me indiques qué tipo de contrato es (arrendamiento, laboral, prestación de servicios). ¿Podrías subir el archivo o pegar las cláusulas que te preocupan?");
      } else if (lowerQuery.includes('petición') || lowerQuery.includes('peticion')) {
        resolve("El derecho de petición es fundamental. Puedo ayudarte a redactarlo. ¿A qué entidad va dirigido y cuál es tu solicitud principal?");
      } else if (lowerQuery.includes('multa') || lowerQuery.includes('tránsito')) {
        resolve("Entiendo. Para impugnar una multa, es clave revisar la fecha de notificación y si se cumplió el debido proceso. ¿Cuándo recibiste el comparendo?");
      } else {
        resolve("Entiendo tu consulta. Como asistente legal IA, puedo guiarte con información general basada en la normativa vigente. Sin embargo, para este caso específico, te recomiendo conectar con uno de nuestros abogados especialistas. ¿Te gustaría que te transfiera?");
      }
    }, 1500);
  });
};
