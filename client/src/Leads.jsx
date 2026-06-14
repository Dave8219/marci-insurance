import { useState, useEffect } from "react";
import "./leads.css";
// import { leads } from "./leads.js";

const Leads = () => {
  const [myLeads, setMyLeads] = useState([]);

  const [showButtons, setShowButtons] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
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
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      insuranceType: lead.insuranceType,
    });
  };

  const handleSave = (id) => {
    setMyLeads((prev) => {
      return prev.map((l) => (l.id === id ? { ...l, ...editValues } : l));
    });
    setEditingId(null);
    setShowButtons(false);
  };

  // console.log(myLeads);
  return (
    <>
      <div className="leads-page">
        <header className="site-header">
          <div className="logo">
            <img src="src/assets/ins-logo.png" className="img-logo" />
          </div>

          <div className="logout-box">
            <h5 className="logout-text">Logout</h5>
          </div>
        </header>

        <main>
          <div>
            <h1 className="leads-heading">Leads</h1>
          </div>

          <section className="leads-container">
            <div className="title-container">
              <div>
                <h2>Name</h2>
              </div>
              <div>
                <h2>Email</h2>
              </div>
              <div>
                <h2>Phone</h2>
              </div>
              <div>
                <h2>Insurance Type</h2>
              </div>
              <div>
                <h2>Created</h2>
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
  return (
    <>
      {myLeads.map((lead) => {
        const { id, name, email, phone, insuranceType, created } = lead;
        const isEditing = editingId === lead.id;
        const RenderEditButtons = () => {
          return (
            <div className="btn-container">
              <button onClick={() => handleEdit(lead)}>Edit</button>
              <button onClick={() => handleSave(lead.id)}>Save</button>
              <button onClick={() => handleRemove(id)}>Delete</button>
            </div>
          );
        };

        const handleChange = (e) => {
          const { name, value } = e.target;
          setEditValues((prev) => ({ ...prev, [name]: value }));
        };

        return (
          <div className="lead-info-box" key={id}>
            {isEditing ? (
              <>
                <div className="edit-delete-btn-box-editing">
                  <input
                    name="name"
                    id="name"
                    value={editValues.name}
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

                <div>
                  <input
                    name="email"
                    id="email"
                    value={editValues.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <input
                    name="phone"
                    id="phone"
                    value={editValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    name="insuranceType"
                    id="insuranceType"
                    value={editValues.insuranceType}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="edit-delete-btn-box">
                  <div
                    onClick={() =>
                      setShowButtons(showButtons === id ? null : id)
                    }
                  >
                    <p>{name}</p>
                  </div>
                  {showButtons === id && <RenderEditButtons />}
                </div>

                <div>
                  <p>{email}</p>
                </div>
                <div>
                  <p>{phone}</p>
                </div>
                <div>
                  <p>{insuranceType}</p>
                </div>
                <div>
                  <p>{created}</p>
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
