# Laya多语言模块
## 加载多语言包
i18next.init(
    {
        lng: 'zh-CN',
        resources:{
        'en-US': {translation: Laya.loader.getRes('res/lang/en-US.json')},
        'zh-CN': {translation: Laya.loader.getRes('res/lang/zh-CN.json')},
        }
    }
).then(()=>{
    
});

## 调用多语言文本
const str = i18next.t('key');