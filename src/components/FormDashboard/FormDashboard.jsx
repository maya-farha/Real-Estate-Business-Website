import { useEffect, useState } from "react";
import "./FormDashboard.css";

function FormDashboard({ mode, initialData, onSubmit, onClose }) {
  const [icon, setIcon] = useState("");
  const [serviceName, setServiceName] = useState("");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setServiceName(initialData.serviceName || "");
      setIcon(initialData.icon || "");
    } else {
      setServiceName("");
      setIcon("");
    }
  }, [mode, initialData]);

  const handleIcon = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setIcon(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceData = {
      id: mode === "edit" ? initialData.id : crypto.randomUUID(),
      icon,
      serviceName,
    };

    onSubmit(serviceData);

    if (onClose) onClose();

    if (mode === "add") {
      setServiceName("");
      setIcon("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="MF-addService">
        <label htmlFor="serviceName">Service Name</label>
        <input
          type="text"
          id="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        />

        <label htmlFor="iconService">Icon</label>
        <input
          type="file"
          id="iconService"
          accept="image/*"
          onChange={handleIcon}
        />

        {icon && (
          <img src={icon} alt="icon" />
        )}

        <div className="MF-modalButtons">
          <input
            type="submit"
            value={mode === "edit" ? "Save" : "Add"}
            className="MF-bttn"
          />

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="MF-bttn"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormDashboard;
