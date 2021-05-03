const list = [
    "Aerial Trimly Trout",
    "Aerial Trimly Tutor",
    "Aerator Limit Truly",
    "Airmail Otter Truly",
    "Airmail Torte Truly",
    "Marital Oriel Rutty",
    "Martial Oriel Rutty",
    "Lariat Miler Tryout",
    "Lariat Outer Trimly",
    "Lariat Route Trimly",
    "Lariat Outre Trimly",
    "Lariat Retry Ultimo",
    "Lariat Terry Ultimo",
    "Atrial Miler Tryout",
    "Atrial Outer Trimly",
    "Atrial Route Trimly",
    "Atrial Outre Trimly",
    "Atrial Retry Ultimo",
    "Atrial Terry Ultimo",
    "Maria Tiller Tryout",
    "Atria Miller Tryout",
    "Atria Motlier Truly",
    "Atria Ruttier Molly",
    "Tiara Miller Tryout",
    "Tiara Motlier Truly",
    "Tiara Ruttier Molly",
    "Aurally Trite Timor",
    "Allay Ruttier Timor",
    "Allay Retro Tritium",
    "Alarm Retro Utility",
    "Malta Error Utility",
    "Altar Limier Tryout",
    "Altar Oriel Yttrium",
    "Aural Tritely Timor",
    "Amatory Uteri Trill",
    "Aurora Title Trimly",
    "Aorta Limiter Truly",
    "Array Litter Ultimo",
    "Array Title Turmoil",
    "Array Timeout Trill",
    "Airtime Rally Trout",
    "Airtime Rally Tutor",
    "Imitate Ultra Lorry",
    "Airier Rattly Moult",
    "Airier Tartly Moult",
    "Email Traitor Truly",
    "Loamier Trial Rutty",
    "Loamier Trail Rutty",
    "Loamier Trait Truly",
    "Mailer Tailor Rutty",
    "Mailer Trial Tryout",
    "Mailer Trail Tryout",
    "Maltier Riyal Trout",
    "Maltier Riyal Tutor",
    "Maltier Ratio Truly",
    "Retrial Laity Tumor",
    "Retrial Italy Tumor",
    "Trailer Laity Tumor",
    "Trailer Italy Tumor",
    "Retail Rarity Moult",
    "Retail Tarry Ultimo",
    "Irately Trial Tumor",
    "Irately Trail Tumor",
    "Irately Atilt Rumor",
    "Irately Ultra Timor",
    "Reality Trial Tumor",
    "Reality Trail Tumor",
    "Reality Atilt Rumor",
    "Reality Ultra Timor",
    "Uremia Trait Trolly",
    "Tarrier Laity Moult",
    "Tarrier Italy Moult",
    "Rattier Riyal Moult",
    "Irate Atrium Trolly",
    "Armlet Airily Trout",
    "Armlet Airily Tutor",
    "Realtor Ratty Ilium",
    "Realtor Tarty Ilium",
    "Rarely Trait Ultimo",
    "Alter Rarity Ultimo",
    "Alter Royal Tritium",
    "Alter Armor Utility",
    "Alert Rarity Ultimo",
    "Alert Royal Tritium",
    "Alert Armor Utility",
    "Later Rarity Ultimo",
    "Later Royal Tritium",
    "Later Armor Utility",
    "Rattle Airily Tumor",
    "Rattle Rotary Ilium",
    "Latter Airily Tumor",
    "Latter Rotary Ilium",
    "Realty Ritual Timor",
    "Layer Titular Timor",
    "Layer Trait Turmoil",
    "Relay Titular Timor",
    "Relay Trait Turmoil",
    "Early Titular Timor",
    "Early Trait Turmoil",
    "Tattle Airily Rumor",
    "Roarer Tautly Limit",
    "Orate Ritual Trimly",
    "Orate Rally Tritium",
    "Terra Laity Turmoil",
    "Terra Italy Turmoil",
    "Terra Alloy Tritium",
    "Terra Loyal Tritium",
    "Terra Moral Utility",
    "Terra Molar Utility",
    "Rater Laity Turmoil",
    "Rater Italy Turmoil",
    "Rater Alloy Tritium",
    "Rater Loyal Tritium",
    "Rater Moral Utility",
    "Rater Molar Utility",
    "Ratter Airily Moult",
    "Ratter Riyal Ultimo",
    "Tarter Airily Moult",
    "Tarter Riyal Ultimo",
    "Artery Trial Ultimo",
    "Artery Trail Ultimo",
    "Tater Riyal Turmoil",
    "Tetra Riyal Turmoil",
    "Treat Riyal Turmoil",
    "Teary Trial Turmoil",
    "Teary Trail Turmoil",
    "Airily Mortal Utter",
    "Airily Mural Totter",
    "Maillot Tarry Uteri",
    "Tailor Riyal Mutter",
    "Trial Loamy Ruttier",
    "Trial Armoury Title",
    "Trial Amour Tritely",
    "Trail Loamy Ruttier",
    "Trail Armoury Title",
    "Trail Amour Tritely",
    "Titular Riyal Metro",
    "Titular Loamy Trier",
    "Titular Royal Timer",
    "Titular Royal Merit",
    "Titular Royal Remit",
    "Titular Royal Miter",
    "Titular Royal Mitre",
    "Titular Mayor Tiler",
    "Titular Mayor Relit",
    "Titular Mayor Liter",
    "Titular Mayor Litre",
    "Titular Moray Tiler",
    "Titular Moray Relit",
    "Titular Moray Liter",
    "Titular Moray Litre",
    "Ritual Laity Tremor",
    "Ritual Italy Tremor",
    "Ritual Ratio Termly",
    "Ritual Ratio Myrtle",
    "Ritual Rarity Motel",
    "Ritual Loamy Triter",
    "Ritual Malty Rioter",
    "Ritual Rattly Moire",
    "Ritual Tartly Moire",
    "Ritual Armory Title",
    "Ritual Mayor Litter",
    "Ritual Moray Litter",
    "Ritual Marry Toilet",
    "Ritual Tarry Motile",
    "Riyal Mulatto Trier",
    "Riyal Armour Tittle",
    "Atilt Armoury Tiler",
    "Atilt Armoury Relit",
    "Atilt Armoury Liter",
    "Atilt Armoury Litre",
    "Atilt Marry Outlier",
    "Laity Traitor Lemur",
    "Laity Moral Ruttier",
    "Laity Molar Ruttier",
    "Laity Armour Litter",
    "Italy Traitor Lemur",
    "Italy Moral Ruttier",
    "Italy Molar Ruttier",
    "Italy Armour Litter",
    "Atrium Orally Trite",
    "Atrium Alloy Triter",
    "Atrium Loyal Triter",
    "Atrium Tally Rioter",
    "Atrium Royal Litter",
    "Atrium Rattly Oriel",
    "Atrium Tartly Oriel",
    "Ratio Rarity Mullet",
    "Ratio Mural Tritely",
    "Rarity Mural Toilet",
    "Rarity Ultra Motile",
    "Rarity Amour Little",
    "Trait Morally Uteri"
] // 193 anagrams
const rando = n => Math.floor((Math.random() * n));
let wheelCount = 0;
let secret = true;
let latin = 0;
let targetSpan;


