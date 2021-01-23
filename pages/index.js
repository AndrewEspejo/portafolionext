import Banner from '../components/Banner';
import Header from '../components/Header';
import { Projects } from '../components/projects/Projects';

import Stack from '../components/Stack';

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Banner />
      <Stack />
      <Projects />
    </div>
  );
}
