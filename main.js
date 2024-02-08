function calcularSpellpower() {
    const level = document.getElementById('level').value;
    const vocacao = document.getElementById('vocacao').value;
    const magicLevel = document.getElementById('magicLevel').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const intelligence = document.getElementById('intelligence').value;

    let magicLevelMultiplier = 1;
    let atribute = 1;

    switch (vocacao) {
        case 'knight':
            magicLevelMultiplier = 6;
            atribute = parseInt(strength)*1.20;
            break;
        case 'archer':
            magicLevelMultiplier = 1.8;
            atribute = parseInt(dexterity)*0.75;
            break;
        case 'archer-arcane':
             magicLevelMultiplier = 2.2;
             atribute = parseInt(dexterity)*0.75;
            break;
        case 'mage':
            magicLevelMultiplier = 0.85;
            atribute = parseInt(intelligence);
        case 'druid':
            magicLevelMultiplier = 0.85;
            atribute = parseInt(intelligence);
            break;
    }

    const magicLevelPower = Math.pow(magicLevel, 7/5) * magicLevelMultiplier;
    const spellpower = (level * 1.3) + magicLevelPower + atribute;

    console.log(`magicLevelPower: ${magicLevelPower}`);
    console.log(`magicLevel: ${magicLevel}`);
    console.log(`magicLevel: ${atribute}`);

    document.getElementById('spellPowerResult').innerHTML = `Spellpower: ${spellpower.toFixed(2)}`;
}