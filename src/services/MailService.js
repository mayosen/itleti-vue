class MailService {
  getLetters(pageNumber) {
    return fetch(`https://vue-api.kzteams.ru/page/${pageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then(data => {
          throw new Error(data)
        });
      }
    });
  }

  getLetter(mailId) {
    return fetch(`https://vue-api.kzteams.ru/mail/${mailId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then(data => {
          throw new Error(data)
        });
      }
    });
  }

  sendLetter(letter) {
    return fetch("https://vue-api.kzteams.ru/mail", {
      method: "POST",
      body: JSON.stringify(letter),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then(data => {
          throw new Error(data)
        });
      }
    });
  }
}

export default new MailService();
