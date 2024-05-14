const sendEmail = async (to, subject, text) => {
  try {
      // Créer un transporteur SMTP
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'azzabialia1@gmail.com',
              pass: 'eimu mrue nkdg urrm'
          }
      });

      // Configurez les informations de l'e-mail
      let mailOptions = {
          from: 'azzabialia1@gmail.com', // Votre adresse e-mail
          to: to, // Adresse e-mail du patient
          subject: subject,
          text: text
      };

      // Envoyer l'e-mail
      let info = await transporter.sendMail(mailOptions);

      console.log("E-mail envoyé: %s", info.messageId);
      return { success: true, message: 'Votre e-mail a été envoyé avec succès!' };
  } catch (error) {
      console.error(error);
      return { success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' };
  }
};
module.exports = { sendEmail }; 
