function calcularSpellpower() {
    const level = document.getElementById('level').value;
    const vocacao = document.getElementById('vocacao').value;
    const magicLevel = document.getElementById('magicLevel').value;
    const strength = document.getElementById('strength').value;
    const dexterity = document.getElementById('dexterity').value;
    const intelligence = document.getElementById('intelligence').value;

    let magicLevelMultiplier = 1;

    switch (vocacao) {
        case 'knight':
            magicLevelMultiplier = 6;
            break;
        case 'archer':
            magicLevelMultiplier = 1.8;
            break;
        case 'archer-arcane':
             magicLevelMultiplier = 2.2;
            break;
        case 'mage':
        case 'druid':
            magicLevelMultiplier = 0.85;
            break;
        // Caso 'none' ou outros, use o valor padrão 1
    }

    const magicLevelPower = Math.pow(magicLevel, 7/5) * magicLevelMultiplier;
    const spellpower = (level * 1.3) + magicLevelPower + (parseInt(strength)*1.20) + (parseInt(dexterity)*0.75) + parseInt(intelligence);

    console.log(`magicLevelPower: ${magicLevelPower}`);
    console.log(`magicLevel: ${magicLevel}`);

    document.getElementById('spellPowerResult').innerHTML = `Spellpower: ${spellpower.toFixed(2)}`;
}

//TODO
function calcularDano() {
    const dexterity = document.getElementById('dexterity').value;
    const precise = document.getElementById('precise').checked;
    const distanceDamage = document.getElementById('distanceDamage').value;
    const distanceDamageMax = document.getElementById('distanceDamageMax').value;
    const spellpower = document.getElementById('spellpower').value;

    // Ajuste conforme necessário
    const dexterityMultiplier = precise ? 1.2 : 1;

    // Cálculo do dano de distância
    const minDistanceDamage = dexterity * 0.80 * dexterityMultiplier;
    const maxDistanceDamage = distanceDamageMax * (1 + (dexterity * 1.20 * dexterityMultiplier));

    // Cálculo do dano total (adapte conforme necessário)
    const totalDamage = minDistanceDamage + maxDistanceDamage + (spellpower * 0.75 * dexterityMultiplier);

    document.getElementById('damageResult').innerHTML = `Dano Total: ${totalDamage.toFixed(2)}`;
}