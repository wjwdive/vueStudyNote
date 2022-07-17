# 插槽
## 1.作用，让父组件可以向子组件指定位置插入html结构，也是组件间的一种通信方式，适用于父组件--->子组件的数据流向
## 2.分类，默认插槽、具名插槽、作用域插槽
## 3.使用方式：
    <br/>
    1.默认插槽
    ```
    <!-- 父组件中 -->
    <Category>
        html结构
    </Category>
   <!-- 子组件中 -->
    <template>
        <div>
            <slot>插槽的默认内容</slot>
        </div>
    </template>
    ```
    <br/>
    2.具名插槽
    ```
    <!-- 父组件中 -->
    <Category>
        <template slot="center">
            <!-- 自定义插槽 -->
            <slot>插槽内容</slot>
        </template>

        <template slot="footer">
            <!-- 自定义插槽 -->
            <slot>插槽内容</slot>
        </template>

    </Category>
    <!-- 子组件中 -->
    <template>
        <div>
            <slot name="center">插槽的默认内容</slot>
            <slot name="footer">插槽的默认内容</slot>
        </div>
    </template>

    ```
<br/>
    3.作用域插槽
    <br />
    1.理解： 数据在组件自身，单根据数据生成的结构需要组件的使用者决定，
    ```
    <!-- 父组件中 -->
    <Category>
        <template scope="{info, hello}" >
            <!-- 自定义插槽 -->
            {{info}}
            {{hello}}
        </template>


    </Category>
    <!-- 子组件中 -->
    <template>
        <div>
            <slot :info="info" :hello="hello">插槽的内容</slot>

        </div>
    </template>

    ```

