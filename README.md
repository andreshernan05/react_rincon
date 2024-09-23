# E-commerce de Hot Wheels

Este proyecto es una aplicación de e-commerce para la venta de Hot Wheels, desarrollada con React y Firebase.

## Características

- Catálogo de productos con filtrado por categorías
- Detalles de producto
- Carrito de compras
- Proceso de checkout
- Persistencia del carrito entre sesiones
- Integración con Firebase para almacenamiento de datos y órdenes

## Tecnologías utilizadas

- React
- React Router
- Firebase (Firestore)
- SweetAlert2 para notificaciones
- CSS personalizado

## Instalación

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Configura tus credenciales de Firebase en `src/main.jsx`
4. Inicia la aplicación con `npm run dev`

## Estructura del proyecto

- `src/components`: Contiene todos los componentes de React
- `src/context`: Contiene el contexto del carrito
- `src/firebase`: Configuración y funciones relacionadas con Firebase
- `src/styles`: Archivos CSS para estilos personalizados

## Componentes principales

- `ItemListContainer`: Muestra la lista de productos
- `ItemDetailContainer`: Muestra los detalles de un producto
- `CartWidget`: Icono del carrito con contador de items
- `Checkout`: Maneja el proceso de finalización de compra

## Contexto

- `CartContext`: Maneja el estado global del carrito y sus operaciones

## Uso

1. Navega por el catálogo de productos
2. Añade productos al carrito
3. Ajusta las cantidades en el carrito según sea necesario
4. Procede al checkout para finalizar la compra
5. Completa la información del comprador
6. Confirma la orden

## Mejoras futuras

- Implementar autenticación de usuarios
- Añadir página de perfil de usuario
- Implementar sistema de búsqueda de productos
- Añadir más opciones de pago
- Mejorar el diseño responsive

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de crear un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)