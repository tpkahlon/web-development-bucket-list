import Head from 'next/head';
import { Duration } from '@icholy/duration';
import dayjs from 'dayjs';
import data from '../public/paths.json';

export default function Home() {
  let listing = null;
  let totalDuration = null;
  if (data !== null) {
    listing = data.map(({ name, duration, source }, index) => (
      <a
        key={index}
        href={`https://linkedin.com${source}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <h2>{name}</h2>
        <small>{duration}</small>
      </a>
    ));
    totalDuration = data.reduce((i, j) => {
      const temp = new Duration(j.duration);
      return i + temp._milliseconds;
    }, 0);
    totalDuration = new Duration(totalDuration).toString();
  }
  return (
    <>
      <Head>
        <title>Web Development - Bucket List</title>
        <link
          rel='icon'
          href='https://www.flaticon.com/svg/static/icons/svg/541/541509.svg'
        />
      </Head>
      <main>
        <header>
          <h1>Web Development - Bucket List</h1>
          <small>{totalDuration}</small>
        </header>
        <footer>{listing}</footer>
        <aside>
          <span>Helpers:</span>
          <a
            href='https://roadmap.sh/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Maps
          </a>
          <a
            href='https://freecodecamp.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            freeCodeCamp
          </a>
          <a
            href='https://frontendmasters.com/learn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            FrontEndMasters
          </a>
        </aside>
      </main>
    </>
  );
}
