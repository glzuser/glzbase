import React, { useContext, useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { i18n } from "../../translate/i18n";
import { AuthContext } from "../../context/Auth/AuthContext";

  
const languageData = {
  "pt-BR": { flag: "🇧🇷", name: "Português (BR)" },
  "en": { flag: "🇺🇸", name: "English" },
  "es": { flag: "🇪🇸", name: "Español" },
  "fr": { flag: "fr", name: "Francês" }
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
  
      await i18n.changeLanguage(language); // Muda o idioma imediatamente
    } catch (error) {
      console.error("Erro ao mudar idioma:", error);
    }
    handleCloseLanguageMenu();
    window.location.reload(false);
  };

  // Objeto com os dados de cada idioma // Obtém o idioma atual ou usa 'es' como padrão
  const currentLanguage = user?.language || i18n.language || "es";

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleOpenLanguageMenu}
        aria-label="Selecionar idioma"
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
