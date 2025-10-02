import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Portal Implementation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Portal implementation requires LN ERP system connection. ION API, IDM, and DOM Configuration.
      </>
    ),
  },
  {
    title: 'Portal ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ZUMConnect lets you focus on your business fulfillments from <code>Company</code> and <code>Tiers</code> data impelemntation to Orders management.
      
        Simple modules navigation makes it easy to run smooth functional operations.
      </>
    ),
  },
  {
    title: 'Infor LN Integration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extended application connection helps you publish and streamline data to communicate in the <code>storefront</code>end users.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
