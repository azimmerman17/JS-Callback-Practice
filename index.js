
function bkgd(url,left, bottom, width,height) {
    for (let h = 0; h < height; h++) {
        for (let w=0; w < width; w++) {
            let object = move(newImage(url)).to(left + w * 100, bottom + h *100); 
       }
    };

}

if(window.innerHeight*.6 > 700) {
    grassHieght = window.innerHeight*.6;
} else {grassHieght = 700};
skyHeight = window.innerHeight - grassHieght;

bkgd('assets/grass.png', 0,0, window.innerWidth/100, grassHieght/100);
bkgd('assets/sky.png', 0, grassHieght, window.innerWidth/100, skyHeight/100 );


const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = `assets/green-character/static.gif`
    }
    if(direction === 'west'){
        character.src = `assets/green-character/west.gif`
    }
    if(direction === 'north'){
        character.src = `assets/green-character/north.gif`
    }
    if(direction === 'east'){
        character.src = `assets/green-character/east.gif`
    }
    if(direction === 'south'){
        character.src = `assets/green-character/south.gif`
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
