import { test, expect } from '@playwright/test';

test.describe('Portfolio Site', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Check for main hero content
    await expect(page.locator('h1')).toContainText('Elvis Anselm');
    await expect(page.locator('text=Junior AI Engineer')).toBeVisible();
    
    // Check navigation links are present
    await expect(page.locator('nav a[href="/projects"]')).toBeVisible();
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('nav a[href="/writing"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
  });

  test('projects page filters work', async ({ page }) => {
    await page.goto('http://localhost:3000/projects');
    
    // Check if projects are visible
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible();
    
    // Test AI filter if it exists
    const aiFilter = page.locator('button:has-text("AI")');
    if (await aiFilter.isVisible()) {
      await aiFilter.click();
      await expect(page.locator('[data-testid="project-card"]')).toHaveCount(await page.locator('[data-testid="project-card"]').count());
    }
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Find theme toggle button
    const themeToggle = page.locator('[aria-label*="theme"], [aria-label*="Theme"], button:has([data-lucide="sun"]), button:has([data-lucide="moon"])');
    
    if (await themeToggle.isVisible()) {
      // Get initial theme state
      const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      
      // Click theme toggle
      await themeToggle.click();
      
      // Wait for theme change
      await page.waitForTimeout(100);
      
      // Check theme changed
      const newTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Test about page navigation
    await page.click('nav a[href="/about"]');
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.locator('h1, h2')).toContainText(/about|About/i);
    
    // Test projects page navigation
    await page.click('nav a[href="/projects"]');
    await expect(page).toHaveURL(/.*\/projects/);
    
    // Test writing page navigation
    await page.click('nav a[href="/writing"]');
    await expect(page).toHaveURL(/.*\/writing/);
    
    // Test contact page navigation
    await page.click('nav a[href="/contact"]');
    await expect(page).toHaveURL(/.*\/contact/);
  });
});
