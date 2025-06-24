import React, { useState } from 'react';
import './JoinUs.css';

const initialForm = {
  firstName: '',
  lastName: '',
  rollNo: '',
  email: '',
  reason: '',
  roles: {
    developer: false,
    social: false,
    archive: false,
  },
};

function validate(form) {
  const errors = {};
  if (!form.firstName || form.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  }
  if (!form.lastName || form.lastName.trim().length < 1) {
    errors.lastName = 'Last name is required.';
  }
  // Example roll number: 21BCE1234 (adjust regex as needed)
  if (!form.rollNo || !/^[0-9A-Za-z]{6,}$/.test(form.rollNo)) {
    errors.rollNo = 'Enter a valid roll number.';
  }
  if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.reason || form.reason.trim().length < 10) {
    errors.reason = 'Please provide at least 10 characters.';
  }
  if (!form.roles.developer && !form.roles.social && !form.roles.archive) {
    errors.roles = 'Select at least one team.';
  }
  return errors;
}

function JoinUs() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        roles: { ...prev.roles, [name]: checked },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      rollNo: true,
      email: true,
      reason: true,
      roles: true,
    });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Handle actual submission here
      alert('Application submitted!');
      setForm(initialForm);
      setTouched({});
    }
  };

  React.useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  return (
    <div className='center-wrapper'>
        <div className="joinus-container">
            <h2 className="joinus-title">Join eduArchive</h2>
            <p className="joinus-subtitle">
            “Be a part of EduArchive. Help collect, organize, or verify papers — and support the student community.”
            </p>
            <form className="joinus-form" onSubmit={handleSubmit} noValidate>
                <label>First Name
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {touched.firstName && errors.firstName && <span className="joinus-error">{errors.firstName}</span>}
                </label>
                <label>Last Name
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {touched.lastName && errors.lastName && <span className="joinus-error">{errors.lastName}</span>}
                </label>
                <label>Roll No
                <input
                    type="text"
                    name="rollNo"
                    placeholder="e.g. 21BCE1234"
                    value={form.rollNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {touched.rollNo && errors.rollNo && <span className="joinus-error">{errors.rollNo}</span>}
                </label>
                <label>E-mail
                <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {touched.email && errors.email && <span className="joinus-error">{errors.email}</span>}
                </label>
                <label>Why do you want to join?
                <textarea
                    name="reason"
                    placeholder="Tell us why you want to join (min 10 characters)"
                    value={form.reason}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {touched.reason && errors.reason && <span className="joinus-error">{errors.reason}</span>}
                </label>
                <div className="joinus-checkboxes">
                <label>
                    <input
                    type="checkbox"
                    name="developer"
                    checked={form.roles.developer}
                    onChange={handleChange}
                    />
                    <span className="joinus-checkbox-title">Developer</span>
                    <span className="joinus-checkbox-desc">Join the development team</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    name="social"
                    checked={form.roles.social}
                    onChange={handleChange}
                    />
                    <span className="joinus-checkbox-title">Social Media</span>
                    <span className="joinus-checkbox-desc">Join social media team</span>
                </label>
                <label>
                    <input
                    type="checkbox"
                    name="archive"
                    checked={form.roles.archive}
                    onChange={handleChange}
                    />
                    <span className="joinus-checkbox-title">Paper Archive Management</span>
                    <span className="joinus-checkbox-desc">Join paper archive team</span>
                </label>
                {touched.roles && errors.roles && <span className="joinus-error">{errors.roles}</span>}
                </div>
                <button type="submit" className="joinus-submit" disabled={!isValid}>Submit</button>
                {submitted && <div className="joinus-success">Thank you for applying!</div>}
            </form>
        </div>
    </div>
    
  );
}

export default JoinUs;
