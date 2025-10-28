# 🌐 Gestión de Usuarios y Roles (Node.js & Sequelize)

## 🚀 Visión General del Proyecto

Este es un proyecto backend desarrollado con **Node.js** y **Express** cuyo objetivo principal es la gestión de usuarios y roles. Implementa una API RESTful completa utilizando **PostgreSQL** como base de datos y **Sequelize** como ORM, enfocándose en buenas prácticas de conexión, modelado de datos y manejo de **transacciones**.

### 🎯 Características Principales

  * **Modelo de Datos:** Implementación de las entidades `Usuario` y `Rol`.
  * **Asociaciones:** Relación **Uno a Muchos** (`Rol` tiene muchos `Usuarios`).
  * **Operaciones CRUD:** Implementación completa de Crear, Leer, Actualizar y Eliminar.
  * **Transacciones:** Uso de transacciones de Sequelize para asegurar la **consistencia e integridad** de los datos.
  * **Tecnologías:** Node.js, Express, Sequelize y PostgreSQL.

-----

## 🛠️ Configuración del Entorno

### 1\. Requisitos Previos

Asegúrate de tener instalado lo siguiente:

  * **Node.js** (v18+)
  * **npm** (incluido con Node.js)
  * **PostgreSQL** (Servidor de base de datos)

### 2\. Instalación de Dependencias

Clona el repositorio e instala las librerías necesarias:

```bash
# Instala las dependencias principales
npm install express sequelize pg pg-hstore dotenv
```

### 3\. Configuración de la Base de Datos

1.  **Crear DB:** Crea una nueva base de datos en PostgreSQL (ej: `gestor_usuarios_roles`).

    ```sql
    CREATE DATABASE gestor_usuarios_roles;
    ```

2.  **Archivo `.env`:** Crea un archivo llamado **`.env`** en la raíz del proyecto y añade tus credenciales:

    ```env
    # .env
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=gestor_usuarios_roles
    DB_USER=tu_usuario_postgres
    DB_PASS=tu_contraseña_postgres
    PORT=3000
    ```

-----

## 📂 Estructura del Proyecto

El código sigue el patrón **Modelo-Vista-Controlador (MVC)**:

```
user-role-manager/
├── config/
│   └── db.config.js       # Configuración de conexión y pool de la DB.
├── controllers/
│   ├── user.controller.js # Lógica CRUD para Usuarios (incluye transacciones).
│   └── role.controller.js # Lógica CRUD para Roles.
├── models/
│   ├── index.js           # Inicializa Sequelize y define asociaciones.
│   ├── user.model.js      # Modelo de Usuario.
│   └── role.model.js      # Modelo de Rol.
├── routes/
│   ├── user.routes.js     # Rutas de la API para /api/users.
│   └── role.routes.js     # Rutas de la API para /api/roles.
├── .env                   # Variables de entorno.
└── server.js              # Punto de entrada de la aplicación.
```

-----

## ▶️ Ejecución del Proyecto

Para iniciar el servidor, simplemente ejecuta:

```bash
node server.js
```

El servidor estará disponible en `http://localhost:3000`.

-----

## 🔗 Endpoints de la API

Utiliza herramientas como **Postman** o **Insomnia** para probar los siguientes *endpoints* en la URL base `http://localhost:3000`.

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| **POST** | `/api/roles` | Crea un nuevo rol. |
| **GET** | `/api/roles` | Lista todos los roles. |
| **POST** | `/api/users` | Crea un nuevo usuario (debe incluir `roleId`). |
| **GET** | `/api/users` | Lista todos los usuarios (incluye detalles del rol). |
| **PUT** | `/api/users/:id` | Actualiza la información de un usuario. |
| **DELETE** | `/api/users/:id` | Elimina un usuario (implementa **transacciones**). |

-----

¿Te gustaría que te ayude a completar el código de alguna función específica que aún te falte (como una transacción en el controlador de usuarios)?
