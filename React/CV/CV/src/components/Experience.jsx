import { useState } from "react";

export default function Experience({addExp,setAddExp, initials, experience, setExperience }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null); 
    const [addSection, setAddSection] = useState(false);
    

    function toggle() {
        setAddSection(!addSection);
        if (!addSection && isEditing) {
            setIsEditing(false);
            setEditingIndex(null);
            setExperience(initials);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newExp = {
            companyName: experience.companyName,
            positionTitle: experience.positionTitle,
            responsibilities: experience.responsibilities,
            dateFrom: experience.dateFrom,
            dateUntil: experience.dateUntil,
        };

        if (isEditing) {
            
            const updatedExp = [...addExp];
            updatedExp[editingIndex] = newExp;
            setAddExp(updatedExp);
        } else {
            
            setAddExp([...addExp, newExp]);
        }

        
        setAddSection(false);
        setIsEditing(false);
        setEditingIndex(null);
        setExperience(initials);
    }

    function handleChange(e) {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value,
        });
    }

    function handleEditing(index) {
        
        const expToEdit = addExp[index];
        setExperience(expToEdit);
        setAddSection(true);
        setIsEditing(true);
        setEditingIndex(index);
    }

    function AddExp({ exp, index }) {
        return (
            <div className="collection">
                <p className="company">{exp.companyName}</p>
                <p className="position">{exp.positionTitle}</p>
                <p className="responsibilities">{exp.responsibilities}</p>
                <p className="dateFrom">{exp.dateFrom}</p>
                <p className="dateUntil">{exp.dateUntil}</p>
                <button className="editExp" onClick={() => handleEditing(index)}>
                    Edit
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="sectionHolder">
                {addExp.map((exp, index) => (
                    <AddExp key={index} exp={exp} index={index} />
                ))}

                {addSection && (
                    <form className="expForm">
                        <fieldset>
                            <legend>Experience Details</legend>

                            <label htmlFor="companyName">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={experience.companyName || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="positionTitle">Position Title:</label>
                            <input
                                type="text"
                                id="positionTitle"
                                name="positionTitle"
                                value={experience.positionTitle || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="responsibilities">Main Responsibilities:</label>
                            <textarea
                                id="responsibilities"
                                name="responsibilities"
                                rows="4"
                                cols="30"
                                value={experience.responsibilities || ""}
                                onChange={handleChange}
                            ></textarea>

                            <label htmlFor="dateFrom">Date From:</label>
                            <input
                                type="date"
                                id="dateFrom"
                                name="dateFrom"
                                value={experience.dateFrom || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="dateUntil">Date Until:</label>
                            <input
                                type="date"
                                id="dateUntil"
                                name="dateUntil"
                                value={experience.dateUntil || ""}
                                onChange={handleChange}
                            />
                        </fieldset>

                        <button type="submit" onClick={handleSubmit}>
                            {isEditing ? "Update" : "Save"}
                        </button>
                    </form>
                )}
            </div>
            <button onClick={toggle}>
                {addSection ? "Close" : "Add Experience"}
            </button>
        </>
    );
}
