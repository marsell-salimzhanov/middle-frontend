import Handlebars from 'handlebars';
import * as Pages from './pages/index.js';
import { mockQuestions, mockAnswers } from './mockData.js';
import './helpers/handlebarsHelpers.js';

// Register partials
import Input from './components/Input.js';
import Button from './components/Button.js';
import Select from './components/Select.js';
import ErrorMessage from './components/ErrorMessage.js';
import Link from './components/Link.js';
import Label from './components/Label.js';
import Footer from './components/Footer.js';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Select', Select);
Handlebars.registerPartial('ErrorMessage', ErrorMessage);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Label', Label);
Handlebars.registerPartial('Footer', Footer);

export default class App {
  constructor() {
    this.state = {
      currentPage: 'navigate',
      questions: [],
      answers: [],
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template;
    switch (this.state.currentPage) {
      case 'login':
        template = Handlebars.compile(Pages.LoginPage);
        this.appElement.innerHTML = template();
        break;
      case 'navigate':
        template = Handlebars.compile(Pages.NavigatePage);
        this.appElement.innerHTML = template();
        break;
      default:
        template = Handlebars.compile(Pages.NavigatePage);
        this.appElement.innerHTML = template();
        break;
    }
    this.attachEventListeners();
  }

  attachEventListeners() {
    switch (this.state.currentPage) {
      case 'createQuestionnaire':
        const addButton = document.getElementById('add-question');
        const createButton = document.getElementById('create-questionnaire');

        addButton.addEventListener('click', () => this.addQuestion());
        createButton.addEventListener('click', () => this.createQuestionnaire());
        break;
      case 'answerQuestionnaire':
        const submitButton = document.getElementById('submit-answers');
        submitButton.addEventListener('click', () => this.submitAnswers());
        break;
      case 'loginPage':
        break;
      case 'navigate':
        const navigateLinks = document.querySelectorAll('.navigate-link');
        navigateLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            this.changePage(e.target.dataset.page);
          });
        });
        break;
      default:
        break;
    }

    // const footerLinks = document.querySelectorAll('.footer-link');
    // footerLinks.forEach(link => {
    //   link.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     this.changePage(e.target.dataset.page);
    //   });
    // });


  }

  changePage(page) {
    this.state.currentPage = page;
    this.render();
  }

  addQuestion() {
    const questionInput = document.getElementById('question-input');
    if (questionInput.value.trim()) {
      this.state.questions.push(questionInput.value);
      questionInput.value = '';
      this.render();
    }
  }

  createQuestionnaire() {
    if (this.state.questions.length > 0) {
      this.state.currentPage = 'answerQuestionnaire';
      this.render();
    }
  }

  submitAnswers() {
    alert('Answers submitted!');
  }
}
