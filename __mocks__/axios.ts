import axios, { AxiosResponse } from 'axios';

// Axios'u doğrudan mockla
const mockAxios = jest.createMockFromModule('axios') as jest.Mocked<typeof axios>;

// Axios post metodunu güncelle ve doğru tiplemeleri sağla
mockAxios.post.mockResolvedValueOnce({
  data: {
    choices: [{ message: 'Assistant 1 response' }],
    usage: { total_tokens: 42 },
  },
} as AxiosResponse);

mockAxios.post.mockResolvedValueOnce({
  data: {
    choices: [{ message: 'Assistant 2 response' }],
    usage: { total_tokens: 24 },
  },
} as AxiosResponse);

export default mockAxios;
