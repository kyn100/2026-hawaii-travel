import type { Place } from '../types';

interface PlaceI18n {
  en: Omit<Place, 'id' | 'island' | 'location' | 'category' | 'images' | 'wikipediaSlug'>;
  zh: Omit<Place, 'id' | 'island' | 'location' | 'category' | 'images' | 'wikipediaSlug'>;
}

interface IslandI18n {
  en: { name: string; description: string };
  zh: { name: string; description: string };
}

export const islandsI18n: Record<string, IslandI18n> = {
  oahu: {
    en: {
      name: 'Oahu',
      description: 'The Heart of Hawaii - Home to Honolulu, Pearl Harbor, and world-famous Waikiki Beach. The most populous island blends urban excitement with natural beauty.',
    },
    zh: {
      name: '欧胡岛',
      description: '夏威夷之心 - 檀香山、珍珠港和世界著名的威基基海滩的所在地。这座人口最多的岛屿融合了都市风情与自然美景。',
    },
  },
  'big-island': {
    en: {
      name: 'Big Island',
      description: "The Island of Hawaii - Home to active volcanoes, black sand beaches, and snow-capped Mauna Kea. The largest and youngest island showcases Earth's raw power.",
    },
    zh: {
      name: '大岛',
      description: '夏威夷岛 - 活火山、黑沙滩和白雪皑皑的莫纳克亚山的所在地。这座最大、最年轻的岛屿展示了地球的原始力量。',
    },
  },
  maui: {
    en: {
      name: 'Maui',
      description: "The Valley Isle - Famous for the scenic Road to Hana, sunrise at Haleakala, and pristine beaches. Consistently voted one of the world's best islands.",
    },
    zh: {
      name: '茂宜岛',
      description: '山谷之岛 - 以风景秀丽的哈纳公路、哈雷阿卡拉日出和原始海滩而闻名。被评为世界最佳岛屿之一。',
    },
  },
};

