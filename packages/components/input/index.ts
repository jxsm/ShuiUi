import ShuiInput from "./index.vue"

ShuiInput.install = (app: any) => {
    app.component(ShuiInput.name!, ShuiInput)
}

export default ShuiInput