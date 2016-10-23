import React, { Component } from 'react'
import { browserHistory } from 'react-router'


import "assets/styles/authorpage.scss"

// material-ui
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';	
import Divider from 'material-ui/Divider';	
import GoBackIcon from 'material-ui/svg-icons/navigation/arrow-back';


import BookItem from 'components/Books/BookItem'

export default class AuthorDetailsPage extends Component {
	render() {
		return (
			<div class="authorpage__wrapper">
				<Paper className="authorpage__paper" zDepth={1}>
					
					<section class="authorpage__detailscontainer">
						<div class="authorpage__goback">
							<IconButton onClick={() => browserHistory['push']('/') }>
								<GoBackIcon color="#555" />
							</IconButton>
						</div>
						
						
						<div 
							class="authorpage__details-photo" 
							style={{ backgroundImage: "url(http://www.vokrug.tv/pic/person/0/d/4/c/medium_0d4c64f087951f0f9d0dbd692941b448.jpeg)" }} 
						/>	
						
						<article class="authorpage__details-rightblock">
							<h1 class="authorpage__details-name">
								Сергей Довлатов
							</h1>
						
							<p class="authorpage__details-descr">
								Сергей Довлатов родился 3 сентября 1941 года в Уфе, в семье театрального режиссёра[5] Доната Исааковича Мечика (1909—1995), еврея, и актрисы, а впоследствии корректора Норы Степановны Довлатовой (1908—1999), армянки. В столицу Башкирской АССР его родители были эвакуированы с началом войны и жили три года в доме сотрудников НКВД по ул. Гоголя, 56.
						
								С 1944 года жил в Ленинграде. В 1959 году поступил на отделение финского языка филологического факультета Ленинградского государственного университета и учился там два с половиной года[6]. Общался с ленинградскими поэтами Евгением Рейном[7], Анатолием Найманом, Иосифом Бродским и писателем Сергеем Вольфом («Невидимая книга»), художником Александром Неждановым. Из университета был исключён за неуспеваемость.
						
								Служил три года во внутренних войсках в охране исправительных колоний в Республике Коми (посёлок Чиньяворык). По воспоминаниям Бродского[8], Довлатов вернулся из армии «как Толстой из Крыма, со свитком рассказов и некоторой ошеломлённостью во взгляде».
						
								Довлатов поступил на факультет журналистики ЛГУ, работал в студенческой многотиражке Ленинградского кораблестроительного института «За кадры верфям», писал рассказы.
								После института работал в газете «Знамя прогресса» ЛОМО[9][10].
							</p>
						</article>
					</section>

					<Divider style={{ margin: '40px 0' }} />

					<section>
						<h2 class="authorpage__authorbooks-title">Книги этого автора:</h2>

						<div class="authorpage__authorbooks-container">
	
							
	
						</div>



					</section>

				</Paper>
			</div>
		)
	}
}