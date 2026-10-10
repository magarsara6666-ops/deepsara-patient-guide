# Deepsara Patient Guide

Nepali-first patient education landing page with English language switching.

## Website files

- `dist/index.html`: landing page
- `dist/thank-you.html`: Thank You page layout
- `dist/patient-guide.html`: patient education and downloadable guide
- `dist/landing.css`, `dist/landing.js`, `dist/app.js`: styling and interactions

## Local preview

Run `python3 -m http.server 8080 --directory dist` and open http://localhost:8080.

## Vercel deployment

Import this repository, choose **Other** as the framework, leave the build command empty, and set the output directory to `dist`.

The current version uses HTML, CSS and JavaScript, not Next.js.

## Guide delivery

The form is inactive until a secure backend and actual guide-delivery system are connected. No requests are currently transmitted or stored. WhatsApp and video integrations require verified clinic details. The counselling image is AI-generated and depicts a fictional patient.
