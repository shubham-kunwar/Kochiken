import mergeImages from 'merge-images';
import { saveAs } from "file-saver";

export const uniquebodyOption = [
    { value: "alien", label: "alien" },
    { value: "cyborg", label: "cyborg" },
    { value: "enforcer", label: "enforcer" },
    { value: "hitman", label: "hitman" },
    { value: "detective", label: "detective" },
    { value: "fireman", label: "fireman" },
    { value: "k9", label: "k9" },
    { value: "ranger", label: "ranger" },
    { value: "zombie", label: "zombie" },
];
export const backgroundOption = [
    { value: "cemetary", label: "Cemetary" },
    { value: "surveillanceroom", label: "Surveillance Room" },
    { value: "crimeScene", label: "crimeScene" },
    { value: "drugRoom", label: "Drug Den Room" },
    { value: "firingrange", label: "firingrange" },
   
    { value: "dogpound", label: "Dog pound" },
    { value: "firestation", label: "Fire Station" },
    { value: "policestation", label: "Police station" },
    { value: "futuristicpolicestation", label: "Futuristic police station" },
    { value: "privateinvestigatorroom", label: "Investigator room" },
    
    { value: "spacestation", label: "Space station" },
    { value: "weaponroom", label: "Weapon room" },
];
export const hatOption = [
    { value: "army", label: "Army" },
    { value: "genaral", label: "General" },
    { value: "royalhat", label: "Royal hat" },
    { value: "sherrif", label: "Sherrif" },
    { value: "swat", label: "swat" },
    
    
];

export const accessoriesOption = [
    { value: "none", label: "none" },
    { value: "saber", label: "Saber" },   
    { value: "cumgun", label: "Cumgun" },
    { value: "guns", label: "Gun" },    
    { value: "mjolnir", label: "Mjolnir" },
    { value: "shield", label: "Sheild" },
  
    { value: "taser", label: "Taser" },
    { value: "vr", label: "Vr" },
];

export const faceOption = [
    { value: "snoop", label: "Snoop Dog" },
    { value: "lilbaby", label: "Lil Baby" },
   
    { value: "angry", label: "Angry" },
    { value: "bored", label: "Bored" },
    { value: "happy", label: "Happy" },
    { value: "sad", label: "Sad" },
    { value: "sleepy", label: "Sleepy" },   
    { value: "female1", label: "Female 1" },   
    { value: "female2", label: "Female 2" },   
];

export const bodyOption = [
    { value: "army", label: "Army" },
    { value: "general", label: "General" },
    { value: "royalgaurd", label: "Royal Gaurd" },
    { value: "sherrif", label: "Sherrif" },
    { value: "swat", label: "Swat" }, 
];


export const uniqueOption = [
    { value: "none", label: "none" },
    { value: "lasereyes", label: "Laser Eyes" },
   
    { value: "leftroboarm", label: "Left Robo Arm" },
    { value: "rightroboarm", label: "Right Robo Arm" },
    { value: "roboeyes", label: "Robo Eye" },
  
];



export function handleGenerate() {

    const randombackgroundOption = backgroundOption[Math.floor(Math.random() * backgroundOption.length)].value
    const randomuniqueOption = uniqueOption[Math.floor(Math.random() * uniqueOption.length)].value
    const randomhatOption = hatOption[Math.floor(Math.random() * hatOption.length)].value
    const randomaccessoriesOption = accessoriesOption[Math.floor(Math.random() * accessoriesOption.length)].value
    const randomfaceOption = faceOption[Math.floor(Math.random() * faceOption.length)].value
    const randombodyOption = bodyOption[Math.floor(Math.random() * bodyOption.length)].value


    document.getElementById("changebgImage").src = `/config/layers/bgImage/${randombackgroundOption}.png`
    document.getElementById("changefaceImage").src = `/config/layers/faces/${randomfaceOption}.png`
    document.getElementById("changebodyImage").src = `/config/layers/body/${randombodyOption}.png`
    document.getElementById("changeuniqueaddonImage").src = `/config/layers/xtras/${randomuniqueOption}.png`
    document.getElementById("changeaccessoriesImage").src = `/config/layers/accessories/${randomaccessoriesOption}.png`
    document.getElementById("changehatImage").src = `/config/layers/hats/${randomhatOption}.png`



    document.getElementById("bgImage").value = randombackgroundOption
    document.getElementById("faces").value = randomfaceOption
    document.getElementById("body").value = randombodyOption
    document.getElementById("xtras").value = randomuniqueOption
    document.getElementById("accessories").value = randomaccessoriesOption
    document.getElementById("hats").value = randomhatOption





}


export function downloadImage() {
    const image1 = document.getElementById("changebgImage").src
    const image2 = document.getElementById("changefaceImage").src
    const image3 = document.getElementById("changebodyImage").src
    const image4 = document.getElementById("changeuniqueaddonImage").src
    const image5 = document.getElementById("changeaccessoriesImage").src
    const image6 = document.getElementById("changehatImage").src

    mergeImages([image1, image2, image3, image4, image5, image6])
        .then(b64 => saveAs(b64, "myAvatar"));

}
