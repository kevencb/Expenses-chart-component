# Frontend Mentor - Expenses chart component

Este proyecto utiliza JavaScript para visualizar datos en forma de un gráfico de barras. Los datos se cargan desde un archivo JSON, y la altura de cada barra se calcula dinámicamente utilizando una regla de tres.

## Uso

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener un servidor local para cargar los datos JSON (puede ser necesario según tu entorno de desarrollo).
3. Abre el archivo `index.html` en tu navegador.

## Detalles del Código

- `index.html`: Contiene la estructura básica del proyecto.
- `script.js`: Código JavaScript que carga los datos desde `data.json` y visualiza el gráfico de barras.
- `data.json`: Archivo que contiene los datos en formato JSON.

## Funcionalidades

- Visualización de datos en forma de un gráfico de barras.
- Destacado del valor más alto con un color de fondo diferente.
- Mostrar el valor de cada barra al pasar el ratón sobre ella.

## Cómo funciona el cálculo de altura

Se utiliza una regla de tres para calcular la altura de cada barra dinámicamente. La fórmula es la siguiente: