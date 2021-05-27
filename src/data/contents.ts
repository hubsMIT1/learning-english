import { Content } from 'types';

const CONTENTS: Array<Content> = [
  {
    word: 'a',
    phrase: 'Buy me a bag',
    translation: 'uma/um'
  },
  {
    word: 'ability',
    phrase: `I can only applaud this man's ability to deduce`,
    translation: 'habilidade'
  },
  {
    word: 'able',
    phrase: 'Able to participate in the conversation',
    translation: 'capaz'
  },
  {
    word: 'about',
    phrase: 'The book is about a sea voyage',
    translation: 'sobre'
  },
  {
    word: 'above',
    phrase: 'I trust him above everyone else',
    translation: 'acima'
  },
  {
    word: 'accept',
    phrase: 'Did he accept the money?',
    translation: 'aceitar'
  },
  {
    word: 'according',
    phrase: 'Cook the rice according to the instructions',
    translation: 'de acordo com'
  },
  {
    word: 'account',
    phrase: 'I asked him to put it on my account',
    translation: 'conta'
  },
  {
    word: 'across',
    phrase: 'Children, across all ages, like it',
    translation: 'entre'
  },
  {
    word: 'act',
    phrase: 'A criminal act',
    translation: 'ato'
  },
  {
    word: 'action',
    phrase: 'People in the media want to be where the action is',
    translation: 'ação'
  },
  {
    word: 'activity',
    phrase: 'There was a lot of activity',
    translation: 'atividade'
  },
  {
    word: 'actually',
    phrase: `Actually that's what she said`,
    translation: 'na realidade'
  },
  {
    word: 'add',
    phrase: 'Children learned to add and subtract quickly and accurately',
    translation: 'adicionar'
  },
  {
    word: 'address',
    phrase: `What's his address?`,
    translation: 'endereço'
  },
  {
    word: 'administration',
    phrase: 'The day-to-day administration of the company',
    translation: 'administração'
  },
  {
    word: 'admit',
    phrase: 'They need to admit new members',
    translation: 'admitir'
  },
  {
    word: 'adult',
    phrase: 'Children should be accompanied by an adult',
    translation: 'adulto'
  },
  {
    word: 'affect',
    phrase: 'Rain will affect some places tonight',
    translation: 'afetar'
  },
  {
    word: 'after',
    phrase: 'After six years of waiting',
    translation: 'depois'
  },
  {
    word: 'again',
    phrase: 'The same amount again',
    translation: 'novamente'
  },
  {
    word: 'against',
    phrase: 'She battled against the system bugs',
    translation: 'contra'
  },
  {
    word: 'age',
    phrase: 'In the modern age',
    translation: 'idade'
  },
  {
    word: 'agency',
    phrase: 'The movies could be an agency molding the values of the public',
    translation: 'agência'
  },
  {
    word: 'agent',
    phrase: 'He was an agent of change',
    translation: 'agente'
  },
  {
    word: 'ago',
    phrase: 'Not long ago he came across a rattlesnake outside his house',
    translation: 'atrás'
  },
  {
    word: 'agree',
    phrase: 'Your body language does not agree with what you are saying',
    translation: 'aceitar'
  },
  {
    word: 'agreement',
    phrase: 'There was agreement that something must be done',
    translation: 'acordo'
  },
  {
    word: 'ahead',
    phrase: 'He contemplated the day ahead',
    translation: 'à frente'
  },
  {
    word: 'air',
    phrase: 'Radio stations have successfully sold products over the air',
    translation: 'ar'
  },
  {
    word: 'all',
    phrase: 'She was doing all the work',
    translation: 'todos'
  },
  {
    word: 'allow',
    phrase: 'He stopped for a moment to allow his eyes to adjust',
    translation: 'permitir'
  },
  {
    word: 'almost',
    phrase: 'He almost dropped the bottle',
    translation: 'quase'
  },
  {
    word: 'alone',
    phrase: 'Team members are more effective than individuals working alone',
    translation: 'sozinho'
  },
  {
    word: 'along',
    phrase: 'They can be helped along the road to modernity',
    translation: 'ao longo'
  },
  {
    word: 'already',
    phrase: `There's already a lot of trouble in that area`,
    translation: 'já'
  },
  {
    word: 'also',
    phrase: `They're not only our neighbours but also our friends`,
    translation: 'também'
  },
  {
    word: 'although',
    phrase: 'The hours are flexible although you must do twenty hours',
    translation: 'embora/apesar'
  },
  {
    word: 'always',
    phrase: `It's always been our aim to serve the public`,
    translation: 'sempre'
  },
  {
    word: 'american',
    phrase: 'He lives in the United States, he is American',
    translation: 'americano'
  },
  {
    word: 'among',
    phrase: `There's a lot of dissatisfaction among the doctors`,
    translation: 'entre/dentre'
  },
  {
    word: 'amount',
    phrase: 'They have spent a colossal amount rebuilding the stadium',
    translation: 'quantia/quantidade'
  },
  {
    word: 'analysis',
    phrase: 'Samples are sent to the laboratory for analysis',
    translation: 'análise'
  },
  {
    word: 'and',
    phrase: 'We have three hundred and forty four cows',
    translation: 'e'
  },
  {
    word: 'animal',
    phrase: 'Your animal instincts take over',
    translation: 'animal'
  },
  {
    word: 'another',
    phrase: 'They kept moving from one place to another',
    translation: 'outro'
  },
  {
    word: 'answer',
    phrase: 'He knocked and entered without waiting for an answer',
    translation: 'resposta'
  },
  {
    word: 'any',
    phrase: `You don't need special bags, any will do`,
    translation: 'qualquer'
  },
  {
    word: 'anyone',
    phrase: `Here's a chance for anyone who's interested in music`,
    translation: 'qualquer um'
  },
  {
    word: 'anything',
    phrase: 'They think they can buy anything',
    translation: 'nada/qualquer coisa'
  },
  {
    word: 'appear',
    phrase: `I don't want to appear ignorant`,
    translation: 'aparecer'
  },
  {
    word: 'apply',
    phrase: 'To apply for a job',
    translation: 'aplicar'
  },
  {
    word: 'approach',
    phrase: `She hadn't heard him approach`,
    translation: 'aproximar'
  },
  {
    word: 'area',
    phrase: 'The people of the area',
    translation: 'área'
  },
  {
    word: 'argue',
    phrase: `He's able to argue his way out of anything`,
    translation: 'argumentar'
  },
  {
    word: 'arm',
    phrase: 'She injured her left arm',
    translation: 'braço'
  },
  {
    word: 'around',
    phrase: 'Software costs would be around $1,500',
    translation: 'ao redor/em torno'
  },
  {
    word: 'arrive',
    phrase: 'It should arrive in the schools soon',
    translation: 'chegar'
  },
  {
    word: 'art',
    phrase: 'Great art is concerned with moral imperfections',
    translation: 'arte'
  },
  {
    word: 'article',
    phrase: 'An article about the JavaScript language',
    translation: 'artigo'
  },
  {
    word: 'artist',
    phrase: `She's an artist with the scissors`,
    translation: 'artista'
  },
  {
    word: 'as',
    phrase: 'He had often been sick as a child',
    translation: 'como'
  },
  {
    word: 'ask',
    phrase: 'I have a favour to ask you',
    translation: 'perguntar'
  },
  {
    word: 'assume',
    phrase: 'I assume you know the way there',
    translation: 'presumir/assumir'
  },
  {
    word: 'at',
    phrase: 'To be at university',
    translation: 'no/arroba'
  },
  {
    word: 'attack',
    phrase: 'The disease is thought to attack certain cells in the brain',
    translation: 'atacar'
  },
  {
    word: 'attention',
    phrase: 'He failed to give the patient adequate medical attention',
    translation: 'atenção'
  },
  {
    word: 'attorney',
    phrase: 'Unfortunately, my attorney thinks they have a pretty good case',
    translation: 'advogado'
  },
  {
    word: 'audience',
    phrase: `This officer's audience lasted a long time`,
    translation: 'público/audiência'
  },
  {
    word: 'author',
    phrase: 'She is the author of some commendable verses',
    translation: 'autor'
  },
  {
    word: 'authority',
    phrase: 'Now he was exerting his authority in another way',
    translation: 'autoridade'
  },
  {
    word: 'available',
    phrase: 'The number of choices available added to the confusion',
    translation: 'disponível'
  },
  {
    word: 'avoid',
    phrase: `You can't avoid conflict all the time`,
    translation: 'evitar'
  },
  {
    word: 'away',
    phrase:
      'One wicked witch named Mombi stole him and carried him away, keeping him as a prisoner',
    translation: 'longe/ausente'
  },
  {
    word: 'baby',
    phrase: 'Bats only have one baby a year',
    translation: 'bebê'
  },
  {
    word: 'back',
    phrase: 'An empty spot in the back of the plane',
    translation: 'voltar/atrás'
  },
  {
    word: 'bad',
    phrase:
      'I feel bad that our business is benefiting from something so horrible',
    translation: 'ruim/mau'
  },
  {
    word: 'bag',
    phrase: 'A bag of apples',
    translation: 'bolsa/saco'
  },
  {
    word: 'ball',
    phrase: 'He comes across a group of kids playing ball',
    translation: 'bola/esfera'
  },
  {
    word: 'bank',
    phrase: 'I paid the money straight into my bank',
    translation: 'banco'
  },
  {
    word: 'bar',
    phrase: 'An iron bar',
    translation: 'barra'
  },
  {
    word: 'base',
    phrase: `Think we're safer at our base camp?`,
    translation: 'base/suporte'
  },
  {
    word: 'be',
    phrase: 'We must not be late',
    translation: 'ser/estar'
  },
  {
    word: 'beat',
    phrase: 'He heard the beat of a drum',
    translation: 'batida/ritmo'
  },
  {
    word: 'beautiful',
    phrase: 'Look at those big gray eyes and that beautiful red hair',
    translation: 'bonito/belo'
  },
  {
    word: 'because',
    phrase:
      'I think he felt included because he was helping as much as we were',
    translation: 'porque/pois'
  },
  {
    word: 'become',
    phrase: `It's the only way for him to become a vamp`,
    translation: 'tornar-se'
  },
  {
    word: 'bed',
    phrase: 'He sat up in the bed and looked around',
    translation: 'cama'
  },
  {
    word: 'before',
    phrase: 'Night came on before he had finished it',
    translation: 'antes'
  },
  {
    word: 'begin',
    phrase: 'Pierre was about to begin reading',
    translation: 'começar'
  },
  {
    word: 'behavior',
    phrase: 'My sister will instruct you in the behavior I expect of you',
    translation: 'comportamento'
  },
  {
    word: 'behind',
    phrase: 'The boy got up at once, and sat behind the king',
    translation: 'atrás'
  },
  {
    word: 'believe',
    phrase:
      'He is the handsomest and strongest of men, and I believe he is the wisest also',
    translation: 'acreditar'
  },
  {
    word: 'benefit',
    phrase: `If you think you'd benefit, you probably will`,
    translation: 'beneficiar'
  },
  {
    word: 'best',
    phrase: 'Try to look your best',
    translation: 'melhor'
  },
  {
    word: 'better',
    phrase: `We'd better go down for breakfast`,
    translation: 'melhor'
  },
  {
    word: 'between',
    phrase: 'There were sparks between them from the start',
    translation: 'entre'
  },
  {
    word: 'beyond',
    phrase: 'To infinity and beyond',
    translation: 'além'
  },
  {
    word: 'big',
    phrase: 'What a big family it was',
    translation: 'grande'
  },
  {
    word: 'bill',
    phrase: 'I paid the electric and water bill this week.',
    translation: 'conta'
  },
  {
    word: 'billion',
    phrase: 'A billion different stories and experiences.',
    translation: 'bilhão'
  },
  {
    word: 'bit',
    phrase: 'A little bit of information',
    translation: 'mordeu/pedaço'
  },
  {
    word: 'black',
    phrase: `It's just a black snake`,
    translation: 'preto'
  },
  {
    word: 'blood',
    phrase: 'Blood raced up her neck to warm her cheeks',
    translation: 'sangue'
  },
  {
    word: 'blue',
    phrase: 'She handed him a light blue shirt',
    translation: 'azul'
  },
  {
    word: 'board',
    phrase: 'Pete set the pieces out on the board',
    translation: 'borda/mesa/tabuleiro'
  },
  {
    word: 'body',
    phrase: 'Every muscle in her body was sore',
    translation: 'corpo'
  },
  {
    word: 'book',
    phrase:
      'A coloring book and crayons kept her busy while they worked and talked',
    translation: 'livro'
  },
  {
    word: 'born',
    phrase: 'Embrace it like a new born child',
    translation: 'nascido'
  },
  {
    word: 'both',
    phrase: 'I liked them both very much',
    translation: 'ambos'
  },
  {
    word: 'box',
    phrase: 'Her jewelry box was tiny and wooden',
    translation: 'caixa'
  },
  {
    word: 'boy',
    phrase: `My dear boy, don't say another word`,
    translation: 'menino'
  },
  {
    word: 'break',
    phrase: 'If you break it, you replace it.',
    translation: 'quebrar/intervalo'
  },
  {
    word: 'bring',
    phrase: 'Bring yourself and your friends to the party',
    translation: 'trazer'
  },
  {
    word: 'brother',
    phrase: 'She remembered her brother and his love',
    translation: 'irmão'
  },
  {
    word: 'budget',
    phrase: `The bike was a trophy from a time when Dean's budget contained more expendable income`,
    translation: 'orçamento'
  },
  {
    word: 'build',
    phrase: 'He paused, to build the suspense',
    translation: 'construir'
  },
  {
    word: 'building',
    phrase: 'They demolished the building',
    translation: 'prédio/edifício'
  },
  {
    word: 'business',
    phrase: 'I mean, I could still have my business in town',
    translation: 'negócio/empresa'
  },
  {
    word: 'but',
    phrase: 'She objected at first, but finally submitted',
    translation: 'mas'
  },
  {
    word: 'buy',
    phrase: 'Money is not required to buy one necessary of the soul',
    translation: 'comprar'
  },
  {
    word: 'by',
    phrase: 'I guess he was stunned by my beauty',
    translation: 'por'
  },
  {
    word: 'call',
    phrase: 'Please call me Lucy',
    translation: 'ligar'
  },
  {
    word: 'camera',
    phrase: `A photographer's camera flashed`,
    translation: 'câmera'
  },
  {
    word: 'campaign',
    phrase: 'An election campaign',
    translation: 'campanha'
  },
  {
    word: 'can',
    phrase: 'I can speak English',
    translation: 'posso'
  },
  {
    word: 'cancer',
    phrase: 'Smoking is the major cause of lung cancer',
    translation: 'câncer'
  },
  {
    word: 'candidate',
    phrase: 'She was the perfect candidate for a biography',
    translation: 'candidato'
  },
  {
    word: 'capital',
    phrase: 'Warsaw is the capital of Poland',
    translation: 'capital'
  },
  {
    word: 'car',
    phrase: 'She drove up in a car',
    translation: 'carro'
  },
  {
    word: 'card',
    phrase: 'A birthday card',
    translation: 'carta/cartão'
  },
  {
    word: 'care',
    phrase: `They don't care about human life`,
    translation: 'cuidado'
  },
  {
    word: 'career',
    phrase: 'He seemed destined for a career as an engineer like his father',
    translation: 'carreira'
  },
  {
    word: 'carry',
    phrase: 'We did a carry of equipment from the camp',
    translation: 'carregar'
  },
  {
    word: 'case',
    phrase: `I'll make an exception in your case`,
    translation: 'caso'
  },
  {
    word: 'catch',
    phrase: 'A record catch of 6.9 billion pounds of fish',
    translation: 'pegar/capturar'
  },
  {
    word: 'cause',
    phrase: 'The cause of the bug is not clear',
    translation: 'causa'
  },
  {
    word: 'cell',
    phrase:
      'In every cell of your body except your red blood cells exists a copy of your DNA',
    translation: 'célula'
  },
  {
    word: 'center',
    phrase: 'In the center was a large emerald-green star',
    translation: 'centro'
  },
  {
    word: 'central',
    phrase: 'After the war, it remained a central hub',
    translation: 'central'
  },
  {
    word: 'century',
    phrase: 'A century later, machines entered the scene',
    translation: 'século'
  },
  {
    word: 'certain',
    phrase: 'I feel certain of it',
    translation: 'certo(a)'
  },
  {
    word: 'certainly',
    phrase: 'Certainly she had been under a lot of stress',
    translation: 'certamente'
  },
  {
    word: 'chair',
    phrase: 'a chair by the window',
    translation: 'cadeira'
  },
  {
    word: 'challenge',
    phrase: "A number of doctors are challenging the study's claims.",
    translation: 'desafio'
  },
  {
    word: 'chance',
    phrase: 'This is the chance of a lifetime!',
    translation: 'chance'
  },
  {
    word: 'change',
    phrase: 'going through changes',
    translation: 'mudar'
  },
  {
    word: 'character',
    phrase: 'a cheerful disposition',
    translation: 'personagem'
  },
  {
    word: 'charge',
    phrase: 'They were charged as being instigators.',
    translation: 'carga'
  },
  {
    word: 'check',
    phrase: 'checking out new cars',
    translation: 'checar'
  },
  { word: 'child', phrase: 'a child of nature', translation: 'filho(a)' },
  { word: 'choice', phrase: 'freedom of choice', translation: 'escolha' },
  {
    word: 'choose',
    phrase: 'The political party chose a leader.',
    translation: 'escolher'
  },
  {
    word: 'church',
    phrase: 'This is the oldest church in town.',
    translation: 'igreja'
  },
  {
    word: 'citizen',
    phrase: 'the rights of a free citizen',
    translation: 'cidadão / cidadã'
  },
  {
    word: 'city',
    phrase: 'Getting lost in the maze was panic city.',
    translation: 'cidade'
  },
  {
    word: 'civil',
    phrase: 'It was hard to be civil when I felt so angry.',
    translation: 'civil'
  },
  {
    word: 'claim',
    phrase: 'The driver claimed the right to a hearing.',
    translation: 'afirmação'
  },
  {
    word: 'class',
    phrase: 'There are 20 students in the class.',
    translation: 'aula'
  },
  {
    word: 'clear',
    phrase: 'clear plastic bags',
    translation: 'claro/evidente'
  },
  {
    word: 'clearly',
    phrase: 'You should try to speak more clearly.',
    translation: 'claramente'
  },
  {
    word: 'close',
    phrase:
      'closed his football career with an outstanding big bowl performance',
    translation: 'fechar/perto'
  },
  { word: 'coach', phrase: 'a birth coach', translation: 'treinador(a)' },
  { word: 'cold', phrase: 'a cold drafty attic', translation: 'frio' },
  {
    word: 'collection',
    phrase: 'the collection of taxes',
    translation: 'coleção'
  },
  {
    word: 'college',
    phrase: 'an embalming college',
    translation: 'faculdade'
  },
  {
    word: 'color',
    phrase: 'wore his college colors to the game',
    translation: 'cor'
  },
  {
    word: 'come',
    phrase: "Come and see what's going on.",
    translation: 'venha'
  },
  {
    word: 'commercial',
    phrase: 'commercial services',
    translation: 'comercial'
  },
  {
    word: 'common',
    phrase: 'buried in a common grave',
    translation: 'comum'
  },
  {
    word: 'community',
    phrase: 'a monastic community',
    translation: 'comunidade'
  },
  {
    word: 'company',
    phrase: 'a publishing company',
    translation: 'companhia'
  },
  {
    word: 'compare',
    phrase: 'The test was easy compared with the last one.',
    translation: 'comparar'
  },
  {
    word: 'computer',
    phrase: 'He works all day on a computer.',
    translation: 'computador'
  },
  {
    word: 'concern',
    phrase: 'The report concerns global warming.',
    translation: 'interesse'
  },
  {
    word: 'condition',
    phrase: 'exercising to get into condition',
    translation: 'condição'
  },
  {
    word: 'conference',
    phrase:
      'The organization held its annual conference in New York this year.',
    translation: 'conferência'
  },
  {
    word: 'congress',
    phrase: "She was recently elected to the country's congress.",
    translation: 'congresso'
  },
  {
    word: 'consider',
    phrase: 'considered moving to the city',
    translation: 'considerar'
  },
  {
    word: 'consumer',
    phrase:
      'Many consumers are still not comfortable making purchases on the Internet.',
    translation: 'consumidor(a)'
  },
  {
    word: 'contain',
    phrase: 'Firefighters contained the wildfire.',
    translation: 'conter'
  },
  {
    word: 'continue',
    phrase: 'the search for peace will continue',
    translation: 'continuar'
  },
  {
    word: 'control',
    phrase: 'control a disease',
    translation: 'controlar'
  },
  {
    word: 'cost',
    phrase: 'She attends college at a cost of $15,000 a year.',
    translation: 'custo'
  },
  {
    word: 'could',
    phrase: 'You could have been hurt.',
    translation: 'poderia'
  },
  {
    word: 'country',
    phrase: 'The two countries have a lot in common.',
    translation: 'país'
  },
  { word: 'couple', phrase: 'a couple weeks', translation: 'casal' },
  {
    word: 'course',
    phrase: 'the course of a river',
    translation: 'curso'
  },
  {
    word: 'court',
    phrase: 'Both candidates were courting the independent voters.',
    translation: 'tribunal'
  },
  {
    word: 'cover',
    phrase: 'The gardener covered the soil with mulch.',
    translation: 'cobrir'
  },
  { word: 'create', phrase: 'create new jobs', translation: 'criar' },
  {
    word: 'crime',
    phrase: 'at that school no offense went unpunished',
    translation: 'crime'
  },
  {
    word: 'cultural',
    phrase: 'We studied our cultural heritage.',
    translation: 'cultural'
  },
  { word: 'culture', phrase: 'Southern culture', translation: 'cultura' },
  {
    word: 'cup',
    phrase: 'Would you like another cup of tea?',
    translation: 'copo'
  },
  { word: 'current', phrase: 'current supplies', translation: 'atual' },
  {
    word: 'customer',
    phrase: 'She is one of our best customers.',
    translation: 'cliente'
  },
  { word: 'cut', phrase: 'cut a commercial', translation: 'cortar' },
  {
    word: 'dark',
    phrase: 'obscure poems',
    translation: 'sombrio/escuro'
  },
  {
    word: 'data',
    phrase: 'These data have been questioned.',
    translation: 'dados'
  },
  {
    word: 'daughter',
    phrase: 'daughter DNA molecules',
    translation: 'filha'
  },
  {
    word: 'day',
    phrase: 'the first day of every month',
    translation: 'dia'
  },
  { word: 'dead', phrase: 'dead soldiers', translation: 'morto(a)' },
  {
    word: 'deal',
    phrase: 'a lawyer who deals with real estate law',
    translation: 'lídar/acordo'
  },
  {
    word: 'death',
    phrase: 'managed to escape death',
    translation: 'morto'
  },
  {
    word: 'debate',
    phrase: 'The case sparked a raging public debate on property rights.',
    translation: 'debate'
  },
  {
    word: 'decade',
    phrase: 'the decade of the twenties',
    translation: 'década'
  },
  {
    word: 'decide',
    phrase: "couldn't decide whether to take the job or not",
    translation: 'decidir'
  },
  {
    word: 'decision',
    phrase: 'a Supreme Court decision',
    translation: 'decisão'
  },
  { word: 'deep', phrase: 'a deep chasm', translation: 'profundo(a)' },
  {
    word: 'defense',
    phrase: 'speak out in defense of justice',
    translation: 'defesa'
  },
  {
    word: 'degree',
    phrase: 'requiring a high degree of skill',
    translation: 'grau/diploma'
  },
  {
    word: 'democrat',
    phrase:
      "a true democrat, he has always abhorred that nation's class system",
    translation: 'democrata'
  },
  {
    word: 'democratic',
    phrase: 'a democratic government',
    translation: 'democrático(a0'
  },
  {
    word: 'describe',
    phrase: 'The police asked her to describe the thief.',
    translation: 'descrever'
  },
  {
    word: 'design',
    phrase: 'a suitcase designed to hold a laptop computer',
    translation: 'desenhar/projetar'
  },
  {
    word: 'despite',
    phrase: 'we went to the party despite the bad weather outside',
    translation: 'apesar de'
  },
  {
    word: 'detail',
    phrase: 'giving careful attention to detail',
    translation: 'detalhe'
  },
  {
    word: 'determine',
    phrase: "the extent to which genetics determines one's personality",
    translation: 'determinar'
  },
  {
    word: 'develop',
    phrase: 'develop software',
    translation: 'desenvolve'
  },
  {
    word: 'development',
    phrase: 'an interesting development in the case',
    translation: 'desenvolvimento'
  },
  { word: 'die', phrase: 'die young', translation: 'morrer' },
  {
    word: 'difference',
    phrase: 'She knows the difference between right and wrong.',
    translation: 'diferença'
  },
  {
    word: 'different',
    phrase: 'different foods',
    translation: 'diferente'
  },
  {
    word: 'difficult',
    phrase: 'having a difficult time coping with her death',
    translation: 'dificuldade'
  },
  {
    word: 'dinner',
    phrase: 'We had many pleasant dinners together.',
    translation: 'jantar'
  },
  {
    word: 'direction',
    phrase: 'follow directions',
    translation: 'direção'
  },
  {
    word: 'director',
    phrase: 'a communications director',
    translation: 'diretor'
  },
  {
    word: 'discover',
    phrase: 'discovered a new Italian restaurant',
    translation: 'descobrir'
  },
  {
    word: 'discuss',
    phrase: 'discussed the need for a new highway',
    translation: 'discutir'
  },
  {
    word: 'discussion',
    phrase: 'The class was involved in a heated discussion about politics.',
    translation: 'discusão'
  },
  {
    word: 'disease',
    phrase: 'a rare genetic disease',
    translation: 'doença'
  },
  { word: 'do', phrase: 'did his duty', translation: 'faz/fazer' },
  {
    word: 'doctor',
    phrase: 'The class is being taught by Doctor Menzer.',
    translation: 'doutor'
  },
  {
    word: 'dog',
    phrase: 'you lucky dog',
    translation: 'cachorro/cadela'
  },
  { word: 'door', phrase: 'door to success', translation: 'porta' },
  {
    word: 'down',
    phrase: 'Pull down the blind.',
    translation: 'baixo(a)'
  },
  { word: 'draw', phrase: 'drew a gun', translation: 'desenhar' },
  { word: 'dream', phrase: 'gives me bad dreams', translation: 'sonho' },
  {
    word: 'drive',
    phrase: 'drive the nail into the beam',
    translation: 'dirigir'
  },
  { word: 'drop', phrase: 'a drop in demand', translation: 'solta' },
  {
    word: 'drug',
    phrase: 'drugs for treating high blood pressure',
    translation: 'medicamento/droga'
  },
  {
    word: 'during',
    phrase: 'She swims every day during the summer.',
    translation: 'durante'
  },
  {
    word: 'each',
    phrase: 'A rope was tied to each end of the boat.',
    translation: ''
  },
  {
    word: 'early',
    phrase: 'the early symptoms of the disease',
    translation: ''
  },
  { word: 'east', phrase: 'the east side of town', translation: '' },
  { word: 'easy', phrase: 'an easy mark for con men', translation: '' },
  {
    word: 'eat',
    phrase: 'gadgets that eat up too much space',
    translation: ''
  },
  {
    word: 'economic',
    phrase: 'a program to prevent inflation and economic collapse',
    translation: ''
  },
  {
    word: 'economy',
    phrase: "The war altered the country's economy.",
    translation: ''
  },
  {
    word: 'edge',
    phrase: 'They peered over the edge of the roof.',
    translation: ''
  },
  {
    word: 'education',
    phrase:
      'The school is devoted to the education of children with reading difficulties.',
    translation: ''
  },
  { word: 'effect', phrase: 'performed gymnastics', translation: '' },
  {
    word: 'effort',
    phrase: 'He put a lot of effort into finishing the project on time.',
    translation: ''
  },
  { word: 'eight', phrase: '', translation: '' },
  {
    word: 'either',
    phrase: 'plays either instrument well',
    translation: ''
  },
  { word: 'election', phrase: 'freedom of choice', translation: '' },
  { word: 'else', phrase: 'here and nowhere else', translation: '' },
  {
    word: 'employee',
    phrase: 'A good boss listens to his employees.',
    translation: ''
  },
  { word: 'end', phrase: 'end markets', translation: '' },
  {
    word: 'energy',
    phrase: 'the awesome power of flowing water',
    translation: ''
  },
  { word: 'enjoy', phrase: 'Relax and enjoy the view.', translation: '' },
  {
    word: 'enough',
    phrase: 'had enough of their foolishness',
    translation: ''
  },
  { word: 'enter', phrase: 'enter a race', translation: '' },
  { word: 'entire', phrase: 'read the whole book', translation: '' },
  {
    word: 'environment',
    phrase: 'the shocking decision was part of the background of the riots',
    translation: ''
  },
  {
    word: 'environmental',
    phrase: 'the shocking decision was part of the background of the riots',
    translation: ''
  },
  {
    word: 'especially',
    phrase: 'nothing especially radical in the remarks',
    translation: ''
  },
  {
    word: 'establish',
    phrase: 'The film established her as a star.',
    translation: ''
  },
  {
    word: 'even',
    phrase: 'the vast prairies are nearly level',
    translation: ''
  },
  { word: 'evening', phrase: 'evening clothes', translation: '' },
  {
    word: 'event',
    phrase: 'an encounter that was a chance occurrence',
    translation: ''
  },
  {
    word: 'ever',
    phrase: 'the ever-increasing population',
    translation: ''
  },
  { word: 'every', phrase: 'every once in a while', translation: '' },
  {
    word: 'everybody',
    phrase: 'The president waved to everybody in the crowd.',
    translation: ''
  },
  {
    word: 'everyone',
    phrase: 'Not everyone finished their meal.',
    translation: ''
  },
  {
    word: 'everything',
    phrase: 'People will buy everything she paints.',
    translation: ''
  },
  {
    word: 'evidence',
    phrase: 'careful not to show his true feelings',
    translation: ''
  },
  {
    word: 'exactly',
    phrase: 'these two pieces are exactly the same size',
    translation: ''
  },
  {
    word: 'example',
    phrase: 'an instance of history repeating itself',
    translation: ''
  },
  {
    word: 'executive',
    phrase: 'She has good executive skills.',
    translation: ''
  },
  {
    word: 'exist',
    phrase: 'the largest galaxy known to exist',
    translation: ''
  },
  {
    word: 'expect',
    phrase: 'expect that things will improve',
    translation: ''
  },
  {
    word: 'experience',
    phrase: 'The best way to learn is by experience.',
    translation: ''
  },
  {
    word: 'expert',
    phrase: 'proficient in translating foreign languages',
    translation: ''
  },
  { word: 'explain', phrase: 'explain the rules', translation: '' },
  { word: 'eye', phrase: 'in the public eye', translation: '' },
  { word: 'face', phrase: 'the face of an anvil', translation: '' },
  {
    word: 'fact',
    phrase: 'Rapid electronic communication is now a fact.',
    translation: ''
  },
  {
    word: 'factor',
    phrase: 'There were several factors contributing to their recent decline.',
    translation: ''
  },
  {
    word: 'fail',
    phrase:
      'He failed in his first attempt but succeeded in his second attempt.',
    translation: ''
  },
  { word: 'fall', phrase: 'We fell into a trap.', translation: '' },
  { word: 'family', phrase: 'family movies', translation: '' },
  { word: 'far', phrase: 'worked far into the night', translation: '' },
  { word: 'fast', phrase: 'acid-fast bacteria', translation: '' },
  {
    word: 'father',
    phrase: 'He became a father when he was 30.',
    translation: ''
  },
  { word: 'fear', phrase: 'feared to go out at night', translation: '' },
  {
    word: 'federal',
    phrase: 'We pay federal, state, and local taxes.',
    translation: ''
  },
  {
    word: 'feel',
    phrase: 'He felt a sudden pain in his leg.',
    translation: ''
  },
  {
    word: 'feeling',
    phrase: 'the feelings that once moved me are gone',
    translation: ''
  },
  { word: 'few', phrase: 'few of his stories are true', translation: '' },
  { word: 'field', phrase: 'a gravitational field', translation: '' },
  {
    word: 'fight',
    phrase: 'was fighting a forest fire',
    translation: ''
  },
  {
    word: 'figure',
    phrase: 'a score in double figures',
    translation: ''
  },
  { word: 'fill', phrase: 'fill in the blanks', translation: '' },
  { word: 'film', phrase: 'film critics', translation: '' },
  { word: 'final', phrase: 'final exams', translation: '' },
  {
    word: 'finally',
    phrase: 'He finally got around to calling.',
    translation: ''
  },
  {
    word: 'financial',
    phrase: 'the financial district',
    translation: ''
  },
  {
    word: 'find',
    phrase: 'found himself on the verge of bankruptcy',
    translation: ''
  },
  { word: 'fine', phrase: 'a fine day', translation: '' },
  {
    word: 'finger',
    phrase: "Don't stick your fingers in the cookie batter!",
    translation: ''
  },
  { word: 'finish', phrase: 'close a debate', translation: '' },
  {
    word: 'fire',
    phrase: 'They opened fire on [=began shooting at] the enemy.',
    translation: ''
  },
  { word: 'firm', phrase: 'a firm date', translation: '' },
  { word: 'first', phrase: 'his first girlfriend', translation: '' },
  { word: 'fish', phrase: 'cuttlefish', translation: '' },
  { word: 'five', phrase: 'I get off work at five.', translation: '' },
  {
    word: 'floor',
    phrase: 'Keep your feet on the floor.',
    translation: ''
  },
  { word: 'fly', phrase: 'butterfly', translation: '' },
  {
    word: 'focus',
    phrase: 'put immigration into focus as a hot topic for commentators',
    translation: ''
  },
  {
    word: 'follow',
    phrase: 'speeches followed the dinner',
    translation: ''
  },
  {
    word: 'food',
    phrase: 'Books were his mental food.',
    translation: ''
  },
  {
    word: 'foot',
    phrase: 'He was wearing boots on his feet.',
    translation: ''
  },
  { word: 'for', phrase: 'acted for the best', translation: '' },
  {
    word: 'force',
    phrase: 'the motivating force in her life',
    translation: ''
  },
  { word: 'foreign', phrase: 'foreign languages', translation: '' },
  {
    word: 'forget',
    phrase: "He's now a forgotten hero.",
    translation: ''
  },
  { word: 'form', phrase: 'a form of art', translation: '' },
  {
    word: 'former',
    phrase: 'restoring the theater to its former glory',
    translation: ''
  },
  { word: 'forward', phrase: 'moved slowly forward', translation: '' },
  {
    word: 'four',
    phrase: "What time is it? It's four.",
    translation: ''
  },
  { word: 'free', phrase: 'a free ticket', translation: '' },
  {
    word: 'friend',
    phrase: 'The friends of the library will host a fund-raiser.',
    translation: ''
  },
  { word: 'from', phrase: 'a week from today', translation: '' },
  {
    word: 'front',
    phrase:
      'the front of the church features a magnificent stained-glass window',
    translation: ''
  },
  { word: 'full', phrase: 'gone a full hour', translation: '' },
  {
    word: 'fund',
    phrase: 'The fund was established to aid the poor.',
    translation: ''
  },
  {
    word: 'future',
    phrase: 'We cannot foretell future events.',
    translation: ''
  },
  { word: 'game', phrase: 'the game of politics', translation: '' },
  { word: 'garden', phrase: 'a garden hose', translation: '' },
  {
    word: 'gas',
    phrase: 'ran out of gas in the seventh inning',
    translation: ''
  },
  {
    word: 'general',
    phrase: 'They have issued a general warning.',
    translation: ''
  },
  {
    word: 'generation',
    phrase: 'She was worshipped by a generation of moviegoers.',
    translation: ''
  },
  { word: 'get', phrase: 'get the better of an enemy', translation: '' },
  { word: 'girl', phrase: 'Is this your little girl?', translation: '' },
  { word: 'give', phrase: '84 divided by 12 gives 7', translation: '' },
  {
    word: 'glass',
    phrase: 'The waiter filled our glasses with water.',
    translation: ''
  },
  { word: 'go', phrase: 'went by train', translation: '' },
  {
    word: 'goal',
    phrase: 'announced his intention to marry',
    translation: ''
  },
  { word: 'good', phrase: 'good for a hundred dollars', translation: '' },
  {
    word: 'government',
    phrase: 'The government has been slow to react to the crisis.',
    translation: ''
  },
  { word: 'great', phrase: 'It was just great.', translation: '' },
  {
    word: 'green',
    phrase: 'fields green with meadow grass',
    translation: ''
  },
  { word: 'ground', phrase: 'fishing grounds', translation: '' },
  {
    word: 'group',
    phrase: "It'll be easier if we go there as a group.",
    translation: ''
  },
  {
    word: 'grow',
    phrase: 'The city is growing rapidly.',
    translation: ''
  },
  {
    word: 'growth',
    phrase: 'He had a growth spurt when he was 16 years old.',
    translation: ''
  },
  {
    word: 'guess',
    phrase: 'Can you guess how many people were there?',
    translation: ''
  },
  {
    word: 'gun',
    phrase: 'a gun battle between gang members and the police',
    translation: ''
  },
  { word: 'guy', phrase: 'This guy is my brother', translation: '' },
  {
    word: 'hair',
    phrase: 'He plucked a hair from his arm.',
    translation: ''
  },
  {
    word: 'half',
    phrase: 'the larger half of the fortune',
    translation: ''
  },
  {
    word: 'hand',
    phrase: 'She put her hands over her eyes.',
    translation: ''
  },
  { word: 'hang', phrase: 'a room hung with streamers', translation: '' },
  {
    word: 'happen',
    phrase: 'Something like that was bound to happen sooner or later.',
    translation: ''
  },
  { word: 'happy', phrase: 'a happy childhood', translation: '' },
  {
    word: 'hard',
    phrase: 'an uncomfortably hard chair',
    translation: ''
  },
  { word: 'have', phrase: 'I have my rights', translation: '' },
  {
    word: 'he',
    phrase: 'one should do the best he can',
    translation: ''
  },
  { word: 'head', phrase: 'head of a sail', translation: '' },
  { word: 'health', phrase: 'in poor health', translation: '' },
  { word: 'hear', phrase: 'thought I heard them leave', translation: '' },
  { word: 'heart', phrase: 'a man after my own heart', translation: '' },
  {
    word: 'heat',
    phrase: 'heat the oven to 350 degrees',
    translation: ''
  },
  { word: 'heavy', phrase: 'heavy clouds', translation: '' },
  {
    word: 'help',
    phrase: 'took an aspirin to help her headache',
    translation: ''
  },
  { word: 'her', phrase: 'her research', translation: '' },
  { word: 'here', phrase: 'this book here', translation: '' },
  { word: 'herself', phrase: 'she herself did it', translation: '' },
  { word: 'high', phrase: 'a high fly ball', translation: '' },
  { word: 'him', phrase: '', translation: '' },
  { word: 'himself', phrase: 'he himself did it', translation: '' },
  { word: 'his', phrase: 'his writings', translation: '' },
  { word: 'history', phrase: "you're history", translation: '' },
  { word: 'hit', phrase: 'He was hit by a car.', translation: '' },
  {
    word: 'hold',
    phrase: 'the bank holds the title to the car',
    translation: ''
  },
  { word: 'home', phrase: 'a place to call home', translation: '' },
  { word: 'hope', phrase: 'hoping for the best', translation: '' },
  { word: 'hospital', phrase: '', translation: '' },
  {
    word: 'hot',
    phrase: 'serving hot meals to the poor',
    translation: ''
  },
  { word: 'hotel', phrase: 'check out of a hotel', translation: '' },
  { word: 'hour', phrase: 'in our hour of need', translation: '' },
  { word: 'house', phrase: 'a two-family house', translation: '' },
  { word: 'how', phrase: 'How did he die?', translation: '' },
  {
    word: 'however',
    phrase: "would like to go; however, I think I'd better not",
    translation: ''
  },
  { word: 'huge', phrase: 'a huge undertaking', translation: '' },
  { word: 'human', phrase: 'human voices', translation: '' },
  {
    word: 'hundred',
    phrase: "it seems like we've answered this question hundreds of times",
    translation: ''
  },
  {
    word: 'husband',
    phrase: 'Have you met her husband?',
    translation: ''
  },
  { word: 'I', phrase: 'raticide', translation: '' },
  { word: 'idea', phrase: 'innovative ideas', translation: '' },
  {
    word: 'identify',
    phrase: 'She identified the dog as her lost pet.',
    translation: ''
  },
  {
    word: 'if',
    phrase: "I doubt if I'll pass the course",
    translation: ''
  },
  {
    word: 'image',
    phrase: 'image the bone using X-rays',
    translation: ''
  },
  {
    word: 'imagine',
    phrase: 'I just thought of a good joke',
    translation: ''
  },
  {
    word: 'impact',
    phrase:
      'a study outlining the potential environmental impacts of the construction project',
    translation: ''
  },
  {
    word: 'important',
    phrase: 'Diet and exercise are important for health.',
    translation: ''
  },
  {
    word: 'improve',
    phrase: 'measures to further improve the quality of medical care',
    translation: ''
  },
  { word: 'in', phrase: 'wounded in the leg', translation: '' },
  {
    word: 'include',
    phrase: 'the price of dinner includes dessert',
    translation: ''
  },
  {
    word: 'including',
    phrase: 'the price of dinner includes dessert',
    translation: ''
  },
  {
    word: 'increase',
    phrase: 'his waistline increased with age',
    translation: ''
  },
  {
    word: 'indeed',
    phrase: 'I know that you can indeed do better than that.',
    translation: ''
  },
  {
    word: 'indicate',
    phrase: 'the indicated treatment',
    translation: ''
  },
  { word: 'individual', phrase: 'special ingredients', translation: '' },
  {
    word: 'industry',
    phrase: 'He favors policies that promote industry.',
    translation: ''
  },
  {
    word: 'information',
    phrase:
      "They're working to collect information about the early settlers in the region.",
    translation: ''
  },
  {
    word: 'inside',
    phrase: 'The inside of the church is quite beautiful.',
    translation: ''
  },
  {
    word: 'instead',
    phrase: 'I was offered a ride, but I chose to walk instead.',
    translation: ''
  },
  {
    word: 'institution',
    phrase: 'banks and other financial institutions',
    translation: ''
  },
  {
    word: 'interest',
    phrase: 'She told us about her lifelong interest in music.',
    translation: ''
  },
  {
    word: 'interesting',
    phrase: "This is one of the most interesting books I've read all year.",
    translation: ''
  },
  {
    word: 'international',
    phrase: 'an international association of chemists',
    translation: ''
  },
  {
    word: 'interview',
    phrase: 'was interviewed on television',
    translation: ''
  },
  { word: 'into', phrase: 'enter into an alliance', translation: '' },
  { word: 'investment', phrase: '', translation: '' },
  {
    word: 'involve',
    phrase: 'the price of dinner includes dessert',
    translation: ''
  },
  {
    word: 'issue',
    phrase: "They misquoted me, but I didn't want to make an issue of it.",
    translation: ''
  },
  { word: 'it', phrase: '', translation: '' },
  { word: 'item', phrase: 'every item on the list', translation: '' },
  {
    word: 'its',
    phrase: 'a suite with its own private bathroom',
    translation: ''
  },
  {
    word: 'itself',
    phrase: 'This itself is a good enough reason.',
    translation: ''
  },
  { word: 'job', phrase: 'she quit her job', translation: '' },
  { word: 'join', phrase: 'join the navy', translation: '' },
  { word: 'just', phrase: 'just be yourself', translation: '' },
  {
    word: 'keep',
    phrase: 'kept him back with difficulty',
    translation: ''
  },
  { word: 'key', phrase: 'a key moment in the game', translation: '' },
  { word: 'kid', phrase: 'you poor kid', translation: '' },
  {
    word: 'kill',
    phrase: 'He threatened to kill them.',
    translation: ''
  },
  { word: 'kind', phrase: 'They were very kind to us.', translation: '' },
  {
    word: 'kitchen',
    phrase: 'They want a house with a large kitchen.',
    translation: ''
  },
  {
    word: 'know',
    phrase: 'He knows a lot about the history of the town.',
    translation: ''
  },
  {
    word: 'knowledge',
    phrase: 'rich in the knowledge of human nature',
    translation: ''
  },
  { word: 'land', phrase: 'landed the leading role', translation: '' },
  { word: 'language', phrase: 'medical language', translation: '' },
  {
    word: 'large',
    phrase: 'will take a larger role in the negotiations',
    translation: ''
  },
  {
    word: 'last',
    phrase: 'His last book was a failure.',
    translation: ''
  },
  { word: 'late', phrase: 'was late for class', translation: '' },
  {
    word: 'later',
    phrase: 'they later regretted the decision',
    translation: ''
  },
  {
    word: 'laugh',
    phrase: 'What are you laughing about?',
    translation: ''
  },
  { word: 'law', phrase: 'probate law', translation: '' },
  {
    word: 'lawyer',
    phrase:
      "their lawyers told them that they couldn't use the park for the concert without permission from the city",
    translation: ''
  },
  { word: 'lay', phrase: 'lay plaster', translation: '' },
  {
    word: 'lead',
    phrase: 'guided the scouts through the cave',
    translation: ''
  },
  {
    word: 'leader',
    phrase: 'The tour leader suggested several restaurants in the area.',
    translation: ''
  },
  { word: 'learn', phrase: 'learned to play chess', translation: '' },
  {
    word: 'least',
    phrase: 'Who was the least at fault in the case?',
    translation: ''
  },
  {
    word: 'leave',
    phrase: 'the wound left an ugly scar',
    translation: ''
  },
  { word: 'left', phrase: 'the left arm of a chair', translation: '' },
  { word: 'leg', phrase: 'legless lizards', translation: '' },
  {
    word: 'legal',
    phrase: 'Fishing in this lake is legal.',
    translation: ''
  },
  { word: 'less', phrase: 'less than half done', translation: '' },
  {
    word: 'let',
    phrase: 'a break in the clouds let us see the summit',
    translation: ''
  },
  { word: 'letter', phrase: '', translation: '' },
  {
    word: 'level',
    phrase: 'the job appeals to me on many levels',
    translation: ''
  },
  { word: 'lie', phrase: 'lie asleep', translation: '' },
  {
    word: 'life',
    phrase: 'He believes that God gives life to all creatures.',
    translation: ''
  },
  { word: 'light', phrase: 'a light lunch', translation: '' },
  {
    word: 'like',
    phrase: 'my car does not like cold weather',
    translation: ''
  },
  {
    word: 'likely',
    phrase: 'That seems to be the most likely explanation.',
    translation: ''
  },
  { word: 'line', phrase: 'stand on line', translation: '' },
  { word: 'list', phrase: '', translation: '' },
  {
    word: 'listen',
    phrase:
      "I listened as hard as I could, but I couldn't hear a word of what he said over all that noise.",
    translation: ''
  },
  { word: 'little', phrase: 'little towns', translation: '' },
  {
    word: 'live',
    phrase: 'they had always lived in the country',
    translation: ''
  },
  {
    word: 'local',
    phrase: 'We had dinner at a local restaurant.',
    translation: ''
  },
  { word: 'long', phrase: 'long i in sign', translation: '' },
  { word: 'look', phrase: 'look at the map', translation: '' },
  { word: 'lose', phrase: 'lost his temper', translation: '' },
  { word: 'loss', phrase: 'habitat loss', translation: '' },
  { word: 'lot', phrase: 'lots of friends', translation: '' },
  {
    word: 'love',
    phrase: 'Children need unconditional love from their parents.',
    translation: ''
  },
  { word: 'low', phrase: 'a low income group', translation: '' },
  {
    word: 'machine',
    phrase: 'Shovels are tools; bulldozers are machines.',
    translation: ''
  },
  { word: 'magazine', phrase: 'a gardening magazine', translation: '' },
  { word: 'main', phrase: 'by main strength', translation: '' },
  {
    word: 'maintain',
    phrase: 'steadfastly maintained his innocence',
    translation: ''
  },
  {
    word: 'major',
    phrase: "He's one of the major figures in 19th-century U.S. history.",
    translation: ''
  },
  { word: 'majority', phrase: 'a two-thirds majority', translation: '' },
  { word: 'make', phrase: 'makes it possible', translation: '' },
  {
    word: 'man',
    phrase: 'He was a shy boy, but he grew to be a strong and confident man.',
    translation: ''
  },
  { word: 'manage', phrase: 'manage a bond issue', translation: '' },
  {
    word: 'management',
    phrase: 'Business improved under the management of new owners.',
    translation: ''
  },
  {
    word: 'manager',
    phrase: "I'd like to speak to the manager, please.",
    translation: ''
  },
  {
    word: 'many',
    phrase: 'the many advantages of an education',
    translation: ''
  },
  {
    word: 'market',
    phrase: 'I stopped at the market on the way home for some juice.',
    translation: ''
  },
  {
    word: 'marriage',
    phrase: 'It was his second marriage.',
    translation: ''
  },
  {
    word: 'material',
    phrase: 'the material aspect of being',
    translation: ''
  },
  { word: 'matter', phrase: 'as a matter of policy', translation: '' },
  { word: 'may', phrase: 'things you may need', translation: '' },
  {
    word: 'maybe',
    phrase: 'maybe we can make it to the concert, if we hurry',
    translation: ''
  },
  { word: 'me', phrase: 'who, me?', translation: '' },
  { word: 'mean', phrase: 'a lean, mean athlete', translation: '' },
  {
    word: 'measure',
    phrase: 'She felt equal measures of hope and fear.',
    translation: ''
  },
  { word: 'media', phrase: '', translation: '' },
  { word: 'medical', phrase: 'a medical journal', translation: '' },
  { word: 'meet', phrase: 'fit for battle', translation: '' },
  {
    word: 'meeting',
    phrase: "The club's monthly meeting will be held next Monday evening.",
    translation: ''
  },
  {
    word: 'member',
    phrase: 'they ran only part of the way',
    translation: ''
  },
  {
    word: 'memory',
    phrase: 'gifted with a remarkable memory',
    translation: ''
  },
  {
    word: 'mention',
    phrase: 'In her speech, she carefully avoided any mention of her costar.',
    translation: ''
  },
  { word: 'message', phrase: 'Did you get my message?', translation: '' },
  {
    word: 'method',
    phrase: 'effective teaching methods',
    translation: ''
  },
  {
    word: 'middle',
    phrase: "during the century's middle decades",
    translation: ''
  },
  {
    word: 'might',
    phrase: 'I might go, but then again, I might not.',
    translation: ''
  },
  {
    word: 'military',
    phrase: "the country's military needs",
    translation: ''
  },
  { word: 'million', phrase: '', translation: '' },
  { word: 'mind', phrase: 'time out of mind', translation: '' },
  {
    word: 'minute',
    phrase: 'a relatively small backyard',
    translation: ''
  },
  {
    word: 'miss',
    phrase: 'He swung and missed the ball completely.',
    translation: ''
  },
  { word: 'mission', phrase: 'a space mission', translation: '' },
  {
    word: 'model',
    phrase: 'a decor that is a model of good taste',
    translation: ''
  },
  {
    word: 'modern',
    phrase: 'Water pollution is a growing problem in the modern world.',
    translation: ''
  },
  {
    word: 'moment',
    phrase: 'a region with no cities of importance',
    translation: ''
  },
  { word: 'money', phrase: 'a money pitch', translation: '' },
  {
    word: 'month',
    phrase: 'July is my favorite month.',
    translation: ''
  },
  { word: 'more', phrase: 'more was spilled', translation: '' },
  {
    word: 'morning',
    phrase: 'She liked to get things done early in the morning.',
    translation: ''
  },
  {
    word: 'most',
    phrase: 'Choosing a color took the most time.',
    translation: ''
  },
  {
    word: 'mother',
    phrase: 'the mother of all ocean liners',
    translation: ''
  },
  { word: 'mouth', phrase: 'the mouth of a volcano', translation: '' },
  {
    word: 'move',
    phrase: 'retiring early was a smart move',
    translation: ''
  },
  {
    word: 'movement',
    phrase: 'a movement to increase the minimum wage',
    translation: ''
  },
  {
    word: 'movie',
    phrase: 'a movie about the Civil War',
    translation: ''
  },
  { word: 'Mr', phrase: '', translation: '' },
  { word: 'Mrs', phrase: '', translation: '' },
  { word: 'much', phrase: 'taken too much time', translation: '' },
  { word: 'music', phrase: 'piano music', translation: '' },
  {
    word: 'must',
    phrase: 'we must be quiet during the performance',
    translation: ''
  },
  { word: 'my', phrase: 'my injuries', translation: '' },
  {
    word: 'myself',
    phrase: 'others and myself continued to press for the legislation',
    translation: ''
  },
  {
    word: 'name',
    phrase: 'Please write your name on this line.',
    translation: ''
  },
  {
    word: 'nation',
    phrase: "It's one of the richest nations in the world.",
    translation: ''
  },
  { word: 'national', phrase: 'the national flag', translation: '' },
  { word: 'natural', phrase: 'a natural leader', translation: '' },
  { word: 'nature', phrase: 'her romantic nature', translation: '' },
  { word: 'near', phrase: 'seemed to be near death', translation: '' },
  { word: 'nearly', phrase: 'nearly a year later', translation: '' },
  {
    word: 'necessary',
    phrase: 'Is it really necessary for me to have surgery?',
    translation: ''
  },
  {
    word: 'need',
    phrase: 'refugees in need of shelter and food',
    translation: ''
  },
  {
    word: 'network',
    phrase: 'a network of blood vessels',
    translation: ''
  },
  {
    word: 'never',
    phrase: 'I will never shop at that store again.',
    translation: ''
  },
  { word: 'new', phrase: 'He bought a new car.', translation: '' },
  { word: 'news', phrase: 'the virus was bad news', translation: '' },
  {
    word: 'newspaper',
    phrase: 'He used some newspaper to get the fire started.',
    translation: ''
  },
  { word: 'next', phrase: 'the next closest school', translation: '' },
  { word: 'nice', phrase: "That's nice of you to say.", translation: '' },
  { word: 'night', phrase: 'a night nurse', translation: '' },
  { word: 'no', phrase: 'no disputing the decision', translation: '' },
  {
    word: 'none',
    phrase: 'your help comes none too soon',
    translation: ''
  },
  {
    word: 'nor',
    phrase: 'not done by you nor me nor anyone',
    translation: ''
  },
  {
    word: 'north',
    phrase: 'Turn north onto Elm Street.',
    translation: ''
  },
  {
    word: 'not',
    phrase: 'He was standing not six feet away from me.',
    translation: ''
  },
  { word: 'note', phrase: 'end on a high note', translation: '' },
  {
    word: 'nothing',
    phrase: "There's nothing in my hands.",
    translation: ''
  },
  {
    word: 'notice',
    phrase: 'Please give us enough notice to prepare for your arrival.',
    translation: ''
  },
  { word: 'now', phrase: 'now you be sure to write', translation: '' },
  {
    word: 'number',
    phrase: 'the number of elderly is rising',
    translation: ''
  },
  {
    word: 'occur',
    phrase: 'The event is scheduled to occur at noon tomorrow.',
    translation: ''
  },
  { word: 'of', phrase: 'cup of water', translation: '' },
  { word: 'off', phrase: 'a long way off', translation: '' },
  { word: 'offer', phrase: 'an offer of marriage', translation: '' },
  {
    word: 'office',
    phrase: 'She works at our Chicago office.',
    translation: ''
  },
  { word: 'officer', phrase: 'chief executive officer', translation: '' },
  {
    word: 'official',
    phrase: 'A company official responded to our request.',
    translation: ''
  },
  {
    word: 'often',
    phrase: 'They go out to dinner fairly often.',
    translation: ''
  },
  { word: 'oh', phrase: "Oh, don't stop!", translation: '' },
  {
    word: 'oil',
    phrase: 'The price of crude oil is expected to rise.',
    translation: ''
  },
  {
    word: 'ok',
    phrase: 'We need her OK on this before we place the order.',
    translation: ''
  },
  {
    word: 'old',
    phrase: 'they brought up the same old argument',
    translation: ''
  },
  { word: 'on', phrase: 'I have a cut on my finger', translation: '' },
  { word: 'once', phrase: 'went skydiving once', translation: '' },
  { word: 'one', phrase: 'She is one year old.', translation: '' },
  { word: 'only', phrase: 'the only known species', translation: '' },
  {
    word: 'onto',
    phrase: 'Turn left onto Fifth Avenue.',
    translation: ''
  },
  { word: 'open', phrase: 'her eyes were open', translation: '' },
  {
    word: 'operation',
    phrase: 'The family runs a small farming operation.',
    translation: ''
  },
  {
    word: 'opportunity',
    phrase:
      "You'll have an opportunity to ask questions after the presentation.",
    translation: ''
  },
  { word: 'option', phrase: 'freedom of choice', translation: '' },
  { word: 'or', phrase: 'sink or swim', translation: '' },
  {
    word: 'order',
    phrase: "I ordered the books from the company's website.",
    translation: ''
  },
  {
    word: 'organization',
    phrase:
      'She is the leader of an international organization devoted to the protection of natural resources.',
    translation: ''
  },
  {
    word: 'other',
    phrase: 'something other than it seems to be',
    translation: ''
  },
  {
    word: 'others',
    phrase: 'something other than it seems to be',
    translation: ''
  },
  { word: 'our', phrase: 'our actions', translation: '' },
  { word: 'out', phrase: 'threw his shoulder out', translation: '' },
  { word: 'outside', phrase: 'outside the law', translation: '' },
  { word: 'over', phrase: 'sleep over', translation: '' },
  {
    word: 'own',
    phrase: 'was responsible for his own bad luck',
    translation: ''
  },
  {
    word: 'owner',
    phrase: 'He and his sister are owners of the restaurant.',
    translation: ''
  },
  { word: 'page', phrase: 'got a page from the client', translation: '' },
  {
    word: 'pain',
    phrase:
      'The medication may upset your stomach but if you experience acute abdominal pain call your doctor.',
    translation: ''
  },
  {
    word: 'painting',
    phrase: 'They hung the painting in the living room.',
    translation: ''
  },
  {
    word: 'paper',
    phrase: "We'll need pens, glue, and some paper.",
    translation: ''
  },
  {
    word: 'parent',
    phrase: 'My parents live in New York.',
    translation: ''
  },
  { word: 'part', phrase: 'took off for parts unknown', translation: '' },
  {
    word: 'participant',
    phrase: 'he seemed to be a willing participant in the prank',
    translation: ''
  },
  {
    word: 'particular',
    phrase: 'This computer program will be of particular interest to teachers.',
    translation: ''
  },
  {
    word: 'particularly',
    phrase: 'particularly stormy weather',
    translation: ''
  },
  {
    word: 'partner',
    phrase:
      'His partner, his wife of 20 years, was shocked to hear about his accident.',
    translation: ''
  },
  {
    word: 'party',
    phrase: 'a party to the transaction',
    translation: ''
  },
  {
    word: 'pass',
    phrase: 'title passes to the buyer upon payment in full',
    translation: ''
  },
  {
    word: 'past',
    phrase: 'started working on this project 10 years past',
    translation: ''
  },
  { word: 'patient', phrase: 'psychiatric patients', translation: '' },
  { word: 'pattern', phrase: 'the pattern of events', translation: '' },
  {
    word: 'pay',
    phrase: 'paid a teenager to mow his lawn',
    translation: ''
  },
  {
    word: 'peace',
    phrase:
      'After many years of war, people on both sides were longing for peace.',
    translation: ''
  },
  {
    word: 'people',
    phrase: 'People can be really cruel sometimes.',
    translation: ''
  },
  { word: 'per', phrase: 'as per usual', translation: '' },
  { word: 'perform', phrase: 'performed gymnastics', translation: '' },
  {
    word: 'performance',
    phrase: "This evening's performance will start at 8 o'clock.",
    translation: ''
  },
  {
    word: 'perhaps',
    phrase: 'perhaps we will not have to take this exam, but I doubt it',
    translation: ''
  },
  { word: 'period', phrase: 'period costumes', translation: '' },
  { word: 'person', phrase: 'spokesperson', translation: '' },
  {
    word: 'personal',
    phrase: 'personal financial gain',
    translation: ''
  },
  { word: 'phone', phrase: 'radiophone', translation: '' },
  { word: 'physical', phrase: 'physical attraction', translation: '' },
  { word: 'pick', phrase: '', translation: '' },
  {
    word: 'picture',
    phrase: 'she was the very picture of health',
    translation: ''
  },
  { word: 'piece', phrase: 'a three-piece suit', translation: '' },
  { word: 'place', phrase: 'a fine eating place', translation: '' },
  { word: 'plan', phrase: 'plans for a house', translation: '' },
  { word: 'plant', phrase: 'I planted corn this year.', translation: '' },
  { word: 'play', phrase: 'several issues are at play', translation: '' },
  { word: 'player', phrase: 'a chess player', translation: '' },
  { word: 'PM', phrase: '', translation: '' },
  { word: 'point', phrase: 'in point of fact', translation: '' },
  {
    word: 'police',
    phrase: 'Police arrested a man whom they identified as the murderer.',
    translation: ''
  },
  { word: 'policy', phrase: '', translation: '' },
  {
    word: 'political',
    phrase: 'The senator has changed political parties.',
    translation: ''
  },
  { word: 'politics', phrase: 'ethnic politics', translation: '' },
  {
    word: 'poor',
    phrase: 'We were too poor to buy new clothes.',
    translation: ''
  },
  { word: 'popular', phrase: 'a common error', translation: '' },
  {
    word: 'population',
    phrase: "The world's population has increased greatly.",
    translation: ''
  },
  {
    word: 'position',
    phrase: 'positioned the company in the global market',
    translation: ''
  },
  { word: 'positive', phrase: 'positive cash flow', translation: '' },
  {
    word: 'possible',
    phrase: 'the worst possible circumstance',
    translation: ''
  },
  { word: 'power', phrase: 'power tools', translation: '' },
  {
    word: 'practice',
    phrase: 'had a habit of tapping his fingers',
    translation: ''
  },
  {
    word: 'prepare',
    phrase: 'The teacher prepared the students for the test.',
    translation: ''
  },
  { word: 'present', phrase: 'give alms', translation: '' },
  {
    word: 'president',
    phrase: 'The President will hold a news conference tomorrow.',
    translation: ''
  },
  { word: 'pressure', phrase: 'predation pressure', translation: '' },
  { word: 'pretty', phrase: 'cost a pretty penny', translation: '' },
  {
    word: 'prevent',
    phrase: 'measures taken to prevent leaks',
    translation: ''
  },
  {
    word: 'price',
    phrase: 'You paid a high price for the car.',
    translation: ''
  },
  {
    word: 'private',
    phrase:
      "It was the first time many had seen works from the artist's private collection.",
    translation: ''
  },
  { word: 'probably', phrase: 'it will probably rain', translation: '' },
  {
    word: 'problem',
    phrase: 'the mystery of the stone monoliths',
    translation: ''
  },
  { word: 'process', phrase: 'a nerve cell process', translation: '' },
  {
    word: 'produce',
    phrase: 'Thousands of cars are produced here each year.',
    translation: ''
  },
  {
    word: 'product',
    phrase: "The company's newest product is selling well.",
    translation: ''
  },
  { word: 'production', phrase: 'production housing', translation: '' },
  {
    word: 'professional',
    phrase: 'Do you have any professional experience?',
    translation: ''
  },
  {
    word: 'professor',
    phrase: 'Professor Williams will be teaching the class.',
    translation: ''
  },
  {
    word: 'program',
    phrase: 'a program of regular dental checkups',
    translation: ''
  },
  { word: 'project', phrase: 'plans for a house', translation: '' },
  {
    word: 'property',
    phrase: 'material with a silky quality',
    translation: ''
  },
  { word: 'protect', phrase: "protect one's rights", translation: '' },
  {
    word: 'prove',
    phrase: 'the charges were never proved in court',
    translation: ''
  },
  {
    word: 'provide',
    phrase: 'The Web site provides information about local activities.',
    translation: ''
  },
  {
    word: 'public',
    phrase: 'a campaign to raise public awareness of the issue',
    translation: ''
  },
  { word: 'pull', phrase: 'pull turnips', translation: '' },
  {
    word: 'purpose',
    phrase: 'announced his intention to marry',
    translation: ''
  },
  {
    word: 'push',
    phrase: 'Do you want to push the shopping cart?',
    translation: ''
  },
  { word: 'put', phrase: 'put him on a diet', translation: '' },
  {
    word: 'quality',
    phrase: 'material with a silky quality',
    translation: ''
  },
  { word: 'question', phrase: 'ask for directions', translation: '' },
  { word: 'quickly', phrase: 'quick thinking', translation: '' },
  { word: 'quite', phrase: 'quite a beauty', translation: '' },
  { word: 'race', phrase: 'a bicycle race', translation: '' },
  {
    word: 'radio',
    phrase: 'The news was sent by radio.',
    translation: ''
  },
  { word: 'raise', phrase: 'raise sunken treasure', translation: '' },
  {
    word: 'range',
    phrase: 'the entire range of human experience',
    translation: ''
  },
  {
    word: 'rate',
    phrase: 'estimated the crowd at two hundred',
    translation: ''
  },
  {
    word: 'rather',
    phrase: 'would rather read than watch television',
    translation: ''
  },
  {
    word: 'reach',
    phrase: 'his voice reached the last rows',
    translation: ''
  },
  { word: 'read', phrase: 'a golfer reading a green', translation: '' },
  { word: 'ready', phrase: 'quick reflexes', translation: '' },
  { word: 'real', phrase: 'a story of real life', translation: '' },
  {
    word: 'reality',
    phrase: 'the difference between fiction and reality',
    translation: ''
  },
  {
    word: 'realize',
    phrase: 'I just thought of a good joke',
    translation: ''
  },
  { word: 'really', phrase: 'he runs really fast', translation: '' },
  {
    word: 'reason',
    phrase: 'teaches students how to think',
    translation: ''
  },
  {
    word: 'receive',
    phrase:
      'You will be charged a late fee if the electric company does not receive your payment on time.',
    translation: ''
  },
  {
    word: 'recent',
    phrase: 'Recent events have brought attention to the problem.',
    translation: ''
  },
  {
    word: 'recently',
    phrase: 'She recently graduated from college.',
    translation: ''
  },
  {
    word: 'recognize',
    phrase: "I didn't recognize you at first with your new haircut.",
    translation: ''
  },
  { word: 'record', phrase: 'a liberal voting record', translation: '' },
  { word: 'red', phrase: 'red tomatoes', translation: '' },
  {
    word: 'reduce',
    phrase: 'reduce the likelihood of war',
    translation: ''
  },
  {
    word: 'reflect',
    phrase: 'the pulse reflects the condition of the heart',
    translation: ''
  },
  {
    word: 'region',
    phrase: 'The bird returns to this region every year.',
    translation: ''
  },
  {
    word: 'relate',
    phrase: 'characters the reader can easily relate to',
    translation: ''
  },
  {
    word: 'relationship',
    phrase: 'The relationship between the two countries has improved.',
    translation: ''
  },
  { word: 'religious', phrase: 'religious attitudes', translation: '' },
  {
    word: 'remain',
    phrase: 'Little remained after the fire.',
    translation: ''
  },
  {
    word: 'remember',
    phrase: 'remembers that day as though it were yesterday',
    translation: ''
  },
  {
    word: 'remove',
    phrase: 'Remove the trash from the front yard.',
    translation: ''
  },
  {
    word: 'report',
    phrase: 'a special report on health',
    translation: ''
  },
  {
    word: 'represent',
    phrase: 'He represented his company at the meeting.',
    translation: ''
  },
  {
    word: 'Republican',
    phrase: 'Our state representative is a Republican.',
    translation: ''
  },
  {
    word: 'require',
    phrase: 'demanded payment of the debt',
    translation: ''
  },
  {
    word: 'research',
    phrase: "She conducts research into the causes of Alzheimer's disease.",
    translation: ''
  },
  {
    word: 'resource',
    phrase: 'exhausted all of their resources',
    translation: ''
  },
  {
    word: 'respond',
    phrase: "She hasn't yet responded to my letter.",
    translation: ''
  },
  {
    word: 'response',
    phrase: 'had answers to all their questions',
    translation: ''
  },
  {
    word: 'responsibility',
    phrase: 'The boys denied any responsibility for the damage to the fence.',
    translation: ''
  },
  {
    word: 'rest',
    phrase: 'We will not rest until we discover the truth.',
    translation: ''
  },
  {
    word: 'result',
    phrase: 'If you take this drug, side effects may result.',
    translation: ''
  },
  {
    word: 'return',
    phrase: 'reciprocated their hospitality by inviting them for a visit',
    translation: ''
  },
  {
    word: 'reveal',
    phrase: 'divine will as revealed in sacred writings',
    translation: ''
  },
  {
    word: 'rich',
    phrase: 'became rich through shrewd investing',
    translation: ''
  },
  { word: 'right', phrase: 'his right to decide', translation: '' },
  {
    word: 'rise',
    phrase: 'an idea that springs to mind',
    translation: ''
  },
  {
    word: 'risk',
    phrase: 'I prefer not to expose my money to too much risk.',
    translation: ''
  },
  {
    word: 'road',
    phrase: "on tour with the musical's road company",
    translation: ''
  },
  { word: 'rock', phrase: 'shake well before using', translation: '' },
  {
    word: 'role',
    phrase: 'He plays the role of the villain.',
    translation: ''
  },
  {
    word: 'room',
    phrase: 'Cigarette smoke filled the room.',
    translation: ''
  },
  { word: 'rule', phrase: 'ruled his appetites firmly', translation: '' },
  {
    word: 'run',
    phrase: 'ran with a wild crowd when he was young',
    translation: ''
  },
  {
    word: 'safe',
    phrase: "I don't feel safe in this neighborhood.",
    translation: ''
  },
  { word: 'same', phrase: 'took the same route', translation: '' },
  {
    word: 'save',
    phrase: 'Remember to save your work frequently.',
    translation: ''
  },
  { word: 'say', phrase: 'Is anybody there? he said.', translation: '' },
  {
    word: 'scene',
    phrase: "The play's opening scene takes place in the courtyard.",
    translation: ''
  },
  { word: 'school', phrase: 'driving schools', translation: '' },
  {
    word: 'science',
    phrase: 'The program encourages students to pursue a career in science.',
    translation: ''
  },
  { word: 'scientist', phrase: '', translation: '' },
  { word: 'score', phrase: 'scored three points', translation: '' },
  {
    word: 'sea',
    phrase: 'the seas of the Southern Hemisphere',
    translation: ''
  },
  { word: 'season', phrase: 'hunting season', translation: '' },
  { word: 'seat', phrase: 'trouser seat', translation: '' },
  {
    word: 'second',
    phrase: 'They are my second favorite band.',
    translation: ''
  },
  {
    word: 'section',
    phrase: 'the northern section of the route',
    translation: ''
  },
  {
    word: 'security',
    phrase: 'We must insure our national security.',
    translation: ''
  },
  {
    word: 'see',
    phrase: "I'll see you dead before I accept your terms.",
    translation: ''
  },
  {
    word: 'seek',
    phrase: 'The office is seeking a salesperson.',
    translation: ''
  },
  {
    word: 'seem',
    phrase: "What they're doing doesn't seem right to me.",
    translation: ''
  },
  {
    word: 'sell',
    phrase: 'He buys and remodels houses and then sells them at a profit.',
    translation: ''
  },
  {
    word: 'send',
    phrase: 'Satellites receive signals in space and send them back to Earth.',
    translation: ''
  },
  {
    word: 'senior',
    phrase: 'As his senior, she commanded quite a bit of respect.',
    translation: ''
  },
  { word: 'sense', phrase: 'a sense of danger', translation: '' },
  {
    word: 'series',
    phrase: 'the hall opened into a series of small rooms',
    translation: ''
  },
  { word: 'serious', phrase: 'making serious money', translation: '' },
  {
    word: 'serve',
    phrase: 'Soup was served as the first course.',
    translation: ''
  },
  { word: 'service', phrase: 'bus service', translation: '' },
  { word: 'set', phrase: 'set a stone on the grave', translation: '' },
  {
    word: 'seven',
    phrase: "What time is it? It's seven.",
    translation: ''
  },
  {
    word: 'several',
    phrase: 'It took several days for the package to arrive.',
    translation: ''
  },
  {
    word: 'sex',
    phrase: 'The form asks for your name, age, and sex.',
    translation: ''
  },
  { word: 'sexual', phrase: 'sexual conflict', translation: '' },
  { word: 'shake', phrase: 'shake off a cold', translation: '' },
  {
    word: 'share',
    phrase: 'shared my toys with the others',
    translation: ''
  },
  { word: 'she', phrase: 'she-cousin', translation: '' },
  { word: 'shoot', phrase: 'shoot a spitball', translation: '' },
  { word: 'short', phrase: 'short of cash', translation: '' },
  { word: 'shot', phrase: 'a shot of espresso', translation: '' },
  {
    word: 'should',
    phrase: 'you should brush your teeth after each meal',
    translation: ''
  },
  {
    word: 'shoulder',
    phrase: "He rested the baby's head on his shoulder.",
    translation: ''
  },
  {
    word: 'show',
    phrase: 'showed her snapshots to the whole group',
    translation: ''
  },
  { word: 'side', phrase: 'the back side of the moon', translation: '' },
  { word: 'sign', phrase: 'a sign of the times', translation: '' },
  {
    word: 'significant',
    phrase: 'producing significant profits',
    translation: ''
  },
  { word: 'similar', phrase: 'similar polygons', translation: '' },
  { word: 'simple', phrase: 'a simple leaf', translation: '' },
  {
    word: 'simply',
    phrase: 'Simply add water to the mix and stir.',
    translation: ''
  },
  {
    word: 'since',
    phrase: 'She graduated four years ago and has since married.',
    translation: ''
  },
  { word: 'sing', phrase: 'She sings in the choir.', translation: '' },
  { word: 'single', phrase: 'a single bed', translation: '' },
  {
    word: 'sister',
    phrase: 'The sisters live in the convent.',
    translation: ''
  },
  {
    word: 'sit',
    phrase: 'He was sitting in a chair next to the window.',
    translation: ''
  },
  {
    word: 'site',
    phrase: 'Hard hats must be worn on the construction site.',
    translation: ''
  },
  {
    word: 'situation',
    phrase: "He's in a bad situation.",
    translation: ''
  },
  { word: 'six', phrase: "What time is it? It's six.", translation: '' },
  { word: 'size', phrase: '', translation: '' },
  {
    word: 'skill',
    phrase: 'the art of choosing the right word',
    translation: ''
  },
  { word: 'skin', phrase: 'the rough skin of a shark', translation: '' },
  {
    word: 'small',
    phrase: 'a relatively small backyard',
    translation: ''
  },
  {
    word: 'smile',
    phrase: 'The photographer asked us to smile for the camera.',
    translation: ''
  },
  {
    word: 'so',
    phrase: "I didn't like it and I told her so",
    translation: ''
  },
  {
    word: 'social',
    phrase: 'She has poor social skills.',
    translation: ''
  },
  {
    word: 'society',
    phrase: 'Poverty hurts society as a whole.',
    translation: ''
  },
  {
    word: 'soldier',
    phrase: 'Many soldiers were wounded in combat.',
    translation: ''
  },
  { word: 'some', phrase: 'have some apples', translation: '' },
  {
    word: 'somebody',
    phrase: 'Somebody left you a message.',
    translation: ''
  },
  {
    word: 'someone',
    phrase: 'Someone left you a message.',
    translation: ''
  },
  {
    word: 'something',
    phrase: 'a group of fifty-somethings',
    translation: ''
  },
  {
    word: 'sometimes',
    phrase: 'His jokes are funny, but sometimes he goes too far.',
    translation: ''
  },
  { word: 'son', phrase: 'sonogram', translation: '' },
  { word: 'song', phrase: 'He sang a love song.', translation: '' },
  { word: 'soon', phrase: 'the sooner the better', translation: '' },
  { word: 'sort', phrase: 'sort mail', translation: '' },
  {
    word: 'sound',
    phrase: 'you sound just like your mother',
    translation: ''
  },
  {
    word: 'source',
    phrase: 'an investigation into the origin of baseball',
    translation: ''
  },
  {
    word: 'south',
    phrase: 'Turn south onto Elm Street.',
    translation: ''
  },
  {
    word: 'southern',
    phrase: 'the southern part of the state',
    translation: ''
  },
  { word: 'space', phrase: 'floor space', translation: '' },
  {
    word: 'speak',
    phrase: 'Have you two spoken since yesterday?',
    translation: ''
  },
  { word: 'special', phrase: 'special ingredients', translation: '' },
  { word: 'specific', phrase: 'special ingredients', translation: '' },
  {
    word: 'speech',
    phrase: 'She has to make a speech at the convention.',
    translation: ''
  },
  {
    word: 'spend',
    phrase: 'I spent $30 on his birthday gift.',
    translation: ''
  },
  { word: 'sport', phrase: 'a poor sport', translation: '' },
  {
    word: 'spring',
    phrase: 'an idea that springs to mind',
    translation: ''
  },
  {
    word: 'staff',
    phrase: 'The entire staff has done a great job this year.',
    translation: ''
  },
  { word: 'stage', phrase: 'stage a hunger strike', translation: '' },
  {
    word: 'stand',
    phrase: 'can you stand on your head',
    translation: ''
  },
  { word: 'standard', phrase: 'standards of behavior', translation: '' },
  {
    word: 'star',
    phrase: 'She had a starring role in his latest film.',
    translation: ''
  },
  { word: 'start', phrase: 'the rain started up again', translation: '' },
  {
    word: 'state',
    phrase: 'the gaseous state of water',
    translation: ''
  },
  {
    word: 'statement',
    phrase: 'His office issued an official statement concerning his departure.',
    translation: ''
  },
  {
    word: 'station',
    phrase: 'a marine biological station',
    translation: ''
  },
  {
    word: 'stay',
    phrase: 'went for a short vacation but stayed on for weeks',
    translation: ''
  },
  { word: 'step', phrase: 'stepsister', translation: '' },
  {
    word: 'still',
    phrase: "drink it while it's still hot",
    translation: ''
  },
  { word: 'stock', phrase: 'a stock model', translation: '' },
  { word: 'stop', phrase: 'the motor stopped', translation: '' },
  {
    word: 'store',
    phrase: 'an organism that absorbs and stores DDT',
    translation: ''
  },
  { word: 'story', phrase: '', translation: '' },
  {
    word: 'strategy',
    phrase:
      'They are proposing a new strategy for treating the disease with a combination of medications.',
    translation: ''
  },
  {
    word: 'street',
    phrase: 'success through compromise is a two-way street',
    translation: ''
  },
  { word: 'strong', phrase: 'strong talk', translation: '' },
  {
    word: 'structure',
    phrase: 'leaves and other plant structures',
    translation: ''
  },
  {
    word: 'student',
    phrase: 'a group of college students',
    translation: ''
  },
  {
    word: 'study',
    phrase: 'refused even to consider my proposal',
    translation: ''
  },
  { word: 'stuff', phrase: 'long-term policy stuff', translation: '' },
  {
    word: 'style',
    phrase: 'the flowery style of 18th century prose',
    translation: ''
  },
  {
    word: 'subject',
    phrase: 'the rights of a free citizen',
    translation: ''
  },
  {
    word: 'success',
    phrase: 'Success came easily to him.',
    translation: ''
  },
  {
    word: 'successful',
    phrase: 'the play had a successful run on Broadway',
    translation: ''
  },
  { word: 'such', phrase: 'such a fine person', translation: '' },
  {
    word: 'suddenly',
    phrase: "the army's precipitate withdrawal",
    translation: ''
  },
  {
    word: 'suffer',
    phrase: 'forced to bear a tragic loss',
    translation: ''
  },
  {
    word: 'suggest',
    phrase: 'a film title that suggests its subject matter',
    translation: ''
  },
  { word: 'summer', phrase: 'a summer home', translation: '' },
  { word: 'support', phrase: 'support a habit', translation: '' },
  { word: 'sure', phrase: 'a sure hand', translation: '' },
  { word: 'surface', phrase: "the earth's surface", translation: '' },
  { word: 'system', phrase: 'a heating system', translation: '' },
  {
    word: 'table',
    phrase: 'They were sitting at the dining table.',
    translation: ''
  },
  { word: 'take', phrase: 'taken ill', translation: '' },
  {
    word: 'talk',
    phrase: 'make the computer talk to the printer',
    translation: ''
  },
  {
    word: 'task',
    phrase: 'charged with a variety of tasks',
    translation: ''
  },
  { word: 'tax', phrase: 'taxidermy', translation: '' },
  {
    word: 'teach',
    phrase: 'taught us a lot about our planet',
    translation: ''
  },
  {
    word: 'teacher',
    phrase: 'Experience is a good teacher.',
    translation: ''
  },
  { word: 'team', phrase: 'a doubles team in tennis', translation: '' },
  {
    word: 'technology',
    phrase: 'Recent advances in medical technology have saved countless lives.',
    translation: ''
  },
  {
    word: 'television',
    phrase:
      'people who turn on the television the minute they walk in the door',
    translation: ''
  },
  {
    word: 'tell',
    phrase: 'divine will as revealed in sacred writings',
    translation: ''
  },
  { word: 'ten', phrase: "What time is it It's ten.", translation: '' },
  { word: 'tend', phrase: 'tend to our correspondence', translation: '' },
  {
    word: 'term',
    phrase: 'lost money in the short term',
    translation: ''
  },
  { word: 'test', phrase: 'the cake tested done', translation: '' },
  { word: 'than', phrase: 'easier said than done', translation: '' },
  {
    word: 'thank',
    phrase: 'I want to thank everyone who helped today.',
    translation: ''
  },
  {
    word: 'that',
    phrase: 'the senses are that whereby we experience the world',
    translation: ''
  },
  { word: 'the', phrase: 'the Lord', translation: '' },
  { word: 'their', phrase: 'their verses', translation: '' },
  { word: 'them', phrase: 'gave it to them', translation: '' },
  {
    word: 'themselves',
    phrase: 'they themselves were present',
    translation: ''
  },
  {
    word: 'then',
    phrase: 'She lived in the Soviet Union, as it then was called.',
    translation: ''
  },
  {
    word: 'theory',
    phrase: 'a hypothesis explaining the extinction of the dinosaurs',
    translation: ''
  },
  {
    word: 'there',
    phrase: 'Put the package there on the table.',
    translation: ''
  },
  { word: 'these', phrase: '', translation: '' },
  { word: 'they', phrase: 'What do they want to do?', translation: '' },
  {
    word: 'thing',
    phrase: 'What is that thing on the floor?',
    translation: ''
  },
  {
    word: 'think',
    phrase:
      'If he thinks he can fool me, he has another think coming. [=he is wrong]',
    translation: ''
  },
  { word: 'third', phrase: 'We sat in the third row.', translation: '' },
  { word: 'this', phrase: 'early this morning', translation: '' },
  { word: 'those', phrase: '', translation: '' },
  {
    word: 'though',
    phrase: 'Though it was raining, we went hiking.',
    translation: ''
  },
  { word: 'thought', phrase: 'innovative ideas', translation: '' },
  { word: 'thousand', phrase: '', translation: '' },
  {
    word: 'threat',
    phrase: 'He was willing to use violence and threats to get what he wanted.',
    translation: ''
  },
  {
    word: 'three',
    phrase: "What time is it? It's three.",
    translation: ''
  },
  {
    word: 'through',
    phrase: 'a road through the desert',
    translation: ''
  },
  {
    word: 'throughout',
    phrase: 'The company has stores throughout the United States and Canada.',
    translation: ''
  },
  { word: 'throw', phrase: 'thrown into chaos', translation: '' },
  {
    word: 'thus',
    phrase:
      'The judge expressed it thus: Our obligation is to discover the truth.',
    translation: ''
  },
  { word: 'time', phrase: 'move with the times', translation: '' },
  {
    word: 'to',
    phrase: 'went back to the original idea',
    translation: ''
  },
  { word: 'today', phrase: 'We have to finish today.', translation: '' },
  { word: 'together', phrase: 'add together', translation: '' },
  {
    word: 'tonight',
    phrase: "This afternoon I'm busy, but tonight I'm free.",
    translation: ''
  },
  {
    word: 'too',
    phrase: 'We are selling the house and the furniture too.',
    translation: ''
  },
  { word: 'top', phrase: 'top form', translation: '' },
  { word: 'total', phrase: 'a total stranger', translation: '' },
  { word: 'tough', phrase: 'tough luck', translation: '' },
  {
    word: 'toward',
    phrase: 'The bus is heading toward town.',
    translation: ''
  },
  {
    word: 'town',
    phrase: 'the town of Jackson, Florida',
    translation: ''
  },
  {
    word: 'trade',
    phrase: 'did a good trade in small appliances',
    translation: ''
  },
  {
    word: 'traditional',
    phrase: 'traditional songs/stories',
    translation: ''
  },
  {
    word: 'training',
    phrase: 'The job requires special training.',
    translation: ''
  },
  {
    word: 'travel',
    phrase: 'The birds are traveling south for the winter.',
    translation: ''
  },
  {
    word: 'treat',
    phrase: 'The author treats this issue in the next chapter.',
    translation: ''
  },
  {
    word: 'treatment',
    phrase: 'palliative treatment of inoperable cancer',
    translation: ''
  },
  { word: 'tree', phrase: 'a banana tree', translation: '' },
  {
    word: 'trial',
    phrase: 'He did not get a fair trial.',
    translation: ''
  },
  { word: 'trip', phrase: 'on a nostalgia trip', translation: '' },
  { word: 'trouble', phrase: 'heading for trouble', translation: '' },
  { word: 'true', phrase: 'the true faith', translation: '' },
  {
    word: 'truth',
    phrase: 'At some point you have to face the simple truth that we failed.',
    translation: ''
  },
  {
    word: 'try',
    phrase: 'ills that afflict the elderly',
    translation: 'tentar'
  },
  { word: 'turn', phrase: 'turn a crank', translation: '' },
  { word: 'TV', phrase: 'We need a new TV.', translation: '' },
  { word: 'two', phrase: 'It was two in the morning.', translation: '' },
  {
    word: 'type',
    phrase: 'one of three basic body types',
    translation: ''
  },
  {
    word: 'under',
    phrase: 'a soft heart under a stern exterior',
    translation: ''
  },
  {
    word: 'understand',
    phrase: 'orders that were fully understood and promptly obeyed',
    translation: ''
  },
  {
    word: 'unit',
    phrase: 'The family is the basic unit of society.',
    translation: ''
  },
  { word: 'until', phrase: "we don't open until ten", translation: '' },
  { word: 'up', phrase: 'at prices of $10 and up', translation: '' },
  {
    word: 'upon',
    phrase: 'He carefully placed the vase upon the table.',
    translation: ''
  },
  { word: 'us', phrase: 'Does God walk among us?', translation: '' },
  { word: 'use', phrase: "didn't use to smoke", translation: '' },
  {
    word: 'usually',
    phrase: 'a time of year when the weather is usually hot',
    translation: ''
  },
  {
    word: 'value',
    phrase: 'the value of base stealing in baseball',
    translation: ''
  },
  { word: 'various', phrase: 'different foods', translation: '' },
  { word: 'very', phrase: "didn't hurt very much", translation: '' },
  {
    word: 'victim',
    phrase: 'a victim of the auto crash',
    translation: ''
  },
  {
    word: 'view',
    phrase: 'sat high in the bleachers to get a good view',
    translation: ''
  },
  {
    word: 'violence',
    phrase:
      'They need to learn how to settle their arguments without resorting to violence.',
    translation: ''
  },
  {
    word: 'visit',
    phrase: 'She is visiting her aunt in New York.',
    translation: ''
  },
  {
    word: 'voice',
    phrase: 'expressed her feelings in music',
    translation: ''
  },
  {
    word: 'vote',
    phrase: 'They encouraged everyone to vote in the presidential election.',
    translation: ''
  },
  { word: 'wait', phrase: 'wait your turn', translation: '' },
  { word: 'walk', phrase: 'walk a tightrope', translation: '' },
  { word: 'wall', phrase: 'heart walls', translation: '' },
  { word: 'want', phrase: 'wants out of the deal', translation: '' },
  { word: 'war', phrase: 'a war against disease', translation: '' },
  { word: 'watch', phrase: 'watch a ball game', translation: '' },
  {
    word: 'water',
    phrase: 'Would you like a glass of water?',
    translation: ''
  },
  { word: 'way', phrase: 'a way with words', translation: '' },
  { word: 'we', phrase: 'We would like to order now.', translation: '' },
  {
    word: 'weapon',
    phrase: 'assault with a deadly weapon',
    translation: ''
  },
  { word: 'wear', phrase: 'wear glasses', translation: '' },
  { word: 'week', phrase: 'the last week of the month', translation: '' },
  {
    word: 'weight',
    phrase: 'a region with no cities of importance',
    translation: ''
  },
  { word: 'well', phrase: 'works well under pressure', translation: '' },
  {
    word: 'west',
    phrase: 'They drove west after they got off the highway.',
    translation: ''
  },
  { word: 'western', phrase: 'western music', translation: '' },
  {
    word: 'what',
    phrase: 'What is wealth without friends?',
    translation: ''
  },
  { word: 'whatever', phrase: 'no food whatever', translation: '' },
  {
    word: 'when',
    phrase: 'When did the American Civil War begin?',
    translation: ''
  },
  { word: 'where', phrase: 'where are we going', translation: '' },
  {
    word: 'whether',
    phrase: 'wondered whether to stay',
    translation: ''
  },
  {
    word: 'which',
    phrase: 'kept a record of which employees took their vacations in July',
    translation: ''
  },
  {
    word: 'while',
    phrase: 'It took them a while to find out what was causing the problem.',
    translation: ''
  },
  { word: 'white', phrase: 'a white rabbit', translation: '' },
  { word: 'who', phrase: 'find out who they are', translation: '' },
  { word: 'whole', phrase: 'a whole egg', translation: '' },
  {
    word: 'whom',
    phrase: 'whom shall I say is calling?',
    translation: ''
  },
  {
    word: 'whose',
    phrase: 'This is the book whose cover is torn.',
    translation: ''
  },
  { word: 'why', phrase: 'that is why you did it', translation: '' },
  { word: 'wide', phrase: 'industry-wide', translation: '' },
  { word: 'wife', phrase: 'We met him and his wife.', translation: '' },
  { word: 'will', phrase: 'if we will all do our best', translation: '' },
  {
    word: 'win',
    phrase: 'The boxer won the match by knockout.',
    translation: ''
  },
  { word: 'wind', phrase: '', translation: '' },
  {
    word: 'window',
    phrase: 'She opened a window to let in some air.',
    translation: ''
  },
  {
    word: 'wish',
    phrase: 'desires to start a new life',
    translation: ''
  },
  { word: 'with', phrase: 'a talk with a friend', translation: '' },
  { word: 'within', phrase: 'within sight', translation: '' },
  { word: 'without', phrase: 'left without him', translation: '' },
  {
    word: 'woman',
    phrase: 'She grew up to become a confident and beautiful woman.',
    translation: ''
  },
  {
    word: 'wonder',
    phrase: 'the pyramid is a wonder to behold',
    translation: ''
  },
  {
    word: 'word',
    phrase: 'How do you spell that word?',
    translation: ''
  },
  { word: 'work', phrase: 'work farmland', translation: '' },
  {
    word: 'worker',
    phrase: 'The company is planning to hire 200 workers.',
    translation: ''
  },
  { word: 'world', phrase: 'the digital world', translation: '' },
  {
    word: 'worry',
    phrase: 'pursued a policy of worrying the enemy',
    translation: ''
  },
  {
    word: 'would',
    phrase: 'would be glad to know the answer',
    translation: ''
  },
  { word: 'write', phrase: 'write a check', translation: '' },
  {
    word: 'writer',
    phrase: 'She is my favorite French writer.',
    translation: ''
  },
  {
    word: 'wrong',
    phrase: 'the injustices suffered by the lower classes',
    translation: ''
  },
  { word: 'yard', phrase: '', translation: '' },
  {
    word: 'yeah',
    phrase: '"Do you want to come?" "Yeah, sure."',
    translation: ''
  },
  {
    word: 'year',
    phrase: "I haven't seen her in a year.",
    translation: ''
  },
  {
    word: 'yes',
    phrase: "yes, I'll be ready for the test tomorrow",
    translation: ''
  },
  {
    word: 'yet',
    phrase: 'His latest novel is his best one yet.',
    translation: ''
  },
  { word: 'you', phrase: '', translation: '' },
  { word: 'young', phrase: 'a young wine', translation: '' },
  {
    word: 'your',
    phrase: 'Please wash your hands before dinner.',
    translation: ''
  },
  {
    word: 'yourself',
    phrase: "You're not yourself today. Is something wrong?",
    translation: ''
  }
];

export default CONTENTS;