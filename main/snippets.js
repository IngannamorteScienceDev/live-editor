let snippets = [
    {
        name: 'cta-1',
        image: 'cta-1.png',
        class: 'cta',
        content: `<section class="sans text-center my-8 px-8">
  <h1 class="capitalize font-medium">Готовы начать?</h1>
  <p class="text-gray-700 mt-2 mb-6">Возможно, вам стоит передумать прямо сейчас</p>
  <button class="bg-black bg-gray-900:hover text-white text-white:hover py-3 px-6 uppercase font-xs letter-wide"><a class="no-underline" href="">Читать далее</a></button>
</section>`
    },
    {
        name: 'cta-2',
        image: 'cta-2.png',
        class: 'cta',
        content: `<section class="sans text-center py-8 px-4 lg:px-0 bg-gray-300">
    <div class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto">
        <div class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
            <h2 class="capitalize font-medium">Готовы начать?</h2>
            <p class="text-gray-700 mt-2 mb-6">Возможно, вам стоит передумать прямо сейчас</p>
        </div>
            <div class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0">
            <button class=" bg-black bg-gray-900:hover text-white py-3 px-6 uppercase font-xs letter-wide"><a href="">Читать далее</a></button>
        </div>
    </div>
</section>`
    },
    {
        name: 'cards-1',
        image: 'cards-1.png',
        class: 'cards',
        content: `<section class="bg-white py-4 font-sans">
        <div class="m-auto flex flex-wrap items-center justify-flex-start">
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
          <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
            <div class="overflow-hidden bg-white border-rd-lg shadow shadow-lg border-1 border-solid border-gray-300">
              <img class="w-full" src="https://source.unsplash.com/random/400x225" alt="Cards">
              <div class="p-6 flex flex-col justify-between ">
                <h3 class="font-medium text-gray-900 mb-4 line-h-normal">Программное обеспечение для образовательных учреждений
                </h3>
                <p class="inline-flex justify-items-center">
                  <span class="text-gray-700 font-sm">Читать далее</span>
                </p>
              </div>
            </div>
          </div>
      
        </div>
      </section>`
    },
    {
        name: 'cards-2',
        image: 'cards-2.png',
        class: 'cards',
        content: `
      <section class="bg-white py-4 sans">
        <div class="max-w-full m-auto flex flex-wrap flex-col md:flex-row justify-items-center justify-flex-start">
          <div class="w-full lg:w-1/2 p-3">
            <div class="flex flex-col lg:flex-row border-rd overflow-hidden h-auto lg:h-32 border-1 border-solid border-gray-300 shadow shadow-lg">
              <img class="block h-auto w-full lg:w-48 flex-none bg-size-cover"
                   src="https://source.unsplash.com/random/200x125">
              <div class="bg-white border-rd-b lg:border-rd-b-none lg:border-rd-r p-4 flex flex-col justify-between line-h-normal">
                <div class="text-black font-bold font-xl mb-2 line-h-tight">Станете ли вы хорошим разработчиком?</div>
                <p class="text-gray-700 font-base">Читать далее</p>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-3">
            <div class="flex flex-col lg:flex-row border-rd overflow-hidden h-auto lg:h-32 border-1 border-solid border-gray-300 shadow shadow-lg">
              <img class="block h-auto w-full lg:w-48 flex-none bg-size-cover"
                   src="https://source.unsplash.com/random/200x125">
              <div class="bg-white border-rd-b lg:border-rd-b-none lg:border-rd-r p-4 flex flex-col justify-between line-h-normal">
                <div class="text-black font-bold font-xl mb-2 line-h-tight">Как стать хорошим разработчиком?</div>
                <p class="text-gray-700 font-base">Читать далее</p>
              </div>
            </div>
          </div>
        </div>
      </section>`
    },
    {
      name: 'articles-1',
      image: 'articles-1.png',
      class: 'article',
      content: `<section class="sans container m-auto flex flex-col md:flex-row py-8 max-w-4xl px-6 lg:px-0">
      <div class="w-full md:w-1/4 border-b-1 border-solid border-gray-200 md:border-0 mb-6 md:mb-0 pb-6 md:pb-0 pr-8 flex justify-center justify-items-start flex-col">
        <label for="" class="font-bold">Важное примечание</label>
        <p class="line-h-normal mt-4 border-0 md:border-r-1 md:border-solid md:border-gray-400 md:pr-2">Разнообразный и богатый опыт повышение уровня гражданского сознания напрямую зависит от форм воздействия.</p>
      </div>
      <div class="w-full md:w-3/4 line-h-normal">Не следует, однако, забывать о том, что курс на социально-ориентированный национальный проект требует определения и уточнения дальнейших направлений развития проекта. Соображения высшего порядка, а также социально-экономическое развитие требует от нас анализа дальнейших направлений развития проекта. 
        Практический опыт показывает, что дальнейшее развитие различных форм деятельности напрямую зависит от новых предложений. Практический опыт показывает, что рамки и место обучения кадров напрямую зависит от направлений прогрессивного развития?
        Соображения высшего порядка, а также новая модель организационной деятельности позволяет оценить значение направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности напрямую зависит от новых предложений! 
        Дорогие друзья, сложившаяся структура организации способствует подготовке и реализации новых предложений. Значимость этих проблем настолько очевидна, что консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для модели развития.
        Дорогие друзья, реализация намеченного плана развития позволяет выполнить важнейшие задания по разработке ключевых компонентов планируемого обновления. </div>
    </section>`
  },
  {
    name: 'articles-2',
    image: 'articles-2.png',
    class: 'article',
    content: `<section class="sans m-auto flex flex-col py-8 max-w-5xl text-center px-6">
    <label class="font-sm uppercase">16 ИЮНЯ 2021</label>
    <h1 class="my-8 max-w-full m-auto font-3xl md:font-4xl lg:font-5xl font-normal">Высококачественный прототип будущего проекта не стал ограничивающим фактором</h1>
    <p class="mt-1 lg:mt-4 max-w-xl m-auto line-h-large mb-6 text-left">С учётом сложившейся международной обстановки, высококачественный прототип будущего проекта позволяет оценить значение как самодостаточных, так и внешне зависимых концептуальных решений. Вот вам яркий пример современных тенденций - курс на социально-ориентированный национальный проект предопределяет высокую востребованность системы массового участия!</p>
    <p class="max-w-xl m-auto line-h-large mb-6 text-left">Но экономическая повестка сегодняшнего дня обеспечивает широкому кругу (специалистов) участие в формировании инновационных методов управления процессами. В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения обеспечивает актуальность инновационных методов управления процессами. Диаграммы связей описаны максимально подробно.</p>
  </section>`
  },
  {
    name: 'features-1',
    image: 'features-1.png',
    class: 'features',
    content: `<section
    class="my-8 sans max-w-6xl m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
    <div class="w-full lg:w-1/2"><img src="../demo-phone.png" alt=""></div>
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 lg:items-start">
      <label for="tagline" class="uppercase letter-wide text-gray-700 font-bold">Лучшее приложение</label>
      <h1 class="my-4 font-normal">Почувствуйте нашу работу</h1>
      <p class="line-h-normal mb-4 text-gray-700">Значимость этих проблем настолько очевидна, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов.</p>
    </div>
  </section>
  <section
    class="my-8 pt-8 sans max-w-6xl m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 lg:items-start">
      <label for="tagline" class="uppercase letter-wide text-gray-700 font-bold">Лучшее приложение</label>
      <h1 class="my-4 font-normal">Почувствуйте нашу работу</h1>
      <p class="line-h-normal mb-4 text-gray-700">Значимость этих проблем настолько очевидна, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки вывода текущих активов.</p>
    </div>
    <div class="w-full lg:w-1/2"><img src="../demo-phone.png" alt=""></div>
  </section>`
  },
  {
    name: 'features-2',
    image: 'features-2.png',
    class: 'features',
    content: `<section class="sans flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2"><img src="../demo-phone.png" alt=""></div>
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-8">
      <h1 class="my-4 font-light">Особенности приложения</h1>
      <p class="line-h-normal mb-4 w-2/3 text-gray-700">А ещё интерактивные прототипы объективно рассмотрены соответствующими инстанциями!</p>
    </div>
  </section>`
  },
  {
    name: 'features-3',
    image: 'features-3.png',
    class: 'features',
    content: `
    <section class="my-8 sans container max-w-6xl m-auto flex flex-col md:flex-row sm:items-center">
      <div class="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-0 md:py-8 md:px-8 lg:items-start">
        <label for="tagline" class="uppercase letter-wide text-gray-700 font-bold">различные аспекты</label>
        <h1 class="mt-2 mb-4 font-light">Случайный текст похож на песнь светлого будущего.</h1>
        <p class="line-h-normal mb-4 text-gray-700">В частности, внедрение современных методик, в своём классическом представлении, допускает внедрение благоприятных перспектив. Как уже неоднократно упомянуто, диаграммы связей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут призваны к ответу.</p>
      </div>
      <div class="w-full md:w-1/2 flex flex-row md:flex-col justify-between md:justify-center items-center p-2 md:p-8 items-center md:items-start">
        <div class="flex items-center border-0 border-solid border-gray-300 sm:border-r md:border-b md:border-r-0 p-4 w-1/2 md:w-auto">
          <div class="">
            <h2 class="text-black font-light my-2">Сплочённость команды профессионалов продолжает удивлять</h2>
            <p class="text-gray-700 line-h-normal">Как уже неоднократно упомянуто, активно развивающиеся страны третьего мира ассоциативно распределены по отраслям.</p>
          </div>
        </div>
        <div class="flex items-center p-4 w-1/2 md:w-auto"> 
          <div class="">
            <h2 class="text-black font-light my-2">Только современная методология разработки расставила все точки над i</h2>
            <p class="text-gray-700 line-h-normal">Повседневная практика показывает, что современная методология разработки требует анализа модели развития.</p>
          </div>
        </div>
      </div>
    </section>`
  },
  {
    name: 'features-4',
    image: 'features-4.png',
    class: 'features',
    content: `<section class="sans container m-auto text-center py-8">
    <label for="tagline" class="uppercase letter-wide font-bold text-gray-700">Различные аспекты</label>
    <h1 class="mt-2 mb-4  font-normal font-semibold max-w-sm m-auto">Случайный текст похож на песнь светлого будущего.</h1>
    <hr class="border-b border-solid border-gray-400 w-8 m-auto my-6">
    <div class="flex flex-wrap justify-between items-flex-start">
      <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
        <div class="w-14 h-14 border-rd-full bg-gray-300" alt=""></div>
        <h2 class="my-4 font-lighter">Случайный текст похож на глас грядущего поколения</h2>
        <p class="line-h-normal mb-4 text-gray-700">В частности, начало повседневной работы по формированию позиции не оставляет шанса для кластеризации усилий.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
        <div class="w-14 h-14 border-rd-full bg-gray-300" alt=""></div>
        <h2 class="my-4 font-lighter">Прототип - не панацея</h2>
        <p class="line-h-normal mb-4 text-gray-700">Также как высококачественный прототип будущего проекта однозначно определяет каждого участника как способного принимать собственные решения касаемо распределения внутренних резервов и ресурсов.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
        <div class="w-14 h-14 border-rd-full bg-gray-300" alt=""></div>
        <h2 class="my-4 font-lighter">Смешно, но жизнь прекрасна</h2>
        <p class="line-h-normal mb-4 text-gray-700">Безусловно, семантический разбор внешних противодействий играет важную роль в формировании поставленных обществом задач.</p>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
        <div class="w-14 h-14 border-rd-full bg-gray-300" alt=""></div>
        <h2 class="my-4 font-lighter">Цена вопроса не важна</h2>
        <p class="line-h-normal mb-4 text-gray-700">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
    </div>
  </section>`
  },
  {
    name: 'features-5',
    image: 'features-5.png',
    class: 'features',
    content: `<section class="my-8 sans container m-auto max-w-6xl ">
    <div class="text-center">
      <h1 class="my-4 font-medium">Покажите свою работу</h1>
      <p class="line-h-normal mb-4 max-w-sm m-auto">Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь создаёт предпосылки для модели развития.</p>
    </div>
    <div class="max-w-6xl flex flex-col sm:flex-row flex-wrap my-8">
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-r-1 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Цифровой</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal px-6 block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-r-1 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Брендинг</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Превосходство</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-r-1 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Стратегия</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-r-1 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Дизайн</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
      <div class="sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center h-48 md:h-64 border-gray-300 border-0 border-b-1 border-solid shadow-lg:hover border-0:hover bg-white">
        <div class="w-12 h-12 border-rd-full bg-gray-300" alt=""></div>
        <h3 class="mt-4 mb-1 font-light">Разработка</h3>
        <p class="mt-4 text-center text-gray-700 letter-normal block:hover">Следует отметить, что современная методология разработки представляет собой интересный эксперимент проверки приоритизации разума над эмоциями.</p>
      </div>
    </div>
  </section>`
  },
  {
    name: 'feed-1',
    image: 'feed-1.png',
    class: 'feed',
    content: `<section class="sans container m-auto max-w-6xl py-8">
    <div class="flex py-3">
      <div class="w-1/8">
        <a href="#" class="block border-rd-full h-12 w-12 mr-2 bg-gray-300"></a>
      </div>
      <div class="w-7/8">
        <div class="flex justify-between">
          <div>
            <span class="font-bold"><a href="#" class="text-black no-underline">Наталья Романова</a></span>
            <span class="text-gray-600">@natalie</span>
            <span class="text-gray-600">·</span>
            <span class="text-gray-600">26 мая</span>
          </div>
          <div>
            <a href="#" class="text-gray-700 text-black:hover"><i class="fa fa-chevron-down"></i></a>
          </div>
        </div>
        <div class="">
          <p class="my-3 font-sm">Множество разработчиков теперь используют этот редактор для проектирования своих страниц. Это очень полезный инструмент.</p>
          <div class="pb-2">
            <span class="mr-4">
              <a href="#" class="text-gray-500 no-underline text-black:hover">
                <i class="fa fa-comment fa-md mr-1"></i>2
              </a>
            </span>
            <span>
              <a href="#" class="text-gray-500 no-underline text-black:hover">
                <i class="fa fa-envelope fa-md"></i>
              </a>
            </span>
          </div>
          <hr class="border-b border-solid border-gray-200">
          <div class="flex py-3">
            <div class="w-1/8">
              <a href="#" class="block border-rd-full h-12 w-12 mr-2 bg-gray-300"></a>
            </div>
            <div class="w-7/8">
              <div>
                <span class="font-bold"><a href="#" class="text-black no-underline">Наталья Романова</a></span>
                <span class="text-gray-600">@natalie</span>
                <span class="text-gray-600">·</span>
                <span class="text-gray-600">26 мая</span>
              </div>
              <div class="">
                <p class="my-3 font-sm">Множество разработчиков теперь используют этот редактор для проектирования своих страниц. Это очень полезный инструмент.</p>
                <div class="pb-2">
                  <span class="mr-4">
                    <a href="#" class="text-gray-500 no-underline text-black:hover">
                      <i class="fa fa-comment fa-md mr-1"></i>2
                    </a>
                  </span>
                  <span>
                    <a href="#" class="text-gray-500 no-underline text-black:hover">
                      <i class="fa fa-envelope fa-md"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-b border-solid border-gray-200">
          <div class="flex py-3">
            <div class="w-1/8">
              <a href="#" class="block border-rd-full h-12 w-12 mr-2 bg-gray-300"></a>
            </div>
            <div class="w-7/8">
              <div>
                <span class="font-bold"><a href="#" class="text-black no-underline">Наталья Романова</a></span>
                <span class="text-gray-600">@natalie</span>
                <span class="text-gray-600">·</span>
                <span class="text-gray-600">26 мая</span>
              </div>
              <div class="">
                <p class="my-3 font-sm">Множество разработчиков теперь используют этот редактор для проектирования своих страниц. Это очень полезный инструмент.</p>
                <div class="pb-2">
                  <span class="mr-4">
                    <a href="#" class="text-gray-500 no-underline hover:text-black">
                      <i class="fa fa-comment fa-md mr-1"></i>2
                    </a>
                  </span>
                  <span>
                    <a href="#" class="text-gray-500 no-underline hover:text-black">
                      <i class="fa fa-envelope fa-md"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  {
    name: 'footer-1',
    image: 'footer-1.png',
    class: 'footer',
    content: `<footer class="sans bg-black text-white py-8 px-4">
    <div class="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
      <a href="/" class="block mr-4 w-1/2">
        <img src="../images/log.png" class="w-32" alt="logo">
      </a>
      <div class="w-1/2 flex font-sm mt-6 lg:mt-0">
        <ul class="text-gray-700 list-none p-0 font-slim flex flex-col text-left">
          <li class="inline-block py-2 px-3 text-white uppercase no-underline font-semibold letter-wide">Продукты</li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Популярные</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">В тренде</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Каталог</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Особенности</a></li>
        </ul>
        <ul class="text-gray-700 list-none p-0 font-slim flex flex-col text-left">
          <li class="inline-block py-2 px-3 text-white uppercase no-underline font-semibold letter-wide">Компания</li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Пресс-релиз</a>
          </li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Задачи</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Стратегия</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Работа</a></li>
        </ul>
        <ul class="text-gray-700 list-none p-0 font-slim flex flex-col text-left">
          <li class="inline-block py-2 px-3 text-white uppercase no-underline font-semibold letter-wide">Информация</li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Поддержка</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Разработчики</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline"> Сервисное обслуживание</a></li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Руководство для старта</a>
          </li>
        </ul>
        <div class="text-gray-700 flex flex-col">
          <div class="inline-block py-2 px-3 text-white uppercase font-semibold letter-wide">Следите за нами</div>
          <div class="flex pl-4 justify-start">
            <a class="block flex items-center text-white text-gray-600:hover mr-65no-underline" href="#"><i
                class="fab fa-github-alt"></i></a>
            <a class="block flex items-center text-white text-gray-600:hover mr-65no-underline" href="#"><i
                class="fab fa-slack"></i></a>
            <a class="block flex items-center text-white text-gray-600:hover no-u5derline" href="#"><i
                class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-4 mt-4 text-gray-700 border-0 border-t-1 border-solid border-gray-900 text-center"> ©2021 micro.css Web Builder. All rights
      reserved.</div>
  </footer>`
  },
  {
    name: 'footer-2',
    image: 'footer-2.png',
    class: 'footer',
    content: `<footer class="sans bg-black text-white py-8 px-4">
    <div class="mx-auto max-w-3xl overflow-hidden flex justify-between items-center">
      <ul class="font-sm text-gray-700 list-none p-0 flex items-center">
        <li> <a href="/" class="block mr-4 w-32">
            <img src="images/log.png" class="h-24" alt="logo">
          </a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Продукты</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">Компания</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">FAQs</a></li>
        <li><a href="#" class="inline-block py-2 px-3 text-gray-600 text-gray-500:hover no-underline">О нас</a></li>
      </ul>
      <p class="inline-block py-2 px-3 text-gray-700 font-xs"> 2021 micro.css Web Builder. All rights reserved.</p>
    </div>
  </footer>`
  },
  {
    name: 'footer-3',
    image: 'footer-3.png',
    class: 'footer',
    content: `<footer class="sans bg-white py-8 px-4">
    <div
      class="mx-auto container overflow-hidden flex flex-col md:flex-row justify-between pb-4 text-center md:text-left">
      <a href="#" class="block mr-4 w-full md:w-1/4">
        <img src="images/log.png"" class="w-32 -ml-8 md:ml-0" alt="logo">
      </a>
      <div class="w-full text-gray-900 mt-6 md:mt-0 line-h-normal">
        <h4 class="py-2 uppercase font-bold letter-wide">О нас</h4>
        <p>Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для стандартных подходов. 
          Действия представителей оппозиции формируют глобальную экономическую сеть и при этом - призваны к ответу. 
          С другой стороны, перспективное планирование требует анализа позиций, занимаемых участниками в отношении поставленных задач.</p>
      </div>
      <div class="text-gray-700 flex flex-col items-center w-full md:w-1/4 mt-6 md:mt-0">
        <h4 class="inline-block py-2 px-3 uppercase font-bold letter-wide text-gray-900">Следите за нами</h4>
        <div class="flex pl-0 md:pl-4 justify-start">
          <a class="block flex items-center text-gray-900 hover:text-black mr-6 no-underline" href="#"><i
              class="fab fa-github-alt"></i></a>
          <a class="block flex items-center text-gray-900 hover:text-black mr-6 no-underline" href="#"><i
              class="fab fa-slack"></i></a>
          <a class="block flex items-center text-gray-900 hover:text-black no-underline" href="#"><i
              class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <div class="pt-4 mt-4 text-gray-700 font-xs border-0 border-t-1 border-solid border-gray-300 text-center"> ©2021 micro.css Web Builder. All rights
      reserved.</div>
  </footer>`
  },
  {
    name: 'form-1',
    image: 'form-1.png',
    class: 'form',
    content: `<form class="sans font-sm border-rd w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8">
    <div class="relative border-1 border-solid border-gray-200 border-rd mb-4 shadow shadow-md">
      <input class="w-full py-2 px-3 text-gray-700 line-g-normal border-rd" id="username" type="text" placeholder="Username">
    </div>
    <div class="relative border-1 border-solid border-gray-200 border-rd mb-4 shadow shadow-md">
      <input class="w-full py-2 px-3 text-gray-700 line-h-normal border-rd" id="password" type="password" placeholder="Password">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-gray-900 bg-black:hover text-white py-2 px-4" type="button">
      Войти
      </button>
      <a class="inline-block v-align-baseline text-gray-500 text-gray-700:hover" href="#">
        Забыли пароль?
      </a>
    </div>
  </form>`
  },
  {
    name: 'hero-1',
    image: 'hero-1.png',
    class: 'hero',
    content: `<section class="sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center"
    style="background:url(https://source.unsplash.com/random/1920x1080) no-repeat center;">
    <div class="bg-white text-black border-rd-full h-16 w-16 flex items-center justify-center mb-8"><i
        class="fas fa-play ml-1"></i></div>
    <label for="" class="uppercase letter-widest text-white font-xs font-slim mt-8">Смотреть видео</label>
    <h3 class="text-white mx-auto max-w-sm mt-4 font-light font-2xl line-h-normal">Привлеките больше внимания и получите больше продаж и прибыли</h3>
  </section>`
  },
  {
    name: 'hero-2',
    image: 'hero-2.png',
    class: 'hero',
    content: `<section class="sans w-full bg-gray-300 text-left text-black py-8">
    <div class="container mx-auto max-w-xl py-8 font-light line-h-normal">
      <h3 class="font-2xl">Развивайте свой бизнес</h3>
      <p class="">Создавайте эффективные команды, выбирайте методы проектирования, наставляйте и воспитывайте следующее поколение дизайнеров.</p>
      <div class="max-w-sm mt-4 sm:flex">
        <input type="email" class="block w-full bg-white py-3 px-6 mb-2 sm:mb-0" name="email" placeholder="Enter your email" required="">
        <button class="uppercase font-sm text-white w-full sm:w-auto bg-black bg-gray-900:hover bg-gray-700:focus letter-wide px-6">Подписаться</button>
      </div>
    </div>
  </section>`
  },
  {
    name: 'hero-3',
    image: 'hero-3.png',
    class: 'hero',
    content: `<section class="bg-gray-300 sans">
    <div class="container m-auto flex flex-col md:flex-row max-w-6xl">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
        <label for="tagline" class="uppercase line-h-large">Лучшее приложение</label>
        <h1 class="my-4 font-light">Почувствуйте нашу работу</h1>
        <p class="line-h-normal mb-4">Принимая во внимание показатели успешности, синтетическое тестирование прекрасно подходит для реализации экономической целесообразности принимаемых решений. 
          Являясь всего лишь частью общей картины, представители современных социальных резервов могут быть описаны максимально подробно. </p>
        <button
          class="bg-transparent bg-black:hover text-white font-semibold text-gray-300:hover py-2 px-4 border-1 border-black border-solid border-transparent:hover">Узнать больше</button>
      </div>
      <div class="w-full lg:w-1/2 lg:py-6"><img src="demo-devices.png" alt="image"
          class="w-full"></div>
    </div>
  </section>`
  },
  {
    name: 'list-1',
    image: 'list-1.png',
    class: 'list',
    content: `<ul class="fsans list-none p-0 container m-auto text-gray-900">
    <li class="inline-block border-0 border-b-1 border-solid border-gray-300 flex justify-between items-center py-4">
      <div class="flex items-start w-2/5">
        <div class="w-10 h-10 border-rd mr-3">
          <div class="border-rd-full h-10 w-10 bg-gray-300 m-auto"></div>
        </div>
        <div class="flex-1 overflow-hidden">
          <div>
            <span class="font-bold">Михаил Петров</span>
            <span class="text-gray-700 font-xs">@MichaelPetrov</span>
          </div>
          <p class="text-black line-h-normal">+79379431397</p>
        </div>
      </div>
      <p class="w-2/5">UI/UX дизайнер</p>
      <label for="status" class="font-bold w-1/5 text-right">В сети</label>
    </li>
    <li class="inline-block border-0 border-b-1 border-solid border-gray-300 flex justify-between items-center py-4">
      <div class="flex items-start w-2/5">
        <div class="w-10 h-10 border-rd mr-3">
          <div class="border-rd-full h-10 w-10 bg-gray-300 m-auto"></div>
        </div>
        <div class="flex-1 overflow-hidden">
          <div>
            <span class="font-bold">Елена Берг</span>
            <span class="text-gray-700 font-xs">@ElBerg</span>
          </div>
          <p class="text-black line-h-normal">+79276544512</p>
        </div>
      </div>
      <p class="w-2/5">Эксперт по веб-безопасности</p>
      <label for="status" class="font-bold w-1/5 text-right">Не в сети</label>
    </li>
    <li class="inline-block flex justify-between items-center py-4">
      <div class="flex items-start w-2/5">
        <div class="w-10 h-10 border-rd mr-3">
          <div class="border-rd-full h-10 w-10 bg-gray-300 m-auto"></div>
        </div>
        <div class="flex-1 overflow-hidden">
          <div>
            <span class="font-bold">Сергей Котов</span>
            <span class="text-gray-700 font-xs">@kot</span>
          </div>
          <p class="text-black line-h-normal">+79379113232</p>
        </div>
      </div>
      <p class="w-2/5">Системный администратор</p>
      <label for="status" class="font-bold w-1/5 text-right">В сети</label>
    </li>
  </ul>`
  },
  {
    name: 'navigation-1',
    image: 'navigation-1.png',
    class: 'navigation',
    content: `<nav class="sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
    <a href="/" class="block text-left">
      <img src="images/log.png" class="h-10 sm:h-10 border-rd-full" alt="logo">
    </a>
    <ul class="font-sm text-gray-700 list-none p-0 flex items-center">
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Продукты</a></li>
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Цены</a></li>
      <li class="pr-2"><a href="#"
          class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">FAQs</a></li>
      <li class="pl-2 border-l"><a href="#"
          class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Войти</a></li>
      <button class="bg-black bg-text-gray-800:hover text-white ml-4 py-2 px-3">
        Зарегестрироваться
      </button>
    </ul>
  </nav>`
  },
  {
    name: 'navigation-2',
    image: 'navigation-2.png',
    class: 'navigation',
    content: `<nav class="sans bg-white text-center flex justify-between items-center my-4 mx-auto container overflow-hidden">
    <button class="font-sm bg-black text-gray-700:hover text-white py-2 px-3">
      Подписаться
    </button>
    <ul class="font-sm text-gray-700 list-none p-0 flex items-center">
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Продукты</a></li>
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Цены</a></li>
      <li class="px-6"><a href="/">
          <img src="images/log.png" class="h-10 sm:h-10 rounded-full" alt="logo">
        </a></li>
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">О нас</a></li>
      <li><a href="#" class="inline-block py-2 px-3 text-gray-900 text-gray-700:hover no-underline">Статус</a></li>
    </ul>
    <button class="font-sm bg-black text-gray-800:hover text-white ml-4 py-2 px-3">
      Войти
    </button>
  </nav>`
  },
  {
    name: 'notification-1',
    image: 'notification-1.png',
    class: 'notification',
    content: `<section class="bg-gray-200 text-gray-900 py-4 lg:px-4" role="alert">
    <div class="container items-center flex max-w-7xl m-auto line-h-none">
      <span class="flex border-rd-full bg-gray-400 uppercase px-2 py-1 font-xs font-bold mr-3">Новинка</span>
      <span class="mr-2 text-left mr-auto">Новая возможность!</span>
      <span class="opacity-75 h-4 w-4"><i class="fas fa-chevron-right"></i></span>
    </div>
  </section>`
  },
  {
    name: 'notification-2',
    image: 'notification-2.png',
    class: 'notification',
    content: `<section class="bg-gray-200 text-gray-900 py-4 lg:px-4" role="alert">
    <div class="items-center flex leading-none">
      <div class="border-rd-full h-6 w-6 mr-2 bg-gray-400"></div>
      <span class="mr-2 text-left mr-auto">Новая возможность!<a href="#" class="ml-2 no-underline uppercase text-black text-sm text-blue-500">Читать далее</a></span>
      <span class="opacity-75 h-4 w-4"><i class="fas fa-times"></i></span>
    </div>
  </section>`
  },
  {
    name: 'pricing-1',
    image: 'pricing-1.png',
    class: 'pricing',
    content: `<section class="sans container m-auto max-w-6xl flex flex-col flex-wrap sm:flex-row justify-center">
    <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
      <label for="" class="uppercase line-h-large font-bold font-sm">Базовый тариф</label>
      <h1 for="" class="uppercase line-h-large font-bold font-5xl my-2">$29<span class="text-gray-700 font-light font-xs">/месяц</span></h1>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">5</strong>Проекты</p>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">20</strong>Изображения</p>
      <p class="mt-2 mb-6 text-gray-700"><strong class="text-black pr-2">9/5</strong>Поддержка</p>
      <button class="bg-black text-white font-semibold bg-gray-900:hover py-2 px-4 border-1 border-solid border-gray-800">
      Купить сейчас
      </button>
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
      <label for="" class="uppercase line-h-large font-bold font-sm">Командный тариф</label>
      <h1 for="" class="uppercase line-h-large font-bold font-5xl my-2">$59<span class="text-gray-700 font-light font-xs">/месяц</span></h1>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">10</strong>Проекты</p>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">40</strong>Изображения</p>
      <p class="mt-2 mb-6 text-gray-700"><strong class="text-black pr-2">12/7</strong>Поддержка</p>
      <button class="bg-black text-white font-semibold bg-gray-900:hover py-2 px-4 border-1 border-solid border-gray-800">
      Купить сейчас
      </button>
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
      <label for="" class="uppercase line-h-large font-bold font-sm">Корпоративный тариф</label>
      <h1 for="" class="uppercase line-h-large font-bold font-5xl my-2">$79<span class="text-gray-700 font-light font-xs">/месяц</span></h1>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">Неограничено</strong>Проекты</p>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">Неограничено</strong>Изображения</p>
      <p class="mt-2 mb-6 text-gray-700"><strong class="text-black pr-2">24/7</strong>Поддержка</p>
      <button class="bg-black text-white font-semibold bg-gray-900:hover py-2 px-4 border-1 border-solid border-gray-800">
      Купить сейчас
      </button>
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
      <label for="" class="uppercase line-h-large font-bold font-sm">Тариф для предприятий</label>
      <h1 for="" class="uppercase line-h-large font-bold font-5xl my-2">$199<span class="text-gray-700 font-light font-xs">/месяц</span></h1>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">Неограничено</strong>Проекты</p>
      <p class="my-2 text-gray-700"><strong class="text-black pr-2">Неограничено</strong>Изображения</p>
      <p class="mt-2 mb-6 text-gray-700"><strong class="text-black pr-2">24/7</strong>Поддержка</p>
      <button class="bg-black text-white font-semibold bg-gray-900:hover py-2 px-4 border-1 border-solid border-gray-800">
      Купить сейчас
      </button>
    </div>
  </section>`
  },
  {
    name: 'stats-1',
    image: 'stats-1.png',
    class: 'stats',
    content: `<section class="bg-white py-4 sans">
    <div class="container max-w-4xl m-auto flex flex-wrap md:flex-no-wrap items-center justify-center">
      <h1 class="w-full md:w-1/4 font-medium letter-normal mb-4 md:mb-0">Важная<br>статистика</h1>
      <div class="w-1/3 md:w-1/4">
        <span class="font-xs inline-block mr-2 uppercase text-gray-900 letter-wide">Клики</span>
        <h2 class="inline-block">44%</h2>
      </div>
      <div class="w-1/3 md:w-1/4">
        <span class="font-xs inline-block mr-2 uppercase text-gray-900 letter-wide">Просмотров</span>
        <h2 class="inline-block">734</h2>
      </div>
      <div class="w-1/3 md:w-1/4">
        <span class="font-xs inline-block mr-2 uppercase text-gray-900 letter-wide">Воздействие</span>
        <h2 class="inline-block">62%</h2>
      </div>
    </div>
  </section>`
  },
  {
    name: 'tabs-1',
    image: 'tabs-1.png',
    class: 'tabs',
    content: `<section class="bg-white py-4 sans">
    <div class="container m-auto max-w-6xl flex items-baseline justify-flex-start border-0 border-solid border-b-2 border-gray-300 mb-10">
    <h2 class="text-gray-700 font-normal line-h-4 font-bold letter-wide uppercase py-4 px-6">Все</h2>
    <h2 class="font-normal line-h-4 font-bold letter-wide uppercase py-4 px-6 border-0 border-solid border-b-2 border-black ">Недавнее</h2>
    <h2 class="text-gray-700 font-normal line-h-4 font-bold letter-wide uppercase py-4 px-6">Для меня</h2>
    <h2 class="text-gray-700 font-normal line-h-4 font-bold letter-wide uppercase py-4 px-6">Ожидаемое</h2>
    </div>
  </section>`
  },
]