document.addEventListener("drag", (event) => {
    event.preventDefault();
})

window.addEventListener("wheel", e => {
    if (wheelCount <= 10) {
        e.preventDefault()
    }
}, {passive: false})

onwheel = function () {
    let anagram = document.getElementById("anagram");
    let title = document.getElementById("title1");
    title.innerHTML = "<del>The Literary Mutilator</del>";
    title.className = "small";
    let rand = rando(193);
    anagram.textContent = "The " + list[rand];
    anagram.style.color = newHexColor();
    wheelCount++;
}

onscroll = function (event) {
    if (wheelCount <= 10) {
        event.preventDefault();
    } else if (secret) {
        document.getElementById("latinater").classList.replace("invisible", "visible")
        secret = false;
    }
}
document.addEventListener("dragstart", function (event) {
    targetSpan = event.target;
    targetSpan.classList.add("bg-warning")
    event.dataTransfer.setData("text/plain", event.target.innerText)
}, false);

document.addEventListener("dragend", event => targetSpan.classList.remove("bg-warning"));

function dragOver(event) {
    event.preventDefault();
    event.target.classList.replace("btn-outline-info", "btn-info");
}

function dragLeave(event) {
    event.preventDefault();
    event.target.classList.replace("btn-info", "btn-outline-info");
}

function onDrop(event) {
    // targetSpan.classList.remove("bg-warning");
    event.preventDefault();
    event.target.classList.replace("btn-info", "btn-outline-info");
    let selection = event.dataTransfer.getData("text/plain");
    let replacement;
    if (event.target.id === "rearrange") {
        replacement = shuffleArray(selection);
    } else if (event.target.id === "rot13") {
        replacement = rot13(selection);
    }
    for (const span of document.getElementsByTagName("span")) {
        if (span.innerText.match(selection)) {
            span.innerText = replacement;
            span.style.color = newHexColor();
            return;
        }
    }
}

function newHexColor() {
    let red = rando(256);
    let green = rando(256);
    let blue = rando(256);
    return `#${decToHex(red)}${decToHex(green)}${decToHex(blue)}`;
}

function decToHex(num) {
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function latinate() {
    let rand = rando(20)+1;
    let latin = "";
    fetch(`https://jsonplaceholder.typicode.com/posts/${rand}`)
        .then((response) => response.json())
        .then((json) => {
            latin = json.body.replace("\n", ", ");
            latin = latin.charAt(0).toUpperCase() + latin.substring(1);
            appendLatinChild(latin);
        });
}

function appendLatinChild(string) {
    let node = document.getElementById("latin")
    let child = document.createElement("span", )
    child.draggable = true;
    child.appendChild(document.createTextNode(string));
    node.appendChild(child);
    node.append(document.createTextNode(". "));
    window.scrollTo(0,document.body.scrollHeight);
    latin++;
    if (latin > 8) {
        document.getElementById("latinater").setAttribute("disabled", "true");
        document.getElementById("latinater").innerText = "That's enough Latin."
    }
}

// I stole these from StackOverflow
function shuffleArray(string) {
    let array = string.split(" ");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join(" ");
}

function rot13(str) {
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let index = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}
