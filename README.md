📘 Manual de Usuario – Sistema de Gestión Académica
Bienvenido al sistema de gestión de cursos y docentes del Instituto San Juan. Este proyecto está dividido en dos partes:
    🔙 Backend (API): Lógica y conexión con base de datos (Node.js + MongoDB).
    🖥️ Frontend: Interfaz web para el usuario (HTML, CSS, JS).

✅ Requisitos Previos
Antes de empezar, asegúrese de tener instalado:
    - Node.js (incluye npm)

Verificar instalación:
    node -v
    npm -v

    Nota: Si no están instalados, descárguelos desde: https://nodejs.org/es (recomendada: versión LTS)

⚙️ Paso 1: Configurar y Levantar el Backend (API)
    1. Abrir terminal y navegar al proyecto:
        cd ruta/al/backend

    2. Configurar conexión a la base de datos
        Asegúrese de tener un archivo .env con esta línea:
            MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/institutoDB

    3. Instalar las dependencias
        npm install

    4. Levantar el servidor
        npm run dev

        Verás mensajes como:
            Servidor funcionando en el puerto 4000
            MongoDB conectado

🚀 Paso 2: Ejecutar el Frontend (La Página Web)
    Ir a la carpeta frontend.
    Hacer doble clic en index.html para abrir la página en su navegador.

🧪 ¡Listo!
Ya puedes:
    - Agregar docentes
    - Crear cursos
    - Visualizar la información en tiempo real

La web se comunica directamente con el servidor que dejaste corriendo. Asegúrate de mantener la terminal abierta mientras lo usas.