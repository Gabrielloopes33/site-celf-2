import { launch } from "puppeteer";

(async () => {
  const browser = await launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"], // Adiciona opções para evitar erros em alguns ambientes
  });
  const page = await browser.newPage();

  try {
    await page.goto("http://localhost:3000/pdf", { waitUntil: "networkidle0" });

    // Adiciona um delay usando setTimeout
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Aguarda 3 segundos

    await page.pdf({
      path: "pagina.pdf",
      width: "1920px",
      height: "1920px",
      printBackground: true,
    });
    console.log("PDF gerado com sucesso!");
  } catch (error) {
    console.error("Erro ao gerar o PDF:", error.message);
  } finally {
    await browser.close();
  }
})();

