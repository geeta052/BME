import React, { useState } from 'react';
import './InstituteLogin.css';

const InstituteLoginForm = () => {
    const [formData, setFormData] = useState({
        instituteName: '',
        establishedYear: '',
        description: '',
        collegeStream: [],
        collegePicture: null,
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleStreamSelect = (stream) => {
        setFormData(prevState => {
            const newStreams = prevState.collegeStream.includes(stream)
                ? prevState.collegeStream.filter(s => s !== stream)
                : [...prevState.collegeStream, stream];
            return { ...prevState, collegeStream: newStreams };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="fullscreen-container">
            <div className="form-container">
                <h2>Institute Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group half-width">
                            <label htmlFor="instituteName">Institute Name:</label>
                            <input
                                type="text"
                                id="instituteName"
                                name="instituteName"
                                value={formData.instituteName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group half-width">
                            <label htmlFor="establishedYear">Established Year:</label>
                            <input
                                type="number"
                                id="establishedYear"
                                name="establishedYear"
                                value={formData.establishedYear}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group full-width">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group half-width">
                            <label htmlFor="collegeStream">College Stream:</label>
                            <div className="dropdown">
                                <button type="button" onClick={handleDropdownToggle}>
                                    {formData.collegeStream.length > 0 
                                        ? formData.collegeStream.join(', ') 
                                        : 'Select Streams'}
                                </button>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        {["Engineering", "Medical", "Commerce", "Arts"].map(stream => (
                                            <label key={stream}>
                                                <input
                                                    type="checkbox"
                                                    checked={formData.collegeStream.includes(stream)}
                                                    onChange={() => handleStreamSelect(stream)}
                                                />
                                                {stream}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="form-group half-width">
                            <label htmlFor="collegePicture">College Picture:</label>
                            <input
                                type="file"
                                id="collegePicture"
                                name="collegePicture"
                                onChange={handleChange}
                                accept="image/*"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default InstituteLoginForm;
