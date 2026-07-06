import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AgentsPage.css";
import agents from "../data/agents";

import {
  SearchNormal1,
  Location,
  Star1,
  Call,
  Sms,
  MessageText,
  Profile2User,
} from "iconsax-react";

function AgentsPage() {
  const [search, setSearch] = useState("");
  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase()) ||
    agent.city.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="agents-page">

      <section className="agents-hero">
        <Link to="/" className="back-home-btn">
    ← Back to Home
</Link>
        <p className="section-tag">
          PROFESSIONAL TEAM
        </p>
        <h1>
          Meet Our Expert Agents
        </h1>
        <p className="hero-description">
          Our experienced real estate professionals are committed
          to helping you discover the perfect property with trusted
          guidance, transparent communication, and personalized support.
        </p>
      </section>

      <section className="agents-search">
        <div className="search-box">
          <SearchNormal1
            size="20"
            color="#b89a5e"
            variant="Bold"
          />

          <input
            type="text"
            placeholder="Search by Agent Name or City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </section>

      <section className="agents-grid">
        {filteredAgents.map((agent) => (
          <div
            className="agent-card"
            key={agent.id}
          >

            <div className="agent-image">
              <img
                src={agent.image}
                alt={agent.name}
              />
            </div>
            <div className="agent-content">
              <h2>
                {agent.name}
              </h2>

              <p className="designation">
                {agent.designation}
              </p>

              <div className="agent-info">
                <div>
                  <Location
                    size="18"
                    color="#b89a5e"
                    variant="Bold"
                  />

                  <span>
                    {agent.city}
                  </span>
                </div>
                <div>
                  <Star1
                    size="18"
                    color="#b89a5e"
                    variant="Bold"
                  />

                  <span>
                    {agent.rating} Rating
                  </span>
                </div>
                <div>
                  <Profile2User
                    size="18"
                    color="#b89a5e"
                    variant="Bold"
                  />

                  <span>
                    {agent.experience}
                  </span>
                </div>
               </div>

              <div className="agent-contact">
                <div>
                  <Call
                    size="18"
                    color="#b89a5e"
                    variant="Bold"
                  />

                  <span>
                    {agent.phone}
                  </span>
                </div>

                <div>
                  <Sms
                    size="18"
                    color="#b89a5e"
                    variant="Bold"
                  />

                  <span>
                    {agent.email}
                  </span>
                </div>

              </div>

              <div className="agent-buttons">
                <a
                  href={`tel:${agent.phone}`}
                  className="call-btn"
                >

                  <Call
                    size="18"
                    color="#ffffff"
                    variant="Bold"
                  />
                  Call Agent
                </a>
                <button
                  className="chat-btn"
                  onClick={() => window.location.href = `/agent/${agent.id}`}
                >
                  <MessageText
                    size="18"
                    color="#ffffff"
                    variant="Bold"
                  />
                  Open Chat
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredAgents.length === 0 && (
          <div className="no-agents">
            <h3>No Agents Found</h3>
            <p>
              Try searching with another city or agent name.
            </p>

          </div>
        )}
      </section>

    </div>

  );
}

export default AgentsPage;