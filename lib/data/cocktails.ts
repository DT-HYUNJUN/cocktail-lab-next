import { Cocktail, BaseSpirit, Strength, TasteProfile, GlassType, Difficulty, IngredientCategory } from '../types/cocktail';

export const BASE_SPIRITS: { id: BaseSpirit; labelKo: string; labelEn: string; color: string; bgClass: string; icon: string }[] = [
  { id: 'gin', labelKo: '진', labelEn: 'Gin', color: '#06b6d4', bgClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20', icon: '🍸' },
  { id: 'rum', labelKo: '럼', labelEn: 'Rum', color: '#f59e0b', bgClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: '🍹' },
  { id: 'vodka', labelKo: '보드카', labelEn: 'Vodka', color: '#6366f1', bgClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20', icon: '🧊' },
  { id: 'whiskey', labelKo: '위스키', labelEn: 'Whiskey', color: '#d97706', bgClass: 'bg-amber-600/10 text-amber-500 border-amber-600/20', icon: '🥃' },
  { id: 'tequila', labelKo: '데킬라', labelEn: 'Tequila', color: '#10b981', bgClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: '🌵' },
  { id: 'brandy', labelKo: '브랜디', labelEn: 'Brandy', color: '#b45309', bgClass: 'bg-orange-600/10 text-orange-500 border-orange-600/20', icon: '🍇' },
  { id: 'liqueur', labelKo: '리큐르', labelEn: 'Liqueur', color: '#ec4899', bgClass: 'bg-pink-500/10 text-pink-400 border-pink-500/20', icon: '🍒' },
  { id: 'non_alcoholic', labelKo: '논알콜', labelEn: 'Non-Alcoholic', color: '#3b82f6', bgClass: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: '🌿' },
];

export const TASTE_PROFILES: { id: TasteProfile; labelKo: string; labelEn: string; color: string }[] = [
  { id: 'sweet', labelKo: '달콤한', labelEn: 'Sweet', color: '#ec4899' },
  { id: 'sour', labelKo: '상큼한', labelEn: 'Sour', color: '#eab308' },
  { id: 'bitter', labelKo: '쌉싸름한', labelEn: 'Bitter', color: '#ef4444' },
  { id: 'refreshing', labelKo: '청량한', labelEn: 'Refreshing', color: '#06b6d4' },
  { id: 'smoky', labelKo: '스모키한', labelEn: 'Smoky', color: '#78716c' },
  { id: 'fruity', labelKo: '과일향의', labelEn: 'Fruity', color: '#f97316' },
  { id: 'creamy', labelKo: '크리미한', labelEn: 'Creamy', color: '#a855f7' },
  { id: 'herbal', labelKo: '허브향의', labelEn: 'Herbal', color: '#10b981' },
  { id: 'dry', labelKo: '드라이한', labelEn: 'Dry', color: '#64748b' },
];

export const GLASS_TYPES: { id: GlassType; labelKo: string; labelEn: string; icon: string }[] = [
  { id: 'martini', labelKo: '마티니 글라스', labelEn: 'Martini Glass', icon: '🍸' },
  { id: 'highball', labelKo: '하이볼 글라스', labelEn: 'Highball Glass', icon: '🥛' },
  { id: 'rocks', labelKo: '온더락 / 록스 글라스', labelEn: 'Old Fashioned / Rocks Glass', icon: '🥃' },
  { id: 'coupe', labelKo: '쿠페 글라스', labelEn: 'Coupe Glass', icon: '🥂' },
  { id: 'hurricane', labelKo: '허리케인 글라스', labelEn: 'Hurricane Glass', icon: '🍹' },
  { id: 'flute', labelKo: '샴페인 플루트', labelEn: 'Champagne Flute', icon: '🍾' },
  { id: 'copper_mug', labelKo: '구리 머그', labelEn: 'Copper Mug', icon: '☕' },
  { id: 'collins', labelKo: '콜린스 글라스', labelEn: 'Collins Glass', icon: '🥤' },
];

export const STRENGTH_MAP: Record<Strength, { labelKo: string; range: string; color: string; badgeClass: string }> = {
  non_alcoholic: { labelKo: '무알콜', range: '0%', color: '#3b82f6', badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  low: { labelKo: '낮은 도수', range: '1~15%', color: '#10b981', badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  medium: { labelKo: '보통 도수', range: '15~25%', color: '#f59e0b', badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  high: { labelKo: '높은 도수', range: '25% 이상', color: '#ef4444', badgeClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30' },
};

export const DIFFICULTY_MAP: Record<Difficulty, { labelKo: string; icon: string }> = {
  easy: { labelKo: '초보자 쉬움', icon: '★☆☆' },
  medium: { labelKo: '보통', icon: '★★☆' },
  hard: { labelKo: '고난도', icon: '★★★' },
};

export const METHOD_MAP: Record<string, { labelKo: string; desc: string }> = {
  build: { labelKo: '빌드 (Build)', desc: '잔에 얼음과 재료를 바로 부어 가볍게 젓는 직관적인 기법' },
  shake: { labelKo: '셰이크 (Shake)', desc: '셰이커에 얼음과 함께 넣고 강하게 흔들어 급랭 및 희석' },
  stir: { labelKo: '스터 (Stir)', desc: '믹싱 글라스에 얼음과 함께 바스푼으로 부드럽게 저어 투명감 유지' },
  blend: { labelKo: '블렌드 (Blend)', desc: '블렌더 믹서기에 얼음과 함께 곱게 갈아 슬러시 형태로 제조' },
  layer: { labelKo: '플로트/레이어 (Layer)', desc: '비중 차이를 이용해 바스푼을 타고 층을 쌓는 기법' },
};

export const COCKTAILS: Cocktail[] = [
  {
    id: 'mojito',
    nameKo: '모히토',
    nameEn: 'Mojito',
    shortDesc: '라임과 민트의 폭발적인 청량감이 돋보이는 쿠바의 대표 여름 칵테일',
    description: '모히토는 화이트 럼을 베이스로 라임의 짜릿한 산미, 신선한 민트의 향긋함, 달콤한 시럽과 시원한 탄산수가 완벽한 조화를 이루는 세계에서 가장 사랑받는 칵테일 중 하나입니다. 어니스트 헤밍웨이가 쿠바 아바나에서 사랑했던 음료로도 널리 알려져 있습니다.',
    history: '16세기 영국 해적 프랜시스 드레이크가 선원들의 괴혈병 치료를 위해 마시던 음료인 "엘 드라케(El Draque)"에서 유래했다고 전해지며, 20세기 초 아바나의 유명 바 "라 보데기타 델 메디오"에서 현대적인 모히토 레시피로 정립되었습니다.',
    baseSpirit: 'rum',
    abv: 13,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['refreshing', 'sour', 'sweet', 'herbal'],
    glass: 'highball',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    featured: true,
    popular: true,
    rating: 4.9,
    preparationTimeMinutes: 4,
    colorGradient: 'from-emerald-500/30 via-teal-500/10 to-zinc-900',
    accentColor: '#10b981',
    ice: '크러시드 아이스 (잘게 부순 얼음) 또는 각얼음 가득',
    garnish: '신선한 민트 줄기 1개, 라임 휠(슬라이스) 1조각',
    ingredients: [
      { nameKo: '화이트 럼', nameEn: 'White Rum', amount: 45, unit: 'ml', category: 'spirit' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 20, unit: 'ml', category: 'juice' },
      { nameKo: '신선한 민트 잎', nameEn: 'Fresh Mint Leaves', amount: 8, unit: 'leaf', category: 'garnish' },
      { nameKo: '심플 시럽 (또는 설탕 2티스푼)', nameEn: 'Simple Syrup', amount: 15, unit: 'ml', category: 'syrup' },
      { nameKo: '클럽 소다 (탄산수)', nameEn: 'Club Soda', amount: 60, unit: 'fill', category: 'mixer' },
    ],
    instructions: [
      '하이볼 글라스에 신선한 민트 잎 8~10장과 심플 시럽(설탕), 라임즙을 넣습니다.',
      '머들러(Muddler)나 스푼으로 민트 잎을 부드럽게 으깨어 향을 추출합니다 (너무 찢기지 않게 주의).',
      '화이트 럼 45ml를 붓고 잘 섞어줍니다.',
      '잔에 크러시드 아이스를 가득 채웁니다.',
      '탄산수를 잔 끝까지 붓고, 바스푼으로 아래에서 위로 살짝 들어 올리며 부드럽게 저어줍니다.',
      '손바닥으로 민트 줄기를 쳐서 아로마를 극대화한 후 라임 슬라이스와 함께 장식합니다.'
    ],
    bartenderTips: [
      '민트 잎을 강하게 으깨어 찢으면 쓴맛이 우러나올 수 있으니 아로마 오일만 나오도록 가볍게 지그시 눌러주세요.',
      '각얼음 대신 잘게 부순 크러시드 아이스를 사용하면 훨씬 시원하고 민트와 라임이 골고루 분산됩니다.'
    ]
  },
  {
    id: 'margarita',
    nameKo: '마가리타',
    nameEn: 'Margarita',
    shortDesc: '데킬라의 강렬함과 라임의 산미, 잔 테두리의 짭조름한 소금 림의 완벽한 밸런스',
    description: '마가리타는 데킬라 베이스 칵테일의 영원한 클래식입니다. 상큼한 라임 주스와 오렌지 리큐르(트리플 섹 또는 코인트로)의 달콤 쌉싸름함, 그리고 글라스 림에 묻힌 소금이 어우러져 한 모금마다 감칠맛과 청량함을 극대화합니다.',
    history: '1930~40년대 멕시코 또는 미국의 바텐더들에 의해 창작되었다는 설이 지배적이며, 연인의 이름을 따서 지어졌다는 로맨틱한 일화로도 유명합니다.',
    baseSpirit: 'tequila',
    abv: 26,
    strength: 'high',
    difficulty: 'medium',
    tastes: ['sour', 'refreshing', 'dry', 'fruity'],
    glass: 'coupe',
    method: 'shake',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    featured: true,
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 3,
    colorGradient: 'from-lime-500/30 via-emerald-500/10 to-zinc-900',
    accentColor: '#84cc16',
    ice: '셰이커 내 큐브 아이스, 서빙 시 얼음 없이 차갑게 서빙 (Up)',
    garnish: '글라스 림의 코셔 솔트(소금), 라임 휠',
    ingredients: [
      { nameKo: '블랑코 데킬라', nameEn: 'Blanco Tequila (100% Agave)', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '트리플 섹 (또는 코인트로)', nameEn: 'Triple Sec / Cointreau', amount: 20, unit: 'ml', category: 'liqueur' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 15, unit: 'ml', category: 'juice' },
      { nameKo: '아가베 시럽 (취향에 따라)', nameEn: 'Agave Syrup', amount: 5, unit: 'ml', category: 'syrup', isOptional: true },
      { nameKo: '코셔 솔트 (글라스 테두리용)', nameEn: 'Salt (Rim)', amount: 1, unit: 'pinch', category: 'garnish' },
    ],
    instructions: [
      '쿠페 또는 마가리타 글라스의 테두리 절반에 라임 조각을 문지른 뒤 소금 접시에 굴려 소금 림(Rim)을 만듭니다.',
      '셰이커에 데킬라 50ml, 트리플 섹 20ml, 신선한 라임즙 15ml, 얼음을 가득 넣습니다.',
      '약 10~12초 동안 차가워질 때까지 강하고 경쾌하게 셰이킹합니다.',
      '파인 스트레이너를 사용해 얼음 파편을 걸러내며 준비된 소금 림 글라스에 따라냅니다.',
      '라임 휠을 잔 테두리에 꽂아 완성합니다.'
    ],
    bartenderTips: [
      '잔 전체에 소금을 묻히기보다 절반만 묻히면 마시는 사람이 소금 맛을 원하는 만큼 조절할 수 있어 좋습니다.',
      '100% 블루 아가베 데킬라를 사용해야 깔끔하고 깊은 풍미를 즐길 수 있습니다.'
    ]
  },
  {
    id: 'dry-martini',
    nameKo: '드라이 마티니',
    nameEn: 'Dry Martini',
    shortDesc: '‘칵테일의 제왕’. 진과 드라이 베르무트의 고결하고 날렵한 드라이 풍미',
    description: '드라이 마티니는 칵테일 문화의 정점이자 상징입니다. 맑고 차가운 진의 보태니컬 허브 향과 절제된 드라이 베르무트의 우아함이 만나 미니멀리즘의 정수를 보여줍니다.',
    history: '19세기 후반 마르티네즈(Martinez) 칵테일에서 진화하여 미국 금주법 시대를 거치며 점차 베르무트 비율이 줄어들며 현대의 극도로 드라이한 스타일로 확립되었습니다.',
    baseSpirit: 'gin',
    abv: 32,
    strength: 'high',
    difficulty: 'hard',
    tastes: ['dry', 'herbal', 'bitter'],
    glass: 'martini',
    method: 'stir',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    featured: true,
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 3,
    colorGradient: 'from-cyan-500/25 via-blue-500/10 to-zinc-900',
    accentColor: '#06b6d4',
    ice: '믹싱 글라스 내 큐브 아이스 (스터용)',
    garnish: '그린 올리브 1개 또는 레몬 필(트위스트)',
    ingredients: [
      { nameKo: '런던 드라이 진', nameEn: 'London Dry Gin', amount: 60, unit: 'ml', category: 'spirit' },
      { nameKo: '드라이 베르무트', nameEn: 'Dry Vermouth', amount: 10, unit: 'ml', category: 'liqueur' },
      { nameKo: '오렌지 비터스 (선택)', nameEn: 'Orange Bitters', amount: 1, unit: 'dash', category: 'bitters', isOptional: true },
    ],
    instructions: [
      '마티니 글라스에 얼음과 물을 채워 미리 차갑게 칠링(Chilling)해 둡니다.',
      '믹싱 글라스에 얼음을 채우고 런던 드라이 진 60ml와 드라이 베르무트 10ml를 붓습니다.',
      '바스푼으로 약 25~30회 부드럽게 스터(Stir)하여 음료를 충분히 차갑게 만들면서 물이 과하게 희석되지 않도록 합니다.',
      '칠링해 둔 마티니 글라스의 얼음물을 버리고, 스트레이너를 대고 맑은 칵테일을 따라붓습니다.',
      '칵테일 픽에 꽂은 올리브를 넣거나 레몬 껍질의 오일을 잔 표면에 뿌린 후 띄워줍니다.'
    ],
    bartenderTips: [
      '마티니는 절대 셰이킹하지 않고 스터합니다. 셰이킹하면 공기 방울이 생겨 투명한 광택을 잃고 과도하게 희석됩니다.',
      '개봉한 드라이 베르무트는 반드시 냉장 보관해야 산화되지 않고 신선한 향을 유지합니다.'
    ]
  },
  {
    id: 'old-fashioned',
    nameKo: '올드 패션드',
    nameEn: 'Old Fashioned',
    shortDesc: '버번 위스키의 스모키한 우디향과 비터스, 설탕이 빚어내는 궁극의 클래식',
    description: '올드 패션드는 가장 오래된 칵테일의 원형 중 하나로, "스피릿, 설탕, 물, 비터스"라는 1806년 칵테일의 최초 정의를 그대로 계승합니다. 버번의 캐러멜/바닐라 오크 풍미와 비터스의 복합적인 스파이스가 천천히 녹아내리며 마실수록 깊은 맛을 냅니다.',
    history: '1880년대 미국 켄터키주 루이빌의 펜더니스 클럽(Pendennis Club)에서 유래했다고 전해지며, 화려한 신식 칵테일 대신 "옛날 방식(Old-Fashioned way)"으로 만들어달라는 요청에서 이름이 붙었습니다.',
    baseSpirit: 'whiskey',
    abv: 32,
    strength: 'high',
    difficulty: 'medium',
    tastes: ['smoky', 'sweet', 'bitter', 'herbal'],
    glass: 'rocks',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    featured: true,
    popular: true,
    rating: 4.9,
    preparationTimeMinutes: 4,
    colorGradient: 'from-amber-600/30 via-orange-600/10 to-zinc-900',
    accentColor: '#d97706',
    ice: '커다란 투명 원형 얼음 (크래프트 아이스 볼)',
    garnish: '오렌지 필(껍질) 1조각, 마라스키노 체리 1개',
    ingredients: [
      { nameKo: '버번 또는 라이 위스키', nameEn: 'Bourbon or Rye Whiskey', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '앙고스투라 비터스', nameEn: 'Angostura Bitters', amount: 3, unit: 'dash', category: 'bitters' },
      { nameKo: '각설탕 (또는 심플 시럽 5ml)', nameEn: 'Sugar Cube / Simple Syrup', amount: 1, unit: 'piece', category: 'syrup' },
      { nameKo: '물 (설탕 용해용)', nameEn: 'Splash of Plain Water', amount: 5, unit: 'ml', category: 'mixer' },
    ],
    instructions: [
      '올드 패션드 글라스에 각설탕 1개를 넣고 앙고스투라 비터스 3대시와 약간의 물을 적십니다.',
      '머들러로 설탕이 잘 녹을 때까지 으깨어 페이스트 상태로 만듭니다.',
      '커다란 통얼음(아이스 볼)을 잔에 넣습니다.',
      '위스키의 절반(25ml)을 붓고 바스푼으로 약 15초간 저어줍니다.',
      '나머지 위스키(25ml)를 붓고 다시 부드럽게 15초간 스터합니다.',
      '오렌지 껍질을 잔 위에서 가볍게 비틀어 에센셜 오일을 뿌린 뒤 잔 속에 넣고 체리로 장식합니다.'
    ],
    bartenderTips: [
      '위스키를 두 번에 걸쳐 나누어 부으며 얼음을 녹여야 최적의 농도와 온도를 섬세하게 맞출 수 있습니다.',
      '오렌지 필의 흰 속껍질(알베도)은 쓴맛이 나므로 겉면의 주황색 껍질만 얇게 벗겨 사용하세요.'
    ]
  },
  {
    id: 'gin-and-tonic',
    nameKo: '진 토닉',
    nameEn: 'Gin & Tonic',
    shortDesc: '전 세계 하이볼의 기준. 보태니컬 진과 쌉싸름한 퀴닌 토닉워터의 황금비율',
    description: '군더더기 없는 깔끔함과 상쾌한 탄산감으로 식전주부터 데일리 드링크까지 누구나 편안하게 즐기는 국민 칵테일입니다. 진의 종류와 가니시에 따라 무궁무진한 플레이버 확장이 가능합니다.',
    history: '19세기 영국 동인도 회사의 군인들이 말라리아 예방약인 쓴 퀴닌(Quinine)을 물과 설탕에 타 마시던 것에서 발전하여, 진을 섞어 마시기 시작한 것이 오늘날 진 토닉의 시초입니다.',
    baseSpirit: 'gin',
    abv: 12,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['refreshing', 'bitter', 'herbal', 'sour'],
    glass: 'highball',
    method: 'build',
    ibaOfficial: false,
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-sky-500/25 via-blue-500/10 to-zinc-900',
    accentColor: '#38bdf8',
    ice: '단단하고 투명한 큐브 아이스 가득',
    garnish: '신선한 라임 웨지 또는 레몬 슬라이스, 로즈마리 한 줄기',
    ingredients: [
      { nameKo: '드라이 진', nameEn: 'Dry Gin', amount: 45, unit: 'ml', category: 'spirit' },
      { nameKo: '프리미엄 토닉워터', nameEn: 'Premium Tonic Water', amount: 120, unit: 'fill', category: 'mixer' },
      { nameKo: '신선한 라임 웨지', nameEn: 'Lime Wedge', amount: 1, unit: 'piece', category: 'garnish' },
    ],
    instructions: [
      '하이볼 글라스에 단단하고 투명한 얼음을 잔 가득 채웁니다.',
      '진 45ml를 얼음 위로 천천히 붓습니다.',
      '라임 조각을 잔 위에 살짝 짜 넣고 잔 속으로 넣습니다.',
      '차가운 토닉워터를 잔 벽을 타고 기포가 깨지지 않게 조심스럽게 채웁니다.',
      '바스푼으로 얼음을 아래에서 위로 단 1~2회만 가볍게 들어올려 섞어줍니다.'
    ],
    bartenderTips: [
      '토닉워터를 붓고 너무 세게 저으면 탄산이 다 날아가 밋밋해집니다. 아래위로 살짝 한 번만 리프팅해 주세요.'
    ]
  },
  {
    id: 'cosmopolitan',
    nameKo: '코스모폴리탄',
    nameEn: 'Cosmopolitan',
    shortDesc: '섹스 앤 더 시티의 시그니처! 매혹적인 핑크빛과 새콤달콤한 크랜베리 시트러스',
    description: '코스모폴리탄(일명 ‘코스모’)은 상큼한 시트론 보드카와 크랜베리 주스의 루비 핑크 컬러가 돋보이는 모던 클래식입니다. 산뜻하고 경쾌한 산미 덕분에 언제 어디서나 기분 좋은 바이브를 연출합니다.',
    history: '1980년대 후반 뉴욕 레인보우 룸의 전설적인 바텐더 토비 체키니(Toby Cecchini)가 앱솔루트 시트론을 사용하여 현대적 레시피를 완성하였으며, 드라마 <섹스 앤 더 시티>를 통해 전 세계적인 열풍을 일으켰습니다.',
    baseSpirit: 'vodka',
    abv: 22,
    strength: 'medium',
    difficulty: 'medium',
    tastes: ['sour', 'sweet', 'fruity', 'refreshing'],
    glass: 'martini',
    method: 'shake',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 3,
    colorGradient: 'from-rose-500/30 via-pink-500/10 to-zinc-900',
    accentColor: '#f43f5e',
    ice: '셰이커 내 얼음, 서빙 시 노아이스 (Up)',
    garnish: '플레임 오렌지 필 또는 라임 휠',
    ingredients: [
      { nameKo: '시트론 보드카 (또는 플레인 보드카)', nameEn: 'Citron Vodka', amount: 40, unit: 'ml', category: 'spirit' },
      { nameKo: '코인트로 (오렌지 리큐르)', nameEn: 'Cointreau', amount: 15, unit: 'ml', category: 'liqueur' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 15, unit: 'ml', category: 'juice' },
      { nameKo: '크랜베리 주스', nameEn: 'Cranberry Juice', amount: 30, unit: 'ml', category: 'juice' },
    ],
    instructions: [
      '마티니 글라스를 차갑게 칠링합니다.',
      '셰이커에 보드카 40ml, 코인트로 15ml, 라임즙 15ml, 크랜베리 주스 30ml를 넣습니다.',
      '얼음을 가득 채우고 10~15초간 강하게 셰이킹합니다.',
      '더블 스트레이닝(거름망)을 통해 얼음 결정을 걸러내며 잔에 부어줍니다.',
      '오렌지 필의 껍질 오일을 잔 위에 스프레이하여 띄워 장식합니다.'
    ],
    bartenderTips: [
      '크랜베리 주스는 색을 내기 위한 정도로 30ml를 넘지 않아야 텁텁하지 않고 산뜻한 밸런스가 유지됩니다.'
    ]
  },
  {
    id: 'whiskey-sour',
    nameKo: '위스키 사워',
    nameEn: 'Whiskey Sour',
    shortDesc: '버번의 풍부한 바닐라향과 레몬의 산미, 벨벳 같은 계란 흰자 폼의 조화',
    description: '150년 넘게 사랑받아 온 클래식 사워 패밀리의 대표작. 위스키의 묵직한 오크향에 신선한 레몬 주스와 시럽이 절묘하게 어우러지며, 달걀 흰자(에그 화이트)를 추가하면 구름처럼 부드러운 벨벳 텍스처를 만끽할 수 있습니다.',
    history: '1862년 제리 토머스의 저서에 처음 기록된 이래 전 세계 모든 칵테일 바의 기본 필수 메뉴로 자리 잡았습니다.',
    baseSpirit: 'whiskey',
    abv: 20,
    strength: 'medium',
    difficulty: 'medium',
    tastes: ['sour', 'sweet', 'creamy', 'smoky'],
    glass: 'rocks',
    method: 'shake',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 4,
    colorGradient: 'from-yellow-600/30 via-amber-500/10 to-zinc-900',
    accentColor: '#eab308',
    ice: '온더락 큐브 아이스',
    garnish: '앙고스투라 비터스 몇 방울 드롭, 레몬 휠 & 체리',
    ingredients: [
      { nameKo: '버번 위스키', nameEn: 'Bourbon Whiskey', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '신선한 레몬즙', nameEn: 'Fresh Lemon Juice', amount: 25, unit: 'ml', category: 'juice' },
      { nameKo: '심플 시럽', nameEn: 'Simple Syrup', amount: 20, unit: 'ml', category: 'syrup' },
      { nameKo: '달걀 흰자 (선택 / 비건 대체제 아쿠아파바)', nameEn: 'Egg White / Aquafaba', amount: 15, unit: 'ml', category: 'dairy', isOptional: true },
      { nameKo: '앙고스투라 비터스 (폼 장식용)', nameEn: 'Angostura Bitters', amount: 2, unit: 'drop', category: 'bitters', isOptional: true },
    ],
    instructions: [
      '셰이커에 위스키, 레몬즙, 시럽, 달걀 흰자를 넣습니다.',
      '먼저 얼음 없이 10초간 강하게 흔드는 **드라이 셰이크(Dry Shake)**를 진행해 흰자 거품을 풍성하게 만듭니다.',
      '얼음을 가득 넣고 10초간 다시 차갑게 **웨트 셰이크(Wet Shake)**합니다.',
      '얼음을 채운 록스 글라스에 스트레이너로 곱게 따라냅니다.',
      '하얀 거품 위에 앙고스투라 비터스 2~3방울을 떨어뜨리고 이쑤시개로 하트 모양을 그려 마무리합니다.'
    ],
    bartenderTips: [
      '드라이 셰이크(얼음 없이 먼저 흔들기)를 거쳐야 거품이 쫀쫀하고 크리미한 질감으로 살아납니다.'
    ]
  },
  {
    id: 'negroni',
    nameKo: '네그로니',
    nameEn: 'Negroni',
    shortDesc: '이탈리안 아페리티보의 왕. 쌉싸름한 캄파리와 달콤한 베르무트의 1:1:1 황금비',
    description: '붉은 보석 같은 루비 컬러 속에 진의 허브 향, 캄파리의 쌉싸름한 비터, 스위트 베르무트의 달콤하고 향긋한 풍미가 1:1:1로 완벽하게 균형을 이룹니다. 식전주(Aperitivo)로 입맛을 돋우는 데 최고입니다.',
    history: '1919년 이탈리아 피렌체의 카페 카소니에서 카밀로 네그로니 백작이 아메리카노 칵테일에 탄산수 대신 진을 넣어 더 강하게 만들어달라고 요청한 것에서 탄생했습니다.',
    baseSpirit: 'gin',
    abv: 24,
    strength: 'medium',
    difficulty: 'easy',
    tastes: ['bitter', 'herbal', 'sweet'],
    glass: 'rocks',
    method: 'stir',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    featured: true,
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 2,
    colorGradient: 'from-red-600/30 via-rose-600/10 to-zinc-900',
    accentColor: '#dc2626',
    ice: '커다란 투명 큐브 아이스',
    garnish: '신선한 오렌지 슬라이스 또는 오렌지 필',
    ingredients: [
      { nameKo: '드라이 진', nameEn: 'Dry Gin', amount: 30, unit: 'ml', category: 'spirit' },
      { nameKo: '캄파리 (Campari)', nameEn: 'Campari', amount: 30, unit: 'ml', category: 'liqueur' },
      { nameKo: '스위트 레드 베르무트', nameEn: 'Sweet Red Vermouth', amount: 30, unit: 'ml', category: 'liqueur' },
    ],
    instructions: [
      '록스 글라스에 커다란 얼음을 채웁니다.',
      '진 30ml, 캄파리 30ml, 스위트 베르무트 30ml를 글라스에 차례로 붓습니다.',
      '바스푼으로 약 20~25초간 부드럽게 스터하여 시원하게 믹싱합니다.',
      '오렌지 껍질의 오일을 잔 위에 분사하고 슬라이스를 넣어 서빙합니다.'
    ],
    bartenderTips: [
      '재료 비율이 정확히 1:1:1이라 기억하기 쉽고 홈텐딩으로 실패 없이 만들기 가장 좋은 클래식 칵테일입니다.'
    ]
  },
  {
    id: 'espresso-martini',
    nameKo: '에스프레소 마티니',
    nameEn: 'Espresso Martini',
    shortDesc: '갓 추출한 진한 에스프레소 크레마와 보드카, 커피 리큐르의 각성 콤보',
    description: '“Wake me up, and then f*** me up”이라는 유명한 주문에서 탄생한 현대 칵테일의 전설. 신선한 에스프레소 샷의 깊은 크레마와 깔루아의 달콤함, 보드카의 깔끔한 베이스가 어우러진 최고의 디저트 & 나이트라이프 칵테일입니다.',
    history: '1983년 런던의 전설적인 바텐더 딕 브래드셀(Dick Bradsell)이 유명 모델의 요청을 받고 즉석에서 커피 머신의 갓 내린 에스프레소와 보드카를 셰이킹하여 탄생시켰습니다.',
    baseSpirit: 'vodka',
    abv: 20,
    strength: 'medium',
    difficulty: 'medium',
    tastes: ['creamy', 'sweet', 'bitter'],
    glass: 'coupe',
    method: 'shake',
    ibaOfficial: true,
    ibaCategory: 'New Era Drinks',
    featured: true,
    popular: true,
    rating: 4.9,
    preparationTimeMinutes: 3,
    colorGradient: 'from-amber-900/40 via-stone-800/20 to-zinc-900',
    accentColor: '#92400e',
    ice: '셰이커 내 얼음, 서빙 시 노아이스 (Up)',
    garnish: '커피 원두 3알 (건강, 부, 행복을 상징)',
    ingredients: [
      { nameKo: '보드카', nameEn: 'Vodka', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '깔루아 (커피 리큐르)', nameEn: 'Kahlúa / Coffee Liqueur', amount: 20, unit: 'ml', category: 'liqueur' },
      { nameKo: '신선한 에스프레소 샷 (뜨거운 상태)', nameEn: 'Fresh Espresso Shot', amount: 30, unit: 'ml', category: 'mixer' },
      { nameKo: '심플 시럽', nameEn: 'Simple Syrup', amount: 10, unit: 'ml', category: 'syrup', isOptional: true },
      { nameKo: '통 커피 원두 (장식용)', nameEn: 'Coffee Beans', amount: 3, unit: 'piece', category: 'garnish' },
    ],
    instructions: [
      '쿠페 글라스를 얼음으로 칠링합니다.',
      '셰이커에 보드카, 깔루아, 시럽, 그리고 갓 추출한 신선한 에스프레소를 넣습니다.',
      '얼음을 가득 채우고 크레마 거품이 두껍게 생기도록 15초간 매우 강하고 빠르게 셰이킹합니다.',
      '파인 스트레이너로 고운 거품과 함께 칠링된 잔에 따라냅니다.',
      '벨벳 같은 크레마 거품 위에 커피 원두 3알을 삼각형으로 올려 장식합니다.'
    ],
    bartenderTips: [
      '인스턴트 커피 대신 에스프레소 머신이나 캡슐 커피의 갓 내린 샷을 넣고 바로 셰이킹해야 풍성한 크레마 층이 형성됩니다.'
    ]
  },
  {
    id: 'kahlua-milk',
    nameKo: '깔루아 밀크',
    nameEn: 'Kahlua Milk',
    shortDesc: '달콤한 커피 우유처럼 부드러운 칵테일 입문자의 영원한 베스트셀러',
    description: '멕시코산 커피 리큐르인 깔루아의 진한 커피·바닐라 향과 신선한 우유가 만나 라떼처럼 부드럽고 달콤하게 즐길 수 있는 대표적인 이지 드링크입니다. 알코올 특유의 쓴맛이 거의 느껴지지 않아 부담 없이 즐길 수 있습니다.',
    history: '1950년대 깔루아가 미국과 전 세계로 보급되면서 홈파티와 펍에서 간편하게 즐기는 칵테일로 대중화되었습니다.',
    baseSpirit: 'liqueur',
    abv: 8,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['sweet', 'creamy'],
    glass: 'rocks',
    method: 'build',
    ibaOfficial: false,
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 2,
    colorGradient: 'from-amber-800/30 via-orange-950/20 to-zinc-900',
    accentColor: '#78350f',
    ice: '각얼음 가득',
    garnish: '시나몬 파우더 살짝 또는 커피빈 2~3알',
    ingredients: [
      { nameKo: '깔루아 (커피 리큐르)', nameEn: 'Kahlúa', amount: 45, unit: 'ml', category: 'liqueur' },
      { nameKo: '신선한 우유', nameEn: 'Fresh Whole Milk', amount: 90, unit: 'ml', category: 'dairy' },
    ],
    instructions: [
      '온더락 글라스에 얼음을 가득 채웁니다.',
      '깔루아 45ml를 먼저 잔 바닥에 붓습니다.',
      '바스푼을 얼음 표면에 대고 그 위로 우유 90ml를 천천히 흘려보내 예쁜 2단 레이어를 연출합니다.',
      '마시기 직전 빨대나 머들러로 부드럽게 저어 마십니다.'
    ],
    bartenderTips: [
      '깔루아와 우유의 비율은 1:2 또는 1:3 취향에 따라 조절하세요. 일반 우유 대신 생크림이나 오트 밀크를 사용하면 한층 더 리치해집니다.'
    ]
  },
  {
    id: 'pina-colada',
    nameKo: '피냐 콜라다',
    nameEn: 'Piña Colada',
    shortDesc: '푸에르토리코의 국가 음료! 달콤한 코코넛 크림과 상큼한 파인애플의 트로피컬 낙원',
    description: '스페인어로 "체에 거른 파인애플"을 뜻하는 피냐 콜라다는 화이트 럼, 진한 코코넛 크림, 신선한 파인애플 주스가 어우러져 한 모금만으로도 남국의 해변에 온 듯한 휴양지 무드를 선사합니다.',
    history: '1954년 푸에르토리코 산후안의 카리브 힐튼 호텔 바텐더 라몬 ‘몬치토’ 마레로가 창작하였으며, 1978년 푸에르토리코의 공식 국가 음료로 지정되었습니다.',
    baseSpirit: 'rum',
    abv: 13,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['sweet', 'fruity', 'creamy', 'tropical' as any],
    glass: 'hurricane',
    method: 'blend',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 3,
    colorGradient: 'from-amber-300/30 via-yellow-500/10 to-zinc-900',
    accentColor: '#facc15',
    ice: '크러시드 아이스 또는 블렌더용 얼음 1컵',
    garnish: '파인애플 웨지, 칵테일 체리, 미니 페이퍼 우산',
    ingredients: [
      { nameKo: '화이트 럼', nameEn: 'White Rum', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '코코넛 크림 (또는 코코넛 밀크)', nameEn: 'Coconut Cream (Coco Lopez)', amount: 30, unit: 'ml', category: 'syrup' },
      { nameKo: '파인애플 주스 100%', nameEn: 'Pineapple Juice', amount: 50, unit: 'ml', category: 'juice' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 10, unit: 'ml', category: 'juice', isOptional: true },
    ],
    instructions: [
      '블렌더에 럼, 코코넛 크림, 파인애플 주스, 얼음 1컵(약 120g)을 넣습니다.',
      '부드러운 스무디/슬러시 질감이 될 때까지 고속으로 갈아줍니다 (블렌더가 없을 시 셰이커에 얼음과 함께 강하게 흔들기).',
      '허리케인 또는 톨 글라스에 따른 후 파인애플 조각과 체리로 장식합니다.'
    ],
    bartenderTips: [
      '코코넛 시럽보다는 유지방이 풍부한 캔 코코넛 크림을 사용해야 진짜 트로피컬 바의 묵직하고 고소한 맛이 완성됩니다.'
    ]
  },
  {
    id: 'aperol-spritz',
    nameKo: '아페롤 스프리츠',
    nameEn: 'Aperol Spritz',
    shortDesc: '이탈리아의 석양을 담은 오렌지빛 탄산. 3-2-1 비율의 황금 식전주',
    description: '베네치아 광장의 테라스에서 모두가 들고 있는 바로 그 주황색 칵테일! 프로세코 스파클링 와인 3, 아페롤 2, 탄산수 1의 간결한 공식으로 상큼 쌉싸름하면서도 산뜻한 탄산감을 즐길 수 있습니다.',
    history: '1919년 이탈리아 파도바에서 발명된 아페롤을 1950년대 베네토 지방에서 스파클링 와인과 탄산수에 섞어 마시며 전 유럽의 대표 서머 드링크로 번성했습니다.',
    baseSpirit: 'liqueur',
    abv: 11,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['refreshing', 'bitter', 'sweet', 'fruity'],
    glass: 'coupe',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-orange-500/35 via-amber-500/10 to-zinc-900',
    accentColor: '#f97316',
    ice: '큰 와인 글라스에 얼음 가득',
    garnish: '신선한 오렌지 슬라이스 1장, 그린 올리브',
    ingredients: [
      { nameKo: '프로세코 (또는 드라이 스파클링 와인)', nameEn: 'Prosecco / Sparkling Wine', amount: 90, unit: 'ml', category: 'spirit' },
      { nameKo: '아페롤 (Aperol)', nameEn: 'Aperol', amount: 60, unit: 'ml', category: 'liqueur' },
      { nameKo: '소다수 (탄산수)', nameEn: 'Soda Water / Club Soda', amount: 30, unit: 'ml', category: 'mixer' },
    ],
    instructions: [
      '큰 보르도 와인 글라스에 얼음을 가득 채웁니다.',
      '프로세코 90ml를 먼저 붓습니다.',
      '아페롤 60ml를 원을 그리며 천천히 부어줍니다.',
      '탄산수 30ml를 살짝 스플래시한 뒤 바스푼으로 살짝 들어 올려 가볍게 섞습니다.',
      '오렌지 슬라이스를 잔 속에 넣어 장식합니다.'
    ],
    bartenderTips: [
      '와인을 먼저 붓고 아페롤을 나중에 부어야 비중 때문에 자연스럽게 섞여 탄산이 덜 빠집니다.'
    ]
  },
  {
    id: 'moscow-mule',
    nameKo: '모스코 뮬',
    nameEn: 'Moscow Mule',
    shortDesc: '당나귀의 발차기 같은 짜릿한 진저비어 스파이스와 차가운 구리 머그의 만남',
    description: '보드카에 알싸한 생강 풍미의 진저비어와 생 라임즙을 듬뿍 짜 넣고, 얼음장처럼 차가워지는 구리 머그컵(Copper Mug)에 담아 마시는 궁극의 리프레시 드링크입니다.',
    history: '1941년 미국에서 잘 안 팔리던 스미르노프 보드카와 진저비어, 구리 머그잔 재고를 처분하기 위해 3명의 사업가가 합작하여 개발한 마케팅의 전설이자 대히트 칵테일입니다.',
    baseSpirit: 'vodka',
    abv: 11,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['refreshing', 'sour', 'herbal'],
    glass: 'copper_mug',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-amber-600/25 via-yellow-600/10 to-zinc-900',
    accentColor: '#ca8a04',
    ice: '크러시드 아이스 또는 큐브 아이스 가득',
    garnish: '라임 휠 1개, 신선한 민트 줄기',
    ingredients: [
      { nameKo: '보드카', nameEn: 'Vodka', amount: 45, unit: 'ml', category: 'spirit' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 15, unit: 'ml', category: 'juice' },
      { nameKo: '진저 비어 (Ginger Beer)', nameEn: 'Ginger Beer', amount: 120, unit: 'fill', category: 'mixer' },
    ],
    instructions: [
      '구리 머그컵에 얼음을 가득 채웁니다.',
      '보드카 45ml와 신선한 라임즙 15ml를 붓습니다.',
      '스파이시한 진저비어를 잔 가득 채웁니다.',
      '바스푼으로 부드럽게 한 번 저어준 뒤 라임 웨지와 민트로 장식합니다.'
    ],
    bartenderTips: [
      '진저 에일(Ginger Ale)보다 생강 향과 스파이스가 진한 진짜 발효 진저 비어(Ginger Beer)를 써야 제맛이 납니다.'
    ]
  },
  {
    id: 'manhattan',
    nameKo: '맨해튼',
    nameEn: 'Manhattan',
    shortDesc: '‘칵테일의 여왕’. 라이 위스키의 스파이시함과 스위트 베르무트의 우아한 깊이',
    description: '마티니가 칵테일의 왕이라면 맨해튼은 여왕으로 불립니다. 호밀(Rye) 위스키의 특유의 스파이시하고 드라이한 맛과 이탈리안 스위트 베르무트의 깊고 달콤한 과실향이 어우러져 매혹적인 붉은 빛을 냅니다.',
    history: '1870년대 초 뉴욕의 맨해튼 클럽에서 윈스턴 처칠의 어머니인 제니 제롬 여사가 주최한 연회에서 처음 만들어졌다는 전설이 있습니다.',
    baseSpirit: 'whiskey',
    abv: 30,
    strength: 'high',
    difficulty: 'medium',
    tastes: ['smoky', 'sweet', 'bitter', 'herbal'],
    glass: 'coupe',
    method: 'stir',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 3,
    colorGradient: 'from-red-900/35 via-rose-900/15 to-zinc-900',
    accentColor: '#991b1b',
    ice: '믹싱 글라스 내 스터용 얼음',
    garnish: '고급 마라스키노 체리 (룩사르도 체리)',
    ingredients: [
      { nameKo: '라이 또는 버번 위스키', nameEn: 'Rye or Bourbon Whiskey', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '스위트 레드 베르무트', nameEn: 'Sweet Red Vermouth', amount: 20, unit: 'ml', category: 'liqueur' },
      { nameKo: '앙고스투라 비터스', nameEn: 'Angostura Bitters', amount: 2, unit: 'dash', category: 'bitters' },
    ],
    instructions: [
      '쿠페 글라스를 칠링해 둡니다.',
      '믹싱 글라스에 얼음과 위스키, 베르무트, 비터스를 넣습니다.',
      '바스푼으로 30회 부드럽고 빠르게 저어줍니다.',
      '스트레이너로 칠링된 글라스에 따라냅니다.',
      '고급 마라스키노 체리 1개를 잔 바닥에 담아 서빙합니다.'
    ],
    bartenderTips: [
      '전통적인 레시피는 단맛이 적고 알싸한 라이(호밀) 위스키를 사용하지만, 부드러운 단맛을 원한다면 버번 위스키로 대체해도 좋습니다.'
    ]
  },
  {
    id: 'daiquiri',
    nameKo: '다이키리',
    nameEn: 'Daiquiri',
    shortDesc: '럼, 라임, 설탕 3가지 재료로 완성하는 칵테일 밸런스의 정석',
    description: '단 세 가지 기본 재료만으로 바텐더의 셰이킹 실력과 밸런스 감각을 평가받는 순수하고 정갈한 칵테일입니다. 깨끗하고 산뜻한 산미와 럼의 달콤한 사탕수수 향미가 완벽하게 어우러집니다.',
    history: '1898년 쿠바의 다이키리 광산에서 일하던 미국인 광산 엔지니어 제닝스 콕스가 더위를 달래기 위해 럼에 라임과 설탕을 타 마신 데서 시작되었습니다.',
    baseSpirit: 'rum',
    abv: 22,
    strength: 'medium',
    difficulty: 'medium',
    tastes: ['sour', 'sweet', 'refreshing'],
    glass: 'coupe',
    method: 'shake',
    ibaOfficial: true,
    ibaCategory: 'The Unforgettables',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-lime-500/25 via-emerald-600/10 to-zinc-900',
    accentColor: '#65a30d',
    ice: '셰이커 내 얼음, 서빙 시 노아이스 (Up)',
    garnish: '라임 휠 1조각',
    ingredients: [
      { nameKo: '화이트 럼', nameEn: 'White Rum', amount: 60, unit: 'ml', category: 'spirit' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 20, unit: 'ml', category: 'juice' },
      { nameKo: '심플 시럽 (또는 백설탕 2티스푼)', nameEn: 'Simple Syrup', amount: 15, unit: 'ml', category: 'syrup' },
    ],
    instructions: [
      '쿠페 글라스를 미리 차갑게 칠링합니다.',
      '셰이커에 럼, 라임즙, 시럽과 얼음을 넣습니다.',
      '매우 차가워질 때까지 10~12초간 강하게 셰이킹합니다.',
      '파인 스트레이너로 고운 얼음 파편을 걸러내며 쿠페 글라스에 따릅니다.',
      '라임 휠을 띄워 장식합니다.'
    ],
    bartenderTips: [
      '신선하게 갓 짠 생라임즙을 써야 특유의 풋풋하고 쨍한 산미가 살아납니다.'
    ]
  },
  {
    id: 'blue-hawaii',
    nameKo: '블루 하와이',
    nameEn: 'Blue Hawaii',
    shortDesc: '하와이의 푸른 바다를 담은 환상적인 비주얼과 달콤한 파인애플 열대 과일향',
    description: '청량하고 눈부신 에메랄드빛 바다를 그대로 옮겨놓은 듯한 비주얼의 트로피컬 칵테일. 블루 큐라소의 오렌지 풍미와 파인애플 주스의 달콤함이 어우러져 시각과 미각을 동시에 사로잡습니다.',
    history: '1957년 하와이 호놀룰루 카이저 하와이안 빌리지 호텔의 전설적인 바텐더 해리 이(Harry Yee)가 볼스(Bols) 사의 블루 큐라소를 홍보하기 위해 개발했습니다.',
    baseSpirit: 'rum',
    abv: 15,
    strength: 'medium',
    difficulty: 'easy',
    tastes: ['sweet', 'fruity', 'refreshing'],
    glass: 'hurricane',
    method: 'shake',
    ibaOfficial: false,
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 3,
    colorGradient: 'from-blue-500/35 via-cyan-500/15 to-zinc-900',
    accentColor: '#0284c7',
    ice: '크러시드 아이스 잔 가득',
    garnish: '파인애플 슬라이스, 칵테일 체리, 오키드 꽃 또는 종이우산',
    ingredients: [
      { nameKo: '화이트 럼', nameEn: 'White Rum', amount: 30, unit: 'ml', category: 'spirit' },
      { nameKo: '보드카', nameEn: 'Vodka', amount: 15, unit: 'ml', category: 'spirit' },
      { nameKo: '블루 큐라소', nameEn: 'Blue Curaçao', amount: 15, unit: 'ml', category: 'liqueur' },
      { nameKo: '파인애플 주스', nameEn: 'Pineapple Juice', amount: 60, unit: 'ml', category: 'juice' },
      { nameKo: '스위트 & 사워 믹스 (또는 라임즙+시럽)', nameEn: 'Sweet & Sour Mix', amount: 30, unit: 'ml', category: 'mixer' },
    ],
    instructions: [
      '셰이커에 모든 재료와 얼음을 넣습니다.',
      '10초간 시원하게 셰이킹합니다.',
      '크러시드 아이스를 가득 채운 허리케인 글라스에 얼음과 함께 따라냅니다.',
      '파인애플 조각과 체리, 미니 우산으로 화려하게 장식합니다.'
    ],
    bartenderTips: [
      '파인애플 주스의 노란색과 블루 큐라소의 파란색이 만나 매혹적인 청록빛(바다색)을 만들어냅니다.'
    ]
  },
  {
    id: 'long-island-iced-tea',
    nameKo: '롱 아일랜드 아이스티',
    nameEn: 'Long Island Iced Tea',
    shortDesc: '홍차는 1방울도 안 들어갔지만 아이스티 맛이 나는 마성의 고도수 칵테일',
    description: '진, 럼, 보드카, 데킬라, 트리플 섹 등 5가지 주요 주류가 모두 들어가는 일명 "롱티". 콜라의 캐러멜 색상과 레몬의 산미 덕분에 달콤한 아이스티 맛이 나지만, 도수가 꽤 높아 천천히 음미해야 하는 파티의 인기 칵테일입니다.',
    history: '1970년대 미국 뉴욕주 롱아일랜드의 바텐더 로버트 "로즈버드" 벗이 칵테일 경연 대회에서 만들어 큰 인기를 끌었습니다.',
    baseSpirit: 'vodka',
    abv: 22,
    strength: 'medium',
    difficulty: 'easy',
    tastes: ['sweet', 'sour', 'refreshing'],
    glass: 'highball',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 3,
    colorGradient: 'from-amber-700/30 via-orange-800/15 to-zinc-900',
    accentColor: '#b45309',
    ice: '하이볼 잔 가득 큐브 아이스',
    garnish: '레몬 휠 1조각',
    ingredients: [
      { nameKo: '보드카', nameEn: 'Vodka', amount: 15, unit: 'ml', category: 'spirit' },
      { nameKo: '화이트 럼', nameEn: 'White Rum', amount: 15, unit: 'ml', category: 'spirit' },
      { nameKo: '런던 드라이 진', nameEn: 'London Dry Gin', amount: 15, unit: 'ml', category: 'spirit' },
      { nameKo: '블랑코 데킬라', nameEn: 'Blanco Tequila', amount: 15, unit: 'ml', category: 'spirit' },
      { nameKo: '트리플 섹', nameEn: 'Triple Sec', amount: 15, unit: 'ml', category: 'liqueur' },
      { nameKo: '신선한 레몬즙', nameEn: 'Fresh Lemon Juice', amount: 25, unit: 'ml', category: 'juice' },
      { nameKo: '심플 시럽', nameEn: 'Simple Syrup', amount: 20, unit: 'ml', category: 'syrup' },
      { nameKo: '콜라 (색상 및 스플래시용)', nameEn: 'Cola', amount: 40, unit: 'fill', category: 'mixer' },
    ],
    instructions: [
      '하이볼 글라스에 얼음을 가득 채웁니다.',
      '콜라를 제외한 5종의 술과 레몬즙, 시럽을 잔에 붓습니다.',
      '가볍게 저어준 뒤, 아이스티 색상이 날 때까지 콜라를 윗부분에 살짝 채워줍니다.',
      '레몬 휠을 띄워 완성합니다.'
    ],
    bartenderTips: [
      '콜라는 많이 붓지 말고 연한 홍차색이 날 정도로만 30~40ml 정도 스플래시하는 것이 정석입니다.'
    ]
  },
  {
    id: 'cinderella',
    nameKo: '신데렐라 (논알콜)',
    nameEn: 'Cinderella (Mocktail)',
    shortDesc: '술을 못 마셔도 파티를 화려하게 즐길 수 있는 상큼달콤 트로피컬 무알콜 칵테일',
    description: '오렌지, 파인애플, 레몬 주스의 3색 시트러스 블렌딩에 그레나딘 시럽 또는 탄산수가 어우러져 동화 속 신데렐라의 무도회 드레스처럼 화사하고 달콤한 맛을 선사하는 대표적인 논알콜 모크테일입니다.',
    history: '12시가 되면 마법이 풀려 술을 마시지 못하는 신데렐라를 모티브로 하여 누구나 마실 수 있도록 고안된 클래식 무알콜 음료입니다.',
    baseSpirit: 'non_alcoholic',
    abv: 0,
    strength: 'non_alcoholic',
    difficulty: 'easy',
    tastes: ['sweet', 'sour', 'fruity', 'refreshing'],
    glass: 'highball',
    method: 'shake',
    ibaOfficial: false,
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-orange-400/30 via-yellow-500/15 to-zinc-900',
    accentColor: '#f97316',
    ice: '큐브 아이스 가득',
    garnish: '오렌지 슬라이스 & 마라스키노 체리',
    ingredients: [
      { nameKo: '오렌지 주스', nameEn: 'Orange Juice', amount: 40, unit: 'ml', category: 'juice' },
      { nameKo: '파인애플 주스', nameEn: 'Pineapple Juice', amount: 40, unit: 'ml', category: 'juice' },
      { nameKo: '신선한 레몬즙', nameEn: 'Fresh Lemon Juice', amount: 20, unit: 'ml', category: 'juice' },
      { nameKo: '그레나딘 시럽 (석류 시럽)', nameEn: 'Grenadine Syrup', amount: 10, unit: 'ml', category: 'syrup', isOptional: true },
      { nameKo: '탄산수 또는 진저에일', nameEn: 'Club Soda / Ginger Ale', amount: 40, unit: 'fill', category: 'mixer' },
    ],
    instructions: [
      '셰이커에 오렌지 주스, 파인애플 주스, 레몬즙, 얼음을 넣고 10초간 강하게 셰이킹합니다.',
      '얼음을 채운 하이볼 잔에 스트레이너로 따라냅니다.',
      '탄산수를 살짝 채워 탄산감을 더하고, 그레나딘 시럽을 바닥으로 살짝 가라앉혀 그라데이션을 만듭니다.',
      '오렌지와 체리로 장식합니다.'
    ],
    bartenderTips: [
      '과일 주스를 셰이킹하면 거품이 생겨 훨씬 부드러운 마우스필을 느낄 수 있습니다.'
    ]
  },
  {
    id: 'shirley-temple',
    nameKo: '셜리 템플 (논알콜)',
    nameEn: 'Shirley Temple (Mocktail)',
    shortDesc: '할리우드 아역 스타를 위해 탄생한 달콤 톡 쏘는 석류 진저에일 모크테일',
    description: '톡 쏘는 시원한 진저에일에 붉은 루비빛 석류 그레나딘 시럽과 마라스키노 체리를 얹은 세계 최초이자 가장 유명한 키즈 & 논알콜 칵테일입니다.',
    history: '1930년대 베벌리힐스의 브라운 더비 레스토랑에서 어린 나이에 부모님과 함께 파티에 참석한 할리우드 스타 셜리 템플을 위해 특별히 만들어 바쳤습니다.',
    baseSpirit: 'non_alcoholic',
    abv: 0,
    strength: 'non_alcoholic',
    difficulty: 'easy',
    tastes: ['sweet', 'refreshing', 'fruity'],
    glass: 'highball',
    method: 'build',
    ibaOfficial: false,
    popular: true,
    rating: 4.7,
    preparationTimeMinutes: 2,
    colorGradient: 'from-rose-500/25 via-pink-600/10 to-zinc-900',
    accentColor: '#f43f5e',
    ice: '큐브 아이스 가득',
    garnish: '마라스키노 체리 2개 & 레몬 휠',
    ingredients: [
      { nameKo: '진저에일 (또는 사이다)', nameEn: 'Ginger Ale / Lemon-Lime Soda', amount: 150, unit: 'fill', category: 'mixer' },
      { nameKo: '그레나딘 시럽', nameEn: 'Grenadine Syrup', amount: 15, unit: 'ml', category: 'syrup' },
      { nameKo: '신선한 라임즙/레몬즙', nameEn: 'Fresh Lime Juice', amount: 10, unit: 'ml', category: 'juice', isOptional: true },
      { nameKo: '마라스키노 체리', nameEn: 'Maraschino Cherry', amount: 2, unit: 'piece', category: 'garnish' },
    ],
    instructions: [
      '하이볼 잔에 얼음을 가득 채웁니다.',
      '진저에일을 잔의 80%까지 채웁니다.',
      '그레나딘 시럽 15ml를 잔 중앙에 천천히 부어 아래로 은은하게 퍼지게 합니다.',
      '라임즙을 살짝 짜 넣고 마라스키노 체리를 띄워 완성합니다.'
    ],
    bartenderTips: [
      '그레나딘 시럽이 바닥에 가라앉아 예쁜 붉은 그라데이션이 생기도록 섞지 않고 서빙 후 마실 때 젓는 것이 포인트입니다.'
    ]
  },
  {
    id: 'paloma',
    nameKo: '팔로마',
    nameEn: 'Paloma',
    shortDesc: '멕시코 현지인들이 마가리타보다 더 사랑하는 자몽 스파클링 데킬라',
    description: '스페인어로 ‘비둘기’를 뜻하는 팔로마는 데킬라의 흙내음과 상큼 쌉쌀한 자몽 소다, 라임즙과 소금 림이 만나 갈증을 단숨에 날려주는 멕시코의 국민 칵테일입니다.',
    history: '1950년대 멕시코 할리스코주의 유명 바텐더 돈 하비에르 델가도 코로나가 고안한 것으로 알려져 있으며, 미국과 유럽에서도 폭발적인 인기를 끌고 있습니다.',
    baseSpirit: 'tequila',
    abv: 12,
    strength: 'low',
    difficulty: 'easy',
    tastes: ['refreshing', 'sour', 'bitter', 'fruity'],
    glass: 'highball',
    method: 'build',
    ibaOfficial: true,
    ibaCategory: 'Contemporary Classics',
    popular: true,
    rating: 4.8,
    preparationTimeMinutes: 2,
    colorGradient: 'from-pink-500/30 via-rose-500/10 to-zinc-900',
    accentColor: '#ec4899',
    ice: '하이볼 잔 가득 얼음',
    garnish: '자몽 웨지 1조각 & 잔 림의 굵은 소금',
    ingredients: [
      { nameKo: '블랑코 데킬라', nameEn: 'Blanco Tequila', amount: 50, unit: 'ml', category: 'spirit' },
      { nameKo: '신선한 라임즙', nameEn: 'Fresh Lime Juice', amount: 15, unit: 'ml', category: 'juice' },
      { nameKo: '핑크 자몽 소다 (또는 자몽주스 60ml + 탄산수 40ml)', nameEn: 'Grapefruit Soda', amount: 100, unit: 'fill', category: 'mixer' },
      { nameKo: '코셔 솔트 (소금 림용)', nameEn: 'Salt for Rim', amount: 1, unit: 'pinch', category: 'garnish' },
    ],
    instructions: [
      '하이볼 글라스 테두리에 라임을 문지르고 소금을 묻힙니다.',
      '잔에 얼음을 가득 채우고 데킬라와 라임즙을 붓습니다.',
      '차가운 자몽 소다를 끝까지 채웁니다.',
      '바스푼으로 가볍게 저어준 뒤 자몽 슬라이스를 얹어 장식합니다.'
    ],
    bartenderTips: [
      '전용 자몽 소다가 없다면 생자몽즙 60ml에 시럽 10ml, 탄산수 50ml를 조합해 만들면 매우 신선합니다.'
    ]
  }
];

// Helper functions
export function getCocktailById(id: string): Cocktail | undefined {
  return COCKTAILS.find(c => c.id === id);
}

export function getFeaturedCocktails(): Cocktail[] {
  return COCKTAILS.filter(c => c.featured);
}

export function getPopularCocktails(): Cocktail[] {
  return COCKTAILS.filter(c => c.popular);
}

export function getRelatedCocktails(cocktail: Cocktail, limit = 4): Cocktail[] {
  return COCKTAILS
    .filter(c => c.id !== cocktail.id && (c.baseSpirit === cocktail.baseSpirit || c.tastes.some(t => cocktail.tastes.includes(t))))
    .slice(0, limit);
}

// Master list of unique ingredients for the "My Bar" matcher
export interface MasterIngredient {
  id: string;
  nameKo: string;
  nameEn: string;
  category: IngredientCategory;
  popular?: boolean;
}

export const MASTER_INGREDIENTS: MasterIngredient[] = [
  // Spirits
  { id: 'gin', nameKo: '진 (Gin)', nameEn: 'Gin', category: 'spirit', popular: true },
  { id: 'rum', nameKo: '화이트/다크 럼 (Rum)', nameEn: 'Rum', category: 'spirit', popular: true },
  { id: 'vodka', nameKo: '보드카 (Vodka)', nameEn: 'Vodka', category: 'spirit', popular: true },
  { id: 'whiskey', nameKo: '위스키 (Bourbon/Rye)', nameEn: 'Whiskey', category: 'spirit', popular: true },
  { id: 'tequila', nameKo: '데킬라 (Tequila)', nameEn: 'Tequila', category: 'spirit', popular: true },
  { id: 'sparkling_wine', nameKo: '스파클링 와인 / 샴페인', nameEn: 'Prosecco / Champagne', category: 'spirit' },
  // Liqueurs
  { id: 'triple_sec', nameKo: '트리플 섹 / 코인트로 (오렌지)', nameEn: 'Triple Sec / Cointreau', category: 'liqueur', popular: true },
  { id: 'kahlua', nameKo: '깔루아 (커피 리큐르)', nameEn: 'Kahlúa', category: 'liqueur', popular: true },
  { id: 'campari', nameKo: '캄파리 (비터 리큐르)', nameEn: 'Campari', category: 'liqueur' },
  { id: 'sweet_vermouth', nameKo: '스위트 베르무트 (레드)', nameEn: 'Sweet Red Vermouth', category: 'liqueur' },
  { id: 'dry_vermouth', nameKo: '드라이 베르무트 (화이트)', nameEn: 'Dry Vermouth', category: 'liqueur' },
  { id: 'aperol', nameKo: '아페롤 (Aperol)', nameEn: 'Aperol', category: 'liqueur' },
  { id: 'blue_curacao', nameKo: '블루 큐라소', nameEn: 'Blue Curaçao', category: 'liqueur' },
  // Mixers & Juices
  { id: 'tonic_water', nameKo: '토닉워터', nameEn: 'Tonic Water', category: 'mixer', popular: true },
  { id: 'club_soda', nameKo: '탄산수 (클럽 소다)', nameEn: 'Club Soda', category: 'mixer', popular: true },
  { id: 'ginger_beer', nameKo: '진저 비어 / 진저에일', nameEn: 'Ginger Beer / Ale', category: 'mixer', popular: true },
  { id: 'cola', nameKo: '콜라', nameEn: 'Cola', category: 'mixer', popular: true },
  { id: 'lime_juice', nameKo: '신선한 라임즙 / 라임', nameEn: 'Lime Juice / Lime', category: 'juice', popular: true },
  { id: 'lemon_juice', nameKo: '신선한 레몬즙 / 레몬', nameEn: 'Lemon Juice / Lemon', category: 'juice', popular: true },
  { id: 'cranberry_juice', nameKo: '크랜베리 주스', nameEn: 'Cranberry Juice', category: 'juice' },
  { id: 'pineapple_juice', nameKo: '파인애플 주스', nameEn: 'Pineapple Juice', category: 'juice', popular: true },
  { id: 'orange_juice', nameKo: '오렌지 주스', nameEn: 'Orange Juice', category: 'juice', popular: true },
  { id: 'grapefruit_soda', nameKo: '자몽 소다 / 자몽주스', nameEn: 'Grapefruit Soda / Juice', category: 'juice' },
  { id: 'espresso', nameKo: '에스프레소 / 커피', nameEn: 'Espresso', category: 'mixer' },
  { id: 'milk', nameKo: '우유 (또는 생크림)', nameEn: 'Milk / Cream', category: 'dairy', popular: true },
  // Syrups & Bitters & Fresh
  { id: 'simple_syrup', nameKo: '심플 시럽 (또는 설탕)', nameEn: 'Simple Syrup / Sugar', category: 'syrup', popular: true },
  { id: 'grenadine', nameKo: '그레나딘 시럽 (석류)', nameEn: 'Grenadine Syrup', category: 'syrup' },
  { id: 'coconut_cream', nameKo: '코코넛 크림 / 밀크', nameEn: 'Coconut Cream', category: 'syrup' },
  { id: 'angostura_bitters', nameKo: '앙고스투라 비터스', nameEn: 'Angostura Bitters', category: 'bitters' },
  { id: 'mint_leaves', nameKo: '신선한 민트 잎', nameEn: 'Fresh Mint', category: 'garnish', popular: true },
];
