
const sendEmail = async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
  
      //  un transporteur SMTP
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'azzabialia1@gmail.com',
          pass: 'eimu mrue nkdg urrm' 
        }
      });
  
      // Configurez les informations de l'email
      let mailOptions = {
        from: email,
        to: 'informationadvan@gmail.com', // @ email de destination
        subject: subject,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
      };
  
      // Envoyez l'email
      let info = await transporter.sendMail(mailOptions);
  
      console.log("E-mail envoyé: %s", info.messageId);
      res.status(200).json({ success: true, message: 'Votre e-mail a été envoyé avec succès!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
  };