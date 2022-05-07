import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6309166e4e1790",
    pass: "efdd99a8e5eea8"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail ({subject, body}: SendMailData){
    await transport.sendMail({
    from: 'Equipe Widget <oi@teste.com>',
    to: 'Vitor Widget <vittorbassdev@gmail.com',
    subject: subject,
    html: body,
  })

  }
}