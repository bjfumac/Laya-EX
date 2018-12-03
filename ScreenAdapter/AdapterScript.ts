export default class AdapterScript extends Laya.Script {
    onEnable(){
        const scene = this.owner as Laya.Scene;
        scene.size(Laya.stage.width, Laya.stage.height);
    }
}