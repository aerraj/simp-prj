let images = ["https://naruto.fandom.com/wiki/Tsunade?file=Tsunade_challenges_A_to_arm_wrestling.png", "https://naruto.fandom.com/wiki/Tsunade?file=Tsunade_and_Shizune_oversee_Team_7.png", "https://naruto.fandom.com/wiki/Tsunade?file=Tsunade_full.png","https://naruto.fandom.com/wiki/Tsunade?file=Tsunade_infobox2.png"
];

const imgs=document.getElementsByTagName('img');

for (let i=0; i<imgs.length; i++) {
  const randomIndex = Math.floor(Math.random() * images.length);
  imgs[i].src = images[randomIndex];
}