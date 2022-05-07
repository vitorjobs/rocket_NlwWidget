import express from 'express'
import { NodemailerMailAdapter } from './adpters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) =>{

  const {type, comment, screenshot} = req.body
  
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter     = new NodemailerMailAdapter()

  const submitFeedbakUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter

  )

  await submitFeedbakUseCase.execute({
    type,
    comment,
    screenshot,
  })

  return res.status(201).send()

})