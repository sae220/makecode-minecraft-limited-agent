//% color="#D83B01" weight=66
namespace limitedAgent {
    //% block="Agent move forward by $blocks"
    //% blocks.defl=1
    export function moveForward(blocks: number) {
        agent.move(FORWARD, blocks)
    }

    //% block="Agent move $direction by 1"
    //% direction.shadow=minecraftAgentSixDirection direction.defl=SixDirection.Forward
    export function moveOne(direction: number) {
        agent.move(direction, 1)
    }

    //% block="Agent place forward"
    export function placeForward() {
        agent.place(FORWARD)
    }
}