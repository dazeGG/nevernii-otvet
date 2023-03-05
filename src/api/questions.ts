import api from '@/api';

const getQuestion = (id: number | string): Promise<Response> => api.get(`/question/${id}/`);

const createQuestion = (data: FormData): Promise<Response> => api.post('/question/', data);

export {getQuestion, createQuestion};
