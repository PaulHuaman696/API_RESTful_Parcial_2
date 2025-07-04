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
Abre la terminal y navega a la carpeta del backend:

bash
Copiar
Editar
cd ruta/al/backend
Crea un archivo .env con tu conexión a MongoDB:

env
Copiar
Editar
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/institutoDB
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia el servidor en modo desarrollo:

bash
Copiar
Editar
npm run dev
Si todo está correcto, verás mensajes como:

yaml
Copiar
Editar
Servidor funcionando en el puerto 4000
MongoDB conectado
🚀 Paso 2: Ejecutar el Frontend (Página Web)
Dirígete a la carpeta frontend.

Haz doble clic en index.html para abrir la página en tu navegador.

⚠️ Asegúrate de que el backend siga corriendo en segundo plano.

🧪 ¡Todo Listo!
Ahora puedes:

➕ Agregar docentes

📚 Crear cursos

👀 Visualizar la información en tiempo real

La página web se comunica directamente con el servidor API que configuraste en el paso anterior.