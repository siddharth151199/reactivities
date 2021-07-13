export interface Duck {
    name: string,
    numLegs: number;
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}
const duck2:Duck = {
    name: 'badak',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound("quak")

export const ducks = [duck1, duck2]