export const placesI18n: Record<string, PlaceI18n> = {
  'waikiki-beach': {
    en: {
      name: 'Waikiki Beach',
      address: 'Waikiki, Honolulu, HI 96815',
      shortDescription: 'Iconic crescent beach with Diamond Head views, perfect for swimming and surfing.',
      whyPopular: "Waikiki is the birthplace of modern surfing and Hawaii's most famous beach. The warm, gentle waves make it perfect for beginners, while the stunning backdrop of Diamond Head crater creates one of the most photographed shorelines in the world.",
      history: 'Waikiki, meaning "spouting fresh water" in Hawaiian, was once a retreat for Hawaiian royalty. The Moana Hotel opened in 1901, becoming Hawaii\'s first major resort. The iconic Royal Hawaiian Hotel opened in 1927.',
      facts: [
        'Duke Kahanamoku, the father of modern surfing, grew up surfing these waters',
        'The beach is made of imported sand from California',
        'Over 4.5 million visitors come to Waikiki each year',
        'Diamond Head crater is 300,000 years old',
      ],
      restaurants: [
        { name: "Duke's Waikiki", cuisine: 'Hawaiian/American', priceRange: '$$', rating: 4.5, description: 'Iconic beachfront restaurant named after surfing legend Duke Kahanamoku.', address: '2335 Kalakaua Ave', mustTry: 'Hula Pie' },
        { name: "Roy's Waikiki", cuisine: 'Hawaiian Fusion', priceRange: '$$$', rating: 4.6, description: "Celebrity chef Roy Yamaguchi's flagship restaurant.", address: '226 Lewers St', mustTry: 'Misoyaki Butterfish' },
        { name: 'Marukame Udon', cuisine: 'Japanese', priceRange: '$', rating: 4.7, description: 'Fresh handmade udon noodles made before your eyes.', address: '2310 Kuhio Ave', mustTry: 'Niku Udon' },
      ],
    },
    zh: {
      name: '威基基海滩',
      address: '威基基, 檀香山, HI 96815',
      shortDescription: '标志性的月牙形海滩，可欣赏钻石头山美景，是游泳和冲浪的理想之地。',
      whyPopular: '威基基是现代冲浪的发源地，也是夏威夷最著名的海滩。温暖平缓的海浪非常适合初学者，而钻石头山火山口的壮丽背景使其成为世界上被拍摄最多的海岸线之一。',
      history: '威基基在夏威夷语中意为"涌出淡水"，曾经是夏威夷皇室的度假胜地。莫阿纳酒店于1901年开业，成为夏威夷第一家大型度假村。标志性的皇家夏威夷酒店于1927年开业。',
      facts: [
        '现代冲浪之父杜克·卡哈纳莫库就是在这片海域长大并学会冲浪的',
        '这片海滩的沙子是从加利福尼亚进口的',
        '每年有超过450万游客来到威基基',
        '钻石头山火山口已有30万年历史',
      ],
      restaurants: [
        { name: "杜克威基基餐厅", cuisine: '夏威夷/美式', priceRange: '$$', rating: 4.5, description: '以冲浪传奇杜克·卡哈纳莫库命名的标志性海滨餐厅。', address: '2335 Kalakaua Ave', mustTry: '草裙舞派' },
        { name: "罗伊威基基餐厅", cuisine: '夏威夷融合菜', priceRange: '$$$', rating: 4.6, description: '名厨罗伊·山口的旗舰餐厅。', address: '226 Lewers St', mustTry: '味噌烤银鳕鱼' },
        { name: '丸龟制面', cuisine: '日式', priceRange: '$', rating: 4.7, description: '现场手工制作的新鲜乌冬面。', address: '2310 Kuhio Ave', mustTry: '牛肉乌冬' },
      ],
    },
  },
  'diamond-head': {
    en: {
      name: 'Diamond Head',
      address: 'Diamond Head State Monument, Honolulu, HI 96816',
      shortDescription: 'Volcanic crater with a challenging hike offering panoramic views of Oahu.',
      whyPopular: "The 0.8-mile trail to the 760-foot summit offers breathtaking 360-degree views of Waikiki, Honolulu, and the Pacific Ocean. It's one of Hawaii's most popular hikes.",
      history: 'Native Hawaiians called this volcanic crater "Lēahi" (brow of the tuna). British sailors in the 1800s mistook calcite crystals for diamonds, giving it its English name.',
      facts: [
        'The crater is about 300,000 years old',
        'The trail includes 175 stairs carved into the mountain',
        'Diamond Head was designated a National Natural Landmark in 1968',
        'The crater rim is 760 feet above sea level',
      ],
      restaurants: [
        { name: 'Diamond Head Market & Grill', cuisine: 'Local Hawaiian', priceRange: '$', rating: 4.6, description: 'Beloved local spot for plate lunches and baked goods.', address: '3158 Monsarrat Ave', mustTry: 'Lemon Crunch Cake' },
        { name: 'South Shore Grill', cuisine: 'American/Hawaiian', priceRange: '$$', rating: 4.4, description: 'Casual eatery with great burgers and poke bowls.', address: '3114 Monsarrat Ave', mustTry: 'Ahi Poke Bowl' },
        { name: "Bogart's Café", cuisine: 'Breakfast/Brunch', priceRange: '$', rating: 4.5, description: 'Perfect post-hike breakfast spot.', address: '3045 Monsarrat Ave', mustTry: 'Acai Bowl' },
      ],
    },
    zh: {
      name: '钻石头山',
      address: '钻石头山州立纪念碑, 檀香山, HI 96816',
      shortDescription: '火山口徒步挑战，可俯瞰欧胡岛全景。',
      whyPopular: '0.8英里的步道通往760英尺的山顶，可以360度欣赏威基基、檀香山和太平洋的壮丽景色。这是夏威夷最受欢迎的徒步路线之一。',
      history: '夏威夷原住民称这座火山口为"Lēahi"（金枪鱼之眉）。19世纪的英国水手误将山坡上的方解石晶体当作钻石，因此得名。',
      facts: [
        '火山口约有30万年历史',
        '步道包括175级凿入山体的台阶',
        '钻石头山于1968年被列为国家自然地标',
        '火山口边缘海拔760英尺',
      ],
      restaurants: [
        { name: '钻石头市场烧烤', cuisine: '当地夏威夷菜', priceRange: '$', rating: 4.6, description: '深受当地人喜爱的便当和烘焙店。', address: '3158 Monsarrat Ave', mustTry: '柠檬脆皮蛋糕' },
        { name: '南岸烧烤', cuisine: '美式/夏威夷菜', priceRange: '$$', rating: 4.4, description: '休闲餐厅，汉堡和生鱼饭很棒。', address: '3114 Monsarrat Ave', mustTry: '金枪鱼生鱼饭' },
        { name: '波加特咖啡馆', cuisine: '早午餐', priceRange: '$', rating: 4.5, description: '徒步后的完美早餐地点。', address: '3045 Monsarrat Ave', mustTry: '巴西莓碗' },
      ],
    },
  },
  'pearl-harbor': {
    en: {
      name: 'Pearl Harbor',
      address: '1 Arizona Memorial Place, Honolulu, HI 96818',
      shortDescription: 'Historic naval base and memorial honoring the 1941 attack.',
      whyPopular: "Pearl Harbor is America's most visited WWII site, drawing over 1.8 million visitors annually. The USS Arizona Memorial serves as a solemn tribute to the 1,177 crew members who died.",
      history: 'On December 7, 1941, Japan launched a surprise attack on the U.S. naval base. The attack killed 2,403 Americans and thrust the United States into World War II.',
      facts: [
        'The attack destroyed 19 ships and 328 aircraft',
        'The USS Arizona still leaks about 9 quarts of oil per day',
        'Pearl Harbor is still an active military base',
        'The memorial was dedicated in 1962',
      ],
      restaurants: [
        { name: 'Restaurant 604', cuisine: 'American/Hawaiian', priceRange: '$$', rating: 4.3, description: 'Waterfront dining with harbor views.', address: '604 Waihona St', mustTry: 'Fresh Catch of the Day' },
        { name: 'Aiea Bowl Coffee Shop', cuisine: 'Local Hawaiian', priceRange: '$', rating: 4.5, description: 'Classic local diner with massive portions.', address: '99-115 Aiea Heights Dr', mustTry: 'Loco Moco' },
        { name: "Tanioka's Seafood", cuisine: 'Hawaiian/Poke', priceRange: '$', rating: 4.7, description: 'Famous for authentic poke.', address: '94-903 Farrington Hwy', mustTry: 'Spicy Ahi Poke' },
      ],
    },
    zh: {
      name: '珍珠港',
      address: '1 Arizona Memorial Place, 檀香山, HI 96818',
      shortDescription: '历史海军基地和纪念馆，纪念1941年的袭击事件。',
      whyPopular: '珍珠港是美国访问量最大的二战遗址，每年吸引超过180万游客。亚利桑那号纪念馆庄严地纪念了1177名遇难船员。',
      history: '1941年12月7日，日本对美国海军基地发动了突然袭击。袭击造成2403名美国人死亡，促使美国加入第二次世界大战。',
      facts: [
        '袭击摧毁了19艘舰船和328架飞机',
        '亚利桑那号至今每天仍泄漏约9夸脱燃油',
        '珍珠港仍是现役军事基地',
        '纪念馆于1962年落成',
      ],
      restaurants: [
        { name: '604餐厅', cuisine: '美式/夏威夷菜', priceRange: '$$', rating: 4.3, description: '可欣赏港口景色的海滨餐厅。', address: '604 Waihona St', mustTry: '今日鲜鱼' },
        { name: '艾伊亚保龄球咖啡店', cuisine: '当地夏威夷菜', priceRange: '$', rating: 4.5, description: '经典当地餐厅，份量超大。', address: '99-115 Aiea Heights Dr', mustTry: '夏威夷牛肉饭' },
        { name: '谷冈海鲜', cuisine: '夏威夷/生鱼', priceRange: '$', rating: 4.7, description: '以正宗生鱼闻名。', address: '94-903 Farrington Hwy', mustTry: '辣金枪鱼生鱼' },
      ],
    },
  },
  'north-shore': {
    en: {
      name: 'North Shore',
      address: 'Haleiwa, HI 96712',
      shortDescription: 'World-famous surfing destination with massive winter waves.',
      whyPopular: 'The North Shore is the surfing capital of the world. During winter, waves can reach 30+ feet, attracting the world\'s best surfers for the Vans Triple Crown of Surfing.',
      history: 'Ancient Hawaiians first surfed these waters. The modern surf boom began in the 1950s when mainland surfers discovered the powerful winter swells.',
      facts: [
        'The Banzai Pipeline is the most dangerous wave in the world',
        'Winter waves can reach 30-50 feet',
        'The North Shore has over 7 miles of surf breaks',
        'Haleiwa town was founded in 1898',
      ],
      restaurants: [
        { name: "Giovanni's Shrimp Truck", cuisine: 'Seafood', priceRange: '$', rating: 4.5, description: 'Legendary food truck famous for garlic shrimp.', address: '66-472 Kamehameha Hwy', mustTry: 'Scampi Shrimp' },
        { name: 'Matsumoto Shave Ice', cuisine: 'Dessert', priceRange: '$', rating: 4.6, description: 'Iconic shave ice shop since 1951.', address: '66-111 Kamehameha Hwy', mustTry: 'Rainbow Shave Ice' },
        { name: "Haleiwa Joe's", cuisine: 'Seafood/American', priceRange: '$$', rating: 4.4, description: 'Waterfront dining with fresh fish.', address: '66-011 Kamehameha Hwy', mustTry: 'Coconut Shrimp' },
      ],
    },
    zh: {
      name: '北岸',
      address: '哈雷瓦, HI 96712',
      shortDescription: '世界著名的冲浪胜地，冬季巨浪滔天。',
      whyPopular: '北岸是世界冲浪之都。冬季时海浪可达30英尺以上，吸引世界顶级冲浪选手参加范斯三冠王冲浪赛。',
      history: '古代夏威夷人最早在这片水域冲浪。20世纪50年代，大陆冲浪者发现了强劲的冬季涌浪，现代冲浪热潮由此开始。',
      facts: [
        '班赛管道是世界上最危险的海浪',
        '冬季海浪可达30-50英尺',
        '北岸有超过7英里的冲浪点',
        '哈雷瓦镇建于1898年',
      ],
      restaurants: [
        { name: "乔瓦尼虾车", cuisine: '海鲜', priceRange: '$', rating: 4.5, description: '以蒜香虾闻名的传奇餐车。', address: '66-472 Kamehameha Hwy', mustTry: '蒜香虾' },
        { name: '松本刨冰', cuisine: '甜点', priceRange: '$', rating: 4.6, description: '自1951年以来的标志性刨冰店。', address: '66-111 Kamehameha Hwy', mustTry: '彩虹刨冰' },
        { name: "哈雷瓦乔餐厅", cuisine: '海鲜/美式', priceRange: '$$', rating: 4.4, description: '海滨餐厅，新鲜海鱼。', address: '66-011 Kamehameha Hwy', mustTry: '椰子虾' },
      ],
    },
  },
  'hanauma-bay': {
    en: {
      name: 'Hanauma Bay',
      address: '100 Hanauma Bay Rd, Honolulu, HI 96825',
      shortDescription: 'Pristine nature preserve famous for spectacular snorkeling.',
      whyPopular: "Hanauma Bay is Hawaii's premier snorkeling destination, home to over 400 species of fish in crystal-clear waters. The bay formed within a volcanic cone.",
      history: 'Hanauma means "curved bay" in Hawaiian. The bay formed 32,000 years ago. Elvis filmed "Blue Hawaii" here in 1961. It became a Marine Conservation District in 1967.',
      facts: [
        'Home to the Hawaiian state fish: humuhumunukunukuāpuaʻa',
        'The reef supports over 400 species of fish',
        'The volcanic crater is about 32,000 years old',
        'A required educational video helps preserve the ecosystem',
      ],
      restaurants: [
        { name: 'Koko Head Café', cuisine: 'Brunch/Hawaiian', priceRange: '$$', rating: 4.6, description: 'Popular brunch spot with island-inspired dishes.', address: '1145 12th Ave', mustTry: 'Cornflake French Toast' },
        { name: 'Ono Steaks and Shrimp Shack', cuisine: 'Seafood/Hawaiian', priceRange: '$$', rating: 4.4, description: 'Fresh seafood near the bay.', address: '7192 Kalanianaole Hwy', mustTry: 'Garlic Butter Shrimp' },
        { name: 'Moena Café', cuisine: 'Hawaiian/Breakfast', priceRange: '$$', rating: 4.5, description: 'Great pre-snorkeling breakfast.', address: '7192 Kalanianaole Hwy', mustTry: 'Kalua Pig Benedict' },
      ],
    },
    zh: {
      name: '恐龙湾',
      address: '100 Hanauma Bay Rd, 檀香山, HI 96825',
      shortDescription: '原始自然保护区，以壮观的浮潜闻名。',
      whyPopular: '恐龙湾是夏威夷首屈一指的浮潜目的地，清澈的海水中栖息着400多种鱼类。海湾形成于火山锥内。',
      history: 'Hanauma在夏威夷语中意为"弯曲的海湾"。海湾形成于32000年前。猫王1961年在这里拍摄了《蓝色夏威夷》。1967年成为海洋保护区。',
      facts: [
        '这里是夏威夷州鱼——矩形吻鲀的家园',
        '珊瑚礁养育了400多种鱼类',
        '火山口约有32000年历史',
        '必看的教育视频有助于保护生态系统',
      ],
      restaurants: [
        { name: '可可头咖啡馆', cuisine: '早午餐/夏威夷菜', priceRange: '$$', rating: 4.6, description: '热门早午餐地点，提供岛屿风味美食。', address: '1145 12th Ave', mustTry: '玉米片法式吐司' },
        { name: 'Ono牛排虾屋', cuisine: '海鲜/夏威夷菜', priceRange: '$$', rating: 4.4, description: '海湾附近的新鲜海鲜。', address: '7192 Kalanianaole Hwy', mustTry: '蒜香黄油虾' },
        { name: 'Moena咖啡馆', cuisine: '夏威夷/早餐', priceRange: '$$', rating: 4.5, description: '浮潜前的完美早餐。', address: '7192 Kalanianaole Hwy', mustTry: '卡鲁阿猪肉班尼迪克' },
      ],
    },
  },
  'hawaii-volcanoes': {
    en: {
      name: 'Hawaii Volcanoes National Park',
      address: 'Hawaii Volcanoes National Park, HI 96718',
      shortDescription: 'Active volcanoes, lava flows, and otherworldly landscapes.',
      whyPopular: "One of the only places on Earth where you can safely witness active volcanism. Kīlauea has been erupting since 1983. The park is a UNESCO World Heritage Site.",
      history: "Native Hawaiians worship Pele, the goddess of fire who lives in Kīlauea's summit crater. The park was established in 1916. The 2018 eruption destroyed over 700 homes.",
      facts: [
        'Kīlauea has erupted 34 times since 1952',
        'The park covers over 333,000 acres',
        'Mauna Loa is the world\'s largest active volcano',
        'The Thurston Lava Tube is 500 years old',
      ],
      restaurants: [
        { name: 'The Rim at Volcano House', cuisine: 'American/Hawaiian', priceRange: '$$$', rating: 4.3, description: 'Dine with views of Kilauea crater.', address: '1 Crater Rim Dr', mustTry: 'Volcano Mist Beef' },
        { name: "Uncle George's Lounge", cuisine: 'Casual/Pub', priceRange: '$$', rating: 4.2, description: 'Casual dining at Volcano House.', address: '1 Crater Rim Dr', mustTry: 'Kalua Pork Sliders' },
        { name: 'Cafe Ono', cuisine: 'Coffee/Bakery', priceRange: '$', rating: 4.4, description: 'Charming café in Volcano Village.', address: '19-4005 Old Volcano Rd', mustTry: 'Lilikoi Bar' },
      ],
    },
    zh: {
      name: '夏威夷火山国家公园',
      address: '夏威夷火山国家公园, HI 96718',
      shortDescription: '活火山、熔岩流和超凡脱俗的景观。',
      whyPopular: '地球上少数几个可以安全观察活火山活动的地方之一。基拉韦厄火山自1983年以来一直在喷发。该公园是联合国教科文组织世界遗产。',
      history: '夏威夷原住民崇拜火山女神佩蕾，她居住在基拉韦厄火山口。公园建于1916年。2018年的喷发摧毁了700多座房屋。',
      facts: [
        '基拉韦厄火山自1952年以来已喷发34次',
        '公园占地超过33.3万英亩',
        '莫纳罗亚是世界上最大的活火山',
        '瑟斯顿熔岩管有500年历史',
      ],
      restaurants: [
        { name: '火山屋边缘餐厅', cuisine: '美式/夏威夷菜', priceRange: '$$$', rating: 4.3, description: '边用餐边欣赏基拉韦厄火山口。', address: '1 Crater Rim Dr', mustTry: '火山雾牛肉' },
        { name: "乔治叔叔酒廊", cuisine: '休闲/酒吧', priceRange: '$$', rating: 4.2, description: '火山屋的休闲用餐。', address: '1 Crater Rim Dr', mustTry: '卡鲁阿猪肉滑块' },
        { name: 'Ono咖啡馆', cuisine: '咖啡/烘焙', priceRange: '$', rating: 4.4, description: '火山村迷人的咖啡馆。', address: '19-4005 Old Volcano Rd', mustTry: '百香果条' },
      ],
    },
  },
  'mauna-kea': {
    en: {
      name: 'Mauna Kea',
      address: 'Mauna Kea Access Rd, Hilo, HI 96720',
      shortDescription: 'Sacred mountain summit with world-class observatories.',
      whyPopular: "Earth's tallest mountain from oceanic base (33,500 feet). The summit hosts the world's largest observatory complex. Sunset above the clouds is unforgettable.",
      history: 'Mauna Kea ("White Mountain") is sacred to Native Hawaiians. Ancient Hawaiians quarried basalt here. The first telescope was built in 1968.',
      facts: [
        'Taller than Everest when measured from oceanic base',
        'The summit has less than 40% oxygen',
        'Snow falls on the summit in winter',
        'Home to 13 telescopes from 11 countries',
      ],
      restaurants: [
        { name: 'Café Pesto', cuisine: 'Italian/Pacific', priceRange: '$$', rating: 4.5, description: 'Pacific Rim Italian cuisine in Hilo.', address: '308 Kamehameha Ave, Hilo', mustTry: 'Kalua Pork Pizza' },
        { name: 'Moon and Turtle', cuisine: 'Farm-to-Table', priceRange: '$$$', rating: 4.6, description: 'Intimate farm-to-table dining.', address: '51 Kalakaua St, Hilo', mustTry: 'Tasting Menu' },
        { name: "Ken's House of Pancakes", cuisine: 'American/Diner', priceRange: '$', rating: 4.3, description: '24-hour diner since 1971.', address: '1730 Kamehameha Ave, Hilo', mustTry: 'Macadamia Nut Pancakes' },
      ],
    },
    zh: {
      name: '莫纳克亚山',
      address: 'Mauna Kea Access Rd, 希洛, HI 96720',
      shortDescription: '神圣的山峰，拥有世界级天文台。',
      whyPopular: '从海底算起是地球上最高的山（33500英尺）。山顶拥有世界上最大的天文台群。云层之上的日落令人难忘。',
      history: '莫纳克亚（"白山"）对夏威夷原住民来说是神圣的。古代夏威夷人在这里开采玄武岩。第一座望远镜建于1968年。',
      facts: [
        '从海底测量比珠穆朗玛峰还高',
        '山顶氧气含量不到40%',
        '冬天山顶会下雪',
        '拥有来自11个国家的13座望远镜',
      ],
      restaurants: [
        { name: 'Pesto咖啡馆', cuisine: '意式/太平洋', priceRange: '$$', rating: 4.5, description: '希洛的太平洋风味意大利菜。', address: '308 Kamehameha Ave, 希洛', mustTry: '卡鲁阿猪肉披萨' },
        { name: '月亮与龟', cuisine: '农场直供', priceRange: '$$$', rating: 4.6, description: '私密的农场到餐桌用餐体验。', address: '51 Kalakaua St, 希洛', mustTry: '品鉴菜单' },
        { name: "肯的煎饼屋", cuisine: '美式/餐厅', priceRange: '$', rating: 4.3, description: '自1971年以来的24小时餐厅。', address: '1730 Kamehameha Ave, 希洛', mustTry: '夏威夷果煎饼' },
      ],
    },
  },
  'akaka-falls': {
    en: {
      name: 'Akaka Falls',
      address: 'Akaka Falls State Park, Honomu, HI 96728',
      shortDescription: 'Spectacular 442-foot waterfall in tropical rainforest.',
      whyPopular: "One of Hawaii's tallest waterfalls. The easy 0.4-mile loop trail winds through lush rainforest filled with bamboo and ginger.",
      history: 'According to legend, Akaka Falls was created when a man named Akaka, caught between two lovers, leaped off a cliff and was transformed into a waterfall.',
      facts: [
        'The waterfall drops 442 feet',
        'The loop trail is only 0.4 miles',
        'The park covers 65 acres of rainforest',
        'Annual rainfall exceeds 200 inches',
      ],
      restaurants: [
        { name: "Mr. Ed's Bakery", cuisine: 'Bakery/Café', priceRange: '$', rating: 4.5, description: 'Fresh-baked goods in Honomu.', address: '28-1672 Old Mamalahoa Hwy', mustTry: 'Malasadas' },
        { name: "What's Shakin'", cuisine: 'Smoothies/Healthy', priceRange: '$', rating: 4.6, description: 'Famous for tropical fruit smoothies.', address: '27-999 Old Mamalahoa Hwy', mustTry: 'Papaya Paradise Smoothie' },
        { name: 'Honomu Café', cuisine: 'Local/Hawaiian', priceRange: '$', rating: 4.3, description: 'Home-style cooking in historic Honomu.', address: '28-1690 Old Mamalahoa Hwy', mustTry: 'Loco Moco' },
      ],
    },
    zh: {
      name: '阿卡卡瀑布',
      address: '阿卡卡瀑布州立公园, Honomu, HI 96728',
      shortDescription: '热带雨林中壮观的442英尺瀑布。',
      whyPopular: '夏威夷最高的瀑布之一。轻松的0.4英里环形步道穿过茂密的雨林，两旁是竹子和姜花。',
      history: '传说阿卡卡瀑布是一个名叫阿卡卡的男子创造的，他夹在两个恋人之间，从悬崖上跳下，化身为瀑布。',
      facts: [
        '瀑布落差442英尺',
        '环形步道仅0.4英里',
        '公园占地65英亩雨林',
        '年降雨量超过200英寸',
      ],
      restaurants: [
        { name: "艾德先生烘焙坊", cuisine: '烘焙/咖啡馆', priceRange: '$', rating: 4.5, description: 'Honomu的新鲜烘焙食品。', address: '28-1672 Old Mamalahoa Hwy', mustTry: '葡式甜甜圈' },
        { name: "动感果昔", cuisine: '果昔/健康', priceRange: '$', rating: 4.6, description: '以热带水果果昔闻名。', address: '27-999 Old Mamalahoa Hwy', mustTry: '木瓜天堂果昔' },
        { name: 'Honomu咖啡馆', cuisine: '当地/夏威夷菜', priceRange: '$', rating: 4.3, description: '历史悠久的Honomu家常菜。', address: '28-1690 Old Mamalahoa Hwy', mustTry: '夏威夷牛肉饭' },
      ],
    },
  },
  'kona-coffee': {
    en: {
      name: 'Kona Coffee Farms',
      address: 'Holualoa, HI 96725',
      shortDescription: 'World-renowned coffee region with tours and tastings.',
      whyPopular: "Kona coffee is among the world's finest. The unique microclimate creates perfect growing conditions. Tour working farms and taste fresh-roasted coffee.",
      history: 'Coffee was first planted in Hawaii in 1828. Japanese immigrants developed the industry in the late 1800s. Today there are about 800 farms in the Kona Coffee Belt.',
      facts: [
        'Real Kona coffee only grows in North and South Kona',
        'The Coffee Belt is 2 miles wide and 30 miles long',
        'Kona coffee sells for $25-$80 per pound',
        'Harvest season runs August to January',
      ],
      restaurants: [
        { name: 'Holualoa Gardens & Café', cuisine: 'Farm-to-Table', priceRange: '$$', rating: 4.5, description: 'Garden setting with local ingredients.', address: '76-5901 Mamalahoa Hwy', mustTry: 'Kona Coffee Flight' },
        { name: 'Daylight Mind Coffee', cuisine: 'Coffee/Café', priceRange: '$$', rating: 4.6, description: 'Oceanfront coffee house.', address: '75-5770 Alii Dr, Kona', mustTry: 'Kona Pour Over' },
        { name: 'Ultimate Burger', cuisine: 'American', priceRange: '$$', rating: 4.4, description: 'Gourmet burgers with local beef.', address: '74-5450 Makala Blvd, Kona', mustTry: 'Big Island Burger' },
      ],
    },
    zh: {
      name: '科纳咖啡农场',
      address: 'Holualoa, HI 96725',
      shortDescription: '世界著名的咖啡产区，提供参观和品鉴。',
      whyPopular: '科纳咖啡是世界上最优质的咖啡之一。独特的小气候创造了完美的种植条件。参观在运营的农场，品尝新鲜烘焙的咖啡。',
      history: '咖啡于1828年首次在夏威夷种植。19世纪末日本移民发展了这个产业。如今科纳咖啡带有约800个农场。',
      facts: [
        '真正的科纳咖啡只生长在北科纳和南科纳',
        '咖啡带宽2英里，长30英里',
        '科纳咖啡每磅售价25-80美元',
        '收获季节为8月至1月',
      ],
      restaurants: [
        { name: 'Holualoa花园咖啡馆', cuisine: '农场直供', priceRange: '$$', rating: 4.5, description: '花园环境，当地食材。', address: '76-5901 Mamalahoa Hwy', mustTry: '科纳咖啡品鉴' },
        { name: 'Daylight Mind咖啡', cuisine: '咖啡/咖啡馆', priceRange: '$$', rating: 4.6, description: '海滨咖啡屋。', address: '75-5770 Alii Dr, 科纳', mustTry: '科纳手冲' },
        { name: '极致汉堡', cuisine: '美式', priceRange: '$$', rating: 4.4, description: '使用当地牛肉的美食汉堡。', address: '74-5450 Makala Blvd, 科纳', mustTry: '大岛汉堡' },
      ],
    },
  },
  'punaluu-black-sand': {
    en: {
      name: "Punalu'u Black Sand Beach",
      address: 'Beach Rd, Naalehu, HI 96772',
      shortDescription: 'Stunning black sand beach where sea turtles rest.',
      whyPopular: "Hawaii's most famous black sand beach. Hawaiian green sea turtles frequently rest on the warm sand. The contrast of black sand, blue ocean, and palm trees is stunning.",
      history: 'The beach was a major Hawaiian settlement. The black sand formed from lava meeting the ocean. Sea turtles were sacred to ancient Hawaiians.',
      facts: [
        'The sand is made of basalt from volcanic lava',
        'Sea turtles are protected—stay 10 feet away',
        'Fresh water springs bubble up through the sand',
        'Taking black sand from the beach is illegal',
      ],
      restaurants: [
        { name: "Punalu'u Bake Shop", cuisine: 'Bakery', priceRange: '$', rating: 4.5, description: 'Southernmost bakery in the USA.', address: '95-5642 Mamalahoa Hwy', mustTry: 'Guava Sweetbread' },
        { name: 'Hana Hou Restaurant', cuisine: 'Local Hawaiian', priceRange: '$', rating: 4.3, description: 'Friendly local spot in Naalehu.', address: '95-1148 Naalehu Spur Rd', mustTry: 'Lau Lau Plate' },
        { name: 'Ka Lae Coffee', cuisine: 'Coffee/Light Bites', priceRange: '$', rating: 4.2, description: 'Local coffee near South Point.', address: 'South Point Rd', mustTry: "Ka'u Coffee" },
      ],
    },
    zh: {
      name: '普纳鲁乌黑沙滩',
      address: 'Beach Rd, Naalehu, HI 96772',
      shortDescription: '令人惊叹的黑沙滩，海龟在此栖息。',
      whyPopular: '夏威夷最著名的黑沙滩。夏威夷绿海龟经常在温暖的沙滩上休息。黑沙、蓝色海洋和棕榈树的对比令人惊叹。',
      history: '这片海滩曾是夏威夷人的主要聚居地。黑沙是由熔岩遇到海水形成的。海龟对古代夏威夷人来说是神圣的。',
      facts: [
        '沙子是由火山熔岩中的玄武岩制成的',
        '海龟受保护——请保持10英尺距离',
        '淡水泉从沙子中涌出',
        '从海滩带走黑沙是违法的',
      ],
      restaurants: [
        { name: "普纳鲁乌烘焙坊", cuisine: '烘焙', priceRange: '$', rating: 4.5, description: '美国最南端的烘焙坊。', address: '95-5642 Mamalahoa Hwy', mustTry: '番石榴甜面包' },
        { name: 'Hana Hou餐厅', cuisine: '当地夏威夷菜', priceRange: '$', rating: 4.3, description: 'Naalehu友好的当地餐厅。', address: '95-1148 Naalehu Spur Rd', mustTry: '芋叶包猪肉套餐' },
        { name: 'Ka Lae咖啡', cuisine: '咖啡/小食', priceRange: '$', rating: 4.2, description: '南角附近的当地咖啡。', address: 'South Point Rd', mustTry: "卡乌咖啡" },
      ],
    },
  },
  'road-to-hana': {
    en: {
      name: 'Road to Hana',
      address: 'Hana Highway, Maui, HI',
      shortDescription: 'Epic 64-mile coastal drive with 620 curves and 59 bridges.',
      whyPopular: "One of the world's most scenic drives. The winding highway passes through rainforests with waterfalls, beaches, and gardens. It's an all-day adventure.",
      history: 'The highway was built by convict laborers in 1926-1927. Before the road, Hana was only accessible by sea. Charles Lindbergh is buried in Hana.',
      facts: [
        'The road has 620 curves and 59 bridges',
        'The drive takes 3-5 hours one way without stops',
        'Over 20 waterfalls are visible from the road',
        'The town of Hana has only 1,200 residents',
      ],
      restaurants: [
        { name: "Aunty Sandy's Banana Bread", cuisine: 'Bakery', priceRange: '$', rating: 4.7, description: "Famous roadside stand in Ke'anae.", address: "Ke'anae Peninsula", mustTry: 'Fresh Banana Bread' },
        { name: 'Braddah Hutts BBQ', cuisine: 'BBQ/Hawaiian', priceRange: '$', rating: 4.5, description: 'Popular food truck with smoky BBQ.', address: 'Hana Highway Mile 39', mustTry: 'Kalua Pork Plate' },
        { name: 'Hana Ranch Restaurant', cuisine: 'American/Hawaiian', priceRange: '$$', rating: 4.3, description: 'Main restaurant in Hana town.', address: '5031 Hana Hwy, Hana', mustTry: 'Fresh Fish Tacos' },
      ],
    },
    zh: {
      name: '哈纳公路',
      address: '哈纳公路, 茂宜岛, HI',
      shortDescription: '史诗般的64英里海岸公路，有620个弯道和59座桥。',
      whyPopular: '世界上最美的公路之一。蜿蜒的公路穿过雨林，沿途有瀑布、海滩和花园。这是一整天的冒险。',
      history: '这条公路于1926-1927年由囚犯劳工建造。在公路建成之前，哈纳只能通过海路到达。查尔斯·林德伯格葬于哈纳。',
      facts: [
        '公路有620个弯道和59座桥',
        '单程不停车需要3-5小时',
        '从公路上可以看到20多个瀑布',
        '哈纳镇只有1200名居民',
      ],
      restaurants: [
        { name: "桑迪阿姨的香蕉面包", cuisine: '烘焙', priceRange: '$', rating: 4.7, description: "Ke'anae著名的路边摊。", address: "Ke'anae Peninsula", mustTry: '新鲜香蕉面包' },
        { name: 'Braddah Hutts烧烤', cuisine: '烧烤/夏威夷菜', priceRange: '$', rating: 4.5, description: '热门烧烤餐车。', address: '哈纳公路39英里处', mustTry: '卡鲁阿猪肉套餐' },
        { name: '哈纳牧场餐厅', cuisine: '美式/夏威夷菜', priceRange: '$$', rating: 4.3, description: '哈纳镇的主要餐厅。', address: '5031 Hana Hwy, 哈纳', mustTry: '新鲜鱼肉卷饼' },
      ],
    },
  },
  'haleakala': {
    en: {
      name: 'Haleakalā National Park',
      address: 'Haleakalā Crater Rd, Kula, HI 96790',
      shortDescription: 'Massive volcanic crater famous for spectacular sunrises.',
      whyPopular: "Watching sunrise from the 10,023-foot summit is a bucket-list experience. The massive crater could fit Manhattan. You're literally above the clouds.",
      history: 'Haleakalā means "House of the Sun." Legend says the demigod Maui lassoed the sun here to slow its passage. The park was established in 1916.',
      facts: [
        'The crater is 7 miles long and 2 miles wide',
        'Summit temperatures can be 30°F colder than the coast',
        'The silversword plant takes 50 years to bloom',
        'Sunrise reservations are required between 3am-7am',
      ],
      restaurants: [
        { name: 'Kula Lodge', cuisine: 'American/Hawaiian', priceRange: '$$$', rating: 4.4, description: 'Cozy mountain lodge with stunning views.', address: '15200 Haleakala Hwy', mustTry: 'Kula Vegetable Eggs Benedict' },
        { name: "Grandma's Coffee House", cuisine: 'Coffee/Breakfast', priceRange: '$', rating: 4.5, description: 'Family-run café since 1918.', address: '9232 Kula Hwy', mustTry: 'Macadamia Nut Pancakes' },
        { name: 'La Provence', cuisine: 'French/Bakery', priceRange: '$$', rating: 4.6, description: 'French bakery in upcountry Maui.', address: '3158 Lower Kula Rd', mustTry: 'Almond Croissant' },
      ],
    },
    zh: {
      name: '哈雷阿卡拉国家公园',
      address: 'Haleakalā Crater Rd, 库拉, HI 96790',
      shortDescription: '巨大的火山口，以壮观的日出闻名。',
      whyPopular: '在10023英尺的山顶观看日出是必做体验。巨大的火山口可以容纳整个曼哈顿。你真的是在云层之上。',
      history: 'Haleakalā意为"太阳之屋"。传说半神毛伊在这里套住了太阳以减缓它的脚步。公园建于1916年。',
      facts: [
        '火山口长7英里，宽2英里',
        '山顶温度可能比海岸低30华氏度',
        '银剑草需要50年才能开花',
        '凌晨3点至7点观看日出需要预约',
      ],
      restaurants: [
        { name: '库拉山庄', cuisine: '美式/夏威夷菜', priceRange: '$$$', rating: 4.4, description: '景色壮丽的舒适山庄。', address: '15200 Haleakala Hwy', mustTry: '库拉蔬菜班尼迪克' },
        { name: "奶奶咖啡屋", cuisine: '咖啡/早餐', priceRange: '$', rating: 4.5, description: '自1918年以来的家族咖啡馆。', address: '9232 Kula Hwy', mustTry: '夏威夷果煎饼' },
        { name: '普罗旺斯', cuisine: '法式/烘焙', priceRange: '$$', rating: 4.6, description: '茂宜岛高地的法式烘焙坊。', address: '3158 Lower Kula Rd', mustTry: '杏仁可颂' },
      ],
    },
  },
  'kaanapali-beach': {
    en: {
      name: "Ka'anapali Beach",
      address: 'Kaanapali, HI 96761',
      shortDescription: 'Premier resort beach with cliff diving and stunning sunsets.',
      whyPopular: "Maui's most famous beach resort with 3 miles of white sand. Black Rock offers iconic cliff diving at sunset. Crystal-clear snorkeling and world-class resorts.",
      history: "Ka'anapali was once a royal retreat. Black Rock (Pu'u Keka'a) is sacred—ancient Hawaiians believed souls leaped to the spirit world here. Hawaii's first planned resort opened in 1962.",
      facts: [
        'The beach stretches 3 miles along west Maui',
        'Black Rock is a sacred Hawaiian site',
        'Named "America\'s Best Beach" by Travel Channel',
        "Hawaii's first master-planned resort community",
      ],
      restaurants: [
        { name: 'Hula Grill', cuisine: 'Hawaiian/Seafood', priceRange: '$$', rating: 4.5, description: 'Beachfront dining on the sand.', address: '2435 Kaanapali Pkwy', mustTry: 'Macadamia Nut Mahi Mahi' },
        { name: "Leilani's on the Beach", cuisine: 'American/Seafood', priceRange: '$$', rating: 4.4, description: 'Casual beachside restaurant.', address: '2435 Kaanapali Pkwy', mustTry: "Leilani's Burger" },
        { name: 'Japengo', cuisine: 'Japanese/Pacific', priceRange: '$$$', rating: 4.6, description: 'Upscale sushi at Hyatt Regency.', address: '200 Nohea Kai Dr', mustTry: 'Omakase Platter' },
      ],
    },
    zh: {
      name: '卡阿纳帕利海滩',
      address: 'Kaanapali, HI 96761',
      shortDescription: '顶级度假海滩，有悬崖跳水和壮丽日落。',
      whyPopular: '茂宜岛最著名的海滩度假区，拥有3英里的白沙滩。黑岩在日落时分有标志性的悬崖跳水。清澈的浮潜水域和世界级度假村。',
      history: '卡阿纳帕利曾是皇室的休养地。黑岩（Pu\'u Keka\'a）是神圣的——古代夏威夷人相信灵魂从这里跳入精神世界。夏威夷第一个规划度假区于1962年开业。',
      facts: [
        '海滩沿西茂宜延伸3英里',
        '黑岩是夏威夷的神圣遗址',
        '被旅游频道评为"美国最佳海滩"',
        '夏威夷第一个总体规划度假社区',
      ],
      restaurants: [
        { name: '草裙舞烧烤', cuisine: '夏威夷/海鲜', priceRange: '$$', rating: 4.5, description: '沙滩上的海滨用餐。', address: '2435 Kaanapali Pkwy', mustTry: '夏威夷果鲯鳅' },
        { name: "蕾拉尼海滩餐厅", cuisine: '美式/海鲜', priceRange: '$$', rating: 4.4, description: '休闲海滨餐厅。', address: '2435 Kaanapali Pkwy', mustTry: "蕾拉尼汉堡" },
        { name: 'Japengo', cuisine: '日式/太平洋', priceRange: '$$$', rating: 4.6, description: '凯悦酒店的高档寿司。', address: '200 Nohea Kai Dr', mustTry: '主厨精选拼盘' },
      ],
    },
  },
  'molokini': {
    en: {
      name: 'Molokini Crater',
      address: 'Molokini Shoal Marine Life Conservation District',
      shortDescription: 'Crescent-shaped volcanic crater with crystal-clear waters.',
      whyPopular: "Hawaii's top snorkeling destination. Visibility exceeds 150 feet. Home to over 250 species of fish. Only accessible by boat, creating an exclusive experience.",
      history: 'Legend says Molokini was a woman turned to stone by jealous Pele. The U.S. Navy used it for target practice in WWII. It became a Marine Conservation District in 1977.',
      facts: [
        'Visibility often exceeds 150 feet',
        'Home to over 250 fish species and 38 coral species',
        'Only 450 visitors allowed at once',
        'The crater formed 230,000 years ago',
      ],
      restaurants: [
        { name: 'Monkeypod Kitchen', cuisine: 'American/Hawaiian', priceRange: '$$', rating: 4.5, description: 'Popular Wailea spot with craft cocktails.', address: '10 Wailea Gateway Pl', mustTry: 'Monkeypod Mai Tai' },
        { name: 'Kō Restaurant', cuisine: 'Hawaiian/Asian', priceRange: '$$$', rating: 4.6, description: 'Plantation-era inspired cuisine.', address: '4100 Wailea Alanui Dr', mustTry: 'Tasting Menu' },
        { name: 'Lineage', cuisine: 'Asian/Hawaiian', priceRange: '$$$', rating: 4.7, description: "Chef Sheldon Simeon's acclaimed restaurant.", address: '3750 Wailea Alanui Dr', mustTry: 'Poi Mochi' },
      ],
    },
    zh: {
      name: '莫洛基尼火山口',
      address: '莫洛基尼浅滩海洋生物保护区',
      shortDescription: '月牙形火山口，海水晶莹剔透。',
      whyPopular: '夏威夷顶级浮潜目的地。能见度超过150英尺。拥有250多种鱼类。只能乘船前往，体验独特。',
      history: '传说莫洛基尼是一位被嫉妒的佩蕾变成石头的女人。二战期间美国海军曾将其用作靶场。1977年成为海洋保护区。',
      facts: [
        '能见度经常超过150英尺',
        '拥有250多种鱼类和38种珊瑚',
        '同时只允许450名游客',
        '火山口形成于23万年前',
      ],
      restaurants: [
        { name: '猴荚树厨房', cuisine: '美式/夏威夷菜', priceRange: '$$', rating: 4.5, description: '怀雷亚热门餐厅，有精酿鸡尾酒。', address: '10 Wailea Gateway Pl', mustTry: '猴荚树迈泰' },
        { name: 'Kō餐厅', cuisine: '夏威夷/亚洲菜', priceRange: '$$$', rating: 4.6, description: '种植园时代风格的美食。', address: '4100 Wailea Alanui Dr', mustTry: '品鉴菜单' },
        { name: 'Lineage', cuisine: '亚洲/夏威夷菜', priceRange: '$$$', rating: 4.7, description: '名厨谢尔顿·西蒙的知名餐厅。', address: '3750 Wailea Alanui Dr', mustTry: '芋泥麻糬' },
      ],
    },
  },
  'lahaina': {
    en: {
      name: 'Lahaina Historic District',
      address: 'Front Street, Lahaina, HI 96761',
      shortDescription: 'Historic whaling town with rich Hawaiian heritage.',
      whyPopular: 'Once the capital of the Hawaiian Kingdom and major whaling port. Front Street has historic buildings, galleries, and restaurants. The famous banyan tree covers nearly an acre.',
      history: 'Lahaina was the Hawaiian capital from 1820-1845. Over 400 whaling ships anchored here annually. Missionaries established the first high school in 1831. The 2023 wildfires devastated the area.',
      facts: [
        'The banyan tree was planted in 1873',
        'Once had 400 whaling ships annually',
        'Served as Hawaii\'s capital before Honolulu',
        'The 2023 wildfires destroyed much of historic Lahaina',
      ],
      restaurants: [
        { name: "Fleetwood's on Front St", cuisine: 'American/Seafood', priceRange: '$$$', rating: 4.5, description: 'Rooftop dining with live music.', address: '744 Front St', mustTry: 'Sunset Dinner Experience' },
        { name: 'Star Noodle', cuisine: 'Asian', priceRange: '$$', rating: 4.6, description: 'Creative Asian-fusion noodle house.', address: '286 Kupuohi St', mustTry: 'Garlic Noodles' },
        { name: "Ululani's Hawaiian Shave Ice", cuisine: 'Dessert', priceRange: '$', rating: 4.8, description: 'Award-winning shave ice.', address: '790 Front St', mustTry: 'No Ka Oi (The Best)' },
      ],
    },
    zh: {
      name: '拉海纳历史区',
      address: 'Front Street, 拉海纳, HI 96761',
      shortDescription: '历史悠久的捕鲸小镇，拥有丰富的夏威夷遗产。',
      whyPopular: '曾是夏威夷王国首都和主要捕鲸港口。前街有历史建筑、画廊和餐厅。著名的榕树占地近一英亩。',
      history: '拉海纳在1820-1845年是夏威夷首都。每年有400多艘捕鲸船在此停泊。传教士于1831年建立了第一所高中。2023年的野火摧毁了该地区。',
      facts: [
        '榕树种植于1873年',
        '曾经每年有400艘捕鲸船',
        '在檀香山之前是夏威夷首都',
        '2023年野火摧毁了拉海纳历史区的大部分',
      ],
      restaurants: [
        { name: "弗利特伍德前街餐厅", cuisine: '美式/海鲜', priceRange: '$$$', rating: 4.5, description: '有现场音乐的屋顶餐厅。', address: '744 Front St', mustTry: '日落晚餐体验' },
        { name: '星星面馆', cuisine: '亚洲菜', priceRange: '$$', rating: 4.6, description: '创意亚洲融合面馆。', address: '286 Kupuohi St', mustTry: '蒜香面' },
        { name: "乌鲁拉尼夏威夷刨冰", cuisine: '甜点', priceRange: '$', rating: 4.8, description: '屡获殊荣的刨冰。', address: '790 Front St', mustTry: 'No Ka Oi（最好的）' },
      ],
    },
  },
};

