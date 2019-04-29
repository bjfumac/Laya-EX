# Laya多语言模块，这是魔改版，原版不能在Laya中使用
## 加载多语言包
```javascript
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
```
## 调用多语言文本
```javascript
const str = i18next.t('key');
```
## 其它用法
https://github.com/i18next/i18next