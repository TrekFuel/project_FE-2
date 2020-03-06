import $ from 'jquery';
import 'jquery-validation';

import { CONFIG } from './config';

// eslint-disable-next-line import/prefer-default-export
export class Post {
  constructor() {
    this.api = CONFIG.api;
  }

  sendPost() {
    const { emailInput } = CONFIG.elements;
    const { nameInput } = CONFIG.elements;
    const { countryInput } = CONFIG.elements;
    const { topicInput } = CONFIG.elements;
    const { textInput } = CONFIG.elements;

    fetch(`${this.api}/suggestedNews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          email: `${emailInput.value}`,
          name: `${nameInput.value}`,
          country: `${countryInput.value}`,
          topic: `${topicInput.value}`,
          text: `${textInput.value}`,
        },
      ),
    })
      .then((res) => {
        if (res.status !== 201) {
          // eslint-disable-next-line new-cap
          return Promise.reject(new Error(res.statusText));
        }
        return Promise.resolve(res);
      })
      .then(() => {
        emailInput.value = '';
        nameInput.value = '';
        countryInput.value = '';
        topicInput.value = '';
        textInput.value = '';
      });
  }

  // eslint-disable-next-line class-methods-use-this
  initPost() {
    const options = {
      submitHandler: () => {
        this.sendPost();

        const successMsg = document.createElement('div');
        successMsg.innerHTML = 'Ваша новость была успешно отправлена. Спасибо!';
        successMsg.className = 'alert alert-success mt-5 font-italic text-monospace';

        $('#postForm')
          .after(successMsg);
        setTimeout(() => {
          successMsg.remove();
        }, 5000);
      },

      invalidHandler: () => {
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = 'Пожалуйста, проверьте правильность ввода данных!';
        errorMsg.className = 'alert alert-danger mt-5 font-italic text-monospace';

        $('#postForm')
          .after(errorMsg);
        setTimeout(() => {
          errorMsg.remove();
        }, 5000);
      },

      rules: {
        email: {
          required: true,
          email: true,
        },
        name: {
          required: true,
          minlength: 2,
        },
        country: {
          required: true,
          minlength: 3,
        },
        topic: {
          required: true,
          minlength: 10,
        },
        text: {
          required: true,
          minlength: 50,
        },
      },

      messages: {
        email: {
          required: 'Пожалуйста, введите Ваш email',
          email: 'Ввведите Ваш email в корректном формате, пожалуйста (test@gmail.com)',
        },
        name: 'Пожалуйста, введите Ваше имя (минимум 2 буквы)',
        country: 'Пожалуйста, введите Вашу страну (минимум 3 буквы)',
        topic: 'Пожалуйста, введите тему Вашей новости (минимум 10 символов)',
        text: 'Пожалуйста, расскажите про Вашу новость (минимум 50 символов)',
      },
      validClass: 'text-success',
      errorClass: 'text-danger',
    };
    $('#postForm')
      .validate(options);
  }
}
