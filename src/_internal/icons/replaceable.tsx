import { upperFirst } from 'lodash'
import { defineComponent } from 'vue'
import { Icons } from '../../config-provider'
import { useConfig } from '../../_mixins'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function replaceable (name: keyof Icons, icon: JSX.Element) {
  return defineComponent({
    name: upperFirst(name),
    setup () {
      const { NConfigProvider } = useConfig()
      return () => {
        const iconOverride = NConfigProvider?.mergedIcons?.[name]
        return iconOverride ? iconOverride() : icon
      }
    }
  })
}