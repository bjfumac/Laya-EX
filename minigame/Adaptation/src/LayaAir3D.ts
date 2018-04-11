// 程序入口
class LayaAir3D {
    constructor() {
        //初始化微信小游戏
        Laya.MiniAdpter.init();
        //初始化引擎
        Laya3D.init(0, 0, true);
        
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        
        this.init();
    }

    private init():void{
        this.initFont();
        setTimeout(()=> {
            this.miniGameFix();
        }, 1000);
    }

    //字体预加载，请选择生僻字（小游戏不需要）。
    private initFont():void{
        let txt = new Laya.Text();
        txt.font = "num";
        txt.text = "鴴";
    }

    //测试用例
    private miniGameFix():void{
        this.miniGameFont();
        this.miniGameSound();
        this.miniGameDomain();        
    }

    //判断是否为小游戏运行环境，用于一套代码同时适配小游戏与非小游戏项目。
    private isMiniGame():boolean{
        return (Laya.Browser.window.wx != undefined)?true:false;
    }

    //小游戏ttf字体适配，同时兼容非小游戏，避免两套代码。注意需要在真机看效果。
    private miniGameFont():void{
        let fontName = "num";
        if(this.isMiniGame()){
            let font = Laya.Browser.window.wx.loadFont("res/font/num.ttf");
            if(font != null){
                fontName = font;
            }
         }
        let txt = new Laya.Text();
        txt.font = fontName;
        txt.color = "#ffffff";
        txt.fontSize = 40;
        txt.text="12345678";
        Laya.stage.addChild(txt);
    }

    //小游戏声音适配，不需要进行Loader.load预加载，会自动缓存。真实项目请选择网络加载，不要把资源放到4m包。
    private miniGameSound():void{
        if(this.isMiniGame()){
            //会出现警告，请忽略。
            Laya.SoundManager.playSound("res/sound/fall.mp3");
            Laya.SoundManager.playSound("res/sound/fall.mp3");
            Laya.SoundManager.playSound("res/sound/fall.mp3");
        }
    }

    //小游戏主域与数据域数据交换，注意需要在真机看效果。相关配置见https://developers.weixin.qq.com/minigame/dev/tutorial/open-ability/open-data.html?t=2018329
    private miniGameDomain():void{
        if(this.isMiniGame()){
            let openDataContext = Laya.Browser.window.wx.getOpenDataContext()
                openDataContext.postMessage({
                text: 'hello',
                year: (new Date()).getFullYear()
            })
            setTimeout(()=> {
                let openDataContext = Laya.Browser.window.wx.getOpenDataContext()
                let sharedCanvas = openDataContext.canvas
                var texture = new Laya.Texture(sharedCanvas);
                var sharedSprite = new Laya.Sprite();
                sharedSprite.graphics.drawTexture(texture,0,0,texture.width,texture.height);
                Laya.stage.addChild(sharedSprite);
            }, 2000);
        }
    }
}
new LayaAir3D();