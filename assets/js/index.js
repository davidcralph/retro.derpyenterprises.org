/*
  _____                          ______       _                       _
 |  __ \                        |  ____|     | |                     (_)
 | |  | | ___ _ __ _ __  _   _  | |__   _ __ | |_ ___ _ __ _ __  _ __ _ ___  ___  ___
 | |  | |/ _ \ '__| '_ \| | | | |  __| | '_ \| __/ _ \ '__| '_ \| '__| / __|/ _ \/ __|
 | |__| |  __/ |  | |_) | |_| | | |____| | | | ||  __/ |  | |_) | |  | \__ \  __/\__ \
 |_____/ \___|_|  | .__/ \__, | |______|_| |_|\__\___|_|  | .__/|_|  |_|___/\___||___/
                  | |     __/ |                           | |
                  |_|    |___/                            |_|
MIT License
GitHub: https://github.com/ohlookitsderpy/derpyenterprises.org
*/

const instance = new Typewriter('#text', {
  strings: ["Frontend Developer", "Backend Developer", "Student"],
  autoStart: true,
  loop: true,
  delay: 100
});

// Easter Egg
document.addEventListener('DOMContentLoaded', () => localStorage.removeItem('kirbe'));

new Egg('up, up, down, down, left, right, left, right, b, a', () => {
  if (localStorage.getItem('kirbe') === '1') return alert('kirbe mode already enabled yes');
  localStorage.setItem('kirbe', 1);
  let audio = new Audio('https://cdn.derpyenterprises.org/website/kirbe.ogg');
  audio.play();
  alert('konami code activated, click ok to enable kirbe mode');
  document.body.style.background = "url('https://cdn.derpyenterprises.org/website/kirby.webp')";
  document.body.style.color = 'white';
  document.title = 'kirbe mode enabled';
  document.getElementById('icon').src = 'https://cdn.derpyenterprises.org/website/kirby.gif';
  document.getElementById('titletext').innerHTML = 'Kirby <3';
  document.getElementById('kirby1').innerHTML = "Enjoyed this Easter egg? Star this repo on GitHub <a href='https://github.com/ohlookitsderpy/derpyenterprises.org' target=_blank'>here</a>!";
  document.getElementById('kirby2').innerHTML = 'The page will automatically refresh once the song is over!';
  document.getElementById('content').style.display = 'none';
  audio.onended = () => { location.reload(); };
}).listen();

// Wallpapers
const getCurrentSeason = () => { // https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  let now = new Date();
  let currentYear = now.getFullYear();

  if (now < new Date(currentYear, 2, 1))  return 'winter';
  if (now < new Date(currentYear, 5, 1))  return 'spring';
  if (now < new Date(currentYear, 8, 1))  return 'summer';
  if (now < new Date(currentYear, 11, 1)) return 'autumn';
  return 'winter';
};

switch (getCurrentSeason()) { // https://gist.github.com/neris/5ddff1ec5d421602a01b1c81fa3fc076
  case 'winter':
    document.body.style.background = "url('https://cdn.derpyenterprises.org/website/seasons/winter.webp')";
    break;
  case 'spring':
    document.body.style.background = "url('https://cdn.derpyenterprises.org/website/seasons/spring.webp')";
    break;
  case 'summer':
    document.body.style.background = "url('https://cdn.derpyenterprises.org/website/seasons/summer.webp')";
    break;
  case 'autumn':
    document.body.style.background = "url('https://cdn.derpyenterprises.org/website/seasons/autumn.webp')";
    document.getElementById('titletext').setAttribute('style', 'color: white !important;');
    document.getElementById('text').setAttribute('style', 'color: white !important;');
    break;
}
