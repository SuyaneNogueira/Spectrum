<<<<<<< HEAD
// import React, { useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';
// import Picker from '@emoji-mart/react';
// import data from '@emoji-mart/data';
// import { getAuth } from 'firebase/auth';
// import { FiSend, FiImage } from 'react-icons/fi';
// import { BsEmojiSmile } from 'react-icons/bs';
// import './Chat.css';

// const socket = io('http://localhost:3001');

// const Chat = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const fileInputRef = useRef(null);
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     socket.on('chat message', (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.off('chat message');
//     };
//   }, []);

//   const handleSendMessage = () => {
//     if (message.trim() === '' && !fileInputRef.current?.files?.length) return;

//     const msgData = {
//       text: message,
//       name: user?.displayName || 'Usuário',
//       photo: user?.photoURL || '',
//       type: 'text',
//     };

//     socket.emit('chat message', msgData);
//     setMessages((prev) => [...prev, msgData]);
//     setMessage('');
//     setShowEmojiPicker(false);
//     textareaRef.current.style.height = 'auto';
//   };

//   const handleEmojiSelect = (emoji) => {
//     setMessage((prev) => prev + emoji.native);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const msgData = {
//         name: user?.displayName || 'Usuário',
//         photo: user?.photoURL || '',
//         type: file.type.startsWith('image') ? 'image' : 'video',
//         content: reader.result,
//       };

//       socket.emit('chat message', msgData);
//       setMessages((prev) => [...prev, msgData]);
//     };
//     reader.readAsDataURL(file);
//     e.target.value = ''; // limpa input
//   };

//   return (
//     <div className="chat-container">
//       <div className="messages-area">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="message-bubble">
//             {msg.photo && (
//               <img src={msg.photo} alt="avatar" className="avatar" />
//             )}
//             <div className="bubble-content">
//               <strong>{msg.name}</strong>
//               {msg.type === 'text' && <p>{msg.text}</p>}
//               {msg.type === 'image' && (
//                 <img src={msg.content} alt="img" className="sent-media" />
//               )}
//               {msg.type === 'video' && (
//                 <video controls className="sent-media">
//                   <source src={msg.content} />
//                 </video>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="input-area">
//         {showEmojiPicker && (
//           <div className="emoji-picker">
//             <Picker data={data} onEmojiSelect={handleEmojiSelect} />
//           </div>
//         )}
//         <div className="input-row">
//           <button
//             className="emoji-btn"
//             onClick={() => setShowEmojiPicker((val) => !val)}
//           >
//             <BsEmojiSmile size={22} />
//           </button>

//           <textarea
//             ref={textareaRef}
//             className="message-input"
//             value={message}
//             onChange={(e) => {
//               setMessage(e.target.value);
//               textareaRef.current.style.height = 'auto';
//               textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//             }}
//             placeholder="Digite sua mensagem..."
//             rows={1}
//             maxLength={1000}
//           />

//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: 'none' }}
//             onChange={handleFileChange}
//             accept="image/*,video/*"
//           />

//           <button className="file-btn" onClick={() => fileInputRef.current.click()}>
//             <FiImage size={20} />
//           </button>

//           <button className="send-btn" onClick={handleSendMessage}>
//             <FiSend size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
=======
import React, { useState, useRef } from 'react';
import Picker from 'emoji-picker-react';
import { Paperclip, Smile, Send } from 'lucide-react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleEmojiClick = (emojiData) => {
    setText(prev => prev + emojiData.emoji);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSend = () => {
    if (text.trim() || imagePreview) {
      setMessages(prev => [...prev, { text, image: imagePreview }]);
      setText('');
      setImagePreview(null);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="sidebar">
        <div className="logo">Spectrum</div>
        {/* Contatos fixos */}
        <div className="contacts">👤 Fernanda</div>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className="message">
              {msg.text && <div className="bubble">{msg.text}</div>}
              {msg.image && <img src={msg.image} alt="uploaded" className="image-bubble" />}
            </div>
          ))}
        </div>

        {showPicker && (
          <div className="emoji-picker">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <div className="input-area">
          <div className="border-top" />

          <div className="input-row">
            <button className="icon-btn" onClick={() => setShowPicker(!showPicker)}>
              <Smile size={20} />
            </button>

            <button className="icon-btn" onClick={() => fileInputRef.current.click()}>
              <Paperclip size={20} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />

            <textarea
              className="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Digite sua mensagem..."
              rows={1}
            />

            <button className="send-btn" onClick={handleSend}>
              <Send size={20} />
            </button>
          </div>

          {imagePreview && (
            <div className="preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
>>>>>>> da5032ed843e644efc6d85e10dd2570ed9975e0d

// export default Chat;
