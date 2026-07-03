import React, { useEffect, useState } from "react";
import "./AgentChat.css";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import agents from "../data/agents";

import {
  SearchNormal1,
  Call,
  MessageText,
  User,
  Send2
} from "iconsax-react";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
function AgentChat() {

  const { id } = useParams();

  const agent = agents.find(
    a => a.id === parseInt(id)
  );

  const [inquiries, setInquiries] = useState([]);

  const [selectedChat, setSelectedChat] = useState(null);

  const [reply, setReply] = useState("");

  useEffect(() => {

  const q = query(
    collection(db, "inquiries"),
    where("agentId", "==", parseInt(id))
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {

    const chats = snapshot.docs.map(doc => ({

      id: doc.id,

      ...doc.data()

    }));

    setInquiries(chats);

  });

  return () => unsubscribe();

}, [id]);
  return (

    <div className="agent-chat-page">

      {/* LEFT PANEL */}

      <div className="chat-sidebar">

        <div className="sidebar-header">

          <img
            src={agent.image}
            alt={agent.name}
          />

          <div>

            <h2>{agent.name}</h2>

            <p>{agent.designation}</p>

          </div>

        </div>

        <div className="search-chat">

          <SearchNormal1
            size="20"
            color="#b89a5e"
            variant="Bold"
          />

          <input
            type="text"
            placeholder="Search customer..."
          />

        </div>

        <div className="chat-list">

          {inquiries.length === 0 ? (

            <div className="empty-chat">

              No inquiries yet.

            </div>

          ) : (

            inquiries.map((item) => (

              <div

                key={item.id}

                className={`chat-item ${
                  selectedChat?.id === item.id
                    ? "active-chat"
                    : ""
                }`}

                onClick={() => setSelectedChat(item)}

              >

                <div className="customer-avatar">

                  <User
                    size="26"
                    color="#b89a5e"
                    variant="Bold"
                  />

                </div>

                <div className="customer-details">

                  <h4>

                    {item.customerName}

                  </h4>

                  <span>

                    {item.propertyName}

                  </span>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="chat-area">
                {selectedChat ? (

          <>

            {/* Chat Header */}

            <div className="chat-header">

              <div className="chat-user">

                <User
                  size="30"
                  color="#b89a5e"
                  variant="Bold"
                />

                <div>

                  <h3>{selectedChat.customerName}</h3>

                  <p>

                    Interested in {selectedChat.propertyName}

                  </p>

                </div>

              </div>

              <div className="chat-contact">

                <Call
                  size="20"
                  color="#b89a5e"
                  variant="Bold"
                />

                <span>

                  {selectedChat.customerPhone}

                </span>

              </div>

            </div>

            {/* Messages */}

            <div className="chat-messages">

              <div className="message customer">

                <div className="message-bubble">

                  {selectedChat.message}

                </div>

              </div>

              {(selectedChat.replies || []).map((msg, index) => (

                <div
                  className="message agent"
                  key={index}
                >

                  <div className="message-bubble">

                    {msg}

                  </div>

                </div>

              ))}

            </div>

            {/* Reply Box */}

            <div className="chat-input">

              <input

                type="text"

                placeholder="Type your reply..."

                value={reply}

                onChange={(e) =>
                  setReply(e.target.value)
                }

              />

              <button

onClick={async () => {

    if (!reply.trim()) return;

    try {

        await updateDoc(

            doc(db, "inquiries", selectedChat.id),

            {

                replies: arrayUnion(reply)

            }

        );

        setReply("");

    }

    catch(error){

        console.error(error);

    }

}}

              >

                <Send2
                  size="20"
                  color="#ffffff"
                  variant="Bold"
                />

                Send

              </button>

            </div>

          </>

        ) : (

          <div className="no-conversation">

            <MessageText
              size="70"
              color="#b89a5e"
              variant="Bold"
            />

            <h2>

              Select an Inquiry

            </h2>

            <p>

              Choose a customer from the left panel
              to start chatting.

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default AgentChat;