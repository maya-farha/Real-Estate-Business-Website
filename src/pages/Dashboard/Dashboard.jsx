import { useState, useEffect } from "react";
import "./Dashboard.css";
import FormDashboard from "../../components/FormDashboard/FormDashboard";
import { NavLink } from "react-router-dom";

function Dashboard() {
  const [services, setServices] = useState(() => {
    const stored = localStorage.getItem("services");
    return stored ? JSON.parse(stored) : [];
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  const handleAddService = (newService) => {
    setServices((prev) => [...prev, newService]);
  };

  const openEditModal = (service) => {
    setEditingService(service);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedService) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((service) => service.id !== id));
    }
  };

  return (
    <div className="MF-FormDashboard white-spacing">
      <div className="MF-backTo">
        <NavLink to={"/"}>
          <img src="assets/icons/left-arrow.svg"></img>
        </NavLink>
      </div>

      <h1 className="MF-titleDashboard">Service Management Dashboard</h1>
      {isAddModalOpen && (
        <div className="MF-modalOverlay">
          <div className="MF-modal">
            <h3>Add New Service</h3>
            <FormDashboard
              mode="add"
              onSubmit={handleAddService}
              onClose={() => setIsAddModalOpen(false)}
            />
          </div>
        </div>
      )}

      {isEditModalOpen && editingService && (
        <div className="MF-modalOverlay">
          <div className="MF-modal">
            <h3>Edit Service</h3>
            <FormDashboard
              mode="edit"
              initialData={editingService}
              onSubmit={handleSaveEdit}
              onClose={() => {
                setIsEditModalOpen(false);
              }}
            />
          </div>
        </div>
      )}

      <div className="MF-table">
        <button className="MF-bttnAdd" onClick={() => setIsAddModalOpen(true)}>
          Add Service
        </button>
        {services.length === 0 ? (
          <p>No Data Exists</p>
        ) : (
          <table className="MF-serviceTable">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Service Name</th>
                <th>Procedures</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>
                    <img src={service.icon} alt="icon" />
                  </td>
                  <td>{service.serviceName}</td>
                  <td className="MF-bttnContainer">
                    <button
                      className="MF-button"
                      onClick={() => openEditModal(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="MF-button MF-bttnDelete"
                      onClick={() => handleDelete(service.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
