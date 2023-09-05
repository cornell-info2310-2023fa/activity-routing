import Header from '../components/Header';
import DateRefresh from '../components/DateRefresh';

export default function Home() {
  return (
    <>
      <Header title="Home" />

      <DateRefresh color="deepskyblue" />
      <DateRefresh color="mediumorchid" actionText="Refresh Date"/>
      <DateRefresh color="lightsalmon" actionText="Change Date"/>
    </>
  );
}
