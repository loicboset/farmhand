import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import NumberFormat from 'react-number-format'
import { number } from 'prop-types'

import FarmhandContext from '../../Farmhand.context'
import { moneyString } from '../../utils'
import { LOAN_INTEREST_RATE, LOAN_GARNISHMENT_RATE } from '../../constants'

import './AccountingView.sass'

const AccountingView = ({ loanBalance }) => (
  <div className="AccountingView">
    <Card>
      <CardHeader {...{ title: `Loan Balance: ${moneyString(loanBalance)}` }} />
      <CardContent>
        <FormControl>
          <TextField
            {...{
              defaultValue: String(loanBalance),
              inputProps: {
                // https://css-tricks.com/finger-friendly-numerical-inputs-with-inputmode/
                pattern: '[0-9]*',
              },
              InputProps: {
                inputComponent: ({ inputRef, ...rest }) => (
                  <NumberFormat
                    fixedDecimalScale
                    thousandSeparator
                    isNumericString
                    {...{
                      ...rest,
                      allowNegative: false,
                      decimalScale: 2,
                      prefix: '$',
                    }}
                  />
                ),
              },
            }}
          />
        </FormControl>
        <p>
          You may take out a loan at any time. So long as you have a loan
          balance, all farm product sales are garnished by{' '}
          {LOAN_GARNISHMENT_RATE * 100}% until the loan is repaid. The loan
          interest rate is {LOAN_INTEREST_RATE * 100}% and compounds daily.
        </p>
      </CardContent>
    </Card>
  </div>
)

AccountingView.propTypes = {
  loanBalance: number.isRequired,
}

export default function Consumer(props) {
  return (
    <FarmhandContext.Consumer>
      {({ gameState, handlers }) => (
        <AccountingView {...{ ...gameState, ...handlers, ...props }} />
      )}
    </FarmhandContext.Consumer>
  )
}