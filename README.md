# Users List

## Descripción

Esta es mi solución para la prueva técnica sugerida por Honest Greens.

A parte de los requerimientos básicos, en esta solución se ha añadido:

- **Busqueda por nombre**: Filtro de los ususarios por nombre en tiempo real.
- **Ordenación por todos los atributos**: Además de implementar la ordenación para los tres campos sugeridos, se ha añadido la misma opción para los demás campos. Además, también se hja añadido la opción de ordenar los resultados a través de la cabezera de la tabla a parte del select en la parte superior.
- **Direccion del orden**: A parte de añadir ordenación ascendente se propone en la solucion, a través de un icono al lado del selector del campo a ordenar y también mostrándolo en la cabezera de la columna por la cuál se está ordenando, la opción de ordenar de manera descendiente.
- **Tests**: Aunque no se requería en el enunciado ni se menciona que se valorará en el Evaluation Criteria, he creído conveniente hacer unos test unitarios para los tres componentes que se incluyen en la solución.

## Tecnologías Utilizadas

- **Vue 3**: Framework progresivo de JavaScript para la construcción de interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida para Vue.js que permite una configuración mínima y un bundling eficiente.
- **Vitest**: Para facilitar la ejecucion de tests.
- **Pinia**: Para permitirnos gestionar el store y así centralizar cierta información en un solo sitio.
- **Eslint**: Para hacer linting del proyecto.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
