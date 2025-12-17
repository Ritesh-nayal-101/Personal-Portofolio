import { useState } from "react"

function ChatAssistant() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 Ask me about Ritesh!" }
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)

  // 🔹 BOT LOGIC
  const getBotReply = (question) => {
    const q = question.toLowerCase()

    if (q.includes("skill")) {
      return "Ritesh has strong skills in React, JavaScript, HTML, CSS, Git, and Node.js."
    }

    if (q.includes("project")) {
      return "Ritesh has built a professional portfolio, a weather app, and several React projects."
    }

    if (q.includes("experience")) {
      return "Ritesh focuses on building scalable, responsive, and clean frontend applications."
    }

    if (q.includes("ai")) {
      return "This AI assistant is built using React hooks and can be extended to real GenAI APIs."
    }

    return "You can ask me about skills, projects, experience, or this AI assistant 🙂"
  }

  // 🔹 SEND MESSAGE
  const sendMessage = () => {
    if (!input.trim() || typing) return

    const userQuestion = input

    // add user message
    setMessages(prev => [...prev, { role: "user", text: userQuestion }])
    setInput("")
    setTyping(true)

    const reply = getBotReply(userQuestion)

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: reply }])
      setTyping(false)
    }, 1000)
  }

  return (
    <section id="chat" className="chat">
      <h2>AI Assistant</h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i} className={msg.role}>
            {msg.text}
          </p>
        ))}
        {typing && <p className="bot">Typing...</p>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </section>
  )
}

export default ChatAssistant