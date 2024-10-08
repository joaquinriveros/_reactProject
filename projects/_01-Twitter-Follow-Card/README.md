# Twitter Follow Card

Este proyecto es una tarjeta interactiva al estilo de Twitter donde los usuarios pueden seguir o dejar de seguir a un usuario de Twitter. Está construido utilizando React, con la configuración de desarrollo optimizada por Vite y gestionado con Node.js (npm). Los estilos y la estructura están definidos con HTML, CSS, JavaScript, JSX y JSON.

# Características

- Muestra una tarjeta de usuario con detalles como el nombre y el handle de Twitter.
- Los usuarios pueden seguir o dejar de seguir a la cuenta haciendo clic en el botón de interacción.
- El estado del botón cambia dinámicamente entre "Seguir" y "Siguiendo".
- Efecto visual y transiciones suaves al cambiar de estado.
  
# Tecnologías Utilizadas

- Node.js (npm): Para la gestión de dependencias y scripts del proyecto.
- React (JSX): Biblioteca para crear la interfaz de usuario interactiva utilizando JSX.
- Vite: Herramienta de desarrollo rápida y moderna para crear proyectos con React.
- HTML/CSS/JS: Para la estructura y estilo de la tarjeta.
- JSON: Utilizado para almacenar y manipular datos de forma sencilla.

# Requisitos

Asegúrate de tener instalados los siguientes elementos antes de iniciar el proyecto:

- Node.js (versión 14 o superior)
- npm (que viene con Node.js)
  
# Instalación

1. Clonar el repositorio:
   git clone https://github.com/tu-usuario/twitter-follow-card.git
   cd twitter-follow-card

2. Instalar dependencias:
   npm install

3. Iniciar el proyecto:
   npm run dev

4. Abre tu navegador en http://localhost:3000 para ver la tarjeta interactiva en acción.

# Estructura del Proyecto
```
/src
  /components
    TwitterFollowCard.jsx    # Componente principal de la tarjeta en JSX
  /assets
    styles.css               # Estilos de la tarjeta
  /data
    users.json               # Datos JSON de usuarios
  App.jsx                    # Punto de entrada de React en JSX
  main.jsx                   # Configuración de React con Vite
index.html                   # Estructura HTML principal
vite.config.js               # Configuración de Vite
```
# Uso

- El componente TwitterFollowCard renderiza la tarjeta del usuario con un botón que cambia de estado según si se sigue o no al usuario.
- Los datos del usuario se almacenan y gestionan utilizando archivos JSON.
- Los estilos y el diseño responsivo se manejan en el archivo styles.css.

# Scripts Disponibles

- npm run dev: Ejecuta el proyecto en modo de desarrollo.
- npm run build: Construye la aplicación para producción en la carpeta dist/.
- npm run preview: Previsualiza el build de producción.

# Personalización

Puedes personalizar la tarjeta modificando el componente TwitterFollowCard o los datos en users.json para cambiar el diseño o agregar más funcionalidades, como una API de integración con Twitter.

# Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes sugerencias, abre un issue o crea un pull request en el repositorio.

# Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

¡Gracias por visitar este proyecto!
