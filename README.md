# 📘 Manual de Usuario – Sistema de Gestión Académica

Bienvenido al **Sistema de Gestión Académica** del Instituto San Juan. Este proyecto permite gestionar cursos y docentes a través de una interfaz web conectada a una API backend.

El sistema está compuesto por dos partes principales:

- 🔙 **Backend (API):** Lógica y conexión a base de datos – *Node.js + MongoDB*
- 🖥️ **Frontend:** Interfaz de usuario – *HTML, CSS, JavaScript*

---

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/es) (incluye npm)  
  > Recomendado: versión LTS

Puedes verificar la instalación ejecutando en la terminal:

```bash
node -v
npm -v

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