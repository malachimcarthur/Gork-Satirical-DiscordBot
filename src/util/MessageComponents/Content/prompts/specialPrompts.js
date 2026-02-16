const { CreateFile } = require("../../CreateFile");

module.exports.specialPrompts = [
  // luthen
  "Calm. Kindness. Kinship. Love. I’ve given up all chance at inner peace. I’ve made my mind a sunless space. I share my dreams with ghosts. I wake up every day to an equation I wrote 15 years ago from which there’s only one conclusion, I’m damned for what I do. My anger, my ego, my unwillingness to yield, my eagerness to fight, they’ve set me on a path from which there is no escape. I yearned to be a savior against injustice without contemplating the cost and by the time I looked down there was no longer any ground beneath my feet. What is my sacrifice? I’m condemned to use the tools of my enemy to defeat them. I burn my decency for someone else’s future. I burn my life to make a sunrise that I know I’ll never see. And the ego that started this fight will never have a mirror or an audience or the light of gratitude. So what do I sacrifice? Everything! You’ll stay with me, Lonni. I need all the heroes I can get.",
  // tyson request
  "Kalkite.\n Synthetic Kalkite.\n Kalkite alternatives.\n Kalkite substitutes.\n I mean, the amount of time spent pondering this grubby little bit of rock is sadly astonishing. Now, we've promised delivery in three years. That delivery is dependent on some version of Ghorman Kalkite to coat the reactor lenses. Now... should we fail to find any alternatives, we will have to control Ghorman with a hand firm enough... to silence... any resistance",
  //miku
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠦⣄⣠⠴⠒⠒⠉⠒⠶⣄⡏⣶\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣠⡞⣡⠀⢠⡀⠀⢦⡀⢹⣷⣼⣄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠁⣿⠟⣷⣿⢦⡈⣇⠀⢻⣿⣈⢷⡄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡇⣶⣻⣀⠘⣿⣀⣹⣿⣰⣼⡟⣯⠟⣿⡄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⣿⡿⠿⠋⠉⠋⠛⢿⣿⣿⡇⠈⢦⡸⣾⣆\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠛⣷⣄⠀⠀⠀⠀⣸⠟⠃⠉⠀⠈⢷⣩⡻⣄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠹⡄⠈⠙⠒⢤⣴⣾⠉⠁⣀⡀⠀⠀⠀⠹⣟⢮⡳⣄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⠀⣿⠀⣀⣴⣿⡏⣀⡬⠟⠁⠈⣆⠀⠀⠀⠘⢧⡉⢿⣧⡀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⣿⠀⢻⣫⠉⣽⡟⠉⡅⢀⣆⠀⢠⣿⠀⠀⠀⠀⠀⠹⣦⡉⠻⢦⡀⡄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢗⣿⢀⡷⠁⣸⡿⠁⠀⠀⢸⣿⠃⣄⣈⡆⠀⠀⠀⠀⠀⠈⠫⣱⠦⣌⡓⢤⣀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⣾⣿⢟⡇⢀⣿⡇⠀⢀⣰⢸⡌⢿⣿⢻⡟⣃⠀⠀⠀⠰⡂⠠⠌⠲⢤⣙⣻⠛⠓⠶⢦⡤⣄⣀⡀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣻⣿⠏⣾⠃⢸⢽⡇⠀⡏⠁⡶⠁⠈⣿⣎⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠒⠶⢤⣀⠈⠻⣄\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⣿⠟⠁⡼⠀⣿⠀⡟⢸⡇⢰⠃⢸⠇⠀⠀⢹⣷⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⣄⠘⣧\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣾⠟⠋⠀⣠⡼⢁⣼⣿⢠⣧⢾⡇⠘⡀⠸⡇⠀⠀⠘⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡉⠚⢧⠹⣷\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡴⠖⢋⣽⡿⠥⠖⠚⠉⢁⣴⣾⣿⠃⢈⠀⢸⠇⠀⠁⠀⢳⡀⠀⠀⣿⣿⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠀⠀⠘⢧⡇\n" +
    "⠀⠀⠀⠀⠀⠀⣀⣤⣾⠛⠁⣠⡼⠋⠁⠀⢀⣀⢀⣴⣿⣿⠟⠁⠀⠀⣷⠋⠂⠀⠀⠀⠀⠳⡀⠀⢹⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⠀⠀⢸⠧\n" +
    "⠀⠀⢀⡠⠖⠋⣩⠶⢋⡴⠋⠁⠀⠀⠿⣭⡿⣿⠿⠟⢉⣷⣄⠀⢀⣼⣿⡄⠀⠀⠀⠀⠀⢀⣹⠄⠀⢹⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠐⡧\n" +
    "⠀⠀⣸⣄⣴⣛⣡⠞⠋⠀⠀⠀⠀⠀⠀⠀⣭⣤⣴⣾⣿⣿⣿⣷⣿⣿⣿⣷⣤⣴⣶⣾⣿⣿⣿⣆⠀⢈⣿⣷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢑\n" +
    "⠀⠰⣏⡿⢫⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣹⠿⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⢀\n" +
    "⠀⢀⣿⡵⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀⠀⠀⠀⢀⠎\n" +
    "⢠⢸⡟⠹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡧⠤⢙⠛⠋⠛⠛⠿⠿⢿⡟⠛⠉⠁⠀⠀⠀⠀⠀⠠⠐⠀⠀⠀⠀⠀⠀⠀⢀⡼⢀⠀⠄⠀⠀⡀⡀⠀⠀\n" +
    "⢸⣎⡇⠀⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⡀⢰⡅⠀⠀⠀⠀⠀⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡿⢋⠞⠀⢠⣮⠎\n" +
    "⠀⢿⣷⠀⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣶⣿⣇⠀⠀⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠋⣠⠋⢀⣴⠟⠁\n" +
    "⠀⠘⣏⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⢹⣻⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⢡⠞⣁⣴⠟⠁\n" +
    "⠀⠀⠸⡄⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⢄⡀⠀⠀⠘⣿⣿⡯⢶⢧⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⢁⣴⠿⠚⠉\n" +
    "⠀⠀⠀⠹⡄⠙⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠈⢿⣿⡯⣝⣾⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⡯⢖⡿⠉\n" +
    "⠀⠀⠀⠀⠹⡄⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣿⣿⣽⣿⡇⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⢴⣶⠿⠋⠁⣰⠋⠀\n" +
    "⠀⠀⠀⠀⠀⠘⢦⡀⠀⠙⠢⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣻⢿⣿⡍⠑⠒⠒⣒⣾⣷⠿⠛⣋⡵⠚⠁⠀⣠⠞⠁\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⡀⠀⠙⠓⠒⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣷⡚⠛⠉⠁⠀⠀⠐⠋⢀⡀⢀⡤⠞⠁\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠋⠛⠛⣹⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠛⠋⠉\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣻⣿⣿⣿⣿⣇\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⢿⣿⣿⣿\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡏⠸⣿⣿⣿\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠁⠀⢹⣿⣿\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡏⠀⠀⠈⣿⣿⡆\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⠀⠀⢼⣿⣷⡀\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠀⠀⠀⠀⣼⣿⣿⡇\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⠀⠀⠀⢀⣿⣿⣿⡇\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀⣾⣿⣿⣿⣧\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣷⠀⠀⠸⣿⣿⣿⠟\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣻⡇⠀⠀⠈⠋⠉\n" +
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣟⠟⠀",
  // Larry
  {
    content: "Hey I know a funny man named larry",
    files: [CreateFile("PromptFiles", "larry.mp4")],
  },
  // JFK
  "Wasn't that the guy they shot for plot reasons https://www.youtube.com/watch?v=v2DxBsWk3w8",
  // MASSIVE
  {
    content: "you know what else is massive",
    files: [CreateFile("PromptFiles", "massive.gif")],
  },
  // Gabe FR
  "ON MY MOMMA THATS TRUE :100:",
  // Liberal
  "DID I HEAR A SOY REFERENCE????????",
  //HomeLander drinking milk
  "https://tenor.com/view/homelander-milk-antony-starr-gif-2606354610122003363",
  // Vapeoreon
  "that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human , and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide **, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human . Ungodly defense stat+high HP pool+Acid Armor means it can take  all day, all shapes and sizes and still come for more",
  // Angry Birds
  ":red_circle: https://cdn.discordapp.com/attachments/986773996014043147/989917776879697990/amgry_birds.mp4?ex=6883a545&is=688253c5&hm=d5321e64e303873f5cf140511d2a6c9d811563471ea8885a42827a836525bf3c&",
  // Dave and Busters
  "https://cdn.discordapp.com/attachments/986773996014043147/989560481071124580/trim.F93CB43A-24C8-443E-B89F-583E55D93650.mov?ex=6883aa03&is=68825883&hm=cb62003f62c6c7bd907ddf027afa5a44c70f4df213c15a42ab6549472894a1c0&",
  // Among Us
  {
    content: "Sussy Baka",
    files: [CreateFile("PromptFiles", "hella-sussy.gif")],
  },
  // Stanford Pines
  {
    content: "BUTTER",
    files: [CreateFile("PromptFiles", "stan-grunkle-stan.gif")],
  },
  // Power Outage
  "HAHAHAHAHAHAHAHA POOOOOOR 😂🫵",
  // Conquest
  "All the other Viltrumites are scared of me. Noone talks to me. Noone wants to be my friend-- They think I am unstable. They send me from planet to planet committing atrocities in their name. And as I get better at it, they fear me more and more. I am a victim of my own success. Conquest. I don't even get a real name, only a purpose. I am capable of so much more and noone sees it. Some days I feel so alone I could cry, but I don't. I never do. Because what would be the point? Not a single person in the entire universe would care. Take it to your grave.",
  // JD Pon Don
  '"May Allah awaken the people and help them to see the evil-doings of Israel and the United States." - Donald J Trump',
  // Horse Race Tests
  "https://tenor.com/view/horse-race-tests-jovial-merryment-yellow-gif-12096895532296602711",
  // Bill Clinton
  "I Did Not Have Sexual Relations With That Woman",
  // Evan Hate
  "https://tenor.com/view/hate-hate-drive-activated-activate-mad-hater-gif-23479256",
  // Brazil
  "https://cdn.discordapp.com/attachments/1394019812015079495/1438374710411923487/IMG_3403.png?ex=6916a656&is=691554d6&hm=9986c81b45dc2cf9648960193764bb8f2b8b2612bffdc48f4bcb5a95da101cfe&",
  // A succulent Chinese meal
  "Mister, you just assured me that I could speak. Look, I'm under what? Gentlemen, this is democracy manifest. Have a look at the headlock here, see that chap over there? he- GET YOUR HAND OFF MY PENIS! This is the bloke who got me on the penis people. Why did you do this to me, for what reason, what is the charge? Eating a meal? A succulent chinese meal? Oh, that's a nice headlock sir, oh, ah yes, I see that you know your judo well. Good one. And you sir, are you waiting to receive my limp penis? How dare – get your hands off me! Ta-ta, and farewell.",
];

module.exports.triggers = [
  "what do i sacrifice",
  "love tyson",
  "miku",
  "larry",
  "jfk",
  "massive",
  "gabe is a furry",
  "liberal",
  "kinky",
  "vaporeon",
  "angry bird",
  "dave and busters",
  "sus",
  "my exwife still misses me",
  "lost power",
  "i am so lonely",
  "trump",
  "jovial merryment",
  "bill clinton",
  "hate evan",
  "brazil",
  "succulent",
];
