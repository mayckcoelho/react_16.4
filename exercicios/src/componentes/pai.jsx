import React from 'react'
import Filho from './filho'

import { childrenWithProps } from '../utils/utils'

export default props => (
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome='Pedro' sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome='Carla'/>
            {/* 
                Ordem de atribuição das propriedades afetam se o atributo sobrescreverá o operador spread
                <Filho nome='Carla' {...props} />
            */}
            {/* 
                React.cloneElement espera receber apenas um elemento 
                {React.cloneElement(props.children, { ...props, ...props.children.props })}
            */}
            {childrenWithProps(props)}
        </ul>
    </div>
)

// Ordem de atribuição das propriedades afetam se o atributo sobrescreverá o operador spread
// <Filho nome='Carla' {...props} />