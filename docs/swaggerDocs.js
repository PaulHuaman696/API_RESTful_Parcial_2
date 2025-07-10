/**
 * @openapi
 * /api/cursos:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: Listar todos los cursos
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *   post:
 *     tags:
 *       - Cursos
 *     summary: Crear un nuevo curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       201:
 *         description: Curso creado
 *
 * /api/cursos/ciclo/{ciclo}:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: Obtener cursos por ciclo
 *     parameters:
 *       - name: ciclo
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 *
 * /api/cursos/{id}:
 *   get:
 *     tags:
 *       - Cursos
 *     summary: Obtener un curso por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 *   put:
 *     tags:
 *       - Cursos
 *     summary: Actualizar un curso por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CursoInput'
 *     responses:
 *       200:
 *         description: Curso actualizado
 *       404:
 *         description: No encontrado
 *   delete:
 *     tags:
 *       - Cursos
 *     summary: Eliminar un curso por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Curso eliminado
 *       404:
 *         description: No encontrado
 */

/**
 * @openapi
 * /api/docentes:
 *   get:
 *     tags:
 *       - Docentes
 *     summary: Listar todos los docentes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Docente'
 *   post:
 *     tags:
 *       - Docentes
 *     summary: Crear un nuevo docente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Docente'
 *     responses:
 *       201:
 *         description: Docente creado
 *
 * /api/docentes/{id}:
 *   get:
 *     tags:
 *       - Docentes
 *     summary: Obtener un docente por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: No encontrado
 *   put:
 *     tags:
 *       - Docentes
 *     summary: Actualizar un docente por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Docente'
 *     responses:
 *       200:
 *         description: Docente actualizado
 *       404:
 *         description: No encontrado
 *   delete:
 *     tags:
 *       - Docentes
 *     summary: Eliminar un docente por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Docente eliminado
 *       404:
 *         description: No encontrado
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     CursoInput:
 *       type: object
 *       properties:
 *         curso:
 *           type: string
 *           example: Programación Web
 *         creditos:
 *           type: number
 *           example: 4
 *         horasSemanal:
 *           type: number
 *           example: 5
 *         ciclo:
 *           type: number
 *           example: 6
 *         idDocente:
 *           type: string
 *           example: 65f4c3a9a1d3e4f5a6b7c8d8
 *     Curso:
 *       allOf:
 *         - $ref: '#/components/schemas/CursoInput'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               example: 65f4c3b7a1d3e4f5a6b7c8d9
 *     Docente:
 *       type: object
 *       properties:
 *         nombres:
 *           type: string
 *           example: Ana
 *         apellidos:
 *           type: string
 *           example: Suárez
 *         profesion:
 *           type: string
 *           example: Magister en Redes
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           example: 1990-01-15
 *         correo:
 *           type: string
 *           format: email
 *           example: ana.suarez@example.com
 */