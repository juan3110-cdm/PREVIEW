# Lumen Oncología — Sitio Web de Demostración

Sitio web de ventas/mockup para clínicas de oncología en Venezuela.  
Desarrollado en **React + Vite + TailwindCSS**.

---

## ▶️ Cómo correr el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Compilar para producción
npm run build
```

---

## 🎬 Video del Hero

Coloca el archivo de video en:

```
public/assets/hero.mp4
```

El video se reproduce en bucle, sin sonido y con un filtro de color aplicado vía CSS.  
Resolución recomendada: **1920×1080**, formato **H.264 .mp4**, menos de 10 MB.

---

## 📧 Conectar el formulario a tu correo (EmailJS)

El formulario de consulta envía los datos directamente a tu Gmail usando **EmailJS** — sin backend, gratis hasta 200 envíos/mes.

### Pasos de configuración:

**1. Crear cuenta en EmailJS**  
→ https://www.emailjs.com (plan gratuito)

**2. Conectar Gmail**  
Dashboard → *Email Services* → *Add Service* → selecciona **Gmail**  
Autoriza tu cuenta `aguadoj673@gmail.com` y copia el **Service ID**.

**3. Crear una plantilla de correo**  
Dashboard → *Email Templates* → *Create New Template*

Ejemplo de plantilla:
```
Asunto: Nueva consulta — {{from_name}} ({{area}})

Nombre:    {{from_name}}
Correo:    {{from_email}}
Teléfono:  {{phone}}
Fecha:     {{preferred_date}}
Área:      {{area}}

Mensaje:
{{message}}

────────────────
Confirmación: {{confirm_num}}
Clínica: {{clinic_name}}
```

Copia el **Template ID**.

**4. Obtener tu Public Key**  
Dashboard → *Account* → *General* → copia tu **Public Key**.

**5. Pegar las claves en `src/config.js`:**

```js
export const EMAILJS = {
  publicKey:  'aBcDeFgHiJkLmNoPq',    // ← tu Public Key
  serviceId:  'service_xxxxxxx',       // ← tu Service ID
  templateId: 'template_xxxxxxx',     // ← tu Template ID
  toEmail:    'aguadoj673@gmail.com',  // ← destino (ya configurado)
};
```

Guarda el archivo y el formulario empezará a enviar correos de inmediato.

---

## 📱 WhatsApp flotante

El botón de WhatsApp abre un chat con el número y mensaje configurados en `src/config.js`:

```js
export const WHATSAPP_NUMBER  = '34607587396'; // número real para el demo (España)
export const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir información…';
```

Para cambiarlo por el número real del cliente, reemplaza `WHATSAPP_NUMBER` con solo dígitos (sin `+` ni espacios).

---

## 🏥 Datos del cliente — dónde cambiarlos

Todo el contenido editable está centralizado:

| Archivo | Qué contiene |
|---|---|
| `src/config.js` | Nombre clínica, teléfonos, dirección, horario, email, EmailJS, WhatsApp |
| `src/data/treatments.js` | 10 tratamientos con ícono, título y descripción |
| `src/data/team.js` | 4 médicos — nombre, cargo, credenciales, foto |
| `src/data/testimonials.js` | 4 testimonios de pacientes |

Para cambiar el nombre de la clínica en toda la app, edita solo `CLINIC.name` en `src/config.js`.

---

## 🗂 Estructura del proyecto

```
src/
├── config.js                  ← configuración central del cliente
├── data/
│   ├── treatments.js          ← 10 tratamientos
│   ├── team.js                ← equipo médico
│   └── testimonials.js        ← testimonios
├── components/
│   ├── Hero.jsx               ← hero con video y nav embebida
│   ├── AccordionRow.jsx       ← fila de acordeón reutilizable
│   ├── AccordionContent.jsx   ← contenido de cada sección + formulario
│   ├── Footer.jsx             ← pie de página oscuro
│   └── WhatsAppButton.jsx     ← botón flotante
└── App.jsx                    ← ensamblaje de la página
```

---

## 🔒 Notas de seguridad

- La **Public Key de EmailJS** es pública por diseño (vive en el frontend). No es un secreto.  
- El **Service ID** y **Template ID** también son seguros en el frontend.  
- Para limitar el abuso, activa las **Domain Restrictions** en tu panel de EmailJS → *Account* → *Security*.

---

*Contenido de demo — todos los nombres, teléfonos y direcciones son ficticios.*
