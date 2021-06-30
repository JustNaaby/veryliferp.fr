import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Des fonctionnalités innédites',
    Svg: require('../../static/img/function.svg').default,
    description: (
      <>
        Nous avons un large panel de fonctionnalités offrant une multitude de possibilités. En plus des addons
        achetés, nous avons implémenté des petites fonctionnalités qui rendent le gameplay beaucoup plus intéressant.
      </>
    ),
  },
  {
    title: 'RP pour tous',
    Svg: require('../../static/img/roleplay.svg').default,
    description: (
      <>
        Basé sur le respect des autres, l'écoute et la coopération, le serveur s'oriente vers un bon RP permettant à
         tous de profiter de la meilleure expérience possible.
      </>
    ),
  },
  {
    title: 'Une administration efficace',
    Svg: require('../../static/img/admin.svg').default,
    description: (
      <>
        Tout le staff est là pour vous aider en cas de difficulté mais aussi faire preuve d'une impartialité
        et d'une justesse indiscutable.
      </>
    ),
    
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
