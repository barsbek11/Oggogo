import './resultGame.scss'
export const ResultGame = () => {
	return (
		<div className='result-wrapper'>
			<img
				src='https://media.giphy.com/media/zhS4PEVVuFnbG718kV/giphy.gif'
				alt='done'
			/>
			<h3>
				вы ответили правельно на <strong style={{ color: 'rgb' }}>3</strong> из{' '}
				<strong>5</strong> вопросов
			</h3>
			<button>Пройти тест заново</button>
		</div>
	)
}
