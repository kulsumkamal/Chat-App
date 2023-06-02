import React, { useState } from 'react';

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [jobTitle, setJobTitle] = useState('Frontend Developer');
  const [email, setEmail] = useState('johndoe@example.com');
  const [location, setLocation] = useState('New York City');
  const [skills, setSkills] = useState('HTML, CSS, JavaScript');

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // You can perform further actions here, such as updating the user profile in the database
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full px-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="https://placeimg.com/200/200/people"
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          {editing ? (
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          ) : (
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
          )}
          {editing ? (
            <div className="mb-4">
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          ) : (
            <p className="text-gray-600">{jobTitle}</p>
          )}
        </div>
        <div className="mt-6">
          <div className="mb-2">
            <strong>Email:</strong>
            {editing ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            ) : (
              email
            )}
          </div>
          <div className="mb-2">
            <strong>Location:</strong>
            {editing ? (
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            ) : (
              location
            )}
          </div>
          <div className="mb-2">
            <strong>Skills:</strong>
            {editing ? (
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            ) : (
              skills
            )}
          </div>
        </div>
        <div className="flex justify-end">
          {editing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
