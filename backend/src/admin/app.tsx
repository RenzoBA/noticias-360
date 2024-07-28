import AuthLogo from "./extensions/auth-logo.png";
import Favicon from "./extensions/favicon.png";
import Logo from "./extensions/logo.png";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: Favicon,
    },
    locales: ["es"],
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { releases: false },
    theme: {
      dark: {
        colors: {
          alternative100: "#171717",
          neutral100: "#171717",
          primary100: "#171717",
          secondary100: "#171717",

          alternative200: "#262626",
          neutral150: "#404040", //left-menu-border & other-borders
          neutral200: "#404040", //input-border
          primary200: "#404040",
          secondary200: "#262626",

          primary600: "#406fed",
          primary700: "#406fed",
          neutral0: "#262626", //background-foreground
          buttonPrimary500: "#406fed", //main-button-hover
          buttonPrimary600: "#0038cd", //main-button
        },
      },
      light: {
        colors: {
          primary600: "#406fed",
          primary700: "#406fed",
          buttonPrimary500: "#406fed", //main-button-hover
          buttonPrimary600: "#0038cd", //main-button
        },
      },
    },
    translations: {
      es: {
        "Auth.form.welcome.title": "Bienvenido!",
        "Auth.form.welcome.subtitle": "Inicia sesión con tu cuenta",
        "Auth.form.email.placeholder": "example@example.com",
        "Auth.form.rememberMe.label": "Recordar mi usuario",
        "Auth.link.forgot-password": "¿Olvidaste tu contraseña?",
        "Auth.link.ready": "Iniciar sesión",
        "Auth.link.signin": "Registrarme",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin":
          "Si no recibe este enlace, comuníquese con el administrador.",
        "app.components.LeftMenu.navbrand.title": "Noticias 360",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "La selección cambiará el idioma de la interfaz solo para ti.",
        "Settings.profile.form.section.experience.mode.option-label":
          "Modo {name} ",
        "content-manager.containers.SettingPage.editSettings.description":
          "Arrastra y suelta los campos para modificar el diseño.",
        "components.ViewSettings.tooltip": "Ver configuración",
        "content-manager.containers.ListPage.displayedFields":
          "Campos visualizados",
        "content-manager.global.displayedFields": "Campos visualizados",

        "components.Blocks.modifiers.bold": "Negrita (ctrl/cmd + b)",
        "components.Blocks.modifiers.italic": "Cursiva (ctrl/cmd + i)",
        "components.Blocks.modifiers.underline": "Subrayado (ctrl/cmd + u)",
        "components.Blocks.modifiers.strikethrough":
          "Tachado (ctrl/cmd + shift + s)",
        "components.Blocks.modifiers.code": "Línea de código",
        "components.Blocks.link": "Link",
        "components.Blocks.expand": "Expandir",
        "components.Blocks.collapse": "Reducir",
        "components.Blocks.popover.text": "Texto",
        "components.Blocks.popover.text.placeholder": "Ingresar link",
        "components.Blocks.popover.link": "Link",
        "components.Blocks.popover.link.placeholder": "Pegar link",
        "components.Blocks.popover.link.error":
          "Por favor ingresa un link válido",
        "components.Blocks.popover.save": "Guardar",
        "components.Blocks.popover.cancel": "Cancelar",
        "components.Blocks.popover.remove": "Eliminar",
        "components.Blocks.popover.edit": "Editar",
        "components.Blocks.blocks.selectBlock": "Seleccionar un block",
        "components.Blocks.blocks.text": "Texto",
        "components.Blocks.blocks.heading1": "Encabezado 1 (#)",
        "components.Blocks.blocks.heading2": "Encabezado 2 (##)",
        "components.Blocks.blocks.heading3": "Encabezado 3 (###)",
        "components.Blocks.blocks.heading4": "Encabezado 4 (####)",
        "components.Blocks.blocks.heading5": "Encabezado 5 (#####)",
        "components.Blocks.blocks.heading6": "Encabezado 6 (######)",
        "components.Blocks.blocks.code": "block de código (```)",
        "components.Blocks.blocks.quote": "Cita (>)",
        "components.Blocks.blocks.image": "Imagen (![)",
        "components.Blocks.blocks.unorderedList": "Lista no numerada",
        "components.Blocks.blocks.orderedList": "Lista numerada",
        "components.Blocks.dnd.instruction":
          "Para reordenar los blocks, presiona ctrl/cmd junto con Shift y las teclas de flecha hacia arriba o hacia abajo",
        "components.Blocks.dnd.reorder":
          "{item} fue movido. Nueva posición: {position}.",
      },
      en: {
        "Auth.form.welcome.title": "Welcome!",
        "Auth.form.welcome.subtitle": "Log in with your account",
        "Auth.form.email.placeholder": "example@example.com",
        "Auth.form.rememberMe.label": "Remember me",
        "Auth.link.forgot-password": "Forgot your password?",
        "Auth.link.ready": "Log in",
        "Auth.link.signin": "Sign up",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin":
          "If you do not receive this link, please contact the administrator.",
        "app.components.LeftMenu.navbrand.title": "Noticias 360",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Selecting will change the interface language for you only.",
        "Settings.profile.form.section.experience.mode.option-label":
          "Mode {name} ",
        "content-manager.containers.SettingPage.editSettings.description":
          "Drag and drop fields to modify the layout.",
        "components.ViewSettings.tooltip": "View settings",

        "components.Blocks.modifiers.bold": "Bold (ctrl/cmd + b)",
        "components.Blocks.modifiers.italic": "Italic (ctrl/cmd + i)",
        "components.Blocks.modifiers.underline": "Underline (ctrl/cmd + u)",
        "components.Blocks.modifiers.strikethrough":
          "Strikethrough (ctrl/cmd + shift + s)",
        "components.Blocks.modifiers.code": "Code line",
        "components.Blocks.link": "Link",
        "components.Blocks.expand": "Expand",
        "components.Blocks.collapse": "Collapse",
        "components.Blocks.popover.text": "Text",
        "components.Blocks.popover.text.placeholder": "Enter link",
        "components.Blocks.popover.link": "Link",
        "components.Blocks.popover.link.placeholder": "Paste link",
        "components.Blocks.popover.link.error": "Please enter a valid link",
        "components.Blocks.popover.save": "Save",
        "components.Blocks.popover.cancel": "Cancel",
        "components.Blocks.popover.remove": "Remove",
        "components.Blocks.popover.edit": "Edit",
        "components.Blocks.blocks.selectBlock": "Select a block",
        "components.Blocks.blocks.text": "Text",
        "components.Blocks.blocks.heading1": "Heading 1 (#)",
        "components.Blocks.blocks.heading2": "Heading 2 (##)",
        "components.Blocks.blocks.heading3": "Heading 3 (###)",
        "components.Blocks.blocks.heading4": "Heading 4 (####)",
        "components.Blocks.blocks.heading5": "Heading 5 (#####)",
        "components.Blocks.blocks.heading6": "Heading 6 (######)",
        "components.Blocks.blocks.code": "Code block (```)",
        "components.Blocks.blocks.quote": "Quote (>)",
        "components.Blocks.blocks.image": "Image (![)",
        "components.Blocks.blocks.unorderedList": "Unordered list",
        "components.Blocks.blocks.orderedList": "Ordered list",
        "components.Blocks.dnd.instruction":
          "To reorder blocks, press ctrl/cmd along with Shift and the up or down arrow keys",
        "components.Blocks.dnd.reorder":
          "{item} was moved. New position: {position}.",
      },
    },
  },
  bootstrap() {},
};
