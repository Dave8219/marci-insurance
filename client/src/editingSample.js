
{isEditing ? (
              <>
                <div className="status-badge-container">
                  <p className={`status-badge status-${status}`}>{status}</p>
                  <select
                    className="edit-lead-select"
                    name="status"
                    id="status"
                    value={editValues.status}
                    onChange={handleChange}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="client">Client</option>
                  </select>
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
                <div></div>
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
                  
                </div>

                <div>
                  <p className="paragraph-info">{name}</p>
                </div>

                <div className="email-container">
                  <p className="paragraph-info">{email}</p>
                </div>
                <div>
                  <p className="paragraph-info">{formatPhoneNumber(phone)}</p>
                </div>
                <div>
                  <p className="paragraph-info">{insuranceType}</p>
                </div>
                <div
                  className="message-container"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMessage(message || "No message provided");
                  }}
                >
                  <p className="paragraph-info">
                    {(message || "No message").slice(0, 50)}...
                  </p>
                </div>

                <div>
                  <p className="paragraph-info">{notes}</p>
                </div>
                <div>
                  {<p className="paragraph-info">{created}</p>}
                  <p className="paragraph-info">
                    {new Date(lead.created).toLocaleDateString()}
                  </p>
                </div>
              </>
            )}
          </div>
        );
})}


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
