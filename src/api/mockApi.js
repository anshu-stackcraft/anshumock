import { petApi } from '../services/api'
export const getMockTests = () => petApi.mockTests()
export const submitMockResult = (payload) => petApi.results({ method: 'POST', body: JSON.stringify(payload) })
