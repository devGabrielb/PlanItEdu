export async function GeneratePlan(templateId: number, prompt: string) {
  try {
    const response = await fetch("http://localhost:3001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ templateId, prompt }),
    });
    if (!response.ok) {
      throw new Error("Erro ao carregar templates");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
  }
}
