# 官网 basic.css 文件说明（PC版）

##  html 写法规范

`.warpper`的宽度是`1200px`，`.container`的宽度是`1104px`，所有内容要包含在`.warpper`中，所有宽度为`1104px`的`div`加一个`.container`的类。

以下代码作为参考：

```html
<body>
	<div class="warpper">
        <header>
        	// 头部
            <nav></nav>
        </header>
        <div class="container">
            // 内容
        </div>
    </div>
</body>
```



## CSS Reset

+ `hr` ：分割线样式重置，页面所有分割线使用`hr` 



## 类的说明

+ `.button`：按钮
+ `.wave-border`：波浪边框div
+ `.fsz-24`：24px
+ `.fsz-20`：20px
+ `.fsz-18` ：18px
  `.cut-line`：短分割线 
  `.change-pages-left`：左换页图标
  `.change-pages-right`：右换页图标

##  TODO

1. nav 的  a 链接下的波浪线
2. 竖直分割线
3. arrow(用字体图标做)(暂用<代替)


