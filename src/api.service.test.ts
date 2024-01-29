import { describe, expect, afterEach, test, vi } from 'vitest'
import { fetchCountries } from './api.service'

describe('fetchCountries', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    describe('When the request is successfull', () => {
        describe('And the status is 200', () => {
            test('It should return the correct data', async () => {
                const mockData = {
                    mockData: 'ok'
                }

                vi.stubGlobal('fetch', vi.fn(() => ({
                    ok: true,
                    status: 200,
                    json: vi.fn(() => (mockData))
                })))

                const result = await fetchCountries('mockCountry');
                expect(result).toEqual(mockData)
            })
        })
    })
})