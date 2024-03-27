import React, { useEffect, useState } from 'react';
import '../assets/css/EditTheme.css';
import ElevateAppBar from './NavBar';

function EditTheme() {
    const [isEditing, setIsEditing] = useState(false); // Local state to manage editing mode
    const [editedTheme, setEditedTheme] = useState({
      id: null,
      title: "",
      subtitle: "",
      description: ""
    });

    // Array of themes
    const [themes, setThemes] = useState([
        {
            id: 1,
            title: "Classic Birthday Party",
            subtitle: "Cheers to Another Year!",
            description: "Timeless fun for guests of all ages, reminiscent of traditional birthday celebrations with a modern twist."
        
          },
        {
            id: 2,
            title: "Superhero Spectacular",
            subtitle: "Unleash Your Powers!",
            description: "Kids can dress up as their favorite superheroes and engage in heroic challenges, while adults can embrace their inner superhero with themed cocktails and games."
        },
        {
            id: 3,
            title: "Under the Sea Adventure",
            subtitle: "Dive into Fun!",
            description: "Kids can explore the wonders of the ocean with themed games and activities, and adults can enjoy a whimsical aquatic atmosphere."
        },
        {
            id: 4,
            title: "Hollywood Red Carpet Affair",
            subtitle: "Lights, Camera, Party!",
            description: "Set up a movie trivia game, create a walk of fame with personalized stars for guests, and hire a celebrity impersonator for entertainment."
        },
        // Add more themes here
    ]);

    // State to track the currently edited theme
    const [editingThemeId, setEditingThemeId] = useState(null);
  
    // Load edited theme from local storage on page load
    useEffect(() => {
      const storedTheme = JSON.parse(localStorage.getItem('editedTheme'));
      if (storedTheme) {
        setEditedTheme(storedTheme);
      }
    }, []);
  
    const handleEdit = (theme) => {
      setIsEditing(true);
      setEditingThemeId(theme.id);
      setEditedTheme(theme);
    };
  
    const handleSave = () => {
      // Save the edited theme to local storage
      localStorage.setItem('editedTheme', JSON.stringify(editedTheme));

      // Update the themes array with the edited theme
      setThemes(prevThemes =>
        prevThemes.map(theme =>
          theme.id === editedTheme.id ? editedTheme : theme
        )
      );

      setIsEditing(false);
      setEditingThemeId(null);
    };
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
          setEditedTheme({ ...editedTheme, image: reader.result });
      };
      if (file) {
          reader.readAsDataURL(file);
      }
  };
    const handleCancel = () => {
      // Cancel editing and reset the theme to its original values
      const storedTheme = JSON.parse(localStorage.getItem('editedTheme'));
      setEditedTheme(storedTheme);
      setIsEditing(false);
      setEditingThemeId(null);
    };
  
    const handleDelete = (id) => {
      // Delete the entire box element
      setThemes(themes.filter(theme => theme.id !== id));
    };

  return (
    <div>
      <ElevateAppBar/>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">
              <span className="icon">
                <ion-icon name="logo-apple"></ion-icon>
              </span>
              <span className="title3">EventEuphoria.</span>
            </a>
          </li>
          <li>
            <a href="/admin">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/Edittheme">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title3">Edit Themes</span>
            </a>
          </li>
          <li>
                    <a href="/createtheme">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title3">Create Themes</span>
                    </a>
                </li>
          <li>
            <a href="/userinfo">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title3">User Info</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="container4">
      {themes.map(theme => (
    <div className="product-card" key={theme.id}>
        <div className={`product-img img-${theme.id}`}></div>
        <div className="product-text">
            <input
                type='text'
                value={theme.id === editingThemeId ? editedTheme.title : theme.title}
                readOnly={!isEditing || theme.id !== editingThemeId}
                onChange={(e) => setEditedTheme({ ...editedTheme, title: e.target.value })}
            />
              <input
                type='text'
                value={theme.id === editingThemeId ? editedTheme.subtitle : theme.subtitle}
                readOnly={!isEditing || theme.id !== editingThemeId}
                onChange={(e) => setEditedTheme({ ...editedTheme, subtitle: e.target.value })}
              />
              <textarea
                className="theme-description"
                value={theme.id === editingThemeId ? editedTheme.description : theme.description}
                readOnly={!isEditing || theme.id !== editingThemeId}
                onChange={(e) => setEditedTheme({ ...editedTheme, description: e.target.value })}
              />
              <br/>
              {isEditing && theme.id === editingThemeId ? (
                <div className='button-container'>
                  <button className='edit-theme-button' onClick={handleSave}>
                    Save
                  </button>&nbsp;&nbsp;
                  <button className='edit-theme-button' onClick={handleCancel}>
                    Cancel
                  </button>
                  
                </div>
             ) : (
              <>
                  <button className='edit-theme-button' type="button" onClick={() => handleEdit(theme)}>
                      Edit
                  </button>&nbsp;&nbsp;
                  <button className='edit-theme-button' onClick={() => handleDelete(theme.id)}>
                      Delete
                  </button>
              </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditTheme;
