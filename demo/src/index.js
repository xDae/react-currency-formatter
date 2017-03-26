import React from 'react'
import {render} from 'react-dom'

import Currency from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-cformatter Demo</h1>
      <Currency
				className="prueba"
				quantity={45685}
				currency="EUR"
				locale="es_ES"
			/>

			<br/>

      <Currency
				className="prueba"
				quantity={45685}
				currency="EUR"
				locale="es_ES"
			/>

			<br/>

			<Currency
				quantity={45685}
				currency="GBP"
			/>

			<br/>

			<Currency
				quantity={45685}
				currency="USD"
			/>

			<br/>

			<Currency
				quantity={45685}
				currency="USD"
			/>

			<br/>

			<Currency
				quantity={345685}
				currency="USD"
				pattern="##,### !"
			/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
