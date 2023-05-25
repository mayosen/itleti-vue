class MailService {
  getLetters(pageNumber) {

  }

  getLetter(mailId) {

  }

  sendLetter(letter) {
    fetch("https://vue-api.kzteams.ru/mail", {
      method: "POST",
      body: JSON.stringify(letter),
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
  }
}

export default new MailService();
