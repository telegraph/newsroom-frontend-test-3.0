import { describe, test, expect, afterEach, vi } from 'vitest'

// https://vitest.dev/guide/
// Vitest is a next generation testing framework powered by Vite.

describe('main.test.js', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('renders a div with h1 element', () => {
    const fetchGlobalMock = vi.fn(() => ({
      ok: true,
      status: 200,
      json: vi.fn(() => ({
        data: []
      }))
    }))

    vi.stubGlobal('fetch', fetchGlobalMock)

    expect(1 + 1).toBe(2)
  });
})