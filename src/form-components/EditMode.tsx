import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <div className="form-switch">
                <label>
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={() => {
                            setEditMode(!editMode);
                        }}
                    />
                    {editMode ? "Switch to View Mode" : "Switch to Edit Mode"}
                </label>
            </div>

            {
                editMode ?
                    <div>
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isStudent}
                                    onChange={(e) => {
                                        setIsStudent(e.target.checked);
                                    }}
                                />
                                Are you a student?
                            </label>
                        </div>
                    </div>
                    // If not in edit mode, display the name and student status
                :   <p>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </p>

            }
        </div>
    );
}
