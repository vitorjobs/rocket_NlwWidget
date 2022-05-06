import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6309166e4e1790",
    pass: "efdd99a8e5eea8"
  }
});

routes.post('/feedbacks', async (req, res) =>{

  const {type, comment, screenshot} = req.body

  const feedback = 

  await transport.sendMail({
    from: 'Equipe Widget <oi@teste.com>',
    to: 'Vitor Widget <vittorbassdev@gmail.com',
    subject: 'Novo Feedback',
    html: [
      `<p> Tipo de Feedback: ${type}</p>`,
      `<p> Comentário de Feedback ${comment}</p>`,
    ].join('\n')
  })

  return res.status(201).json({data : feedback})
})