// Envio de novo feedback para o banco

import { FeedbacksRepository } from "../repositories/Feedbacks-repository"

interface SubmitFeedbackUseCaseRequest{
  type: string,
  comment: string,
  screenshot?: string
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbacksRepository
  ){  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type, comment, screenshot} = request 

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })
  }
}