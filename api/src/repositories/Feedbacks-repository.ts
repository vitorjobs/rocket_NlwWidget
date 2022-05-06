// QUAIS AÇÕES A API PODE FAZER COM OS FEEDBACKS NO BANCO DE DADOS 

// CREATE - cria um feedback no banco de dados

export interface FeedbackCreateData {
  type: string,
  comment: string,
  screenshot?: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}