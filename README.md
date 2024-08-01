# Iron Coffee Lovers Web App ☕️

![Coffee Lovers](assets/images/coffee-hero.jpg)

## Descripción

Bienvenido a **Iron Coffee Lovers Web App**, una aplicación web dedicada a los amantes del café. Aquí podrás encontrar recomendaciones de café según tu máquina, consejos sobre preparación, videos instructivos y mucho más.

## Estructura del Proyecto

Este proyecto está organizado de manera modular para facilitar su mantenimiento y escalabilidad. A continuación, se detalla la estructura del proyecto y la función de cada componente.

### Componentes Principales

- **Header**
  - **Header.jsx**: Renderiza el encabezado del sitio web con el logotipo y la navegación principal.

- **Navbar**
  - **Navbar.jsx**: Barra de navegación con enlaces a las diferentes páginas de la aplicación.

- **Footer**
  - **Footer.jsx**: Pie de página con enlaces de contacto y términos de servicio.

- **Hero**
  - **Hero.jsx**: Sección de héroe en la página principal con una imagen o video destacado.

### CoffeeSelector

- **CoffeeSelector.jsx**: Componente principal del selector de café.
- **CoffeeForm.jsx**: Formulario para que el usuario seleccione su tipo de máquina de café.
- **CoffeeResults.jsx**: Muestra los resultados de las recomendaciones basadas en la selección del usuario.

![Coffee Selector](assets/images/coffee-selector.png)

### WikiCoffee

- **CoffeeCollection.jsx**: Muestra una colección de artículos sobre diferentes tipos de café.
- **TipsSection.jsx**: Proporciona consejos sobre el café, como almacenamiento y preparación.
- **PreparationMethods.jsx**: Muestra diferentes métodos de preparación de café con detalles.
- **VideoGallery.jsx**: Galería de videos relacionados con el café, incluyendo tutoriales y reseñas.
- **WikiCoffee.jsx**: Componente principal que combina todos los elementos de la sección WikiCoffee.

![Wiki Coffee](assets/images/wiki-coffee.png)

### CoffeePot

- **CoffeePotCard.jsx**: Tarjeta individual para mostrar información sobre una cafetera.
- **CoffeePotList.jsx**: Lista de todas las cafeteras disponibles.
- **AddNewCoffeePotForm.jsx**: Formulario para agregar una nueva cafetera.
- **EditCoffeePotForm.jsx**: Formulario para editar una cafetera existente.
- **DeleteCoffeePotForm.jsx**: Formulario para eliminar una cafetera.

### Coffee

- **CoffeeCard.jsx**: Tarjeta individual para mostrar información sobre un café.
- **CoffeeList.jsx**: Lista de todos los cafés disponibles.
- **AddNewCoffeeForm.jsx**: Formulario para agregar un nuevo café.
- **EditCoffeeForm.jsx**: Formulario para editar un café existente.
- **DeleteCoffeeForm.jsx**: Formulario para eliminar un café.

### Shared Components

- **Button.jsx**: Componente de botón reutilizable.
- **Select.jsx**: Componente de selección reutilizable.
- **Input.jsx**: Componente de entrada de texto reutilizable.
- **Carousel.jsx**: Componente para crear carruseles de imágenes o contenido.
- **Placeholders.jsx**: Marcadores de posición mientras se carga el contenido.
- **Spinner.jsx**: Spinners de carga.
- **WarningDeleteAdvice.jsx**: Advertencias y consejos antes de realizar una acción de eliminación.

### Páginas

- **HomePage.jsx**: Página principal de la aplicación.
- **CoffeePage.jsx**: Página dedicada al selector de café.
- **WikiCoffeePage.jsx**: Página de WikiCoffee con consejos, preparaciones, videos, etc.
- **AboutPage.jsx**: Página sobre la empresa o el proyecto.
- **ErrorPage.jsx**: Página de error para rutas no encontradas.

### Recursos

- **assets/images/**: Carpeta para imágenes utilizadas en la aplicación.
- **assets/styles/**: Carpeta para archivos CSS.
  - **main.css**: Estilos globales.
  - **CoffeeSelector.css**: Estilos específicos para el selector de café.
  - **WikiCoffee.css**: Estilos específicos para la sección WikiCoffee.

## Instalación

Para ejecutar este proyecto en tu máquina local:

1. Clona este repositorio: `git clone https://github.com/tu-usuario/iron-coffee-lovers-web-app.git`
2. Navega al directorio del proyecto: `cd iron-coffee-lovers-web-app`
3. Instala las dependencias: `npm install`
4. Ejecuta la aplicación: `npm start`

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría realizar.

## Licencia

Este proyecto está bajo la licencia MIT.

