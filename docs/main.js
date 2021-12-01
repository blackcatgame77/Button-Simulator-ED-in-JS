var scene = 'spawnB'
var cash = 0;
var multi = 0;
var rebirth = 0;
var stone = 0;
var whiteGems = 0;
var crystal = 0;
var upgrades = false;
var stats = false;
var gems = 0;
var width = window.screen.width;
var height = window.screen.height;
var scale = ((1920 / width) / (1080 / height)) / 2;
var time = 0;

function saveGame() {
  localStorage.setItem('Cash', cash);
  localStorage.setItem('Multiplier', multi);
  localStorage.setItem('Rebirth', rebirth);
  localStorage.setItem('Stone', stone);
  localStorage.setItem('White gems', whiteGems);
  localStorage.setItem('Crystal', crystal);
  localStorage.setItem('Gems', gems);
}

function loadGame() {
  cash = parseInt(localStorage.getItem('Cash')) || 0;
  multi = parseInt(localStorage.getItem('Multiplier')) || 0;
  rebirth = parseInt(localStorage.getItem('Rebirth')) || 0;
  stone = parseInt(localStorage.getItem('Stone')) || 0;
  whiteGems = parseInt(localStorage.getItem('White gems')) || 0;
  crystal = parseInt(localStorage.getItem('Crystal')) || 0;
  gems = parseInt(localStorage.getItem('Gems')) || 0;
}

function drawAll() {
  if (scene === 'spawnB') {
    drawSceneSpawn();
    scene = 'spawn';
  }
  if (scene === 'cavesB') {
    drawSceneCaves();
    scene = 'caves';
  }
  if (scene === 'crystal beneathsB') {
    drawSceneCrystalBeneaths();
    scene = 'crystal beneaths';
  }
  if (scene === 'spawn') {
    drawSceneSpawn();
  }
  if (scene === 'caves') {
    drawSceneCaves();
  }
  if (scene === 'crystal beneaths') {
    drawSceneCrystalBeneaths();
  }
}

