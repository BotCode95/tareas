import { Grid } from '@mui/material'
import './App.css'
import { Tareas } from './components/tareas/Tareas'

function App() {
	return (
		<Grid container spacing={2} style={{ height: '100vh' }}>
			<Grid
				item
				xs={4}
				style={{ backgroundColor: '#00a1e8', height: '100%' }}
			></Grid>
			<Grid item xs={4}>
				<Tareas />
			</Grid>
			<Grid
				item
				xs={4}
				style={{ backgroundColor: '#00a1e8', height: '100%' }}
			></Grid>
		</Grid>
	)
}

export default App
