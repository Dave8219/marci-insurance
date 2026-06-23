import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./leads.css";
// import { leads } from "./leads.js";

const formatPhoneNumber = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
};

const Leads = () => {
  const [myLeads, setMyLeads] = useState([]);

  const [showButtons, setShowButtons] = useState(null);
  const [showAddLead, setShowAddLead] = useState(false);
  const [newLead, setNewLead] = useState({
    status: "new",
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    notes: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({
    status: "",
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    notes: "",
  });

  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem("leads")) || [];

    setMyLeads(savedLeads);
  }, []);
  /*
  const [addedLeads, setAddedLeads] = useState(() => {
    const saved = localStorage.getItem("addedLeads");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("addedLeads", JSON.stringify(addedLeads));
  });
*/
  const handleRemove = (id) => {
    setMyLeads((prev) => {
      const updatedLeads = prev.filter((lead) => lead.id !== id);

      localStorage.setItem("leads", JSON.stringify(updatedLeads));

      return updatedLeads;
    });
  };

  const handleEdit = (lead) => {
    setEditingId(lead.id);
    setEditValues({
      status: lead.status,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      insuranceType: lead.insuranceType,
      notes: lead.notes,
    });
  };

  const handleSave = (id) => {
    setMyLeads((prev) => {
      const updatedLeads = prev.map((l) =>
        l.id === id ? { ...l, ...editValues } : l,
      );

      localStorage.setItem("leads", JSON.stringify(updatedLeads));

      return updatedLeads;

      /*
      return prev.map((l) => (l.id === id ? { ...l, ...editValues } : l));
      */
    });

    setEditingId(null);
    setShowButtons(false);
  };

  const handleAddLead = () => {
    const lead = {
      id: Date.now(),
      created: new Date().toLocaleDateString(),
      ...newLead,
    };

    const updatedLeads = [...myLeads, lead];

    setMyLeads(updatedLeads);

    localStorage.setItem("leads", JSON.stringify(updatedLeads));

    setNewLead({
      status: "new",
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      notes: "",
    });

    setShowAddLead(false);
  };

  // console.log(myLeads);
  return (
    <>
      <div className="leads-page">
        <header className="site-header">
          <div className="logo">
            <Link to="/">
              <img
                src="src/assets/barrera-logo-no-background.png"
                className="img-logo"
                alt="image of business logo"
              />
            </Link>
          </div>

          <div className="dashboard-box">
            <Link to="/dashboard">
              <h5 className="dashboard-text">Dashboard</h5>
            </Link>
          </div>

          <div className="logout-box">
            <h5 className="logout-text">Logout</h5>
          </div>
        </header>

        <div className="leads-heading-container">
          <h1 className="leads-heading">Leads</h1>
        </div>

        <main className="main-content-container">
          <section className="leads-container">
            <div className="title-container">
              <div>
                <h2 className="leads-titles">Status</h2>
              </div>
              <div>
                <h2 className="leads-titles">Name</h2>
              </div>
              <div>
                <h2 className="leads-titles">Email</h2>
              </div>
              <div>
                <h2 className="leads-titles">Phone</h2>
              </div>
              <div>
                <h2 className="leads-titles">Insurance Type</h2>
              </div>

              <div>
                <h2 className="leads-titles">Notes</h2>
              </div>

              <div>
                <h2 className="leads-titles">Created</h2>
              </div>
            </div>

            <RenderLeads
              myLeads={myLeads}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
              handleSave={handleSave}
              editValues={editValues}
              editingId={editingId}
              showButtons={showButtons}
              setShowButtons={setShowButtons}
              setEditValues={setEditValues}
            />

            <div className="add-lead-container">
              <button
                onClick={() => setShowAddLead(true)}
                className="add-lead-btn"
              >
                Add Lead
              </button>
            </div>

            {showAddLead && (
              <div className="add-lead-form">
                <input
                  placeholder="Name"
                  value={newLead.name}
                  onChange={(e) =>
                    setNewLead({
                      ...newLead,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Email"
                  value={newLead.email}
                  onChange={(e) =>
                    setNewLead({
                      ...newLead,
                      email: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="Phone"
                  value={newLead.phone}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setNewLead({
                      ...newLead,
                      phone: formatted,
                    });
                  }}
                />

                <div className="save-lead-btn-container">
                  <button onClick={handleAddLead} className="save-lead-btn">
                    Save Lead
                  </button>
                </div>
              </div>
            )}
          </section>
        </main>

        <footer className="footer-container">
          <p className="footer-text">
            © 2026 Marci Insurance. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

const RenderLeads = ({
  myLeads,
  handleRemove,
  handleSave,
  showButtons,
  setShowButtons,
  editingId,
  editValues,
  handleEdit,
  setEditValues,
}) => {
  console.log(myLeads);
  return (
    <>
      {myLeads.map((lead) => {
        const {
          id,
          status,
          name,
          email,
          phone,
          insuranceType,
          notes,
          created,
        } = lead;
        const isEditing = editingId === lead.id;
        const RenderEditButtons = () => {
          return (
            <div className="btn-container">
              <button
                onClick={() => handleEdit(lead)}
                className="leads-edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleSave(lead.id)}
                className="leads-save-btn"
              >
                Save
              </button>
              <button
                onClick={() => handleRemove(id)}
                className="leads-delete-btn"
              >
                Delete
              </button>
            </div>
          );
        };

        const RenderStartEditButtons = () => {
          return (
            <div className="btn-container">
              <button
                onClick={() => handleEdit(lead)}
                className="leads-edit-btn"
              >
                Edit
              </button>

              <button
                onClick={() => handleRemove(id)}
                className="leads-delete-btn"
              >
                Delete
              </button>
            </div>
          );
        };

        const handleChange = (e) => {
          const { name, value } = e.target;

          if (name === "phone") {
            const formatted = formatPhoneNumber(value);

            setEditValues((prev) => ({
              ...prev,
              phone: formatted,
            }));

            return;
          }

          setEditValues((prev) => ({ ...prev, [name]: value }));
        };

        return (
          <div
            className="lead-info-box"
            key={id}
            onClick={() => setShowButtons(showButtons === id ? null : id)}
          >
            {isEditing ? (
              <>
                <div className="status-badge-container">
                  <p className={`status-badge status-${status}`}>{status}</p>
                  <input
                    className="edit-lead-input"
                    name="status"
                    id="status"
                    value={editValues.status}
                    onChange={handleChange}
                  />
                  {showButtons === lead.id && (
                    <RenderEditButtons
                      handleRemove={handleRemove}
                      handleEdit={handleEdit}
                      lead={lead}
                      handleSave={handleSave}
                    />
                  )}
                </div>
                <div className="edit-delete-btn-box-editing">
                  <input
                    className="edit-lead-input"
                    name="name"
                    id="name"
                    value={editValues.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <input
                    className="edit-lead-input"
                    name="email"
                    id="email"
                    value={editValues.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <input
                    className="edit-lead-input"
                    name="phone"
                    id="phone"
                    value={editValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="edit-lead-input"
                    name="insuranceType"
                    id="insuranceType"
                    value={editValues.insuranceType}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="edit-lead-input"
                    name="notes"
                    id="notes"
                    value={editValues.notes}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="status-badge-container">
                  <p className={`status-badge status-${status}`}>{status}</p>
                  {showButtons === id && <RenderStartEditButtons />}
                </div>

                <div>
                  <p className="paragraph-info">{name}</p>
                </div>

                <div>
                  <p className="paragraph-info">{email}</p>
                </div>
                <div>
                  <p className="paragraph-info">{formatPhoneNumber(phone)}</p>
                </div>
                <div>
                  <p className="paragraph-info">{insuranceType}</p>
                </div>
                <div>
                  <p className="paragraph-info">{notes}</p>
                </div>
                <div>
                  <p className="paragraph-info">{created}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

/*
 <div>
        <h2>Notes</h2>
      </div>

      <div>
        <p>Called but customer did not answer</p>
      </div>

      <div className="input-container">
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </div>
*/

export default Leads;
