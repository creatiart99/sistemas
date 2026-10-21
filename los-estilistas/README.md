# Los Estilistas × Samuel Acuña — Mapa de transformación a 6 meses

**Sitio:** https://creatiart99.github.io/sistemas/los-estilistas/ (sujeto a que GitHub Pages esté activo desde main/root)

El panel no es una landing comercial convencional: muestra un mapa mental conectado del negocio con **6 pilares → 24 sistemas propuestos → resultados esperados**, y una hoja de ruta de seis meses con iniciativas por pilar.

## Componentes
- `index.html`: diseño responsive, canvas conectado con zoom, rutas por meses, inventario de sistemas y resultados.
- `data.js`: seis pilares, objetivos de cada mes, 36 conjuntos de actividades (3 acciones por conjunto) y fichas de 24 sistemas.
- `app.js`: interactividad, conexiones gráficas, filtro y enfoque por pilar, panel de detalle, buscador y exportación CSV.
- `logo.svg`: representación vectorial de marca sobre fondo crema y sin marco circular; ajustar a los vectores oficiales del cliente antes de uso definitivo.
- `favicon.svg`: monograma compacto LE para el navegador.

## Cómo usar
1. El mapa mental se puede desplazar y ampliar con los controles.
2. Seleccionar un pilar en la columna lateral centra y amplía su rama.
3. Hacer clic sobre un sistema muestra su funcionamiento, resultado, entregable, indicador, meses y dependencias.
4. Las pestañas `6 meses`, `24 sistemas` y `Resultados` permiten navegar la propuesta desde otras vistas.
5. El inventario se puede exportar en CSV.

## Alcance y límites
Esta versión es una **proyección conceptual**, no un software conectado ni una promesa de crecimiento garantizado. Los 24 sistemas aún **no están implementados**. El orden y los resultados deben validarse con información interna, permisos, contratos, presupuesto y supervisión humana. No se han definido porcentajes de mejora reales.

## Marca
El panel utiliza una paleta crema, nude y acentos de color cálido, inspirada en el material entregado. Para fidelidad absoluta de la marca, sustituir los SVG por el archivo maestro aprobado del logo; el actual es una aproximación vectorial y no un arte original certificado.
