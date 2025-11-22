// WhatsApp Tooltip Logic
function showTooltip() {
  const tooltip = document.getElementById("waTooltip");
  tooltip.classList.add("show");
}

function hideTooltip() {
  const tooltip = document.getElementById("waTooltip");
  // Optional: Add a small delay before hiding to make it feel smoother
  setTimeout(() => {
    tooltip.classList.remove("show");
  }, 3000); // Auto hide after 3 seconds if mouse leaves, or immediately?
  // Let's keep it simple: hover in -> show, hover out -> hide immediately (CSS handles transition)
  tooltip.classList.remove("show");
}

// Chat Interface Logic
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendSuggestion(text) {
  chatInput.value = text;
  sendMessage();
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // 1. Add User Message
  addMessage(text, "user");
  chatInput.value = "";

  // 2. Simulate AI Thinking
  const loadingId = addLoadingIndicator();

  // 3. Simulate AI Response (Delay)
  setTimeout(() => {
    removeMessage(loadingId);
    const aiResponse = generateMockResponse(text);
    addMessage(aiResponse, "bot");
  }, 1500);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.innerHTML = text; // Using innerHTML to allow basic formatting like <br>
  chatMessages.appendChild(div);
  scrollToBottom();
  return (div.id = "msg-" + Date.now());
}

function addLoadingIndicator() {
  const div = document.createElement("div");
  div.className = "message bot";
  div.innerHTML =
    '<i class="fas fa-circle-notch fa-spin"></i> Analizando caso...';
  div.id = "loading-" + Date.now();
  chatMessages.appendChild(div);
  scrollToBottom();
  return div.id;
}

function removeMessage(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateMockResponse(input) {
  input = input.toLowerCase();

  if (input.includes("contrato")) {
    return "Para revisar tu contrato, necesito que me indiques qué tipo de contrato es (arrendamiento, laboral, prestación de servicios). ¿Podrías subir el archivo o pegar las cláusulas que te preocupan?";
  }
  if (input.includes("petición") || input.includes("peticion")) {
    return "El derecho de petición es fundamental. Puedo ayudarte a redactarlo. ¿A qué entidad va dirigido y cuál es tu solicitud principal?";
  }
  if (input.includes("multa") || input.includes("tránsito")) {
    return "Entiendo. Para impugnar una multa, es clave revisar la fecha de notificación y si se cumplió el debido proceso. ¿Cuándo recibiste el comparendo?";
  }

  return "Entiendo tu consulta. Como asistente legal IA, puedo guiarte con información general basada en la normativa vigente. Sin embargo, para este caso específico, te recomiendo conectar con uno de nuestros abogados especialistas. ¿Te gustaría que te transfiera?";
}

// Auto-show WhatsApp tooltip on load after 5 seconds
setTimeout(() => {
  const tooltip = document.getElementById("waTooltip");
  tooltip.classList.add("show");
  // Hide again after 5 seconds
  setTimeout(() => {
    tooltip.classList.remove("show");
  }, 5000);
}, 3000);
