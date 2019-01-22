import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render( 
    <div>
        <Pai nome='Paulo' sobrenome='Silva'>
            {/* Como passar os componentes filhos */}
            <Filho nome='José' />
            <Filho nome='Augusto' />
        </Pai>
    </div>
, document.getElementById('root'))