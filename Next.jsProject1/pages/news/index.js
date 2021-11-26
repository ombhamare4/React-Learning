import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <Fragment>

      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/next-js-news">Next Js is Great Frameworks</Link></li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  )
};

export default NewsPage;