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
          danger100: "#171717",
          neutral100: "#171717",
          primary100: "#171717",
          secondary100: "#171717",
          success100: "#171717",
          warning100: "#171717",

          alternative200: "#262626",
          danger200: "#262626",
          neutral150: "#404040", //left-menu-border & other-borders
          neutral200: "#404040", //input-border
          primary200: "#404040",
          secondary200: "#262626",
          success200: "#262626",
          warning200: "#262626",

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
        "Auth.form.welcome.title": "Noticias 360",
        "Auth.form.welcome.subtitle": "Bienvenido! Inicia sesión con tu cuenta",
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
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
