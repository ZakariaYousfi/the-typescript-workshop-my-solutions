
interface IPhone {
    powerButton: boolean;
    mic: boolean;
    speaker: boolean;
    serialNumber: string;
    powerOn: boolean;
    restart: boolean;
    togglePower:() => void;
    reboot: () => void;
}

class Phone implements IPhone{
    powerButton: boolean;
    mic: boolean;
    speaker: boolean;
    serialNumber: string;
    powerOn: boolean = false;
    restart: boolean = false;

    constructor(powerButton:boolean, mic:boolean, speaker: boolean, serialNumber: string) {
        this.powerButton = powerButton;
        this.mic = mic;
        this.speaker = speaker;
        this.serialNumber = serialNumber
    }

    togglePower(): void {
        this.powerOn ? this.powerOn = false : this.powerOn = true
    }

    reboot(): void {
        this.restart = true
    }
}

class Smart extends Phone {
    touchScreen: boolean = true;
    fourG: boolean = true

    constructor(serial: string) {
        super(true,true,true,serial)
    }

    playVideo(fileName: string) : boolean {
        return true
    }
}

class Dumb extends Phone {
    dialPad: boolean = true;
    threeG : boolean = true

    constructor(serial: string) {
        super(true,true,true,serial)
    }

    NumberToLetter (number: number) : string{
        const letter = ['a','b','c','d']
        return letter[number]
    }
}

const smartPhone = new Smart('12345678')
const standardPhone = new Dumb('67890')


console.log(smartPhone.playVideo('videoOne'))
console.log(standardPhone.NumberToLetter(3))

console.log(smartPhone)
console.log(standardPhone)