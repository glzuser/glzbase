import React, { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";

// Objeto con los datos de cada idioma (bandera + nombre)
const languageData = {
  "pt-BR": { flag: "🇧🇷", name: "Português (BR)" },
  "en": { flag: "🇺🇸", name: "English" },
  "es": { flag: "🇪🇸", name: "Español" },
  "fr": { flag: "fr", name: "Frances" }
};

const UserLanguageSelector = ({ iconOnly = true }) => {
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);
  const { user } = useContext(AuthContext);

  const handleOpenLanguageMenu = (event) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setLanguageMenuAnchorEl(null);
  };

  const handleChangeLanguage = async (language) => {
    try {
      await i18n.changeLanguage(language); // Cambia el idioma inmediatamente
      localStorage.setItem("language", language); // Guarda la preferencia
    } catch (error) {
      console.error("Error al cambiar idioma:", error);
    }
    handleCloseLanguageMenu();
    window.location.reload(false);
  };

  // Obtiene el idioma actual o usa 'es' como predeterminado
  const currentLanguage = user?.language || i18n.language || "es";

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpenLanguageMenu}
        aria-label="Seleccionar idioma"
      >
        <TranslateIcon />
        <span style={{ fontSize: "1.2rem", marginRight: 12, paddingLeft: "10px" }}>
          Idioma
        </span>
      </IconButton>

      <Menu
        anchorEl={languageMenuAnchorEl}
        keepMounted
        open={Boolean(languageMenuAnchorEl)}
        onClose={handleCloseLanguageMenu}
      >
        {Object.entries(languageData).map(([code, { flag, name }]) => (
          <MenuItem
            key={code}
            onClick={() => handleChangeLanguage(code)}
            selected={currentLanguage === code}
          >
            <Box display="flex" alignItems="center">
              <span style={{ fontSize: "1.2rem", marginRight: 12 }}>
                {flag}
              </span>
              {name}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserLanguageSelector;
