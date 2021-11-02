import { App } from 'vue'
import 'element-plus/dist/index.css';
import { Search, Expand } from '@element-plus/icons'
import {
    ElButton,
    ElIcon,
    ElCheckbox,
    ElForm,
    ElFormItem,
    ElInput,
    ElLink,
    ElRadio,
    ElTabPane,
    ElTabs,
    ElBacktop,
    ElPagination,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElEmpty,
    ElConfigProvider,
    ElCard,
    ElMessage,
} from 'element-plus/lib/components'


const components = [
    ElConfigProvider,
    ElCard,
    ElPagination,
    ElBacktop,
    Search,
    Expand,
    ElButton,
    ElForm,
    ElIcon,
    ElFormItem,
    ElInput,
    ElRadio,
    ElTabs,
    ElTabPane,
    ElCheckbox,
    ElLink,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElEmpty
]

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component)
    }
    app.use(ElMessage);
}