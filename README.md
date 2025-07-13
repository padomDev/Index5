# 🏆 Maquetado y Animación — Pantalla de Puntuación Final

Esta parte forma parte del **Proyecto Final de Egreso** para la orientación **Bachillerato Tecnológico — TI**.  
Aquí se desarrolló el **maquetado, diseño visual y animación de la pantalla de puntuación final**, con enfoque en interactividad y efectos visuales para mejorar la experiencia del usuario.

---

## 📚 **Objetivo**

- Mostrar el resultado final de la partida con un ranking visual.
- Resaltar al ganador y al segundo puesto con barras animadas, imágenes de perfil y una corona para el primer lugar.
- Incluir botones de acción: **Revancha** y **Nueva Partida**.

---

## ✅ **Conceptos abordados**

### 📌 **Maquetado**
- Estructura HTML semántica con `div`, `section` y listas ordenadas para mostrar posiciones y puntos.
- Botones estilizados para acciones directas del jugador.
- Imágenes de usuario con marcos decorativos.

### 📌 **Estilos y Animación (CSS)**
- Uso de **Flexbox** para diseño responsivo y alineación de elementos.
- Fondos con **gradientes y overlays** para destacar contraste.
- Clases de animación (`mover-desde-abajo`, `mostrar-ranking`) con transiciones suaves.
- Personalización de barras de ranking con altura dinámica.
- Efectos hover en botones para dar retroalimentación visual.

### 📌 **Lógica de Animación (JavaScript)**
- Generación dinámica de título (`FIN DEL JUEGO`) con efecto de entrada.
- Forzado de **reflow** para asegurar que las transiciones se disparen correctamente.
- Animación escalonada del ranking y la sección de resultados.
- Preparación de eventos para navegación entre secciones.

---

## 🗂️ **Estructura de archivos**

```plaintext
/puntuacion_final.html     # Maquetado de la pantalla final
/puntuacion_final.css      # Estilos de la pantalla de puntuación
/estilos.css               # Estilos generales reutilizables (fuentes, resets)
/puntuacion_final.js       # Lógica para animación de entrada y ranking
/img/                      # Imágenes de usuarios y decoración