function drawStuff() {
  let cashE = cash;
  let multiE = multi;
  let rebirthE = rebirth;
  let gemsE = gems;
  //notation maker
  {
    //cash notation
    {
      if (cash < 1e+3) {
        cashE = (cash).toFixed(1);
      }
      if (cash >= 1e+3) {
        cashE = (cash / 1e+3).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      if (cash >= 1e+6) {
        cashE = (cash / 1e+6).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (cash >= 1e+9) {
        cashE = (cash / 1e+9).toFixed(1).replace(/\.0$/, '') + 'B';
      }
      if (cash >= 1e+12) {
        cashE = (cash / 1e+12).toFixed(1).replace(/\.0$/, '') + 'T';
      }
      if (cash >= 1e+15) {
        cashE = (cash / 1e+15).toFixed(1).replace(/\.0$/, '') + 'Qd';
      }
      if (cash >= 1e+18) {
        cashE = (cash / 1e+18).toFixed(1).replace(/\.0$/, '') + 'Qn';
      }
      if (cash >= 1e+21) {
        cashE = (cash / 1e+21).toFixed(1).replace(/\.0$/, '') + 'Sx';
      }
      if (cash >= 1e+24) {
        cashE = (cash / 1e+24).toFixed(1).replace(/\.0$/, '') + 'Sp';
      }
      if (cash >= 1e+27) {
        cashE = (cash / 1e+27).toFixed(1).replace(/\.0$/, '') + 'Oc';
      }
      if (cash >= 1e+30) {
        cashE = (cash / 1e+30).toFixed(1).replace(/\.0$/, '') + 'No';
      }
      if (cash >= 1e+33) {
        cashE = (cash / 1e+33).toFixed(1).replace(/\.0$/, '') + 'De';
      }
      if (cash >= 1e+36) {
        cashE = (cash / 1e+36).toFixed(1).replace(/\.0$/, '') + 'UDe';
      }
      if (cash >= 1e+39) {
        cashE = (cash / 1e+39).toFixed(1).replace(/\.0$/, '') + 'DDe';
      }
      if (cash >= 1e+42) {
        cashE = (cash / 1e+42).toFixed(1).replace(/\.0$/, '') + 'TDe';
      }
      if (cash >= 1e+45) {
        cashE = (cash / 1e+45).toFixed(1).replace(/\.0$/, '') + 'QdDe';
      }
      if (cash >= 1e+48) {
        cashE = (cash / 1e+48).toFixed(1).replace(/\.0$/, '') + 'QnDe';
      }
      if (cash >= 1e+51) {
        cashE = (cash / 1e+51).toFixed(1).replace(/\.0$/, '') + 'SxDe';
      }
      if (cash >= 1e+54) {
        cashE = (cash / 1e+54).toFixed(1).replace(/\.0$/, '') + 'SpDe';
      }
      if (cash >= 1e+57) {
        cashE = (cash / 1e+57).toFixed(1).replace(/\.0$/, '') + 'ODe';
      }
      if (cash >= 1e60) {
        cashE = (cash / 1e+60).toFixed(1).replace(/\.0$/, '') + 'NoDe';
      }
      if (cash >= 1e+63) {
        cashE = (cash / 1e+63).toFixed(1).replace(/\.0$/, '') + 'Vt';
      }
      if (cash >= 1e+66) {
        cashE = (cash / 1e+66).toFixed(1).replace(/\.0$/, '') + 'UVt';
      }
      if (cash >= 1e+69) {
        cashE = (cash / 1e+69).toFixed(1).replace(/\.0$/, '') + 'DVt';
      }
      if (cash >= 1e+72) {
        cashE = (cash / 1e+72).toFixed(1).replace(/\.0$/, '') + 'TVt';
      }
      if (cash >= 1e+75) {
        cashE = (cash / 1e+75).toFixed(1).replace(/\.0$/, '') + 'QdVt';
      }
      if (cash >= 1e+78) {
        cashE = (cash / 1e+78).toFixed(1).replace(/\.0$/, '') + 'QnVt';
      }
      if (cash >= 1e+81) {
        cashE = (cash / 1e+81).toFixed(1).replace(/\.0$/, '') + 'SxVt';
      }
      if (cash >= 1e+84) {
        cashE = (cash / 1e+84).toFixed(1).replace(/\.0$/, '') + 'SpVt';
      }
      if (cash >= 1e+87) {
        cashE = (cash / 1e+87).toFixed(1).replace(/\.0$/, '') + 'OVt';
      }
      if (cash >= 1e90) {
        cashE = (cash / 1e+90).toFixed(1).replace(/\.0$/, '') + 'NoVt';
      }
      if (cash >= 1e+93) {
        cashE = (cash / 1e+93).toFixed(1).replace(/\.0$/, '') + 'Tg';
      }
      if (cash >= 1e+96) {
        cashE = (cash / 1e+96).toFixed(1).replace(/\.0$/, '') + 'UTg';
      }
      if (cash >= 1e+99) {
        cashE = (cash / 1e+99).toFixed(1).replace(/\.0$/, '') + 'DTg';
      }
      if (cash >= 1e+102) {
        cashE = (cash / 1e+102).toFixed(1).replace(/\.0$/, '') + 'TTg';
      }
      if (cash >= 1e+105) {
        cashE = (cash / 1e+105).toFixed(1).replace(/\.0$/, '') + 'QdTg';
      }
      if (cash >= 1e+108) {
        cashE = (cash / 1e+108).toFixed(1).replace(/\.0$/, '') + 'QnTg';
      }
      if (cash >= 1e+111) {
        cashE = (cash / 1e+111).toFixed(1).replace(/\.0$/, '') + 'SxTg';
      }
      if (cash >= 1e+114) {
        cashE = (cash / 1e+114).toFixed(1).replace(/\.0$/, '') + 'SpTg';
      }
      if (cash >= 1e+117) {
        cashE = (cash / 1e+117).toFixed(1).replace(/\.0$/, '') + 'OTg';
      }
      if (cash >= 1e120) {
        cashE = (cash / 1e+120).toFixed(1).replace(/\.0$/, '') + 'NoTg';
      }
      if (cash >= 1e+123) {
        cashE = (cash / 1e+123).toFixed(1).replace(/\.0$/, '') + 'Qdg';
      }
    }
    //multi notation
    {
      if (multi < 1e+3) {
        multiE = (multi).toFixed(1);
      }
      if (multi >= 1e+3) {
        multiE = (multi / 1e+3).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      if (multi >= 1e+6) {
        multiE = (multi / 1e+6).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (multi >= 1e+9) {
        multiE = (multi / 1e+9).toFixed(1).replace(/\.0$/, '') + 'B';
      }
      if (multi >= 1e+12) {
        multiE = (multi / 1e+12).toFixed(1).replace(/\.0$/, '') + 'T';
      }
      if (multi >= 1e+15) {
        multiE = (multi / 1e+15).toFixed(1).replace(/\.0$/, '') + 'Qd';
      }
      if (multi >= 1e+18) {
        multiE = (multi / 1e+18).toFixed(1).replace(/\.0$/, '') + 'Qn';
      }
      if (multi >= 1e+21) {
        multiE = (multi / 1e+21).toFixed(1).replace(/\.0$/, '') + 'Sx';
      }
      if (multi >= 1e+24) {
        multiE = (multi / 1e+24).toFixed(1).replace(/\.0$/, '') + 'Sp';
      }
      if (multi >= 1e+27) {
        multiE = (multi / 1e+27).toFixed(1).replace(/\.0$/, '') + 'Oc';
      }
      if (multi >= 1e+30) {
        multiE = (multi / 1e+30).toFixed(1).replace(/\.0$/, '') + 'No';
      }
      if (multi >= 1e+33) {
        multiE = (multi / 1e+33).toFixed(1).replace(/\.0$/, '') + 'De';
      }
      if (multi >= 1e+36) {
        multiE = (multi / 1e+36).toFixed(1).replace(/\.0$/, '') + 'UDe';
      }
      if (multi >= 1e+39) {
        multiE = (multi / 1e+39).toFixed(1).replace(/\.0$/, '') + 'DDe';
      }
      if (multi >= 1e+42) {
        multiE = (multi / 1e+42).toFixed(1).replace(/\.0$/, '') + 'TDe';
      }
      if (multi >= 1e+45) {
        multiE = (multi / 1e+45).toFixed(1).replace(/\.0$/, '') + 'QdDe';
      }
      if (multi >= 1e+48) {
        multiE = (multi / 1e+48).toFixed(1).replace(/\.0$/, '') + 'QnDe';
      }
      if (multi >= 1e+51) {
        multiE = (multi / 1e+51).toFixed(1).replace(/\.0$/, '') + 'SxDe';
      }
      if (multi >= 1e+54) {
        multiE = (multi / 1e+54).toFixed(1).replace(/\.0$/, '') + 'SpDe';
      }
      if (multi >= 1e+57) {
        multiE = (multi / 1e+57).toFixed(1).replace(/\.0$/, '') + 'ODe';
      }
      if (multi >= 1e60) {
        multiE = (multi / 1e+60).toFixed(1).replace(/\.0$/, '') + 'NoDe';
      }
      if (multi >= 1e+63) {
        multiE = (multi / 1e+63).toFixed(1).replace(/\.0$/, '') + 'Vt';
      }
      if (multi >= 1e+66) {
        multiE = (multi / 1e+66).toFixed(1).replace(/\.0$/, '') + 'UVt';
      }
      if (multi >= 1e+69) {
        multiE = (multi / 1e+69).toFixed(1).replace(/\.0$/, '') + 'DVt';
      }
      if (multi >= 1e+72) {
        multiE = (multi / 1e+72).toFixed(1).replace(/\.0$/, '') + 'TVt';
      }
      if (multi >= 1e+75) {
        multiE = (multi / 1e+75).toFixed(1).replace(/\.0$/, '') + 'QdVt';
      }
      if (multi >= 1e+78) {
        multiE = (multi / 1e+78).toFixed(1).replace(/\.0$/, '') + 'QnVt';
      }
      if (multi >= 1e+81) {
        multiE = (multi / 1e+81).toFixed(1).replace(/\.0$/, '') + 'SxVt';
      }
      if (multi >= 1e+84) {
        multiE = (multi / 1e+84).toFixed(1).replace(/\.0$/, '') + 'SpVt';
      }
      if (multi >= 1e+87) {
        multiE = (multi / 1e+87).toFixed(1).replace(/\.0$/, '') + 'OVt';
      }
      if (multi >= 1e90) {
        multiE = (multi / 1e+90).toFixed(1).replace(/\.0$/, '') + 'NoVt';
      }
      if (multi >= 1e+93) {
        multiE = (multi / 1e+93).toFixed(1).replace(/\.0$/, '') + 'Tg';
      }
      if (multi >= 1e+96) {
        multiE = (multi / 1e+96).toFixed(1).replace(/\.0$/, '') + 'UTg';
      }
      if (multi >= 1e+99) {
        multiE = (multi / 1e+99).toFixed(1).replace(/\.0$/, '') + 'DTg';
      }
      if (multi >= 1e+102) {
        multiE = (multi / 1e+102).toFixed(1).replace(/\.0$/, '') + 'TTg';
      }
      if (multi >= 1e+105) {
        multiE = (multi / 1e+105).toFixed(1).replace(/\.0$/, '') + 'QdTg';
      }
      if (multi >= 1e+108) {
        multiE = (multi / 1e+108).toFixed(1).replace(/\.0$/, '') + 'QnTg';
      }
      if (multi >= 1e+111) {
        multiE = (multi / 1e+111).toFixed(1).replace(/\.0$/, '') + 'SxTg';
      }
      if (multi >= 1e+114) {
        multiE = (multi / 1e+114).toFixed(1).replace(/\.0$/, '') + 'SpTg';
      }
      if (multi >= 1e+117) {
        multiE = (multi / 1e+117).toFixed(1).replace(/\.0$/, '') + 'OTg';
      }
      if (multi >= 1e120) {
        multiE = (multi / 1e+120).toFixed(1).replace(/\.0$/, '') + 'NoTg';
      }
      if (multi >= 1e+123) {
        multiE = (multi / 1e+123).toFixed(1).replace(/\.0$/, '') + 'Qdg';
      }
    }
    //rebirth notation
    {
      if (rebirth < 1e+3) {
        rebirthE = (rebirth).toFixed(1);
      }
      if (rebirth >= 1e+3) {
        rebirthE = (rebirth / 1e+3).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      if (rebirth >= 1e+6) {
        rebirthE = (rebirth / 1e+6).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (rebirth >= 1e+9) {
        rebirthE = (rebirth / 1e+9).toFixed(1).replace(/\.0$/, '') + 'B';
      }
      if (rebirth >= 1e+12) {
        rebirthE = (rebirth / 1e+12).toFixed(1).replace(/\.0$/, '') + 'T';
      }
      if (rebirth >= 1e+15) {
        rebirthE = (rebirth / 1e+15).toFixed(1).replace(/\.0$/, '') + 'Qd';
      }
      if (rebirth >= 1e+18) {
        rebirthE = (rebirth / 1e+18).toFixed(1).replace(/\.0$/, '') + 'Qn';
      }
      if (rebirth >= 1e+21) {
        rebirthE = (rebirth / 1e+21).toFixed(1).replace(/\.0$/, '') + 'Sx';
      }
      if (rebirth >= 1e+24) {
        rebirthE = (rebirth / 1e+24).toFixed(1).replace(/\.0$/, '') + 'Sp';
      }
      if (rebirth >= 1e+27) {
        rebirthE = (rebirth / 1e+27).toFixed(1).replace(/\.0$/, '') + 'Oc';
      }
      if (rebirth >= 1e+30) {
        rebirthE = (rebirth / 1e+30).toFixed(1).replace(/\.0$/, '') + 'No';
      }
      if (rebirth >= 1e+33) {
        rebirthE = (rebirth / 1e+33).toFixed(1).replace(/\.0$/, '') + 'De';
      }
      if (rebirth >= 1e+36) {
        rebirthE = (rebirth / 1e+36).toFixed(1).replace(/\.0$/, '') + 'UDe';
      }
      if (rebirth >= 1e+39) {
        rebirthE = (rebirth / 1e+39).toFixed(1).replace(/\.0$/, '') + 'DDe';
      }
      if (rebirth >= 1e+42) {
        rebirthE = (rebirth / 1e+42).toFixed(1).replace(/\.0$/, '') + 'TDe';
      }
      if (rebirth >= 1e+45) {
        rebirthE = (rebirth / 1e+45).toFixed(1).replace(/\.0$/, '') + 'QdDe';
      }
      if (rebirth >= 1e+48) {
        rebirthE = (rebirth / 1e+48).toFixed(1).replace(/\.0$/, '') + 'QnDe';
      }
      if (rebirth >= 1e+51) {
        rebirthE = (rebirth / 1e+51).toFixed(1).replace(/\.0$/, '') + 'SxDe';
      }
      if (rebirth >= 1e+54) {
        rebirthE = (rebirth / 1e+54).toFixed(1).replace(/\.0$/, '') + 'SpDe';
      }
      if (rebirth >= 1e+57) {
        rebirthE = (rebirth / 1e+57).toFixed(1).replace(/\.0$/, '') + 'ODe';
      }
      if (rebirth >= 1e60) {
        rebirthE = (rebirth / 1e+60).toFixed(1).replace(/\.0$/, '') + 'NoDe';
      }
      if (rebirth >= 1e+63) {
        rebirthE = (rebirth / 1e+63).toFixed(1).replace(/\.0$/, '') + 'Vt';
      }
      if (rebirth >= 1e+66) {
        rebirthE = (rebirth / 1e+66).toFixed(1).replace(/\.0$/, '') + 'UVt';
      }
      if (rebirth >= 1e+69) {
        rebirthE = (rebirth / 1e+69).toFixed(1).replace(/\.0$/, '') + 'DVt';
      }
      if (rebirth >= 1e+72) {
        rebirthE = (rebirth / 1e+72).toFixed(1).replace(/\.0$/, '') + 'TVt';
      }
      if (rebirth >= 1e+75) {
        rebirthE = (rebirth / 1e+75).toFixed(1).replace(/\.0$/, '') + 'QdVt';
      }
      if (rebirth >= 1e+78) {
        rebirthE = (rebirth / 1e+78).toFixed(1).replace(/\.0$/, '') + 'QnVt';
      }
      if (rebirth >= 1e+81) {
        rebirthE = (rebirth / 1e+81).toFixed(1).replace(/\.0$/, '') + 'SxVt';
      }
      if (rebirth >= 1e+84) {
        rebirthE = (rebirth / 1e+84).toFixed(1).replace(/\.0$/, '') + 'SpVt';
      }
      if (rebirth >= 1e+87) {
        rebirthE = (rebirth / 1e+87).toFixed(1).replace(/\.0$/, '') + 'OVt';
      }
      if (rebirth >= 1e90) {
        rebirthE = (rebirth / 1e+90).toFixed(1).replace(/\.0$/, '') + 'NoVt';
      }
      if (rebirth >= 1e+93) {
        rebirthE = (rebirth / 1e+93).toFixed(1).replace(/\.0$/, '') + 'Tg';
      }
      if (rebirth >= 1e+96) {
        rebirthE = (rebirth / 1e+96).toFixed(1).replace(/\.0$/, '') + 'UTg';
      }
      if (rebirth >= 1e+99) {
        rebirthE = (rebirth / 1e+99).toFixed(1).replace(/\.0$/, '') + 'DTg';
      }
      if (rebirth >= 1e+102) {
        rebirthE = (rebirth / 1e+102).toFixed(1).replace(/\.0$/, '') + 'TTg';
      }
      if (rebirth >= 1e+105) {
        rebirthE = (rebirth / 1e+105).toFixed(1).replace(/\.0$/, '') + 'QdTg';
      }
      if (rebirth >= 1e+108) {
        rebirthE = (rebirth / 1e+108).toFixed(1).replace(/\.0$/, '') + 'QnTg';
      }
      if (rebirth >= 1e+111) {
        rebirthE = (rebirth / 1e+111).toFixed(1).replace(/\.0$/, '') + 'SxTg';
      }
      if (rebirth >= 1e+114) {
        rebirthE = (rebirth / 1e+114).toFixed(1).replace(/\.0$/, '') + 'SpTg';
      }
      if (rebirth >= 1e+117) {
        rebirthE = (rebirth / 1e+117).toFixed(1).replace(/\.0$/, '') + 'OTg';
      }
      if (rebirth >= 1e120) {
        rebirthE = (rebirth / 1e+120).toFixed(1).replace(/\.0$/, '') + 'NoTg';
      }
      if (rebirth >= 1e+123) {
        rebirthE = (rebirth / 1e+123).toFixed(1).replace(/\.0$/, '') + 'Qdg';
      }
    }
  }
  //menu bars
  {
    context.strokeStyle = 'black';
    context.strokeRect(175 * scale, 10 * scale, 400 * scale, 100 * scale);
    context.strokeRect(750 * scale, 10 * scale, 400 * scale, 100 * scale);
    context.strokeRect(1325 * scale, 10 * scale, 400 * scale, 100 * scale);
    context.fillStyle = '#00ff00';
    context.font = 40 * scale + 'px Arial';
    context.fillText("cash:", 250 * scale, 75 * scale, 10000, 10000);
    context.fillText(cashE, 350 * scale, 75 * scale, 10000, 10000);
    context.fillStyle = '#ff0000';
    context.fillText("multi:", 800 * scale, 75 * scale, 10000, 10000);
    context.fillText(multiE, 900 * scale, 75 * scale, 10000, 10000);
    context.fillStyle = '#008cff'
    context.fillText("rebirths:", 1375 * scale, 75 * scale, 10000, 10000);
    context.fillText(rebirthE, 1525 * scale, 75 * scale, 10000, 10000);
    context.strokeRect(30 * scale, 465 * scale, 200 * scale, 100 * scale);
    context.strokeRect(30 * scale, 615 * scale, 200 * scale, 100 * scale);
    context.fillStyle = 'black';
    context.font = 30 * scale + 'px Arial';
    context.fillText("updgrades", 50 * scale, 530 * scale, 10000, 10000);
    context.fillText("stats", 100 * scale, 680 * scale, 10000, 10000);
  }
}

function drawEssentials() {
  context.strokeRect(300 * scale, 200 * scale, 1320 * scale, 725 * scale);
  context.font = 40 * scale + 'px Arial';
  context.fillText(scene, 780 * scale, 175 * scale, 10000, 10000);
  context.strokeRect(1675 * scale, 900 * scale, 200 * scale, 100 * scale);
  context.strokeRect(1675 * scale, 775 * scale, 200 * scale, 100 * scale);
  context.font = 35 * scale + 'px Arial';
  context.fillText('save', 1700 * scale, 925 * scale, 1000, 1000);
}

function multiGiver(event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  //row Sm1
  {
    if (scene === 'spawn' && cash >= 15 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
      if (rebirth < 1) {
        multi += 1;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 50 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 325 * scale && mouseY <= 400 * scale) {
      if (rebirth < 1) {
        multi += 3;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 3 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 100 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 425 * scale && mouseY <= 500 * scale) {
      if (rebirth < 1) {
        multi += 5;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 500 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 525 * scale && mouseY <= 600 * scale) {
      if (rebirth < 1) {
        multi += 10;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 10 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+4 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 625 * scale && mouseY <= 700 * scale) {
      if (rebirth < 1) {
        multi += 45;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 45 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 7.5e+4 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 725 * scale && mouseY <= 800 * scale) {
      if (rebirth < 1) {
        multi += 100;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 100 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+6 && mouseX >= 325 * scale && mouseX <= 400 * scale && mouseY >= 825 * scale && mouseY <= 900 * scale) {
      if (rebirth < 1) {
        multi += 300;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 300 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Sm2
  {
    if (scene === 'spawn' && cash >= 3e+7 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
      if (rebirth < 1) {
        multi += 500;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 500 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+8 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 325 * scale && mouseY <= 400 * scale) {
      if (rebirth < 1) {
        multi += 1000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1000 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+9 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 425 * scale && mouseY <= 500 * scale) {
      if (rebirth < 1) {
        multi += 5000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5000 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 5e+9 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 525 * scale && mouseY <= 600 * scale) {
      if (rebirth < 1) {
        multi += 20000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 20000 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 3e+10 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 625 * scale && mouseY <= 700 * scale) {
      if (rebirth < 1) {
        multi += 60000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 60000 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 2e+11 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 725 * scale && mouseY <= 800 * scale) {
      if (rebirth < 1) {
        multi += 120000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 120000 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 7e+11 && mouseX >= 425 * scale && mouseX <= 500 * scale && mouseY >= 825 * scale && mouseY <= 900 * scale) {
      if (rebirth < 1) {
        multi += 300000;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 300000 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Sm3
  {
    if (scene === 'spawn' && cash >= 3e+12 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
      if (rebirth < 1) {
        multi += 1e+6;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+6 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+13 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 325 * scale && mouseY <= 400 * scale) {
      if (rebirth < 1) {
        multi += 4e+6;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 4e+6 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 5e+13 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 425 * scale && mouseY <= 500 * scale) {
      if (rebirth < 1) {
        multi += 1e+7;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+7 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1.2e+14 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 525 * scale && mouseY <= 600 * scale) {
      if (rebirth < 1) {
        multi += 5e+7;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5e+7 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 4e+14 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 625 * scale && mouseY <= 700 * scale) {
      if (rebirth < 1) {
        multi += 8e+7;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 8e+7 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+15 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 725 * scale && mouseY <= 800 * scale) {
      if (rebirth < 1) {
        multi += 2e+8;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 2e+8 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 5e+15 && mouseX >= 525 * scale && mouseX <= 600 * scale && mouseY >= 825 * scale && mouseY <= 900 * scale) {
      if (rebirth < 1) {
        multi += 1e+9;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+9 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Sm4
  {
    if (scene === 'spawn' && cash >= 2.5e+16 && mouseX >= 625 * scale && mouseX <= 700 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
      if (rebirth < 1) {
        multi += 4e+9;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 4e+9 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'spawn' && cash >= 1e+17 && mouseX >= 625 * scale && mouseX <= 700 * scale && mouseY >= 325 * scale && mouseY <= 400 * scale) {
      if (rebirth < 1) {
        multi += 1e+10;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+10 * rebirth * 2;
        cash = 0;
      }
    }

  }
  //row Cm1
  {
    if (scene === 'caves' && cash >= 6.2e+26 && mouseX >= 325 && mouseX <= 400 && mouseY >= 225 && mouseY <= 300) {
      if (rebirth < 1) {
        multi += 1e+15;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+15 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 3.5e+27 && mouseX >= 325 && mouseX <= 400 && mouseY >= 325 && mouseY <= 400) {
      if (rebirth < 1) {
        multi += 6e+15;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 6e+15 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 6e+28 && mouseX >= 325 && mouseX <= 400 && mouseY >= 425 && mouseY <= 500) {
      if (rebirth < 1) {
        multi += 5e+16;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5e+16 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 4.5e+29 && mouseX >= 325 && mouseX <= 400 && mouseY >= 525 && mouseY <= 600) {
      if (rebirth < 1) {
        multi += 2.3e+17;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 2.3e+17 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 3e+30 && mouseX >= 325 && mouseX <= 400 && mouseY >= 625 && mouseY <= 700) {
      if (rebirth < 1) {
        multi += 1e+18;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+18 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 1e+32 && mouseX >= 325 && mouseX <= 400 && mouseY >= 725 && mouseY <= 800) {
      if (rebirth < 1) {
        multi += 5e+18;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5e+18 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 8e+32 && mouseX >= 325 && mouseX <= 400 && mouseY >= 825 && mouseY <= 900) {
      if (rebirth < 1) {
        multi += 3e+19;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 3e+19 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Cm2
  {
    if (scene === 'caves' && cash >= 8e+33 && mouseX >= 425 && mouseX <= 500 && mouseY >= 225 && mouseY <= 300) {
      if (rebirth < 1) {
        multi += 2.4e+20;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 2.4e+20 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 9e+34 && mouseX >= 425 && mouseX <= 500 && mouseY >= 325 && mouseY <= 400) {
      if (rebirth < 1) {
        multi += 8e+19;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 8e+19 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 5e+35 && mouseX >= 425 && mouseX <= 500 && mouseY >= 425 && mouseY <= 500) {
      if (rebirth < 1) {
        multi += 3e+21;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 3e+21 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 1.2e+36 && mouseX >= 425 && mouseX <= 500 && mouseY >= 525 && mouseY <= 600) {
      if (rebirth < 1) {
        multi += 1.3e+22;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1.3e+22 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 4e+37 && mouseX >= 425 && mouseX <= 500 && mouseY >= 625 && mouseY <= 700) {
      if (rebirth < 1) {
        multi += 4e+22;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 4e+22 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 3.25e+38 && mouseX >= 425 && mouseX <= 500 && mouseY >= 725 && mouseY <= 800) {
      if (rebirth < 1) {
        multi += 1e+23;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1e+23 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 1e+39 && mouseX >= 425 && mouseX <= 500 && mouseY >= 825 && mouseY <= 900) {
      if (rebirth < 1) {
        multi += 4e+23;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 4e+23 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Cm3
  {
    if (scene === 'caves' && cash >= 3.5e+40 && mouseX >= 525 && mouseX <= 600 && mouseY >= 225 && mouseY <= 300) {
      if (rebirth < 1) {
        multi += 8e+23;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 8e+23 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 5.05e+41 && mouseX >= 525 && mouseX <= 600 && mouseY >= 325 && mouseY <= 400) {
      if (rebirth < 1) {
        multi += 3e+24;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 3e+24 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 2e+42 && mouseX >= 525 && mouseX <= 600 && mouseY >= 425 && mouseY <= 500) {
      if (rebirth < 1) {
        multi += 2e+25;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 2e+25 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 7.5e+43 && mouseX >= 525 && mouseX <= 600 && mouseY >= 525 && mouseY <= 600) {
      if (rebirth < 1) {
        multi += 6e+25;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 6e+25 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 3.5e+44 && mouseX >= 525 && mouseX <= 600 && mouseY >= 625 && mouseY <= 700) {
      if (rebirth < 1) {
        multi += 2e+26;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 2e+26 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 8.5e+44 && mouseX >= 525 && mouseX <= 600 && mouseY >= 725 && mouseY <= 800) {
      if (rebirth < 1) {
        multi += 5e+26;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 5e+26 * rebirth * 2;
        cash = 0;
      }
    }
    if (scene === 'caves' && cash >= 5e+45 && mouseX >= 525 && mouseX <= 600 && mouseY >= 825 && mouseY <= 900) {
      if (rebirth < 1) {
        multi += 1.2e+27;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 1.2e+27 * rebirth * 2;
        cash = 0;
      }
    }
  }
  //row Cm4
  {
    if (scene === 'caves' && cash >= 6.2e+46 && mouseX >= 625 && mouseX <= 700 && mouseY >= 225 && mouseY <= 300) {
      if (rebirth < 1) {
        multi += 3e+27;
        cash = 0;
      }
      if (rebirth >= 1) {
        multi += 3e+27 * rebirth * 2;
        cash = 0;
      }
    }
  }
}

function rebGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  //row Sr1
  {
    if (scene === 'spawn' && multi >= 2000 && mouseX >= 625 && mouseX <= 700 && mouseY >= 425 && mouseY <= 500) {
      if (stone < 1) {
        rebirth += 1;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 15000 && mouseX >= 625 && mouseX <= 700 && mouseY >= 525 && mouseY <= 600) {
      if (stone < 1) {
        rebirth += 5;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 5 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 600000 && mouseX >= 625 && mouseX <= 700 && mouseY >= 625 && mouseY <= 700) {
      if (stone < 1) {
        rebirth += 23;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 23 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 1.2e+7 && mouseX >= 625 && mouseX <= 700 && mouseY >= 725 && mouseY <= 800) {
      if (stone < 1) {
        rebirth += 69;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 69 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 7e+8 && mouseX >= 625 && mouseX <= 700 && mouseY >= 825 && mouseY <= 900) {
      if (stone < 1) {
        rebirth += 272;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 272 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Sr2
  {
    if (scene === 'spawn' && multi >= 3e+9 && mouseX >= 725 && mouseX <= 800 && mouseY >= 225 && mouseY <= 300) {
      if (stone < 1) {
        rebirth += 1000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 15e+9 && mouseX >= 725 && mouseX <= 800 && mouseY >= 325 && mouseY <= 400) {
      if (stone < 1) {
        rebirth += 5000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 5000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 50e+9 && mouseX >= 725 && mouseX <= 800 && mouseY >= 425 && mouseY <= 500) {
      if (stone < 1) {
        rebirth += 20000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 20000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 600e+9 && mouseX >= 725 && mouseX <= 800 && mouseY >= 525 && mouseY <= 600) {
      if (stone < 1) {
        rebirth += 50000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 50000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 1e+12 && mouseX >= 725 && mouseX <= 800 && mouseY >= 625 && mouseY <= 700) {
      if (stone < 1) {
        rebirth += 100000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 100000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 75e+12 && mouseX >= 725 && mouseX <= 800 && mouseY >= 725 && mouseY <= 800) {
      if (stone < 1) {
        rebirth += 500000;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 500000 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 400e+12 && mouseX >= 725 && mouseX <= 800 && mouseY >= 825 && mouseY <= 900) {
      if (stone < 1) {
        rebirth += 1e+6;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+6 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Sr3
  {
    if (scene === 'spawn' && multi >= 2e+15 && mouseX >= 825 && mouseX <= 900 && mouseY >= 225 && mouseY <= 300) {
      if (stone < 1) {
        rebirth += 6e+6;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 6e+6 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 15e+15 && mouseX >= 825 && mouseX <= 900 && mouseY >= 325 && mouseY <= 400) {
      if (stone < 1) {
        rebirth += 3e+7;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 3e+7 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && multi >= 50e+15 && mouseX >= 825 && mouseX <= 900 && mouseY >= 425 && mouseY <= 500) {
      if (stone < 1) {
        rebirth += 1e+8;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+8 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cr1
  {
    if (scene === 'caves' && multi >= 3e+19 && mouseX >= 625 && mouseX <= 700 && mouseY >= 325 && mouseY <= 400) {
      if (stone < 1) {
        rebirth += 1e+9;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+9 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 9e+20 && mouseX >= 625 && mouseX <= 700 && mouseY >= 425 && mouseY <= 500) {
      if (stone < 1) {
        rebirth += 1e+10;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+10 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 6e+22 && mouseX >= 625 && mouseX <= 700 && mouseY >= 525 && mouseY <= 600) {
      if (stone < 1) {
        rebirth += 8e+10;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 8e+10 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 8e+23 && mouseX >= 625 && mouseX <= 700 && mouseY >= 625 && mouseY <= 700) {
      if (stone < 1) {
        rebirth += 1.5e+11;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1.5e+11 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 9e+25 && mouseX >= 625 && mouseX <= 700 && mouseY >= 725 && mouseY <= 800) {
      if (stone < 1) {
        rebirth += 5e+11;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 5e+11 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 1e+27 && mouseX >= 625 && mouseX <= 700 && mouseY >= 825 && mouseY <= 900) {
      if (stone < 1) {
        rebirth += 1e+13;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+13 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cr2
  {
    if (scene === 'caves' && multi >= 7.5e+29 && mouseX >= 725 && mouseX <= 800 && mouseY >= 225 && mouseY <= 300) {
      if (stone < 1) {
        rebirth += 7e+13;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 7e+13 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 1.5e+31 && mouseX >= 725 && mouseX <= 800 && mouseY >= 325 && mouseY <= 400) {
      if (stone < 1) {
        rebirth += 3e+14;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 3e+14 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 6e+32 && mouseX >= 725 && mouseX <= 800 && mouseY >= 425 && mouseY <= 500) {
      if (stone < 1) {
        rebirth += 2e+15;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 2e+15 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 5e+34 && mouseX >= 725 && mouseX <= 800 && mouseY >= 525 && mouseY <= 600) {
      if (stone < 1) {
        rebirth += 1.5e+16;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1.5e+16 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 1e+36 && mouseX >= 725 && mouseX <= 800 && mouseY >= 625 && mouseY <= 700) {
      if (stone < 1) {
        rebirth += 2e+17;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 2e+17 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 4e+38 && mouseX >= 725 && mouseX <= 800 && mouseY >= 725 && mouseY <= 800) {
      if (stone < 1) {
        rebirth += 1e+18;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 1e+18 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 1.5e+40 && mouseX >= 725 && mouseX <= 800 && mouseY >= 825 && mouseY <= 900) {
      if (stone < 1) {
        rebirth += 4e+19;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 4e+19 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cr3
  {
    if (scene === 'caves' && multi >= 1e+42 && mouseX >= 825 && mouseX <= 900 && mouseY >= 225 && mouseY <= 300) {
      if (stone < 1) {
        rebirth += 3e+20;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 3e+20 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && multi >= 1.5e+45 && mouseX >= 825 && mouseX <= 900 && mouseY >= 325 && mouseY <= 400) {
      if (stone < 1) {
        rebirth += 5e+21;
        multi = 0;
        cash = 0;
      }
      if (stone >= 1) {
        rebirth += 5e+21 * stone * 2;
        multi = 0;
        cash = 0;
      }
    }
  }
}

function stoneGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  //row Ss1
  {
    if (scene === 'spawn' && rebirth >= 3e+4 && mouseX >= 825 && mouseX <= 900 && mouseY >= 525 && mouseY <= 600) {
      if (whiteGems < 1) {
        stone += 1;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 1 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && rebirth >= 3e+7 && mouseX >= 825 && mouseX <= 900 && mouseY >= 625 && mouseY <= 700) {
      if (whiteGems < 1) {
        stone += 3;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 3 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'spawn' && rebirth >= 6e+8 && mouseX >= 825 && mouseX <= 900 && mouseY >= 725 && mouseY <= 800) {
      if (whiteGems < 1) {
        stone += 6;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 6 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cs1
  {
    if (scene === 'caves' && rebirth >= 2.5e+11 && mouseX >= 825 && mouseX <= 900 && mouseY >= 425 && mouseY <= 500) {
      if (whiteGems < 1) {
        stone += 26;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 26 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 1e+15 && mouseX >= 825 && mouseX <= 900 && mouseY >= 525 && mouseY <= 600) {
      if (whiteGems < 1) {
        stone += 120;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 120 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 7e+17 && mouseX >= 825 && mouseX <= 900 && mouseY >= 625 && mouseY <= 700) {
      if (whiteGems < 1) {
        stone += 450;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 450 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 6.5e+20 && mouseX >= 825 && mouseX <= 900 && mouseY >= 725 && mouseY <= 800) {
      if (whiteGems < 1) {
        stone += 5000;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 5000 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 1e+24 && mouseX >= 825 && mouseX <= 900 && mouseY >= 825 && mouseY <= 900) {
      if (whiteGems < 1) {
        stone += 15000;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 15000 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cs2
  {
    if (scene === 'caves' && rebirth >= 8e+28 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 225 && mouseY <= 300) {
      if (whiteGems < 1) {
        stone += 32000;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 32000 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 7e+29 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 325 && mouseY <= 400) {
      if (whiteGems < 1) {
        stone += 85000;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 85000 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 3e+30 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 425 && mouseY <= 500) {
      if (whiteGems < 1) {
        stone += 3e+5;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 3e+5 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && rebirth >= 2.4e+31 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 525 && mouseY <= 600) {
      if (whiteGems < 1) {
        stone += 1e+6;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (whiteGems >= 1) {
        stone += 1e+6 * whiteGems * 2;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
  }
}

function whiteGemsGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  //row Cwg1
  {
    if (scene === 'caves' && stone >= 5000 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 625 && mouseY <= 700) {
      if (crystal < 1) {
        whiteGems += 1;
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (crystal >= 1) {
        whiteGems += 1 * crystal * 2
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && stone >= 60000 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 725 && mouseY <= 800) {
      if (crystal < 1) {
        whiteGems += 3;
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (crystal >= 1) {
        whiteGems += 3 * crystal * 2
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && stone >= 500000 && mouseX >= 925 && mouseX <= 1000 && mouseY >= 825 && mouseY <= 900) {
      if (crystal < 1) {
        whiteGems += 10;
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (crystal >= 1) {
        whiteGems += 10 * crystal * 2
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
  }
  //row Cwg2
  {
    if (scene === 'caves' && stone >= 1e+7 && mouseX >= 1025 && mouseX <= 1100 && mouseY >= 225 && mouseY <= 300) {
      if (crystal < 1) {
        whiteGems += 30;
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (crystal >= 1) {
        whiteGems += 30 * crystal * 2
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
    if (scene === 'caves' && stone >= 2e+8 && mouseX >= 1025 && mouseX <= 1100 && mouseY >= 325 && mouseY <= 400) {
      if (crystal < 1) {
        whiteGems += 86;
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
      if (crystal >= 1) {
        whiteGems += 86 * crystal * 2
        stone = 0;
        rebirth = 0;
        multi = 0;
        cash = 0;
      }
    }
  }
}

function rebuildGiver(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  //row Srb1
  {
    if (scene === 'spawn' && stone >= 15 && mouseX >= 825 && mouseX <= 900 && mouseY >= 825 && mouseY <= 900) {
      if (multi < 1) {
        cash += 5e+19;
      }
      if (multi >= 1) {
        cash += 5e+19 * multi * 2;
      }
    }
  }
  //row Crb1
  {
    if (scene === 'caves' && gems >= 50 && mouseX >= 1025 && mouseX <= 1100 && mouseY >= 725 && mouseY <= 800) {
      if (rebirth < 1) {
        multi += 5e+12;
      }
      if (rebirth >= 1) {
        multi += 5e+12 * rebirth * 2;
      }
    }
    if (scene === 'caves' && whiteGems >= 5 && mouseX >= 1025 && mouseX <= 1100 && mouseY >= 825 && mouseY <= 900) {
      if (stone < 1) {
        rebirth += 1e+5;
      }
      if (stone >= 1) {
        rebirth += 1e+5 * stone * 2;
      }
    }
  }
}

function drawSceneSpawn() {
  //multiplier buttons
  {
    context.fillStyle = '#ff0000';
    context.fillRect(325 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillRect(325 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillRect(425 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillRect(525 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.font = 15 * scale + 'px Arial';
    context.fillStyle = 'black';
    context.fillText("1 multi", 340 * scale, 250 * scale, 100, 100);
    context.fillText("15 cash", 335 * scale, 270 * scale, 100, 100);
    context.fillText("3 multi", 340 * scale, 350 * scale, 100, 100);
    context.fillText("50 cash", 335 * scale, 370 * scale, 100, 100);
    context.fillText("5 multi", 340 * scale, 450 * scale, 100, 100);
    context.fillText("100 cash", 330 * scale, 470 * scale, 100, 100);
    context.fillText("10 multi", 335 * scale, 550 * scale, 100, 100);
    context.fillText("500 cash", 330 * scale, 570 * scale, 100, 100);
    context.fillText("45 multi", 335 * scale, 650 * scale, 100, 100);
    context.fillText("10K cash", 330 * scale, 670 * scale, 100, 100);
    context.fillText("100 multi", 330 * scale, 750 * scale, 100, 100);
    context.fillText("75K cash", 330 * scale, 770 * scale, 100, 100);
    context.fillText("300 multi", 330 * scale, 850 * scale, 100, 100);
    context.fillText("1M cash", 335 * scale, 870 * scale, 100, 100);
    context.fillText("500 multi", 430 * scale, 250 * scale, 100, 100);
    context.fillText("30M cash", 430 * scale, 270 * scale, 100, 100);
    context.fillText("1K multi", 435 * scale, 350 * scale, 100, 100);
    context.fillText("100M cash", 425 * scale, 370 * scale, 100, 100);
    context.fillText("5K multi", 435 * scale, 450 * scale, 100, 100);
    context.fillText("1B cash", 435 * scale, 470 * scale, 100, 100);
    context.fillText("20K multi", 430 * scale, 550 * scale, 100, 100);
    context.fillText("5B cash", 435 * scale, 570 * scale, 100, 100);
    context.fillText("60k multi", 430 * scale, 650 * scale, 100, 100);
    context.fillText("30B cash", 430 * scale, 670 * scale, 100, 100);
    context.fillText("120K multi", 425 * scale, 750 * scale, 100, 100);
    context.fillText("200B cash", 425 * scale, 770 * scale, 100, 100);
    context.fillText("300k multi", 425 * scale, 850 * scale, 100, 100);
    context.fillText("700B cash", 425 * scale, 870 * scale, 100, 100);
    context.fillText("1M multi", 530 * scale, 250 * scale, 100, 100);
    context.fillText("3T cash", 535 * scale, 270 * scale, 100, 100);
    context.fillText("4M multi", 535 * scale, 350 * scale, 100, 100);
    context.fillText("10T cash", 530 * scale, 370 * scale, 100, 100);
    context.fillText("10M multi", 530 * scale, 450 * scale, 100, 100);
    context.fillText("50T cash", 530 * scale, 470 * scale, 100, 100);
    context.fillText("50M multi", 530 * scale, 550 * scale, 100, 100);
    context.fillText("120T cash", 525 * scale, 570 * scale, 100, 100);
    context.fillText("80M multi", 530 * scale, 650 * scale, 100, 100);
    context.fillText("400T cash", 525 * scale, 670 * scale, 100, 100);
    context.fillText("200M multi", 525 * scale, 750 * scale, 100, 100);
    context.fillText("1Qd cash", 530 * scale, 770 * scale, 100, 100);
    context.fillText("1B multi", 535 * scale, 850 * scale, 100, 100);
    context.fillText("5Qd cash", 530 * scale, 870 * scale, 100, 100);
    context.fillText("4B multi", 635 * scale, 250 * scale, 100, 100);
    context.fillText("25Qd cash", 625 * scale, 270 * scale, 100, 100);
    context.fillText("10B multi", 630 * scale, 350 * scale, 100, 100);
    context.fillText("100Qd cash", 625 * scale, 370 * scale, 100, 100);
  }
  //rebirth buttons
  {
    context.fillStyle = '#008cff';
    context.fillRect(625 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillRect(625 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillRect(725 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillRect(825 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillRect(825 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillRect(825 * scale, 425 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.fillText("1 reb", 640 * scale, 450 * scale, 100, 100);
    context.fillText("2K multi", 635 * scale, 470 * scale, 100, 100);
    context.fillText("5 reb", 640 * scale, 550 * scale, 100, 100);
    context.fillText("15K multi", 630 * scale, 570 * scale, 100, 100);
    context.fillText("23 reb", 635 * scale, 650 * scale, 100, 100);
    context.fillText("600K multi", 625 * scale, 670 * scale, 100, 100);
    context.fillText("69 reb", 635 * scale, 750 * scale, 100, 100);
    context.fillText("12M multi", 630 * scale, 770 * scale, 100, 100);
    context.fillText("272 reb", 630 * scale, 850 * scale, 100, 100);
    context.fillText("700M multi", 625 * scale, 870 * scale, 100, 100);
    context.fillText("1K reb", 740 * scale, 250 * scale, 100, 100);
    context.fillText("3B multi", 735 * scale, 270 * scale, 100, 100);
    context.fillText("5K reb", 740 * scale, 350 * scale, 100, 100);
    context.fillText("15B multi", 730 * scale, 370 * scale, 100, 100);
    context.fillText("20K reb", 735 * scale, 450 * scale, 100, 100);
    context.fillText("50B multi", 730 * scale, 470 * scale, 100, 100);
    context.fillText("50K reb", 735 * scale, 550 * scale, 100, 100);
    context.fillText("600B multi", 730 * scale, 570 * scale, 100, 100);
    context.fillText("100K reb", 735 * scale, 650 * scale, 100, 100);
    context.fillText("1T multi", 735 * scale, 670 * scale, 100, 100);
    context.fillText("500K reb", 730 * scale, 750 * scale, 100, 100);
    context.fillText("75T multi", 730 * scale, 770 * scale, 100, 100);
    context.fillText("1M reb", 735 * scale, 850 * scale, 100, 100);
    context.fillText("400T multi", 730 * scale, 870 * scale, 100, 100);
    context.fillText("6M reb", 835 * scale, 250 * scale, 100, 100);
    context.fillText("2Qd multi", 830 * scale, 270 * scale, 100, 100);
    context.fillText("30M reb", 830 * scale, 350 * scale, 100, 100);
    context.fillText("15Qd multi", 825 * scale, 370 * scale, 100, 100);
    context.fillText("100M reb", 830 * scale, 450 * scale, 100, 100);
    context.fillText("50Qd multi", 825 * scale, 470 * scale, 100, 100);
  }
  //stone buttons
  {
    context.fillStyle = 'gray';
    context.fillRect(825 * scale, 525 * scale, 75 * scale, 75 * scale);
    context.fillRect(825 * scale, 625 * scale, 75 * scale, 75 * scale);
    context.fillRect(825 * scale, 725 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.fillText("1 stone", 835 * scale, 550 * scale, 100, 100);
    context.fillText("30K reb", 835 * scale, 570 * scale, 100, 100);
    context.fillText("3 stone", 835 * scale, 650 * scale, 100, 100);
    context.fillText("30M reb", 835 * scale, 670 * scale, 100, 100);
    context.fillText("6 stone", 835 * scale, 750 * scale, 100, 100);
    context.fillText("600M reb", 830 * scale, 770 * scale, 100, 100);
  }
  //portals
  {
    context.fillStyle = 'gray';
    context.fillRect(1525 * scale, 225 * scale, 75 * scale, 75 * scale);
    context.fillStyle = '#ff00ff'
    context.fillRect(1525 * scale, 325 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.font = 30 * scale + 'px Arial';
    context.fillText("C", 1550 * scale, 250 * scale, 75, 75);
    context.fillText("CB", 1540 * scale, 350 * scale, 75, 75);
    context.font = 15 * scale + 'px Arial';
    context.fillText("10 stone", 1535 * scale, 270 * scale, 1000, 1000);
    context.fillText("100", 1545 * scale, 370 * scale, 1000, 1000);
    context.fillText("white gems", 1525 * scale, 385 * scale, 1000, 1000);
  }
  //rebuild buttons
  {
    context.fillStyle = '#FFA500';
    context.fillRect(825 * scale, 825 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.fillText("50Qn cash", 825 * scale, 850 * scale, 75, 75);
    context.fillText("15 stone", 830 * scale, 870 * scale, 75, 75);
  }
}

function drawSceneCaves() {
  //multiplier buttons
  {
    context.fillStyle = '#ff0000';
    context.fillRect(325, 225, 75, 75);
    context.fillRect(325, 325, 75, 75);
    context.fillRect(325, 425, 75, 75);
    context.fillRect(325, 525, 75, 75);
    context.fillRect(325, 625, 75, 75);
    context.fillRect(325, 725, 75, 75);
    context.fillRect(325, 825, 75, 75);
    context.fillRect(425, 225, 75, 75);
    context.fillRect(425, 325, 75, 75);
    context.fillRect(425, 425, 75, 75);
    context.fillRect(425, 525, 75, 75);
    context.fillRect(425, 625, 75, 75);
    context.fillRect(425, 725, 75, 75);
    context.fillRect(425, 825, 75, 75);
    context.fillRect(525, 225, 75, 75);
    context.fillRect(525, 325, 75, 75);
    context.fillRect(525, 425, 75, 75);
    context.fillRect(525, 525, 75, 75);
    context.fillRect(525, 625, 75, 75);
    context.fillRect(525, 725, 75, 75);
    context.fillRect(525, 825, 75, 75);
    context.fillRect(625, 225, 75, 75);
    context.fillStyle = 'black';
    context.font = '12.5px Arial';
    context.fillText("1Qd multi", 340, 250, 100, 100);
    context.fillText("620Sp cash", 335, 270, 100, 100);
    context.fillText("6Qd multi", 340, 350, 100, 100);
    context.fillText("3.5Oc cash", 335, 370, 100, 100);
    context.fillText("50Qd multi", 335, 450, 100, 100);
    context.fillText("60Oc cash", 330, 470, 100, 100);
    context.fillText("230Qd multi", 330, 550, 100, 100);
    context.fillText("450Oc cash", 330, 570, 100, 100);
    context.fillText("1Qn multi", 335, 650, 100, 100);
    context.fillText("3No cash", 335, 670, 100, 100);
    context.fillText("5Qn multi", 335, 750, 100, 100);
    context.fillText("100No cash", 330, 770, 100, 100);
    context.fillText("30Qn multi", 330, 850, 100, 100);
    context.fillText("800No cash", 330, 870, 100, 100);
    context.fillText("240Qn multi", 430, 250, 100, 100);
    context.fillText("8De cash", 435, 270, 100, 100);
    context.fillText("800Qn multi", 430, 350, 100, 100);
    context.fillText("90De cash", 435, 370, 100, 100);
    context.fillText("3Sx multi", 435, 450, 100, 100);
    context.fillText("500De cash", 430, 470, 100, 100);
    context.fillText("13Sx multi", 430, 550, 100, 100);
    context.fillText("1.2Ude cash", 425, 570, 100, 100);
    context.fillText("40Sx multi", 430, 650, 100, 100);
    context.fillText("42Ude cash", 430, 670, 100, 100);
    context.fillText("100Sx multi", 430, 750, 100, 100);
    context.fillText("325Ude cash", 425, 770, 100, 100);
    context.fillText("400Sx multi", 430, 850, 100, 100);
    context.fillText("1DDe cash", 430, 870, 100, 100);
    context.fillText("800Sx multi", 530, 250, 100, 100);
    context.fillText("35DDe cash", 530, 270, 100, 100);
    context.fillText("3Sp multi", 535, 350, 100, 100);
    context.fillText("505DDe cash", 525, 370, 100, 100);
    context.fillText("20Sp multi", 530, 450, 100, 100);
    context.fillText("2TDe cash", 530, 470, 100, 100);
    context.fillText("60Sp multi", 530, 550, 100, 100);
    context.fillText("75TDe cash", 530, 570, 100, 100);
    context.fillText("200Sp multi", 530, 650, 100, 100);
    context.fillText("350Tde cash", 525, 670, 100, 100);
    context.fillText("500Sp multi", 525, 750, 100, 100);
    context.fillText("850TDe cash", 525, 770, 100, 100);
    context.fillText("1.2Oc multi", 535, 850, 100, 100);
    context.fillText("5QdDe cash", 530, 870, 100, 100);
    context.fillText("3Oc multi", 635, 250, 100, 100);
    context.fillText("62QdDe cash", 625, 270, 100, 100);
  }
  //rebirth buttons
  {
    context.fillStyle = '#008cff';
    context.fillRect(625, 325, 75, 75);
    context.fillRect(625, 425, 75, 75);
    context.fillRect(625, 525, 75, 75);
    context.fillRect(625, 625, 75, 75);
    context.fillRect(625, 725, 75, 75);
    context.fillRect(625, 825, 75, 75);
    context.fillRect(725, 225, 75, 75);
    context.fillRect(725, 325, 75, 75);
    context.fillRect(725, 425, 75, 75);
    context.fillRect(725, 525, 75, 75);
    context.fillRect(725, 625, 75, 75);
    context.fillRect(725, 725, 75, 75);
    context.fillRect(725, 825, 75, 75);
    context.fillRect(825, 225, 75, 75);
    context.fillRect(825, 325, 75, 75);
    context.fillStyle = 'black';
    context.fillText("1B reb", 635, 350, 100, 100);
    context.fillText("30Qn multi", 630, 370, 100, 100);
    context.fillText("10B reb", 630, 450, 100, 100);
    context.fillText("900Qn multi", 630, 470, 100, 100);
    context.fillText("80B reb", 640, 550, 100, 100);
    context.fillText("60Sx multi", 630, 570, 100, 100);
    context.fillText("150B reb", 635, 650, 100, 100);
    context.fillText("800Sx multi", 630, 670, 100, 100);
    context.fillText("500B reb", 635, 750, 100, 100);
    context.fillText("90Sp multi", 630, 770, 100, 100);
    context.fillText("10T reb", 630, 850, 100, 100);
    context.fillText("1Oc multi", 635, 870, 100, 100);
    context.fillText("70T reb", 740, 250, 100, 100);
    context.fillText("750Oc multi", 730, 270, 100, 100);
    context.fillText("300T reb", 740, 350, 100, 100);
    context.fillText("15No multi", 730, 370, 100, 100);
    context.fillText("2Qd reb", 735, 450, 100, 100);
    context.fillText("600No multi", 730, 470, 100, 100);
    context.fillText("15Qd reb", 735, 550, 100, 100);
    context.fillText("50De multi", 730, 570, 100, 100);
    context.fillText("200Qd reb", 735, 650, 100, 100);
    context.fillText("1UDe multi", 735, 670, 100, 100);
    context.fillText("1Qn reb", 730, 750, 100, 100);
    context.fillText("400UDe multi", 725, 770, 100, 100);
    context.fillText("40Qn reb", 735, 850, 100, 100);
    context.fillText("15DDe multi", 730, 870, 100, 100);
    context.fillText("300Qn reb", 835, 250, 100, 100);
    context.fillText("1TDe multi", 830, 270, 100, 100);
    context.fillText("5Sx reb", 835, 350, 100, 100);
    context.fillText("1.5QdDe multi", 825, 370, 100, 100);
  }
  //stone buttons
  {
    context.fillStyle = 'gray';
    context.fillRect(825, 425, 75, 75);
    context.fillRect(825, 525, 75, 75);
    context.fillRect(825, 625, 75, 75);
    context.fillRect(825, 725, 75, 75);
    context.fillRect(825, 825, 75, 75);
    context.fillRect(925, 225, 75, 75);
    context.fillRect(925, 325, 75, 75);
    context.fillRect(925, 425, 75, 75);
    context.fillRect(925, 525, 75, 75);
    context.fillStyle = 'black';
    context.fillText("26 stone", 835, 450, 100, 100);
    context.fillText("250B multi", 825, 470, 100, 100);
    context.fillText("120 stone", 830, 550, 100, 100);
    context.fillText("1Qd reb", 835, 570, 100, 100);
    context.fillText("450 stone", 830, 650, 100, 100);
    context.fillText("700Qd reb", 830, 670, 100, 100);
    context.fillText("5K stone", 835, 750, 100, 100);
    context.fillText("650Qn reb", 830, 770, 100, 100);
    context.fillText("15k stone", 830, 850, 100, 100);
    context.fillText("1Sp reb", 835, 870, 100, 100);
    context.fillText("32k stone", 930, 250, 100, 100);
    context.fillText("80Oc reb", 930, 270, 100, 100);
    context.fillText("85k stone", 930, 350, 100, 100);
    context.fillText("700Oc reb", 930, 370, 100, 100);
    context.fillText("300k stone", 930, 450, 100, 100);
    context.fillText("3No reb", 935, 470, 100, 100);
    context.fillText("1M stone", 930, 550, 100, 100);
    context.fillText("24No reb", 930, 570, 100, 100);
  }
  //white gems buttons
  {
    context.StrokeStyle = 'black';
    context.strokeRect(925, 625, 75, 75);
    context.strokeRect(925, 725, 75, 75);
    context.strokeRect(925, 825, 75, 75);
    context.strokeRect(1025, 225, 75, 75);
    context.strokeRect(1025, 325, 75, 75);
    context.fillStyle = 'black';
    context.font = '12.5px Arial';
    context.fillText("1 white gems", 925, 650, 100, 100);
    context.fillText("5k stone", 935, 670, 100, 100);
    context.fillText("3 white gems", 925, 750, 100, 100);
    context.fillText("60k stone", 930, 770, 100, 100);
    context.fillText("10 white gems", 925, 850, 100, 100);
    context.fillText("500K stone", 930, 870, 100, 100);
    context.fillText("30 white gems", 1025, 250, 100, 100);
    context.fillText("10M stone", 1030, 270, 100, 100);
    context.fillText("86 white gems", 1025, 350, 100, 100);
    context.fillText("200M stone", 1030, 370, 100, 100);
  }
  //gem buttons
  {
    context.fillStyle = '#ffff00';
    context.fillRect(1025, 425, 75, 75);
    context.fillRect(1025, 525, 75, 75);
    context.fillRect(1025, 625, 75, 75);
    context.fillStyle = 'black';
    context.fillText("1 gem", 1035, 450, 100, 100);
    context.fillText("50 white gems", 1025, 470, 100, 100);
    context.fillText("5 gems", 1030, 550, 100, 100);
    context.fillText("500 white gems", 1025, 570, 100, 100);
    context.fillText("10 gems", 1030, 650, 100, 100);
    context.fillText("3k white gems", 1025, 670, 100, 100);
  }
  //rebuild buttons
  {
    context.fillStyle = '#FFA500';
    context.fillRect(1025, 725, 75, 75);
    context.fillRect(1025, 825, 75, 75);
    context.fillStyle = 'black';
    context.fillText("5T multi", 1035, 750, 100, 100);
    context.fillText("50 gems", 1035, 770, 100, 100);
    context.fillText("100k reb", 1035, 850, 100, 100);
    context.fillText("5 white gems", 1025, 870, 100, 100);
  }
  //portal to spawn
  {
    context.strokeStyle = 'black';
    context.strokeRect(1525, 225, 75, 75);
    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText("to", 1550, 250, 100, 100);
    context.fillText("spawn", 1535, 270, 100, 100);
  }
}

function drawSceneCrystalBeneaths() {}

function drawMenus() {
  let stoneE = stone;
  let whiteGemsE = whiteGems;
  let crystalE = crystal;
  //notation maker
  {
    if (stone < 1e+3) {
      stoneE = (stone).toFixed(1);
    }
    if (stone >= 1e+3) {
      stoneE = (stone / 1e+3).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    if (stone >= 1e+6) {
      stoneE = (stone / 1e+6).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (stone >= 1e+9) {
      stoneE = (stone / 1e+9).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (stone >= 1e+12) {
      stoneE = (stone / 1e+12).toFixed(1).replace(/\.0$/, '') + 'T';
    }
    if (stone >= 1e+15) {
      stoneE = (stone / 1e+15).toFixed(1).replace(/\.0$/, '') + 'Qd';
    }
    if (stone >= 1e+18) {
      stoneE = (stone / 1e+18).toFixed(1).replace(/\.0$/, '') + 'Qn';
    }
    if (stone >= 1e+21) {
      stoneE = (stone / 1e+21).toFixed(1).replace(/\.0$/, '') + 'Sx';
    }
    if (stone >= 1e+24) {
      stoneE = (stone / 1e+24).toFixed(1).replace(/\.0$/, '') + 'Sp';
    }
    if (stone >= 1e+27) {
      stoneE = (stone / 1e+27).toFixed(1).replace(/\.0$/, '') + 'Oc';
    }
    if (stone >= 1e+30) {
      stoneE = (stone / 1e+30).toFixed(1).replace(/\.0$/, '') + 'No';
    }
    if (stone >= 1e+33) {
      stoneE = (stone / 1e+33).toFixed(1).replace(/\.0$/, '') + 'De';
    }
    if (stone >= 1e+36) {
      stoneE = (stone / 1e+36).toFixed(1).replace(/\.0$/, '') + 'UDe';
    }
    if (stone >= 1e+39) {
      stoneE = (stone / 1e+39).toFixed(1).replace(/\.0$/, '') + 'DDe';
    }
    if (stone >= 1e+42) {
      stoneE = (stone / 1e+42).toFixed(1).replace(/\.0$/, '') + 'TDe';
    }
    if (stone >= 1e+45) {
      stoneE = (stone / 1e+45).toFixed(1).replace(/\.0$/, '') + 'QdDe';
    }
    if (stone >= 1e+48) {
      stoneE = (stone / 1e+48).toFixed(1).replace(/\.0$/, '') + 'QnDe';
    }
    if (stone >= 1e+51) {
      stoneE = (stone / 1e+51).toFixed(1).replace(/\.0$/, '') + 'SxDe';
    }
    if (stone >= 1e+54) {
      stoneE = (stone / 1e+54).toFixed(1).replace(/\.0$/, '') + 'SpDe';
    }
    if (stone >= 1e+57) {
      stoneE = (stone / 1e+57).toFixed(1).replace(/\.0$/, '') + 'ODe';
    }
    if (stone >= 1e60) {
      stoneE = (stone / 1e+60).toFixed(1).replace(/\.0$/, '') + 'NoDe';
    }
    if (stone >= 1e+63) {
      stoneE = (stone / 1e+63).toFixed(1).replace(/\.0$/, '') + 'Vt';
    }
    if (stone >= 1e+66) {
      stoneE = (stone / 1e+66).toFixed(1).replace(/\.0$/, '') + 'UVt';
    }
    if (stone >= 1e+69) {
      stoneE = (stone / 1e+69).toFixed(1).replace(/\.0$/, '') + 'DVt';
    }
    if (stone >= 1e+72) {
      stoneE = (stone / 1e+72).toFixed(1).replace(/\.0$/, '') + 'TVt';
    }
    if (stone >= 1e+75) {
      stoneE = (stone / 1e+75).toFixed(1).replace(/\.0$/, '') + 'QdVt';
    }
    if (stone >= 1e+78) {
      stoneE = (stone / 1e+78).toFixed(1).replace(/\.0$/, '') + 'QnVt';
    }
    if (stone >= 1e+81) {
      stoneE = (stone / 1e+81).toFixed(1).replace(/\.0$/, '') + 'SxVt';
    }
    if (stone >= 1e+84) {
      stoneE = (stone / 1e+84).toFixed(1).replace(/\.0$/, '') + 'SpVt';
    }
    if (stone >= 1e+87) {
      stoneE = (stone / 1e+87).toFixed(1).replace(/\.0$/, '') + 'OVt';
    }
    if (stone >= 1e90) {
      stoneE = (stone / 1e+90).toFixed(1).replace(/\.0$/, '') + 'NoVt';
    }
    if (stone >= 1e+93) {
      stoneE = (stone / 1e+93).toFixed(1).replace(/\.0$/, '') + 'Tg';
    }
    if (stone >= 1e+96) {
      stoneE = (stone / 1e+96).toFixed(1).replace(/\.0$/, '') + 'UTg';
    }
    if (stone >= 1e+99) {
      stoneE = (stone / 1e+99).toFixed(1).replace(/\.0$/, '') + 'DTg';
    }
    if (stone >= 1e+102) {
      stoneE = (stone / 1e+102).toFixed(1).replace(/\.0$/, '') + 'TTg';
    }
    if (stone >= 1e+105) {
      stoneE = (stone / 1e+105).toFixed(1).replace(/\.0$/, '') + 'QdTg';
    }
    if (stone >= 1e+108) {
      stoneE = (stone / 1e+108).toFixed(1).replace(/\.0$/, '') + 'QnTg';
    }
    if (stone >= 1e+111) {
      stoneE = (stone / 1e+111).toFixed(1).replace(/\.0$/, '') + 'SxTg';
    }
    if (stone >= 1e+114) {
      stoneE = (stone / 1e+114).toFixed(1).replace(/\.0$/, '') + 'SpTg';
    }
    if (stone >= 1e+117) {
      stoneE = (stone / 1e+117).toFixed(1).replace(/\.0$/, '') + 'OTg';
    }
    if (stone >= 1e120) {
      stoneE = (stone / 1e+120).toFixed(1).replace(/\.0$/, '') + 'NoTg';
    }
    if (stone >= 1e+123) {
      stoneE = (stone / 1e+123).toFixed(1).replace(/\.0$/, '') + 'Qdg';
    }
  }
  if (upgrades === true) {
    context.fillStyle = 'lightgrey';
    context.fillRect(600 * scale, 200 * scale, 720 * scale, 680 * scale);
    context.strokeStyle = 'black';
    context.strokeRect(1245 * scale, 200 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.font = 50 * scale + 'px Arial';
    context.fillText("X", 1265 * scale, 250 * scale, 100, 100);
  }
  if (stats === true) {
    context.fillStyle = 'lightgrey';
    context.fillRect(600 * scale, 200 * scale, 720 * scale, 680 * scale);
    context.strokeStyle = 'black';
    context.strokeRect(1245 * scale, 200 * scale, 75 * scale, 75 * scale);
    context.fillStyle = 'black';
    context.font = 50 * scale + 'px Arial';
    context.fillText("X", 1265 * scale, 250 * scale, 100, 100);
    context.font = 35 * scale + 'px Arial';
    context.fillStyle = 'gray';
    context.fillText("stone:", 780 * scale, 350 * scale, 1000, 1000);
    context.fillText(stoneE, 885 * scale, 350 * scale, 1000, 1000);
    context.fillStyle = 'white';
    context.fillText("white gems:", 780 * scale, 400 * scale, 1000, 1000);
    context.fillText(whiteGemsE, 970 * scale, 400 * scale, 1000, 1000);
    context.fillStyle = 'magenta';
    context.fillText("crystal:", 780 * scale, 450 * scale, 1000, 1000);
    context.fillText(crystalE, 900 * scale, 450 * scale, 1000, 1000);
  }
}

function sceneChanger(event) {
  let mouseX = event.pageX
  let mouseY = event.pageY
  if (scene === 'spawn' && stone >= 10 && mouseX >= 1525 * scale && mouseX <= 1600 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
    scene = 'cavesB';
  }
  if (scene === 'spawn' && whiteGems >= 100 && mouseX >= 1525 * scale && mouseX <= 1600 * scale && mouseY >= 325 * scale && mouseY <= 400 * scale) {
    scene = 'crystal beneathsB';
  }
  if (scene === 'caves' && mouseX >= 1525 * scale && mouseX <= 1600 * scale && mouseY >= 225 * scale && mouseY <= 300 * scale) {
    scene = 'spawnB';
  }
  if (mouseX >= 30 * scale && mouseX <= 230 * scale && mouseY >= 465 * scale && mouseY <= 565 * scale) {
    upgrades = true;
  }
  if (mouseX >= 30 * scale && mouseX <= 230 * scale && mouseY >= 615 * scale && mouseY <= 715 * scale) {
    stats = true;
  }
  if (upgrades === true && mouseX >= 1245 * scale && mouseX <= 1320 * scale && mouseY >= 200 * scale && mouseY <= 275 * scale) {
    upgrades = false;
  }
  if (stats === true && mouseX >= 1245 * scale && mouseX <= 1320 * scale && mouseY >= 200 * scale && mouseY <= 275 * scale) {
    stats = false;
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawStuff();
  drawEssentials();
  drawAll();
  drawMenus();
  if (multi < 1) {
    cash += 1;
  }
  if (multi >= 1) {
    cash += 1 * multi * 2;
  }
  saveGame();
}
