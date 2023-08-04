multiplicador = 1;
total = 0;
while((23 * multiplicador) < 1000)
{
    total += 23 * multiplicador;

    if((23 * (multiplicador + 1)) < 1000)
    document.getElementById('multiplos').innerHTML += `${23 * multiplicador}, `
    else
    document.getElementById('multiplos').innerHTML += `${23 * multiplicador}`
    multiplicador++;
}

document.getElementById('total').innerHTML = total;