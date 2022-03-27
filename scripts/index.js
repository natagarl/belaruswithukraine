// images with descriptions

const img0 = {
  link: './images/01-donate-their-drones.jpg',
  descriptionbe: 'Аддаюць свае дроны, нават калі самі доўга на іх збіралі.',
  descriptionen: "Giving away their drones, although they've been saving for them for a long time.",
  descriptionru: 'Отдают свои дроны, хотя сами долго на них копили.'
}

const img1 = {
  link: './images/02-volunteer.jpg',
  descriptionbe: 'Валанцёраць у краінах, дзе жывуць.',
  descriptionen: 'Volunteering in the countries where they live.',
  descriptionru: 'Становятся волонтёрами в странах, где живут.'
}

const img2 = {
  link: './images/03-come-out-with-anti-war-posters.jpg',
  descriptionbe: 'Выходзяць с антываеннымі плакатамі ў Мінску.',
  descriptionen: 'Coming out with anti-war posters in Minsk.',
  descriptionru: 'Выходят с антивоенными плакатами в Минске.'
}

const img3 = {
  link: './images/04-collect-and-send-aid.jpg',
  descriptionbe: 'Збіраюць і адпраўляюць дапамогу на Украіну.',
  descriptionen: 'Collecting and sending aid to Ukraine.',
  descriptionru: 'Собирают и отправляют помощь на Украину.'
}

const img4 = {
  link: './images/05-join-the-belarusian-battalion.jpg',
  descriptionbe: 'Уступаюць у беларускі батальён Кастуся Каліноўскага, каб ваяваць на Украіне супраць расейскіх акупантаў.',
  descriptionen: 'Joining the Belarusian battalion of Kastus Kalinouski to fight in Ukraine against the Russian occupiers.',
  descriptionru: 'Присоединяются к беларусскому батальону Кастуся Калиновского, чтобы воевать на Украине против российских оккупантов.'
}

const img5 = {
  link: './images/06-teach-children.jpg',
  descriptionbe: 'Праводзяць заняткі для дзяцей, якія былі вымушаны бегчы ад вайны.',
  descriptionen: 'Teaching children who were forced to flee the war.',
  descriptionru: 'Проводят занятия для детей, которые были вынуждены бежать от войны.'
}

const img6 = {
  link: './images/07-quit-their-jobs.jpg',
  descriptionbe: 'Звальняюцца з працы ў консульстве РБ у знак пратэсту.',
  descriptionen: 'Quiting their jobs at the consulate of the Republic of Belarus in protest.',
  descriptionru: 'Уволеняются с работы в консульстве РБ в знак протеста.'
}

const img7 = {
  link: './images/08-rescue-injured.jpg',
  descriptionbe: 'Застаюцца на Украіне і ратуюць параненых.',
  descriptionen: 'Remaining in Ukraine and rescuing the wounded.',
  descriptionru: 'Остаются на Украине и спасают раненых.'
}



// images together

let images = [img0, img1, img2, img3, img4, img5, img6, img7];




// selecting elements from the page

const mainBtnWhatElse = document.querySelector('.main__btn_value_whatelse');
const mainBtnWatchAgain = document.querySelector('.main__btn_value_watchagain');
const mainImg = document.querySelector('.main__img');
const mainParagraph = document.querySelector('.main__paragraph');
const mainLastScreenParagraphMain = document.querySelector('.main__last-screen-paragraph_attention_main');
const mainLastScreenParagraphSecondary = document.querySelector('.main__last-screen-paragraph_attention_secondary');
const mainLink = document.querySelector('.main__link');

const buttonLangBe = document.querySelector('.langs__item_value_be');
const buttonLangEn = document.querySelector('.langs__item_value_en');
const buttonLangRu = document.querySelector('.langs__item_value_ru');

const headTitle = document.head.querySelector('title');
const mainTitle = document.querySelector('.main__title');





// initial state when download the page

let langBe = true;
let langEn = false;
let langRu = false;
let currentRandomNumber = Math.trunc(Math.random() * images.length);
mainImg.src = images[currentRandomNumber].link;
mainParagraph.textContent = images[currentRandomNumber].descriptionbe;




// functions

// functions to make specific lang active

