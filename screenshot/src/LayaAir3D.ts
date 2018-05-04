// 程序入口
class LayaAir3D {
    private scene:Laya.Scene;
    constructor() {
        //初始化引擎
        Laya3D.init(0, 0, true);

        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

        //开启统计信息
        Laya.Stat.show();

        //添加3D场景
        this.scene  = Laya.stage.addChild(new Laya.Scene()) as Laya.Scene;


        var urls = [
                "res/role_5_chaoren.lh"
            ]
        Laya.loader.create(urls,Laya.Handler.create(this,this.addModel));
    
    }

    private addModel():void{
        let assets = Laya.loader.getRes("res/role_5_chaoren.lh"); 

		this.scene.addChild(assets);
        this.screenShot();
        
    }

    private screenShot(){
        var htmlCanvas = Laya.stage.drawToCanvas(Laya.RenderState.clientWidth,Laya.RenderState.clientHeight,0,0);
        var texture = new Laya.Texture(htmlCanvas);
        var sp = new Laya.Sprite();
        sp.graphics.drawTexture(texture);
        Laya.stage.addChild(sp);
    }
}
new LayaAir3D();