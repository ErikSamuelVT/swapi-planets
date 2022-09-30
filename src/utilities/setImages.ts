export function setImage(namePlanet:string, imgs:string[]):string {
    let image:string = ""
    
    imgs.map((img:string) => {
        const nameImg:string = img.split('/')[3].split(".")[0]
        if(namePlanet === "Yavin IV"){
            image = "/src/assets/Yavin4.png"

        }else if(namePlanet === nameImg){
            image = img
        }
    })

    return image
}