function makeLangBeActive() {
  document.documentElement.lang = 'be';

  buttonLangBe.classList.add('langs__item_active');
  buttonLangEn.classList.remove('langs__item_active');
  buttonLangRu.classList.remove('langs__item_active');
  langBe = true;
  langEn = false;
  langRu = false;

  if (images.length > 0) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionbe;
  }
  headTitle.textContent = 'Што беларусы робяць';
  mainTitle.textContent = 'Што робяць беларусы падчас вайны на Украiне?';
  mainBtnWhatElse.textContent = 'Што яшчэ?';

  mainLastScreenParagraphMain.textContent = 'Яшчэ многа чаго добрага, але я гэтага яшчэ не намалявала.';
  mainLastScreenParagraphSecondary.textContent = 'Больш пачытаць пра справы беларусаў можна, напрыклад, тут:';
  mainBtnWatchAgain.textContent = 'Паглядзець зноў';
}

function makeLangEnActive() {
  document.documentElement.lang = 'en';

  buttonLangBe.classList.remove('langs__item_active');
  buttonLangEn.classList.add('langs__item_active');
  buttonLangRu.classList.remove('langs__item_active');
  langBe = false;
  langEn = true;
  langRu = false;

  if (images.length > 0) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionen;
  }
  headTitle.textContent = 'What are Belarusians doing';
  mainTitle.textContent = 'What are Belarusians doing during the war in Ukraine?';
  mainBtnWhatElse.textContent = 'What else?';

  mainLastScreenParagraphMain.textContent = "And many more good things, but I haven't drawn them yet.";
  mainLastScreenParagraphSecondary.textContent = 'You can read more about the affairs of Belarusians here:';
  mainBtnWatchAgain.textContent = 'Watch again';
}

function makeLangRuActive() {
  document.documentElement.lang = 'ru';

  buttonLangBe.classList.remove('langs__item_active');
  buttonLangEn.classList.remove('langs__item_active');
  buttonLangRu.classList.add('langs__item_active');
  langBe = false;
  langEn = false;
  langRu = true;

  if (images.length > 0) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionru;
  }
  headTitle.textContent = 'Что беларусы делают';
  mainTitle.textContent = 'Что беларусы делают во время войны на Украине?';
  mainBtnWhatElse.textContent = 'Что ещё?';

  mainLastScreenParagraphMain.textContent = 'Ещё много всего доброго, но я этого ещё не нарисовала.';
  mainLastScreenParagraphSecondary.textContent = 'Больше почитать про дела беларусов можно, например, здесь:';
  mainBtnWatchAgain.textContent = 'Посмотреть снова';
}


// function for click on What Else button

function showWhatElse() {
  images.splice(currentRandomNumber, 1);

  if (images.length > 0) {
    currentRandomNumber = Math.trunc(Math.random() * images.length);
    mainImg.src = images[currentRandomNumber].link;
    if (langBe) {
      mainParagraph.textContent = images[currentRandomNumber].descriptionbe;
    } else if (langEn) {
      mainParagraph.textContent = images[currentRandomNumber].descriptionen;
    } else if (langRu) {
      mainParagraph.textContent = images[currentRandomNumber].descriptionru;
    }

  } else {
    mainImg.classList.add('main__img_hidden');
    mainParagraph.classList.add('main__paragraph_hidden');
    mainBtnWhatElse.classList.add('main__btn_hidden');
    mainLastScreenParagraphMain.classList.remove('main__last-screen-paragraph_hidden');
    mainLastScreenParagraphSecondary.classList.remove('main__last-screen-paragraph_hidden');
    mainLink.classList.remove('main__link_hidden');
    mainBtnWatchAgain.classList.remove('main__btn_hidden');
  }
}


// function for click on Again button

function showAgain() {
  images = [img0, img1, img2, img3, img4];
  currentRandomNumber = Math.trunc(Math.random() * images.length);
  mainImg.src = images[currentRandomNumber].link;
  if (langBe) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionbe;
  } else if (langEn) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionen;
  } else if (langRu) {
    mainParagraph.textContent = images[currentRandomNumber].descriptionru;
  }

  mainImg.classList.remove('main__img_hidden');
  mainParagraph.classList.remove('main__paragraph_hidden');
  mainBtnWhatElse.classList.remove('main__btn_hidden');
  mainLastScreenParagraphMain.classList.add('main__last-screen-paragraph_hidden');
  mainLastScreenParagraphSecondary.classList.add('main__last-screen-paragraph_hidden');
  mainLink.classList.add('main__link_hidden');
  mainBtnWatchAgain.classList.add('main__btn_hidden');
}




// listeneres to buttons

buttonLangBe.addEventListener('click', makeLangBeActive);
buttonLangEn.addEventListener('click', makeLangEnActive);
buttonLangRu.addEventListener('click', makeLangRuActive);

mainBtnWhatElse.addEventListener('click', showWhatElse);
mainBtnWatchAgain.addEventListener('click', showAgain);
