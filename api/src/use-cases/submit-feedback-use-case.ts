// Envio de novo feedback para o banco

import { MailAdapter } from "../adpters/mail-adapter"
import { FeedbacksRepository } from "../repositories/Feedbacks-repository"

interface SubmitFeedbackUseCaseRequest{
  type: string,
  comment: string,
  screenshot?: string
}

export class SubmitFeedbackUseCase {

  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ){  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type, comment, screenshot} = request 

    // VALIDAR FORMATO DA FOTO:

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error ('Invalid screenshot format')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback - Inversion Dependency',
      
      body: [
        `<p> Tipo de Feedback: ${type}</p>`,
        `<p> Comentário de Feedback ${comment}</p>`,
      ].join('\n')
    })
  }
}