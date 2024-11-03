import ShuiButton from './index.vue'
ShuiButton.install = (app: any) => {
    app.component(ShuiButton.name!, ShuiButton)
}

export default ShuiButton

export {
    ShuiButton
}