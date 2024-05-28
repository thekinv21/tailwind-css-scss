import React from 'react'
import ReactDOM from 'react-dom/client'

import { Dashboar } from './screens/dashboard'
import './style/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Dashboar />
	</React.StrictMode>
)
