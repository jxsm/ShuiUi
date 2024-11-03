declare module 'vue'{
    export interface GlobalComponents{
        ShuiButton:typeof import('shui-ui')["ShuiButton"]
    }
}