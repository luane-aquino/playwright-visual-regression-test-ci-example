import { test, expect } from "@playwright/test";

test("página inteira", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot("pagina-inteira.png");
});

test("card normal", async ({ page }) => {
  await page.goto("/");
  const card = page.getByTestId("card").first();
  await expect(card).toHaveScreenshot("card-normal.png");
});

test("botão em hover", async ({ page }) => {
  await page.goto("/");
  const botao = page.getByRole("button", { name: "Clique aqui" }).first();
  await botao.hover();
  await expect(botao).toHaveScreenshot("botao-hover.png");
});
test("card desabilitado", async ({ page }) => {
  await page.goto("/");
  const card = page.getByTestId("card").nth(1);
  await expect(card).toHaveScreenshot("card-desabilitado.png");
});
test("página em tela de celular", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  await expect(page).toHaveScreenshot("pagina-mobile.png");
});
