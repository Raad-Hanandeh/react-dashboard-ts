import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'

import Header from './header'

const Layout = ({children}:React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(titlrprops)=><ThemedTitleV2 {...titlrprops} text="refine"/>}
    >
        {children}
      
    </ThemedLayoutV2>
  )
}

export default Layout