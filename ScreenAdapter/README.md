1. 设置static scaleMode:string="fixedauto";
2. 将AdapterScript.ts拷贝至项目的 src/scripts/
3. 在编辑模式中将AdapterScript挂载到每一个Scene根结点
4. 在布局UI时使用top、bottom、left、right属性即可，不要用x和y。