import React from 'react';
import './Footer.css';
import example from '../../assets/card.svg'

function Footer() {
  return (
    <div className="Footer">
			<section className="Footer__info">
				<section className="info__paragraph">
					<h3 className='paragraph__title'>Lorem</h3>
					<p className='paragraph__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt iste ad, esse illum quibusdam ea magni debitis accusamus voluptatibus reiciendis nobis maiores, excepturi incidunt cupiditate officia rerum vel iusto?</p>
				</section>
				<section className="info__list">
					<h3 className='paragraph__title'>Lorem</h3>
					<ul className='paragraph__footer_list'>
						<li className='footer_list__item'>Lorem</li>
						<li className='footer_list__item'>Lorem</li>
						<li className='footer_list__item'>Lorem</li>
					</ul>
				</section>
			</section>
			<div className="Footer__social_media">
				<img src={example} alt="" className="example" /><img src={example} alt="" className="example" /><img src={example} alt="" className="example" />
			</div>
			<a href="http://www.freepik.com" className='ref_link'>Vectors Designed by Freepik</a>
    </div>
  );
}

export { Footer };
