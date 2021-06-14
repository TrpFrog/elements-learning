const elements = [
    { num: 1, symbol: "H", jp: "水素", en: "Hydrogen", group: "1", period: "1", row: 0, column: 0 },
    { num: 2, symbol: "He", jp: "ヘリウム", en: "Helium", group: "1", period: "18", row: 0, column: 17 },
    { num: 3, symbol: "Li", jp: "リチウム", en: "Lithium", group: "2", period: "1", row: 1, column: 0 },
    { num: 4, symbol: "Be", jp: "ベリリウム", en: "Beryllium", group: "2", period: "2", row: 1, column: 1 },
    { num: 5, symbol: "B", jp: "ホウ素", en: "Boron", group: "2", period: "13", row: 1, column: 12 },
    { num: 6, symbol: "C", jp: "炭素", en: "Carbon", group: "2", period: "14", row: 1, column: 13 },
    { num: 7, symbol: "N", jp: "窒素", en: "Nitrogen", group: "2", period: "15", row: 1, column: 14 },
    { num: 8, symbol: "O", jp: "酸素", en: "Oxygen", group: "2", period: "16", row: 1, column: 15 },
    { num: 9, symbol: "F", jp: "フッ素", en: "Fluorine", group: "2", period: "17", row: 1, column: 16 },
    { num: 10, symbol: "Ne", jp: "ネオン", en: "Neon", group: "2", period: "18", row: 1, column: 17 },
    { num: 11, symbol: "Na", jp: "ナトリウム", en: "Sodium", group: "3", period: "1", row: 2, column: 0 },
    { num: 12, symbol: "Mg", jp: "マグネシウム", en: "Magnesium", group: "3", period: "2", row: 2, column: 1 },
    { num: 13, symbol: "Al", jp: "アルミニウム", en: "Aluminium", group: "3", period: "13", row: 2, column: 12 },
    { num: 14, symbol: "Si", jp: "ケイ素", en: "Silicon", group: "3", period: "14", row: 2, column: 13 },
    { num: 15, symbol: "P", jp: "リン", en: "Phosphorus", group: "3", period: "15", row: 2, column: 14 },
    { num: 16, symbol: "S", jp: "硫黄", en: "Sulfur", group: "3", period: "16", row: 2, column: 15 },
    { num: 17, symbol: "Cl", jp: "塩素", en: "Chlorine", group: "3", period: "17", row: 2, column: 16 },
    { num: 18, symbol: "Ar", jp: "アルゴン", en: "Argon", group: "3", period: "18", row: 2, column: 17 },
    { num: 19, symbol: "K", jp: "カリウム", en: "Potassium", group: "4", period: "1", row: 3, column: 0 },
    { num: 20, symbol: "Ca", jp: "カルシウム", en: "Calcium", group: "4", period: "2", row: 3, column: 1 },
    { num: 21, symbol: "Sc", jp: "スカンジウム", en: "Scandium", group: "4", period: "3", row: 3, column: 2 },
    { num: 22, symbol: "Ti", jp: "チタン", en: "Titanium", group: "4", period: "4", row: 3, column: 3 },
    { num: 23, symbol: "V", jp: "バナジウム", en: "Vanadium", group: "4", period: "5", row: 3, column: 4 },
    { num: 24, symbol: "Cr", jp: "クロム", en: "Chromium", group: "4", period: "6", row: 3, column: 5 },
    { num: 25, symbol: "Mn", jp: "マンガン", en: "Manganese", group: "4", period: "7", row: 3, column: 6 },
    { num: 26, symbol: "Fe", jp: "鉄", en: "Iron", group: "4", period: "8", row: 3, column: 7 },
    { num: 27, symbol: "Co", jp: "コバルト", en: "Cobalt", group: "4", period: "9", row: 3, column: 8 },
    { num: 28, symbol: "Ni", jp: "ニッケル", en: "Nickel", group: "4", period: "10", row: 3, column: 9 },
    { num: 29, symbol: "Cu", jp: "銅", en: "Copper", group: "4", period: "11", row: 3, column: 10 },
    { num: 30, symbol: "Zn", jp: "亜鉛", en: "Zinc", group: "4", period: "12", row: 3, column: 11 },
    { num: 31, symbol: "Ga", jp: "ガリウム", en: "Gallium", group: "4", period: "13", row: 3, column: 12 },
    { num: 32, symbol: "Ge", jp: "ゲルマニウム", en: "Germanium", group: "4", period: "14", row: 3, column: 13 },
    { num: 33, symbol: "As", jp: "ヒ素", en: "Arsenic", group: "4", period: "15", row: 3, column: 14 },
    { num: 34, symbol: "Se", jp: "セレン", en: "Selenium", group: "4", period: "16", row: 3, column: 15 },
    { num: 35, symbol: "Br", jp: "臭素", en: "Bromine", group: "4", period: "17", row: 3, column: 16 },
    { num: 36, symbol: "Kr", jp: "クリプトン", en: "Krypton", group: "4", period: "18", row: 3, column: 17 },
    { num: 37, symbol: "Rb", jp: "ルビジウム", en: "Rubidium", group: "5", period: "1", row: 4, column: 0 },
    { num: 38, symbol: "Sr", jp: "ストロンチウム", en: "Strontium", group: "5", period: "2", row: 4, column: 1 },
    { num: 39, symbol: "Y", jp: "イットリウム", en: "Yttrium", group: "5", period: "3", row: 4, column: 2 },
    { num: 40, symbol: "Zr", jp: "ジルコニウム", en: "Zirconium", group: "5", period: "4", row: 4, column: 3 },
    { num: 41, symbol: "Nb", jp: "ニオブ", en: "Niobium", group: "5", period: "5", row: 4, column: 4 },
    { num: 42, symbol: "Mo", jp: "モリブデン", en: "Molybdenum", group: "5", period: "6", row: 4, column: 5 },
    { num: 43, symbol: "Tc", jp: "テクネチウム", en: "Technetium", group: "5", period: "7", row: 4, column: 6 },
    { num: 44, symbol: "Ru", jp: "ルテニウム", en: "Ruthenium", group: "5", period: "8", row: 4, column: 7 },
    { num: 45, symbol: "Rh", jp: "ロジウム", en: "Rhodium", group: "5", period: "9", row: 4, column: 8 },
    { num: 46, symbol: "Pd", jp: "パラジウム", en: "Palladium", group: "5", period: "10", row: 4, column: 9 },
    { num: 47, symbol: "Ag", jp: "銀", en: "Silver", group: "5", period: "11", row: 4, column: 10 },
    { num: 48, symbol: "Cd", jp: "カドミウム", en: "Cadmium", group: "5", period: "12", row: 4, column: 11 },
    { num: 49, symbol: "In", jp: "インジウム", en: "Indium", group: "5", period: "13", row: 4, column: 12 },
    { num: 50, symbol: "Sn", jp: "スズ", en: "Tin", group: "5", period: "14", row: 4, column: 13 },
    { num: 51, symbol: "Sb", jp: "アンチモン", en: "Antimony", group: "5", period: "15", row: 4, column: 14 },
    { num: 52, symbol: "Te", jp: "テルル", en: "Tellurium", group: "5", period: "16", row: 4, column: 15 },
    { num: 53, symbol: "I", jp: "ヨウ素", en: "Iodine", group: "5", period: "17", row: 4, column: 16 },
    { num: 54, symbol: "Xe", jp: "キセノン", en: "Xenon", group: "5", period: "18", row: 4, column: 17 },
    { num: 55, symbol: "Cs", jp: "セシウム", en: "Caesium", group: "6", period: "1", row: 5, column: 0 },
    { num: 56, symbol: "Ba", jp: "バリウム", en: "Barium", group: "6", period: "2", row: 5, column: 1 },
    { num: 57, symbol: "La", jp: "ランタン", en: "Lanthanum", group: "6", period: "3L", row: 7, column: 2 },
    { num: 58, symbol: "Ce", jp: "セリウム", en: "Cerium", group: "6", period: "3L", row: 7, column: 3 },
    { num: 59, symbol: "Pr", jp: "プラセオジム", en: "Praseodymium", group: "6", period: "3L", row: 7, column: 4 },
    { num: 60, symbol: "Nd", jp: "ネオジム", en: "Neodymium", group: "6", period: "3L", row: 7, column: 5 },
    { num: 61, symbol: "Pm", jp: "プロメチウム", en: "Promethium", group: "6", period: "3L", row: 7, column: 6 },
    { num: 62, symbol: "Sm", jp: "サマリウム", en: "Samarium", group: "6", period: "3L", row: 7, column: 7 },
    { num: 63, symbol: "Eu", jp: "ユウロピウム", en: "Europium", group: "6", period: "3L", row: 7, column: 8 },
    { num: 64, symbol: "Gd", jp: "ガドリニウム", en: "Gadolinium", group: "6", period: "3L", row: 7, column: 9 },
    { num: 65, symbol: "Tb", jp: "テルビウム", en: "Terbium", group: "6", period: "3L", row: 7, column: 10 },
    { num: 66, symbol: "Dy", jp: "ジスプロシウム", en: "Dysprosium", group: "6", period: "3L", row: 7, column: 11 },
    { num: 67, symbol: "Ho", jp: "ホルミウム", en: "Holmium", group: "6", period: "3L", row: 7, column: 12 },
    { num: 68, symbol: "Er", jp: "エルビウム", en: "Erbium", group: "6", period: "3L", row: 7, column: 13 },
    { num: 69, symbol: "Tm", jp: "ツリウム", en: "Thulium", group: "6", period: "3L", row: 7, column: 14 },
    { num: 70, symbol: "Yb", jp: "イッテルビウム", en: "Ytterbium", group: "6", period: "3L", row: 7, column: 15 },
    { num: 71, symbol: "Lu", jp: "ルテチウム", en: "Lutetium", group: "6", period: "3L", row: 7, column: 16 },
    { num: 72, symbol: "Hf", jp: "ハフニウム", en: "Hafnium", group: "6", period: "4", row: 5, column: 3 },
    { num: 73, symbol: "Ta", jp: "タンタル", en: "Tantalum", group: "6", period: "5", row: 5, column: 4 },
    { num: 74, symbol: "W", jp: "タングステン", en: "Tungsten", group: "6", period: "6", row: 5, column: 5 },
    { num: 75, symbol: "Re", jp: "レニウム", en: "Rhenium", group: "6", period: "7", row: 5, column: 6 },
    { num: 76, symbol: "Os", jp: "オスミウム", en: "Osmium", group: "6", period: "8", row: 5, column: 7 },
    { num: 77, symbol: "Ir", jp: "イリジウム", en: "Iridium", group: "6", period: "9", row: 5, column: 8 },
    { num: 78, symbol: "Pt", jp: "白金", en: "Platinum", group: "6", period: "10", row: 5, column: 9 },
    { num: 79, symbol: "Au", jp: "金", en: "Gold", group: "6", period: "11", row: 5, column: 10 },
    { num: 80, symbol: "Hg", jp: "水銀", en: "Mercury", group: "6", period: "12", row: 5, column: 11 },
    { num: 81, symbol: "Tl", jp: "タリウム", en: "Thallium", group: "6", period: "13", row: 5, column: 12 },
    { num: 82, symbol: "Pb", jp: "鉛", en: "Lead", group: "6", period: "14", row: 5, column: 13 },
    { num: 83, symbol: "Bi", jp: "ビスマス", en: "Bismuth", group: "6", period: "15", row: 5, column: 14 },
    { num: 84, symbol: "Po", jp: "ポロニウム", en: "Polonium", group: "6", period: "16", row: 5, column: 15 },
    { num: 85, symbol: "At", jp: "アスタチン", en: "Astatine", group: "6", period: "17", row: 5, column: 16 },
    { num: 86, symbol: "Rn", jp: "ラドン", en: "Radon", group: "6", period: "18", row: 5, column: 17 },
    { num: 87, symbol: "Fr", jp: "フランシウム", en: "Francium", group: "7", period: "1", row: 6, column: 0 },
    { num: 88, symbol: "Ra", jp: "ラジウム", en: "Radium", group: "7", period: "2", row: 6, column: 1 },
    { num: 89, symbol: "Ac", jp: "アクチニウム", en: "Actinium", group: "7", period: "3A", row: 8, column: 2 },
    { num: 90, symbol: "Th", jp: "トリウム", en: "Thorium", group: "7", period: "3A", row: 8, column: 3 },
    { num: 91, symbol: "Pa", jp: "プロトアクチニウム", en: "Protactinium", group: "7", period: "3A", row: 8, column: 4 },
    { num: 92, symbol: "U", jp: "ウラン", en: "Uranium", group: "7", period: "3A", row: 8, column: 5 },
    { num: 93, symbol: "Np", jp: "ネプツニウム", en: "Neptunium", group: "7", period: "3A", row: 8, column: 6 },
    { num: 94, symbol: "Pu", jp: "プルトニウム", en: "Plutonium", group: "7", period: "3A", row: 8, column: 7 },
    { num: 95, symbol: "Am", jp: "アメリシウム", en: "Americium", group: "7", period: "3A", row: 8, column: 8 },
    { num: 96, symbol: "Cm", jp: "キュリウム", en: "Curium", group: "7", period: "3A", row: 8, column: 9 },
    { num: 97, symbol: "Bk", jp: "バークリウム", en: "Berkelium", group: "7", period: "3A", row: 8, column: 10 },
    { num: 98, symbol: "Cf", jp: "カリホルニウム", en: "Californium", group: "7", period: "3A", row: 8, column: 11 },
    { num: 99, symbol: "Es", jp: "アインスタイニウム", en: "Einsteinium", group: "7", period: "3A", row: 8, column: 12 },
    { num: 100, symbol: "Fm", jp: "フェルミウム", en: "Fermium", group: "7", period: "3A", row: 8, column: 13 },
    { num: 101, symbol: "Md", jp: "メンデレビウム", en: "Mendelevium", group: "7", period: "3A", row: 8, column: 14 },
    { num: 102, symbol: "No", jp: "ノーベリウム", en: "Nobelium", group: "7", period: "3A", row: 8, column: 15 },
    { num: 103, symbol: "Lr", jp: "ローレンシウム", en: "Lawrencium", group: "7", period: "3A", row: 8, column: 16 },
    { num: 104, symbol: "Rf", jp: "ラザホージウム", en: "Rutherfordium", group: "7", period: "4", row: 6, column: 3 },
    { num: 105, symbol: "Db", jp: "ドブニウム", en: "Dubnium", group: "7", period: "5", row: 6, column: 4 },
    { num: 106, symbol: "Sg", jp: "シーボーギウム", en: "Seaborgium", group: "7", period: "6", row: 6, column: 5 },
    { num: 107, symbol: "Bh", jp: "ボーリウム", en: "Bohrium", group: "7", period: "7", row: 6, column: 6 },
    { num: 108, symbol: "Hs", jp: "ハッシウム", en: "Hassium", group: "7", period: "8", row: 6, column: 7 },
    { num: 109, symbol: "Mt", jp: "マイトネリウム", en: "Meitnerium", group: "7", period: "9", row: 6, column: 8 },
    { num: 110, symbol: "Ds", jp: "ダームスタチウム", en: "Darmstadtium", group: "7", period: "10", row: 6, column: 9 },
    { num: 111, symbol: "Rg", jp: "レントゲニウム", en: "Roentgenium", group: "7", period: "11", row: 6, column: 10 },
    { num: 112, symbol: "Cn", jp: "コペルニシウム", en: "Copernicium", group: "7", period: "12", row: 6, column: 11 },
    { num: 113, symbol: "Nh", jp: "ニホニウム", en: "Nihonium", group: "7", period: "13", row: 6, column: 12 },
    { num: 114, symbol: "Fl", jp: "フレロビウム", en: "Flerovium", group: "7", period: "14", row: 6, column: 13 },
    { num: 115, symbol: "Mc", jp: "モスコビウム", en: "Moscovium", group: "7", period: "15", row: 6, column: 14 },
    { num: 116, symbol: "Lv", jp: "リバモリウム", en: "Livermorium", group: "7", period: "16", row: 6, column: 15 },
    { num: 117, symbol: "Ts", jp: "テネシン", en: "Tennessine", group: "7", period: "17", row: 6, column: 16 },
    { num: 118, symbol: "Og", jp: "オガネソン", en: "Oganesson", group: "7", period: "18", row: 6, column: 17 }
];