const text = document.getElementById('text')
const btn = document.getElementById('btn')

// Renk kodları için dizi oluşturuyoruz
const codesArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

//rastgele seçim yapabilmek için
const randomColorCode = () => {
    let hexCode = '#'
    for (let i = 0; i < 6; i++){
        hexCode += codesArray[Math.floor(Math.random() * codesArray.length)]
    }
    return hexCode
}

//butona tıklandığında
btn.addEventListener('click', () => {
    const colorCode = randomColorCode()
    text.innerText= colorCode
    document.body.style.backgroundColor = colorCode
})
