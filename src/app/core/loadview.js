const htmlModules = {
  dashboard: () => import('../views/dashboard/dashboard.html?raw'),
  lesson: () => import('../views/lesson/lesson.html?raw')
};

const jsModules = {
  dashboard: () => import('../views/dashboard/dashboard.js'),
  lesson: () => import('../views/lesson/lesson.js')
};

export default async function loadView(viewName, params) {
  const app = document.querySelector("#app");
  const headerContainer = document.querySelector("#header");

  // Carrega HTML
  const htmlImport = htmlModules[viewName];
  if (!htmlImport) {
    app.innerHTML = `<p>View não encontrada: ${viewName}</p>`;
    return;
  }
  const html = await htmlImport();
  app.innerHTML = html.default || html;

  // Carrega JS
  const jsImport = jsModules[viewName];
  if (jsImport) {
    const module = await jsImport();
    if (module && module.default) {
      module.default(params);
    }
  }

  // Carrega header
  const headerHtml = await import(`../components/layout/header.html?raw`);
  headerContainer.innerHTML = headerHtml.default || headerHtml;
}
