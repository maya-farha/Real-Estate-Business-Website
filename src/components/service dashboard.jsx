import React, { useState, useEffect } from "react";

export default function DashboardTable() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  // تحميل البيانات من localStorage عند التحميل
  useEffect(() => {
    const saved = localStorage.getItem("cardsData");
    if (saved) {
      setCards(JSON.parse(saved));
    }
  }, []);

  // حفظ البيانات في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("cardsData", JSON.stringify(cards));
  }, [cards]);

  // إضافة كارد جديد
  const addCard = () => {
    if (!title) return alert("Title is required");
    setCards([...cards, { id: Date.now(), title, icon: icon || "📦" }]);
    setTitle("");
    setIcon("");
  };

  // تعديل كارد
  const editCard = (id) => {
    const newTitle = prompt("Enter new title:");
    const newIcon = prompt("Enter new icon:");
    if (newTitle) {
      setCards(
        cards.map((card) =>
          card.id === id
            ? { ...card, title: newTitle, icon: newIcon || card.icon }
            : card
        )
      );
    }
  };

  // حذف كارد
  const deleteCard = (id) => {
    if (window.confirm("Are you sure?")) {
      setCards(cards.filter((card) => card.id !== id));
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        background: "#121212",
        minHeight: "100vh",
      }}
    >
      <h1>Dashboard Table</h1>

      {/* Form إضافة عنصر جديد */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Icon (Emoji)"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button
          onClick={addCard}
          style={{
            padding: "8px 12px",
            background: "#6c5ce7",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          ➕ Add
        </button>
      </div>

      {/* جدول عرض البيانات */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#333" }}>
            <th style={{ padding: "10px", border: "1px solid #444" }}>Icon</th>
            <th style={{ padding: "10px", border: "1px solid #444" }}>Title</th>
            <th style={{ padding: "10px", border: "1px solid #444" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr
              key={card.id}
              style={{ textAlign: "center", borderBottom: "1px solid #444" }}
            >
              <td style={{ padding: "10px" }}>{card.icon}</td>
              <td style={{ padding: "10px" }}>{card.title}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => editCard(card.id)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    background: "#0984e3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  ✏ Edit
                </button>
                <button
                  onClick={() => deleteCard(card.id)}
                  style={{
                    padding: "5px 10px",
                    background: "#d63031",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
