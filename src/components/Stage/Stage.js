import React from 'react'
import classNames from 'classnames'
import { array, arrayOf, bool, string } from 'prop-types'

import FarmhandContext from '../../Farmhand.context'
import Field from '../Field'
import Home from '../Home'
import CowPen from '../CowPen'
import Shop from '../Shop'
import Kitchen from '../Kitchen'
import { stageFocusType } from '../../enums'

import './Stage.sass'

export const Stage = ({
  field,
  isMenuOpen,
  playerInventory,
  stageFocus,
  viewTitle,
}) => (
  <div className={classNames('Stage', { 'menu-closed': !isMenuOpen })}>
    <h2 className="view-title">{viewTitle}</h2>
    {stageFocus === stageFocusType.HOME && <Home />}
    {stageFocus === stageFocusType.FIELD && (
      <Field
        {...{
          columns: field[0].length,
          rows: field.length,
        }}
      />
    )}
    {stageFocus === stageFocusType.SHOP && <Shop />}
    {stageFocus === stageFocusType.COW_PEN && <CowPen />}
    {stageFocus === stageFocusType.KITCHEN && <Kitchen />}
  </div>
)

Stage.propTypes = {
  field: arrayOf(array).isRequired,
  isMenuOpen: bool.isRequired,
  playerInventory: array.isRequired,
  stageFocus: string.isRequired,
  viewTitle: string.isRequired,
}

export default function Consumer(props) {
  return (
    <FarmhandContext.Consumer>
      {({ gameState, handlers }) => (
        <Stage {...{ ...gameState, ...handlers, ...props }} />
      )}
    </FarmhandContext.Consumer>
  )
}
