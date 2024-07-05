import {GitHubStarIcon} from '../../assets/img/iconsFooter/IconComponent/GitGubStarIcon/GitHubStar';
import {GitHubIcon} from '../../assets/img/iconsFooter/IconComponent/GitHubIcon/GitHub';
import {RedditIcon} from '../../assets/img/iconsFooter/IconComponent/RedditIcon/Reddit';
import {ProgressBar} from '../Progress/progressBar';
import style from './footer.module.sass';
export const Footer = () => (
	<div className={style.footer}>
		<div className={style.marketRating}>
			<h3>Рыночный рейтинг привлекательности</h3>
			<h2>113</h2>
		</div>

		<div className={style.progressItems}>
			<div>
				<ProgressBar targetValue={100} />
				<p>Интересуются</p>
			</div>
			<div>
				<ProgressBar targetValue={100} />
				<p>Игнорируют</p>
			</div>
		</div>

		<div className={style.underFooter}>
			<div>
				<GitHubIcon height={30} width={30} />
				<p>Подписчики GitHub: 0</p>
			</div>
			<div>
				<RedditIcon height={30} width={30} />
				<p>Подписчики Reddit: 0</p>
			</div>
			<div>
				<GitHubStarIcon height={30} width={30} />
				<p>Звезд на GitHub: 0</p>
			</div>
		</div>
	</div>
);
