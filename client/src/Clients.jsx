import { useState, useEffect, useRef } from "react";
import "./clients.css";

const Clients = () => {
  const [showForm, setShowForm] = useState(false);
  const [clientForm, setClientForm] = useState({
    policy: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    insuranceType: "",
    enrollmentDate: "",
    notes: "",
  });
  const [addedClients, setAddedClients] = useState(() => {
    const saved = localStorage.getItem("addedClients");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({
    policy: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    insuranceType: "",
    enrollmentDate: "",
    notes: "",
  });

  useEffect(() => {
    localStorage.setItem("addedClients", JSON.stringify(addedClients));
  }, [addedClients]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (id) => {
    setAddedClients((prev) => {
      return prev.map((c) => (c.id === id ? { ...c, ...editValues } : c));
    });
    setEditingId(null);
  };

  const handleEdit = (client) => {
    setEditingId(client.id);
    setEditValues({
      policy: client.policy,
      name: client.name,
      address: client.address,
      email: client.email,
      phone: client.phone,
      insuranceType: client.insuranceType,
      enrollmentDate: client.enrollmentDate,
      notes: client.notes,
    });
  };

  /*
const handleRemove = async (id) => {
  try {
    await axios.delete(`${API}/api/v1/employees/${id}`);
    setAddedEmployee((prev) => {
      return prev.filter((employee) => employee.id !== id);
    });
  } catch (error) {
    console.error("Could not delete. Please try again.", error);
  }
};
*/

  const handleRemove = (id) => {
    setAddedClients((prev) => {
      return prev.filter((client) => client.id !== id);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!addedClients) return alert("Please provide all information");

    const fakeId = Date.now();
    const newClient = {
      id: fakeId,
      ...clientForm,
    };

    const updatedClient = [...addedClients, newClient];
    setAddedClients(updatedClient);

    setClientForm({
      policy: "",
      name: "",
      address: "",
      email: "",
      phone: "",
      insuranceType: "",
      enrollmentDate: "",
      notes: "",
    });
    setShowForm(false);
  };

  return (
    <>
      <div className="clients-page">
        <header className="site-header">
          <div className="logo">
            <img src="src/assets/ins-logo.png" className="img-logo" />
          </div>

          <div className="dashboard-box">
            <h5 className="dashboard-text">Dashboard</h5>
          </div>

          <div className="logout-box">
            <h5 className="logout-text">Logout</h5>
          </div>
        </header>
        <main>
          <div>
            <h1 className="clients-heading">Clients</h1>
          </div>

          <section className="content-container">
            <div className="title-container-clients">
              <div>
                <h2 className="heading-titles">Policy No.</h2>
              </div>
              <div>
                <h2 className="heading-titles">Name</h2>
              </div>
              <div>
                <h2 className="heading-titles">Address</h2>
              </div>
              <div>
                <h2 className="heading-titles">Email</h2>
              </div>
              <div>
                <h2 className="heading-titles">Phone</h2>
              </div>
              <div>
                <h2 className="heading-titles">
                  Insurance <br></br>Type
                </h2>
              </div>
              <div>
                <h2 className="heading-titles">Enrollment Date</h2>
              </div>
              <div>
                <h2 className="heading-titles">Notes</h2>
              </div>
            </div>
            <RenderAddedClients
              addedClients={addedClients}
              setAddedClients={setAddedClients}
              editingId={editingId}
              handleEdit={handleEdit}
              editValues={editValues}
              setEditValues={setEditValues}
              handleSave={handleSave}
              handleRemove={handleRemove}
            />
            {showForm && (
              <RenderInputs
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                addedClients={addedClients}
              />
            )}
          </section>

          <div className="add-btn-container">
            <button className="add-btn" onClick={() => setShowForm(true)}>
              Add Client
            </button>
          </div>
        </main>

        <footer>
          <p className="footer-text">
            © 2026 Marci Insurance. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

const RenderInputs = ({
  handleSubmit,
  setAddedClients,
  handleChange,
  addedClients,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <div className="input-box">
            <input
              id="policy"
              name="policy"
              onChange={handleChange}
              value={addedClients.policy}
              className="input-clients-box"
            />
          </div>

          <div className="input-box">
            <input
              id="name"
              name="name"
              onChange={handleChange}
              value={addedClients.name}
              className="input-clients-box"
            />
          </div>

          <div className="input-box">
            <input
              id="address"
              name="address"
              onChange={handleChange}
              value={addedClients.address}
              className="input-clients-box"
            />
          </div>
          <div className="input-box">
            <input
              id="email"
              name="email"
              onChange={handleChange}
              value={addedClients.email}
              className="input-clients-box"
            />
          </div>
          <div className="input-box">
            <input
              id="phone"
              name="phone"
              onChange={handleChange}
              value={addedClients.phone}
              className="input-clients-box"
            />
          </div>
          <div className="input-box">
            <input
              id="insuranceType"
              name="insuranceType"
              onChange={handleChange}
              value={addedClients.insuranceType}
              className="input-clients-box"
            />
          </div>
          <div className="input-box">
            <input
              id="enrollmentDate"
              name="enrollmentDate"
              onChange={handleChange}
              value={addedClients.enrollmentDate}
              className="input-clients-box"
            />
          </div>
          <div className="input-box">
            <input
              id="notes"
              name="notes"
              onChange={handleChange}
              value={addedClients.notes}
              className="input-clients-box"
            />
          </div>
        </div>

        <div className="submit-clients-btn-container">
          <button type="submit" className="submit-clients-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

const RenderAddedClients = ({
  addedClients,
  editingId,
  handleEdit,
  editValues,
  setEditValues,
  handleSave,
  handleRemove,
}) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelectedClient(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {addedClients.map((client) => {
        const isEditing = editingId === client.id;
        return (
          <div
            key={client.id}
            ref={selectedClient === client.id ? containerRef : null}
            className="clients-container"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedClient(
                selectedClient === client.id ? null : client.id,
              );
            }}
          >
            {isEditing ? (
              <>
                <div className="form-input-container">
                  <div className="input-box">
                    <div className="policy-box">
                      <input
                        id="policy"
                        name="policy"
                        onChange={handleChange}
                        value={editValues.policy}
                        className="input-clients-box"
                      />
                      <div className="edit-btn-container">
                        <div>
                          <button
                            className="save-btn"
                            onClick={() => handleSave(client.id)}
                          >
                            Save
                          </button>
                        </div>
                        <div>
                          <button
                            className="delete-btn"
                            onClick={() => handleRemove(client.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-box">
                    <input
                      id="name"
                      name="name"
                      onChange={handleChange}
                      value={editValues.name}
                      className="input-clients-box"
                    />
                  </div>

                  <div className="input-box">
                    <input
                      id="address"
                      name="address"
                      onChange={handleChange}
                      value={editValues.address}
                      className="input-clients-box"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={editValues.email}
                      className="input-clients-box"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      value={editValues.phone}
                      className="input-clients-box"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      id="insuranceType"
                      name="insuranceType"
                      onChange={handleChange}
                      value={editValues.insuranceType}
                      className="input-clients-box"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      id="enrollmentDate"
                      name="enrollmentDate"
                      onChange={handleChange}
                      value={editValues.enrollmentDate}
                      className="input-clients-box"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      id="notes"
                      name="notes"
                      onChange={handleChange}
                      value={editValues.notes}
                      className="input-clients-box"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="policy-box">
                  <p className="client-info-para">{client.policy}</p>

                  {selectedClient === client.id && (
                    <div className="edit-btn-container">
                      <div>
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(client)}
                        >
                          Edit
                        </button>
                      </div>

                      <div>
                        <button
                          className="delete-btn"
                          onClick={() => handleRemove(client.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <p className="client-info-para">{client.name}</p>
                </div>
                <div className="address-box">
                  <p className="client-info-para">{client.address}</p>
                </div>
                <div className="email-box">
                  <p className="client-info-para">{client.email}</p>
                </div>
                <div className="phone-box">
                  <p className="client-info-para">{client.phone}</p>
                </div>
                <div>
                  <p className="client-info-para">{client.insuranceType}</p>
                </div>
                <div>
                  <p className="client-info-para">{client.enrollmentDate}</p>
                </div>
                <div className="notes-box">
                  <p className="client-info-para">{client.notes}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Clients;
