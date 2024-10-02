export async function fetchTemplates(): Promise<TemplateProp[]> {
  const response = await fetch("http://localhost:3001/templates", {
    cache: "no-store", // Para sempre pegar dados mais recentes
  });
  if (!response.ok) {
    throw new Error("Erro ao carregar templates");
  }
  return response.json();
}