// Base place data (language-independent)
export const placesBase: Record<string, {
  id: string;
  island: 'oahu' | 'big-island' | 'maui';
  location: { lat: number; lng: number };
  category: 'beach' | 'volcano' | 'historic' | 'nature' | 'culture' | 'adventure';
  images: string[];
  wikipediaSlug?: string;
}> = {
  'waikiki-beach': {
    id: 'waikiki-beach',
    island: 'oahu',
    location: { lat: 21.2766, lng: -157.8278 },
    category: 'beach',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Waikiki_Beach%2C_Honolulu.JPG/1280px-Waikiki_Beach%2C_Honolulu.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Waikiki_view_from_Diamond_Head.jpg/1280px-Waikiki_view_from_Diamond_Head.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Waikiki_Beach_2.jpg/1280px-Waikiki_Beach_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Duke_Kahanamoku_statue_in_Waikiki.jpg/800px-Duke_Kahanamoku_statue_in_Waikiki.jpg',
    ],
    wikipediaSlug: 'Waikiki',
  },
  'diamond-head': {
    id: 'diamond-head',
    island: 'oahu',
    location: { lat: 21.2620, lng: -157.8057 },
    category: 'nature',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Diamond_Head_from_Waikiki.jpg/1280px-Diamond_Head_from_Waikiki.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Diamond_Head_shot.jpg/1280px-Diamond_Head_shot.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Waikiki_view_from_Diamond_Head.jpg/1280px-Waikiki_view_from_Diamond_Head.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Leahi_Park_and_Diamond_Head.jpg/1280px-Leahi_Park_and_Diamond_Head.jpg',
    ],
    wikipediaSlug: 'Diamond_Head,_Hawaii',
  },
  'pearl-harbor': {
    id: 'pearl-harbor',
    island: 'oahu',
    location: { lat: 21.3649, lng: -157.9507 },
    category: 'historic',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/USS_Arizona_Memorial_%28aerial_view%29.jpg/1280px-USS_Arizona_Memorial_%28aerial_view%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/USS_Arizona_Memorial_2.jpg/1280px-USS_Arizona_Memorial_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/USSArizonaMemorial.jpg/1280px-USSArizonaMemorial.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Pearl_Harbor_looking_northeast_October_1941.jpg/1280px-Pearl_Harbor_looking_northeast_October_1941.jpg',
    ],
    wikipediaSlug: 'Attack_on_Pearl_Harbor',
  },
  'north-shore': {
    id: 'north-shore',
    island: 'oahu',
    location: { lat: 21.5930, lng: -158.1041 },
    category: 'beach',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Banzai_Pipeline_breaking.jpg/1280px-Banzai_Pipeline_breaking.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Waimea_Bay_North_Shore.jpg/1280px-Waimea_Bay_North_Shore.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sunset_Beach_North_Shore_Oahu.jpg/1280px-Sunset_Beach_North_Shore_Oahu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Haleiwa_Sign.jpg/1280px-Haleiwa_Sign.jpg',
    ],
    wikipediaSlug: 'North_Shore_(Oahu)',
  },
  'hanauma-bay': {
    id: 'hanauma-bay',
    island: 'oahu',
    location: { lat: 21.2690, lng: -157.6940 },
    category: 'nature',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hanauma_Bay_2.jpg/1280px-Hanauma_Bay_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hanauma_Bay_1.jpg/1280px-Hanauma_Bay_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hanauma_Bay_3.JPG/1280px-Hanauma_Bay_3.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hanauma_Bay_Nature_Preserve.jpg/1280px-Hanauma_Bay_Nature_Preserve.jpg',
    ],
    wikipediaSlug: 'Hanauma_Bay',
  },
  'hawaii-volcanoes': {
    id: 'hawaii-volcanoes',
    island: 'big-island',
    location: { lat: 19.4194, lng: -155.2885 },
    category: 'volcano',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kilauea_Lava_Flow_1.jpg/1280px-Kilauea_Lava_Flow_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Puu_Oo_croridge.jpg/1280px-Puu_Oo_croridge.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sulfur_dioxide_emissions_from_the_Halemaumau_vent.jpg/1280px-Sulfur_dioxide_emissions_from_the_Halemaumau_vent.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Thurston_lava_tube.jpg/1280px-Thurston_lava_tube.jpg',
    ],
    wikipediaSlug: 'Hawai%CA%BBi_Volcanoes_National_Park',
  },
  'mauna-kea': {
    id: 'mauna-kea',
    island: 'big-island',
    location: { lat: 19.8207, lng: -155.4680 },
    category: 'nature',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mauna_Kea_observatory.jpg/1280px-Mauna_Kea_observatory.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MaunaKea.jpg/1280px-MaunaKea.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Mauna_Kea_from_Mauna_Loa_Observatory%2C_Hawaii_-_20100913.jpg/1280px-Mauna_Kea_from_Mauna_Loa_Observatory%2C_Hawaii_-_20100913.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/USA_Hawaii_Island_Mauna_Kea%2C_Shadow.jpg/1280px-USA_Hawaii_Island_Mauna_Kea%2C_Shadow.jpg',
    ],
    wikipediaSlug: 'Mauna_Kea',
  },
  'akaka-falls': {
    id: 'akaka-falls',
    island: 'big-island',
    location: { lat: 19.8536, lng: -155.1524 },
    category: 'nature',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Akaka_Falls_Hawaii.jpg/800px-Akaka_Falls_Hawaii.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%27Akaka_Falls%2C_Hawai%27i.jpg/800px-%27Akaka_Falls%2C_Hawai%27i.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Akaka_Falls_2.jpg/800px-Akaka_Falls_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Akaka_Falls%2C_Island_of_Hawai%27i.jpg/800px-Akaka_Falls%2C_Island_of_Hawai%27i.jpg',
    ],
    wikipediaSlug: 'Akaka_Falls_State_Park',
  },
  'kona-coffee': {
    id: 'kona-coffee',
    island: 'big-island',
    location: { lat: 19.5330, lng: -155.9260 },
    category: 'culture',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kona-coffee-berries.jpg/1280px-Kona-coffee-berries.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coffee_Flowers.jpg/1280px-Coffee_Flowers.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Holualoa_Kona_Coffee_Farm.jpg/1280px-Holualoa_Kona_Coffee_Farm.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kona_Coffee_Living_History_Farm.jpg/1280px-Kona_Coffee_Living_History_Farm.jpg',
    ],
    wikipediaSlug: 'Kona_coffee',
  },
  'punaluu-black-sand': {
    id: 'punaluu-black-sand',
    island: 'big-island',
    location: { lat: 19.1361, lng: -155.5047 },
    category: 'beach',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Punalu%27u_Beach_Hawaii.jpg/1280px-Punalu%27u_Beach_Hawaii.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Green_turtle_on_Punaluu_Beach.JPG/1280px-Green_turtle_on_Punaluu_Beach.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Punalu%27u_Black_Sand_Beach_Park.jpg/1280px-Punalu%27u_Black_Sand_Beach_Park.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Punaluu_black_sand_big_island.jpg/1280px-Punaluu_black_sand_big_island.jpg',
    ],
    wikipediaSlug: 'Punalu%CA%BBu_Beach',
  },
  'road-to-hana': {
    id: 'road-to-hana',
    island: 'maui',
    location: { lat: 20.7567, lng: -155.9900 },
    category: 'adventure',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Road_to_Hana_bridge.jpg/1280px-Road_to_Hana_bridge.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Maui_Road_to_Hana.jpg/1280px-Maui_Road_to_Hana.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wailua_Falls_Maui_Hawaii.jpg/800px-Wailua_Falls_Maui_Hawaii.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Keanae_Peninsula.jpg/1280px-Keanae_Peninsula.jpg',
    ],
    wikipediaSlug: 'Hana_Highway',
  },
  'haleakala': {
    id: 'haleakala',
    island: 'maui',
    location: { lat: 20.7097, lng: -156.1535 },
    category: 'volcano',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Haleakala_Crater.jpg/1280px-Haleakala_Crater.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Haleakala_Sunrise.jpg/1280px-Haleakala_Sunrise.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Haleakala_silversword.jpg/800px-Haleakala_silversword.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Haleakala_Crater_View.jpg/1280px-Haleakala_Crater_View.jpg',
    ],
    wikipediaSlug: 'Haleakal%C4%81_National_Park',
  },
  'kaanapali-beach': {
    id: 'kaanapali-beach',
    island: 'maui',
    location: { lat: 20.9275, lng: -156.6944 },
    category: 'beach',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kaanapali_Beach_Maui.jpg/1280px-Kaanapali_Beach_Maui.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Black_Rock_Maui.jpg/1280px-Black_Rock_Maui.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Kaanapali_Sunset.jpg/1280px-Kaanapali_Sunset.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kaanapali_Beach_Resort.jpg/1280px-Kaanapali_Beach_Resort.jpg',
    ],
    wikipediaSlug: 'Kaanapali',
  },
  'molokini': {
    id: 'molokini',
    island: 'maui',
    location: { lat: 20.6319, lng: -156.4960 },
    category: 'nature',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Molokini_Crater.jpg/1280px-Molokini_Crater.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Snorkeling_at_Molokini.jpg/1280px-Snorkeling_at_Molokini.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Molokini_aerial.jpg/1280px-Molokini_aerial.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Molokini_Islet.jpg/1280px-Molokini_Islet.jpg',
    ],
    wikipediaSlug: 'Molokini',
  },
  'lahaina': {
    id: 'lahaina',
    island: 'maui',
    location: { lat: 20.8783, lng: -156.6825 },
    category: 'historic',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Banyan_Tree_Park_Maui.jpg/1280px-Banyan_Tree_Park_Maui.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Lahaina_Harbor.jpg/1280px-Lahaina_Harbor.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Front_Street_Lahaina.jpg/1280px-Front_Street_Lahaina.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lahaina_Sunset.jpg/1280px-Lahaina_Sunset.jpg',
    ],
    wikipediaSlug: 'Lahaina,_Hawaii',
  },
};
