import {Ss} from '@/components/ss/Ss'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'
import '../scss/main.scss'

const ss = new Ss('#app', {
  components: [Header, Toolbar, Formula, Table]
})

ss.render()