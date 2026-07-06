const WORDS = [
  // Nouns - Activities
  { word: "ゲーム", answer: ["游戏"], hint: "Activities / English: game" },
  { word: "アルバイト", answer: ["兼职", "打工"], hint: "Activities / English: part-time job; colloquial: バイト" },
  { word: "かいもの", answer: ["购物", "买东西"], hint: "Activities / 漢字：買い物 / English: shopping" },
  { word: "クラス", answer: ["班级", "课程", "课"], hint: "Activities / English: class" },

  // Nouns - People and Things
  { word: "いぬ", answer: ["狗", "犬"], hint: "People and Things / 漢字：犬 / English: dog" },
  { word: "ねこ", answer: ["猫"], hint: "People and Things / 漢字：猫 / English: cat" },
  { word: "ひと", answer: ["人"], hint: "People and Things / 漢字：人 / English: person" },
  { word: "こども", answer: ["孩子", "小孩", "儿童"], hint: "People and Things / 漢字：子供 / English: child" },
  { word: "あなた", answer: ["你"], hint: "People and Things / English: you" },
  { word: "いす", answer: ["椅子"], hint: "People and Things / English: chair" },
  { word: "つくえ", answer: ["桌子"], hint: "People and Things / 漢字：机 / English: desk" },
  { word: "しゃしん", answer: ["照片", "相片"], hint: "People and Things / 漢字：写真 / English: picture; photograph" },
  { word: "はな", answer: ["花"], hint: "People and Things / 漢字：花 / English: flower" },
  { word: "レポート", answer: ["报告", "小论文", "报告书"], hint: "People and Things / English: term paper" },
  { word: "ごはん", answer: ["饭", "米饭", "一餐"], hint: "People and Things / 漢字：ご飯 / English: rice; meal" },
  { word: "パン", answer: ["面包"], hint: "People and Things / English: bread" },

  // Nouns - Places
  { word: "おてら", answer: ["寺庙", "寺"], hint: "Places / 漢字：お寺 / English: temple" },
  { word: "こうえん", answer: ["公园"], hint: "Places / 漢字：公園 / English: park" },
  { word: "スーパー", answer: ["超市"], hint: "Places / English: supermarket" },
  { word: "バスてい", answer: ["公交车站", "巴士站"], hint: "Places / 漢字：バス停 / English: bus stop" },
  { word: "びょういん", answer: ["医院"], hint: "Places / 漢字：病院 / English: hospital" },
  { word: "ホテル", answer: ["酒店", "旅馆", "宾馆"], hint: "Places / English: hotel" },
  { word: "ほんや", answer: ["书店"], hint: "Places / 漢字：本屋 / English: bookstore" },
  { word: "まち", answer: ["城镇", "城市", "镇"], hint: "Places / 漢字：町 / English: town; city" },
  { word: "レストラン", answer: ["餐厅", "饭店"], hint: "Places / English: restaurant" },

  // Time
  { word: "きのう", answer: ["昨天"], hint: "Time / 漢字：昨日 / English: yesterday" },
  { word: "～じかん", answer: ["小时"], hint: "Time / English: ... hours" },
  { word: "いちじかん", answer: ["一个小时", "一小时"], hint: "Time / 漢字：一時間 / English: one hour" },
  { word: "せんしゅう", answer: ["上周", "上星期"], hint: "Time / 漢字：先週 / English: last week" },
  { word: "とき", answer: ["时候", "时间"], hint: "Time / 漢字：時 / English: when; at the time of... / ～の" },
  { word: "げつようび", answer: ["星期一", "周一"], hint: "Time / 漢字：月曜日 / English: Monday" },
  { word: "かようび", answer: ["星期二", "周二"], hint: "Time / 漢字：火曜日 / English: Tuesday" },
  { word: "すいようび", answer: ["星期三", "周三"], hint: "Time / 漢字：水曜日 / English: Wednesday" },
  { word: "もくようび", answer: ["星期四", "周四"], hint: "Time / 漢字：木曜日 / English: Thursday" },
  { word: "きんようび", answer: ["星期五", "周五"], hint: "Time / 漢字：金曜日 / English: Friday" },

  // U-verbs
  { word: "あう", answer: ["见面", "遇见", "会面"], hint: "U-verb / 漢字：会う / English: to meet; to see a person / person に" },
  { word: "ある", answer: ["有", "存在"], hint: "U-verb / English: there is... / place に thing が" },
  { word: "かう", answer: ["买", "购买"], hint: "U-verb / 漢字：買う / English: to buy / ～を" },
  { word: "かく", answer: ["写"], hint: "U-verb / 漢字：書く / English: to write / person に thing を" },
  { word: "とる", answer: ["拍", "照", "拍照"], hint: "U-verb / 漢字：撮る / English: to take a picture / ～を" },
  { word: "まつ", answer: ["等", "等待"], hint: "U-verb / 漢字：待つ / English: to wait / ～を" },
  { word: "わかる", answer: ["懂", "明白", "理解"], hint: "U-verb / English: to understand / ～が" },

  // Ru-verbs
  { word: "いる", answer: ["在", "有"], hint: "Ru-verb / English: a person is in...; stays at... / place に person が" },

  // Adverbs and Other Expressions
  { word: "～ぐらい", answer: ["大约", "左右"], hint: "Adverbs and Other Expressions / English: about; approximate measurement" },
  { word: "ごめんなさい", answer: ["对不起", "抱歉"], hint: "Adverbs and Other Expressions / English: I'm sorry" },
  { word: "それから", answer: ["然后", "接着"], hint: "Adverbs and Other Expressions / English: and then" },
  { word: "だから", answer: ["所以", "因此"], hint: "Adverbs and Other Expressions / English: so; therefore" },
  { word: "たくさん", answer: ["很多", "许多"], hint: "Adverbs and Other Expressions / English: many; a lot" },
  { word: "～と", answer: ["和", "跟"], hint: "Adverbs and Other Expressions / English: together with a person; and" },
  { word: "どうして", answer: ["为什么"], hint: "Adverbs and Other Expressions / English: why" },
  { word: "ひとりで", answer: ["一个人", "独自"], hint: "Adverbs and Other Expressions / 漢字：一人で / English: alone" },
  { word: "もしもし", answer: ["喂", "喂喂"], hint: "Adverbs and Other Expressions / English: Hello? used on the phone" },

  // Location Words
  { word: "みぎ", answer: ["右边", "右"], hint: "Location Words / 漢字：右 / English: right / ～の" },
  { word: "ひだり", answer: ["左边", "左"], hint: "Location Words / 漢字：左 / English: left / ～の" },
  { word: "まえ", answer: ["前面", "前"], hint: "Location Words / 漢字：前 / English: front / ～の" },
  { word: "うしろ", answer: ["后面", "后"], hint: "Location Words / 漢字：後ろ / English: back / ～の" },
  { word: "なか", answer: ["里面", "中间", "中"], hint: "Location Words / 漢字：中 / English: inside / ～の" },
  { word: "うえ", answer: ["上面", "上"], hint: "Location Words / 漢字：上 / English: on / ～の" },
  { word: "した", answer: ["下面", "下"], hint: "Location Words / 漢字：下 / English: under / ～の" },
  { word: "ちかく", answer: ["附近", "旁边", "近处"], hint: "Location Words / 漢字：近く / English: near; nearby / ～の" },
  { word: "となり", answer: ["旁边", "隔壁"], hint: "Location Words / 漢字：隣 / English: next / ～の" },
  { word: "あいだ", answer: ["之间", "中间"], hint: "Location Words / 漢字：間 / English: between A and B" },

  // Nouns
  { word: "たべもの", answer: ["食物", "食物", "吃的"], hint: "Nouns / 漢字：食べ物 / English: food" },
  { word: "のみもの", answer: ["饮料", "喝的"], hint: "Nouns / 漢字：飲み物 / English: drink" },
  { word: "くだもの", answer: ["水果"], hint: "Nouns / 漢字：果物 / English: fruit" },
  { word: "やすみ", answer: ["休息", "休假", "假期", "缺席"], hint: "Nouns / 漢字：休み / English: holiday; day off; absence" },
  { word: "りょこう", answer: ["旅行"], hint: "Nouns / 漢字：旅行 / English: travel" },
  { word: "うみ", answer: ["海", "大海"], hint: "Nouns / 漢字：海 / English: sea" },
  { word: "サーフィン", answer: ["冲浪"], hint: "Nouns / English: surfing" },
  { word: "おみやげ", answer: ["特产", "伴手礼", "纪念品", "土产"], hint: "Nouns / 漢字：お土産 / English: souvenir" },
  { word: "バス", answer: ["公交车", "巴士"], hint: "Nouns / English: bus" },
  { word: "てんき", answer: ["天气"], hint: "Nouns / 漢字：天気 / English: weather" },
  { word: "しゅくだい", answer: ["作业", "功课"], hint: "Nouns / 漢字：宿題 / English: homework" },
  { word: "テスト", answer: ["考试", "测试"], hint: "Nouns / English: test" },
  { word: "たんじょうび", answer: ["生日"], hint: "Nouns / 漢字：誕生日 / English: birthday" },
  { word: "へや", answer: ["房间"], hint: "Nouns / 漢字：部屋 / English: room" },
  { word: "ぼく", answer: ["我"], hint: "Nouns / 漢字：僕 / English: I, used by men" },
  { word: "Lサイズ", answer: ["L号", "大号"], hint: "Nouns / English: size L" },
  { word: "エルサイズ", answer: ["L号", "大号"], hint: "Nouns / English: size L" },

  // い-adjectives
  { word: "あたらしい", answer: ["新的", "新"], hint: "い-adjective / 漢字：新しい / English: new" },
  { word: "ふるい", answer: ["旧的", "旧", "老的"], hint: "い-adjective / 漢字：古い / English: old thing; not used for people" },
  { word: "あつい", answer: ["热", "热的"], hint: "い-adjective / 漢字：暑い / English: hot weather" },
  { word: "さむい", answer: ["冷", "冷的"], hint: "い-adjective / 漢字：寒い / English: cold weather; not used for things" },
  { word: "あつい", answer: ["热", "热的"], hint: "い-adjective / 漢字：熱い / English: hot thing" },
  { word: "いそがしい", answer: ["忙", "忙碌"], hint: "い-adjective / English: busy people/days" },
  { word: "おおきい", answer: ["大的", "大"], hint: "い-adjective / 漢字：大きい / English: large" },
  { word: "ちいさい", answer: ["小的", "小"], hint: "い-adjective / 漢字：小さい / English: small" },
  { word: "おもしろい", answer: ["有趣", "好笑"], hint: "い-adjective / 漢字：面白い / English: interesting; funny" },
  { word: "つまらない", answer: ["无聊", "没意思"], hint: "い-adjective / English: boring" },
  { word: "やさしい", answer: ["简单", "容易", "温柔", "亲切"], hint: "い-adjective / English: easy problem; kind person" },
  { word: "むずかしい", answer: ["难", "困难"], hint: "い-adjective / 漢字：難しい / English: difficult" },
  { word: "かっこいい", answer: ["帅", "酷", "好看"], hint: "い-adjective / English: good-looking; conjugates like いい" },
  { word: "こわい", answer: ["可怕", "吓人", "恐怖"], hint: "い-adjective / 漢字：怖い / English: frightening" },
  { word: "たのしい", answer: ["开心", "快乐", "有趣"], hint: "い-adjective / 漢字：楽しい / English: fun" },
  { word: "やすい", answer: ["便宜", "便宜的"], hint: "い-adjective / 漢字：安い / English: inexpensive; cheap thing" },

  // な-adjectives
  { word: "すき", answer: ["喜欢"], hint: "な-adjective / 漢字：好き / English: fond of; to like / ～が" },
  { word: "きらい", answer: ["讨厌", "不喜欢"], hint: "な-adjective / 漢字：嫌い / English: disgusted with; to dislike / ～が" },
  { word: "だいすき", answer: ["非常喜欢", "最喜欢", "很喜欢"], hint: "な-adjective / 漢字：大好き / English: very fond of; to love / ～が" },
  { word: "だいきらい", answer: ["非常讨厌", "很讨厌"], hint: "な-adjective / 漢字：大嫌い / English: to hate / ～が" },
  { word: "きれい", answer: ["漂亮", "干净", "美丽"], hint: "な-adjective / English: beautiful; clean" },
  { word: "げんき", answer: ["健康", "有精神", "精神好"], hint: "な-adjective / 漢字：元気 / English: healthy; energetic" },
  { word: "しずか", answer: ["安静"], hint: "な-adjective / 漢字：静か / English: quiet" },
  { word: "にぎやか", answer: ["热闹"], hint: "な-adjective / English: lively" },
  { word: "ひま", answer: ["空闲", "有空", "不忙"], hint: "な-adjective / 漢字：暇 / English: not busy; free time" },

  // U-verbs
  { word: "およぐ", answer: ["游泳"], hint: "U-verb / 漢字：泳ぐ / English: to swim" },
  { word: "きく", answer: ["问", "听"], hint: "U-verb / 漢字：聞く / English: to ask / person に" },
  { word: "のる", answer: ["乘坐", "搭乘", "上车"], hint: "U-verb / 漢字：乗る / English: to ride; to board / ～に" },
  { word: "やる", answer: ["做", "进行"], hint: "U-verb / English: to do; to perform / ～を" },

  // Ru-verbs
  { word: "でかける", answer: ["出门", "外出"], hint: "Ru-verb / 漢字：出かける / English: to go out" },

  // Adverbs and Other Expressions
  { word: "いっしょに", answer: ["一起"], hint: "Adverbs and Other Expressions / 漢字：一緒に / English: together" },
  { word: "すごく", answer: ["非常", "很", "极其"], hint: "Adverbs and Other Expressions / English: extremely" },
  { word: "だいじょうぶ", answer: ["没关系", "没事", "不要紧"], hint: "Adverbs and Other Expressions / 漢字：大丈夫 / English: It's okay; everything is under control" },
  { word: "とても", answer: ["非常", "很"], hint: "Adverbs and Other Expressions / English: very" },
  { word: "どんな", answer: ["什么样的", "怎样的"], hint: "Adverbs and Other Expressions / English: what kind of..." },
  { word: "～まい", answer: ["张", "片"], hint: "Adverbs and Other Expressions / English: counter for flat objects / 漢字：～枚" },
];